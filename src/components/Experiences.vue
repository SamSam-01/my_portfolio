<template>
    <div>
        <Card title="Experiences">
            <p>
              <img style="width: 30px" src="../assets/icons/tgs.png" /> Bénévole (Novembre
              2021)
            </p>
            <p>
              <img style="width: 30px" src="../assets/icons/epitech.png" /> Ambassadeur (À
              partir de Novembre 2021)
            </p>
            <p>
              <img style="width: 30px" src="../assets/icons/ISAE.png" /> Stagiaire (Juillet
              2022 - Décembre 2022)
            </p>
          </Card>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: "Experiences",
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
