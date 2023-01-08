import React from "react";
import style from "../styles/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return(
    <div className={style.container}>
      <div className={style.footer}>
        <div className="copyright">
          {`© ${year} Jensen Yuen`}
        </div>
        <div className="links">
          <a href="https://github.com/JensenYuen"
              target="_blank"
              rel="noopener noreferrer"
              className='fs-4 mx-2'
              style={{ marginRight: '1rem' }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/jensen-yuen/"
              target="_blank"
              rel="noopener noreferrer"
              className='fs-4 mx-2'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
