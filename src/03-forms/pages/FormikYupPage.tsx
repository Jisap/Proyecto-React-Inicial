import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'


export const FormikYupPage = () => {  

    const { handleSubmit, 
            errors, 
            touched, 
            getFieldProps,
                            } = useFormik({
                                        initialValues: {
                                            firstName: '',
                                            lastName: '',
                                            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
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
            }),
        })


  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form 
            noValidate
            onSubmit={ handleSubmit }
        >
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                { ...getFieldProps('firstName') } // Este método establece el value, el name, onBlur, onChange, etc.
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                { ...getFieldProps('lastName') }
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="emailAddress">Email Address</label>
            <input 
                type="email" 
                  {...getFieldProps('email')}  
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
