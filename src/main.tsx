import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import car1 from './assets/imgOfCars/car1.jpg'
import car2 from './assets/imgOfCars/car2.jpg'
import car3 from './assets/imgOfCars/car3.jpg'
import car4 from './assets/imgOfCars/car4.jpg'
import car5 from './assets/imgOfCars/car5.jpg'

const carImages = [
    {
    url:    car1,
    alt: 'машина под номером 1',
},
{
    url:    car2,
    alt: 'машина под номером 2',
},
{
    url:    car3,
    alt: 'машина под номером 3',
},
{
    url:    car4,
    alt: 'машина под номером 4',
},
{
    url:    car5,
    alt: 'машина под номером 5',
},
]

createRoot(document.getElementById('root')!).render(
  <div>
    <App carImages={carImages}/>
    <a href="https://vk.com/demidmishukov" style={{fontSize: '4rem',}}>link</a>
  </div>
    
  
)
