import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtikel, updateArtikel } from '../../config/action';
import {useNavigate} from 'react-router-dom';


const EditArtikel = ({ artikelData, dispatch }) => {
  const { id } = useParams(); // Extract the 'id' from URL parameters
  const navigate = useNavigate();
  const [editedData, setEditedData] = useState({
    JudulArtikel: '',
    GambarArtikel1: '',
    GambarArtikel2: '',
    IsiArtikel1: '',
    IsiArtikel2: '',
  });

  useEffect(() => {
    // Fetch the artikel data based on the extracted 'id'
    dispatch(fetchArtikel());
  }, [dispatch, id]);

  useEffect(() => {
    // Set the initial values for editing when artikelData is available
    const artikelToEdit = artikelData.find((artikel) => artikel.id === id);
    if (artikelToEdit) {
      setEditedData({
        JudulArtikel: artikelToEdit.JudulArtikel,
        GambarArtikel1: artikelToEdit.GambarArtikel1,
        GambarArtikel2: artikelToEdit.GambarArtikel2,
        IsiArtikel1: artikelToEdit.IsiArtikel1,
        IsiArtikel2: artikelToEdit.IsiArtikel2,
      });
    }
  }, [artikelData, id]);

  const handleSaveEdit = () => {
    console.log('ini tombol');
    // Dispatch an action to update the artikel data
    dispatch(updateArtikel(id, editedData));
    // Redirect to the artikel list or handle navigation as needed
    navigate('/artikel');
  };

  // value={editedData.JudulArtikel}
  //               onChange={(e) => setEditedData({ ...editedData, JudulArtikel: e.target.value })}

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
            <h2
                className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Edit Data Artikel</h2>
        </div>
        {/* <!-- text - end --> */}

        {/* <!-- form - start --> */}
        <div className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Judul Artikel</label>
                <input
                    type="text"
                    id="JudulArtikel"
                    name="JudulArtikel"
                    value={editedData.JudulArtikel}
                    onChange={(e) => setEditedData({ ...editedData, JudulArtikel: e.target.value })}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"/>
            </div>

            <div className="sm:col-span-2">
                <label
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    htmlFor="file">Upload file</label>
                <input
                    type="file"
                    id="GambarArtikel1"
                    name="GambarArtikel1"
                    // value={editedData.GambarArtikel1}
                    onChange={(e) => setEditedData({ ...editedData, GambarArtikel1: e.target.value })}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    aria-describedby="file_input_help"/>
                <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            </div>

            <div className="sm:col-span-2">
                <label
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    htmlFor="file">Upload file</label>
                <input
                    type="file"
                    id="GambarArtikel2"
                    name="GambarArtikel2"
                    // value={editedData.GambarArtikel2}
                    onChange={(e) => setEditedData({ ...editedData, GambarArtikel2: e.target.value })}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    aria-describedby="file_input_help"/>
                <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            </div>

            <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Isi Artikel</label>
                <textarea
                    id="IsiArtikel1"
                    name="IsiArtikel1"
                    value={editedData.IsiArtikel1}
                    onChange={(e) => setEditedData({ ...editedData, IsiArtikel1: e.target.value })}
                    className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
            </div>

            <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Isi Artikel</label>
                <textarea
                    id="IsiArtikel2"
                    name="IsiArtikel2"
                    value={editedData.IsiArtikel2}
                    onChange={(e) => setEditedData({ ...editedData, IsiArtikel2: e.target.value })}
                    className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
                <button
                    onClick={handleSaveEdit}
                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Simpan
                </button>
                <span className="text-sm text-gray-500">*Required</span>
            </div>

            <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our
                <a
                    href="#"
                    className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
        </div>
        {/* <!-- form - end --> */}
    </div>
</div>
  );
}

export default connect((state) => ({ artikelData: state.artikelData }))(EditArtikel);