import { nextStep, previousStep } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { ArrowIos, Button, DialogHeader, DialogTitle } from '@wandrehappen/ui-kit'
import { HTMLAttributes } from 'react'

type Props = {
  title: string
  nextButtonText: string
  nextButtonHandler?: () => void
} & HTMLAttributes<HTMLDivElement>

export const CreatePostHeader = ({ title, nextButtonText, nextButtonHandler }: Props) => {
  const dispatch = useAppDispatch()

  const previousStepHandler = () => {
    dispatch(previousStep())
  }

  const nextStepHandler = () => {
    dispatch(nextStep())
  }

  return (
    <DialogHeader isCloseIconVisible={false}>
      <Button variant={'link'} onClick={previousStepHandler}>
        <ArrowIos color={'white'} />
      </Button>
      <DialogTitle>{title}</DialogTitle>
      <Button onClick={nextButtonHandler ?? nextStepHandler} variant={'link'}>
        {nextButtonText}
      </Button>
    </DialogHeader>
  )
}
