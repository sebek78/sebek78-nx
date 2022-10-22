import { Dispatch, memo, SetStateAction } from 'react';
import { useApiQuery } from '@sebek78-nx/data-access';
import { Routes, Route } from 'react-router-dom';
import { UserProfile } from '../user-profile/user-profile';
import { User } from '@sebek78-nx/types';
import { Dashboard } from '../dashboard/dashboard';
import { Companies } from '../companies/companies';
import { Menu } from '../menu/menu';

interface MainPageProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const MainPage = memo(function MainPage({
  user,
  setUser,
}: MainPageProps) {
  const { data, error, isError, isLoading, isSuccess } = useApiQuery(
    'testData',
    '/'
  );

  console.log(new Date().toLocaleTimeString(), data);

  return (
    <main>
      <Menu />
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
