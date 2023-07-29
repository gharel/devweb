"""Download all projets from CSV file"""

# %%

import argparse
import asyncio
import logging
import csv

# from pprint import pprint
from datetime import datetime
from pathlib import Path

# from urllib.parse import urlparse
from typing import Tuple, Union

from slugify import slugify

# https://stackoverflow.com/questions/43109355/logging-setlevel-is-being-ignored
logging.basicConfig(level=logging.DEBUG, format="%(levelname)s@%(lineno)i:%(message)s")
logger = logging.getLogger("downloader")


def now() -> str:
    """Returns a string for the current datetime in iso format"""
    return datetime.today().isoformat(timespec="seconds")


def load_assignments(filename: str) -> list[Tuple[str, str]]:
    """Returns a list of (name, url)"""
    logger.info("Loading '%s'...", filename)
    file = Path(filename)
    if not file.exists():
        raise FileExistsError(f"File '{file}' does not exist")

    with open(file, mode="r", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        return [(row["roster_identifier"], row["student_repository_url"]) for row in reader]


async def clone_or_pull_git(url: str, dir_name: Union[Path, str]):
    """Run git clone or pull for url"""
    if not Path(dir_name).exists():
        git_args = ["clone", url, dir_name]
        logger.info("Cloning %s to %s...", url, dir_name)
    else:
        git_args = ["-C", dir_name, "pull"]
        logger.info("Pulling %s to %s...", url, dir_name)

    logger.debug("Command = git %s", " ".join(map(str, git_args)))

    proc = await asyncio.create_subprocess_exec(
        "git", *git_args, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
    )
    stdout, stderr = await proc.communicate()

    if stdout:
        logger.info(stdout.decode().removesuffix("\n"))
    if stderr:
        logger.info(stderr.decode().removesuffix("\n"))
    if not proc.returncode:
        logger.info("%s done with code %s", dir_name, proc.returncode)
    else:
        logger.error("%s done with code %s", dir_name, proc.returncode)


async def clone_or_pull_all_groups(roster: list[Tuple[str, str]], folder_prefix):
    """Launch download for all groups"""
    runners = []
    for student, git_url in roster:
        if git_url:
            runners.append(clone_or_pull_git(git_url, Path(folder_prefix) / slugify(student)))
        else:
            logger.info("No url for student %s, skipping", student)
    logger.debug("Runners= %s", runners)
    await asyncio.gather(*runners)


# if __name__ == "__main__":
#     roster = load_assignments("bookmarks-downloader.csv")
#     # pprint(roster)
#     # task = clone_or_pull_git("https://github.com/unc-informatique/bookmarks-downloader-Nico-gnt", "rendus/test")
#     # asyncio.run(task)


#     asyncio.run(clone_or_pull_all_groups(roster))

# %%
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Git project cloner/updater")
    parser.add_argument(
        "filename",
        action="store",
        help="CSV file from GitHub Classroom with at least 'roster_identifier' and 'student_repository_url' columns",
    )
    parser.add_argument(
        "--folder",
        action="store",
        default="rendus/",
        help="Folder to clone into",
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="count",
        default=0,
        help="use once '-v' or twite '-vv' for more verbose",
    )
    args = parser.parse_args()

    if args.verbose == 1:
        logger.setLevel(logging.INFO)
    elif args.verbose >= 2:
        logger.setLevel(logging.DEBUG)
    else:
        logger.setLevel(logging.WARNING)

    logger.info("Starting downloads for %s", args.filename)
    logger.debug(args)

    data = load_assignments(args.filename)
    asyncio.run(clone_or_pull_all_groups(data, args.folder))
    logger.info("Main done")
