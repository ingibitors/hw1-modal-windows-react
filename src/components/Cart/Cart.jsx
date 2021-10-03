import React, {Component} from 'react';
import Modal1 from "../Modal1/Modal1";

class Cart extends Component {

    render() {
        return (
            <div>
                <button onClick={()=>this.openModal(<Modal1 />)}></button>
            </div>
        );
    }
}

export default Cart;