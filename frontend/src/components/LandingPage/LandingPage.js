import React from 'react';
import MainPhoto from './MainPhoto';
import SingleLineGrid from './SingleLineGrid';
import MultiLineGrid from './MultiLineGrid';

export default function LandingPage() {
  return (
    <div>
      <MainPhoto />
      <MultiLineGrid />
      <SingleLineGrid />
    </div>
  );
}
