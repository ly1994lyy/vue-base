// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  shortcuts: [
    { 'f-center': 'flex justify-center items-center' },
    { fullscreen: 'w-screen h-screen' },
  ],
})
