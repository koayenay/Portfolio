import React, { useState } from "react"
import "./education.css"

const Education = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='education section ' id='education'>
      <h2 className='section__title'>Education</h2>
      <span className='section__subtitle'>My Education Journey</span>

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
          <div
            className={
              toggleState === 1
                ? "education__content education__content-active"
                : "education__content "
            }
          >
            <div className='education__data'>
              <div>
                <h3 className='education__title'>Computer Science</h3>
                <span className='education__subtitle'>
                  California State University of Northridge
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2019-Present
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
                <h3 className='education__title'>Associates in Science</h3>
                <span className='education__subtitle'>El Camino College</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2016-2019
                </div>
              </div>
            </div>

            <div className='education__data'>
              <div>
                <h3 className='education__title'>High School</h3>
                <span className='education__subtitle'>
                  Basic Education of High School, Dagon (1) [Back in Myanmar,
                  Burma]
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2013-2015
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>

            {/* <div className='education__data'>
              <div></div>
              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
              <div>
                <h3 className='education__title'>UX Expert</h3>
                <span className='education__subtitle'>
                  California State University of Northridge
                </span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018-2018
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "education__content education__content-active"
                : "education__content "
            }
          >
            <div className='education__data'>
              <div>
                <h3 className='education__title'>Coming Soon</h3>
                <span className='education__subtitle'>YOUR COMPANY</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023-2070
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div>

            {/* <div className='education__data'>
              <div></div>
              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
              <div>
                <h3 className='education__title'>UX designer</h3>
                <span className='education__subtitle'>Apple Inc - Spain</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2020-2021
                </div>
              </div>
            </div>

            <div className='education__data'>
              <div>
                <h3 className='education__title'>Web Designer</h3>
                <span className='education__subtitle'>Figma - Spain</span>
                <div className='education__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018-2020
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <div className='education__line'></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
// https://youtu.be/3aCoZudPEKE?t=8987
