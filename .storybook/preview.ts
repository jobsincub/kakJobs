import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.scss'
import '@wandrehappen/ui-kit/dist/style.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
