import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="inner">
                <h1 className="logo"><Link to="/"><img src={`${process.env.PUBLIC_URL}/img/channels4_profile.png`} alt="jyp 하얀색 로고" /></Link></h1>
                <div className="wrap">
                    <ul id="gnb">
                        <li>
                            <Link to="/day6">DAY6</Link>
                        </li>
                        <li>
                            <Link to="/itzy">ITZY</Link>
                        </li>
                        <li>
                            <Link to="/twice">TWICE</Link>
                        </li>
                        <li>
                            <Link to="/nmixx">NMIXX</Link>
                        </li>
                        <li>
                            <Link to="/location">LOCATION</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header