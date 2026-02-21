export default function Blog() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
      }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 400,
          color: '#B5835A',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
        }}>
          Blog
        </p>
        <h1 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 500,
          color: '#2A1F1A',
          lineHeight: 1.2,
          marginBottom: '1.5rem',
        }}>
          Articles & Ressources
        </h1>
        <p style={{
          fontSize: '1rem',
          fontWeight: 300,
          color: '#6B5448',
          lineHeight: 1.8,
          maxWidth: '640px',
        }}>
          Le blog arrive bientôt. Des articles sur la santé émotionnelle, les traumas
          et le mieux-être seront publiés régulièrement.
        </p>
      </section>
    </main>
  )
}
