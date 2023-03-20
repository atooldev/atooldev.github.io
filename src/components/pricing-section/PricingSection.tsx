// pricing sectino with 3 card and title a header on top of these three 
// card would includ a icon and title infront of the icon on top of the card
// description would be bullet points and a button at the bottom of the card

import Button from "../base/button/Button";
import PricingCard from "../pricing-card/PricingCard";


const PricingSection = () => {

    return (
        <div className="pricing-section">
            <div className="container mx-auto my-12">
                <div className="flex flex-col items-center justify-center mb-11">
                    <span className="text-blue-500 font-medium uppercase ">Pricing</span>
                    <h1 className="text-3xl  text-white  lg:text-4xl text-center font-bold my-4 mb-6 w-10/12">
                        Choose the best plan for your business.
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center  justify-between gap-12">

                    <PricingCard
                        title="OutSrouce"
                        features={[
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                        ]}
                        button={{
                            title: "Get Started",
                            onClick: () => { }
                        }}
                    />
                    <PricingCard
                        title="Found Your Team"
                        features={[
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                        ]}
                        button={{
                            title: "Get Started",
                            onClick: () => { }
                        }}
                    />
                    <PricingCard
                        title="Manage Your Team"
                        features={[
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                        ]}
                        button={{
                            title: "Get Started",
                            onClick: () => { }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default PricingSection;
