import './AppMain.css';
import { languages } from '../assets/languages';
import Button from './Button.jsx';
import TestoAlClick from './TestoAlClick.jsx'
import { useState } from 'react';

export default function AppMain() {

    const [testo, setTesto] = useState(null);

    return (
        <>
            <main>


                {/* lista */}
                <ul className='flex between'>
                    {languages.map((language) => (
                        <li key={language.id}  >
                            <Button
                                text={`${language.title}`}
                                onClick={() => setTesto(language)}
                                active={testo && testo.id === language.id}

                            />
                        </li>
                    ))}
                </ul>
                {/* fine lista */}


                <TestoAlClick 
                    language={testo}
                />

            </main>
        </>
    );
}