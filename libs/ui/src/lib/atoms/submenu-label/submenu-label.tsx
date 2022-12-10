import styled from 'styled-components';

export interface SubmenuLabelProps {
  handleOpenSubmenu: () => void;
  openSubmenuList: () => void;
  label: string;
}

const StyledSubmenuLabel = styled.div`
  width: 100%;
  min-width: 128px;
  height: 39px;
  color: ${({ theme }) => theme.palette.text.accent};
  padding-left: ${({ theme }) => theme.spacing(1)};
  &:hover {
    color: ${({ theme }) => theme.palette.text.accentEmphasis};
    background-color: ${({ theme }) => theme.palette.background.inset};
  }
`;

export function SubmenuLabel({
  handleOpenSubmenu,
  openSubmenuList,
  label,
}: SubmenuLabelProps) {
  return (
    <StyledSubmenuLabel
      onClick={handleOpenSubmenu}
      onMouseEnter={openSubmenuList}
    >
      {label}
    </StyledSubmenuLabel>
  );
}
