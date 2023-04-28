import React, { FC } from 'react'
import { NextPage } from 'next';
import HomepageLayout from '@/components/HomepageLayout'
import CollapsibleText from '@/components/CollapsibleText'
import Link from 'next/link'

interface FAQPageProps {
  }

const FAQPage: NextPage<FAQPageProps> = () => {
    return(
        <HomepageLayout>
          <div className="container faq-list">
             <div className="row">
          <div className="col-lg-12">
            <h1>FAQ</h1>
            <CollapsibleText title="How does it work?" text="Once you connect your apps, all generated content such as chat history, documents, spreadsheets, presentations, brochures, images & videos to name a few, get supported by OneBrain AI. As you continue to work as a company, the AI continues learning and updating to the relevant information." />
            <CollapsibleText title="What if the OneBrain AI makes a mistake?" text="Although in limited cases, this usually means company employees are actively also making these mistakes, as the AI is going over past responses of answers between colleagues and the materials they make. But no worries! This allows you to catch bad practices. Just tag the mistake and allow a company admin to respond to the AI for correction." />
            <CollapsibleText title="How much does it cost?" text="We are currently testing for our beta release. This information will be public once testing is finalized. Prices are in accordance with the amount of data your company uses and the continues advancement in the AI technology. OneBrain has a fixed price to data ratio where as more releases of AI becomes optimized, Onebrain lowers your price! If interested to find out more you can book a call for our self hosted service plan." />
            <CollapsibleText title="What if you’re missing an app I use?" text="">
            <p className='text-left'>
              No worries! <Link href="https://tally.so/r/mJqjgd">Join our waitlist</Link> to request or select the workspace apps you use. Our plan is to support all apps big or small that our customers want to use. If you are the owner of a new app and you want OneBrain integrated to it, you can fill this form out <Link href="https://tally.so/r/mJqjgd">here</Link>.
            </p>
            </CollapsibleText>
            <CollapsibleText title="How does the self-hosted service work?" text="Self-hosted is for us to build your integration and setup your OneBrain AI. We hand over the keys for you to have full control. We have a starting fixed fee in order to prepare your OneBrain AI with each of the essential workspace apps. Our monthly subscription handles the company’s API maintenance & AI token inputs so you can relax and let the business thrive while you control your own data." />
            <CollapsibleText title="How secure is OneBrain?" text="OneBrain’s self hosted AI allows you to have complete control over the data it collects & how it is used, ensuring the privacy and security of your data. Permissions are based on the workspace applications. OneBrain AI will only have access if the user has access. Therefore companies keep their current security of choice on how to protect their company data and who has access." />
            <CollapsibleText title="Can I integrate my Onebrain chat bot in any app?" text="Not all apps. Only apps that have a user interface for conversational text such as Slack, Discord and Asana. Exceptions are Google Drive and Google Analytics whereas the user interface does not support chat bot discussions. All permissioned users however will be able to sign into their account on OneBrain and use our own text editor for your AI communication. Stay tuned for the release of our beta!" />
            <CollapsibleText title="If I just have general questions such as for press or partnerships, who should I contact?" text="">
            <p className='text-left'>
            We’d love to talk to you! Reach out to us by email at <Link href="mailto:hello@onebrain.io">hello@onebrain.io</Link>. One of our team members will get back to you.
            </p>
            </CollapsibleText>
            </div>
            </div>
            </div>
        </HomepageLayout>
    )
}
export default FAQPage