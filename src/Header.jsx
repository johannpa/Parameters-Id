import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/1">Category 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/2">Category 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/3">Category 3</Link>
                        </li>
                    </ul>
                </nav>
                <br />
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route path="/category/:id" Component={Child} />
                </Routes>
            </Router>
        </div>
      </div>
    </div>
  )
}

export default Header;

function Child() {
    let { id } = useParams();
    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
