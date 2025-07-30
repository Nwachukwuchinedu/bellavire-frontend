import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  address?: string;
  coordinates?: [number, number];
  className?: string;
}

const Map: React.FC<MapProps> = ({
  address = "23 Baker Street, Marylebone, London W1U 6FY",
  coordinates = [-0.1419, 51.5074], // Default to London coordinates
  className = "w-full h-64",
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // TODO: Replace 'your_mapbox_public_token_here' with your actual Mapbox public token

    mapboxgl.accessToken = "your_mapbox_public_token_here";

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: coordinates,
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add a marker for the property location
    new mapboxgl.Marker({
      color: "#3B82F6", // Primary blue color
    })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2"><strong>Property Location</strong><br/>${address}</div>`
        )
      )
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [coordinates, address]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapContainer}
        className="absolute inset-0 rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;
