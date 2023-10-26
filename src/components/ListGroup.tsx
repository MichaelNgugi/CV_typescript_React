function ListGroup() {
  return (
    <ol className="list-group">
      <li className="list-group-item  justify-content-flex-end align-items-start">
        <span className="badge">
          <img id="profile" src="src\assets\profile.jpg"></img>
        </span>
        <br></br>
        <div className="ms-2">
          <h2 className="fw-bold">Michael Murei</h2>
          myemail@gmail.com <br></br>646-207-1760
          <p>linkedin.com/in/michaelmurei</p>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <h3 className="fw-bold">Summary</h3>
          Insightful computer science student who excels at Java and Python.
          Seeking a software engineering internship at ASML. Will finish Junior
          year in May. Maintained a 4.0 average in core Python and Java classes.
          Won the TopCoder coding challenge in Java in February 2020 and the
          Coderbyte programming challenge in March of 2020.
        </div>
      </li>
      <li className="list-group-item  justify-content-center align-items-start">
        <div className="ms-0">
          <h3 className="fw-bold">Education</h3>
          <ol className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="fw-bold">
                USIU-A (United States International university)
              </div>
              BS in Computer Science<br></br>
              Graduation Date: June 2020 <br></br>GPA: 3.8/4.0
              <div>
                <p className="fw-bold">Relevant Coursework Programming:</p>{" "}
                Java, Python, C Computer Science: databases, software
                engineering, data structures, data mining
              </div>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">School Projects</div>
              <ul>
                <li>
                  Built and led a team of 6 computer science students to develop
                  a new geolocation app that received the Peter. P. Evans Award
                  for Computer Science.
                </li>
                <li>
                  Created an online calculator using Java that was runner-up in
                  the 2020 school coding competition.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </li>
      <li className="list-group-item  justify-content-center align-items-start">
        <h3 className="fw-bold">Skills</h3>
        <ul>
          <li>
            <strong>Languages:</strong> Python, Java, C, Ruby
          </li>
          <li>
            <strong>Technical Skills:</strong> software engineering, databases,
            data mining, data structures, machine learning
          </li>
        </ul>
      </li>
      <li className="list-group-item  justify-content-center align-items-start">
        <h4 className="fw-bold">Extra Curricular Activities</h4>
        <ul>
          <li>
            Penned monthly articles about Java and Python for the student blog.
          </li>
          <li>
            Did community service at a Childrens home for 3 months assisting in
            cleaning duties
          </li>
        </ul>
      </li>
      <li className="list-group-item  justify-content-center align-items-start">
        <h4 className="fw-bold">Hobbies and Interests</h4>
        Playing football <br></br>Listening to Music <br></br> Travelling
      </li>
    </ol>
  );
}

export default ListGroup;
