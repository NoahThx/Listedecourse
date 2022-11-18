<template>
  <ion-page
    class="ion-text-center ion-justify-content-center"
    style="display: flex; justify-content: center; align-items: center;"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>Liste de course</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" style=" display: flex; justify-content: center; align-items: center; width: 40%;">


      <ion-item
        class="ion-margin-top ion-margin-bottom"
        style="display: flex; justify-content: center; align-items: center; text-align: center;">
        <div>
          <ion-label position="floating">Produit</ion-label>
          <ion-input type="text" v-model="name"></ion-input>
        </div>
      </ion-item>
      <ion-button color="danger" @click="addTodo">Ajouter</ion-button>

      <div id="todo__list" style="align-items: center; justify-content: center; text-align: center">
        <todo-list v-for="(todo, index) in list" :key="index" :name="todo.name"/>
      </div>
      <ion-button color="danger" fill="outline" @click="deletelist">Supprimer</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton,
} 
from "@ionic/vue";
import TodoList from "@/components/TodoList";

export default defineComponent({
  name: "Tab3Page",
  components: {
    TodoList, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonItem, IonLabel,
  },
  setup() {


    //fonction pour ajouter nouveau produit dans la liste 
    const addTodo = () => {
      list.value.push({
      name: name.value,
      });
      console.log(list);
      name.value = "";};
    //  fonction pour supprimer tous les produits de la liste
    const deletelist = () => {
      list.value = [ ];
    };
    
    // vérification du token 
    if (localStorage.getItem("token") == null) {
      window.location.href = "/";
    } else {
      console.log("ok");
    }
    let list = ref([]);
    let name = ref("");


    return { list, name, addTodo, deletelist, localStorage };
  },
});
</script>


