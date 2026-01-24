<script setup lang="ts">
import { NumberInput } from '@ark-ui/vue/number-input'
import { Icon } from '@iconify/vue'
import { useStore } from '@nanostores/vue'
import { $counter } from '@/stores/counter'

const count = useStore($counter)
</script>

<template>
  <div class="rounded border border-gray-300 bg-white p-4 shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h2 class="mb-4 text-xl font-bold dark:text-white">
      Vue (Ark UI - Shared State)
    </h2>

    <NumberInput.Root
      :min="0"
      :max="100"
      class="flex flex-col gap-2"
      :model-value="count.toString()"
      @update:model-value="(val) => $counter.set(Number(val))"
    >
      <NumberInput.Label class="text-sm font-medium text-gray-700 dark:text-gray-300">
        Quantity
      </NumberInput.Label>
      <div class="flex items-center gap-2">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger
            class="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            <Icon icon="lucide:minus" />
          </NumberInput.DecrementTrigger>
        </NumberInput.Control>
        <NumberInput.Input class="w-20 rounded border border-gray-300 py-2 text-center dark:border-gray-600 dark:bg-gray-800 dark:text-white" />
        <NumberInput.Control>
          <NumberInput.IncrementTrigger
            class="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            <Icon icon="lucide:plus" />
          </NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </div>
    </NumberInput.Root>
  </div>
</template>
