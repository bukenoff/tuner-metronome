<template>
  <Card class="metronome-root">
    <template #content>
      <div class="metronome-tempo p-d-inline-flex p-ai-center p-jc-between">
        <Button
          class="p-button-secondary p-button-text"
          icon="pi pi-minus"
          @click="decreaseTempo"
          :disabled="!is_stopped"
        />
        <span>{{ tempo }}</span>
        <Button
          class="p-button-secondary p-button-text"
          icon="pi pi-plus"
          @click="increaseTempo"
          :disabled="!is_stopped"
        />
      </div>
      <div class="control">
        <Knob v-model="tempo" :min="30" :max="240" :disabled="!is_stopped" />
      </div>
      <Button
        :icon="is_stopped ? 'pi pi-play' : 'pi pi-pause'"
        @click="togglePaused"
      />
      <div class="beats">
        <div class="indicate">
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
          <div class="beat-item"></div>
        </div>
        <div class="metronome-time-signature">
          <Dropdown
            v-model="time_signature"
            :options="time_signature_types"
            optionLabel="name"
            placeholder="Select a City"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import Dropdown from 'primevue/dropdown';

const time_signature_types = [
  { name: '4/4', value: '4/4' },
  { name: '3/4', value: '3/4' },
];

interface IMetronomeType {
  tempo: number;
  time_signature: any;
  is_stopped: boolean;
  interval: null | ReturnType<typeof setInterval>;
  time_signature_types: any[];
}

export default defineComponent({
  name: 'Metronome',
  data() {
    return {
      tempo: 90,
      time_signature: time_signature_types[0],
      is_stopped: true,
      interval: null,
      time_signature_types,
    } as IMetronomeType;
  },
  components: { Button, Card, Knob, Dropdown },
  methods: {
    tick() {
      const tick_sound = new Audio(require('../assets/audio/tick.wav'));
      tick_sound.play();
    },
    togglePaused() {
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

<style lang="scss" scoped>
.metronome-root {
  width: 300px;
  margin: 0 auto;
}

.metronome-tempo {
  width: 150px;
}

.metronome-time-signature {
  margin-top: 0.5rem;
}
</style>
