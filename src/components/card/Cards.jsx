import React from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-col max-w-7xl justify-center items-center">
                <div className="flex md:flex-row flex-col max-w-7xl justify-center items-center">
                    <div
                        className="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div className="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?nature "
                                alt="" className="" /> </div>
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 ">
                                Artikel Tentang Semedo
                            </div>
                            <div className="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a><br /><br />
                                <Link
                                type="button"
                                classNameName="inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                                to='/artikel'
                                >Lihat Selengkapnya</Link>
                                </div>
                        </div>
                    </div>
                    <div
                        className="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div className="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?nature "
                                alt="" className="" /> </div>
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 ">
                                Coming Soon !!
                            </div>
                            <div className="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a><br /><br />
                                <Link
                                type="button"
                                classNameName="inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                                to='/artikel'
                                >Lihat Selengkapnya</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script> 
        </div>
  )
}

export default Cards