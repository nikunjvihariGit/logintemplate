import { useState } from 'react';
import FormLabel from '../components/FormLabel'
import InputField from '../components/InputField'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [ loginMessage, setLoginMessage ] = useState('');

  const navigate = useNavigate();

  const formElements = [
    {
      label: {
        htmlFor: 'username',
        displayValue: 'Username'
      },
      field: {
        type: 'text',
        name: 'username',
        id: 'username',
        placeholder: 'Enter username'
      }
    },
    {
      label: {
        htmlFor: 'password',
        displayValue: 'Password'
      },
      field: {
        type: 'password',
        name: 'password',
        id: 'password',
        placeholder: 'Enter password'
      }
    }
  ];

  //helpers
  const resetForm = () => {
    document.getElementById("login-form").reset();
  }

  const handleSubmitExternal = async (event) => {
    event.preventDefault();

    setLoginMessage('Logging in...');
    const LOGIN_URL = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_LOGIN_ENDPOINT}`;
    console.log(LOGIN_URL)

    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    try {
      const response = await axios.post(LOGIN_URL, {username, password});

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      setLoginMessage('Login Successful!')
      resetForm();
      navigate('/dashboard')

    } catch (error) {
      setLoginMessage('Login Failed!' + (error.reponse?.data?.error || error.message));
    }
  };

  return (
    <div className='bg-lightbeige w-full h-screen flex justify-center items-center '>
      <form id="login-form" className="w-[350px] bg-white rounded-lg shadow-lg space-y-4 py-4 px-7" onSubmit={handleSubmitExternal}>
          <h2 className="text-2xl font-bold text-gray-800" >Log in</h2>
        {
          formElements.map((formElement) => {
            return (
              <div>
                <FormLabel
                  htmlFor={formElement.label.htmlFor}
                  displayValue={formElement.label.displayValue}
                />

                <InputField
                  type={formElement.field.type}
                  name={formElement.field.name}
                  id={formElement.field.id}
                />
              </div>
            )
          })
        }

        <div>
          {loginMessage}
        </div>
        <button className='text-white bg-teal py-2 px-6 rounded-full' type="submit">Log in</button>
      </form>
    </div>
  )
}
