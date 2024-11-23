import { Link } from "react-router-dom";
import Projects from "../Pages/Portfolio/components/Projects";
import Portfolio from "../Pages/Portfolio/Portfolio";

const Header = () => {
    return (
        <header className="" style={{position:"fixed" ,borderBottom: "1px solid #2E2E2E", backgroundColor: "#000101", zIndex: "1", width: "100%"}} >
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Products</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/portfolio"}>Portfolio</Link>
                                {/* <a  href="#resume">Blog</a> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blogs</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#social-media">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
