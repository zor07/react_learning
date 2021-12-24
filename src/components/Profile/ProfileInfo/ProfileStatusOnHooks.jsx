import React, {useEffect, useState} from "react";
import css from './ProfileInfo.module.css'

const ProfileStatusOnHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={css.status}>
            <div>
                {!editMode &&
                   <> <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || "----"}</span> </>
                }
            </div>
            <div>
                {editMode &&
                <> <b>Status: </b> <input onBlur={deactivateEditMode}
                       autoFocus={true}
                       value={status}
                       onChange={onStatusChange}/> </>
                }
            </div>
        </div>
    )
}

export default ProfileStatusOnHooks
