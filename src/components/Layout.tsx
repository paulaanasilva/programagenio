import "semantic-ui-css/semantic.min.css";
import { useRouter } from 'next/router';
import Header from "./Header";
import Footer from "./Footer";
import HeaderGerenciar from "./HeaderGerenciar";

interface LayoutProps {
  children: React.ReactNode;
}

function routerHeader() { 
  const router = useRouter();
  if(router.pathname === '/login') {
    return true;
  }
  if (router.pathname.startsWith('/gerenciar/cadastro/')) {
    return <HeaderGerenciar />
  }
  return <Header />;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="layout">
      {routerHeader()}
      <div className="px-0" style={{ flex: 1 }}>{children}</div>
      <footer>
        {router.pathname !== '/login' && router.pathname !== '/meus-cursos/[id]' && <Footer />}
      </footer>
    </div>
  );
}
