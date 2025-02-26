import { Typography } from '@wandrehappen/ui-kit'
import { Control, useWatch } from 'react-hook-form'
import { PostFormValues } from '../PostForm'

type Props = {
  control: Control<PostFormValues>
  maxLength: number
}

export const DescriptionCount = ({ control, maxLength }: Props) => {
  const description = useWatch({
    control,
    name: 'description',
  })

  return (
    <Typography asChild variant={'small'} color={'light-900'} align={'end'}>
      <div>
        {description.length}/{maxLength}
      </div>
    </Typography>
  )
}
