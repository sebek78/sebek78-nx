import { AxiosError } from 'axios';
import styled from 'styled-components';

export interface ErrorInfoProps {
  error: AxiosError | null;
}

const StyledErrorInfo = styled.div`
  color: ${({ theme }) => theme.palette.text.danger};
  margin: ${({ theme }) => theme.spacing(2)};
`;

export function ErrorInfo({ error }: ErrorInfoProps) {
  return (
    <StyledErrorInfo>{`Błąd: ${
      error?.message ?? 'Nieznany błąd'
    }`}</StyledErrorInfo>
  );
}
