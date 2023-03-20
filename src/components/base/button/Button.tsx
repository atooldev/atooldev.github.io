import { title } from "process";


type ButtonProps = {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    title?: string;
    className?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { children, className, onClick, title, ...rest } = props;
    let primaryVariant = "bg-gradient-to-r from-cyan-500 to-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-3xl mr-4";
    let secondaryVariant = "transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 0";
    let variant = props.variant === 'primary' ? primaryVariant : secondaryVariant;
    return (
        <button
            className={`button ${variant} ${className}`}
            onClick={onClick}
            {...rest}
        >
            {title || children}
        </button>
    );
};

export default Button;