export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(circle at 20% 20%, #f8f4e5 0%, #e8ddbf 35%, #c3b080 100%)',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 11vw, 7rem)',
          margin: 0,
          fontWeight: 900,
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
          color: '#fff7da',
          transform: 'perspective(600px) rotateX(18deg)',
          textShadow: [
            '0 1px 0 #fff1be',
            '0 2px 0 #f8d270',
            '0 3px 0 #eeb74f',
            '0 4px 0 #dd9834',
            '0 5px 0 #c6791f',
            '0 6px 0 #a65b10',
            '0 16px 24px rgba(68, 42, 0, 0.35)',
          ].join(', '),
          WebkitTextStroke: '1px #8f4c00',
        }}
      >
        My junk food app
      </h1>
    </main>
  );
}
