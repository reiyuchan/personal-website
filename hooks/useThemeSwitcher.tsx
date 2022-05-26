import { useEffect } from 'react';
import { switcher } from '../utils/themeswitcher';

export const useThemeSwitcher = () => {
    useEffect(() => {
        switcher();        
    })
    return (
        <>
        </>
    )
};
