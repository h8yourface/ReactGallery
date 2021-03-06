import React from "react";
import './index.css';
import './Popup.js';

class Image extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    get image() {
        return (
            <div className="images" key={"img" + this.props.index} onClick={() => this.props.popup.object.show(this.props.imageUrl)}>
                <img src={this.props.imageUrl} alt=" "/>
            </div>
        );
    }

    render() {
        return this.props.imageUrl ? this.image : null;
    }
}

export default Image;