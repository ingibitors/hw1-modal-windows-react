import React, {Component} from 'react';
import './Modal.css';
import Button from "../Button/Button";

class Modal extends Component {

    render() {
        const {header, text, actions, button1Background, button1TextColor, button1Content, button2Background, button2TextColor, button2Content, button3Background, button3TextColor, button3Content, onCancel} = this.props;

           return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="top-wrapper">
                        <div className="modal__header">
                            <h1>{header}</h1>
                        </div>
                        <Button
                            backgroundColor={button3Background}
                            color={button3TextColor}
                            content={button3Content}
                            handleClick={
                                onCancel
                            }

                        />
                    </div>

                    <div className="modal__middle">
                        <div className="modal__content">
                            {text}
                        </div>

                        <div className="modal__actions">
                            {actions}
                        </div>
                    </div>
                    <div className="button-wrapper">

                        <Button
                            backgroundColor={button1Background}
                            color={button1TextColor}
                            content={button1Content}
                        />


                        <Button
                            backgroundColor={button2Background}
                            color={button2TextColor}
                            content={button2Content}
                            handleClick={
                                onCancel
                            }
                        />


                    </div>
                </div>
            </div>
        );

    }
}

export default Modal;