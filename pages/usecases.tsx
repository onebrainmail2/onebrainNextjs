import React, { FC } from 'react'
import { NextPage } from 'next'
import HomepageLayout from '@/components/HomepageLayout'
import PlayerSection from '@/components/PlayerSection'
import Head from 'next/head'
import MagneticNav from '@/components/MagneticNav';
// import styles from '../styles/MagneticNav.module.css';


interface HomepageLayoutPageProps {
}
const HomepageLayoutPage: NextPage<HomepageLayoutPageProps> = () => {
    return(
        <div>
        <Head>
            <html className="usecases" />
        </Head>
        <MagneticNav />
        <HomepageLayout>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Use Cases</h1>
                    </div>
                </div>
            </div>
            <PlayerSection title="Instantly receive all answers. All knowledge supported by your AI from chat history." playerId='1' videoId='DAACfneP7fY' magnetLinkId='faBook-icon'/>
            <PlayerSection title="Quickly need site analytic stats or comparisons? Just ask." playerId='2'  videoId='UALRgeYdjXg' magnetLinkId='faChart-icon'/>
            <PlayerSection title="Need available times to quickly schedule a meeting? Your company genius knows." playerId='3' videoId='4N9A2h76YKM' magnetLinkId='faHandshake-icon'/>
            <PlayerSection title="Request document links and make edit requests easily." playerId='4' videoId='PinEsrZePvk' magnetLinkId='faFile-icon'/>
            <PlayerSection title="Call info from your sales playbook without needing to memorize it." playerId='5' videoId='1YTRr2zod1w' magnetLinkId='faPhone-icon'/>
            <PlayerSection title="Need candidate comparisons? Just a question away." playerId='6' videoId='0Dwocg9HnOw' magnetLinkId='faPeopleGroup-icon'/>
            <section>
            <div className="container text-center slides-block features">
                <div className="row-ordered">
                <div className="col-lg-6 col-sm-6 col-xs-12 mobile-none">
                    <h3>Embed your AI in any work<br />space app you choose </h3>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 host-or-cloud mobile-none">
                    <h3>Our self-hosted service gives protection to your data, your way.</h3>
                </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                <div className="col-lg-12 mobile-none">
                    <h3 className="invert-1">Want to speed things up? Get Self-<br />hosted as a beta tester.</h3>
                </div>
                </div>
            </div>
            <div className="container text-center m-bottom-100">
                <div className="row">
                <div className="col-lg-12">
                    <div className="d-inline"><a href="https://calendly.com/ethan-u1g/30min" className="book-a-call">Book a call</a></div>
                </div>
                </div>
            </div>
            </section>
        </HomepageLayout>
        </div>
    )
}

export default HomepageLayoutPage