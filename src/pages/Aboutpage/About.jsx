import './About.css'

export const About = () => {

  const myName = 'Logesh P';

  return (
     <>
          <h1 className="text-center mt-5">About me </h1>
          <p className='text-para text-center text-secondary'>Know my journey in tech</p>
          <div className="about-container mb-5 mt-3 bg-primary">

         <div className="about-summary ">
          <p className="my-para text-white">
           👋 Hey! I’m {myName} I've recently completed my Bachelor degree in Computer Science from GTN Arts College.
           I work with both front-end and back-end technologies, which means I enjoy everything from designing clean, 
           user-friendly interfaces to making sure the logic behind them runs smoothly. <br /><br />
           I started my journey because I’m passionate about technology and problem-solving. Along the way, I’ve built projects, 
           explored responsive design, and worked on full-stack applications that focus on performance and simplicity. <br /><br />
           I’m always curious and love picking up new skills—whether it’s learning the latest web frameworks, experimenting with design trends, 
           or building small side projects just for fun. My goal is simple: to create web experiences that are modern, efficient, and enjoyable for everyone. 🚀
          </p>
         </div>

         <div className="my-work">
          <h4>👉 What I Do</h4>
          <br />
          <ul>
             <li>Build modern websites and apps with today’s frameworks</li>
             <li>Create responsive and mobile-friendly designs</li>
             <li>Develop full-stack applications (front-end + back-end)</li>
             <li>Work with databases and manage data effectively</li>
             <li>Edit on PhotoShop,Picsart and Canva</li>
             <li>React.js | Node.js | Express.js | MongoDB </li>
          </ul>
         </div>
         <br /><br /><br /><br /><br /><br /><br /><br />

     </div>
     </>
  )
}
