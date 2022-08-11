import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'


export const FormikComponents = () => {  

    


  return (
    <div>
        <h1>Formik Components</h1>

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
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="span" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" component="span" />

                    <label htmlFor="emailAddress">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="span" />

                    <label htmlFor="jobType">Job Type</label>
                    <Field name="jobType" as="select" >
                        <option value=''>Pick Something1</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>It-Senior</option>
                        <option value='it-jr'>It-Jr</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span" />

                    <label>
                        <Field name="terms" type="checkbox" />
                        Terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="span" />

                    <button type="submit">Submit</button>
                </Form>
            )
        }    


          </Formik>
    </div>
  )
}
