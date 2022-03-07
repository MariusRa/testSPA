import {useState} from "react";
import initialClass from "../Data/class";
import Class from "../Components/Output/Class";

export const ClassroomsTable = () => {
    const [classList, setClassList] = useState(initialClass);

    const staticClass = classList.map(room => <Class
                                        id={room.id}
                                        lang={room.Language}
                                        count={room.StudentCount}
                                        teacher={room.Teacher}
                                        level={room.Level}
                                        isActive={room.IsActive}
    />)
    return (
    <div className={"container"}>
        <div className="cTableHeader d-flex flex-row justify-content-between align-items-center">
            <div>
                <h4 className="hText"> Classroom creation</h4>
            </div>
            <div>
                <a href="newClass" className="newClassBtn btn btn-outline-secondary">New</a>
            </div>
        </div>
        <table className="table table-bordered table-striped square border">
            <thead className="text-center">
            <tr>
                <th width="20%">Language</th>
                <th width="10%">Student Count</th>
                <th width="20%">Teacher</th>
                <th width="5%">Level</th>
                <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody className="align-middle">
            {staticClass}
            </tbody>
        </table>
    </div>)
}
