import React from "react";
import styled from "styled-components";
import TextAndImageCard from "./TextAndImageCard";
import TextAndImageRightCard from "./TextAndImageRightCard";
import TextOnlyCard from "./TextOnlyCard";
import { infoSTAIPText } from "../../data/infoSTAIPText";
import money1 from "../../images/money1.jpg";
import money2 from "../../images/money2.jpg";
import piggy1 from "../../images/piggy1.jpg";


export default function InformationPage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <h3 className="mainHeader">Software and Intellectual Property</h3>
            <h1>Should Software Be Free?</h1>
            <TextAndImageCard image={money1} text={infoSTAIPText.text1}/>
            <h1>Why Software Should Be Free</h1>
            <TextAndImageCard image={money2} text={infoSTAIPText.text2}/>
            <TextOnlyCard text={infoSTAIPText.text3}/>
            <h1>Why Software Shouldn't Be Free</h1>
            <TextAndImageRightCard image={piggy1} text={infoSTAIPText.text4}/>
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
    .mainHeader{
        font-size:30px;
        margin-bottom:10px;
    }
    h1{
        font-size:20px;
    }
`;