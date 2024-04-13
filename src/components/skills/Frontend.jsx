import React from "react"
import frontendData from "./frontendData" // Ensure the correct path is used

const Frontend = () => (
  <div className='skills__content'>
    <h3 className='skills__title'>Frontend Developer</h3>
    <div className='skills__box'>
      {frontendData.map((group) => (
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

export default Frontend
