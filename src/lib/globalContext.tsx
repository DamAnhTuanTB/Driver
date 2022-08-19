import { createContext, useContext } from "react";

export const StoreContext = createContext(null);

//global store
export type GlobalContent = {
    copy: string
    setCopy: (c: string) => void
}

export const MyGlobalContext = createContext<GlobalContent>(
    {
        copy: '', // set a default value
        setCopy: () => { },
    })
export const useGlobalContext = () => useContext(MyGlobalContext)