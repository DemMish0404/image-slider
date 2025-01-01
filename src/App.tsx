import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'

type imgUrlsType ={
  carImages: string[]
}

function App({carImages}: imgUrlsType) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function showThePreviousSlide(){
    // еслти достигнут минимум - то начинаем с конца ( чтобы слайдер по кругу работал)
    if(currentImageIndex === 0 ) {
      setCurrentImageIndex(carImages.length - 1)
    } else{
      setCurrentImageIndex(currentImageIndex - 1)
    }

    
  }

  function showTheNextSlide(){
    // еслти достигнут максимум - то возвращаем в начало ( чтобы слайдер по кругу работал)
    if(currentImageIndex === carImages.length - 1 ) {
      setCurrentImageIndex(0)
    } else{
      setCurrentImageIndex(currentImageIndex + 1)
    }

    
  }
  
  return (
    <div className='image-slider'>
      <img className='image-slider__current-image' src={carImages[currentImageIndex]} alt="действующий слайд на котором вы находитесь" />
      <button className='image-slider__button left' onClick={showThePreviousSlide} ><ArrowBigLeft/></button>
      <button className='image-slider__button right' onClick={showTheNextSlide} ><ArrowBigRight/></button>
    </div>
  )
}

export default App
