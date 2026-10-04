import React, {useState} from 'react';
import type { SubmitEvent} from 'react';

//on type les props avec TweetFormProps
export type TweetFormProps = {
    //propriété onSubmit
    onSubmit: (content: string) => void;
}

//définition de la limite à 280 caractères
const CONTENT_MAX_LENGTH = 280;


export const TweetForm = ({ onSubmit }: TweetFormProps): React.ReactNode => {

    //création d'un état local content de type string
    const [content, setContent] = useState<string>("");

    const gestionSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
        event?.preventDefault(); //gestionnaire de soumission qui appelle preventDefault()
        
        const contenuNettoyage = content.trim();
        onSubmit(contenuNettoyage); // appel de onSubmit avec le contenu nettoyé
        setContent(""); //réinitialisation du champ   
    }

    //cette constante va venir calculer le nombre de caractères restants, on soustrayant la longeur du contenu qu'on écrit au nombre de caractère maximum (qui est de 280)
    const caracteresRestants = CONTENT_MAX_LENGTH - content.length;

    //invalide si le contenu est vide ou si il dépasse la limite (280 caractères)
    const estInvalide = content.trim().length === 0 || content.length > CONTENT_MAX_LENGTH;


    return (
        <form onSubmit={gestionSubmit}>

            {/* création d'un textarea contrôlé avec value et onChange */}
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Quoi de neuf ?"
            />

            {/* on affiche le nombre de caractères restants */}
            <p>Caractères restants : {caracteresRestants}</p>

            {/* Bouton de soumission qui va être désactive grâce à l'appel de "estInvalide" 
            qui invalide le contenu écrit si jamais il est vide ou si jamais il dépasse la limite de 280 caratères */}
            <button type="submit" disabled={estInvalide}>
                Publier
            </button>
                
        </form>
    )

}