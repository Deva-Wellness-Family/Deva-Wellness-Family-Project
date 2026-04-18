import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer({ setPage }) {
  return (
    <div className="FooterPage">
      {/* CTA STRIP */}
      <div className="ctaBar" style={styles.ctaBar}>
        <h2 style={styles.ctaText}>
          Get a 3-day Free Membership Trial
        </h2>

       <button
         className="ctaButton"
         style={styles.ctaButton}
         onClick={() => setPage("getStarted")}
>        Register Now
         </button>
      </div>

      {/* MAIN FOOTER */}
      <footer className="FooterMain" style={styles.footer}>
        <div className="topSection" style={styles.topSection}>
          
          {/* BRAND */}
          <div className="column" style={styles.column}>
            <h2 style={styles.logo}>
              Deva <span style={{ color: "#ffc107" }}>Wellness</span>
            </h2>
            <p style={styles.description}>
              Transform your body and mind through expert training, functional
              workouts, and high-intensity community sessions designed to push
              your limits.
            </p>

            <div className="socialContainer" style={styles.socialContainer}>
              {[
                {
                  icon: <FaFacebookF />,
                  url: "https://www.facebook.com/share/1CxMjJbKMd/",
                  label: "Facebook",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/fitness_coach.vidya123",
                  label: "Instagram",
                },
                {
                  icon: <FaWhatsapp />,
                  url: "https://wa.me/919527476312",
                  label: "WhatsApp",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.socialLink}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* WHY US */}
          <div className="column" style={styles.column}>
            <h3 style={styles.heading}>WHY DEVA WELLNESS?</h3>
            <h2 style={styles.tagline}>Small Steps, Big Changes</h2>
            <p style={styles.description}>
              Scientifically designed functional training programs backed by
              certified coaches to help you achieve your personal best.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="column" style={styles.column}>
            <h3 style={styles.heading}>QUICK LINKS</h3>
            <ul style={styles.linkList}>
              {[
                { label: "Home", page: "home" },
                { label: "About Us", page: "about" },
                { label: "Programs", page: "programs" },
                { label: "Services", page: "Services" },
                { label: "Contact Us", page: "contact" },
              ].map((item) => (
                <li
                  key={item.page}
                  style={styles.linkItem}
                  onClick={() => setPage(item.page)}
                  onMouseOver={(e) => (e.target.style.color = "#ffc107")}
                  onMouseOut={(e) => (e.target.style.color = "#ddd")}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="column" style={styles.column}>
            <h3 style={styles.heading}>CONTACT US</h3>
            <div style={styles.contactItem}>
              <FaMapMarkerAlt style={styles.contactIcon} />
              <p style={styles.contactText}>
                shop no -104 second floor Ideal Avenue / opp Gandharva Excellence phase 1 Moshi 412105
              </p>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.contactIcon} />
              <a href="mailto:devawellnessfamily@gmail.com" style={styles.contactLink}>
                devawellnessfamily@gmail.com
              </a>
            </div>
            <div style={styles.contactItem}>
              <FaPhoneAlt style={styles.contactIcon} />
              <a href="tel:+917387428839" style={styles.contactLink}>
                +91 9527476312
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div style={styles.bottomSection}>
          © 2026 Deva Wellness Family. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

const styles = {
  ctaBar: {
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 40px",
    flexWrap: "wrap",
    gap: "20px",
  },

  ctaText: {
    fontSize: "26px",
    fontWeight: "700",
  },

  ctaButton: {
    backgroundColor: "#ffc107",
    border: "none",
    padding: "14px 26px",
    fontWeight: "700",
    cursor: "pointer",
  },

  footer: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "60px 40px 20px",
  },

  topSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  },

  column: {
    flex: 1,
    minWidth: "220px",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "10px",
  },

  tagline: {
    color: "#ffc107",
    marginBottom: "10px",
  },

  description: {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#bbb",
  },

  heading: {
    fontSize: "16px",
    color: "#ffc107",
    marginBottom: "12px",
    fontWeight: "700",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
  },

  linkItem: {
    cursor: "pointer",
    color: "#ddd",
    transition: "0.3s",
  },

  contactText: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "8px",
  },

  socialContainer: {
    display: "flex",
    gap: "14px",
    marginTop: "12px",
    flexWrap: "wrap",
  },

  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#1f1f1f",
    color: "#fff",
    textDecoration: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,0.22)",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  },

  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "14px",
  },

  contactIcon: {
    color: "#ffc107",
    marginTop: "4px",
    minWidth: "20px",
  },

  contactLink: {
    fontSize: "14px",
    color: "#bbb",
    lineHeight: "1.7",
    textDecoration: "none",
  },

  bottomSection: {
    textAlign: "center",
    marginTop: "40px",
    borderTop: "1px solid #333",
    paddingTop: "16px",
    fontSize: "13px",
    color: "#777",
  },
};

export default Footer;