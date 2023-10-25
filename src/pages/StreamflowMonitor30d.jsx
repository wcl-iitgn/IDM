import React from 'react'
import { Helmet } from 'react-helmet';
import { MapContainer, ScaleControl, LayersControl, ImageOverlay, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import BaseMap2 from '../components/BaseMap2';
import Legend3 from '../components/Legend3';
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

const layers = [
    {
        name: "Observed (VIC Simulated)",
        attribution: 'Observed on map released day',
        url: 'https://docs.google.com/uc?id=1AE1YUixowYOOROzVf6m1MsICf6u-vFaU',
        bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    },
    {
        name: "7 Days lead forecast",
        attribution: 'Lead forecast till 7 days after map released',
        url: 'https://docs.google.com/uc?id=15ntTx1hZNSzs7RvJd73LDmdfhWSwaVRe',
        bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    },
    {
        name: "15 Days lead forecast",
        attribution: 'Lead forecast till 15 days after map released',
        url: 'https://docs.google.com/uc?id=1eVeM4NfSzjJC72rsbeNjQLZQEJ9qcuKJ',
        bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    }
]

const StreamflowMonitor30d = () => {
    return (
        <div className='page_container'>
            <Helmet>
                <title>Streamflow Monitor | India Drought Monitor</title>
            </Helmet>
            <div className="map-heading">

                <h1>Streamflow Monitor</h1>
                <h4> VIC Model Simulated River Discharge: <span className="map-span">30 Days Mean Streamflow Percentile</span>
                </h4>

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
                                key={index}
                                checked={index === 0 ? true : false}
                                name={layer.name}
                            >

                                <ImageOverlay
                                    url={layer.url}
                                    fitBounds={true}
                                    bounds={layer.bound}
                                    opacity={1}
                                    attribution={layer.attribution}

                                />

                            </LayersControl.BaseLayer>
                        )
                    })}
                    <BaseMap2 />

                </LayersControl>


            </MapContainer>
            <Legend3 />


        </div>

    )
}

export default StreamflowMonitor30d