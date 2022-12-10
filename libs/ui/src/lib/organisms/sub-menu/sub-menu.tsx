import { MenuItemType, UserRole } from '@sebek78-nx/types';
import { useState } from 'react';
import styled from 'styled-components';
import { SubmenuLabel } from '../../atoms/submenu-label/submenu-label';
import { SubmenuList } from '../../molecules/sub-menu-list/sub-menu-list';

export interface SubMenuProps {
  label: string;
  menuItems: MenuItemType[];
  role: UserRole | null;
}

const StyledSubMenu = styled.div`
  position: relative;
  height: 40px;
`;

export function Submenu({ label, role, menuItems }: SubMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleOpenSubmenu = () => setOpenSubmenu(!openSubmenu);
  const hideSubmenuList = () => setOpenSubmenu(false);
  const openSubmenuList = () => setOpenSubmenu(true);

  return (
    <StyledSubMenu onMouseLeave={hideSubmenuList}>
      <SubmenuLabel
        handleOpenSubmenu={handleOpenSubmenu}
        openSubmenuList={openSubmenuList}
        label={label}
      />
      {openSubmenu && <SubmenuList role={role} menuItems={menuItems} />}
    </StyledSubMenu>
  );
}
