import Header from '../components/Header';
import Footer from '../components/Footer';
import profile from '../assets/profile.jfif';

import '../css/Home.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Home'>
        <div className='profile'>
          <div className='profile-image'>
            <img src={profile} />
          </div>
          <div className='profile-text'>
              <p>
                Hi there. Welcome to my personal website. My name is Youssef Ghaly, and I'm an <b>experienced web developer</b> with a passion for creating engaging and user-friendly online experiences. With a strong foundation in <b>Shopify and WordPress development</b>, I've successfully delivered websites that not only look great but also drive results. Additionally, my recent certification in marketing and digital media has equipped me with the skills to optimize web projects for maximum visibility and impact.
                <br /><br />
                If you're curious, you should browse through this site. You can find examples of some personal projects of mine, as well as my background information and professional qualifications. I've also got my <a className='page-link' href="/contact">contact</a> information listed, so feel free to reach out. 
              </p>
              <br />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
