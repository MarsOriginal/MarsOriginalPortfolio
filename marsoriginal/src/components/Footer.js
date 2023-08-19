import React from 'react'
import { Link } from '@material-ui/core';
import { LinkedIn, Instagram, GitHub } from '@material-ui/icons'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Link href="https://github.com/MarsOriginal" target="_blank" rel="noopener noreferrer">
              <GitHub className="material-icons"/>
            </Link>
            <Link href="https://www.linkedin.com/in/zheng-li-1b930416b/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="material-icons"/>
            </Link>
            <Link href="https://instagram.com/marsli_0508?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
              <Instagram className="material-icons"/>
            </Link>
        </div>
        <p>&copy; 2023 MarsOriginal owned by Mars Li (李峥)</p>
    </div>
  )
}

export default Footer