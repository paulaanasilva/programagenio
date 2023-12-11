import React from "react";
import { Card, Container, Menu } from "semantic-ui-react";
import Router from "next/router";

export default function MeusCursos() {
  return (
    <Container>
      <Menu>
        <Menu.Item name="Dashboard" onClick={() => Router.push("/dashboard")}>
          <h1>Dashboard</h1>
        </Menu.Item>
        <Menu.Item
          name="Meus Cursos"
          onClick={() => Router.push("/meus-cursos")}
        >
          <h1>Meus Cursos</h1>
        </Menu.Item>
        <Menu.Item>
          <h1>Meus Cursos</h1>
        </Menu.Item>
      </Menu>

      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <Card>
          <Card.Content>
            <Card.Header>Curso de Protugol</Card.Header>
            <Card.Description>O curso ............... </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
}
