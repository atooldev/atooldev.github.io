import Link from "next/link";

const AppHeader = () => {

    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5  bg-brand-background max-w-xl mx-auto  lg:max-w-7xl lg:px-8">
            <div className="container flex flex-wrap items-center mx-auto justify-between sm:justify-start " >
                <Link href="/" className="flex items-center mr-4 ">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-4 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-50">OfBytes</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-white text-lg uppercase rounded md:bg-transparent md:p-0 dark:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/careers' className="block py-2 pl-3 pr-4 text-lg text-gray-700  uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' className="block py-2 pl-3 pr-4 text-lg text-gray-700  uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link href='/about' className="block py-2 pl-3 pr-4 text-lg text-gray-700  uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default AppHeader;