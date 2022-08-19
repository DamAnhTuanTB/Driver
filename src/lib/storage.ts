import { LOCAL_STORAGE_KEYS } from 'constaints.ts/constants';

const PREFIX = 'driver-road-tax-';

export function save(key: string, value: any, prefix = PREFIX): string | null {
    try {
        window.localStorage.setItem(`${prefix}${key}`, value);
        return value;
    } catch (e) {
        window.console.error('Error in storage.save', e);
        return null;
    }
}

export function unSave(key: string): void {
    localStorage.removeItem(key);
}

export function load(key: string, parse = true, prefix = PREFIX): any {
    try {
        const value = window.localStorage.getItem(`${prefix}${key}`);
        return value && parse ? JSON.parse(value) : value;
    } catch (e) {
        window.console.error('Error in storage.load', e);
        return null;
    }
}

export function clear(key: string | string[], prefix = PREFIX): void {
    try {
        if (Array.isArray(key)) {
            key.forEach((k) => {
                window.localStorage.removeItem(`${prefix}${k}`);
            });
        } else {
            window.localStorage.removeItem(`${prefix}${key}`);
        }
        return;
    } catch (e) {
        window.console.error('Error in storage.clear', e);
    }
}

export const logout = () => {
    return clear(
        [LOCAL_STORAGE_KEYS.ACCESS_TOKEN, LOCAL_STORAGE_KEYS.REFRESH_TOKEN, LOCAL_STORAGE_KEYS.EXPIRED_TIME, LOCAL_STORAGE_KEYS.TOKEN_TYPE],
        ''
    );
};
