import React from 'react'
import Layout from '../common/Layout'

function Nmixx() {
    return (
        <>
            <section className="vid">
                <video src={`${process.env.PUBLIC_URL}/img/nmixx_mem/young.bump.stupid.mp4`} autoPlay muted loop></video>
            </section>
            <Layout>
                <h2>NMIXX <span>Member</span></h2>
                <div className="box">
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/HAEWON.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/LILY.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/SULLYOON.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/BAE.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/JIWOO.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/nmixx_mem/KYUJIN.jpg`} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Nmixx