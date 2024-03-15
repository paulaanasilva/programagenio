import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Router, { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Header() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState("Dashboard");
  const { data: session } = useSession();
  console.log(session);
  const headerOptions = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Meus Cursos",
      path: "/meus-cursos",
    },
    {
      name: "Portugol Studio",
      path: "/portugol-studio",
    },
    {
      name: "Cadastro de Cursos",
      path: "/cadastro/curso",
    },
  ];

  React.useEffect(() => {
    const currentOption = headerOptions.find(
      (option) => router.pathname === option.path
    );
    if (currentOption) {
      setActiveItem(currentOption.name);
    }
  }, [router.pathname, headerOptions]);

  const handleExit = () => {
    router.push("/");
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item>
          <img alt="logo" src="/logoprincipal.jpeg" />
        </Menu.Item>

        {headerOptions.map((option) => (
          <Menu.Item
            key={option.name}
            name={option.name}
            active={activeItem === option.name}
            onClick={() => {
              router.push(option.path);
              setActiveItem(option.name);
            }}
          />
        ))}

        <Menu.Menu position="right">
          {session && session.user? (
            <Menu.Item
              name={"Olá, " + session.user.name}
              active={activeItem === "Sair"}
              onClick={handleExit}
            />
          ) : (
            <Menu.Item
              name="Entrar"
              active={activeItem === "Entrar"}
              onClick={() => {
                router.push("/login");
                setActiveItem("Entrar");
              }}
            />
          )}
          <Menu.Item
            name="Sair"
            active={activeItem === "Sair"}
            onClick={handleExit}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
