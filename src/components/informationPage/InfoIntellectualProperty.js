import React from "react";
import styled from "styled-components";
import TextAndImageCard from "./TextAndImageCard";

export default function InformationPage(){
    return (
        <PageWrapper>
            <TextAndImageCard/>
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;