import React from 'react'
import { LinkedIn, GitHub, Email } from '@material-ui/icons'
import '../styles/Home.css'


function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Hello World!</h2>
            <div className="prompt">
                <p>I'm a developer.</p>
                <LinkedIn/>
                <GitHub/>
                <Email/>
            </div>
        </div>
        <div className="skills"></div>
    </div>
  )
}

export default Home