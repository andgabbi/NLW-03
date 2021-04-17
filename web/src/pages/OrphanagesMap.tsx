import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanage-map.css'

import mapMarkerImg from '../images/map-marker.svg'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2> Escolha o orfanato no mapa </h2>
                    <p> Muitas crianças estão esperando sua visita </p>
                </header> 

                <footer>
                    <strong> Presidente Prudente </strong>
                    <span> São Paulo </span>
                </footer>
            </aside>

            <MapContainer 
                center = { [-22.1205895,-51.3936946] }
                zoom = {14.5}
                style = { { width: '100%', height: '100%' } }
            >
                <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/> 
            </Link> 
        </div>
    );
}

export default OrphanagesMap;