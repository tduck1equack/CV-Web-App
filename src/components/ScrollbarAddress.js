import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ScrollbarAddress.css"
const ScrollbarAddress = (props) => {
    return (
        <div style={{height: 372, width: 633.8}}>
            <nav id="navbar-main" className="navbar navbar-light px-3">
            <a className="navbar-brand" href="#">{props.main}</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">{props.first}</a>
                </li>
                 <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">{props.second}</a>
                </li>
                <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{props.dropdown}</a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#scrollspyHeading3">{props.dropdown_first}</a></li>
                <li><a className="dropdown-item" href="#scrollspyHeading4">{props.dropdown_second}</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#scrollspyHeading5">{props.dropdown_miscellaneous}</a></li>
            </ul>
                </li>
            </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-content-tab scrollbar-morpheus-den" tabindex="0">
                <h4 id="scrollspyHeading1" className="heading">Email</h4>
                <p>
                    Nisi laboris ullamco nostrud consequat.<br/>
                    Fugiat velit cupidatat minim enim Lorem nostrud ex voluptate do nisi.<br/>
                    Ex dolore aute nostrud cillum aliquip do aliqua mollit labore est id laborum exercitation.<br/>
                    
                </p>
                <hr />
                <h4 id="scrollspyHeading2" className="heading">Location</h4>
                <p>
                    <div className="service-container">
                        <div className="grid-items">
                            <h4>University</h4>
                            <div>
                                Test<br/>
                                Test<br/>
                                Test<br/>
                                Test<br/>
                            </div>
                        </div>
                        <div className="grid-items">
                            <h4>Workplace</h4>
                        </div>
                        <div className="grid-items">
                            <h4>Personal</h4>
                        </div>
                        <div className="grid-items">
                            <h4>??</h4>
                        </div>
                    </div>
                </p>
                <h4 id="scrollspyHeading3" className="heading">Pricing</h4>
                <p>{props.content_first}</p>
                <h4 id="scrollspyHeading4" className="heading">Statistics</h4>
                <p>{props.content_first}</p>
                <h4 id="scrollspyHeading5" className="heading">Sponsors</h4>
                <p>{props.content_first}</p>
            </div>
        </div>
    )
}

export default ScrollbarAddress;