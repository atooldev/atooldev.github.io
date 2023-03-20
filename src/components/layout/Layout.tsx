import AppFooter from "./AppFooter";
import AppHead, { AppHeadProps } from "./AppHead";
import AppHeader from "./AppHeader";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

type LayoutProps = AppHeadProps & {
    children: React.ReactNode;

};
const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <div className="layout  bg-brand-background">
            <AppHead
                {...props}
            />
            <AppHeader />
            <main
                className={`${inter.className} max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8`}
            >{children}
            </main>
            <AppFooter />
        </div>
    );
};

export default Layout;