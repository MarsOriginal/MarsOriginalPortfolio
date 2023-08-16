import React from 'react'
import { Email } from '@material-ui/icons'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import '../styles/Home.css'


function Home() {

  return (
    <div className="home">
        <div className="about">
            <h2>Hello World!</h2>
            <div className="prompt">
                <p>I'm a 
                    <span> </span>
                    <span style={{fontWeight: "bold", color: "green"}}>
                        <Typewriter words={['Developer', 'Designer', 'Tempura Chef =)']}
                            typeSpeed={100} loop={0}/>
                    </span>
                    <span>
                        <Cursor cursorStyle='<'/>
                    </span>
                </p>
                <Email/>
            </div>
        </div>
        <div className="skills">
            <ol className="list">
                <li className="item">
                    <h2>FrontEnd</h2>
                    <span>React, React Native, HTML, CSS, User-Centred Design</span>
                </li>
                <li className="item">
                    <h2>BackEnd</h2>
                    <span>NodeJS, ExpressJS, SQL, MongoDB</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>Java, JavaScript, Python, C, Swift</span>
                    <br/>
                    <span>Of course, I also understand: English & Mandarin</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home