import { ErrorMessage, useField } from "formik"

interface Props { // Estas props son proporcionadas por el componente padre
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // Comodin para añadir cualquier propiedad que no esté definida
}


export const MyTextInput = ({ label, ...props }:Props) => {

    const [field, meta] = useField(props); // Nos permite obtener el field (valor del campo, onchange, onBlur) y la metadata del mismo (error, touched, etc) apartir de las props

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label> 
        <input className="text-input" { ...field } { ...props }/>
        <ErrorMessage name={ props.name } component="span" className="error" />
        {/* { 
           meta.touched && meta.error && (
            <span className="error">{ meta.error }</span>
           )
        } */}
    </>
  )
}
