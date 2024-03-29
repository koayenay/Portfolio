import React from "react"

const Info = () => {
  // Calculate the number of years since 2019
  const startYear = 2019
  const currentYear = new Date().getFullYear()
  const experienceYears = currentYear - startYear
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>{experienceYears} Years </span>
      </div>

      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>10+ Projects</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-support about__icon'></i>
        <h3 className='about__title'>Learning</h3>
        <span className='about__subtitle'>24/7</span>
      </div>
    </div>
  )
}

export default Info
