import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks';

type themeContext = { 
    isDarkTheme: boolean; toggleTheme: () => void
};

export const ThemeContext = createContext<themeContext>({
    isDarkTheme: true,
    toggleTheme: (): void => {}
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean>('darkTheme', false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}