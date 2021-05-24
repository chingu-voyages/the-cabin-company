import React from 'react';
import MainPhoto from './MainPhoto';
import SingleLineGrid from './SingleLineGrid';
import MultiLineGrid from './MultiLineGrid';
import Calendar from './Calendar';

export default function LandingPage() {
  return (
    <div>
      <MainPhoto />
      <MultiLineGrid />
      <SingleLineGrid />
      <Calendar />
    </div>
  );
}
