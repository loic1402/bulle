# Ce fichier est un readme

---

## Un espace commentaire pour le test

On verifie nos connaissance pour la creation d'un readme en même temps  
Dans le body de notre fichier index.html on crée une div.app pour garder notre application

Il est aussi possible de créer des methodes js a appliquer via certain evenement comme

- cree la methodes depuis le js dans mon app
- aller dans la balise qui doit prendre l'evenement
- @evenement="maMethode"
- petit exemple : `<p v-bind:title="message" v-for="todo in todos" @click="maMethode">
  {{todo}}
    </p>`
- on a un click qui se declenche pour executer la methode/function coder  

> il est possible de creer un variable modifiable depuis un input en gros c'est simple  
>- tu declare ta variable ex : variable = "";  
>- ensuite tu met ta variable dans ton input ex:`<input type="text" v-model="variable" name="" id="">`
>- et la tu verras que la variable prends la valeur de ce que l'on saiss