import Button from "../base/button/Button";

type PricingCardProps = {
    title: string;
    features: string[];
    button?: {
        title: string;
        onClick: () => void;
    };
};

const PricingCard = ({ title, features, button }: PricingCardProps) => {
    return (
        <div className="w-full lg:w-1/3">
            <div className="h-2 bg-brand-blue-extra-light w-full" />
            <div className="shadow bg-brand-blue px-3 py-4">
                <div className="flex items-center">
                    <div className="mr-4 fill-white h-16 w-16">
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" id="fast-delivery"><path fill="#74c0eb" d="M9.7707,40.92v8h6.2822c0.4737-1.6808,2.0015-2.92,3.8337-2.92s3.3601,1.2392,3.8337,2.92H42.375v-8H9.7707z" /><polygon fill="#74c0eb" points="53.41 32.46 42.38 32.46 42.38 22 49.47 22" /><circle cx="23" cy="16" r="6" fill="#74c0eb" /><path fill="#003462" d="M59,34.4106l-4.7837-2.6475L50.1621,21h-6.7822v-4.5H29.9747C29.9865,16.3342,30,16.1688,30,16    c0-3.8599-3.1401-7-7-7s-7,3.1401-7,7c0,0.1688,0.0135,0.3342,0.0253,0.5H8.77v10.1675H6v2h2.77v2H7.3335v2H8.77v2H6v2h2.77    v13.2524h6.1248c-0.0004,0.0273-0.0081,0.0527-0.0081,0.0801c0,2.7568,2.2432,5,5,5s5-2.2432,5-5    c0-0.0274-0.0077-0.0527-0.0081-0.0801h19.2433c-0.0004,0.0273-0.0081,0.0527-0.0081,0.0801c0,2.7568,2.2432,5,5,5s5-2.2432,5-5    c0-0.0274-0.0077-0.0527-0.0081-0.0801H59V34.4106z M48.7783,23l3.1859,8.458h-8.5843V23H48.7783z M23,11c2.7568,0,5,2.2432,5,5    s-2.2432,5-5,5s-5-2.2432-5-5S20.2432,11,23,11z M10.77,36.6675H14v-2h-3.23v-2h8.5635v-2H10.77v-2H22v-2H10.77V18.5h5.6995    C17.4789,21.1271,20.0217,23,23,23s5.5211-1.8729,6.5305-4.5h11.8494v21.4199H10.77V36.6675z M19.8867,53c-1.6543,0-3-1.3457-3-3    s1.3457-3,3-3s3,1.3457,3,3S21.541,53,19.8867,53z M24.4194,47.9199C23.6271,46.2019,21.8992,45,19.8867,45    s-3.7404,1.2019-4.5327,2.9199H10.77v-6h30.6099v3.6602v2.3398H24.4194z M49.1138,53c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3    s3,1.3457,3,3S50.7681,53,49.1138,53z M57,47.9199h-3.3536C52.8542,46.2019,51.1263,45,49.1138,45s-3.7404,1.2019-4.5327,2.9199    h-1.2012v-2.3398v-5.6602V33.458h9.7686L57,35.5894V47.9199z" /><polygon fill="#003462" points="25.832 17.418 24 15.586 24 12.438 22 12.438 22 16.414 24.418 18.832" /></svg>                                </div>
                    <div className="">
                        <h3 className="text-white text-2xl font-bold">{title}</h3>
                    </div>
                </div>
                <div className="bg-brand-blue-light px-4 rounded-lg mt-4 mb-6">
                    <ul className="text-gray-300 list-item ">
                        {features.map((feature, index) => (
                            <li key={index} className="text-lg py-3 font-semibold">{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center w-full justify-center">
                    {!!button && <Button
                        title={button?.title}
                        variant="primary"
                        onClick={button?.onClick}
                        className="mr-4" />}
                </div>
            </div>
        </div>
    )
}
export default PricingCard;