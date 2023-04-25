import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import classnames from 'classnames';
import styles from '../styles/HomepageLayout.module.css';
import TsParticles from '@/components/TsParticles'

type HomepageLayoutProps = {
  headTitle?: string;
  children: React.ReactNode;
};

const HomepageLayout: React.FC<HomepageLayoutProps> = ({ headTitle, children }) => {
  
  const router = useRouter();
  const faqLinkClass = router.pathname === '/faq' ? 'd-inline wrapper text-white' : 'd-inline wrapper text-dark'; 
  const logoClass = classnames(styles['brain-logo-sm'], 'd-inline');

  return (
    <React.Fragment>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header>
      <section>
        <div className="container p-4-top brain-section">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Link href="/">
              <span>
                <div className={logoClass}>
                <Image
                  src="/brain-itself.gif"
                  alt="OneBrain logo"
                  width={60.86}
                  height={56}
                />
                </div>
                <div className="d-inline brand-name align-middle">
                  <div className="d-inline blue-gradient-brand-name">One</div>
                  <div className="d-inline violet-gradient-brand-name">Brain</div>
                </div>
              </span>
              </Link>
              <Link href="/faq">
              <span>
                <div className="d-inline faq-link align-middle">
                  <div className={faqLinkClass}>FAQ</div>
                </div>
              </span>
              </Link>
              <div className="d-inline float-right">
              <Link href="https://calendly.com/ethan-u1g/30min">
                <span className="book-a-call">
                  Book a call
                </span>
              </Link>
              </div>
          </div>
          </div>
        </div>
      </section>
      </Header>
        <main>
        <TsParticles/>
          {children}
        </main>
      <Footer>
      <section>
    <div className="container">
     <div className="row-ordered">
    
      <div className="col-lg-2 col-sm-2 col-xs-6">
        <div className="links-foot-left">
          <h5>Learn</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="faq.html" className="nav-link p-0 text-muted">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-sm-2 col-xs-6">

        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="mailto:hello@onebrain.io">
              <span className="nav-link p-0 text-muted">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="https://calendly.com/ethan-u1g/30min">
            <span className="nav-link p-0 text-muted">Book a call</span>
          </Link>
          </li>
          <li className="nav-item">
          <Link href="https://tally.so/r/mJqjgd">
            <span className="nav-link p-0 text-muted">Waitlist</span>
          </Link>
          </li>
        </ul>

      </div>
      <div className="col-lg-8 col-sm-8 col-xs-12">
        <div className="social-links-group">
        <Link href="https://www.facebook.com/onbrain.io/">
          <img src="facebook.png" alt="" />
        </Link>
        <Link href="https://twitter.com/onebrainagi">
          <img src="twitter.png" alt="" />
        </Link>
        <Link href="https://www.linkedin.com/company/onebrainai/">
          <img src="linkedin.png" alt="" />
        </Link>
        <Link href="https://www.reddit.com/r/onebrain/">
          <img src="reddit.png" alt="" />
        </Link>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12"><hr /></div>
    </div>

    <div className="row">
      <div className="col-lg-6 col-sm-6 col-xs-12 left-credentials">
        <span>Terms of service</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>Privacy policy</span>
      </div>
      <div className="col-lg-6 col-sm-6 col-xs-12 right-credentials">
        © OneBrain, 2023
      </div>
    </div>
    </div>
      </section>
      </Footer>
      </React.Fragment>
  );
};

export default HomepageLayout;