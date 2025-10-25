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
       <a href="#" >
        <i class="fa-solid fa-arrow-up ms-5 text-white me-5"
        title="Go to Top"></i>
      </a>

    </div>
    </div>

    </>
  )
}

export default Footer