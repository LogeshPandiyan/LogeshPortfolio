import './Contact.css'


const Contact = () => {
  return (
    <>
    <div className="contact-container mt-5" >
     <h2 
     className='contact-heading text-center'>
          <b>Get In Touch</b></h2>
          <p className='text-secondary text-center mb-5'>Let's work together</p>

          <div className="contact-full-information">
          <div className="contact-details">
               <form action="/submit">
               <input type="text"
                      placeholder='Your name'
                      className='text-input  border rounded-1 mb-2' /> <br />

                <input type="email"
                      placeholder='Your email'
                      className='text-input  border rounded-1 mb-2' /> <br />

                <textarea name="" 
                            id=""
                            placeholder='Your email'
                             className='text-area border rounded-1 mb-2'
                            ></textarea> <br />              

               <button type='button'
               className='send-btn btn btn-primary'>send message <span><i class="fa-regular fa-paper-plane"></i></span></button>       
               </form>
          </div>

          <div className="contact-info">
               <p className=''>I’m currently open to new opportunities and collaborations. 🚀<br />
                  Whether you have a project idea, a question, or just want to connect, I’d love to hear from you. <br />
                  Feel free to reach out anytime — let’s build something amazing together! 🤝 </p>

                  <div className="social-links ms-3">
                  <i class="contact-social-links fa-solid fa-envelope me-3"></i> Email 
                  <a href="mailto:logeshlp25@gmail.com" className='social-anchor ms-2'>logeshlp25@gmail.com</a><br />

                  <i class="contact-social-links fa-solid fa-phone me-3"></i> Phone 
                  <a href="tel:7695870451"className='social-anchor ms-2'>7695870451</a><br />

                  <i class="contact-social-links fa-brands fa-whatsapp me-3"></i> WhatsApp
                  <a href="tel:7695870451"className='social-anchor ms-2'>7695870451</a><br />

                  <i class="contact-social-links fa-brands fa-linkedin-in me-3"></i>
                  <a href="https://linkedin.com/in/logeshpandiyan25"className='social-anchor ms-2'>linkedin.com/in/logeshpandiyan25</a>
                  </div>

          </div>
          </div>          

    </div><br /><br /><br />
    
    </>
  )
}

export default Contact