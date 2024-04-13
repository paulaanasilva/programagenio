import Link from "next/link";
import React from "react";
import { Dropdown, DropdownMenu, DropdownItem, DropdownDivider } from "semantic-ui-react";


const DropdownManage = () => (
    <>
        <div>
            <Dropdown  className='icon' icon='user'>
                <DropdownMenu>
                    <DropdownItem>
                        <Link className="text-black" href="/gerenciar/cadastro/curso">Gerenciar</Link>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </>
);

export default DropdownManage;

