import React, {Component} from "react"
import Card from "./Card"

export default class List extends Component{
    render(){
        return(
            <div className="list">
                <div>
                    {this.props.map((pokemon)=>{
                        <Card 
                        getInfo = {this.props.getInfo}
                        key = {pokemon.id}
                        pokemon = {pokemon}
                        setPage = {this.props.setPage}
                        />
                    })}
                </div>
            </div>
        )
    }
}