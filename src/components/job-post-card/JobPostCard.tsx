// job post card with image title and short description

import Button from "../base/button/Button";

type JobPostCardProps = {
    title: string;
    description: string;
    location: string;
    type: string;
    image: string;
};

const JobPostCard = ({ title, description, image }: JobPostCardProps) => {
    return (
        <div className="w-full lg:w-1/3">
            <div className="shadow bg-brand-blue px-3 py-4">
                <div className="flex flex-col items-center">
                    <div className="mr-4 fill-white  w-44 h-44 mb-8 py-6 px-4">
                        <img
                            src={image}
                            alt={description}
                        />
                    </div>

                    <div className=" text-center">
                        <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-400 font-semibold text-lg">{description}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mt-8">
                    <div className="flex border px-5 py-2 border-brand-blue-extra-light  rounded-lg flex-row items-center gap-2">
                        <p className="text-gray-400 font-semibold text-lg">Remote</p>
                    </div>
                    <div className="flex border px-5 py-2 border-brand-blue-extra-light  rounded-lg flex-row items-center gap-2">
                        <p className="text-gray-400 font-semibold text-lg">Full Time</p>
                    </div>
                </div>

                <Button
                    variant="primary"
                    title="Apply Now"
                    className="w-full mt-8"
                />
            </div>

        </div>
    )
}

export default JobPostCard;