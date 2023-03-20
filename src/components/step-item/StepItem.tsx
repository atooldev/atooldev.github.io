import Button from "../base/button/Button";

type StepItemProps = {
    title: string;
    description: string;
    logo: string;
};

const StepItem = ({ title, logo, description }: StepItemProps) => {
    return (
        <div className="w-full lg:w-1/3">
            <div className="shadow bg-brand-blue px-3 py-4">
                <div className="flex flex-col items-center">
                    <div className="mr-4 fill-white h-60 w-60 py-6">
                        <img
                            src={logo}
                            alt={title} />
                    </div>

                    <div className=" text-center">
                        <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-400 font-semibold text-lg">{description}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default StepItem;