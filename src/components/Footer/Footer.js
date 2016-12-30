import React from 'react';
import { signOut } from '../../firebaseAuth';


const Footer = ({ toggleSetting }) =>  {
  return (
    <footer>
      <ul>
        <button onClick={(e) => signOut(e)}>Logout</button>
      </ul>
    </footer>
  );
}

export default Footer;
