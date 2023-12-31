
import Layout from "@/components/layout/Layout";
import TeamMember from "@/components/team-member/TeamMember";


const About = () => {
    return (
        <Layout
            title='Atool - Contact us'
            description='Helping you to build your business with our services.'
            image='https://images.unsplash.com/photo-1616166330003-8b2b2b2b2b2b?dpr=2&auto=format&fit=crop&w=416&q=60'
            url='https://atool.dev/about'
        >
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white">About Us</h2>
                <p className="mt-4 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.
                </p>
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white">Our Team</h2>
                <div className=" grid grid-cols-1 gap-12 sm:grid-cols-3">
                    <TeamMember
                        name="Arya"
                        role="Co-Founder"
                        image="data:image/jpeg;base64,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"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."

                    />
                    <TeamMember
                        name="Mohamed Hossein"
                        role="Co-Founder"
                        image="/images/avatars/mohm.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."

                    />
                    <TeamMember
                        name="Saeed"
                        role="Frontend Developer"
                        image="https://profile-images.xing.com/images/9dadc3bbe9f596143808ab90affc8b5c-3/saeed-kolivand.1024x1024.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."

                    />
                    <TeamMember
                        name="Ehsan"
                        role="Ui/Ux Designer"
                        image="/images/avatars/ehsan.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."

                    />
                    <TeamMember
                        name="Mehran"
                        role="Frontend Developer"
                        image="/images/avatars/mehran.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."
                    />
                    <TeamMember
                        name="Ali"
                        role="Frontend Developer"
                        image="/images/avatars/ali.png"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus."

                    />
                </div>
            </div>
        </Layout>
    )
}
export default About;