import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Router, { useRouter } from "next/router";
import DropdownManage from "@/components/DropdownGerenciar";
import Link from "next/link";


export default function Header() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  const headerOptions = [
    {
      name: "Gerenciar",
      path: "/gerenciar/cadastro",
    }
  ];

  React.useEffect(() => {
    const currentOption = headerOptions.find((option) => router.pathname === option.path);
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
        <Link className="text-black" href="/">
          <Menu.Item>
            <img alt="logo" src="/logoprincipal.jpeg" />
          </Menu.Item>
        </Link>


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

        <Menu.Menu position="right" className="pt-12">
          <DropdownManage />
        </Menu.Menu>

      </Menu>
    </div>
  );
}