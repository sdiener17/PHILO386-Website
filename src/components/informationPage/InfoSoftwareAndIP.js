import React from "react";
import styled from "styled-components";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div>Hello from this component!</div>
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;