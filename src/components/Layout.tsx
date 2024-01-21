import "semantic-ui-css/semantic.min.css";
import { useRouter } from 'next/router';
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  
  return (
    <div>
      {router.pathname !== '/login' && <Header />}
      <div className="px-10">{children}</div>
    </div>
  );
}
