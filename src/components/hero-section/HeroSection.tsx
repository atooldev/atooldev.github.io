const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4">The best way to manage your business</h1>
                        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquet, nunc orci aliquam nisl, sed aliquet lorem nisl sit amet enim. Sed euismod, nisl nec aliquam aliquet, nunc orci aliquam nisl, sed aliquet lorem nisl sit amet enim.</p>
                        <div className="flex items-center">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Get Started</button>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Learn More</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="https://images.unsplash.com/file-1668626794835-4d75cc3139a4image?dpr=2&auto=format&fit=crop&w=416&q=60" className="w-full" alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;