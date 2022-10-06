<script lang="ts" setup>
  defineProps({
    color: {
      type: String,
    },
    count: {
      type: Number,
    },
  })
  </script>

  <template>
    <button>
      <slot />
      <span
        v-if="count != null"
      >
        {{ count }}
      </span>
    </button>
  </template>
