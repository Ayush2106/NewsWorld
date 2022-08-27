import React, { Component } from 'react'
// import { a } from "react-router-dom";
import {Link} from "react-router-dom";
export class navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            {/* <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
              <span className="navbar-hrefggler-icon"></span>
            </buthrefn> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                {/* <li className="nav-item">
                </li> */}
                <li className="nav-item mx-3"><Link className="nav-a" to="/business">Business</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/general">General</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/health">Health</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/science">Science</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/sports">Sports</Link></li>
                <li className="nav-item mx-3"><Link className="nav-a" to="/technology">Technology</Link></li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default navbar


