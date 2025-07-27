import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import Index from '@/pages/Index';
import Properties from '@/pages/Properties';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import AdminDashboard from '@/pages/admin/Dashboard';
import LandlordDashboard from '@/pages/landlord/Dashboard';
import TenantDashboard from '@/pages/tenant/Dashboard';
import AgentDashboard from '@/pages/agent/Dashboard';
import NotFound from '@/pages/NotFound';
import AboutUs from '@/pages/AboutUs';
import { InitiateRegisterPage } from '@/pages/auth/InitiateRegisterPage';
import ForgotPassword from '@/pages/auth/ForgotPassword';

// Protected Route Component
const ProtectedRoute = ({
	children,
	allowedRoles,
}: {
	children: React.ReactNode;
	allowedRoles: string[];
}) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	if (user && !allowedRoles.includes(user.role)) {
		return <Navigate to="/unauthorized" replace />;
	}

	return <>{children}</>;
};

// Dashboard Router based on role
const DashboardRouter = () => {
	const { user } = useAuthStore();

	switch (user?.role) {
		case 'admin':
			return <AdminDashboard />;
		case 'landlord':
			return <LandlordDashboard />;
		case 'tenant':
			return <TenantDashboard />;
		case 'agent':
			return <AgentDashboard />;
		default:
			return <Navigate to="/login" replace />;
	}
};

export const AppRoutes = () => {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<Index />} />
			<Route path="/properties" element={<Properties />} />
			<Route path="/login" element={<Login />} />
			<Route path="/initiate-register" element={<InitiateRegisterPage />} />
			<Route path="/register" element={<Register />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />

			{/* Protected Dashboard Route */}
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute
						allowedRoles={['admin', 'landlord', 'tenant', 'agent']}
					>
						<DashboardRouter />
					</ProtectedRoute>
				}
			/>

			{/* Admin Routes */}
			<Route
				path="/admin/*"
				element={
					<ProtectedRoute allowedRoles={['admin']}>
						<AdminDashboard />
					</ProtectedRoute>
				}
			/>

			{/* Landlord Routes */}
			<Route
				path="/landlord/*"
				element={
					<ProtectedRoute allowedRoles={['landlord']}>
						<LandlordDashboard />
					</ProtectedRoute>
				}
			/>

			{/* Tenant Routes */}
			<Route
				path="/tenant/*"
				element={
					<ProtectedRoute allowedRoles={['tenant']}>
						<TenantDashboard />
					</ProtectedRoute>
				}
			/>

			{/* Agent Routes */}
			<Route
				path="/agent/*"
				element={
					<ProtectedRoute allowedRoles={['agent']}>
						<AgentDashboard />
					</ProtectedRoute>
				}
			/>

			{/* 404 and Unauthorized */}
			<Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
