import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.compact.css';
import zhCN from 'antd/lib/locale/zh_CN';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin/*' element={<App />} />
      </Routes>
    </ConfigProvider>
  </Router>
);