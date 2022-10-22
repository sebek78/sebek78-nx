import styled from 'styled-components';
import { ReactComponent as PersonIconSVG } from '../svg/person_FILL0_wght400_GRAD0_opsz48.svg';

export interface PersonIconProps {
  onClick: () => void;
}

const StyledPersonIcon = styled(PersonIconSVG)`
  fill: ${({ theme }) => theme.palette.text.accent};
  cursor: pointer;
`;

export function PersonIcon({ onClick }: PersonIconProps) {
  return <StyledPersonIcon onClick={onClick} />;
}
