import Button from "../base/button/Button";


type HeroSectionProps = {
    badge?: string;
    title: string;
    description: string;
    heroImage?: React.ReactNode;
    variant?: 'default' | 'reverse';
}
const HeroSection = ({ badge, title, description, variant = 'default', heroImage = "https://images.unsplash.com/file-1668626794835-4d75cc3139a4image?dpr=2&auto=format&fit=crop&w=416&q=60" }: HeroSectionProps) => {

    return (
        <div className="hero-section">
            <div className="container mx-auto py-24">
                <div className={`flex  ${variant === 'reverse' ? 'flex-col-reverse sm:flex-row-reverse' : 'flex-col sm:flex-row'}  items-center justify-between`}>
                    <div className={`w-full lg:w-1/2 ${variant === 'reverse' ? 'ml-12 text-center sm:text-right' : ''}`}>
                        {!!badge && <span className="text-blue-500 font-medium uppercase ">{badge}</span>}
                        {!!title && <h1 className="text-3xl  text-white lg:text-7xl font-bold my-4 mb-6 ">
                            {title}
                        </h1>}
                        {!!description &&
                            <p className="text-gray-500 text-lg pr-5 mb-8">{description}</p>
                        }
                        <div
                            className={`flex items-center w-full ${variant === 'reverse' ? 'justify-center sm:justify-end' : ''}`}
                        >
                            <Button
                                title="Get Started"
                                variant="primary"
                                className="mr-4" />
                            <Button
                                title="Learn More"
                                variant="secondary" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 fill-white">
                        {heroImage}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;