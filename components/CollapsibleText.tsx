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
