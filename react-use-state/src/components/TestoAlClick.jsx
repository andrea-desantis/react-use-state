
export default function TestoAlClick({ language }) {
    // se language non esiste
    if (!language) {
        return (

            <div className="flex column">
                <h3>nessun linguaggio selezionato</h3>
                
            </div>

        );
    } 
    return (
        <>
            <div className="flex column">
                <h3>{language.title}</h3>
                <p>{language.description}</p>
            </div>

        </>
    );

}