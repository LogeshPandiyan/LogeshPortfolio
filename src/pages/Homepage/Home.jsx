import logo from './profile.jpeg'
import './Homepage.css'
import myResume from '../../../public/LOGESH_RESUME_1.pdf'



export const Home = () => {

     const myName ='LOGESH';
  return (
     <>
     <div className="home-container " id='home'>

          <div className="home-content">
               <h3 className='hi text-secondary mb-3' id='go-to-top'>Hi👋 Buddy's I'm</h3>

               <h1 className='my-name'>{myName} <span className='text-primary'>P</span></h1><br />

               <h5 className='my-role text-secondary'>

               <div className='my-career mb-1 '>
               Front End Developer |  Full Stack Web Developer|
               </div>

               <div className='my-career mb-1 '>
               Aspiring AI/ML Developer | Software Developer |
               </div>

               <div className="my-career ">
               Passionate Learner | Tech Explorer
               </div>
                </h5><br />

                <div className="super-btns">
                <button className='get-btn btn btn-primary p-2 text-center '>
                  Hire Me
                    <i className="right-arrow text-center fa-solid fa-arrow-right"></i>
             </button>

                <button 
                className='download-btn btn btn-outline-primary p-2 ms-4'>
                <a href="{myResume}" download="myResume"
                className="download-resume-link">
                    Download Resume 
                <i className="ms-1 fa-regular fa-file"></i>
                </a>
                </button>
                <br /><br />

                </div>
                <div className="social-icons-group">
                <a className='social-anchor-tag' 
                   href="https://www.linkedin.com/in/logeshpandiyan25">
                <i className="social-icons fa-brands fa-linkedin"></i>
                </a>

                <a className='social-anchor-tag' 
                href="https://github.com/LogeshPandiyan">
                    <i className="social-icons fa-brands fa-github ms-4 "></i>
               </a>

                <a className='social-anchor-tag' 
                   href="mailto:logeshlp25@gmail.com">
                  <i className="social-icons fa-solid fa-envelope ms-4"></i>
               </a>

                <a className='social-anchor-tag' 
                   href="tel:7695870451">
                  <i className="social-icons fa-solid fa-phone ms-4"></i>
               </a>
                </div>

          </div>

          {/* image content */}

          <div className="profile-img">
               <img src={logo} 
                    alt="My-Profile" 
                    className='my-profile' 
                    width={320} 
                    height={320} />
          </div>
     </div>
     </>
  )
}
