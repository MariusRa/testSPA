//import "../styles/App.css";
import { protectedResources } from "../../authConfig";
import Output from "../Output/Output";
import React, {useState} from "react";

// export const RoleAssignment = (props) => {
//
//
//     const tableRows = props.RoleAssign
//
//     console.log(tableRows)
//
//     return (
//         <>
//             <div className="data-area-div">
//                 <p>Calling <strong>Microsoft Graph API</strong>...</p>
//                 <ul>
//                     <li><strong>resource:</strong> <mark>User</mark> object</li>
//                     <li><strong>endpoint:</strong> <mark>https://graph.microsoft.com/v1.0/users</mark></li>
//                     <li><strong>scope:</strong> <mark>user.read</mark></li>
//                 </ul>
//                 <p>Contents of the <strong>response</strong> is below:</p>
//             </div>
//             <div className="data-area-div">
//                 <div className={"overflow-scroll overflow-hidden roleDiv"}>
//                     <ul>
//                         {tableRows}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
//
// }

export const ProfileData = (props) => {
    //const [userID, setUserID] = useState();

    let tableRows = [];
      for (let x = 0; x <= 29; x++) {
        tableRows.push(<option value={props.graphData.value[x].id}>{props.graphData.value[x].mail}</option>)
    }

    // const userHandler = (event)=> {
    //     setUserID(event.target.value)
    // }
    // console.log(userID)

    return (
        <>
            {tableRows}
        </>
    );
}


export const ListAppUsersData = (props) => {
    let roleId = [];
    let tableRows = [];
    for (let x = 0; x < 10; x++) {
        roleId = props.appData.value[x].appRoleId;

        if (roleId == "05fb4daa-e373-46d8-82f6-16e8d1e93bfa"){
        tableRows.push(<option value={props.appData.value[x].principalId}>{props.appData.value[x].principalDisplayName}</option>)
    }}
    //console.log(tableRows)
    return (
        <select multiple className="form-control formR" id="exampleFormControlSelect2" >
            {tableRows}
        </select>
    )
}

export const ListAppUsersRData = (props) => {
    let roleId = [];
    let tableRows = [];
    for (let x = 0; x < 10; x++) {
        roleId = props.appData.value[x].appRoleId;

        if (roleId == "4d608750-8c60-4ee1-885c-f184562fdb8e"){
            tableRows.push(<option>{props.appData.value[x].principalDisplayName}</option>)
        }}
    //console.log(tableRows)
    return (
        <select multiple className="form-control formR" id="exampleFormControlSelect2">
            {tableRows}
        </select>
    )
}

export const UserRoleData = (props) => {

    let tableRows = props.userRole.error.message;

    console.log(tableRows)

    return (
        <>
            <div className="data-area-div">
                <p>Calling <strong>Microsoft Graph API</strong>...</p>
                <ul>
                    <li><strong>resource:</strong> <mark>App Users</mark> object</li>
                </ul>
                <p>Contents of the <strong>response</strong> is below:</p>
            </div>
            <div className="data-area-div">
                <div className={"overflow-scroll overflow-hidden mailDiv"}>
                    <ul>
                        {tableRows}
                    </ul>
                </div>
            </div>
        </>
    );
}


export const HelloData = (props) => {
    /*const tableRows = Object.entries(props.helloData).map((entry, index) => {
        return (<tr key={index}>
            <td><b>{entry[0]}: </b></td>
            <td>{}</td>
        </tr>)*/

    const tableRows = props.helloData.map(( we) => { return(<Output info1={we.date}
                                                                    info2={we.temperatureC}
                                                                    info3={we.temperatureF}
                                                                    info4={we.summary}
    />)


    });
    console.log()
    return (
        <>
            <div className="data-area-div">
                <p>Calling <strong>custom protected web API</strong>...</p>
                <ul>
                    <li><strong>endpoint:</strong> <mark>{protectedResources.apiHello.endpoint}</mark></li>
                    <li><strong>scope:</strong> <mark>{protectedResources.apiHello.scopes[0]}</mark></li>
                </ul>
                <p>Contents of the <strong>response</strong> is below:</p>
            </div>
            <div className="data-area-div">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">TempC</th>
                        <th scope="col">TempF</th>
                        <th scope="col">Summary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        </>
    );
}
