import styled from "styled-components";

export const Stack = styled.div<{$gap?: number, $direction?: string, $wrap?: boolean,}>`
    display: flex;
    flex-direction: row;
`