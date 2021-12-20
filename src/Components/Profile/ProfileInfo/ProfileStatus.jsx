import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState ({
          editMode: true  
        })
    }
    
    deactivateEditMode() {
        this.setState ({
          editMode: false
        })
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <div className={s.statusMode} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</div>
                }
                {this.state.editMode &&
                    <input className={s.statusInput} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} defaultValue={this.props.status} />
                }
            </div>
        );
    }
};

export default ProfileStatus;
