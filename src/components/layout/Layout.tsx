import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";


type LayoutProps = {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout h-full">
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </div>
    );
};

export default Layout;