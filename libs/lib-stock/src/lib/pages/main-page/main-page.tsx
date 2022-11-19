import { Dispatch, memo, SetStateAction } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProfile } from '../../templates/user-profile/user-profile';
import { User } from '@sebek78-nx/types';
import { Dashboard } from '../../templates/dashboard/dashboard';
import { Companies } from '../../templates/companies/companies';

interface MainPageProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const MainPage = memo(function MainPage({
  user,
  setUser,
}: MainPageProps) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="profile"
          element={<UserProfile user={user} setUser={setUser} />}
        />
        <Route path="companies" element={<Companies />} />
      </Routes>
    </main>
  );
});
