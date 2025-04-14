import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { makeStore } from '@/app/store'
import { Dialog } from '@wandrehappen/ui-kit'
import { useForm, FormProvider } from 'react-hook-form'
import { EditPostDialog } from './'

export default {
  tags: ['autodocs'],
  title: 'Components/EditPost',
  component: EditPostDialog,
} as Meta

const Template: StoryObj = {
  render: () => {
    const methods = useForm()

    return (
      <Provider store={makeStore()}>
        <FormProvider {...methods}>
          <Dialog open>
            <EditPostDialog />
          </Dialog>
        </FormProvider>
      </Provider>
    )
  },
}

export const Default = Template
