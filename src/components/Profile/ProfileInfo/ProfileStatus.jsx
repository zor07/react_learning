import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.editMode && prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input onBlur={this.deactivateEditMode}
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
