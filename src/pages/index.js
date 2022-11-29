import React from 'react';
import { Link } from 'gatsby';

export default function Page() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>This is a minimal demo page built using Gatsby.</p>
      <Link to='/about'>About</Link>
    </main>
  );
}
