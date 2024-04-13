import React from "react"
import frameworkData from "./frameworkData" // Adjust the path as needed

const Framework = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Framework</h3>
      <div className='skills__box'>
        {frameworkData.map((group) => (
          <div className='skills__group' key={group.groupName}>
            {group.skills.map((skill) => (
              <div className='skills__data' key={skill.name}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className='skills__name'>{skill.name}</h3>
                  <span className='skills__level'>{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Framework
