<script lang="ts" setup>
  import { ref } from 'vue'
  import { logEvent } from 'histoire/client'
  import BaseButton from './BaseButton.vue'

  const text = ref('Click me')
  </script>

  <template>
    <Story>
      <BaseButton @click="logEvent('click', $event)">
        {{ text }}
      </BaseButton>

      <template #controls>
        <HstText title="default slot" v-model="text" />
      </template>
    </Story>
  </template>
