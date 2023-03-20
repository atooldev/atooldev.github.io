import Layout from "@/components/layout/Layout";
import Link from "next/link";
import animationData from "@/components/base/animations/website-maintenance.json";
import Lottie from 'react-lottie'

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            // preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Layout >
            <div>
                <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={800}
                    />
                    <div className="text-center">
                        <div className="mt-6">
                            <Link href="/" className="text-base font-medium text-white hover:text-brand-blue">
                                Go back home<span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;