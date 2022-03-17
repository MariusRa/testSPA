import {Dropdown, Navbar, NavDropdown} from "react-bootstrap";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import {NavLink} from "react-router-dom";


export const CordNav = () =>{

    return (
        <>
            <Navbar>
                <PageLayout>
                    <div className="link-festo">
                            <NavLink className={"headerHome"} id={"home"} activeClassName={"active"} to="/home">Home</NavLink>
                    </div>
                    <AuthenticatedTemplate>

                        <div className="link-festo d-flex flex-row align-items-center">

                                <NavDropdown title="Classroom Management" id="nav-dropdown" activeClassName='active' className="headerHome">
                                    <NavDropdown.Item><NavLink to="/role" className="headerHome" id={"roleManage"} activeClassName='active'>Set Role</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/ReqApprove" className="headerHome" id={"ReqApp"} activeClassName='active'>Request Approval</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/class" id={"classMan"} className="headerHome" activeclassname='active'>Classrooms creation</NavLink></NavDropdown.Item>
                                </NavDropdown>


                            <NavLink to="/NewRequest" id={"newReq"} className="headerHome" activeClassName='active'>New requests</NavLink>
                            <NavLink to="/LearningHistory" id={"learnHis"} className="headerHome" activeClassName='active'>Learning History</NavLink>
                            <NavLink to="/help" className="headerHome" id={"help"} activeClassName='active'>Help</NavLink>
                        </div>



                    </AuthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>

        )
}
