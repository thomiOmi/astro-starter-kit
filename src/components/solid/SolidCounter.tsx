/** @jsxImportSource solid-js */
import { NumberInputControl, NumberInputDecrementTrigger, NumberInputIncrementTrigger, NumberInputInput, NumberInputLabel, NumberInputRoot } from '@ark-ui/solid/number-input'
import { useStore } from '@nanostores/solid'
import { $counter } from '@/stores/counter'

export default function SolidCounter() {
  const count = useStore($counter)

  return (
    <div class="rounded border border-gray-300 bg-white p-4 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 class="mb-4 text-xl font-bold text-teal-600 dark:text-teal-400">Solid (Ark UI - Shared State)</h2>

      <NumberInputRoot
        min={0}
        max={100}
        class="flex flex-col gap-2"
        value={count().toString()}
        onValueChange={details => $counter.set(details.valueAsNumber)}
      >
        <NumberInputLabel class="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</NumberInputLabel>
        <div class="flex items-center gap-2">
          <NumberInputControl>
            <NumberInputDecrementTrigger class="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>
            </NumberInputDecrementTrigger>
          </NumberInputControl>
          <NumberInputInput class="w-20 rounded border border-gray-300 py-2 text-center dark:border-gray-600 dark:bg-gray-800 dark:text-white" />
          <NumberInputControl>
            <NumberInputIncrementTrigger class="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14" /></svg>
            </NumberInputIncrementTrigger>
          </NumberInputControl>
        </div>
      </NumberInputRoot>
    </div>
  )
}
