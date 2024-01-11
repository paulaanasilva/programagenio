import "semantic-ui-css/semantic.min.css";
import Header from '../components/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="px-10">{children}</div>
        </div>
    );
}

export default Layout;