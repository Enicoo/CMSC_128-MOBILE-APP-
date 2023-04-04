import React from 'react';
import styles from '../../styles/sidebar.module.css';
import Link from 'next/link';

const Topsidebar = () => {
    return (
        <div className= {styles.topbar}>
            <h2> Dashboard </h2>
            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
        
    );
    
};

export default Topsidebar;
