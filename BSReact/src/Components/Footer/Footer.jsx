import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.express}>
          <div className={classes.expressLogo}>Express</div>
          <div className={classes.expressInfo}>
            <a href="#">All Rights Reserved to info.com</a>
          </div>
          <div className={classes.expressInfo}>&copy; DDD – Web Marketing</div>
          <div className={classes.expressInfo}>Privacy Policy</div>
          <div className={classes.expressInfoPng}></div>
        </div>
        <div className={classes.contact}>
          <div className={classes.contactLogo}>CONTACT US</div>
          <div className={classes.contactNum}>
            <span> UK</span> <a href="tel:+44-2020202020 ">+44-2020202020 </a>
            <br />
            <a href="tel:+44-2020202020">+44-2020202020</a>
          </div>
          <div className={classes.contactNum}>
            AUT <a href="tel:+44-2020202020 ">+44-2020202020 </a>
          </div>
          <div className={classes.contactNum}>
            AUS <a href="tel:+44-2020202020 ">+44-2020202020 </a>
          </div>
        </div>
        {/* <div className={classes.address}> */}
        <div className={classes.address}>
          <div className={classes.addressLogo}>ADDRESS</div>
          <div className={classes.addressText}>
            Lorem ipsum <br /> set amet
          </div>
        </div>
        <div className={classes.open}>
          <div className={classes.openLogo}>OUR OFFICE HOURS</div>
          <div className={classes.openTimetable}>
            Mon-Fr: 8:00-18:00 GMT Sat/Su: Closed
          </div>
        </div>
        {/* </div> */}

        <div className={classes.email}>
          <div className={classes.emailLogo}>EMAIL US</div>
          <div className={classes.emailLink}>
            <a href="#">info@info.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
