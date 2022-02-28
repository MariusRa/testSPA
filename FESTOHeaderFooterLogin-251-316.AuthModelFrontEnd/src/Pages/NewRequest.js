import {Profile} from "./Profile";
import React, {useEffect, useState} from "react";
import languageData from "../Data/languageData";
import SemData from "../Data/semData";
import TargetData from "../Data/targetData";
import {Button, Modal} from "react-bootstrap";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../authConfig";
import Output from "../Components/Output/Output";

export const NewRequest = (props) => {

    const { instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const [postInfo, setPostInfo] = useState(null);

    const [langList, setLang] = useState([]);
    const [targetList, setTarget] = useState([]);
    const [semList, setSem] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newRequest, setNewRequest] = useState({
        principalId:'',
        language:'',
        costCenter:'',
        target:'',
        semester:'',
        comments:''
    });

    const bearer =`Bearer ${accessToken}`;
    const apiEndpoint = `https://localhost:44345/WeatherForecast`;
    const apiEndpointS = `https://localhost:44345/api/request/semester`;
    const apiEndpointT = `https://localhost:44345/api/request/target`;
    const apiEndpointL = `https://localhost:44345/api/request/language`;
    const optionsGet = {
        method: "GET",
        headers: {
            'Authorization': bearer}
    };

    const options = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRequest)
    };

    const request = {
        ...loginRequest,
        account: accounts[0],
        scopes: ["api://e6bd4d2e-eda0-4d5c-8163-390ee6487bb7/access_as_user"]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    useEffect (()=>{
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        })
    }, []);

    if (langList.length === 0) {
        fetch(apiEndpointL, optionsGet)
            .then(response => response.json())
            .then(data => setLang(data))
            .catch(error => console.log(error));
    }
    if (targetList.length === 0) {
        fetch(apiEndpointT, optionsGet)
            .then(response => response.json())
            .then(data => setTarget(data))
            .catch(error => console.log(error));
    }
    if (semList.length === 0) {
        fetch(apiEndpointS, optionsGet)
            .then(response => response.json())
            .then(data => setSem(data))
            .catch(error => console.log(error));
    }

    const staticTarget = targetList.map((we) => {return (<option value={we.id}>{we.target}</option>)})
    const staticLang = langList.map((we) => {return (<option value={we.id}>{we.language}</option>)})
    const staticSem = semList.map((we) => {return (<option value={we.id}>{we.semester}</option>)})

    console.log(targetList)


    // let staticTarget = [];
    // for (let x = 0; x < 2; x++) {
    //     staticTarget.push(<option value={targetList[x].id}>{targetList[x].target}</option>)
    // };
    //
    // let staticLang = [];
    // for (let x = 0; x < 10; x++) {
    //     staticLang.push(<option value={langList[x].id}>{langList[x].language}</option>)
    // };
    //
    // let staticSem = [];
    // for (let x = 0; x < 3; x++) {
    //     staticSem.push(<option value={semList[x].id}>{semList[x].semester}</option>)
    // };

    const studHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState, principalId: event.target.value}
        })
    };

    const langHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState, language: event.target.value}
        })
    };

    const costHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState,costCenter: event.target.value}
        })
    };

    const targetHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState,target: event.target.value}
        })
    };

    const semesterHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState, semester: event.target.value}
        })
    };

    const comHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState, comments: event.target.value}
        })
    };

    const clearInputs =()=> {
        setNewRequest(()=>{
            return {
                principalId: '',
                language: '',
                costCenter:'',
                target: '',
                semester: '',
                comments:''
            }
        })
    };
    const submitHandler =(event)=>{
        event.preventDefault();
        console.log(newRequest)
        fetch(apiEndpoint, options)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));
        clearInputs();
    };

    const deleteHandler =()=>{
        setShow(false);
        clearInputs();
        //window.location.reload(false)
    };


    return(
        <div className={"container"}>
            <div>
                <h4 className="hText"> New Request</h4>
            </div>
            <div className="form-group search">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search people"/>
            </div>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label className="hLabel"></label>
                            <select multiple className="form-control formU" onChange={studHandler}>
                                <Profile/>
                            </select>
                        </div>
                    </div>
                    <div className="selectDiv col-sm ">
                        <div className="nRDiv form-group d-flex flex-row align-items-center">
                            <label className="col-4">Language</label>
                                <select className="form-select w-50" value={newRequest.language} onChange={langHandler}>
                                    <option value="">Select language</option>
                                    {staticLang}
                                </select>
                        </div>
                        <div className="nRDiv form-group d-flex flex-row align-items-center">
                            <label className="col-4">Cost Center</label>
                            <div className="col-4 w-50">
                                <input type="number" min="0" max="9999999999" className="form-control" id="inputList" value={newRequest.costCenter} onChange={costHandler}/>
                            </div>
                        </div>
                        <div className="nRDiv form-group d-flex flex-row align-items-center">
                            <label className="col-4">Target</label>
                            <select className="form-select w-50" value={newRequest.target} onChange={targetHandler}>
                                <option value="">Select target</option>
                                {staticTarget}
                            </select>
                        </div>
                        <div className="nRDiv form-group d-flex flex-row align-items-center">
                            <label className="col-4">Semester</label>
                            <select className="form-select w-50" value={newRequest.semester} onChange={semesterHandler}>
                                <option value="">Select semester</option>
                                {staticSem}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm buttonDiv">
                        <div className="nRCDiv form-group align-items-center">
                            <label className="hLabel">Comments</label>
                            <textarea type="text" className="form-control commentForm" maxLength="150" value={newRequest.comments} onChange={comHandler}/>
                        </div>
                        <div className="form-group">
                            <div className="nRCBDiv form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Would like to get notifications
                                    </label>
                            </div>
                            <div className="nRBDiv btn-group align-self-center w-100">
                                <button type="submit" className="btn btn-outline-secondary">Save</button>
                                <button type="button" className="btn btn-outline-secondary" onClick={handleShow}>Cancel</button>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Alert</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Do you really want to delete this element?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button variant="primary" onClick={deleteHandler}>Yes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewRequest;
