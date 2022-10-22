import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MenuProps {
  // TODO: admin
}

const StyledMenu = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 ${(props) => props.theme.spacing(4)};
  border-bottom: 2px solid ${(props) => props.theme.palette.border.default};
  & a {
    color: ${(props) => props.theme.palette.text.accent};
    text-decoration: none;
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

export function Menu(props: MenuProps) {
  return (
    <StyledMenu>
      <Link to="/">Strona główna</Link>
      <Link to="/companies">Spółki</Link>
    </StyledMenu>
  );
}
