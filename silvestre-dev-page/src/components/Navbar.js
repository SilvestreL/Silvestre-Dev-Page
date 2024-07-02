import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Navbar.module.css";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [bgImage, setBgImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMouseEnter = (image) => {
    setBgImage(image);
  };

  const handleMouseLeave = () => {
    setBgImage(null);
  };

  return (
    <>
      <Navbar bg="light" className={`${styles.navbar}`}>
        <Navbar.Brand className={styles.brandContainer}>
          <div className={styles.circle}>LS</div>
          <div>
            <Link href="/" passHref legacyBehavior>
              <a className={styles.brandTextHome}>Lucas Silvestre</a>
            </Link>
            <div className={styles.subtitle}>Full Stack Developer</div>
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleShow} className={styles.menuButton}>
            <motion.div
              className={styles.menuContainer}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className={styles.menuText}>MENU</span>
              <span className={styles.menuIcon}>
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.6 }}
                >
                  &#9776;
                </motion.div>
              </span>
            </motion.div>
          </Nav.Link>
        </Nav>
      </Navbar>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
            className={styles.modalOverlay}
          >
            <div className={styles.modalHeader}>
              <div className={styles.brandContainerModal}>
                <div className={styles.circle}>LS</div>
                <div>
                  <Link href="/" passHref legacyBehavior>
                    <a className={styles.brandText}>Lucas Silvestre</a>
                  </Link>
                  <div className={styles.subtitle}>Full Stack Developer</div>
                </div>
              </div>
              <div className={styles.modalClose} onClick={handleClose}>
                CLOSE
              </div>
            </div>
            <div
              className={styles.modalBody}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Nav className="flex-column text-center">
                  <Link href="/projects" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter("/images/project.jpg")
                      }
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      Projects
                    </Nav.Link>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() => handleMouseEnter("/images/about.jpg")}
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      About me
                    </Nav.Link>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter("/images/contact.jpg")
                      }
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      Contact
                    </Nav.Link>
                  </Link>
                  <Nav.Link
                    href="https://github.com/silvestrel"
                    target="_blank"
                    onMouseEnter={() =>
                      handleMouseEnter("/images/dribbble.jpg")
                    }
                    onMouseLeave={handleMouseLeave}
                    className={styles.navLink}
                  >
                    Github
                  </Nav.Link>
                  <Nav.Link
                    href="https://instagram.com/lucassilvestrem"
                    target="_blank"
                    onMouseEnter={() =>
                      handleMouseEnter("/images/instagram.jpg")
                    }
                    onMouseLeave={handleMouseLeave}
                    className={styles.navLink}
                  >
                    Instagram
                  </Nav.Link>
                </Nav>
              </motion.div>
            </div>
            <div className={styles.modalFooter}>
              © 2024 Lucas Silvestre. Made with ❤️ in Maceió, Brasil.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyNavbar;
