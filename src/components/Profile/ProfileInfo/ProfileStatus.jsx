import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateAboutMeEditMode.bind(this)}>{this.props.status || "----"}</span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input onBlur={this.deactivateAboutMeEditMode.bind(this)}
                               autoFocus={true}
                               value={this.state.status}
                               onChange={this.onStatusChange}/>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileStatus
