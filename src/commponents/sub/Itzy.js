import React from 'react'
import Layout from '../common/Layout'

function Itzy() {
    return (
        <>
            <section className="vid">
                <video src={`${process.env.PUBLIC_URL}/img/itzy_mem/mafia.mp4`} autoPlay muted loop></video>
            </section>
            <Layout>
                <h2>ITZY <span>Member</span></h2>
                <div className="box">
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/itzy_mem/yeji.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/itzy_mem/ryujin.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/itzy_mem/yuna.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/itzy_mem/Chaeryeong.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/itzy_mem/lia.jpg`} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Itzy