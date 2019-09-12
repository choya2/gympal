import React from 'react';

class NavBar extends React.Component{
    render(){
        return (
            <div className="ui menu">
                <div className="header item">
                    Home
                </div>
                <a class="item">
                    About us
                </a>

            </div>
        );
    }
}


export default NavBar;