import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const AppLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login');
    }, [navigate]);
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-[100vh]">
            <Outlet></Outlet>
        </section>
    );
};
