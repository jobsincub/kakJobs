import { nextStep, previousStep } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { ArrowIos, Button, DialogHeader, DialogTitle } from '@wandrehappen/ui-kit'
import { HTMLAttributes } from 'react'

type Props = {
  title: string
  nextButtonText?: string
  nextButtonHandler?: () => void
} & HTMLAttributes<HTMLDivElement>

export const CreatePostHeader = ({
  title,
  nextButtonText = 'Next',
  nextButtonHandler,
  children,
  ...props
}: Props) => {
  const dispatch = useAppDispatch()

  const previousStepHandler = () => {
    dispatch(previousStep())
  }

  const nextStepHandler = () => {
    dispatch(nextStep())
  }

  return (
    <DialogHeader isCloseIconVisible={false} {...props}>
      <Button variant={'link'} onClick={previousStepHandler}>
        <ArrowIos color={'white'} />
      </Button>
      <DialogTitle>{title}</DialogTitle>
      {children || (
        <Button onClick={nextButtonHandler ?? nextStepHandler} variant={'link'}>
          {nextButtonText}
        </Button>
      )}
    </DialogHeader>
  )
}
