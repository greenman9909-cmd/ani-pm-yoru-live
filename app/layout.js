import './globals.css';

export const metadata = {
  metadataBase: new URL('https://yoru.fun'),
  title: 'Yoru Anime — Discover Anime & What to Watch',
  description: 'Explore Yoru Anime to discover trending anime, browse popular series, and find what to watch next.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yoru Anime — Discover Anime & What to Watch',
    description: 'Discover trending anime and find what to watch next with Yoru.',
    url: 'https://yoru.fun/',
    siteName: 'Yoru Anime',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Yoru Anime — Discover Anime & What to Watch',
    description: 'Discover trending anime and find what to watch next with Yoru.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
