import React from 'react'
import { LinkedIn, Instagram, GitHub } from '@material-ui/icons'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <GitHub/>
            <LinkedIn/>
            <Instagram/>
        </div>
        <p>&copy; 2023 MarsOriginal owned by Mars Li (李峥)</p>
    </div>
  )
}

export default Footer