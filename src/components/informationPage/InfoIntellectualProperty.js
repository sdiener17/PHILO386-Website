import React from "react";
import styled from "styled-components";
import InfoNavBar from "./InfoNavBar";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div>Hello from the main intellectual property component!</div>
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;