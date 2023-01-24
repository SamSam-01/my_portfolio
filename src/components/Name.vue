<template>
  <div class="component">
    <div class="card">
        <div class="name">Samuel BLARD</div>
        <div class="description">
          Je suis actuellement en recherche d'un emploi dans le développement WEB.
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Name",
};
</script>

<style>
.name {
  font-size: 500%;
}
.description {
  font-size: 100%;
}
.component {
  opacity: 0.9;
  overflow: visible;
  z-index: 100;
  text-align: center;
  font-family: "Bebas Neue";
  color: white;
}
.card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(24, 24, 24, 0.792));
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 48px;
}
</style>
