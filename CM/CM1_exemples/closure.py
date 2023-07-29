from inspect import getclosurevars


def makeCounter():
    count = 0

    def out():
        nonlocal count  # spécifique à Python
        print("out", count)
        count += 1

    return out


counter_1 = makeCounter()
counter_2 = makeCounter()
print(getclosurevars(makeCounter))
print(getclosurevars(counter_1))
print(getclosurevars(counter_2))
counter_1()
print(getclosurevars(counter_1))
print(getclosurevars(counter_2))
counter_1()
counter_2()
print(getclosurevars(counter_1))
print(getclosurevars(counter_2))
