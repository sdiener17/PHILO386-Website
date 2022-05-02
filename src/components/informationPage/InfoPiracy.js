import React from "react";
import styled from "styled-components";
import TextAndImageCard from "./TextAndImageCard";
import TextOnlyCard from "./TextOnlyCard";
import TextAndImageRightCard from "./TextAndImageRightCard";
import { infoPiracyText } from "../../data/infoPiracyText";
import pirate1 from "../../images/pirate1.jpg";
import game1 from "../../images/game1.jpg";
import music1 from "../../images/music1.jpg";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3>Piracy</h3>
                <h1>Piracy Overview</h1>
                <TextAndImageCard image={pirate1} text={infoPiracyText.text1}/>
                <h1>Piracy In Video Games</h1>
                <TextAndImageRightCard image={game1} text={infoPiracyText.text2}/>
                <TextOnlyCard text={infoPiracyText.text3}/>
                <h1>Music Piracy</h1>
                <TextAndImageCard image={music1} text={infoPiracyText.text4}/>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
        display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    padding-top:20px;
    padding-bottom:60px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:10px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;