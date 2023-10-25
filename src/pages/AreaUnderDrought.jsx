import React from 'react';
import { Helmet } from 'react-helmet';
import { MapContainer, ImageOverlay, ScaleControl, LayersControl, AttributionControl } from 'react-leaflet'
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

function setWindowWidth() {
    var viewportWidth = window.innerWidth;
    var windowWidth;
    if (viewportWidth <= [767]) {
        windowWidth = { width: '100vw', height: "65vh", backgroundColor: 'white', border: 'none', margin: 'auto' };
    } else {
        windowWidth = { width: '80vw', minHeight: "600px", height: "70vh", backgroundColor: 'white', border: '1px solid black', margin: 'auto' };
    }
    return windowWidth;
}



const AreaUnderDrought = () => {
    const layers = [
        {
            name: "Area Under Drought",
            // attribution: 'Map released: ' + addDays(0),
            url: 'https://docs.google.com/uc?id=1tS-bIK6DD_5hB800ncymIGNxXhoPtaM4',
            bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
        },
    ]
    return (
        <div className='page_container'>
            <Helmet>
                <title>Area Under Drought | India Drought Monitor</title>
                <meta name="description" content="Area Under Drought map shows parts of the India that are currently in drought. The map uses five classifications: abnormally dry (D0), showing areas that may be going into or are coming out of drought, and four levels of drought: moderate (D1), severe (D2), extreme (D3) and exceptional (D4)." />
            </Helmet>

            <div className="map-heading">
                <h1>Observed Drought Condition</h1>
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
                minZoom={4}
                maxBounds={[[8, 98], [38, 68]]}
                attributionControl={false}
                scrollWheelZoom={false}>
                <ScaleControl position="bottomleft" />

                <AttributionControl position="bottomright" prefix={false} />

                <LayersControl position="topright" collapsed={setLayerControl()}>
                    {layers.map((layer, index) => {
                        return (
                            // <LayersControl.BaseLayer
                            //     key={index}
                            //     checked={index === 0 ? true : false}
                            //     name={layer.name}
                            // >

                            <ImageOverlay
                                url={layer.url}
                                fitBounds={true}
                                bounds={layer.bound}
                                opacity={1}
                                attribution={layer.attribution}
                                key={layer.name}
                            />

                            // </LayersControl.BaseLayer>
                        )
                    })}


                    <BaseMap />

                </LayersControl>


            </MapContainer>
            <Legend />

            <div className="sitevisitor-item" style={{ display: "none" }}>
                <a
                    className="sitevisitor-map"
                    data-theme="dark"
                    data-tweet-limit="5"
                    data-chrome="noheader nofooter noborders"
                    href="https://www.revolvermaps.com/livestats/538hvsm4w0v/"
                    target="_blank" rel="noreferrer"
                >
                    Website Visitors: Live Statistics
                </a>
            </div>




        </div>

    )
}

export default AreaUnderDrought
