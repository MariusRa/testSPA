import {useEffect, useState} from "react";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../authConfig";


const Request = (props) => {

    const { instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const [postInfo, setPostInfo] = useState(null);

    const [approval, setApproval] = useState({
        Approval: ''
    })

    const [userRole, setUserRole] = useState({
        principalId: `${props.personId}`,
        resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
        appRoleId: '1df00000-3d8e-4449-bd1e-97ae52f6bb58'
    });

    const [newUser, setNewUser] = useState({
        UserId: `${props.personId}`,
        UserName: `${props.person}`,
        UserEmail: `${props.personEmail}`,
        UserRole: 'Student',
    });

    const clearInputs =()=> {
        setApproval(()=>{
            return {
                Approval: ''
            }
        })
    };


    const bearer =`Bearer ${accessToken}`;
    const apiEndpointPut = `https://localhost:44345/api/request/newrequest/${props.id}`;
    const apiEndpointRole = `https://graph.microsoft.com/beta/users/${props.personId}/appRoleAssignments`;
    const apiEndpointUser = 'https://localhost:44345/api/user/adduser';


    const optionsPut = {
        method: "PUT",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(approval)
    };

    const optionsRole = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userRole)
    };

    const optionsUser = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    };

    const request = {
        ...loginRequest,
        account: accounts[0],
        //scopes: ["api://e6bd4d2e-eda0-4d5c-8163-390ee6487bb7/access_as_user"]
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

    const doneHandler = (event) => {
        setApproval(prevState => {
            return{...prevState, Approval: event.target.value}
        });
        //clearInputs();
        fetch(apiEndpointRole, optionsRole)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));
        fetch(apiEndpointUser, optionsUser)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));
    };

    const deleteHandler= (event) => {
        setApproval(prevState => {
            return{...prevState, Approval: event.target.value}
        });
    };
    console.log(userRole)
    console.log(approval)

    if (approval.Approval != "") {
        fetch(apiEndpointPut, optionsPut)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));
        clearInputs();
        window.location.reload(false)
    }

    let actions;
    if(props.approve === 'pending' || props.approve == '' || props.approve == null){
        actions = <td className="btn-group w-100">
            <button className="btn btn-outline-secondary" value={'approved'} onClick={doneHandler}>V</button>
            <button className="btn btn-outline-secondary" value={'notApproved'} onClick={deleteHandler}>X</button>
        </td>

    }
    else if (props.approve === 'approved'){
        actions = <td>Approved</td>
    }
    else if (props.approve === 'notApproved'){
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
