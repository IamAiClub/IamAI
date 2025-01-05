import { skeleton } from '@skeletonlabs/tw-plugin'
import { join } from 'path'
import forms from '@tailwindcss/forms'

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    colors: {
      iamai: '#c87400ff',
      gold: '#fbbf24',
      gray: '#0a0a0a',
      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: [
    forms,
    skeleton({
      themes: { preset: ['sahara'] }
    })
  ]
}

export default config
