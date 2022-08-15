import { Form, Formik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
 

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik 
        initialValues={{
          name:'',
          email:'',
          password1:'',
          password2:'',
        }}  
        onSubmit={ ( values ) => {
          console.log( values )
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .required('First name is required')
              .min(2, 'First name must be at least 2 characters')
              .max(15, 'First name must be 15 characters or less'),
            email: Yup.string()
              .required('Email is required')
              .email('Email must be a valid email address'),
            password1: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters'), 
            password2: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 8 characters')
              .oneOf([Yup.ref('password1'), null], 'Passwords must match'),
          })
      }
      >
        { 
          ({ handleReset }) => (
            <Form>
              <MyTextInput
                label='Name'
                name='name'
                placeholder="First Name"
              />
              <MyTextInput
                label='Email Address'
                name='email'
                placeholder="Email"
                type='email'
              />
              <MyTextInput
                label='Password'
                name='password1'
                placeholder="Password"
                type='password'
              />
              <MyTextInput
                label='Confirm Password'
                name='password2'
                placeholder="Confirm Password"
                type='password'
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={ handleReset }>Reset</button>
            </Form>
          )
        }
        
      </Formik>
        
    </div>
  )
}
