import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateAboutMeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateAboutMeEditMode() {
        this.setState({
            editMode: false
        })
    }

    changeStatus(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateAboutMeEditMode.bind(this)}>status: {this.props.status}</span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input onBlur={this.deactivateAboutMeEditMode.bind(this)} autoFocus={true} value={this.props.status} onChange={this.changeStatus.bind(this)}/>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileStatus
