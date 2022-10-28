import React from 'react';
import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';

const Index: React.FC = () => {
  console.log('index');
  return (
    <div>
      <Header />
      <h1>Index</h1>
      <Navigation />
    </div>
  );
};

export default Index;
