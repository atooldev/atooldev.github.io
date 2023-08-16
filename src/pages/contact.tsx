import Button from "@/components/base/button/Button";
import Layout from "@/components/layout/Layout"
const Contact = () => {

    return (
        <Layout
        title='Atool - Contact us'
        description='Helping you to build your business with our services.'
        image='https://images.unsplash.com/photo-1616166330003-8b2b2b2b2b2b?dpr=2&auto=format&fit=crop&w=416&q=60'
        url='https://atool.dev/contact'
        >
            <div>
                <div className="max-w-7xl  py-12 px-4 sm:px-6 lg:px-8 lg:py-24  items-center justify-center flex flex-col">
                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        <div className="space-y-5 sm:space-y-4">
                            <h2 className="text-3xl font-extrabold  text-white tracking-tight sm:text-4xl">Contact us</h2>
                            <p className="text-xl text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus.
                            </p>
                        </div>
                        <div className="space-y-5 sm:space-y-4">
                            <h3 className="text-lg font-medium leading-6 text-gray-200">Phone</h3>
                            <ul className="flex space-x-12">
                                <li>
                                    <a href="#" className="text-base text-gray-500">
                                        +1 (555) 123-4567
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base text-gray-500">
                                        +1 (555) 765-4321
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-5 sm:space-y-4">
                            <h3 className="text-lg font-medium leading-6 text-gray-200">Email</h3>
                            <ul className="flex space-x-12">
                                <li>
                                    <a href="#" className="text-base text-gray-500">
                                        info@atool.dev
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className="mt-12  w-full sm:w-full lg:w-1/2 bg-brand-blue-light px-6 py-8 rounded-lg">
                        <h3 className="text-3xl mt-4 mb-6 font-medium leading-6 text-gray-200">
                            Contact Form
                        </h3>
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-200">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full py-4 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />

                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm  font-medium text-gray-200">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="first-name"
                                        autoComplete="family-name"
                                        className="block w-full shadow-sm sm:text-sm py-4 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />

                                </div>

                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm  font-medium text-gray-200">
                                    Message
                                </label>
                                <div className="mt-1 mb-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full shadow-sm sm:text-sm py-4 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />

                                </div>
                                <Button
                                    className="w-full my-4"
                                    variant="primary"
                                    title="Submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout >

    );
};

export default Contact;