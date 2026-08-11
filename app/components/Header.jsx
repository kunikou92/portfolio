"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="site-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
      </nav>
    </header>
  );
}
