import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import NewPosts from './container/NewPosts';

const HomePage = () => {
  return (
    <MainLayout>
      <NewPosts />
    </MainLayout>
  );
};

export default HomePage;
