import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="inner">
                    <div className="footer_box">
                        <h1>JPY_Entertainment</h1>
                        <ul>
                            <li>
                                <Link to="/">우리</Link>
                            </li>
                            <li>
                                <Link to="/">JYP</Link>
                            </li>
                            <li>
                                <Link to="/">카카오</Link>
                            </li>
                            <li>
                                <Link to="/questions">문의</Link>
                            </li>
                        </ul>
                        <p>&copy; JPY_Entertainment (Woori)</p>
                    </div>
                    <div className="footer_under">
                        <p className="music_cheshire">Cheshire <span>노래 ITZY(있지)2022.11.30</span></p>
                        <p className="music_party">Party O'Clock <span>노래 NMIXX(엔믹스)2023.07.11</span></p>
                        <form action="https://www.google.com/search" method='GET'>
                            <div className="search" title='GOOGLE 새 탭'>
                                <input type="text" name='query' placeholder='검색어를 입력해주세요' />
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer