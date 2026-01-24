import { NumberInput } from '@ark-ui/react/number-input'
/** @jsxImportSource react */
import { Icon } from '@iconify/react'
import { useStore } from '@nanostores/react'
import { $counter } from '@/stores/counter'

export default function ReactCounter() {
  const count = useStore($counter)

  return (
    <div className="rounded border border-gray-300 bg-white p-4 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">React (Ark UI - Shared State)</h2>
      <NumberInput.Root
        min={0}
        max={100}
        className="flex flex-col gap-2"
        value={count.toString()}
        onValueChange={details => $counter.set(details.valueAsNumber)}
      >
        <NumberInput.Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Quantity
        </NumberInput.Label>
        <div className="flex items-center gap-2">
          <NumberInput.Control>
            <NumberInput.DecrementTrigger className="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <Icon icon="lucide:minus" />
            </NumberInput.DecrementTrigger>
          </NumberInput.Control>
          <NumberInput.Input className="w-20 rounded border border-gray-300 py-2 text-center dark:border-gray-600 dark:bg-gray-800 dark:text-white" />
          <NumberInput.Control>
            <NumberInput.IncrementTrigger className="rounded border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <Icon icon="lucide:plus" />
            </NumberInput.IncrementTrigger>
          </NumberInput.Control>
        </div>
      </NumberInput.Root>
    </div>
  )
}
