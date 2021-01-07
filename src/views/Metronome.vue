<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>metronome</h1>

    <div>
      <div class="tempo">
        <button>-</button>
        <span>tempo</span>
        <button>+</button>
      </div>
      <div class="control">
        <div>play</div>
        <div>tap</div>
      </div>
      <div class="beats">
        <div class="indicate">
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
        </div>
        <div class="tempo">4/4</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Metronome"
});
</script>
