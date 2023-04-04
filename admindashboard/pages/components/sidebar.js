import React from 'react';
import styles from '../../styles/sidebar.module.css';
import Link from 'next/link';
import Topsidebar from './topsidebar';


const Sidebar = () => {
  return (

    <div className={styles.sidebar}>
      <Topsidebar/>
      {" "}
      <Link href="/" className= {styles.impo}> 
        Dashboard
      </Link>
      <Link href="/about">
        Forms
      </Link>
      <Link href="/contact">
        Requested Forms
      </Link>
      <Link href="/contact">
        Add Forms
      </Link>
      <Link href="/contact">
        Settings
      </Link>
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

export default Sidebar;
