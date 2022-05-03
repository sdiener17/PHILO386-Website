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
            <div className="smallHeader">Photos</div>
            <TextWithLinkCard text={bibliography[5].text} link={bibliography[5].link}/>
            <TextWithLinkCard text={bibliography[6].text} link={bibliography[6].link}/>
            <TextWithLinkCard text={bibliography[7].text} link={bibliography[7].link}/>
            <TextWithLinkCard text={bibliography[8].text} link={bibliography[8].link}/>
            <TextWithLinkCard text={bibliography[9].text} link={bibliography[9].link}/>
            <TextWithLinkCard text={bibliography[10].text} link={bibliography[10].link}/>
            <TextWithLinkCard text={bibliography[11].text} link={bibliography[11].link}/>
            <TextWithLinkCard text={bibliography[12].text} link={bibliography[12].link}/>
            <TextWithLinkCard text={bibliography[13].text} link={bibliography[13].link}/>
            <TextWithLinkCard text={bibliography[14].text} link={bibliography[14].link}/>
            <TextWithLinkCard text={bibliography[15].text} link={bibliography[15].link}/>
            <TextWithLinkCard text={bibliography[16].text} link={bibliography[16].link}/>
            <TextWithLinkCard text={bibliography[17].text} link={bibliography[17].link}/>
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
    .smallHeader{
        font-size:30px;
        font-weight:bold;
        margin-bottom:20px;
        margin-top:20px;
    }
`;