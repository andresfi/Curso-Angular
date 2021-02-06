/*
    ===== Código de TypeScript =====
*/

    interface Reproductor{
        volumen: number;
        segundo: number;
        cancion: string;
        detalles: Detalles;
    }

    interface Detalles{
        autor: string;
        anio: number;
    }

    const reproductor: Reproductor = {
        volumen: 90,
        segundo: 36,
        cancion: 'Mess',
        detalles: {
            autor: 'Ed Sheran',
            anio:2015
        }
    }

    const {volumen,segundo,cancion,detalles} = reproductor;
    const {autor,anio} = detalles;

    console.log('El volumen actual de: ', volumen);
    console.log('El segundo actual es: ', segundo);
    console.log('La cancion actual es: ', cancion);
    console.log('El autor es: ', autor);
    console.log('El año es: ', anio);