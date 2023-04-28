import React from 'react';
import { useEffect } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBook, faChartSimple, faHandshake, faFile, faPhone, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import { UncontrolledTooltip } from "reactstrap";

library.add(fab);
const MagneticNav = ()=> {
    useEffect(() => {
        const handleScroll = () => {
          let pixelsFromTop = window.scrollY;
          let section1 = document.getElementById('section1');
          let section6 = document.getElementById('section6');
          let magneticNav = document.getElementById('magnetic-navigation');
          
          
          if (section1 && section6 && magneticNav) {
            if (pixelsFromTop > (section1.offsetTop - 1) && pixelsFromTop < (section6.offsetTop + section6.offsetHeight)) {
              if (magneticNav.classList.contains('d-none')) {
                magneticNav.classList.remove('d-none');
              }
            } else {
              magneticNav.classList.add('d-none');
            }
          }
    
          for (let i = 1; i <= 6; i++) {
            let section = document.getElementById(`section${i}`);
            let magneticNavItem = document.querySelector(`#magnetic-navigation li:nth-child(${i}) i`);
            if (section && magneticNavItem) {
              if (pixelsFromTop > (section.offsetTop - 1) && pixelsFromTop < (section.offsetTop + section.offsetHeight)) {
                magneticNavItem.classList.add('viewing');
              } else {
                magneticNavItem.classList.remove('viewing');
              }
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div id="magnetic-navigation" className="d-none">
            <ul>
            <li ><a href="#section1" id="faBook-icon">
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faBook-icon"
              >Instantly receive all answers. All knowledge supported by your AI from chat history.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faBook} size="2xl" style={{color: "#fd5ce5",}} />
            
              </a></li> 
            <li><a href="#section2" id="faChart-icon">

            <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faChart-icon"
              >Quickly need site analytic stats or comparisons? Just ask.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faChartSimple} size="2xl" style={{color: "#fd5ce5",}} />

              </a></li> 
            <li><a href="#section3" id="faHandshake-icon">
             

              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faHandshake-icon"
              >Need available times to quickly schedule a meeting? Your company genius knows.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faHandshake} size="2xl" style={{color: "#fd5ce5",}} />

              </a></li>
            <li><a href="#section4" id="faFile-icon">
              

              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faFile-icon"
              >Request document links and make edit requests easily.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "#fd5ce5",}} />


              </a></li>
            <li><a href="#section5" id="faPhone-icon">
              
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faPhone-icon"
              >Request document links and make edit requests easily.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#fd5ce5",}} />
              
              </a></li>
            <li><a href="#section6" id="faPeopleGroup-icon">
              
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="faPeopleGroup-icon"
              >Request document links and make edit requests easily.
                </UncontrolledTooltip>
                <FontAwesomeIcon icon={faPeopleGroup} size="2xl" style={{color: "#fd5ce5",}} />
              
              
              </a></li>
            </ul>
        </div>
    );
  };
  export default MagneticNav;