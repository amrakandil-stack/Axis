export default function Home() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Strategic Consulting for <span style={styles.highlight}>Modern Businesses</span>
        </h1>

        <p style={styles.subtitle}>
          Axis helps companies grow, optimize operations, and make smarter decisions
          through data-driven strategy and expert guidance.
        </p>

        <button style={styles.button}>Get Started</button>
      </section>
    </div>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  highlight: {
    color: "#2563eb",
  },
  subtitle: {
    fontSize: "18px",
    color: "#4b5563",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  button: {
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

