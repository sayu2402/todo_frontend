import React, {Component} from 'react'

import {
    Button,
    Modal,
    ModalHeaper,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    ModalHeader
} from 'reactstrap'

class CustomModal extends Component{
    constructor(props) {
        super(props)
        this.state = {
            activeItem : this.props.activeItem
        }
    }

    // To check if the checkbox is checked or not
handleChange = e => {
    let {name, value} = e.target;
    if (e.target.type === "checkbox"){
        value = e.target.checked;
    }
    const activeItem = {...this.state.activeItem, [name] : value};
    this.setState({activeItem})
};


render () {
    const {togle, onSave} = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Task Item </ModalHeader>
            <ModalBody>

                <form>
                    
                </form>
            </ModalBody>




        </Modal>
    )
}









}