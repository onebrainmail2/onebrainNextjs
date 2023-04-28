import React, { FC } from 'react'
import HomepageLayout from '@/components/HomepageLayout'
import BrainAnimationLogo from '@/components/BrainAnimationLogo'
import CountDownTimer from '@/components/CountDownTimer'
import Link from 'next/link'
const Home: FC = () => {
  const countdownDate = new Date("May 17, 2023 09:00:00");
  return (
    <HomepageLayout headTitle="OneBrain AI">
        <div className="container">
          <div className="row-ordered">
            <div className="col-lg-8 col-sm-12 col-xs-12 brain-text">
              <h1>Your Company's Genius</h1>
              <h2>All your<wbr /> knowledge based apps supported by one<wbr /> AI</h2>
              <p>From all chat history in Slack, to all company content in Google Drive. Connect your company workspace apps and retrieve anything you need straight from your AI Colleague.</p>
            </div>
            <BrainAnimationLogo />
          </div>
        </div>  
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <h2>The AI Knowledge Base Revolution BETA begins in:</h2>
              {/* Display the countdown timer in an element */}
              <CountDownTimer countdownDate={countdownDate} />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-inline">
              <Link href="https://tally.so/r/mJqjgd">
                <span className="join-the-waitlist">Join the waitlist</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br /><br />
        <br />
        <br />
    </HomepageLayout>
  )
}

export default Home