import React from "react";
import $ from "jquery";
import './index.css';
import './Image';
import Image from "./Image";
import Popup from "./Popup";

class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {urls: []};
        console.log("constructor");
        this.popup = {object: null};
    }

    componentDidMount() {
        console.log("componentDidMount 1");
        $.ajax({
            url: "https://api.vk.com/method/photos.getAll?owner_id=40519043&count=60&access_token=feedf922f2eb2dab1a2660f5502116a355a6e753ec2740235163b7d92e10d73f214f3f0f56b46bc24578d&v=5.52",
            method: 'GET',
            dataType: 'JSONP'
        }).done((data) => {
            console.log(data);
            let urlsArray = [];
            const dataArray = data.response.items;
            for (let i = 0; i < dataArray.length; i++){
                urlsArray[i] = dataArray[i].photo_1280;
            }

            this.setState({urls:urlsArray});
        })
    }


    get gallery() {
        return (
            <div className="gallery">
                    {this.state.urls.map((imageUrl, index) => <Image imageUrl={imageUrl} key={'img' + index} popup={this.popup}/>)}
                    <Popup ref={(elem) => this.popup.object = elem} />
            </div>
        );
    }

    render() {
        return this.state.urls.length ? this.gallery : null;
    }
}

export default Gallery;
