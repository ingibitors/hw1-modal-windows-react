import React, {Component} from 'react';
import Button from "../Button/Button";
import '../Button/Button.css';


class Numbers extends Component {
    state = {
       arrayofelevators: [{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S3300',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200},{model:'S5500',GQ:1000,BS:2000,TS:2000,BK:1200}]
    }

    render() {
        const {model,GQ,BS,TS,BK}=this.state.arrayofelevators[1]
        const {numbers,deleteNumber}= this.props;
        const generatedNumbers=numbers.map((n,index)=>(
            <div className="card" key={index}>
                <h3>card here</h3>
                <h4>model:{model}</h4>
                <h4>GQ:{GQ} kg</h4>
                <h4>shaft width: {this.state.arrayofelevators[2].BS} mm</h4>
                <h4>shaft depth: {TS} mm</h4>
                <h4>width of car:{BK} mm</h4>
                <h4>depth of car:2200</h4>
                <img src="https://roll-club.kh.ua/wp-content/uploads/2014/08/s-lososem-4.jpg" alt="sushi"/>
                id = {n} <Button content='X'
                handleClick={()=>deleteNumber(index)}/>
            </div>
        ));
        return (
            <div className="wrapper">
               Случайное число: {generatedNumbers}
            </div>
        );
    }
}

export default Numbers;