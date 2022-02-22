import {Profile} from "./Profile";
import React, {useState} from "react";
import languageData from "../Data/languageData";
import SemData from "../Data/semData";
import TargetData from "../Data/targetData";

export const NewRequest = (props) => {

    const [langList, setLang] = useState(languageData)
    const [targetList, setTarget] = useState(TargetData)
    const [semList, setSem] = useState(SemData)

    const [newRequest, setNewRequest] = useState({
        principalId: '',
    });

    let staticTarget = [];
    for (let x = 0; x < targetList.length; x++) {
        staticTarget.push(<option value={targetList[x].id}>{targetList[x].target}</option>)
    }

    let staticLang = [];
    for (let x = 0; x < langList.length; x++) {
        staticLang.push(<option value={langList[x].id}>{langList[x].language}</option>)
    }

    let staticSem = [];
    for (let x = 0; x < semList.length; x++) {
        staticSem.push(<option value={semList[x].id}>{semList[x].semester}</option>)
    }

    const userHandler = (event) => {
        setNewRequest(prevState => {
            return {...prevState, principalId: event.target.value}
        })
    };
    console.log(newRequest)
    return(
        <div className={"container"}>
            <div>
                <h4 className="hText"> New Request</h4>
            </div>
            <div className="form-group search">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search people"/>
            </div>
            <div className="form-group row">
                <div className="col-sm">
                    <div className="form-group">
                        <label className="hLabel"></label>
                        <select multiple className="form-control formU" id="exampleFormControlSelect2" onChange={userHandler}>
                            <Profile/>
                        </select>
                    </div>
                </div>
                <div className="selectDiv col-sm ">
                    <div className="nRDiv form-group d-flex flex-row align-items-center">
                        <label className="col-4">Language</label>
                            <select className="form-select w-50">
                                {staticLang}
                            </select>
                    </div>
                    <div className="nRDiv form-group d-flex flex-row align-items-center">
                        <label className="col-4">Cost Center</label>
                        <div className="col-4 w-50">
                            <input type="text" maxLength="10" className="form-control"/>
                        </div>
                    </div>
                    <div className="nRDiv form-group d-flex flex-row align-items-center">
                        <label className="col-4">Target</label>
                        <select className="form-select w-50">
                            {staticTarget}
                        </select>
                    </div>
                    <div className="nRDiv form-group d-flex flex-row align-items-center">
                        <label className="col-4">Semester</label>
                        <select className="form-select w-50">
                            {staticSem}
                        </select>
                    </div>
                </div>
                <div className="col-sm buttonDiv">
                    <div className="nRCDiv form-group align-items-center">
                        <label className="hLabel">Comments</label>
                        <textarea type="text" className="form-control commentForm" maxLength="150"/>
                    </div>
                    <div className="form-group">
                        <div className="nRCBDiv form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Would like to get notifications
                                </label>
                        </div>
                        <div className="nRBDiv btn-group align-self-center w-100">
                            <button type="button" className="btn btn-outline-secondary">Save</button>
                            <button type="button" className="btn btn-outline-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRequest;
