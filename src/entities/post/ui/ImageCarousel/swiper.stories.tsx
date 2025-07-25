import { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'

import { ImageCarousel, type ImageCarouselHandle } from './ImageCarousel'

const meta: Meta<typeof ImageCarousel> = {
  component: ImageCarousel,
  decorators: [
    Story => (
      <div
        style={{
          margin: '0 auto',
          maxWidth: '600px',
          objectFit: 'cover',
          width: '500px',
          height: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],

  title: 'Components/ImageCarousel',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const carouselRef = useRef<ImageCarouselHandle>(null)

    const goToSlide = (index: number) => {
      if (carouselRef.current) {
        carouselRef.current.goToSlide(index)
      }
    }

    const currentIndexCb = (index: number) => {
      console.log(index)
    }

    return (
      <div>
        <ImageCarousel ref={carouselRef} {...args} currentIndexCb={currentIndexCb} />
        <button onClick={() => goToSlide(4)} style={{ marginTop: '20px' }}>
          Перейти к 5 слайду
        </button>
        {/* Можно добавить дополнительную логику ниже */}
      </div>
    )
  },
  args: {
    images: [
      {
        uploadId: '1',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-1.ta1luj..png?preset=image_570w_2x',
      },
      {
        uploadId: '2',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-2.pq3rer..png?preset=image_570w_2x',
      },
      {
        uploadId: '3',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-1.ta1luj..png?preset=image_570w_2x',
      },
      {
        uploadId: '4',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-2.pq3rer..png?preset=image_570w_2x',
      },
      {
        uploadId: '5',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-1.ta1luj..png?preset=image_570w_2x',
      },
      {
        uploadId: '6',
        url: 'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-2.pq3rer..png?preset=image_570w_2x',
      },
    ],
  },
}
