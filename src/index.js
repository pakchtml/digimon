import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from './context/DigimonContext'
import GS from './Globalstyles'

ReactDOM.render(
   <Provider>
      <Router>
         <App/>
         <GS/>
      </Router>
   </Provider>
   ,
   document.getElementById('root')
)