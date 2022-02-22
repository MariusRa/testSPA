import React, {useState} from "react";
import {Profile} from "./Profile";
import {ListAppUsers, ListAppUsersR} from "./ListAppUsers";


const RoleManagement = () => {

    const [userRole, setUserRole] = useState({
        principalId: '',
        resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
        appRoleId: ''
    });

    const userHandler = (event) => {
        setUserRole(prevState => {
            return {...prevState, principalId: event.target.value}
        })
    };

    const roleHandler = (event) => {
        setUserRole(prevState => {
            return {...prevState, appRoleId: event.target.value}
        })
    };

    console.log(userRole)

    return(
        <div className={"container"}>
            <div>
                <h4 className="hText"> Role Management</h4>
            </div>
            <div className="form-group search">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search people"/>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="form-group">
                        <label className="hLabel"></label>
                            <select multiple className="form-control formU" id="exampleFormControlSelect2" onChange={userHandler}>
                                <Profile/>
                            </select>
                    </div>
                </div>
                <div className="col-sm d-flex flex-column">
                    <div className="btn-group-vertical align-self-center">
                        <button type="button" className="btn btn-outline-secondary" value={'05fb4daa-e373-46d8-82f6-16e8d1e93bfa'} onClick={roleHandler}>Add</button>
                        <button type="button" className="btn btn-outline-secondary">Del</button>
                    </div>
                    <div className="btn-group-vertical align-self-center">
                        <button type="button" className="btn btn-outline-secondary" value={'4d608750-8c60-4ee1-885c-f184562fdb8e'} onClick={roleHandler}>Add</button>
                        <button type="button" className="btn btn-outline-secondary">Del</button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="form-group">
                        <label className="hLabel">Teachers</label>
                        <ListAppUsers/>
                    </div>
                    <div className="form-group">
                        <label className="hLabel">Requestors</label>
                        <ListAppUsersR/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleManagement;

