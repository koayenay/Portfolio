import React, { useState } from "react"
import "./education.css"

const Education = () => {
  const [toggleState, setToggleState] = useState(2)
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='education section ' id='education'>
      <h2 className='section__title'>Education & Experience</h2>
      <span className='section__subtitle'>My Academic & IT Career Journey</span>

      <div className='education__container container'>
        <div className='education__tabs'>
          <div
            className={
              toggleState === 1
                ? "education__button education__active button-flex"
                : "education__button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap education__icon'></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "education__button education__active button-flex"
                : "education__button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt education__icon'> </i>Experience
          </div>
        </div>

        <div className='education__sections'>
          {/* ================= EDUCATION TAB ================= */}
          <div
            className={
              toggleState === 1
                ? "education__content education__content-active"
                : "education__content "
            }
          >
            <div className='education__data'>
              <div>
                <h3 className='education__title'>B.S. in Computer Science</h3>
                <span className='education__subtitle'>
                  California State University of Northridge
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2021–2024
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>

            <div className='education__data'>
              <div></div>
              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
              <div>
                <h3 className='education__title'>A.S. in Science</h3>
                <span className='education__subtitle'>El Camino College</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018–2021
                </div>
              </div>
            </div>

            <div className='education__data'>
              <div>
                <h3 className='education__title'>High School Diploma</h3>
                <span className='education__subtitle'>
                  Basic Education High School (Dagon 1), Myanmar
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2013–2015
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>
          </div>

          {/* ================= EXPERIENCE TAB ================= */}
          <div
            className={
              toggleState === 2
                ? "education__content education__content-active"
                : "education__content "
            }
          >
            {/* IT Analyst - Urth Caffé */}
            <div className='education__data'>
              <div>
                <h3 className='education__title'>IT Analyst</h3>
                <span className='education__subtitle'>
                  Urth Caffé Corporation – Los Angeles, CA
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2024–Present
                </div>
              </div>
              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>

            {/* Research Assistant - CSUN */}
            <div className='education__data'>
              <div></div>
              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
              <div>
                <h3 className='education__title'>
                  Full Stack Developer (Research Assistant)
                </h3>
                <span className='education__subtitle'>ARCS Lab – CSUN</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023–2024
                </div>
              </div>
            </div>

            {/* Freelance Tech Support */}
            <div className='education__data'>
              <div>
                <h3 className='education__title'>
                  Freelance IT & Tech Support
                </h3>
                <span className='education__subtitle'>
                  Los Angeles (Self-Employed)
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2020–2023
                </div>
              </div>
              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
