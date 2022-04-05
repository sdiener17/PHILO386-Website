import React from "react";
import styled from "styled-components";
import InfoCard from "./infoCard";
import dogAtComputer from "../../images/dogAtComputer.jpg";
import computerCode1 from "../../images/computerCode1.jpg";
import { homePageText } from "../../data/homePageText";

export default function HomePage(){
    return (
        <PageWrapper>
            <div className="marginTop"/>
            <InfoCard image={dogAtComputer} text={homePageText.text1}/>
            <InfoCard image={computerCode1} text={homePageText.text2}/>
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