import React from 'react'

function SkillsSection({skill,progress}) {
    return (
        <div className="SkillSection">
        <div className="skills-container">
            <h5 className="skill-title">{skill}</h5>
            <div className="skills-bar">
            <p className="skill-text>">{progress}</p>
            <div className="skills-progress">
            
            </div>
         </div>
      </div>
 </div>
    )
}

export default SkillsSection
