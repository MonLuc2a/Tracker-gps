mapboxgl.accessToken = 'sk.eyJ1IjoiY29kZS1leCIsImEiOiJjbGZmdnY3ODAzM2JhNDRwY3Z0MzJiYnFxIn0.Fbky08v6SEICUzY30rsJyg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.3488, 48.8534], // Coordonnées de Paris
    zoom: 12
});

// Coordonnées GPS des points de départ et d'arrivée
const startPoint = [2.294694, 48.858093]; // Tour Eiffel
const endPoint = [2.349902, 48.853260]; // Cathédrale Notre-Dame

// Ajouter les points de départ et d'arrivée à la carte
map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    startPoint,
                    endPoint
                ]
            }
        }
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
        }
    });
});

