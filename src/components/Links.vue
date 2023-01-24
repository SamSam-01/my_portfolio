<template>
    <div>
        <Card title="My links">
            <a href="https://www.linkedin.com/in/samuel-blard/" target="_blank">
              <img class="image" src="../assets/icons/github.png">
            </a>
            <a href="https://github.com/SamSam-01" target="_blank">
              <img class="image" src="../assets/icons/linkedin.png">
            </a>
        </Card>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  export default {
    name: "Links",
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
  