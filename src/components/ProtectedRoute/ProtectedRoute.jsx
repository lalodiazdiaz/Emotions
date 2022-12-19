import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const user = localStorage.getItem('user') || null;
	if (!user) {
		return <Navigate replace to="/login" />;
	}

	return children;
}

export default ProtectedRoute;
