import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Open Analyzer</h1>
    <p>Analyzer from OpenPolyEdu team.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
