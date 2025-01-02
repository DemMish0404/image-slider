import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react'

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
      <div className='image-slider__images' style={{translate: `${-100 * currentImageIndex}%`}}>
        {carImages.map((imgUrl,index)=>  <img className='image-slider__image' key={imgUrl} src={imgUrl} alt="действующий слайд на котором вы находитесь" />)}
      </div>
      
      <button className='image-slider__button left' onClick={showThePreviousSlide} ><ArrowBigLeft/></button>
      <button className='image-slider__button right' onClick={showTheNextSlide} ><ArrowBigRight/></button>


      <div className="image-slider__bullets">
        {
          carImages.map((_,index)=> <button className='image-slider__bullet-btn' onClick={()=> setCurrentImageIndex(index)}>{index === currentImageIndex ? <CircleDot/> : <Circle/> }</button>)
        }
      </div>
    </div>
  )
}

export default App
