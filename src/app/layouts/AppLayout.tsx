import { LoginPage } from '@/pages/Login';
import { PATHS } from '@/shared/constants';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
    </Routes>
  );
};