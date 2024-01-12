import React from 'react'
import { Helmet } from 'react-helmet';
import { MapContainer, ScaleControl, LayersControl, ImageOverlay, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import BaseMap from '../components/BaseMap';
import Legend4 from '../components/Legend4';
import DateFunction from '../components/DateFunction';


const center = [20.5937, 80];
function setInitialMapZoom() {
    var viewportWidth = window.innerWidth;
    var mapZoom;
    if (viewportWidth <= [767]) {
        mapZoom = [4];
    } if (viewportWidth >= [768]) {
        mapZoom = [4.5];
    } if (viewportWidth >= [1600]) {
        mapZoom = [5];
    } 
    return mapZoom;
}
function setWindowWidth() {
    var viewportWidth = window.innerWidth;
    var windowWidth;
    if (viewportWidth <= [767]) {
        windowWidth = { width: '100vw', height: "65vh", backgroundColor: 'white', border: 'none', margin:'auto' };
    } else {
        windowWidth = { width: '80vw', minHeight: "600px", height: "70vh", backgroundColor: 'white', border: '1px solid black', margin: 'auto' };
    }
    return windowWidth;
}
function setLayerControl() {
    var viewportWidth = window.innerWidth;
    var mapLayersCollapse;
    if (viewportWidth <= [767]) {
      mapLayersCollapse = true;
    } else {
      mapLayersCollapse= false;
    } 
    return mapLayersCollapse;
  }

const layers = [
    {
        name: "1 Month",
        url: 'https://lh3.googleusercontent.com/d/1ZPS5AaJzenEqtnDhNViJfzrpX3LGnf7T',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "2 Month",
        url: 'https://lh3.googleusercontent.com/d/1mHDdg-6Xk5qpCATVR0D60j5-SCSKU9Xv',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "3 Month",
        url: 'https://lh3.googleusercontent.com/d/1qUHKJi7d7pTCGI8sah-Sel8KJ8A2Odwz',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "4 Month",
        url: 'https://lh3.googleusercontent.com/d/1guSkgs6a-JyEbMTQ-grdf0KYaT23plAw',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "6 Month",
        url: 'https://lh3.googleusercontent.com/d/1p_O6C8nP-wohYPICaq-kIqnrfejDA9Zp',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "9 Month",
        url: 'https://lh3.googleusercontent.com/d/1mwsp6vshRIApOp9V3cF8-4s_bon14COm',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "12 Month",
        url: 'https://lh3.googleusercontent.com/d/1ptmu2PGoYusepFttM4iyoi1PyDwgerDg',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "24 Month",
        url: 'https://lh3.googleusercontent.com/d/1XhPXP3TvYx4IqEJjC-KQ4i-k01lKFbgp',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
]


const StandardizedSoilMoistureIndex = () => {
    return (
        <div className='page_container'>
            <Helmet>
                <title>Standardized Soil Moisture Index | India Drought Monitor</title>
            </Helmet>
            <div className="map-heading">
                <h1>Standardized Soil Moisture Index (SSI)</h1>
            </div>
            <div className="date-heading">
                <p>Ending on:</p> {<DateFunction days={0} />}
            </div>
            <MapContainer
                fullscreenControl={true}
                center={center}
                style={setWindowWidth()}
                zoom={setInitialMapZoom()}
                zoomDelta={0.25}
                zoomSnap={0}
                maxZoom={8}
                maxBounds={[[8, 98], [38, 68]]}
                attributionControl={false}
                scrollWheelZoom={false}>
                <ScaleControl position="bottomleft" />
                <AttributionControl position="bottomright" prefix={false} />

                <LayersControl position="topright" collapsed={setLayerControl()}>

                    {layers.map((layer, index) => {
                        return (
                            <LayersControl.BaseLayer
                                key={index}
                                checked={index === 0 ? true : false}
                                name={layer.name}
                            >

                                <ImageOverlay
                                    url={layer.url}
                                    fitBounds={true}
                                    bounds={layer.bound}
                                    opacity={1}
                                />

                            </LayersControl.BaseLayer>
                        )
                    })}
                    <BaseMap />

                </LayersControl>






            </MapContainer>
            <div className="legend-panel">
                <div className="legend">
                    <div className="item-heading">
                        <h2>Standardized Soil Moisture Index</h2>
                    </div>
                    <Legend4 />

                </div>

            </div>
        </div>

    )
}

export default StandardizedSoilMoistureIndex