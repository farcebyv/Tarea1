// Variables controladoras 
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se muestra la escena 3D 
container = document.querySelector('#container_principal');

// Carga la foto 
panorama = new PANOLENS.ImagePanorama('imagen/Paris.jpg');

// El valor 50 es el radio del infospot
// Crea y agrega el primer infospot
var infospot1 = new PANOLENS.Infospot(50, 'imagen/torre.png');
infospot1.position.set(355 ,3 , -500);
infospot1.addHoverText('Durante la Primera Guerra Mundial, la Torre Eiffel fue crucial para interceptar señales de radio alemanas, ayudando a los aliados a frustrar el avance enemigo.', -60);
infospot1.element.innerHTML = `
    <div style="background-color: rgba(9, 9, 9, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">
        Durante la Primera Guerra Mundial, la Torre Eiffel fue crucial para interceptar señales de radio alemanas, ayudando a los aliados a frustrar el avance enemigo.
    </div>
`;
panorama.add(infospot1);

// Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(70,'imagen/sagrado_corazon.png');
infospot2.position.set(500 ,-159 , 493);
infospot2.addHoverText('Iglesia del Sagrado Corazón: El peso total de la basílica es de aproximadamente 85 toneladas. Además, su campana principal, llamada "La Savoyarde", es una de las más grandes del mundo y pesa 19 toneladas.', -60);
infospot2.element.innerHTML = `
    <div style="background-color: rgba(9, 9, 9, 0.88); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        Iglesia del Sagrado Corazón: El peso total de la basílica es de aproximadamente 85 toneladas. Además, su campana principal, llamada "La Savoyarde", es una de las más grandes del mundo y pesa 19 toneladas.
    </div>
`;
panorama.add(infospot2);

// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, 'imagen/arco.png');
infospot3.position.set(-407 ,26 , -500);
infospot3.addHoverText('Video sobre el arco del triunfo.', -60);
infospot3.element.innerHTML = `
    <div>
        <iframe width="720" height="480" src="https://www.youtube.com/embed/wL_h5avd8Wo?si=BC5SA5bmCGwBVOEb"></iframe>        
    </div>
`;
panorama.add(infospot3);

// Crea y agrega el sexto infospot
var infospot4 = new PANOLENS.Infospot(50,'imagen/louvre.png');

// Establecen las coordenadas x, y, z (posición tridimensional del infospot dentro de la panorámica)
// Por ejemplo, x = 265, y = 50, z = 940
infospot4.position.set(121 ,-145 , 499);

// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot4.addHoverText('Un audio MP3 multimedia...', -60);

// Insertar un reproductor de audio en el infospot
infospot4.element.innerHTML = `
    <div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <audio controls>
            <source src="audios/audio_Museo.mp3" type="audio/mpeg">
        </audio>
    </div>
`;

panorama.add(infospot4);

// Crea y agrega el sexto infospot
var infospot5 = new PANOLENS.Infospot(70,'imagen/notre_dame.png');

infospot5.position.set(-480, -134, 500);

// Agregar texto al hover y poner una posición diferente al texto
infospot5.addHoverText('Entrar al PDF.', 100);

// Crear el contenido del infospot
infospot5.element.innerHTML = `
    <div style="background-color: rgba(7, 7, 7, 0.8); color:#fff; border-radius: 5px; 
                padding: 10px; font-size: 14px; width: 200px;">
        Entrar al PDF. Para saber sobre la La Iglesia de Notre Dame y varios datos importantes.
    </div>
`;

// Agregar un evento de clic para abrir el PDF
infospot5.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("pdf/La Iglesia de Notre Dame.pdf", "_blank");
});

panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(50,'imagen/opera.png');
infospot6.position.set(500 ,20 , -97);
infospot6.addHoverText('Video sobre el Opera Garnier.', -60);
infospot6.element.innerHTML = `
    <div>
        <iframe width="720" height="480" src="https://www.youtube.com/embed/Y4O20QkfzvU?si=xOX1TztCboreRa9C"></iframe>        
    </div>
`;
panorama.add(infospot6);

// Crea y agrega el sexto infospot
var infospot7 = new PANOLENS.Infospot(50,'imagen/castillo_versalles.png');

// Establecen las coordenadas x, y, z (posición tridimensional del infospot dentro de la panorámica)
// Por ejemplo, x = 265, y = 50, z = 940
infospot7.position.set(800, 100, 1200);

// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot7.addHoverText('Un audio MP3 multimedia...', -60);

// Insertar un reproductor de audio en el infospot
infospot7.element.innerHTML = `
    <div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <audio controls>
            <source src="audios/Audio_castillo.mp3" type="audio/mpeg">
        </audio>
    </div>
`;

panorama.add(infospot7);


var infospot8 = new PANOLENS.Infospot(50,'imagen/cementerio.png');
infospot8.position.set(-200 ,12 , -500);
infospot8.addHoverText('Video sobre el Cementerio de Pere Lachaise', -60);
infospot8.element.innerHTML = `
    <div>
        <iframe width="720" height="480" src="https://www.youtube.com/embed/fb2GPO9sF6A?si=Xj5_zme26i24JFov"></iframe>        
    </div>
`;
panorama.add(infospot8);

var infospot9 = new PANOLENS.Infospot(50,'imagen/iglesia.png');
infospot9.position.set(-501 ,8 , -241);
infospot9.addHoverText('Santa Capilla (Sainte-Chapelle) Durante la Revolución Francesa, la capilla fue utilizada como almacén para harina, una función que contrasta drásticamente con su diseño sagrado.', -60);
infospot9.element.innerHTML = `
    <div style="background-color: rgba(14, 14, 13, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">
        Santa Capilla (Sainte-Chapelle)
        Durante la Revolución Francesa, la capilla fue utilizada como almacén para harina, una función que contrasta drásticamente con su diseño sagrado.

    </div>
`;
panorama.add(infospot9);


var infospot10 = new PANOLENS.Infospot(50,'imagen/Palacio.png');
infospot10.position.set(900, 100, 100);
infospot10.addHoverText('Palacio de la Ciudad (Palais de la Cité) En la Conciergerie, María Antonieta pasó sus últimos días antes de ser ejecutada, pero pocos saben que su celda fue transformada en una capilla con decoraciones en su memoria.', -60);
infospot10.element.innerHTML = `
    <div style="background-color: rgba(8, 8, 8, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">
        Palacio de la Ciudad (Palais de la Cité)
        En la Conciergerie, María Antonieta pasó sus últimos días antes de ser ejecutada, pero pocos saben que su celda fue transformada en una capilla con decoraciones en su memoria.

    </div>
`;
panorama.add(infospot10);

// Configuración del visor 
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);
