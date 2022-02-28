import React, {useEffect, useState} from "react";
import {Profile} from "./Profile";
import {ListAppUsers, ListAppUsersR} from "./ListAppUsers";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../authConfig";


const RoleManagement = () => {

    const { instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const [postInfo, setPostInfo] = useState(null);
    const [searchTerm, setSearchTerm] = useState("")


    const [userRole, setUserRole] = useState({
        principalId: '',
        resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
        appRoleId: ''
    });

    const [delUser, setDelUser] = useState({
        delPrincipalID:'',
        roleAsigId:''
    })

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
    };

    console.log(searchTerm)

    const userHandler = (event) => {
        setUserRole(prevState => {
            return {...prevState, principalId: event.target.value}
        })
    };

    const delHandler = (event) => {
        setDelUser(prevState => {
            return {...prevState, delPrincipalID: event.target.value, roleAsigId: event.target[event.target.selectedIndex].id}
        })
    }

    const apiEndpoint = `https://graph.microsoft.com/beta/users/${userRole.principalId}/appRoleAssignments`;
    const apiEndpointDel = `https://graph.microsoft.com/beta/users/${delUser.delPrincipalID}/appRoleAssignments/${delUser.roleAsigId}`;

    const bearer =`Bearer ${accessToken}`;

    const options = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userRole)
    };

    const optionsDel = {
        method: "DELETE",
        headers: {
            'Authorization': bearer,
        },
    };

    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    const clearInputs =()=> {
        setUserRole(()=>{
            return {
                principalId: '',
                resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
                appRoleId: ''
            }
        })
    };

    const clearDelInputs = () => {
        setDelUser(()=>{
            return {
                delPrincipalID:'',
                roleAsigId:''
            }
        })
    }

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


    const roleHandler = (event) => {
        setUserRole(prevState => {
            return {...prevState, appRoleId: event.target.value}
        })
    };

    if (userRole.appRoleId !="" && userRole.principalId !="" ){
        console.log(options)
        fetch(apiEndpoint, options)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));
        clearInputs();
        window.window.location.reload(false)
    };

    const delRoleHandler =  () => {

        fetch(apiEndpointDel, optionsDel)
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error));

        clearDelInputs();
        window.location.reload(false)
    };

    return(
        <div className={"container"}>
            <div>
                <h4 className="hText"> Role Management</h4>
            </div>
            <div className="form-group search">
                <input type="text" className="form-control" placeholder="Search people" value={searchTerm} onChange={searchHandler}/>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="form-group">
                        <label className="hLabel"></label>
                            <select multiple className="form-control formU" onChange={userHandler}>
                                <Profile/>
                            </select>
                    </div>
                </div>
                <div className="col-sm d-flex flex-column">
                    <div className="btn-group-vertical align-self-center">
                        <button type="button" className="btn btn-outline-secondary" value={"05fb4daa-e373-46d8-82f6-16e8d1e93bfa"} onClick={roleHandler}>Add</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={delRoleHandler}>Del</button>
                    </div>
                    <div className="btn-group-vertical align-self-center">
                        <button type="button" className="btn btn-outline-secondary" value={'4d608750-8c60-4ee1-885c-f184562fdb8e'} onClick={roleHandler}>Add</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={delRoleHandler}>Del</button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="form-group">
                        <label className="hLabel">Teachers</label>
                        <select multiple className="form-control formR" onChange={delHandler}>
                            <ListAppUsers/>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="hLabel">Requestors</label>
                        <select multiple className="form-control formR" onChange={delHandler}>
                            <ListAppUsersR/>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleManagement;

