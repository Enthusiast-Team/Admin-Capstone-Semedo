import React from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
        <div class="flex justify-center">
            <div class="flex flex-col max-w-7xl justify-center items-center">
                <div class="flex md:flex-row flex-col max-w-7xl justify-center items-center">
                    <div
                        class="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?nature "
                                alt="" class="" /> </div>
                        <div class="grid p-2">
                            <div class="font-bold text-lg text-black m-2 ">
                                Artikel Tentang Semedo
                            </div>
                            <div class="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a><br /><br />
                                <Link
                                type="button"
                                className="inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                                to='/artikel'
                                >Lihat Selengkapnya</Link>
                                </div>
                        </div>
                    </div>
                    <div
                        class="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?nature "
                                alt="" class="" /> </div>
                        <div class="grid p-2">
                            <div class="font-bold text-lg text-black m-2 ">
                                Coming Soon !!
                            </div>
                            <div class="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a><br /><br />
                                <Link
                                type="button"
                                className="inline-block rounded bg-green-500 hover:bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                                to='/artikel'
                                >Lihat Selengkapnya</Link>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <div class="flex md:flex-row flex-col max-w-7xl justify-center items-center">
                    <div
                        class="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?galaxy "
                                alt="" class="" /> </div>
                        <div class="grid p-2">
                            <div class="font-bold text-lg text-black m-2 ">
                                Coming Soon !!
                            </div>
                            <div class="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a></div>
                        </div>
                    </div>
                    <div
                        class="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center w-3/4 md:w-1/2 hover:scale-105 hover:brightness-90">
                        <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x550/?beach "
                                alt="" class="" /> </div>
                        <div class="grid p-2">
                            <div class="font-bold text-lg text-black m-2 ">
                                Coming Soon !!
                            </div>
                            <div class="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your
                                    appreciation for someone. They are also a great way to show your love. Flowers can be
                                    delivered in a variety of ways, including through mail, messenger, or even in person.
                                </a></div>
                        </div>
                    </div>
                </div> */}
            </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script> 
        </div>
  )
}

export default Cards