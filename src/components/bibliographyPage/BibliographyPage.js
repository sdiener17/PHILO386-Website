import React from "react";
import styled from "styled-components";
import TextWithLinkCard from "./TextWithLinkCard";

import { bibliography } from "../../data/bibliography";

export default function Bibliography(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3 className="overallHeader">Bibliography</h3>
            <TextWithLinkCard text={bibliography[0].text} link={bibliography[0].link}/>
            <TextWithLinkCard text={bibliography[1].text} link={bibliography[1].link}/>
            <TextWithLinkCard text={bibliography[2].text} link={bibliography[2].link}/>
            <TextWithLinkCard text={bibliography[3].text} link={bibliography[3].link}/>
            <TextWithLinkCard text={bibliography[4].text} link={bibliography[4].link}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    width:100%;
    padding-top:10px;
    padding-bottom:60px;
    padding-left:20px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:10px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    .overallHeader{
        font-size:30px;
    }
`;