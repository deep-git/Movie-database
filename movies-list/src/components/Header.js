import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className="content_container">
            <div className="inner">
                <div className="main_title">
                    <Link to="/" className="link">Movies Database</Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/" className="link">Watch list</Link>
                    </li>
                    <li>
                        <Link to="/watched" className="link">Watched</Link>
                    </li>
                    <li>
                        <Link to="/add" className="link">Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}
