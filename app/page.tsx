export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome! 👋</h1>
        <p style={styles.subtitle}>Simple Registration App</p>
        <p style={styles.description}>
          A minimal Next.js application with user registration and Supabase Postgres database.
        </p>
        <a href="/register" style={styles.button}>
          Get Started →
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '60px 40px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#667eea',
    marginBottom: '24px',
    fontWeight: '600',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  button: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'transform 0.2s',
  },
};
