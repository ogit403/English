import { useState } from "react";

const useActionCreate = () => {
    const [show, setShow] = useState(false);

    const handleChangeShow = (value: boolean) => setShow(value);

    const initCreate = () => {
        const { control, register } = useForm();
        const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
            control, // control props comes from useForm (optional: if you are using FormContext)
            name: "create", // unique name for your Field Array
        });
        
    }

    return {
        show,
        handleChangeShow,
    }
};

export default useActionCreate;
