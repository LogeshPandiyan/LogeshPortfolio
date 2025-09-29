import React from 'react'
import { NavLink } from 'react-router-dom';
import './Projects.css'

const Projects = () => {

     const pro = 'Projects ';
     const pro1 ='Music Recommendation System By Facial Emotion';
     const pro2 ='Online Educational Tutorial Platform';
     const pro3 ='E-Commerce Web Application Platform';


  return (
    <>
    <div className="projects">
    <main>
     <h2 className='text-center'>
          {pro} 
     </h2>
     <h6 className='text-center text-secondary'>
          Project I've worked & have been working 🚀
     </h6>
    </main>

     <section className='project-section'>

     <div className="pro mt-4">
          <h4 className='pro-title ms-3'><b>{pro1}</b> </h4>

          <p className='pro-description text-secondary mt-3'>
             A real-time music Automatically recommend songs based on the user’s facial expression 
             (happy, sad, angry) detected via webcam.</p>

          <h5  className='mt-4 mb-3'>Technologies Used</h5>  
          <span className='Python ms-3'>Python</span>
          <span className='NumPy ms-3'>NumPy</span>
          <span className='Tensorflow ms-3'>Tensorflow</span>
          <span className='CNN ms-3'>CNN</span> <br /><br />
          <span className='HTML ms-3'>HTML</span>
          <span className='CSS ms-3'>CSS</span>
          <span className='JavaScript ms-3'>JavaScript</span>
          <span className='APIs ms-3'>APIs</span>  

          <h5  className='mt-4'>Key Features</h5>
          <ul>
               <li className='text-secondary'>Implemented facial emotion recognition using CNN and TensorFlow</li>
               <li className='text-secondary'>Developed a real-time system that captures emotions via webcam</li>
               <li className='text-secondary'>Integrated music API to fetch playlists based on detected emotions</li>
          </ul>

          <button type='button'
          className='btn btn-primary project-link-btn'>
               <NavLink to="https://github.com/LogeshPandiyan"
               className={'text-white'}>View project
               </NavLink>
          </button>
     </div>
{/*  */}



        <div className="pro mt-4">
          <h4 className='pro-title ms-3'><b>{pro2}</b></h4>

          <p className='pro-description text-secondary mt-3'>
            Build a MERN stack web platform where users can learn coding tutorials, practice examples,
             and run code snippets.</p>

 
          <h5 className='mt-4 mb-3'>Technologies Used</h5>  
          <span className='Python ms-3'>React.js</span>
          <span className='jest ms-3'>Jest</span>
          <span className='NumPy ms-3'>Bootstrap</span><br /><br />
          <span className='CNN ms-3'>Node.js</span>
          <span className='HTML ms-3'>Express.js</span>
          <span className='CSS ms-3'>MongoDB</span>

          <h5 className='mt-4'>Key Features</h5>
          <ul>
               <li className='text-secondary'>User Authentication & Profiles</li>
               <li className='text-secondary'>Discussion Forum / Q&A Section</li>
               <li className='text-secondary'>Encourage users to learn more</li>
               <li className='text-secondary'>Add/update new content dynamically</li>
               <li className='text-secondary'>Better user experience with theme</li>
               <li className='text-secondary'>Run HTML, CSS, JS instantly in-browser</li>
          </ul>

          <button type='button'
          className='btn btn-primary project-link-btn'>
               <NavLink to="https://github.com/LogeshPandiyan"
               className={'text-white'}>View project</NavLink>
          </button>
     </div>
     
     
        <div className="pro mt-4">
          <h4 className='pro-title ms-3'><b>{pro3}</b></h4>

          <p className='pro-description text-secondary mt-3'>
            Build a MERN stack web platform where users can learn coding tutorials, practice examples,
             and run code snippets.</p>

 
          <h5 className='mt-4 mb-3'>Technologies Used</h5>  
          <span className='Python ms-3'>React.js</span>
          <span className='jest ms-3'>Jest</span>
          <span className='NumPy ms-3'>Bootstrap</span><br /><br />
          <span className='CNN ms-3'>Node.js</span>
          <span className='HTML ms-3'>Express.js</span>
          <span className='CSS ms-3'>MongoDB</span>

          <h5 className='mt-4'>Key Features</h5>
          <ul>
               <li className='text-secondary'>User Authentication & Profiles</li>
               <li className='text-secondary'>Discussion Forum / Q&A Section</li>
               <li className='text-secondary'>Encourage users to learn more</li>
               <li className='text-secondary'>Add/update new content dynamically</li>
               <li className='text-secondary'>Better user experience with theme</li>
               <li className='text-secondary'>Run HTML, CSS, JS instantly in-browser</li>
          </ul>

          <button type='button'
          className='btn btn-primary project-link-btn'>
               <NavLink to="https://github.com/LogeshPandiyan"
               className={'text-white'}>View project</NavLink>
          </button>
     </div>

     </section>
    </div><br />
    </>
  )
}

export default Projects