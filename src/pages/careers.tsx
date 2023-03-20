import CareerSection from "@/components/career-section/CareerSection";
import JobPostCard from "@/components/job-post-card/JobPostCard";
import Layout from "@/components/layout/Layout";

const Careers = () => {
    return (
        <Layout
            title='‌OfBytes - Careers'
            description='Helping you to build your business with our services.'
            image='https://images.unsplash.com/photo-1616166330003-8b2b2b2b2b2b?dpr=2&auto=format&fit=crop&w=416&q=60'
            url='https://ofbytes.com/careers'
        >
            <div>
                <div className="max-w-7xl max-sm: py-12 px-4 sm:px-6 lg:px-8 lg:py-24  items-center justify-center flex flex-col">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Careers</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-center text-xl text-gray-400 sm:max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus.
                    </p>
                </div>

                <CareerSection />

            </div>
        </Layout>
    );
};

export default Careers;
