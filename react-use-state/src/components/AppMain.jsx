import './AppMain.css';
import { languages } from '../assets/languages';
import Button from './Button.jsx';
export default function AppMain() {

    function click(){


        return
    }

    return (
        <>
            <main>

                <div>
                    {/* lista */}
                    <ul className='flex between'>
                        {languages.map((language, i) => (
                            <li key={i}  >
                                <Button text={`${language.title}`}/>
                            </li>
                        ))}
                    </ul>
                    {/* fine lista */}
                </div>
            </main>
        </>
    );
}