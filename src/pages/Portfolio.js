import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio-Page">
        
      <Header />
      <div className="portfolio-relative portfolio-sm:flex portfolio-sm:justify-center portfolio-sm:items-center portfolio-min-h-screen portfolio-bg-dots-darker portfolio-bg-center portfolio-bg-gray-100 portfolio-dark:bg-dots-lighter portfolio-dark:bg-gray-900 portfolio-selection:bg-red-500 portfolio-selection:text-white">
                

            <div className="portfolio-max-w-7xl portfolio-mx-auto portfolio-p-6 portfolio-lg:p-8">
                <div className="portfolio-flex portfolio-justify-center">
                    <h1 className="portfolio-mt-6 portfolio-text-xl portfolio-font-semibold portfolio-text-gray-900 portfolio-dark:text-white">Youssef's Projects</h1>
                </div>

                <div className="portfolio-mt-16">
                    <div className="portfolio-grid portfolio-grid-cols-1 portfolio-md:grid-cols-2 portfolio-gap-6 portfolio-lg:gap-8">
                        <a href="https://react-weather-app-af1o.onrender.com" className="portfolio-scale-100 portfolio-p-6 portfolio-bg-white portfolio-dark:bg-gray-800/50 portfolio-dark:bg-gradient-to-bl portfolio-from-gray-700/50 portfolio-via-transparent portfolio-dark:ring-1 portfolio-dark:ring-inset portfolio-dark:ring-white/5 portfolio-rounded-lg portfolio-shadow-2xl portfolio-shadow-gray-500/20 portfolio-dark:shadow-none portfolio-flex portfolio-motion-safe:hover:scale-[1.01] portfolio-transition-all portfolio-duration-250 portfolio-focus:outline portfolio-focus:outline-2 portfolio-focus:outline-red-500">
                            <div>
                                <div className="portfolio-h-16 portfolio-w-16 portfolio-bg-red-50 portfolio-dark:bg-red-800/20 portfolio-flex portfolio-items-center portfolio-justify-center portfolio-rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" className="portfolio-bi portfolio-bi-cloud-fill" viewBox="0 0 16 16"> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/> </svg>
                                </div>

                                <h2 className="portfolio-mt-6 portfolio-text-xl portfolio-font-semibold portfolio-text-gray-900 portfolio-dark:text-white">Weather App</h2>

                                <p className="portfolio-mt-4 portfolio-text-gray-500 portfolio-dark:text-gray-400 portfolio-text-sm portfolio-leading-relaxed">
                                    This was an assignment for one of my JavaScript classNamees, to develop a functioning weather web application, using jQuery and React. This app makes API calls to openweathermap API, to retrieve weather data.
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="portfolio-self-center portfolio-shrink-0 portfolio-stroke-red-500 portfolio-w-6 portfolio-h-6 portfolio-mx-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>

                        <a href="https://statis-site.onrender.com/" className="portfolio-scale-100 portfolio-p-6 portfolio-bg-white portfolio-dark:bg-gray-800/50 portfolio-dark:bg-gradient-to-bl portfolio-from-gray-700/50 portfolio-via-transparent portfolio-dark:ring-1 portfolio-dark:ring-inset portfolio-dark:ring-white/5 portfolio-rounded-lg portfolio-shadow-2xl portfolio-shadow-gray-500/20 portfolio-dark:shadow-none portfolio-flex portfolio-motion-safe:hover:scale-[1.01] portfolio-transition-all portfolio-duration-250 portfolio-focus:outline portfolio-focus:outline-2 portfolio-focus:outline-red-500">
                            <div>
                                <div className="portfolio-h-16 portfolio-w-16 portfolio-bg-red-50 portfolio-dark:bg-red-800/20 portfolio-flex portfolio-items-center portfolio-justify-center portfolio-rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" className="portfolio-bi portfolio-bi-list-task" viewBox="0 0 16 16"> 
                                  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/> 
                                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/> 
                                  <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/> 
                                </svg>
                                </div>

                                <h2 className="portfolio-mt-6 portfolio-text-xl portfolio-font-semibold portfolio-text-gray-900 portfolio-dark:text-white">Static Website</h2>

                                <p className="portfolio-mt-4 portfolio-text-gray-500 portfolio-dark:text-gray-400 portfolio-text-sm portfolio-leading-relaxed">
                                    This project was aimed at building a static website with HTML and CSS. The website showcases my portfolio and includes a blog section.
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="portfolio-self-center portfolio-shrink-0 portfolio-stroke-red-500 portfolio-w-6 portfolio-h-6 portfolio-mx-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>






                        
                        <a href="https://basic-react-bl9w.onrender.com/" className="portfolio-scale-100 portfolio-p-6 portfolio-bg-white portfolio-dark:bg-gray-800/50 portfolio-dark:bg-gradient-to-bl portfolio-from-gray-700/50 portfolio-via-transparent portfolio-dark:ring-1 portfolio-dark:ring-inset portfolio-dark:ring-white/5 portfolio-rounded-lg portfolio-shadow-2xl portfolio-shadow-gray-500/20 portfolio-dark:shadow-none portfolio-flex portfolio-motion-safe:hover:scale-[1.01] portfolio-transition-all portfolio-duration-250 portfolio-focus:outline portfolio-focus:outline-2 portfolio-focus:outline-red-500">
                            <div>
                                <div className="portfolio-h-16 portfolio-w-16 portfolio-bg-red-50 portfolio-dark:bg-red-800/20 portfolio-flex portfolio-items-center portfolio-justify-center portfolio-rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="grey" className="portfolio-bi portfolio-bi-list-task" viewBox="0 0 24 24"> 
                                <path xmlns="http://www.w3.org/2000/svg" d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"/>                                </svg>
                                </div>

                                <h2 className="portfolio-mt-6 portfolio-text-xl portfolio-font-semibold portfolio-text-gray-900 portfolio-dark:text-white">React Application</h2>

                                <p className="portfolio-mt-4 portfolio-text-gray-500 portfolio-dark:text-gray-400 portfolio-text-sm portfolio-leading-relaxed">
                                  This React application makes use of React Router to create a two-page app. The first page is a basic calculator, to showcase the use of multiple React components and sub-components. The second page is a simple card game, that shows off CSS and jQuery functionality.
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="portfolio-self-center portfolio-shrink-0 portfolio-stroke-red-500 portfolio-w-6 portfolio-h-6 portfolio-mx-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>
                        <a href="https://github.com/ysghaly" className="portfolio-scale-100 portfolio-p-6 portfolio-bg-white portfolio-dark:bg-gray-800/50 portfolio-dark:bg-gradient-to-bl portfolio-from-gray-700/50 portfolio-via-transparent portfolio-dark:ring-1 portfolio-dark:ring-inset portfolio-dark:ring-white/5 portfolio-rounded-lg portfolio-shadow-2xl portfolio-shadow-gray-500/20 portfolio-dark:shadow-none portfolio-flex portfolio-motion-safe:hover:scale-[1.01] portfolio-transition-all portfolio-duration-250 portfolio-focus:outline portfolio-focus:outline-2 portfolio-focus:outline-red-500">
                            <div>
                                <div className="portfolio-h-16 portfolio-w-16 portfolio-bg-red-50 portfolio-dark:bg-red-800/20 portfolio-flex portfolio-items-center portfolio-justify-center portfolio-rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" className="portfolio-bi portfolio-bi-list-task" viewBox="0 0 16 16"> 
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>                                </svg>
                                </div>

                                <h2 className="portfolio-mt-6 portfolio-text-xl portfolio-font-semibold portfolio-text-gray-900 portfolio-dark:text-white">GitHub</h2>

                                <p className="portfolio-mt-4 portfolio-text-gray-500 portfolio-dark:text-gray-400 portfolio-text-sm portfolio-leading-relaxed">
                                  My GitHub account isn't the most organized, but it contains quite a few good examples of my work and stuff that I just love to test and play with.
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="portfolio-self-center portfolio-shrink-0 portfolio-stroke-red-500 portfolio-w-6 portfolio-h-6 portfolio-mx-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>


                    </div>
                </div>
            </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default Portfolio;
