import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Modal1 from "./components/Modal1/Modal1";
import Modal2 from "./components/Modal2/Modal2";




class App extends React.Component {
    state = {
        numbers: [],
        modal: null,
        test: Modal1
    }

    //передаем полностью jsx code любого компонента(кнопки, полей, таблицы) как аргумент функции и записываем его в state.modal
    openModal = (content) => {
        this.setState({
            modal: content
        });

        window.addEventListener('click', (event) => {
            if (event.target.classList.contains("modal-wrapper")) {
                console.log("modal-wrapper is clicked");
                this.closeModal()
            }
        })
    }
    closeModal = () => {
        this.setState({
            modal: null
        });
    }


    render() {

        return (
            <div className="App">

                <Button
                    backgroundColor='red'
                    color='white'
                    content='Open first 1 model'
                    //при нажатии кнопки записывает контент Modal1 в this.state.modal для отрисовки
                    handleClick={() => {
                        this.openModal(<Modal1 onCancel={this.closeModal}/>)
                    }
                    }
                    disabled={this.state.numbers.length === 10}
                />

                <Button
                    backgroundColor='black'
                    color='white'
                    content='Open second 2 model'
                    handleClick={() => this.openModal(<Modal2 onCancel={this.closeModal}/>)}
                    disabled={this.state.numbers.length === 10}
                />


                <div>
                    {this.state.modal}
                </div>
            </div>

        );
    }
}

export default App;
