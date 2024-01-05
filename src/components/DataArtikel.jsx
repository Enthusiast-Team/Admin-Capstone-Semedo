import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteArtikel, fetchArtikel } from "../config/action";

function DataArtikel({ artikelData, dispatch }) {
  useEffect(() => {
    // Pemanggilan action creator untuk mengambil data artikel
    dispatch(fetchArtikel());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    // Konfirmasi sebelum menghapus
    const confirmed = window.confirm(`Apakah Anda yakin ingin menghapus artikel dengan ID ${id}?`);

    if (confirmed) {
      // Panggil action creator deleteArtikel dengan ID sebagai argumen
      dispatch(deleteArtikel(id));
      console.log('Data berhasil dihapus');
    }
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="overflow-x-auto sm:max-auto lg:mx-auto">
        <Link
          to='/add-artikel'
          type="button"
          className="ml-10 inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
        >
          Tambah Artikel
        </Link>

        <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">No</th>
                  <th scope="col" className="px-6 py-4">Judul Artikel</th>
                  <th scope="col" className="px-56 py-4">Isi Artikel 1</th>
                  <th scope="col" className="px-56 py-4">Isi Artikel 2</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {artikelData.map((artikel, index) => (
                  <tr
                    key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{artikel.JudulArtikel}</td>
                    <td className="whitespace-nowrap px-56 py-4">
                      <div className="max-w-xs overflow-hidden overflow-ellipsis">
                        {artikel.IsiArtikel1}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-56 py-4">
                      <div className="max-w-xs overflow-hidden overflow-ellipsis">
                        {artikel.IsiArtikel2}
                      </div>
                    </td>
                    
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className='flex flex-row'>
                        <Link
                          to={`/edit-artikel/${artikel.id}`}
                          type="button"
                          className="inline-block rounded bg-amber-300 hover:bg-amber-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(artikel.id)}
                          type="button"
                          className="ml-2 inline-block rounded bg-red-500 hover:bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => ({ artikelData: state.artikelData }))(DataArtikel);
