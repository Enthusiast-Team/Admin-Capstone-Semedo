import React from 'react';
import { Link } from 'react-router-dom'

export default function DataArtikel() {
  return (

    
    <div className="flex flex-col mt-6">
      <div className="overflow-x-auto sm:max-auto  lg:mx-auto">

        <Link
        type="button"
        className="ml-10 inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
        to='/add-artikel'
        >Tambah Artikel</Link>

        <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">No</th>
                  <th scope="col" className="px-6 py-4">Judul Artikel</th>
                  <th scope="col" className="px-56 py-4">Isi Artikel</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-56 py-4">Deskripsi artikel secara lengkap</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className='flex flex-row'>
                    <button
                        type="button"
                        className="inline-block rounded bg-amber-300 hover:bg-amber-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="ml-2 inline-block rounded bg-red-500 hover:bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                    >
                        Hapus
                    </button>
                    </div>
                  </td>
                </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}