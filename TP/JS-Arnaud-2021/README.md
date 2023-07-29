# JS devoir final : le retour

La première partie de l'EC a été cloturée par un devoir JS à rendre décrit sur cette page <http://unc.epizy.com/js/cc.html>.

Dans ce TP, il s'agit de faire de réaliser quelques extensions relativement mineures au cahier des charges initial **sur des rendus qui ne sont pas les votres**.

L'objectif de cet exercice est d'apprécier la qualité logicielle sur un cas pratique : une notion présentée des fois de façon un peu abstraite mais qui se concrétisera très rapidement en utilisant du code tiers.
Il s'agira également d'utiliser les techniques que vous avez vues dans la seconde partie de l'EC

## Extensions à réaliser

Le cahier des charges initial <http://unc.epizy.com/js/cc.html> est modifié, il s'agit maintenant de rajouter les fonctionnalités suivantes :

1. l'application doit **ajouter automatiquement au chargement de la page des images lues depuis un fichier JSON** contenant des URLs d'images. Le fichier est disponible [à cette adresse](urls.json). Le contenu du fichier est susceptible de changer, vous devez donc le télécharger dynamiquement et pas simplement copier son contenu dans votre fichier JavaScript.
2. il faut **ajouter deux boutons** _to top_ et _to bottom_ aux trois existant. Le premier permet de faire passer l'image en haut de la liste et le second la met tout en bas.
3. les boutons doivent être enveloppés (_wrappé_) dans un élément `<div class="bordered">` avec une bordure CSS

Pour la première extension, on donne l'extrait de code suivant de départ:

```javascript
const JSON_FILE = "https://romulusfr.github.io/unc-s4-devweb/TP/TP_Arnaud/urls.json";
fetch(JSON_FILE)
  .then((resp) => {
    if (resp.ok) return resp.json();
    throw new Error(`[${resp.status}] ${resp.url} ${resp.statusText}`);
  })
  .then((urls) => {
    for (const url of urls) {
      console.log(url);
    }
  })
  .catch(console.error);
```

## Travail à faire

Quatre versions différentes vous sont proposées dans [l'archive zip](versions.zip) : la version `rt` est celle de l'enseignant, les trois autres nommées `12`, `11-5` et `11` ont été réalisés par des étudiant-e-s.

Le travail est le suivant :

1. choisissez [au hasard](https://www.random.org/integers/?num=1&min=1&max=3&col=1&base=10&format=html&rnd=new) une des trois versions `12`, `11-5` et `11` (si vous reconnaissez votre code, choisir parmi les deux autres) étudiante
2. **en 45 minutes** essayez de réaliser le maximum des 3 extensions, peu importe l'ordre de leurs réalisations. Arrêtez au bout du temps imparti et sauvegardez votre travail.
3. **dans les 45 minutes qui suivent** faire la même chose avec la version `rt`. Arrêtez au bout du temps imparti et sauvegardez votre travail.

Comparer les réalisations pour conclure sur les critères suivants de qualité de code:

- modularité : on peut se resservir des éléments facilement, ils sont faiblement couplés, pas de dépendances entre eux
- extensibilité : on peut rajouter des fonctionnalités facilement, sans casser l'existant
- utilisabilité : le code est utilisable facilement, rapidement, de façon univoque

Chez vous, en **45 minutes max**, essayer de faire la même chose _sur votre version_.
