import styled from 'styled-components';
import { ReactComponent as CloseIconSVG } from '../svg/close_FILL0_wght400_GRAD0_opsz48.svg';

export interface CloseIconProps {
  onClick: () => void;
}

const StyledCloseIcon = styled(CloseIconSVG)`
  fill: ${({ theme }) => theme.palette.text.attention};
  margin: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export function CloseIcon({ onClick }: CloseIconProps) {
  return <StyledCloseIcon onClick={onClick} />;
}
