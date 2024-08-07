import React from 'react'
import s from './ReqButton.module.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '../../Routes'

function ReqButton() {
  return (
    <div>
      <Router>
        <AppRoutes/>
      </Router>
    </div>
  )
}

export default ReqButton