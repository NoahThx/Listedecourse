<template>
  <ion-page>
    <ion-header style="width: 50%">
      <ion-toolbar style="border-radius: 80px">
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" style="width: 40%; border-radius: 80px">
      <ion-item class="ion-margin-top ion-width">
        <ion-input
          style="margin: 0.8rem;"
          class="ion-text-center"
          placeholder="Nom"
          type="text"
          v-model="nom"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-width">
        <ion-input style="margin: 0.8rem;"
          class="ion-text-center"
          placeholder="Prénom"
          type="text"
          v-model="prenom"
        ></ion-input>
      </ion-item>

      <ion-item class="ion-margin-top ion-width">
        <ion-input
          style="margin: 0.8rem;"
          class="ion-text-center"
          placeholder="Adresse mail"
          type="text"
          v-model="email"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-margin-top ion-width">
        <ion-input
          style="margin: 0.8rem;"
          class="ion-text-center"
          type="password"
          placeholder="Mot de Passe"
          v-model="password"
        ></ion-input>
      </ion-item>
      <div
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <div>
          <ion-button class="ion-margin-top ion-margin-bottom" color="danger" fill="outline" @click="register"
            >Inscription</ion-button
          >
        </div>
        <ion-button color="danger" fill="outline" style="">
        <a style="text-decoration: none; color: white;" href="/">
          Connexion</a
        >
      </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem,
} from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "RegisterPage",
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem,
  }, 
  setup() {
    let email = ref("");
    let password = ref("");
    let nom = ref("");
    let prenom = ref("");

    const register = () => {
      // Utilisaion d'axios pour envoyer les variables vers l'API
      axios
        .post(
          `http://127.0.0.1:8000/api/auth/register`,
          {
            // Variables envoyé pour crée un nouvelles utilisateurs 
            fistname: prenom.value,
            lastname: nom.value,
            email: email.value,
            password: password.value,
          },
          {}
        )
        // reponse de l'API
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.status); 
        });
    };

    return { nom, prenom, email, password, register };
  },
});
</script>
