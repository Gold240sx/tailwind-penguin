// pill
import { TailwindInstall } from '../../index'
import { type ComponentData } from '../../../types'

const WithBorder: ComponentData = {
  componentName: 'With Border',
  tags: ['badge', 'pill', 'tag', 'category'],
  library: 'Tailwind',
  type: 'pill',
  favorite: false,
  darkMode: false,
  installation: {
    React: `npm install -D tailwindcss 
    npx tailwindcss init`,
    Vue: 'npm install -D tailwindcss'
  },
  installInstructions: TailwindInstall(
    'https://tailwindui.com/components/application-ui/elements/badges'
  ),
  code: {
    HTML: `
     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>

    `,
    React: `
    <>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-700 rounded-md bg-indigo-50 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 rounded-md bg-purple-50 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-pink-700 rounded-md bg-pink-50 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
        `,
    Vue: `<template>
  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
  <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
  <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
  <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
</template>
`
  },
  codePreview: `
    <>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-700 rounded-md bg-indigo-50 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 rounded-md bg-purple-50 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-pink-700 rounded-md bg-pink-50 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
        `
}

export { WithBorder }
