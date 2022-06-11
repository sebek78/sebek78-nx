import styled from 'styled-components';

export interface PageTitleProps {
  title: string;
}

const StyledPageTitle = styled.div`
  color: ${({ theme }) => theme.palette.text.accent};
  font-size: ${({ theme }) => theme.typography.mobile.h00.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.h00.lineHeight};
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.desktop.h00.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.h00.lineHeight};
  }
`;

export function PageTitle({ title }: PageTitleProps) {
  return <StyledPageTitle>{title}</StyledPageTitle>;
}
