import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    //Check if token exists
    if (!token) {
        navigate('/login', { replace: true });
    }
    
    //Token validation - check if token was issued by server
    const profileReponse = api.get('/auth/profile');
    profileReponse.then((response) => {
            console.log(response);
            return children;
        }).catch((error) => {
            console.error('Unauthorized request')
            navigate('/login', { replace: true });
        })

    return children;
}
