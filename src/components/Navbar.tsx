import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Axis</div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#0f172a",
  },
  logo: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "16px",
  },
};
