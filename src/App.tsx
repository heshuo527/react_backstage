import React, { useState } from 'react';
import MyLayout from './components/Layout';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard';
import User from './pages/user';
import ArticlesList from './pages/articles/list';
import MedicineList from './pages/medicine/list';

const App: React.FC = () => {
  return (
    <MyLayout>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='user' element={<User />} />
        <Route path='articles/List' element={<ArticlesList />} />
        <Route path='articles/categories' element={<ArticlesList />} />
        <Route path='medicine/List' element={<MedicineList />} />
        <Route path='medicine/categories' element={<MedicineList />} />
      </Routes>
    </MyLayout>
  )
};

export default App;
