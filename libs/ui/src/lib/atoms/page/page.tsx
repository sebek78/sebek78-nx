import styled from 'styled-components';

export interface PageProps {
  children: React.ReactNode;
}

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  min-height: calc(100vh - 80px);
`;

export function Page({ children }: PageProps) {
  return <StyledPage>{children}</StyledPage>;
}
