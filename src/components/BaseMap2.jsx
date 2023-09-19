import React from 'react'
import {GeoJSON, LayersControl, FeatureGroup } from 'react-leaflet'
import { indiastates } from '../data/indiaStates';
import { indiaBasin } from '../data/indiaBasin';
import { indiaDistrict } from '../data/indiaDistrict';
import { indiaRivers } from '../data/indiaRivers';


function getVoivodeshipName(feature, layer) {
  if (feature.properties && feature.properties.District) {
    layer.bindPopup(feature.properties.District + ", " + feature.properties.STATE);
  }
}

function onEachFeature(feature, layer) {
  layer.on('mouseover', function (e) {

    getVoivodeshipName(feature, layer);

    this.openPopup();

    // style
    this.setStyle({
      fillColor: '#eb4034',
      weight: 1,
      color: '#eb4034',
      fillOpacity: 0.7,
    });
  });
  layer.on('mouseout', function () {
    this.closePopup();
    // style
    this.setStyle({
      fillColor: "black",
      fillOpacity: 0.00001,
      weight: 0.2,
      color: 'black'

    });
  });
}



const BaseMap2 = () => {
  return (
    <>
        <LayersControl.Overlay checked name="States Boundary">
          <FeatureGroup>
            <GeoJSON data={indiastates.features} style={{
              fillColor: 'none',
              weight: 2,
              color: 'black',
              interactive: false
            }} />
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="District Boundary">
          <FeatureGroup>
            <GeoJSON data={indiaDistrict.features} style={{
              weight: 0.2,
              fillColor: "black",
              fillOpacity: 0.00001,
              // dashArray: 3,
              color: 'black'
            }} onEachFeature={onEachFeature} />
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="River Basin Boundary">
          <FeatureGroup>
            <GeoJSON data={indiaBasin.features} style={{
              fillColor: 'none',
              weight: 2,
              color: 'red',
              interactive: false
            }} />
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Rivers">
          <FeatureGroup>
            <GeoJSON data={indiaRivers.features} style={{
              fillColor: 'none',
              weight: 2,
              color: 'blue',
              interactive: false
            }} />
          </FeatureGroup>
        </LayersControl.Overlay>


    </>
  )
}

export default BaseMap2