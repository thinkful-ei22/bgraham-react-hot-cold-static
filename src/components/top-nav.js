import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={props.toggleModal} className="what" href="#what">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#new" onClick={props.newGame}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

