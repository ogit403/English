import { useState } from "react";
import data from '../../../data.json';

const firstData: Data[] = data.sort( () => Math.random() - 0.5);

const useAction = () => {
    const [items, setItems] = useState<Data[]>(firstData);
    const [index, setIndex] = useState(0);
    const [main, setMain] = useState<HomePage>({
        error: 2,
        loading: false,
        show: false,
        value: '',
    })

    const handleReset = () => {
        setItems([...data.sort( () => Math.random() - 0.5)]);
        setIndex(0);
    }

    const changeValue = (value: Partial<HomePage> ) => {
        setMain((prev) => ({ ...prev, ...value }))
    }

    return {
        data,
        main,
        index,
        items,
        setIndex,
        handleReset,
        changeValue,
    }
};

export default useAction;
