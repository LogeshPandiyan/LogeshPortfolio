import logo from './profile.jpeg'
import './Homepage.css'



export const Home = () => {

     const myName ='LOGESH';
  return (
     <>
     <div className="home-container">

          <div className="home-content">
               <h3 className='hi text-secondary'>Hi👋 Buddy's I'm</h3>

               <h1 className='my-name'>{myName} <span className='text-primary'>P</span></h1><br />

               <h5 className='my-role text-secondary'>
                FrontEndDeveloper | MERN StackDeveloper | Designer |<br />
                React.js Developer  | Learner 
                </h5><br />

                <div className="super-btns">
                <button className='get-btn btn btn-primary p-2 text-center'>
                    Get in touch 
                    <i className="right-arrow text-center fa-solid fa-arrow-right"></i>
             </button>

                <button 
                className='download-btn btn btn-outline-primary p-2 ms-4'>
                    Download Resume 
                <i className="ms-1 fa-regular fa-file"></i>
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
