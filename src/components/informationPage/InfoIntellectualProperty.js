import React from "react";
import styled from "styled-components";
import TextAndImageCard from "./TextAndImageCard";
import TextOnlyCard from "./TextOnlyCard";
import chef1 from "../../images/chef1.jpg";
import {infoIPText} from "../../data/infoIPText";
import law1 from "../../images/law1.jpg";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h1>History</h1>
            <TextAndImageCard image={chef1} text={infoIPText.text1} />
            <h1>Modern Laws Relating to Intellectual Property</h1>
            <TextAndImageCard image={law1} text={infoIPText.text2}/>
            <h1>Copyright Law Details</h1>
            <TextOnlyCard text={infoIPText.text3}/>
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