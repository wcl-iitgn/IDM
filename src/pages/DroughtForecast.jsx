import React from 'react';
import { Helmet } from 'react-helmet';
import { MapContainer, ScaleControl, LayersControl, ImageOverlay, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Legend from '../components/Legend';
import BaseMap from '../components/BaseMap';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
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
        mapLayersCollapse = false;
    }
    return mapLayersCollapse;
}

const DroughtForecast = () => {
    const layers = [
        {
            id: "1",
            name: "7 Days lead forecast",
            attribution: "Lead drought forecast till 7 days after map released",
            url: 'https://lh3.googleusercontent.com/d/1LpMMfjURyRscKyebYp4_3dgKO3MwPDe-',
            bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
        },
        {
            id: "2",
            name: "15 Days lead forecast",
            attribution: "Lead drought forecast till 15 days after map released",
            url: 'https://lh3.googleusercontent.com/d/1Fv6ZZvoa1kUerHm317d4d51QrQ8ORAaG',
            bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
        }
    ]
    return (
        <div className='page_container'>
            <Helmet>
                <title>Drought Forecast | India Drought Monitor</title>
            </Helmet>
            <div className="map-heading">
                <h1>Drought Forecast</h1>
            </div>
            <div className="date-heading">
                <p>Map released: </p> {<DateFunction days={0} />}
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
                                key={layer.id}
                                checked={index === 0 ? true : false}
                                name={layer.name}
                            >

                                <ImageOverlay
                                    url={layer.url}
                                    fitBounds={true}
                                    bounds={layer.bound}
                                    opacity={1}
                                    attribution={layer.attribution}
                                    key={layer.id}
                                    
                                />

                            </LayersControl.BaseLayer>
                        )
                    })} 

                    

                    <BaseMap />

                </LayersControl>

            </MapContainer>
            <Legend />


        </div>


    )
}

export default DroughtForecast