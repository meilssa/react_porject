import React from 'react'
import Layout from '../common/Layout'

function Twice() {
    return (
        <>
            <section className="vid">
                <video src={`${process.env.PUBLIC_URL}/img/twice_mem/dancethenightaway.mp4`} autoPlay muted loop></video>
            </section>
            <Layout>
                <h2>TWICE <span>Member</span></h2>
                <div className="box">
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/JIHYO.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/CHAEYOUNG.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/DAHYUN.jpg`} alt="" />
                    </div>
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/JEONGYEON.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/MINA.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/MOMO.jpg`} alt="" />
                    </div>
                    <div className="pic on">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/NAYEON.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/SANA.jpg`} alt="" />
                    </div>
                    <div className="pic">
                        <img src={`${process.env.PUBLIC_URL}/img/TWICE_MEM/TZUYU.jpg`} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Twice