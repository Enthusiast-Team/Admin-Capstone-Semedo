import React, {Component} from "react";
import {getDatabase, push, ref, set} from "firebase/database";
import {getStorage, uploadBytes, ref as storageRef, getDownloadURL} from "firebase/storage";
import {Fire} from "../../config/firebase"

export default class FormsArtikel extends Component {
    state = {
        JudulArtikel: "",
        GambarArtikel1: null,
        IsiArtikel1: "",
        GambarArtikel2: null,
        IsiArtikel2: "",
        formErrors: {
            JudulArtikel: "",
            GambarArtikel1: "",
            IsiArtikel1: "",
            GambarArtikel2: "",
            IsiArtikel2: ""
        },
        formValid: false
    };
    validateForm() {
        const {JudulArtikel, GambarArtikel1, IsiArtikel1, GambarArtikel2, IsiArtikel2} = this.state;
        const formErrors = {
            JudulArtikel: "",
            GambarArtikel1: "",
            IsiArtikel1: "",
            GambarArtikel2: "",
            IsiArtikel2: ""
        };

        let formValid = true;
        if (!JudulArtikel) {
            formErrors.JudulArtikel = "Judul Artikel wajib diisi";
            formValid = false;
        }
        if (!GambarArtikel1) {
            formErrors.GambarArtikel1 = "GambarArtikel1 wajib diisi";
            formValid = false;
        }
        if (!IsiArtikel1) {
            formErrors.IsiArtikel1 = "Asal Perguruan Tinggi wajib diisi";
            formValid = false;
        }
        if (!GambarArtikel2) {
            formErrors.GambarArtikel2 = "Link Drive Bukti Pembayaran";
            formValid = false;
        }
        if (!IsiArtikel2) {
            formErrors.IsiArtikel2 = "No. WhatsApp Ketua wajib diisi";
            formValid = false;
        }

        this.setState({formErrors});
        return formValid;
    }
    handleChange = (e) => {
        const {name, value, type} = e.target;

        if (type === "file") {
            // Jika input adalah file, simpan file
            this.setState({[name]: e.target.files[0]});
        } else {
            // Jika bukan file, simpan nilai biasa
            this.setState({[name]: value});
        }
    };
    handleSaveArtikel = async() => {
        const {JudulArtikel, GambarArtikel1, IsiArtikel1, GambarArtikel2, IsiArtikel2} = this.state;

        if (this.validateForm()) {
            const db = getDatabase(Fire);
            const workshopRef = ref(db, "Artikel/");
            const newWorkshopRef = push(workshopRef);

            const storage = getStorage();

            // Proses upload gambar pertama
            const storageReference1 = storageRef(storage, `/gambar1_${JudulArtikel}`);
            await uploadBytes(storageReference1, GambarArtikel1);
            const downloadURL1 = await getDownloadURL(storageReference1);

            // Proses upload gambar kedua
            const storageReference2 = storageRef(storage, `/gambar2_${JudulArtikel}`);
            await uploadBytes(storageReference2, GambarArtikel2);
            const downloadURL2 = await getDownloadURL(storageReference2);

            const newData = {
                JudulArtikel,
                IsiArtikel1,
                GambarArtikel1: downloadURL1, // URL gambar pertama
                IsiArtikel2,
                GambarArtikel2: downloadURL2, // URL gambar kedua
            };

            set(newWorkshopRef, newData).then(() => {
                console.log("Data berhasil disimpan ke Firebase");
                // window.location.href = "/success";
            }).catch((error) => {
                console.error("Gagal menyimpan data ke Firebase:", error);
            });
        } else {
            console.error("Form tidak valid. Mohon periksa kembali.");
        }
    };

    handleChange = (e) => {
        const {name, value, type} = e.target;

        if (type === "file") {
            this.setState({[name]: e.target.files[0]});
        } else {
            this.setState({[name]: value});
        }
    };
    render() {
      const {
        JudulArtikel,
        GambarArtikel1,
        IsiArtikel1,
        GambarArtikel2,
        IsiArtikel2,
      } = this.state;
  
        return (
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* <!-- text - start --> */}
                    <div className="mb-10 md:mb-16">
                        <h2
                            className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Tambah Data Artikel</h2>
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                value={IsiArtikel1}
                                onChange={this.handleChange}
                                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Isi Artikel</label>
                            <textarea
                                id="IsiArtikel2"
                                name="IsiArtikel2"
                                value={IsiArtikel2}
                                onChange={this.handleChange}
                                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button
                                onClick={this.handleSaveArtikel}
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
        )
    }
}
