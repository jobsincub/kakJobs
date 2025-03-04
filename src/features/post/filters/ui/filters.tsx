import { ImageCarousel } from '@/entities/post'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'
import { DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import { useFilters } from '../lib/useFilters'
import s from './filters.module.scss'
import { ImageFilterSelector } from './imageFilterSelector'

export const Filters = () => {
  const { photosForRender, setCurrentIndex, currentOriginalImageUrl, applyFilterHandler } =
    useFilters()
  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Filters'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to enhance your photo by applying various filters. Experiment with
          different styles to achieve the desired look before.
        </DialogDescription>
        <ImageCarousel images={photosForRender} currentIndexCb={setCurrentIndex} />
        <ImageFilterSelector
          image={currentOriginalImageUrl}
          selectFilterHandler={applyFilterHandler}
        />
      </DialogBody>
    </DialogContent>
  )
}
