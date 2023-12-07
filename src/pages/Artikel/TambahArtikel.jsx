import React from 'react'
import Sidebar from "../../components/Sidebar";
import FormArtikel from '../../components/form/FormsArtikel';

function TambahArtikel() {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            <div className='p-7'>
              <h1 className='text-2xl font-semibold'>Tambah Artikel</h1>
              <div className="grid grid-rows-2">
                  <div className="grid grid-cols-2">
                    <FormArtikel/>
                  </div>
              </div>
            </div>

            
        </div>
    </>
  )
}

export default TambahArtikel;