import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Shop } from '@/pages/Shop'
import { ProductDetail } from '@/pages/ProductDetail'
import { Impact } from '@/pages/Impact'
import { ReportDetail } from '@/pages/ReportDetail'
import { Learn } from '@/pages/Learn'
import { About } from '@/pages/About'
import { Support } from '@/pages/Support'
import { Contact } from '@/pages/Contact'
import { Cart } from '@/pages/Cart'
import { OrderRequest } from '@/pages/OrderRequest'
import { Account } from '@/pages/Account'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="impact" element={<Impact />} />
        <Route path="impact/reports/:slug" element={<ReportDetail />} />
        <Route path="learn" element={<Learn />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="request-order" element={<OrderRequest />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
