import Image from "next/image";
import Link from "next/link";

const AppFooter = () => {
    return (
        <footer className="shadow" >
            <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <Image width={32} height={32} src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Atool</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-white">
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="mr-4 hover:underline md:mr-6 ">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
                        </li>

                        <li>
                            <Link href="/career" className="mr-4 hover:underline md:mr-6 ">Career</Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center">
                        <a href="#" className="text-white hover:text-gray-300">
                            Instagram
                        </a>
                        <a href="#" className="ml-6 text-white hover:text-gray-300">
                            Twitter
                        </a>
                    </div>




                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <Link href="/" className="hover:underline">OfByte.com</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default AppFooter;