import "react-bootstrap"
import {useState} from "react";

export const ReqApprove = () => {
    const [status, setStatus] = useState(null)
    const [cleaner, setCleaner] = useState(null)

    function doneHandler() {
        setStatus(true);
    }

    function deleteHandler() {
        setCleaner(false)
    }

    return (
        <div className={"container"}>
            <div>
                <h4 className="testText"> New Request Approval</h4>
            </div>
            <table className="table table-bordered table-striped square border">
                <thead className=" text-center">
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
                <tbody className="align-middle ">
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>Lithuanian</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    {status ? <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary" onClick={doneHandler}>V</button>
                        <button className="btn btn-outline-secondary" onClick={deleteHandler}>X</button>
                    </td> : <td>Approved</td>}
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td >654654</td>
                    <td >Work</td>
                    <td >Jan-Mar (I)</td>
                    <td >Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary" onClick={doneHandler}>V</button>
                        <button className="btn btn-outline-secondary" onClick={deleteHandler}>X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                <tr>
                    <td>Inkilas Pasala</td>
                    <td>English</td>
                    <td>654654</td>
                    <td>Work</td>
                    <td>Jan-Mar (I)</td>
                    <td>Willing to learn</td>
                    <td className="btn-group w-100">
                        <button className="btn btn-outline-secondary">V</button>
                        <button className="btn btn-outline-secondary">X</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)

}
