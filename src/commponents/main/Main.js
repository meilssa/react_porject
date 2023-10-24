import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const music_url = {
    itzy: "https://open.spotify.com/track/24hyxhmnwutr6ncxX9ALIU?si=cd5bdd264eb24aebs",
    nmixx: "https://open.spotify.com/track/73qHAnNGv0iuiedYenz8EB?si=6f53a70687404d3a",
    day6: "https://open.spotify.com/track/3Pqp7yCHo6hbxMS0ZGc93N?si=196d4d8d8ccf40b5",
    twice: "https://open.spotify.com/track/3dGau6VEg8Vo3SX8yKqOa3?si=acb34c0a4f5f4f74",
    park: "https://open.spotify.com/track/7yaRbW2OwKHOhH9QcAJrag?si=dc9712c490eb4ab0",
}
const youtubelink = [
    { link: "zugAhfd2r0g" },
    { link: "Rd2wppggYxo" }
]

function Main() {
    const container = useRef(null)
    const [Youtube, setYoutube] = useState(youtubelink[0].link)
    return (
        <>
            <section className="mv">
                <iframe src={`https://www.youtube.com/embed/${Youtube}?autoplay=1&mute=1`} ></iframe>
                <div id="container" className='slid off' ref={container}>
                    <h1>음원차트</h1>
                    <div id="chart">
                        <div className="TOP100" onClick={() => { window.open(music_url.itzy) }}>
                            1.&nbsp;&nbsp;&nbsp;&nbsp;<b>CAKE</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>노래 • ITZY • KILL MY DOUBT • 3:19</span>
                        </div>
                        <div className="TOP100" onClick={() => { window.open(music_url.nmixx) }}>
                            2.&nbsp;&nbsp;&nbsp;&nbsp;<b>Young, Dumb, Stupid</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>노래 • NMIXX • Young, Dumb, Stupid • 3:11</span>
                        </div>
                        <div className="TOP100" onClick={() => { window.open(music_url.day6) }}>
                            3.&nbsp;&nbsp;&nbsp;&nbsp;<b>예뻤어 You Were Beautiful</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>노래 • DAY6(데이식스) • Every DAY6 • 4:44</span>
                        </div>
                        <div className="TOP100" onClick={() => { window.open(music_url.twice) }}>
                            4.&nbsp;&nbsp;&nbsp;&nbsp;<b>UP NO MORE</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>노래 • TWICE • Eyes wide open • 3:35</span>
                        </div>
                        <div className="TOP100" onClick={() => { window.open(music_url.park) }}>
                            5.&nbsp;&nbsp;&nbsp;&nbsp;<b>어머님이 누구니 (Who's your mama?)</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>노래 • 박진영 • 24/34 • 3:41</span>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faAngleLeft} className='on' onClick={() => { container.current.classList.add("on") }} />
                    <FontAwesomeIcon icon={faAngleRight} className='off' onClick={() => {
                        container.current.classList.remove("on")
                    }} />
                    <div className="info">
                        음원 차트 클릭 시 spotify 곡 정보로 이동합니다.
                    </div>
                </div>
            </section >
            <div className="click" onClick={() => { setYoutube(youtubelink[0].link) }}></div>
            <div className="click2" onClick={() => { setYoutube(youtubelink[1].link) }}></div>
        </>
    )
}

export default Main