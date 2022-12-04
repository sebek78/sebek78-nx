import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Companies } from '../../templates/companies/companies';
import { AdminDashboard } from '../../templates/admin-dashboard/admin-dashboard';

export const AdminPage = memo(function AdminPage() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="companies" element={<Companies />} />
      </Routes>
    </main>
  );
});
