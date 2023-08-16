import Image from "next/image";
import Link from "next/link";

const AppHeader = () => {

    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5  bg-brand-background max-w-xl mx-auto  lg:max-w-7xl lg:px-8">
            <div className="container flex flex-wrap items-center mx-auto justify-between sm:justify-start " >
                <Link href="/" className="flex items-center mr-4 ">
                    <Image
                        width={36}
                        height={36}
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-6 mr-4 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-50">ATool</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto " id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="https://docs.atool.dev/atool-admin/"
                                target="_blank"
                                className="block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                                Documentation
                            </a>
                        </li>
                        {/* <li>
                            <Link href='/careers' className="block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                                Careers
                            </Link>
                        </li> */}
                        <li>
                            <Link href='/contact' 
                            className="block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link href='/about' className="block py-2 pl-3 pr-4 text-lg text-gray-700   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ">
                                About
                            </Link>
                        </li>




                    </ul>

                </div>
                <div className="hidden w-full md:block md:w-auto ml-auto items-center justify-center flex" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">                    <li className="mt-3 md:mt-0">
                        <a
                            className="block py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent  dark:text-white"
                            href="https://your-demo-link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    </li>
                        <li>
                            <a
                                href="https://github.com/atooldev/atool-express"
                                target="_blank"
                                className="flex gap-4 items-center justify-center text-white text-lg  rounded md:bg-transparent  dark:text-white border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-2 "
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 98 96" // You might need to adjust the viewBox accordingly
                                    width="24" height="23" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>
                                Star
                            </a>

                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default AppHeader;