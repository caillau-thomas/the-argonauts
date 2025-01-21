import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>home</h1>} />
        <Route path="toto" element={<h1>toto</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
