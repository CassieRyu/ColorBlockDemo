import React from "react";
import './style.css';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block" id="colorBlock"
                 style={{'backgroundColor': this.props.bgColor, 'height': this.props.height, 'width': this.props.width}}></div>
        );
    }
}

export default Canvas;