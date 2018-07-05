import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image } from "react-bootstrap";


class SliderComponent extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (<div>
            <Slider {...settings}>
                <div>
              <Image src={this.props.profile.avatar_url} alt={this.props.profile.name} circle />
                </div>
            <div>
              <h2>{ this.props.profile.name === '' ? 'No Data Found' : this.props.profile.name}</h2>
            </div>
                <div>
              <h2>{this.props.profile.bio === '' ? 'No Data Found' : this.props.profile.bio}</h2>
                </div>
                <div>
              <h2>{this.props.profile.location=== '' ? 'No Data Found' : this.props.profile.location}</h2>
                </div>

                <div>
              <h2>{this.props.profile.company === '' ? 'No Data Found' : this.props.profile.company}</h2>
                </div>
                <div>
              <h2>{this.props.profile.blog === '' ? 'No Data Found' : this.props.profile.blog }</h2>
                </div>
              
            </Slider>
          </div>);
    }
}

export default SliderComponent;
