import React from "react";
import styled from "styled-components";
import TextWithLinkCard from "../informationPage/TextOnlyCard";

import { bibliography } from "../../data/bibliography";

export default function Bibliography(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <TextWithLinkCard text={bibliography[0].text} link={bibliography[0].link}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    padding-top:40px;
    padding-bottom:60px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;