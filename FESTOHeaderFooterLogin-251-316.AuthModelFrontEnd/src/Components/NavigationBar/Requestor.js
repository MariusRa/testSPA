import {Navbar} from "react-bootstrap";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import {NavLink} from "react-router-dom";

export const RequestNav = () =>{
    return (
        <>
            <Navbar>
                <PageLayout>
                    <div className="link-festo">
                        <NavLink className={"headerHome"} activeClassName={"active"} to="/home">Home</NavLink>
                    </div>
                    <AuthenticatedTemplate>
                        <div className="link-festo">
                            <NavLink to="/LearningHistory" className="headerHome" activeClassName='active'>Learning History</NavLink>
                            <NavLink to="/NewRequest" className="headerHome" activeClassName='active'>New requests</NavLink>
                            <NavLink to="/help" className="headerHome" activeClassName='active'>Help</NavLink>
                        </div>
                    </AuthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>

    )
}