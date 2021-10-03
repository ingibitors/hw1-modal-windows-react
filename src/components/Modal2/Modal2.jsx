import React, {Component} from 'react';
import Modal from "../Modal/Modal";

class Modal2 extends Component {
    render() {
        const {onCancel}=this.props
        return (
            <Modal
                header='hello, this is header 2 from app.jsx'
                text='hello, this is text 2 from app.jsx'
                actions='hi, this actions 2 imported from app.jsx'
                button1Background='#89cff0'
                button2Background='#C5B4E3'
                button1Content='yes'
                button2Content='no'
                button3Content='X'
                button3Background='red'
                onCancel={
                    onCancel
                }
            />
        );
    }
}

export default Modal2;