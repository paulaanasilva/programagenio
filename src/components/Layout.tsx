import "semantic-ui-css/semantic.min.css";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="px-10">{children}</div>
    </div>
  );
}
