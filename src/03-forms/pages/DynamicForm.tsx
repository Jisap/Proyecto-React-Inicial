import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

// formJson
// {
//     "type": "input",
//     "name": "firstName",
//     "placeholder": "First Name",
//     "label": "First Name",
//     "value": "",
//     "options":[{id:number, label:string}]
//     "validations":[{type:string}]
// }

// El tipado de initialValues es un objeto compuesto de un array de claves(strings) y sus valores(any)
const initialValues:{ [key: string]:any} = {}; // En principio esta vacio. Hay que rellenarlo con los valores de formJson.

const requiredField:{ [key:string]:any} ={};   // Inicializamos un objeto com los campos que requieren validación

for ( const input of formJson ){               // Recorremos el formJson y obtenemos los objetos input con su propiedades
    initialValues[input.name] = input.value;   // Asignamos a la clave name del initialValues el value que tenga el formJson

    if( !input.validations ) continue          // Si no tiene validaciones continuamos con el siguiente input

    let schema = Yup.string();                 // Si si hay validaciones inicializamos un schema de tipo string

    for ( const rule of input.validations ){                        // Recorremos las validaciones del input y obtenemos el tipo de validación (rule)
        
        if( rule.type === 'required' ){                             // Si la validación es required 
            schema = schema.required('Este campo es requerido')     // Añadimos la validación al schema
        }

        if (rule.type === 'minLength') {                            // Si la validación es minLength
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`);
        }
        
        if (rule.type === 'email') {                                // Si la validación es email
            schema = schema.email(`Revise el formato del email`);
        }

    }

    requiredField[input.name] = schema;                             // Añadimos el schema al objeto requiredField correspondiente al input que se esta recorriendo
}

const validationSchema = Yup.object({ ...requiredField });          // Creamos un objeto con todos los campos que requieren validación

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1> 

        <Formik 
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values ) => { console.log(values)} }
        >
            { 
                (formik) => (
                    <Form noValidate>
                        {formJson.map( ({ type, name, placeholder, label, options }) => { 

                            if( type === 'input' || type === 'password' || type === 'email' ){
                                return <MyTextInput 
                                            key={ name } 
                                            label={ label } 
                                            name={ name } 
                                            placeholder={ placeholder } 
                                            type={ type as any } />
                            }else if ( type === 'select' ){
                                return <MySelect 
                                            key={ name } 
                                            label={ label }
                                            name={ name }
                                            >
                                                <option value="">Select</option>
                                                { 
                                                    options?.map( (opt) => (
                                                        <option key={ opt.id } value={ opt.label }>{ opt.label }</option>  
                                                    ))
                                                }
                                        </MySelect>
                            }

                            throw new Error(` ${ type } no es soportado`);

                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )
             }
        </Formik>  
    </div>  
  )
}
