<template>
    <div>
      <Card title="Formations">
        <p>
          <img style="width: 15px" src="../assets/icons/openclassroom.png" /> Cours OpenClassroom divers (depuis 2015)
        </p>
        <p>
          <img style="width: 30px" src="../assets/icons/epitech.png" /> Epitech Technology (2021-2023)
        </p>
      </Card>
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: "Formations",
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
