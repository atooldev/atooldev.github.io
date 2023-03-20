import Button from "../base/button/Button";

const NewsLetterSection = () => {

    return (
        <div className="news-letter-section">
            <div className="container mx-auto my-12">
                <div className="flex flex-col items-center justify-center mb-11">
                    <span className="text-blue-500 font-medium uppercase ">News Letter</span>

                    <h1 className="text-3xl  text-white  lg:text-4xl text-center font-bold my-4 mb-6 w-10/12">
                        Subscribe to our newsletter to get the latest updates.
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center j justify-between gap-12">
                    <div className="w-full">
                        <div className="shadow bg-brand-blue px-3 py-8">
                            <div className="flex flex-col items-center">
                                <h1 className="text-3xl text-white font-bold mb-4">Subscribe to our newsletter</h1>
                                <p className="text-gray-500 font-medium text-center w-10/12 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, nisl eget ultricies tincidunt, nisl nunc aliquet nisl, sit amet aliquet nisl nisl sit amet dolor. </p>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                                    <input type="text" className="w-full lg:w-1/2 px-4 py-3 rounded-lg" placeholder="Enter your email" />
                                    <Button 
                                    variant="primary"
                                    title="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NewsLetterSection;