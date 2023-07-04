import { useState } from "react";
import data from '../../../data.json';


const useAction = () => {
    const [main, setMain] = useState<HomePage>({
        arr: [],
        done: false,
        error: 2,
        loading: false,
        random: Math.floor(Math.random() * data.length),
        value: '',
        show: false,
    })

    const nextNumber = (value?: Partial<HomePage>) => {
        setMain((prev) => ({
            ...prev,
            ...value,
            error: 2,
            loading: false,
            value: '',
            show: false,
        }))
    }

    const handleReset = () => {
        setMain({
            arr: [],
            done: false,
            error: 2,
            loading: false,
            random: Math.floor(Math.random() * data.length),
            value: '',
            show: false,
        })
    }

    const changeValue = (value: Partial<HomePage> ) => {
        setMain((prev) => ({ ...prev, ...value }))
    }

    return {
        data,
        main,
        nextNumber,
        handleReset,
        changeValue,
    }
};

export default useAction;
