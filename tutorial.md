<h1 id="section"></h1>
<p>Les challenges du développement front-end sont nombreux et variés, et il requiert de<br>
toujours faire preuve de créativité pour trouver les solutions adaptées.</p>
<p>Parmi ceux-ci, certains sont récurrents, on pense par exemple à la création d’interfaces<br>
d’administration. Pour cela on utilise souvent des formulaires, et s’il est tout à fait possible de leur dédier une page chacun il peut être appréciable de les afficher sur la même page : dans ce cas on pourrait choisir de les faire apparaître dans des pop-ups.</p>
<p>De plus en plus d’outils sont disponibles pour les ingénieurs front et facilitent déjà ce travail,<br>
dans cet exemple nous allons utiliser VueJS et son router client vue-router, couplé à vuetify<br>
pour l’apparence graphique.<br>
Vuetify est une bibliothèque de composants graphiques material design, on l’utilisera ici pour simplifier l’aspect design, mais il est tout à fait possible de lui préférer une autre librairie ou de choisir sa propre solution.<br>
Il n’est pas nécessaire de la connaître pour la suite de la lecture.</p>
<h1 id="files">Files</h1>
<p>On veut donc lister plusieurs items d’une ressource, pourquoi pas quelques fruits, tout<br>
en détaillant leurs attributs. On souhaite donc avoir pour chaque fruit un nom, une description et une image. Pour simplifier cet exemple on va se contenter de stocker une url pour afficher nos images.</p>
<p><strong><img src="https://lh6.googleusercontent.com/bs860GYsUcC7ayNgS7GtcE2uu45g0bOJf5qHksbNvW4LiprjpAgrGQ23S9rsHb48tPaXB7WtXr_8WD5FEWZnPJexonozf-u7hvatmhbW9apqwG-cpHtrxviQaw7HAkzFFXG2Sv58" alt=""></strong></p>
<p>La donnée par défaut de notre application va donc ressembler à ceci. On peut en déduire le template suivant :</p>
<p><strong><img src="https://lh3.googleusercontent.com/3t6WYLgUS7pewHdDdDG8fQ6UFHYIttcSVVd-WWSplRy2Wo3Td8FmIjKeda_0sjU1FRHCMt5_g4J2Q1wxoBywxeu_jLp6UDwz-70kJwNtDvI3JTFyH_0Efblke7d4gjzKkUxqp_rR" alt=""></strong></p>
<p>Ici j’ai choisi de représenter la liste sous forme de cartes, mais on pourrait imaginer la même approche avec tout autre forme de représentation.</p>
<p><strong><img src="https://lh4.googleusercontent.com/0V7gdytlFZpYly7bGhsRKpN2867ayJUYEZLOkJTXBnB63ygnMsaT0RndJdIt0vErHZgQmUVB2cMZFj4Z8RWr8FYX0dQGyT0cvlToLSlrOXgTb5gTX8xXkZLmznYcYXty7ug3lPyk" alt=""></strong></p>
<p>J’ai également ajouté des boutons d’ajout, de modification et de suppression de fruits. En effet, on souhaite pouvoir ajouter des items à notre liste, en retirer ou modifier les propriétés de chacun d’eux.<br>
Pour cela on va avoir besoin d’un formulaire de création, un autre de modification, et un dernier de suppression.</p>
<p>Les formulaires de création et modification sont sensiblement identiques, celui d’update étant juste pré-rempli avec les données de l’item sélectionné.<br>
Le formulaire de suppression est plus simple, il faudra juste afficher une fenêtre de confirmation avant l’action.</p>
<p><strong><img src="https://lh3.googleusercontent.com/vpiinuxEnDzQwLqrE8edZ98kCENwXoWFr9Jy8qCaNxMZtAaS45HonHqpA6p1TDiWiz4zTIY49vqwL__2T2oFzE9yFacSd4v_4hHaiA92RyPeOWBynDKqLhhGGOQiqi_MW2BV9dOD" alt=""></strong></p>
<blockquote>
<p>Le formulaire d’édition</p>
</blockquote>
<p><strong><img src="https://lh6.googleusercontent.com/SVYxRBTSU2rc9Kz_zbZjZuSRPnppvIrfhooNTWRu_07je-zo0GkiZkHN19Cwwqw1E2KwCS9If0oEUNQ-bcudlB0HXaZ5m-awj9M5-WX0LlJjwTrjRnbB4WLcDQ8df_kMdK3UIlQ4" alt=""></strong></p>
<blockquote>
<p>La pop-up de confirmation de suppression</p>
</blockquote>
<p>Le composant <code>v-dialog</code> de vuetify affiche une modale en fonction de la valeur de la variable associée à son <code>v-model</code>, ce qui est très utile pour ce que l’on cherche à faire. Immédiatement, on pourrait envisager d’avoir plusieurs <code>v-dialog</code>, qui s’afficheront conditionnellement pour contenir nos formulaires.</p>
<p>Puisque les formulaires de modification et de création contiennent les même champs, on peut les factoriser et n’avoir que 2 <code>v-dialog</code> qui s’affichent selon les actions de l’utilisateur.</p>
<p><strong><img src="https://lh6.googleusercontent.com/BpMcWJz0l6JtAt-hlZ2mcfXbtkvdkgW9dlyr1XKWTuv3LrZNtSQqXKpkbRVSnRPTNjX_7L2p1BiIPq79jCCsqmvsMNp9vz4364ng-e6HAvGbOI0mOqcpOwEtGE3KQeERhsZ86oF9" alt=""></strong></p>
<blockquote>
<p>Cette figure montre le code du composant formulaire, avec un champ pour chaque propriété de notre ressource, et deux boutons émettant des événements de soumission ou d’annulation de ce formulaire.</p>
</blockquote>
<p>Cette solution est-elle satisfaisante ? Non, d’abord les formulaires d’édition et de création peuvent changer, selon si l’on a des items de plusieurs types, des valeurs par défaut à gérer à la création, ou des contraintes à la modification. Ensuite si l’on voulait afficher un autre formulaire, par exemple pour une ressource annexe, il faudrait ajouter autant de v-dialog que de formulaires et on risque de congestionner le template et de complexifier le composant en lui attribuant la responsabilité de la logique d’affichage des fenêtres et du formatage des données.</p>
<p>On comprend rapidement qu’il faut factoriser tous les formulaires dans le même v-dialog, et les afficher conditionnellement. VueJS nous offre la possibilité de créer des composants dynamiques, et ça pourrait être une solution, mais il faudrait alors conserver la logique de différenciation dans le composant de listing et ce serait au détriment de sa réutilisabilité, de son indépendance et de la faciliter à le tester.</p>
<p>Bien heureusement, nous avons vue-router à disposition et c’est l’endroit idéal pour transférer cette responsabilité dans un fichier de configuration facilement modifiable et surtout extensible.</p>
<p>Plutôt qu’un composant dynamique, on peut utiliser une router-view.</p>
<p><strong><img src="https://lh6.googleusercontent.com/F7ZQn5b9hOheLCtiJFpQ6XmPTFmYAaWI6IBNqT9qxPC02h-g9XETkwAaJ0ZUmTzB3zFvZs-S91uBvjxyVmoS3l_v2tAcBAyZRS6zILJxnfOGB6kJC5KclxlF-gu9M8RHZDEzzGX2" alt=""></strong></p>
<blockquote>
<p>La liste va être présente sur la route mère et on peut lui ajouter autant d’enfants que l’on veut, en associant chacune d’elle avec son composant.</p>
</blockquote>
<p>Au passage, il est intéressant d’activer le <code>props: true</code> pour passer les props en tant que paramètres de la route et découpler le composant du router.</p>
<p>Puisque la <code>router-view</code> est à l’intérieur de la modale, elle sera remplacée par le composant défini dans notre router.</p>
<p>Il ne nous manque plus qu’un moyen d’activer la modale, d’autant plus si on veut rendre possible l’arrivée sur la page de formulaire directement sans naviguer depuis la liste. Pour cela on va utiliser l’attribut <code>meta</code>, qui permet de faire passer des données relatives à la route, ici on veut que ces routes soient liées à l’apparition d’une modale donc on va ajouter un <code>dialog = true</code> à chacune d’elle.</p>
<p><strong><img src="https://lh3.googleusercontent.com/L-sBRuMvExy_Ww5GAV55I3Vot5tQaO8Io_XGehdTXfzPz5fajtTGiAsx0gWcGuEQY5VFflK61rUO8n0wJV915qw43KhpptZfsPqDwA4I_mh-WZbdSC262YzgQ98P7KVXBKpl4xRO" alt=""></strong></p>
<blockquote>
<p>Ensuite on peut utiliser la valeur stockée en meta de la route<br>
courante en tant que <code>v-model</code> de notre pop-up.</p>
</blockquote>
<p><strong><img src="https://lh4.googleusercontent.com/nHsV9Yk6EyaapbNkkckNZvWzhyAvCb4ZNEKCsyPRNHz2L36ESl6IZAsqt9XlYxz1a7kTI5X00wfxKZYbRbHdajDy2-jfKAbX5jRq3BE5Ta9L1d8n_8QI08KD45FX5KIjqqNP-nli" alt=""></strong></p>
<blockquote>
<p>Il faut seulement tenir compte que pour refermer le <code>v-dialog</code>, on veut juste retourner à la route mère qui n’a pas de pop-up à afficher</p>
</blockquote>
<p>Pour complètement finir de retirer la responsabilité de la gestion des données du formulaire du composant de listing, on va passer par des composants Create / Delete / Update, ils permettent de :</p>
<ul>
<li><em>Gérer l’affichage d’un formulaire ou d’un autre selon les paramètres (contenus dans les props)</em></li>
<li><em>Extraire la logique de la liste</em></li>
<li><em>Gérer la soumission, l’annulation ou tout autre évènement du formulaire</em></li>
<li><em>Formater la donnée avant son enregistrement</em></li>
</ul>
<p><strong><img src="https://lh3.googleusercontent.com/O2YhODXljJYpKvJPB4Hzfdgro0RgV0ezdBILg3b-CUeApKE8h3zZhJCz-dqdlERfyXhDbN0BhDvdLy2WmC8c8yhP7ebty17cJwdQyr6ZMTgjkDFpg-IsvxbEeJrOhU6mL095eUsL" alt=""></strong><br>
Si on prend en exemple ce composant <code>CardUpdate</code>, on voit qu’on utilise le <code>CardForm</code> créé précédemment. Si on avait un type de ressource qui nécessiterait un autre formulaire, on pourrait s’occuper de traiter les conditions ici.</p>
<p>La mécanique pour refermer le formulaire est toujours de revenir vers notre page principale qui a été définie dans le router pour ne pas avoir de fenêtre de dialogue.<br>
Pas besoin de traitement lourd pour cet exemple mais on pourrait bien imaginer un formatage de données avant de l’envoyer à une API, ou bien la récupération de cette donnée si elle n’avait pas été chargée entièrement auparavant.</p>
<p>De la même manière, un composant <code>CardCreate</code> nous permet d’ajouter un élément à notre liste.<br>
<strong><img src="https://lh3.googleusercontent.com/TwZbUwUxgesGy9y-ycieQfsP5O98fb6OYYt4wHXgAAzPBleXIeiy1apr0anvNp7YocarqLtV9gmoV5FCwGjuxBv8UIHsxWv6d7IZiru1223dvZ2peVf-xzK4V_8jnhtDV92-StJY" alt=""></strong></p>
<p>Nous avons donc vu une possibilité de création et d’édition efficace et facile à maintenir avec VueJS et vue-router, grâce à la possibilité d’intégrer des router-view à l’intérieur de composants et de les afficher en fonction de l’url des pages de notre application.<br>
On notera également qu’il est possible de passer des variables à nos composants en tant que props, ce qui ne les contraint pas à une utilisation uniquement à travers vue-router.<br>
On a aussi vu qu’il est tout à fait possible via ce procédé d’afficher différents composants, que ce soit un formulaire complet ou une simple pop-up de confirmation.</p>
<p>Cette architecture a en partie été inspirée par le client-generator d’API-platform, n’hésitez pas à aller consulter ce projet également.<br>
<a href="https://api-platform.com/docs/client-generator/">https://api-platform.com/docs/client-generator/</a></p>
<p>Le code complet de cet exemple est disponible dans ce repository : <a href="https://github.com/Eddinos/modal-forms">https://github.com/Eddinos/modal-forms</a></p>
<p>Et il est possible de consulter un exemple à cette adresse : <a href="https://modal-forms.netlify.com/#/">https://modal-forms.netlify.com/</a></p>

