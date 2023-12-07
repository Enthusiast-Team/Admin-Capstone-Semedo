import React from 'react'
import Sidebar from "../components/Sidebar";
import Cards from '../components/card/Cards';

function Dashboard() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className='p-7'>
            <h1 className='text-2xl font-semibold mb-12'>Artikel Page</h1>
              <Cards/>
            </div>
        </div>
    </>
  )
}

export default Dashboard;