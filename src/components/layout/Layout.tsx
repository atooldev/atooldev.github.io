import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";


type LayoutProps = {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout  bg-brand-background">
            <AppHeader />
            <main
                className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >{children}
            </main>
            <AppFooter />
        </div>
    );
};

export default Layout;