import { useState } from 'react';
import { Fragment } from 'react';
import Link from 'next/link'
import ReactDOMServer from 'react-dom/server';
interface CollapsibleTextProps {
  title: string;
  text: string;
  children?: React.ReactNode;
}

const CollapsibleText = ({ title, text, children }: CollapsibleTextProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [buttonClass, setButtonClass] = useState('collapsible d-inline');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setButtonClass(isOpen ? 'collapsible d-inline active' : 'collapsible d-inline');
  };


  return (
      <div className="faq-block text-left">
        <h2 className="d-inline">{title}</h2>
        <button onClick={toggleDropdown} className={buttonClass}></button>
        {isOpen && (!children ? (
          <p className='text-left'>
            {text}
          </p>
        ) : (
          children
        ))}
      
      <style jsx>{`
        .dropdown-content {
          display: block;
          padding: 10px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default CollapsibleText;

// const replaceWithLink = (paragraph: string) => {
//   if (paragraph.includes('Join our waitlist')) {
//     const beforeLink = paragraph.split('Join our waitlist')[0];
//     const afterLink = paragraph.split('Join our waitlist')[1];
//     const link = (
//       <Link href="https://tally.so/r/mJqjgd">
//         <span>OneBrain AI</span>
//       </Link>
//     );
//     return beforeLink + ReactDOMServer.renderToString(link) + afterLink;
//   }
//   else if (paragraph.includes('hello@onebrain.io.')) {
//     const beforeLink = paragraph.split('hello@onebrain.io.')[0];
//     const afterLink = paragraph.split('hello@onebrain.io.')[1];
//     const link = (
//       <Link href="mailto:hello@onebrain.io">
//         <span>hello@onebrain.io</span>
//       </Link>
//     );
//     return beforeLink + ReactDOMServer.renderToString(link) + afterLink;
//   }
//   else {
//     return paragraph;
//   }
// };