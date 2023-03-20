import LogoItem from "../logo-item/LogoItem";

const LogosSection = () => {

    return (
        <div className="my-24">
            <div className="container mx-auto bg-gradient-to-r from-brand-blue to-brand-blue bg-brand-blue-light py-8  shadow rounded-3xl px-6">
                <div className="flex flex-wrap items-center justify-center">
                    <LogoItem
                        title="Google"
                    />
                    <LogoItem
                        title="Facebook"
                    />
                    <LogoItem
                        title="Twitter"
                    />
                    <LogoItem
                        title="Instagram"
                    />
                </div>
            </div>
        </div>
    )
}
export default LogosSection;