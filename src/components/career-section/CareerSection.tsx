import Button from "../base/button/Button";
import JobPostCard from "../job-post-card/JobPostCard";



const CareerSection = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white">Open Positions</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.
                        </p>

                        <div className="flex flex-col lg:flex-row items-center  mt-16 justify-between gap-12">
                            <JobPostCard
                                title="Senior Frontend Developer"
                                location="Remote"
                                type="Full Time"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."
                                image="/images/website-development.png"
                            />
                            <JobPostCard
                                title="Senior Backend Developer"
                                location="Remote"
                                type="Full Time"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."
                                image="/images/backend.png"
                            />
                            <JobPostCard
                                title="Senior DevOps Engineer"
                                location="Remote"
                                type="Full Time"
                                image="/images/devops.png"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."
                            />
                        </div>

            </div>
        </div>
    )
}
export default CareerSection;