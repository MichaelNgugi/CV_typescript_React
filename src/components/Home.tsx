function Home() {
  return (
    <div id="home">
      <h2>Personal Details</h2>
      <div className="row">
        <div className="col-md-7">
          <strong>
            <h4>Michael Ngugi Murei</h4>
          </strong>
          <h5>michaelmurei17@gmail.com</h5>
          <h5>+254 737 543 047</h5>
          <br></br>
          <h4>Summary</h4>
          <p>
            Currently studying in United States International Univeristy.
            Seeking for engineering internships at ElectraTech Solutions to
            leverage my project management, problem solving and communication
            skills to help create innovative solutions for the company's most
            challenging projects.
          </p>
        </div>
        <div className="col-md-3">
          <span className="badge bg-secondary">
            <img src="src\assets\profile.jpg"></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
