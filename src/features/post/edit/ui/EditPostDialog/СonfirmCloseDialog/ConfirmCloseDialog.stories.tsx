import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { ConfirmCloseDialog } from './ConfirmCloseDialog'
import { makeStore } from '@/app/store'

export default {
  tags: ['autodocs'],
  title: 'Components/ConfirmCloseDialog',
  component: ConfirmCloseDialog,
} as Meta

const Template: StoryObj = {
  render: () => (
    <Provider store={makeStore()}>
      <ConfirmCloseDialog
        open={true}
        onOpenChange={isOpen => console.log(`Dialog ${isOpen ? 'opened' : 'closed'}`)}
        onConfirm={() => console.log('Dialog closed!')}
      />
    </Provider>
  ),
}

export const Default = Template
