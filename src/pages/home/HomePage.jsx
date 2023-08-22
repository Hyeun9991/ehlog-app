import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import NewPosts from './container/NewPosts';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="container min-h-screen mt-[56px] mx-auto p-6">
        <NewPosts />
      </div>
    </MainLayout>
  );
};

export default HomePage;
