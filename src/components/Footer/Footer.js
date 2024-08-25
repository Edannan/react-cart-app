import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes['footer-container']}>
        <div className={classes['footer-section']}>
          <h4>About Us</h4>
          <p>We are dedicated to providing the best food and service.</p>
        </div>
        <div className={classes['footer-section']}>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@jvnkfoods.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Food Street, Flavor Town</li>
          </ul>
        </div>
        <div className={classes['footer-section']}>
          <h4>Follow Us</h4>
          <ul className={classes['social-links']}>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div> */}
      <div className={classes['footer-bottom']}>
        <p>&copy; {new Date().getFullYear()} JvnkFoods by Danso. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
