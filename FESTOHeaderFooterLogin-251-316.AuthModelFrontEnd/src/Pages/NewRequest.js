import {Profile} from "./Profile";
import React, {useState} from "react";
import languageData from "../Data/languageData";
import SemData from "../Data/semData";
import TargetData from "../Data/targetData";
import {Button, Modal} from "react-bootstrap";

export const NewRequest = (props) => {

    const [langList, setLang] = useState(languageData);
    const [targetList, setTarget] = useState(TargetData);
    const [semList, setSem] = useState(SemData);

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

    let staticTarget = [];
    for (let x = 0; x < targetList.length; x++) {
        staticTarget.push(<option value={targetList[x].id}>{targetList[x].target}</option>)
    };

    let staticLang = [];
    for (let x = 0; x < langList.length; x++) {
        staticLang.push(<option value={langList[x].id}>{langList[x].language}</option>)
    };

    let staticSem = [];
    for (let x = 0; x < semList.length; x++) {
        staticSem.push(<option value={semList[x].id}>{semList[x].semester}</option>)
    };

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
                                <input type="text" maxLength="10" className="form-control" id="inputList" value={newRequest.costCenter} onChange={costHandler}/>
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
