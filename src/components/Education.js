

function Education(props) {
    return (
        <div className="education">
          <h1 className={props.hide_header}>Education:</h1>
            <br />
            <div className="education-section">
                <div className="education-left">
                    <h2>Bachelor of Science</h2>
                    <h3>Computer Science</h3>
                    <h4>University of Calgary</h4>
                    <h5>September 2013 - June 2019</h5>
                    <br />
                    <p className="sub-header">Favourite Courses:</p>
                    <ul className="course-list">
                        <li>Database Management Systems</li>
                        <li>Software Engineering</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Logic I</li>
                        <li>Information Technology Ethics</li>
                    </ul>
                </div>
                
                <div className="education-right">
                    <h2>Bachelor of Commerce</h2>
                        <h3>Business Technology Management</h3>
                        <h4>University of Calgary</h4>
                        <h5>September 2013 - June 2019</h5>
                    <br />
                        <p className="sub-header">Favourite Courses:</p>
                        <ul className="course-list">
                            <li>Entrepreneurial Thinking</li>
                            <li>Business Analytics</li>
                            <li>Introduction to Statistics</li>

                        </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default Education;
  