import React, {useState} from "react";
import styled from "styled-components";
import InfoNavBar from "./InfoNavBar";
import InfoIntellectualProperty from "./InfoIntellectualProperty";

export default function InformationPage(){
    const [currentInfoPage, setCurrentInfoPage] = useState("informationhome");
    return (
        <PageWrapper>
            <InfoNavBar currentInfoPage={currentInfoPage} setCurrentInfoPage={setCurrentInfoPage}/>

            {currentInfoPage === "informationip" &&(
                <div>
                    <InfoIntellectualProperty/>
                </div>
            )}
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;