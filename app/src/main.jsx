import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log("main.jsx is loading!")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)