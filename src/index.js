import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import 'typeface-exo'
import { BrowserRouter } from 'react-router-dom'
import dotenv from 'dotenv'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = document.getElementById('root')

dotenv.config({ path: './.env' })

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
// serviceWorker.unregister();
