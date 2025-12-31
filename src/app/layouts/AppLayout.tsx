import { PATHS } from '@/shared/constants';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UnauthorizedLayout } from './UnauthorizedLayout';
import { AuthorizedLayout } from './AuthorizedLayout';

const LoginPage = lazy(() => import('@/pages/Login'))
const RegistrationPage = lazy(() => import('@/pages/Registration'))
const CourseListPage = lazy(() => import('@/pages/CourseList'))

export const AppLayout = () => {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={
        <UnauthorizedLayout>
          <LoginPage />
        </UnauthorizedLayout>
      } />
      <Route path={PATHS.REGISTRATION} element={
        <UnauthorizedLayout>
          <RegistrationPage />
        </UnauthorizedLayout>
      } />
      <Route path={PATHS.COURSE_LIST} element={
        <AuthorizedLayout>
          <CourseListPage />
        </AuthorizedLayout>} />
      <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
    </Routes>
  );
};