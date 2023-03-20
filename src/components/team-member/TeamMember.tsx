import Image from "next/image";

type TeamMemberProps = {
    name: string;
    role: string;
    image: string;
    description: string;
};

const TeamMember = ({ name, role, image, description }: TeamMemberProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="mr-4 rounded-full fill-white h-60 w-60 mb-8 py-6">
                <Image
                    width={100}
                    height={100}
                    className="rounded-full w-full object-contain grayscale hover:grayscale-0 "
                    src={image}
                    alt={name} />
            </div>

            <div className=" text-center">
                <h3 className="text-white text-3xl font-bold mb-4 ">{name}</h3>
                <p className="text-gray-400 font-semibold text-lg">{role}</p>
                <p className="text-gray-400 font-semibold text-lg">{description}</p>
            </div>
        </div>
    )

}
export default TeamMember;