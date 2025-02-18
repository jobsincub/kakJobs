import { Typography } from '@wandrehappen/ui-kit'
import { Control, useWatch } from 'react-hook-form'
import { PublishPostFormValues } from '../../../../lib/usePublishPostForm'

type Props = {
  control: Control<PublishPostFormValues>
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
