import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

export default function Header(){
    return(
        <header class="header-section">
            <div className="container">
                <div className="logo">
                    <img src="img/logo.png" alt="Banner"/>
                </div>
                <div className="nav-menu">
                    <nav className="main-menu mobile-menu">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/trang_mieng">Món tráng miệng</Link></li>
                            <li><Link to="/mon_viet">Món Việt</Link></li>
                            <li><Link to="/mon_ngot">Món ngọt</Link></li>
                            <li><Link to="/nuoc">Nước</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
        
    );
}

