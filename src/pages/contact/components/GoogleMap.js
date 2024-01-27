import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 40.696295,
            lng: -73.997619
        },
        zoom: 11
    };

    render() {
        return (
            <>
                {/* Google Map */}
                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDEfl06vaMg0OPmrUYOZ9ILp4S-kjOW0Cg" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent lat={40.696295} lng={-73.997619} text="My Marker" />
                    </GoogleMapReact>
                </div>
            </>
        )
    }
}

export default GoogleMap