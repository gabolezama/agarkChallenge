import { stringify } from 'querystring';
import React, { createContext, ReactNode, useState } from 'react'
import { StringDecoder } from 'string_decoder';

export const AppContext = createContext({});

export interface Idata {
    id: string;
    first_name: string;
    second_name: string;
    email: string;
    avatar: string;
}

interface Props{
    children: ReactNode
}

export function ContextComponent({children}: Props) {
    const [data, setData] = useState<Idata[]>([]);
    const [itemToEdit, setItemToEdit] = useState<Idata>({
        id: 'null',
        first_name: 'null',
        second_name: 'null',
        email: 'null',
        avatar: 'null',
    });

    return (
        <AppContext.Provider
            value={{
                data,
                itemToEdit,
                setData,
                setItemToEdit
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
