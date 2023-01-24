<template>
    <div>
        <Description />
        <Competences />
        <Experiences />
        <Formations />
        <Links />
        <Contact />
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
name: "Mobile",
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
