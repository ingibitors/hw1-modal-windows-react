import React, {Component} from 'react';
import Modal from "../Modal/Modal";



class Modal1 extends Component {

    render() {
        const {onCancel} = this.props
        console.log('onCancel',onCancel)
        return (
            <Modal
                header='Do you want to delete this file?'
                text='Once you delete the file, it won`t be possible to undo this action'
                actions='Are you sure you want to delete it?'
                button1Background='#B3382C'
                button2Background='#B3382C'
                button1Content='OK'
                button2Content='Cancel'
                button3Content='X'

                button3Background='#D44637'
                onCancel={
                    onCancel
                }
            />

        );
    }
}

export default Modal1;