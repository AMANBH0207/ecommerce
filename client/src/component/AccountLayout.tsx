import InfoSideBar from './InfoSideBar'
import { Outlet } from 'react-router-dom'

function AccountLayout() {
  return (
    <div className='flex bg-gray-300 p-2'>
        <InfoSideBar/>
        <div className='px-2 w-full'>
             <Outlet/>
        </div>
    </div>
  )
}

export default AccountLayout