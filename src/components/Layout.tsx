import "semantic-ui-css/semantic.min.css";
import { useRouter } from 'next/router';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="layout">
      {router.pathname !== '/login' && <Header />}
      <div className="px-5" style={{ flex: 1 }}>{children}</div>
      <footer>
        {router.pathname !== '/login' && router.pathname !== '/meus-cursos/[id]' && <Footer />}
      </footer>
    </div>
  );
}
