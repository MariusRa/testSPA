import "react-bootstrap"
import {useState} from "react";
import initialRequests from "../Data/data";
import Request from "../Components/Output/Request";

export const ReqApprove = () => {
    const [requestList, setRequest] = useState(initialRequests)

    const staticRequest = requestList.map(
        req => <Request id={req.id}
                        person={req.person}
                        language={req.language}
                        cost={req.costCentre}
                        target={req.target}
                        sem={req.semester}
                        com={req.comments}
        />)

    return (
        <div className={"container"}>
            <div>
                <h4 className="hText"> New Request Approval</h4>
            </div>
            <table className="table table-bordered table-striped square border">
                <thead className="text-center">
                <tr>
                    <th width="15%">Person</th>
                    <th width="5%">Language</th>
                    <th width="8%">Cost Centre</th>
                    <th width="5%">Target</th>
                    <th width="10%">Semester</th>
                    <th width="20%">Comments</th>
                    <th width="5%">Actions</th>
                </tr>
                </thead>
                <tbody className="align-middle">
                {staticRequest}
                </tbody>
            </table>
        </div>)

}
