
import Step1 from "../base/icons/Step1";
import Step2 from "../base/icons/Step2";
import Step3 from "../base/icons/Step3";
import Step4 from "../base/icons/Step4";
import StepItem from "../step-item/StepItem";

const HowItWorksSection = () => {

    return (
        <div className="pricing-section">
            <div className="container mx-auto my-12 mb-24">
                <div className="flex flex-col items-center justify-center mb-11">
                    <h1 className="text-3xl  text-white  lg:text-4xl text-center font-bold my-4 mb-6 w-10/12">
                        See the path to your success.
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center j justify-between gap-12">

                    <StepItem
                        title="Step 1"
                        description="Get start with free consultation"
                        logo={'/images/step1.png'}
                    />
                    <StepItem
                        title="Step 2"
                        description="Define your business requirement"
                        logo={'/images/step2.png'}
                    />
                    <StepItem
                        title="Step 3"
                        description="Select the best plan for your business"
                        logo={'/images/step3.png'}
                    />
                    <StepItem
                        title="Step 4"
                        description="Achieve your business goal and grow your business"
                        logo={'/images/step4.png'}
                    />
                </div>
            </div>
        </div>
    )
}
export default HowItWorksSection;
