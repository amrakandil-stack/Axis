export default function Home() {
  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Axis Consulting</h1>
        <p style={styles.subtitle}>
          Strategic consulting to help businesses grow, transform, and succeed.
        </p>
        <a href="/contact" style={styles.button}>
          Get in Touch
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Business Strategy</h3>
            <p>
              Clear, actionable strategies designed to scale your business and
              strengthen market position.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Operational Excellence</h3>
            <p>
              Optimize processes, reduce inefficiencies, and improve overall
              performance.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Digital Transformation</h3>
            <p>
              Modernize your business with technology-driven solutions that
              enable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px

