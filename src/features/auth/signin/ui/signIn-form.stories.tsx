import { SignInForm } from '@/features/auth/signin'
import { type Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'signIn-form',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>
export default meta

type Story = StoryObj<typeof SignInForm>

export const Default: Story = {}
