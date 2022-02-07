import { Slide } from '@material-ui/core'

import CustomSlide from './CustomSlide'

import { ImageMediaType } from '../../shared/entities'
import { CustomSlideDirection } from './types'

export interface SlideViewProps {
  images: ImageMediaType[]
  currentIndex: number
  direction: CustomSlideDirection
}

export default function SlideView({
  images,
  currentIndex,
  direction,
}: SlideViewProps): JSX.Element {
  const components = images.map((image, index) => {
    if (index === currentIndex) {
      return (
        <Slide key={index} direction={direction} in={true} timeout={500}>
          <CustomSlide key={index} image={image.url} isEntering={true} />
        </Slide>
      )
    }

    if (direction === 'left') {
      if (currentIndex === 0 && index === images.length - 1) {
        return <CustomSlide key={index} image={image.url} isEntering={false} />
      }

      if (index + 1 === currentIndex) {
        return <CustomSlide key={index} image={image.url} isEntering={false} />
      }
    }

    if (direction === 'right') {
      if (index === 0 && currentIndex === images.length - 1) {
        return <CustomSlide key={index} image={image.url} isEntering={false} />
      }

      if (currentIndex + 1 === index) {
        return <CustomSlide key={index} image={image.url} isEntering={false} />
      }
    }

    return <></>
  })

  return <>{components}</>
}
