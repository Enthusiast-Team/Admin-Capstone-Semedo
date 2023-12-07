import React from 'react'
import Sidebar from "../../components/Sidebar";
import DataArtikel from '../../components/DataArtikel';

function Artikel() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className='p-7'>
              <h1 className='text-2xl font-semibold'>Artikel Page</h1>
              <div className="grid grid-rows-2">
                  <div className="grid grid-cols-2">
                    <DataArtikel/>
                  </div>
              </div>
            </div>

            
        </div>
    </>
  )
}

export default Artikel;