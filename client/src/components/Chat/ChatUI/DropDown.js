import React from 'react';

class DropDown extends React.Component {
    state = {
        menuState: false
    };

    toggleMenu = () => this.setState({menuState: !this.state.menuState});

    showMenu = () => {
        const menuState = this.state;
        if (menuState) {
            return (
                <div className="item">Test</div>
            )
        }
    };

    selection = (e) => {
        
    }

    render() {
        const style = this.state.menuState ? {display: 'block'} : {display: 'none'};
        return (
            <div onClick={this.toggleMenu} className="ui floating dropdown labeled search icon button">
                <i className="settings icon"/>
                <span className="text">Settings</span>
                <div style={style}className="menu">
                    <div onClick={this.selection} className="item">Delete</div>
                    <div onClick={this.selction} className="item">Edit</div>
                </div>
            </div>
        )
    }
}

export default DropDown;