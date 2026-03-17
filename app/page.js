export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#d7d7d7',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 11vw, 7rem)',
          margin: 0,
          fontWeight: 900,
          letterSpacing: '0.02em',
          fontStyle: 'italic',
          fontFamily: 'cursive, "Brush Script MT", "Segoe Script"',
          color: '#f7f7f7',
          textShadow: [
            '0 1px 0 #fff',
            '0 2px 0 #f2c75c',
            '0 3px 0 #e5b135',
            '0 4px 0 #c88e1f',
            '0 5px 0 #ab730d',
            '0 6px 0 #8e5a00',
            '0 10px 18px rgba(0, 0, 0, 0.3)',
          ].join(', '),
          WebkitTextStroke: '1px #9b5b00',
        }}
      >
        My junk food app
      </h1>
    </main>
  );
}
