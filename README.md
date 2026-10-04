# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : Kelly
- Nom : Kwetche
- Adresse mail universitaire : kelly.kwetche1@etu.univ-lorraine.fr
- Groupe de TD : 3
- Adresse du dépôt GitHub privé : https://github.com/kellyyyx/Projet-individuel-tech-du-web-xyz-.git

## TD 01

### TD 01 - Élements réalisés

- Création du projet. J'ai modélisé un tweet dans types/tweets en lui donnant toutes les propriétés demandées.  Définition du type tweetImage. Création de 10 tweets. Puis création du composant TweetPreview afin d'afficher le nom de l'auteur, son nom d'utilisateur, la date dans un format lisible et le contenu du tweet. Affichage conditionnelle de l'image c'est à dire seulement si il y en une, et s'il n'y en a pas dans ce cas on affiche simplement rien. Affichage de la liste de tweets dans le fil d'actualité. Et ajout de voir + et voir - si le tweet est de + de 180 caractères.

### TD 01 - Bonus réalisés

- Pas de bonus à réaliser

### TD 01 - Élements non réalisés

- Les bonus

### TD 01 - Difficultés rencontrées + Solutions appliquées

- Je n'ai pas de souvenirs de difficultés rencontrés au td1

### TD 01 - Déclaration d'usage de l'IA générative

Usage de l'ia pour m'aider à styiliser l'apparence des tweets, afin qu'ils ne soient pas tous collés et sans formes. Usage également pour m'aider à comprendre si je ne comprends pas une question ou une méthode à utiliser.

## TD 02

### TD 02 - Élements réalisés

- Installation de react-router-dom. On a crée un layout partagé avec Outlet, on crée ensuite des routes qu'on affiche dans main. On a ensuite crée la page principale : TweetsMasterPage où on y déplace tout le fil construit durant le td1. Ajout de "voir la discussion". Maintenant on peut afficher un tweet et ses réponses (j'ai crée 2 réponses à 2 tweets). Ceci a été géré dans TweetDetailsPage avec différentes propriétés données dans l'énoncé. On a également "Ce tweet n'existe pas" avec un lien de retour si jamais aucun tweet ne corresponds à l'id recherché. On a également gérér les routes inconnues avec un composant NotFoundPage.

### TD 02 - Bonus réalisés

- Pas de bonus réalisées.

### TD 02 - Élements non réalisés

- Les bonus

### TD 02 - Difficultés rencontrées + Solutions appliquées

Après avoir réalisé les 3 premiers points du td, ma page était blanche et n'affichait plus les tweets. J'ai cherché l'erreur pendant longtemps mais je ne trouvais pas, j'ai même demandé de l'aide à l'ia pour me dire où était mon erreur mais rien n'a marché. Au final je pense que c'était un problème d'indentation dans TweetsMasterPage puisque une fois que j'ai bien indenté mon code la page s'est re mise à s'afficher avec mes tweets.

### TD 02 - Déclaration d'usage de l'IA générative

Utilisation de l'ia comme documentation, pour savoir la forme générale d'une méthode ou d'une fonction par exemple si je ne la connais pas. Ou pour m'aider si mon code ne marche à savoir quelle ligne est fausse ou fait que mon code ne marche pas.

## TD 03

### TD 03 - Élements réalisés

- Ajout au type Tweet de likes et likedByMe afin de connaître le nombre total de likes du tweet et savoir si on l'a liké ou pas. On a remonté l'état dans le layout afin de pouvoir ajouter la mention j'aime. Création d'un formulaire contrôlé avec un text area afin de pouvoir publier son propre tweet, une limite de tweet qui est de 280 caractères et si cette limite est dépasse ou bien si le contenu du tweet est vide, on ne peut pas le publier. Affichage du nombre de caractères restants, c'est à dire que dès qu'on écrit on a le nombre de caractères sur 280 qu'il nous reste à écrire sans dépasser la limite imposée. Création d'une fonction addTweet afin d'ajouter un tweet si on veut en publier un. Ce tweet sera ajouté en haut du fil d'actualité en tête du tableau. Le nombre de like est automatiquement mis à 0 et likedByMe est initialisé à false. On a un id qui est généré automatiquement par crypto.randomUUID(). Le nom d'auteur et d'utilisateur est "vous". Puis ajout avec toggleLike de la mention j'aime à chaque tweet. c'est à dire que si le tweet a déjà été liké par moi j'aurais "je n'aime plus" qui s'affiche et si j'appuie dessus le nombre de likes descends d'un et le bouton afficge "j'aime. Donc si j'appuie sur j'aime le nombre de likes augmente d'un et le bouton "je n'aime plus" s'affiche à son tour. Personnalisation du titre avec useEffect avec une valeur de la forme Accueil | XYZ. Le titre va changer par rapport à la page sur laquelle on se trouve grâce à l'utilisation de title dans le tableau de dépendances. Puis personnalisation de l'identité visuelle, j'ai changé les couleurs des boutons, du fond de l'application. J'ai également changé les couleurs des écritures des tweets, du f'il d'actualité et du nom de l'application affiché en haut à droite en noir.

### TD 03 - Bonus réalisés

- Pas de bonus a été réalisé

### TD 03 - Élements non réalisés

- Les éléments bonus n'ont pas été réalisées

### TD 03 - Difficultés rencontrées + Solutions appliquées

-  Mon logo ne s'affiche pas tout en haut à coté de Accueil XYZ, pourtant j'ai bien mis toutes les images dans public qui m'ont été donnés dans mon fichier zip après avoir créer mon logo et j'ai mis le code html qui m'a été donné après avoir créer mon logo dans index.html. J'ai donc demandé à gémini quelle était le problème il m'a fait faire un test avec l'adresse local host pour afficher mon logo et il s'affichait donc apparemment ce serait mon safari qui n'affiche pas directement mon logo mais au niveau du code tout est bon normalement.

### TD 03 - Déclaration d'usage de l'IA générative

- J'ai utilisé l'ia afin de m'aider avec l'identité visuelle. C'est à dire le code pour mettre les couleurs des boutons, du nom de l'appliation etc. J'utilise également l'ia si je ne comprends pas une consigne afin qu'elle me l'explique et comme documentation si jamais je ne connais pas une méthode/fonction et sa mise en forme qui m'est donné dans l'énoncé.