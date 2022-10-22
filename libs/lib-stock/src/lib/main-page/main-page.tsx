import { Dispatch, memo, SetStateAction } from 'react';
import { useApiQuery } from '@sebek78-nx/data-access';
import { Routes, Route } from 'react-router-dom';
import { UserProfile } from '../user-profile/user-profile';
import { User } from '@sebek78-nx/types';

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
      <Routes>
        <Route path="/" element={<h1>Main Page</h1>} />
        <Route
          path="profile"
          element={<UserProfile user={user} setUser={setUser} />}
        />
      </Routes>
    </main>
  );
});
