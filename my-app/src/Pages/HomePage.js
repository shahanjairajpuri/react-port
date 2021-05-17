import React from 'react'
import{faFacebook} from '@fortawesome/free-brands-svg-icons';
import{faGithub} from '@fortawesome/free-brands-svg-icons';
import{faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
function HomePage() {
    return (
        <div className ="HomePage">
        <header className = 'hero'>
            <h1 className="hero-text">Hi,
          <span> I am lorem Ipsum </span>
            </h1>
            <p className="para">lorem ispum coluyre nhdyeie kuryfhvb hf hhty 
            nnnmuysvdn mkjd.Fcondyt gredsut hftroit yiont fsed
             aderseetug onevcfdre doscreet i hfyr like toi,
             Ninnidch etvc hi how atw you .
           </p>
            <div className ="icons">
            <Link className="icon-holder">
            <FontAwesomeIcon  className='icon fb'icon={faFacebook} />
            </Link>
            <Link className="icon-holder">
            <FontAwesomeIcon className='icon gh' icon={faGithub} />
            </Link>
            <Link className="icon-holder"> 
            <FontAwesomeIcon className='icon yt' icon={faYoutube} />
             </Link>

            </div>

        </header>
            
        </div>
    )
}

export default HomePage;
