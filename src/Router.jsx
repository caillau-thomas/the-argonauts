import { BrowserRouter, Route,Routes } from 'react-router'

import App from './App'
import { Home } from './Pages/Home/Home'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
