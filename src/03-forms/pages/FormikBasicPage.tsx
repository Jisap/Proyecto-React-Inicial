import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css'

interface FormValues { 
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }:FormValues ) => {

        const errors: FormikErrors<FormValues> = {};    // Inicializamos el objeto con los posibles errores

        if (!firstName) {                                               // Si no hay nombre, entonces...
            errors.firstName = 'Required';                              // ...se le asigna un error
        }else if( firstName.length >= 15 ){                             // Si el nombre es mayor o igual a 15 caracteres, entonces...
            errors.firstName = 'Must be 15 characters or less';         // ...se le asigna un error
        }

        if (!lastName) {                                                // Mismo proceso que el nombre                           
            errors.lastName = 'Required';
        } else if (lastName.length >= 10) {
            errors.firstName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email )) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate    // Cuando se cumplen todas la reglas de validación, se ejecuta el onSubmit
    })




  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form 
            noValidate
            onSubmit={ handleSubmit }
        >
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName"                // Nombre del campo
                onBlur={ handleBlur }           // Cuando se pierde el focose evalua el campo su validez
                onChange={ handleChange }       // Cuando cambia su valor establece el estado de ese campo
                value={ values.firstName }      // Estado de ese campo    
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.lastName }    
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="emailAddress">Email Address</label>
            <input 
                type="email" 
                name="email"
                onBlur={ handleBlur } 
                onChange={ handleChange }
                value={ values.email }    
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
