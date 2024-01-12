import React from 'react'
import { Helmet } from 'react-helmet';
import { MapContainer,  ScaleControl, LayersControl, ImageOverlay, AttributionControl } from 'react-leaflet'
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
        url: 'https://lh3.googleusercontent.com/d/1DikCFkTrAMTZXMmCey0HqRH-mJYKNEy0',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "2 Month",
        url: 'https://lh3.googleusercontent.com/d/1khE70lj5Qb26P4thPwDOXjKksAnf1Adh',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "3 Month",
        url: 'https://lh3.googleusercontent.com/d/1Zv_6CdzhF_Of95XWBbPqmRs1BdBTJYpW',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "4 Month",
        url: 'https://lh3.googleusercontent.com/d/14KQmp9ghJKsiusalHS0AphiKz-58FYlT',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "6 Month",
        url: 'https://lh3.googleusercontent.com/d/1VfJjlxhuf6SqUggesRRZz4Oj06dzdYe-',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "9 Month",
        url: 'https://lh3.googleusercontent.com/d/1xWXBFGB_f28CBS2NqAcDvCYo3IrNQPP1',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "12 Month",
        url: 'https://lh3.googleusercontent.com/d/1d10KCs6kuw0lmSsAa3X06AxesCaHMoWg',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
    {
        name: "24 Month",
        url: 'https://lh3.googleusercontent.com/d/1KJ1GPpfkYkRsQ0VgrlWlhRai5Sz81mrF',
        bound: [[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]
    },
]

const StandardizedRunoffIndex = () => {
    return (
        <div className='page_container'>
            <Helmet>
                <title>Standardized Runoff Index | India Drought Monitor</title>
            </Helmet>
            <div className="map-heading">
                <h1>Standardized Runoff Index (SRI)</h1>
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
                        <h2>Standardized Runoff Index</h2>
                    </div>
                    <Legend4 />

                </div>

            </div>

        </div>

    )
}

export default StandardizedRunoffIndex