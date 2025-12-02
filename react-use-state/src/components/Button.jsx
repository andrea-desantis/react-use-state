
export default function Button({text, onClick, active}){

    return (

    <button 
        className={`btn ${active ? "active" : ""}`}
        onClick={onClick} 
    >{text}</button>
    
    
    );
}