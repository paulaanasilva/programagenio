import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Router from "next/router";

export default class MenuExampleSecondaryPointing extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>

                    <Menu.Item>
                        <img alt="logo" src='/sologo.jpeg' />
                    </Menu.Item>

                    <Menu.Item
                        name='Dashboard'
                        active={activeItem === 'Dashboard'}
                        onClick={() => Router.push("/")}
                    />
                    <Menu.Item
                        name='Meus Cursos'
                        active={activeItem === 'meus-cursos'}
                        onClick={() => Router.push("/meus-cursos")}
                    />
                    <Menu.Item
                        name='Portugol Studio'
                        active={activeItem === 'Portugol Studio'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Sair'
                            active={activeItem === 'Sair'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}