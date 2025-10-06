import './Footer.css'

const Footer = () => {
     const myCopyRights = 'LOGESH P';
  return (
    <>

    <div className="footer-social-link" id='footer'>
    <div className="footer-section text-secondary">
     &copy; 2025 {myCopyRights} All rights reserved.
    </div>

    <div className="footer-social-links">
       {/* <a href="mailto:logeshlp25@gmail.com" className='text-secondary'>
        <i class="footer-social-links fa-solid fa-envelope me-4"></i>
      </a>

       <a href="tel:7695870451" className='text-secondary'>
        <i class="footer-social-links fa-solid fa-phone me-4"></i>
      </a>

       <a href="https://www.linkedin.com/in/logeshpandiyan25" className='text-secondary'>
        <i class="footer-social-links fa-brands fa-linkedin-in me-4"></i>
      </a>

       <a href="https://github.com/LogeshPandiyan" className='text-secondary'>
        <i class="footer-social-links fa-brands fa-github"></i>
      </a>
        */}
       <a href="#" >
        <i class="fa-solid fa-arrow-up ms-5 text-white me-5"></i>
      </a>

    </div>
    </div>

    </>
  )
}

export default Footer