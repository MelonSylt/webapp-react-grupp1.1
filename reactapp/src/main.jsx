import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './CommercialCarousel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Carousel />
        <App />
        
  </React.StrictMode>,
)
