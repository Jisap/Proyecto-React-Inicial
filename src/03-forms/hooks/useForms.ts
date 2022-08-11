import { ChangeEvent, useState } from "react";

export const useForm = <T>( initState:T ) => {                      // <T> es el tipo (generico) del objeto que nosotros queremos crear

    const [formData, setFormData] = useState( initState );          // Ese tipo genérico define el initState del estado del formulario

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {    // onchange recibe el evento de los inputs y establece el valor del estado del formulario   
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData( { ...initState });
    } 
    
    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // Expresión regular para validar un email
        return re.test(email);
    }

    return { 
        ...formData , formData, onChange, resetForm, isValidEmail
    }
}