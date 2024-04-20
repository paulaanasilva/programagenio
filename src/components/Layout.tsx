import "semantic-ui-css/semantic.min.css";
import { useRouter } from 'next/router';
import Header from "./Header";
import Footer from "./Footer";
import HeaderGerenciar from "./HeaderGerenciar";

interface LayoutProps {
  children: React.ReactNode;
}

function routerComHeader() { 
  const router = useRouter();
  if(router.pathname === '/login') {
    return true;
  }
  if (router.pathname.startsWith('/gerenciar/')) {
    return <HeaderGerenciar />
  }
  return <Header />;
}

function routerSemFooter() {
  const router = useRouter();
  if (router.pathname !== '/login' && router.pathname !== '/meus-cursos/[id]' && !router.pathname.startsWith('/gerenciar/')) {
    return true;
  }
  return false;
}

function overridePadding() {
  const router = useRouter();
  if(router.pathname == '/meus-cursos/[id]' || router.pathname.startsWith('/gerenciar/')){
    return ".override-padding";
  }else{
    return "px-5";
  }
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="layout">
      {routerComHeader()}
      <div className={overridePadding()} style={{ flex: 1 }}>{children}</div>
      <footer>
        {routerSemFooter() && <Footer />}
      </footer>
    </div>
  );
}
