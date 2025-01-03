import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react'

type imgUrlsType ={
  carImages: {
    url: string,
    alt: string,
  }[]
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
      <a href="#end-of-the-slider-block" className='skip-link'>пропустить блок со слайдером</a>
      <div className='image-slider__images' style={{translate: `${-100 * currentImageIndex}%`}}>
        {carImages.map(({url, alt},index)=>  <img className='image-slider__image' aria-hidden={ index !== currentImageIndex } key={url} src={url} alt={alt} />)}
      </div>
      
      <button className='image-slider__button left' onClick={showThePreviousSlide} ><ArrowBigLeft aria-hidden /></button>
      <button className='image-slider__button right' onClick={showTheNextSlide} ><ArrowBigRight aria-hidden /></button>


      <div className="image-slider__bullets">
        {
          carImages.map((_,index)=> <button aria-label={`перейти на картинку номер ${index + 1}`} className='image-slider__bullet-btn' onClick={()=> setCurrentImageIndex(index)}>{index === currentImageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden /> }</button>)
        }
      </div>
      <div id='end-of-the-slider-block'></div>
    </div>
  )
}

export default App
