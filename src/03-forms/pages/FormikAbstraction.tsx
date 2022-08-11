import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css'


export const FormikAbstraction = () => {  


  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  terms: false,
                  jobType:''
            }}
            onSubmit={(values) => { 
                console.log( values )
            }}
            validationSchema={ 
                Yup.object({
                    firstName: Yup.string()
                        .required('First name is required')
                        .min(3, 'First name must be at least 3 characters')
                        .max(15, 'First name must be 15 characters or less'),
                    lastName: Yup.string()
                        .required('Last name is required')
                        .min(3, 'Last name must be at least 3 characters')
                        .max(15, 'Last name must be 15 characters or less'),
                    email: Yup.string()
                        .required('Email is required')
                        .email('Email must be a valid email address'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar los términos y condiciones'),
                    jobType: Yup.string()
                        .required('Debe seleccionar una opción')
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                })
            }    
         >

        {
            (formik) => (

                <Form>
                    <MyTextInput 
                        label='First Name'
                        name='firstName' 
                        placeholder="First Name"    
                    />

                    <MyTextInput
                        label='Last Name'
                        name='lastName'
                        placeholder="Last Name"
                    />

                    <MyTextInput
                        label='Email Address'
                        name='email'
                        placeholder="Email"
                        type='email'
                    />

                    <MySelect label="Job Type" name="jobType" >
                        <option value=''>Pick Something1</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>It-Senior</option>
                        <option value='it-jr'>It-Jr</option>
                    </MySelect>
                    

                    <MyCheckBox label="Terms & Conditions" name="terms" />

                    <button type="submit">Submit</button>
                </Form>
            )
        }    


          </Formik>
    </div>
  )
}
