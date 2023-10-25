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
        windowWidth = { width: '100vw', height: "65vh", backgroundColor: 'white', border: 'none', margin: 'auto' };
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
        name: "1 Month",
        url: 'https://docs.google.com/uc?id=1Pq38feFRbFrvcvNexY8Wz88bygdR4cIo',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "2 Month",
        url: 'https://docs.google.com/uc?id=1tX8ebuqyQHNvMpIqsscp_GPT6hp83IkC',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "3 Month",
        url: 'https://docs.google.com/uc?id=1yAzO3xnTdhXbBPFzVVh7S_82oPOOBJc1',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "4 Month",
        url: 'https://docs.google.com/uc?id=1amZzVNUE0SdQjibsYCmG0IObACBwW7uo',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "6 Month",
        url: 'https://docs.google.com/uc?id=1sqZVdGpSZOVYt8qtht0Msh5ukyZd9QFV',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "9 Month",
        url: 'https://docs.google.com/uc?id=1d0_wSNE9xarx8ZirIFbvX4SPpiZb-EFJ',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "12 Month",
        url: 'https://docs.google.com/uc?id=1M8wLcSNLRMHW_ZrdJvH7op8t6jEnV-f_',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "24 Month",
        url: 'https://docs.google.com/uc?id=1E4SInqssjXsShx3VKAh-uNPGRcqNwjhT',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
]

const StandardizedPrecipitationIndex = () => {
    return (
        <div className='page_container'>
            <Helmet>
                <title>Standardized Precipitation Index | India Drought Monitor</title>
            </Helmet>
            <div className="map-heading">
                <h1>Standardized Precipitation Index (SPI)</h1>
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
                        <h2>Standardized Precipitation Index</h2>
                    </div>
                    <Legend4 />

                </div>

            </div>
        </div>

    )
}

export default StandardizedPrecipitationIndex