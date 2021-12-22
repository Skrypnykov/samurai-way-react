import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState ({
          editMode: true  
        })
    }
    
    deactivateEditMode = () => {
        this.setState ({
          editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <div className={s.statusMode} onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</div>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} className={s.statusInput} autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.state.status} />
                }
            </div>
        );
    }
};

export default ProfileStatus;
