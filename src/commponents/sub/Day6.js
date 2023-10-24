import React from 'react'
import Layout from '../common/Layout';
function Day6() {
    return (
        <>
            <section className="vid">
                <video src={`${process.env.PUBLIC_URL}/img/DAY6_mem/예뻣어.mp4`} autoPlay muted loop></video>
            </section>
            <Layout>
                <h2>DAY6 <span>MEMBER</span></h2>
                <div className="box">
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/DAY6_mem/sungjin.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/DAY6_mem/Young_K.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/DAY6_mem/onepill.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/DAY6_mem/doun.jpg`} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Day6