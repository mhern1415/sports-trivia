import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = () => {

    return (
        <div className="header">
            <div className="ui secondary pointing menu">
            
            <DropdownButton variant="warning" size="lg" title="Go to..">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="baseballeasy" className="item">
                Baseball Easy
            </Link>
            <Link to="baseballmedium" className="item">
                Baseball Medium
            </Link>
            <Link to="baseballhard" className="item">
                Baseball Hard
            </Link>
            <Link to="basketballeasy" className="item">
                Basketball Easy
            </Link>
            <Link to="basketballmedium" className="item">
                Basketball Medium
            </Link>
            <Link to="basketballhard" className="item">
                Basketball Hard
            </Link>
            <Link to="footballeasy" className="item">
                Football Easy
            </Link>
            <Link to="footballmedium" className="item">
                Football Medium
            </Link>
            <Link to="footballhard" className="item">
                Football Hard
            </Link>
            <Link to="hockeyeasy" className="item">
                Hockey Easy
            </Link>

            
    </DropdownButton>
 
            </div>
            </div>
    )

}

export default Header;