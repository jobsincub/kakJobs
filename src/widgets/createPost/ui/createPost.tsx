import { AddPhoto } from '@/features/post/createPost'
import { Button, Dialog, DialogTrigger } from '@wandrehappen/ui-kit'
import React from 'react'

export const CreatePost = () => {
  // const [crop, setCrop] = useState<Crop>()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add post</Button>
      </DialogTrigger>
      <AddPhoto />
    </Dialog>
  )
}
