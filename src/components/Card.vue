<template>
  <div class="comp_card">
    <h3 class="title">{{ title }}</h3>
    <p class="space">
      <slot>Empty Card</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title"],
};
</script>

<style>
.title {
  border-top-left-radius: 30px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 15px;
  background: white;
  border-bottom: 1px solid;
}
.space {
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
}
.comp_card {
  color: black;
  background: rgba(255, 255, 255, 0.713);
  border-radius: 30px;
  margin: 5px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 10px 5px 5px rgba(46, 46, 46, 0.663);
}
</style>
