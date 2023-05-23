import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Arfan</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#education' className='footer__link'>
              Education
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>

          <li>
            <a href='#contact' className='footer__link'>
              Contact
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/arfan-myint-540587210/'
            className='footer__social-link'
            target='__blank'
          >
            <i className='uil uil-linkedin-alt'></i>
          </a>
          <a
            href='https://www.github.com/koayenay'
            className='footer__social-link '
            target='__blank'
          >
            <i className='uil uil-github-alt'></i>
          </a>
        </div>
      </div>

      <span className='footer__copy'>
        &#169; Arfan Myint. All rigths reserved
      </span>
    </footer>
  )
}

export default Footer
