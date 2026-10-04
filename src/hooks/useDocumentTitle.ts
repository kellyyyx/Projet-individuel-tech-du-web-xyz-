import { useEffect } from 'react';

//useDocumentTitle reçoit un titre de type string
export const useDocumentTitle = (title: string): void => {
    //utilisation de useEffect pour affecter à document.title une valeur de la forme Accueil | XYZ
    useEffect(() => {
        //title afin que l'effet se rejoue lorsque le titre change
        document.title = `${title} | XYZ`;

    }, [title]);
};