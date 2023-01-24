<template>
  <div>
    <div>
      <Name text="Samuel BLARD" />
    </div>
    <div v-if="!isMobile()">
      <Computer />
    </div>
    <div v-else>
      <Mobile />
    </div>
  </div>
</template>

<script>
import Name from "../components/Name.vue";
import Mobile from "@/components/Mobile.vue";
import Computer from "@/components/Computer.vue";

export default {
  name: "Start",
  components: {
    Name,
    Mobile,
    Computer,
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
};
</script>
