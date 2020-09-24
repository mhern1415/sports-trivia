import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = () => {

    return (
        <div className="header">
            <div className="ui secondary pointing menu">
            
            <DropdownButton variant="warning" title="Go to..">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/basketballmedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>Medium Quiz</button>
                    </Link>
    </DropdownButton>
 
            </div>
            </div>
    )

}

export default Header;