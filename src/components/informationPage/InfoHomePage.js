import React from "react";
import styled from "styled-components";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div>Please click on one of the side links to learn more about intellectual property and piracy!</div>
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;