<template>
  <div class="home">
    <div class="uke_container">
      <Button label="g" class="p-button-raised g-note note-button" />
      <Button label="c" class="p-button-raised c-note note-button" />
      <Button label="e" class="p-button-raised e-note note-button" />
      <Button label="a" class="p-button-raised a-note note-button" />
      <img class="uke" src="../assets/ukulele.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  name: 'Tuner',
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
.uke_container {
  overflow: hidden;
  width: 300px;
  margin: 0 auto;
  position: relative;
  height: 500px;
}

.uke {
  transform: rotate(-45deg);
  width: 400px;
  position: absolute;
  right: calc(50% - 200px);
  top: 60px;
  z-index: -1;
}

.note-button {
  position: absolute;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border: none;
}

.g-note {
  top: 66px;
  left: 50px;
}

.c-note {
  top: 20px;
  left: 50px;
}

.e-note {
  top: 20px;
  right: 50px;
}

.a-note {
  top: 66px;
  right: 50px;
}
</style>
