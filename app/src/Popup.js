import React from "react";
import './index.css';

class Popup extends React.Component {
    constructor(){
        super();
        this.state = {
            isVisible: false,
            url: ''
        };
        this.hide = this.hide.bind(this);
    }


    hide(){
        this.setState({isVisible: false});
    }

    show(url){
        console.log(url);
        this.setState({
            isVisible: true,
            url
        });
    }

    get popup() {
        return (
            <div className="popup" onClick={this.hide}>
                <img src={this.state.url} alt=" "/>
            </div>
        );
    }

    render() {
        return this.state.isVisible ? this.popup : null;
    }

}

export default Popup;