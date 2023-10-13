import { TailwindInstall } from './Tailwind/index'

export type stringOrUndefined = string | undefined

export type InstallationInstructionsFunction = (docLink: string) => {
  docs: string
  Next?: stringOrUndefined
  ViteReact?: stringOrUndefined
  Vue?: stringOrUndefined
  React?: stringOrUndefined
}

export type ComponentData = {
  componentName: string
  tags: string[]
  library: 'Tailwind' | 'Tailwind UI'
  type: string
  favorite: boolean
  darkMode: boolean
  premiumContent?: true
  functions?: {
    React?: string
    Vue?: string
    Next?: string
    Angular?: string
    Svelte?: string
    Astro?: string
    Alpine?: string
    Solid?: string
    Ember?: string
    Nest?: string
  }
  installation?: {
    React?: string
    Vue?: string
    Next?: string
    Angular?: string
    Svelte?: string
    Astro?: string
    Alpine?: string
    Solid?: string
    Ember?: string
    Nest?: string
  }
  imports?: {
    React?: string
    Vue?: string
    Next?: string
    Angular?: string
    Svelte?: string
    Astro?: string
    Alpine?: string
    Solid?: string
    Ember?: string
    Nest?: string
  }
  code: {
    HTML?: string
    React?: string
    Vue?: string
    Next?: string
    Angular?: string
    Svelte?: string
    Astro?: string
    Alpine?: string
    Solid?: string
    Ember?: string
    Nest?: string
  }
  tailwindConfig?: string
  nextConfig?: string
  postCssConfig?: string
  tsConfig?: string
  codePreview?: any
  installInstructions: any
}
