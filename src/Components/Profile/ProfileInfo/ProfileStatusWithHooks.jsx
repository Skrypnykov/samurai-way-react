import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div className={s.status}>
            {!editMode &&
                <div className={s.statusMode} onDoubleClick={activateEditMode} >{props.status || 'no status'}</div>
            }
            {editMode &&
                <input className={s.statusInput} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} defaultValue={status} />
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
