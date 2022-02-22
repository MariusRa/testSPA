import {useState} from "react";


const Request = (props) => {
    const [status, setStatus] = useState(null)

    function doneHandler() {
        setStatus(true);
    }

    function deleteHandler() {
        setStatus(false)
    }

    let actions;
    if(status == null){
        actions = <td className="btn-group w-100">
            <button className="btn btn-outline-secondary" onClick={doneHandler}>V</button>
            <button className="btn btn-outline-secondary" onClick={deleteHandler}>X</button>
        </td>

    }
    else if (status == true){
        actions = <td>Approved</td>
    }
    else {
        actions = <td>Decline</td>
    }
    return(
        <tr>
            <td>{props.person}</td>
            <td>{props.language}</td>
            <td>{props.cost}</td>
            <td>{props.target}</td>
            <td>{props.sem}</td>
            <td>{props.com}</td>
            {actions}
        </tr>
    )
}

export default Request
