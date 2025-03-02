import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { ConfirmCloseDialog } from './ConfirmCloseDialog'
import { makeStore } from '@/app/store'

export default {
  title: 'Components/ConfirmCloseDialog',
  component: ConfirmCloseDialog,
} as Meta

const Template: StoryObj = {
  render: () => (
    <Provider store={makeStore()}>
      <ConfirmCloseDialog onClose={() => console.log('Dialog closed!')} />
    </Provider>
  ),
}

export const Default = Template
