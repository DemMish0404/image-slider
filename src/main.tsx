import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import car1 from './assets/imgOfCars/car1.jpg'
import car2 from './assets/imgOfCars/car2.jpg'
import car3 from './assets/imgOfCars/car3.jpg'
import car4 from './assets/imgOfCars/car4.jpg'
import car5 from './assets/imgOfCars/car5.jpg'

const carImages = [car1,car2,car3,car4,car5]

createRoot(document.getElementById('root')!).render(
  
    <App carImages={carImages}/>
  
)
