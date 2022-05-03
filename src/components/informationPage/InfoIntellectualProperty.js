import React from "react";
import styled from "styled-components";
import TextAndImageCard from "./TextAndImageCard";
import TextOnlyCard from "./TextOnlyCard";
import TextAndImageRightCard from "./TextAndImageRightCard";
import chef1 from "../../images/chef1.jpg";
import {infoIPText} from "../../data/infoIPText";
import law1 from "../../images/law1.jpg";
import copyright1 from "../../images/copyright1.jpg";
import computerCode2 from "../../images/computerCode2.jpg";

export default function InformationPage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3>Intellectual Property Basics</h3>
            <h1>History</h1>
            <TextAndImageCard image={chef1} text={infoIPText.text1} />
            <h1>Modern Laws Relating to Intellectual Property</h1>
            <TextAndImageCard image={law1} text={infoIPText.text2}/>
            <h1>Copyright Law Details</h1>
            <TextAndImageRightCard image={copyright1} text={infoIPText.text3}/>
            <h1>Justification For and Against Intellectual Property Laws</h1>
            <TextAndImageRightCard image={computerCode2} text={infoIPText.text4}/>
            <TextOnlyCard text={infoIPText.text5}/>
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
    h3{
        font-size:30px;
        margin-bottom:10px;
    }
    h1{
        font-size:20px;
    }
`;