<template>
  <div>
    <h1>Samuel BLARD Portfolio</h1>
    <div>
      <span>
        <h3>
          <img style="width: 20px" src="../assets/icons/down-arrow.png" />Click here to
          see my portfolio<img style="width: 20px" src="../assets/icons/down-arrow.png" />
        </h3>
      </span>
      <router-link to="/home"
        ><img class="startbtn" style="width: 70px" src="../assets/icons/start.png"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
};
</script>
<style>
.startbtn {
  border: 0px solid rgba(0, 0, 0, 1);
  border-radius: 50%;
}
.startbtn:hover {
  box-shadow: 0 5px 15px rgb(255, 0, 0);
}
</style>
