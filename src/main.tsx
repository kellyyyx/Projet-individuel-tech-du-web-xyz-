import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { TweetsMasterPage } from './pages/TweetsMasterPage';
import { TweetDetailsPage } from './pages/TweetDetailsPage'
import { NotFoundPage } from './pages/NotFoundPage';


createRoot(document.getElementById('root')!).render(
<StrictMode>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<TweetsMasterPage />} />
      <Route path="tweets/:id" element={<TweetDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
</BrowserRouter>
</StrictMode>
);
