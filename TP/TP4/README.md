# TP programmation async côté client : l'API GitHub

Ce TP est à rendre via [GitHub](https://github.com/).

## Introduction

On souhaite réaliser application qui vérifie si une liste de projet GitHub sont toujours actifs ou pas.
La page HTML contient un bouton, une bare de progression, un `span` pour un compteur et une zone d'affichage.
La mise en forme utilise la librairie CSS <https://bulma.io/> pour un rendu moderne.

On donne une capture ci-après, dans laquelle on a vérifié les projets listés dans le fichier `TheBody983-starred.json` et où on voit que trois sont toujours OK, mais qu'un est KO (le projet n'est plus disponible sur GitHub). La barre de progression s'est remplie progressivement au fur et à mesure que l'on connaît l'état des projets. On peut le voir sur [la démonstration sur YouTube](https://youtu.be/ya2Ju04_Q5M) (avec une version légèrement plus ancienne de l'interface).

![Screenshot appli](async-checker.png)

### Critères d'évaluation

- les fonctionnalités réalisées :
  - [ ] téléchargement index
  - [ ] accès _concurrents_ à l'API GitHub
  - [ ] mise à jour de la barre de progression
  - [ ] authentification GitHub
  - [ ] accès informations projets via API GitHub
    - [ ] valeur ajoutées des informations affichées, extraites de la réponse de l'API
- la qualité du code :
  - respect des conventions de nommage
  - bonnes pratiques et linting
  - mise en forme du code (utilisez [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ou autre)
- précision et granularité des _commits_ sur le dépôt.
  - des pénalités **conséquentes** seront appliquées si les commits modifient trop de code ou sont trop peu nombreux.

## Fonctionnement de la bare de progression

La fonction fournie `updateProgress(current, total, text)` permet de mettre à jour la la bare de progression à la valeur `current` sur un total de `total`, le paramètre `text` est optionnel (il produit un affichage sur la page)
Exécuter le script suivant **ligne par ligne** pour comprendre le fonctionnement :

```javascript
updateProgress(0, 10, "départ");
updateProgress(1, 10);
updateProgress(2, 10);
updateProgress(3, 10);
updateProgress(4, 10);
updateProgress(5, 10, "moitié");
updateProgress(10, 10, "fini !");
```

**Exercice** avec `setInterval` écrire une fonction `doProgressTimer` qui incremente la bare de $1/n$ à chaque seconde pendant $n$ secondes.

## Vérification de projets GitHub

Dans le dossier `data`, vous disposez de trois fichiers, chacun étant des listes de projets GitHub favoris :

- [TheBody983-starred.json](data/TheBody983-starred.json) contient 4 favoris dont un KO;
- [Webcretaire-starred.json](data/Webcretaire-starred.json) contient 40 favoris;
- [romulusFR-starred.json](data/romulusFR-starred.json) contient 327 favoris.

Il s'agit d'accéder aux informations de ces projets _côté client_ en intérrogeant l'API publique `https://api.github.com/repos/{owner}/{repo}`, voir [la documentation](https://docs.github.com/en/rest/reference/repos#get-a-repository).

Tout d'abord, il faut télécharger le fichier JSON choisi par le `<select id="file-selector">`.

Ensuite, il faut transformer les liens du fichier JSON de la forme `https://github.com/{onwer}/{repo}` en `https://api.github.com/repos/{owner}/{repo}` et lancer la vérification **asynchrone et parallèle** de l'état du site avec des requêtes HTTP `HEAD` ou `GET` sur l'API GitHub. Par exemple, comme `Webcretaire-starred.json` contient 40 projets, il faut générer 40 requêtes exécutée en parallèle.

Au fur et à mesure que les projets répondent, il faut incrémenter la barre de progression de la page. Ainsi, vous devrez créer **un tableau** de promesse (une par URL) avec pour chacune un _callback_ dans le `.then` qui _met à jour la barre avec `updateProgress`_. L'ensemble sera exécuté par `Promise.all()` qui transforme le tableau de promesses en une promesse de tableau des résultats.

**Exercice** réalisez cette fonctionnalité. Vous pouvez la découper en 4 fonctions :

- `updateProgress(curr, total, txt)` pour la mise-à-jour du composant `<progress>` (fournie);
- `checkLinkAlive(link)` _qui va mettre à jour un objet lien_ (ceux dans le fichier JSON) avec son status HTTP, c'est la fonction qui va appeller l'API GitHub. Notons ici qu'on pourrait directement intérroger l'URL donnée sans passer par l'API GitHub, juste son serveur Web.
- `progressLinks(promises)` qui va transformer un tableau de promesses pour y ajouter à chacune un `.then` qui appellera `updateProgress`. Vous pourrez utiliser une fermeture pour mémoriser le nombre total de lien à vérifiez et le nombre de liens qui ont déjà été vérifiés.
- `downloadAndCheck()` qui télécharge le fichier principal et appeller ensuite `checkLinkAlive` en parallèle autant de fois qu'il y a de liens dans le fichier.

Améliorer l'affichage des liens pour y faire figurer l'évolution en nombre d'étoiles (`stargazers_count` dans l'API, `stars` dans le fichier) entre le moment où les JSON on été générés et aujourd'hui.

## Gestion du `rate-limiter`

Par défaut, sans authentification, l'API GitHub n'autorise que _60 requêtes par heure_ et vous recevrez des réponses HTTP 403 si la limite est atteinte :

- l'en-tête de réponse contiendra les champs `x-ratelimit-*` [voir la doc](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)
- le corps de la réponse `GET` contiendra le lien <https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting> (vérifiez dans le navigateur) qui explique l'affaire.

Si vous êtes authentifié, la limite est beaucoup plus confortable. Pour se faire, il faut :

- créer un _token_ secret sur votre compte GitHub dans les `Developer Settings` comme [indiqué dans la doc](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Lors de la création, ne donnez **que** le droit `repo:status`
- passer ce token via l'en-tête HTTP de la forme `"Authorization: token ghp_UNE_CHAINE_ALEATOIRE"` via les options de `fetch` comme [indiqué ici](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#repositories).

Vous aurez alors 5.000 requêtes par heure et vous pourrez accéder aux status de vos projets privés et si vous donnez les droits à votre jetons, faire des modifications à vos projets via l'API.

**Questions** quels sont les deux projets de la liste `romulusFR-starred.json` qui n'existent plus ?
