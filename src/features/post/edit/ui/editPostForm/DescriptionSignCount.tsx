import { Typography } from '@wandrehappen/ui-kit'
import { Control, useWatch } from 'react-hook-form'
import { EditPostFormValues } from '../../lib/useEditPostForm'

type Props = {
  control: Control<EditPostFormValues>
  maxLength: number
}

export const DescriptionSignCount = ({ control, maxLength }: Props) => {
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
