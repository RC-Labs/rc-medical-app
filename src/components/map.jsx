import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

// export class Map extends Component {
//   render() {
//     return (
//       <section id="address" class="map-section">
//         <div class="map" id="map">
//         </div>
//         <div class="info">
//         </div>
//       </section>
//     )
//   }
// }


const biuro = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', geometry: { type: 'Point', coordinates: [19.9127, 50.0887] } }
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': '#007cbf'
  }
};

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.1020,
    longitude: 19.9130,
    zoom: 11,
    mapboxApiAccessToken: 'pk.eyJ1IjoibWljaGFsZHppZWNoY2lhcnoiLCJhIjoiY2toYzIzdmNtMDBwMzJybnVzNnp0ajdrcCJ9.cZyu39ZuA2HWEkn2Z4fMmA',
  });

  return (
    <section className="map-section">
      <div className="map">

        {/* <ReactMapGL {...viewport} onViewportChange={setViewport}>

          <Source id="my-data" type="geojson" data={biuro}>
            <Layer {...layerStyle} />
          </Source>

        </ReactMapGL> */}
      </div>
    </section>
  );
}

export { Map };