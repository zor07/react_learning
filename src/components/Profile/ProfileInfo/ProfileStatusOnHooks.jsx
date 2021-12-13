import React, {useState} from "react";

const ProfileStatusOnHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                {!editMode &&
                    <span onDoubleClick={activateEditMode}>{status || "----"}</span>
                }
            </div>
            <div>
                {editMode &&
                <input onBlur={deactivateEditMode}
                       autoFocus={true}
                       value={status}
                       onChange={onStatusChange}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatusOnHooks
