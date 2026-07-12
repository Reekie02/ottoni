import React, { createContext, useContext, useState } from 'react';
import translations from './translations';

const LangContext = createContext(null);

export function LangProvider({ children }) {
    const [lang, setLang] = useState('it');
    return (
        <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
