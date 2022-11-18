<template>
  <ion-page>
    <ion-header style="width: 50%">
      <ion-toolbar style="border-radius: 80px">
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" style="width: 40%">
      <ion-item class="ion-margin-top">
        <ion-input style="border-radius: 80px; margin: 0.8rem;" class="ion-text-center" placeholder="Adresse mail" type="text"
          v-model="email"></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-margin-bottom">
        <ion-input style="border-radius: 5px; margin: 0.8rem; " class="ion-text-center" type="password" placeholder="Mot de Passe"
          v-model="password"></ion-input>
      </ion-item>
      <div>
        <ion-button color="danger" fill="outline" @click="login">Connexion</ion-button>
      </div>
      <a style="text-decoration: none; color: white" href="/register">
        Inscription</a>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { IonPage,IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem,} 
from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "LoginPage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem,},
  
  setup() {
    //initalisation des variables de connexion 
    let email = ref("");
    let password = ref("");

    const login = () => {
      // utilisation de Axios (aide de Charles pour se cominquyer avec l'API)
      axios
        .post(          
          `http://127.0.0.1:8000/api/auth/login`,
          {
            // variables envoyé a l'API pour tester la connexion
            email: email.value,
            password: password.value,
          },
          {}
        )
        .then((response) => {
          console.log(response.data);
          // condition si le token existe user peut se connecter
          if (response.data.access_token) {
            localStorage.setItem("token", response.data.access_token);
            window.location.href = "/tabs/todolist?" + response.data.user_id;
          }
        })
        // retourne une erreur dans la console si les informations rentrer sont fausses
        .catch((error) => {
          console.log(error.status);
          console.log(error.error); 
        });
    };

    return { login, email, password, localStorage };
  },
});
</script>
