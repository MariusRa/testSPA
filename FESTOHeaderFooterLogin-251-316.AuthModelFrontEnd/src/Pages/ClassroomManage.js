
const ClassroomManage = () => {

    return (
        <div className={"container"}>
            <div className="cTableHeader">
                <h4 className="hText"> Classroom Management</h4>
                <ul>
                    <li><a href="role">SetRoles</a></li>
                    <li><a href="ReqApprove">ReqApprove</a></li>
                    <li><a href="class">ClassTable</a></li>
                    <ul>
                        <li><a href="newClass">NewClass</a></li>
                        <li><a href="editClass">EditClass</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default ClassroomManage
