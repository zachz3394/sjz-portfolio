import bannerImg from './pen-and-book.jpg'
import { Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <Image
      height={640}
      width={'100%'}
      src={bannerImg}
      alt='banner image'
      fit='cover'
    />
  )
}

export default Home