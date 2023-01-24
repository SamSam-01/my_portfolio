<template>
    <div>
        <Card title="Contact me">
            Phone : <a href="tel:+33754386551">+33 7 54 38 65 51</a> <br />
            Email : <a href="mailto:sam.blard974.sb@gmail.com">sam.blard974.sb@gmail.com</a>
        </Card>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: "Contact",
    components: {
        Card,
    },
};
</script>
