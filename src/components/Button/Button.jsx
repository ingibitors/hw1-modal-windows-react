import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    render(){
        //Передаем текст кнопки content и функцию по нажатию handleclick
        const {content,handleClick, disabled,backgroundColor}=this.props;

    console.log('handleclic: ',handleClick)
        return (
                <button Button style={{background:backgroundColor}} onClick={handleClick} disabled={disabled}>{content}</button>
        );
    }
}

export default Button;