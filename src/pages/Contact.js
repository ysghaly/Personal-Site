import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Contact.css';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github_733609.png'

function Contact() {
  return (
    <div className="Contact-Page">
      <Header />
      
      <div className='contact-info'>
        <p>
          <span>
            <img width={"50px"} src={email} />
          </span>
          <a href="mailto:youssefadly47@yahoo.com">youssefadly47@yahoo.com</a>
        </p>

        <p>
        <span>
            <img width={"50px"} src={linkedin} />
        </span>
          <a href="https://www.linkedin.com/in/youssef-ghaly-0ab15b111">https://www.linkedin.com/in/youssef-ghaly-0ab15b111</a>
        </p>

        <p>
          <span>
            <img width={"50px"} src={github} />
          </span>
          <a href="https://github.com/ysghaly/">https://github.com/ysghaly/</a>
        </p>
      </div>
      
      <Footer />



    </div>
  );
}

export default Contact;
