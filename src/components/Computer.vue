<template>
    <div class="wrapper">
        <!--LEFT-->
        <div class="col1">
            <Competences />
            <Links />
        </div>
        <!--MIDDLE-->
        <div class="col2">
            <Description />
        </div>
        <!--RIGHT-->
        <div class="col3">
            <Experiences />
            <Formations />
            <Contact />
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
import Experiences from "../components/Experiences.vue";
import Description from "@/components/Description.vue";
import Links from "@/components/Links.vue";
import Competences from "@/components/Competences.vue";
import Formations from "@/components/Formations.vue";
import Contact from "@/components/Contact.vue";

export default {
    name: "Computer",
    components: {
        Experiences,
        Card,
        Description,
        Links,
        Competences,
        Formations,
        Contact,
    },
};
</script>

<style>
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}

.col1 {
    grid-column: 1;
}

.col2 {
    grid-column: 2;
}

.col3 {
    grid-column: 3;
}

.masonry-grid {
    column-count: 2;
    column-gap: 1rem;
    width: 100%;
}

.masonry-grid__item {
    break-inside: avoid;
    margin-bottom: 1rem;
}
</style>
