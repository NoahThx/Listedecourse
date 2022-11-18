<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<style src="@ionic/core/css/core.css"></style>
<style src="@ionic/core/css/display.css"></style>
<style src="@ionic/core/css/padding.css"></style>
<style src="@ionic/core/css/text-alignment.css"></style>
<style src="@ionic/core/css/flex-utils.css"></style>
<style src="@ionic/core/css/structure.css"></style>
<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
