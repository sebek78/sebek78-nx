import styled from 'styled-components';

export interface TaglineProps {
  text: string;
}

const StyledTagline = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.mobile.h0.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.h0.lineHeight};
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.h0.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.h0.lineHeight};
  }
`;

export function Tagline({ text }: TaglineProps) {
  return <StyledTagline>{text}</StyledTagline>;
}
