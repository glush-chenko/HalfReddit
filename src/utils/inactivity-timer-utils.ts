import {useEffect, useState} from 'react';
import { persistor } from '../app/store';

function useInactivityTimer(delay: number) {
    const [inactivityTimer, setInactivityTimer] = useState<number | null>(null);

    const resetInactivityTimer = () => {
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
        }
        const timer = setTimeout(function() {
            persistor.purge()
                .then(() => {
                    console.log('LocalStorage очищен после неактивности пользователя');
                })
                .catch((error) => {
                    console.error('Ошибка при очистке LocalStorage:', error);
                });
        }, delay);
        setInactivityTimer(timer);
    };

    const clearInactivityTimer = () => {
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
        }
    };

    useEffect(() => {
        function handleUserActivity() {
            resetInactivityTimer();
        }

        window.addEventListener('keydown', handleUserActivity);

        resetInactivityTimer();

        return () => {
            clearInactivityTimer();
            window.removeEventListener('keydown', handleUserActivity);
        };
    }, [delay, inactivityTimer, resetInactivityTimer, clearInactivityTimer, setInactivityTimer]);

    return {
        resetInactivityTimer,
        clearInactivityTimer
    };
}

export default useInactivityTimer;

