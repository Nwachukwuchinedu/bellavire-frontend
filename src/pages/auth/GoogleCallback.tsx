import React, { useEffect } from "react";
import AuthSlider from "../../components/AuthSlider";
import { useNavigate } from "react-router-dom";
import api from "@/api/api";
import { useAuthStore } from "@/stores/authStore";

const GoogleCallback: React.FC = () => {
  const navigate = useNavigate();
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      navigate("/auth/login"); // No code? Back to login.
      return;
    }

    const exchangeCodeForToken = async () => {
      setLoading(true);
      try {
        // Exchange the code for user info & token via backend
        const response = await api.get(`/auth/google/callback?code=${code}`);

        const { token, user } = response.data;

        // Save token in axios headers globally
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // Update auth store manually
        useAuthStore.setState({
          user,
          token,
          isAuthenticated: true,
        });

        navigate("/dashboard"); // Redirect to your app's dashboard or home page
      } catch (error) {
        console.error("Google callback error:", error);
        navigate("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    exchangeCodeForToken();
  }, [navigate, setLoading]);

  return (
    <div className="relative min-h-screen h-[100vh] flex flex-col lg:flex-row">
      <div className="absolute inset-0 block lg:hidden">
        <AuthSlider bottom={10} />
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <AuthSlider bottom={10} />
      </div>

      <div className="relative z-20 w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-[150px] lg:pt-[50px]">
        <div className="bg-white rounded-[24px] lg:bg-transparent p-6 lg:p-2 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Signing you in with Google...</h2>
          <p className="text-gray-600">Please wait while we log you in.</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleCallback;
