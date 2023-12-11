import React from "react";
import { Card, Menu } from "semantic-ui-react";
import Router from "next/router";

export default function Dashboard() {
  return (
    <div>
      <Menu>
        <Menu.Item
          name="Dashboard"
          onClick={() => Router.push("/dashboard")}
        >
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

      <Card>
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
