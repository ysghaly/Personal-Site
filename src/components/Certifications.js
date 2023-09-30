

function Certifications(props) {
    return (
        <div className="certifications">
            <h1  className={props.hide_header}>Certifications:</h1>
            <h2>Digital Media and Marketing <a target="_blank" href="https://conted.ucalgary.ca/international/oneyear/digital-media-marketing/">(Link)</a></h2>
            <h3>University of Calgary - Continuing Education</h3>
            <h3>September 2022 - September 2023</h3>
            <br />
            <div className="certificate-section">
                <h2>Marketing Fundamentals Certificate</h2>
                <h3>Relevant Courses:</h3>
                <ul className="course-list">
                    <li>Marketing Mix</li>
                    <li>Customer Experience</li>
                    <li>Branding and Product Lifecycle</li>
                    <li>Marketing Communications Strategy</li>
                    <li>Marketing Strategic Planning</li>
                </ul>
            </div>
            <br /><br />
            <div className="certificate-section">
                <h2>Digital Marketing Certificate</h2>
                <p className="sub-header">Relevant Courses:</p>
                <ul className="course-list">
                    <li>Foundations of Digital Marketing</li>
                    <li>Digital Content Management</li>
                    <li>Digital Social Platforms</li>
                    <li>Digital Marketing Analysis</li>
                    <li>Digital Promotion and Optimization</li>
                </ul>
            </div>
            <br /><br />
            <div className="certificate-section">
                <h2>Certificate in Front-End Web Development</h2>
                <p className="sub-header">Courses:</p>
                <ul className="course-list">
                    <li>JavaScript and the DOM</li>
                    <li>JavaScript Advanced</li>
                    <li>HTML5 and CSS3</li>
                    <li>HTML5 and CSS3 with jQuery</li>
                </ul>
            </div>
            <br /><br />
            <div className="certificate-section">
                <h2>Certificate in Integrated Digital Media</h2>
                <p className="sub-header">Relevant Courses:</p>
                <ul className="course-list">
                    <li>User Experience Design</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Writing Effective Online Content</li>
                    <li>Digital Transformation: Building Capabilities For The Future</li>
                    <li>Digital Disruption in Commercialization: Maintaining Your Competitive Advantage</li>
                </ul>
            </div>
            <br /><br />
            <div className="certificate-section">
                <h2>Certificate for Front Line Leaders</h2>
                <p className="sub-header">Relevant Courses:</p>
                <ul className="course-list">
                    {/* <li>Building Your Leadership Presence</li> */}
                    <li>Emotional Intelligence</li>
                    {/* <li>Productivity Skills and Tools for Managers</li> */}
                    {/* <li>Dealing with the Difficult Conversation</li> */}
                    <li>Leading Yourself and Others Through Change</li>
                    {/* <li>Negotiation Skills for Working Professionals</li> */}
                    <li>Powerful Professionals: Consulting Skills for Leaders within Organizations</li>
                    <li>Effective Decision Making in a Complex Environment</li>
                    {/* <li>Taking Initiative for Career Growth</li> */}
                    <li>Business Acumen: Lead with Strategic Business Analysis Tools and Resources</li>
                    <li>Business Case Development: Frameworks and Templates</li>
                    {/* <li>Final Assessment for Certificate for Front Line Leaders</li> */}
                </ul>
            </div>
        </div>
    );
  }
  
  export default Certifications;
  