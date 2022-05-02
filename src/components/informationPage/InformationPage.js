import React, {useState} from "react";
import styled from "styled-components";
import InfoNavBar from "./InfoNavBar";
import InfoIntellectualProperty from "./InfoIntellectualProperty";
import InfoHomePage from "./InfoHomePage";
import InfoSoftwareAndIP from "./InfoSoftwareAndIP";
import InforPiracy from "./InfoPiracy";

export default function InformationPage(){
    const [currentInfoPage, setCurrentInfoPage] = useState("informationhome");
    return (
        <PageWrapper>
            <InfoNavBar currentInfoPage={currentInfoPage} setCurrentInfoPage={setCurrentInfoPage}/>

            {currentInfoPage === "informationhome" &&(
                <InfoHomePage/>
            )}

            {currentInfoPage === "informationip" &&(
                <div>
                    <InfoIntellectualProperty/>
                </div>
            )}

            {currentInfoPage === "informationsaip" &&(
                <div>
                    <InfoSoftwareAndIP/>
                </div>
            )}

            {currentInfoPage==="informationpiracy"&&(
                <div>
                    <InforPiracy/>
                </div>
            )}
        </PageWrapper>
    )
}

const PageWrapper = styled.nav`
    display:flex;
`;