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
      windowWidth = { width: '80vw', height: "70vh", backgroundColor: 'white', border: '1px solid black', margin:'auto' };
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


const StreamflowMonitor7d = () => {
  const layers = [
    {
      name: "Observed (VIC Simulated)",
      attribution: 'Observed on map released day',
      url: 'https://docs.google.com/uc?id=1jsiawjirhbX5KxSA7cUqtm89Ll1VeloQ',
      bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    },
    {
      name: "7 Days lead forecast",
      attribution: 'Lead forecast till 7 days after map released',
      url: 'https://docs.google.com/uc?id=11TQz38spDiZR2TsHISXDx9dFLErYLaZb',
      bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    },
    {
      name: "15 Days lead forecast",
      attribution: 'Lead forecast till 15 days after map released',
      url: 'https://docs.google.com/uc?id=1w58xf1Si2Tz49OOS5vQv0H4pDbX36_ZE',
      bound: [[6.6909658337074802, 97.6641444261154561], [37.2184103603517471, 67.9942123861746808]]
    }
  ]
  return (
    <>
      <Helmet>
        <title>Streamflow Monitor | India Drought Monitor</title>
      </Helmet>
      <div className="map-heading">

        <h1>Streamflow Monitor</h1>
        <h4> VIC Model Simulated River Discharge: <span className="map-span">7 Days Mean Streamflow Percentile</span>
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
    </>

  )
}

export default StreamflowMonitor7d