import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import DataArtikel from './DataArtikel';
import logo from "../assets/logo/logo_semedo.png"

function Sidebar() {
    const [open,
        setOpen] = useState(true);
    const [submenuOpen,
          setSubmenuOpen] = useState(false);    
    const Menus = [
        { title: "Dashboard", path: '/' },

        {
          title: "Artikel",
          submenu: true,
          path: '/artikel',

          submenuItems: [
            { title: "Data Artikel" },
            { title: "Tambah Artikel", path: '/add-artikel' },
          ],
        },
      ];

    return (
        <div className=''>
        <div
            className={`bg-dark-purple h-full mb-96 p-5 pt-8 ${open
            ? "w-72"
            : "w-20"} duration-300 relative`}
            
            >
            
            <BsArrowLeft
                className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${ !open && "rotate-180"}`}
                onClick={() => setOpen(!open)}/>

            <div className='inline-flex'>
                <img src={logo}
                    className={`text-4xl rounded w-15 h-10 cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg"}`}
                />
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${ !open && "scale-0" }`}>MySemedo</h1>
                
            </div>
            <div className={`h-12 flex items-center rounded-md bg-light-white mt-6 px-4 ${!open ? "px-4" : "px-2.5"}py-2`}>
              <BsSearch className='text-white text-lg block float-left cursor-pointer' />
              <input type={"search"} placeholder='Search' className='ml-3 text-base bg-transparent w-full text-white focus:outline-none'/>
            </div>

            <ul className='pt-2'>
              {Menus.map((menu, index) =>(
                <>
                  <li
                    key={index}
                    className={`text-gray-300 text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}
                    >
                      <Link to={menu.path} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white w-full rounded-md">
                        <span className='text-2xl block float-left'>
                            <RiDashboardFill />
                        </span>
                        <span
                            className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}
                            >
                            {menu.title}
                        </span>
                        </Link>
                    </li>
                </>
            )
            )}
            </ul>
            
        </div>

    </div>
    )
}

export default Sidebar;