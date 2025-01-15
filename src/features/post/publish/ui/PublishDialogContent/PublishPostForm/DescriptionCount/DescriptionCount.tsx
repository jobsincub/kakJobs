import { Typography } from '@wandrehappen/ui-kit'
import { Control, useWatch } from 'react-hook-form'
import { PublishDialogFormValues } from '../../PublishDialogContent'

type Props = {
  control: Control<PublishDialogFormValues>
  maxLength: number
}

export const DescriptionCount = ({ control, maxLength }: Props) => {
  const descriptionValue = useWatch({
    control,
    name: 'description',
    defaultValue: '',
  })

  return (
    <Typography asChild variant={'small'} color={'light-900'} align={'end'}>
      <div>
        {descriptionValue.length}/{maxLength}
      </div>
    </Typography>
  )
}
