import React from 'react';
import MainPhoto from './MainPhoto';
import SingleLineGrid from './SingleLineGrid';

export default function LandingPage() {
  return (
    <div>
      <MainPhoto />
      <section>
        {/* grid of small pics */}
        <h2>Explore nearby</h2>
      </section>
      <SingleLineGrid />
    </div>
  );
}
