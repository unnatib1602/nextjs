'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 40px',
      backgroundColor: '#1e1e1e',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <h1 style={{ color: '#ff6b81', fontSize: '1.8rem', fontWeight: 'bold' }}>
        🎬 Movie Review
      </h1>
      <nav style={{ display: 'flex', gap: 20 }}>
        <Link href="/" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>
          Home
        </Link>
        <Link href="/rated-movies" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>
          ⭐ Rated Movies
        </Link>
      </nav>
    </header>
  );
}
