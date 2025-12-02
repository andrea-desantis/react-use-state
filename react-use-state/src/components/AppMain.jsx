import './AppMain.css';
import { languages } from '../assets/languages';
export default function AppMain(){
    return(
        <>
            <main>

                <div className='flex between'>
                {languages.map((language, i) =>(
                    
                        <div key={i}>
                            <span className='btn'>{language.title}</span>
                        </div>
                    
                ))} 
                </div>
            </main>
        </>
    );
}