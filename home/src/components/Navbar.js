import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <header>
            <nav>
                <h2 className='logo'>cqctxs</h2>
                <ul>
                    <li>
                        <a href='/projects'>projects</a>
                    </li>
                    <li>
                        <a href='/games'>games</a>
                    </li>
                    <li className='menu'>
                        <a href='/'>
                            <div className='bar'></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar