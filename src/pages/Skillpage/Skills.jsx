import html from '../../assets/HTML5.png'
import css from '../../assets/CSS 3.png'
import bootstrap from '../../assets/Bootstrap.png'
import tailwindcss from '../../assets/Tailwind CSS.png'
import js from '../../assets/JS.png'
import reactjs from '../../assets/RectJs.png'
import nodejs from '../../assets/Node.js.png'
import expressjs from '../../assets/Express.png'
import python from '../../assets/python.png'
import mySql from '../../assets/MySQL.png'
import VSCode from '../../assets/VS Code.png'
import MongoDB from '../../assets/MongoDB.png'
import Figma from '../../assets/Figma.png'
import './Skills.css'

const Skills = () => {
  return (
   <>
   <div className="skills-section">
     <h2 className="skills-heading text-center text-bold">Skills Set </h2>
     <p className="tech text-center text-secondary">Technologies I work with 💼</p>

<section className='skill-sections'>
     <div className="tech-stack-1 ">
        <img src={html} alt="html"              title='HTML'   />
        <img src={css} alt="css"                title='Css'   />
        <img src={bootstrap} alt="bootstrap"    title='Bootstrap'    />
        <img src={tailwindcss} alt="tailwindcss"title='Tailwindcss'     />
        <img src={js} alt="js"                  title='JavaScript'    />
        <img src={reactjs} alt="reactjs"        title='Reactjs'     />
     </div>

     <div className="tech-stack-2 " >
        <img src={nodejs} alt="nodejs"       title='Nodejs'    />
        <img src={expressjs} alt="expressjs" title='Expressjs'    />
        <img src={python} alt="python"       title='Python'    />
        <img src={mySql} alt="mySql"         title='MySql'   />
        <img src={Figma} alt="mySql"         title='Figma'   />
        <img src={MongoDB} alt="mySql"         title='GitHub'   />

     </div>
</section>
<br /><br /><br />

   </div>
   </>
  )
}

export default Skills