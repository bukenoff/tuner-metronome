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
            @change="changeTimeSignature"
            optionLabel="name"
            placeholder="Select a City"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import Dropdown from 'primevue/dropdown';

const time_signature_types = [
  { name: '4/4', value: [4, 4] },
  { name: '3/4', value: [3, 4] },
];

interface IMetronomeType {
  tempo: number;
  time_signature: any;
  step: number;
  is_stopped: boolean;
  interval: null | ReturnType<typeof setInterval>;
  time_signature_types: any[];
  tick_sound: HTMLAudioElement;
  strong_tick_sound: HTMLAudioElement;
}

export default defineComponent({
  name: 'Metronome',
  setup() {
    const tick_sounds = ref<any>({});
    const tempo = ref(90);
    const time_signature = ref(time_signature_types[0]);
    const step = ref(1);
    const is_stopped = ref(true);
    const interval = ref<any>(null);

    const constructTicksMap = () => {
      const value = time_signature.value.value[0];

      return [...new Array(value)].reduce((acc, u, index) => {
        if (index === 0) {
          acc[index + 1] = new Audio(
            require('../assets/audio/strong_tick.mp3'),
          );

          return acc;
        }

        acc[index + 1] = new Audio(require('../assets/audio/tick.mp3'));

        return acc;
      }, {} as any);
    };

    onMounted(() => {
      tick_sounds.value = constructTicksMap();

      console.log(tick_sounds.value);
    });

    onUpdated(() => {
      console.log('updated');
    });

    const increaseTempo = () => {
      tempo.value += 1;
    };

    const decreaseTempo = () => {
      tempo.value -= 1;
    };

    const tick = () => {
      tick_sounds.value[step.value].play();

      const [beats] = time_signature.value.value;

      if (step.value === beats) {
        step.value = 1;
      } else {
        step.value += 1;
      }
    };

    const togglePaused = () => {
      if (!is_stopped.value && interval.value) {
        is_stopped.value = true;
        clearInterval(interval.value);
        step.value = 1;
      } else {
        is_stopped.value = false;
        interval.value = setInterval(tick, (60 * 1000) / tempo.value);
      }
    };

    const changeTimeSignature = (event: any) => {
      console.log('e', event.value);
      time_signature.value = event.value;
      constructTicksMap();
    };

    return {
      tempo,
      tick_sounds,
      time_signature,
      increaseTempo,
      decreaseTempo,
      togglePaused,
      is_stopped,
      time_signature_types,
      changeTimeSignature,
    };
  },
  components: { Button, Card, Knob, Dropdown },
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
