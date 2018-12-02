import React from 'react';
import './styles.css';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
        this.props.onClick(this.state.active);
    }

    render() {
        return (
            <label className={"toggle " + this.props.className}>
                <input type="checkbox" onClick={this.handleClick} />
                <span className="slider round"></span>
            </label>
        )
    }
}