<template>
  <div>
    <Card title="Mes compétences">
      <h4>Languages de programmation</h4>
      <img class="image" src="../assets/icons/c.png" />
      <img class="image" src="../assets/icons/python.png" />
      <img class="image" src="../assets/icons/arduino.png" />
      <img class="image" src="../assets/icons/vuejs.png" />
      <img class="image" src="../assets/icons/html.png" />
      <img class="image" src="../assets/icons/css.png" />
      <img class="image" src="../assets/icons/javascript.png" />
      <img class="image" src="../assets/icons/react-native.png" />
      <img class="image" src="../assets/icons/Cpp.png" />
      <img class="image" src="../assets/icons/docker.webp" />
      <img class="image" src="../assets/icons/kubernetes.png" />
      <h4>Outils</h4>
      <img class="image" src="../assets/icons/git.png" />
      <img class="image" src="../assets/icons/github.png" />
      <img class="image" src="../assets/icons/gitlab.png" />
      <img class="image" src="../assets/icons/linux.png" />
      <img class="image" src="../assets/icons/visual-studio-code.png" />
      <img class="image" src="../assets/icons/unity.png" />
      <img class="image" src="../assets/icons/elastic.png" />
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: "Competences",
  components: {
    Card,
  },
};
</script>

<style>
.image {
  width: 50px;
  margin-left: 10px;
}
.image:hover {
  width: 60px;
  transition: 0.3s;
}
</style>
