<template>
  <div class="home">
    <div class="uke_container">
      <Button
        label="g"
        class="p-button-raised g-note note-button"
        @click="playG"
      />
      <Button
        label="c"
        class="p-button-raised c-note note-button"
        @click="playC"
      />
      <Button
        label="e"
        class="p-button-raised e-note note-button"
        @click="playE"
      />
      <Button
        label="a"
        class="p-button-raised a-note note-button"
        @click="playA"
      />
      <img class="uke" src="../assets/ukulele.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import G3 from '../assets/audio/G3.mp3';
import C3 from '../assets/audio/C3.mp3';
import E3 from '../assets/audio/E3.mp3';
import A3 from '../assets/audio/A3.mp3';

export default defineComponent({
  name: 'Tuner',
  setup() {
    const playG = () => {
      new Audio(G3).play();
    };

    const playC = () => {
      new Audio(C3).play();
    };

    const playE = () => {
      new Audio(E3).play();
    };

    const playA = () => {
      new Audio(A3).play();
    };

    return {
      playG,
      playC,
      playE,
      playA,
    };
  },
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
