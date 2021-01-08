<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>metronome</h1>

    <div>
      <div class="tempo">
        <button type="button" @click="decreaseTempo">-</button>
        <span>{{ tempo }}</span>
        <button type="button" @click="increaseTempo">+</button>
      </div>
      <div class="control">
        <button type="button" @click="togglePaused">
          {{ is_stopped ? 'play' : 'stop' }}
        </button>
        <div>tap</div>
      </div>
      <div class="beats">
        <div class="indicate">
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
        </div>
        <div class="tempo">
          4/4
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface IMetronomeType {
  tempo: number;
  time_signature: '4/4' | '3/4';
  is_stopped: boolean;
  interval: null | ReturnType<typeof setInterval>;
}

export default defineComponent({
  name: 'Metronome',
  data() {
    return {
      tempo: 90,
      time_signature: '4/4',
      is_stopped: true,
      interval: null,
    } as IMetronomeType;
  },
  methods: {
    tick() {
      const tick_sound = new Audio(require('../assets/audio/tick.wav'));
      tick_sound.play();
    },
    togglePaused() {
      console.log('toggle paused works');
      if (!this.is_stopped && this.interval) {
        this.is_stopped = true;
        clearInterval(this.interval);
      } else {
        this.is_stopped = false;
        this.interval = setInterval(this.tick, (60 * 1000) / this.tempo);
      }
    },
    increaseTempo() {
      this.tempo += 1;
    },
    decreaseTempo() {
      this.tempo -= 1;
    },
  },
});
</script>
