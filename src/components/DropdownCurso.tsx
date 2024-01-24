import React from 'react'
import {
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'semantic-ui-react'


const DropdownCurso = () => (
    <>
        <div>
            <Dropdown text='...' pointing='right'>
                <DropdownMenu>
                    <DropdownItem text='Acessar Curso' />
                </DropdownMenu>
            </Dropdown>
        </div>
        
    </>
)

export default DropdownCurso
