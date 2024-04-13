import React from "react"
import otherData from "./otherData" // Ensure the correct path is used

const Other = () => (
  <div className='skills__content'>
    <h3 className='skills__title'>Tools</h3>
    <div className='skills__box'>
      {otherData.map((group) => (
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

export default Other
