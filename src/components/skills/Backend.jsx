import React from "react"
import backendData from "./backendData" // Ensure the correct path is used

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend</h3>
      <div className='skills__box'>
        {backendData.map((group) => (
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

export default Backend
