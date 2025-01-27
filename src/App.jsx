import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import SellerDashboard from './pages/SellerDashboard'
import BrokerDashboard from './pages/BrokerDashboard'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/broker" element={<BrokerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
