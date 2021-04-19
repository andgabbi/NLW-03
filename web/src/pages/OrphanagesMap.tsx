import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import '../styles/pages/orphanage-map.css'

import mapMarkerImg from '../images/map-marker.svg'
import mapIcon from '../utils/mapIcon'
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2> Escolha o orfanato no mapa </h2>
                    <p> Muitas crianças estão esperando sua visita </p>
                </header>

                <footer>
                    <strong> Presidente Prudente </strong>
                    <span> São Paulo </span>
                </footer>
            </aside>

            <MapContainer
                center={[-22.1205895, -51.3936946]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={mapIcon}
                            key={orphanage.id}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={22} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;