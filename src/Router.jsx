import { BrowserRouter, Route,Routes } from 'react-router'

import App from './App'
// import { Home } from './Pages/Home/Home'
import { HomeRM } from './Pages/HomeRM/HomeRM'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeRM />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
