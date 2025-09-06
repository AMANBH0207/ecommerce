import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CategoriesHeader from './CategoriesHeader'

function Layout() {
  return (
    <div>
        <Header/>
        <CategoriesHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout