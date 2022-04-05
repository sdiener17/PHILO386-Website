import React from "react";
import styled from "styled-components";

export default function InfoCard({image, text}){
    return(
        <PageWrapper>
            <div className="imageContainer">
                <img className="cardImage" src={image} ></img>
            </div>
            <div className="textWrapper">
                <div>{text}</div>
            </div>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    background-color: var(--lightGrey);
    width:1100px;
    padding:15px;
    margin-bottom:20px;
    .cardImage{
        margin:5px;
        width:200px;
        height:200px;
        border-radius:50%;
        border: 3px solid var(--primarySiteColor);
    }
    .imageContainer{
        float:left;
    }
    .textWrapper{
        display:inline-block;
    }
    .flex-item img{
        flex-grow:0;
        flex-shrink:0;
    }
`;