import React, {Component} from "react"
import {Link} from 'react-router-dom'

export default class Card extends Component{
    render(){
        const {pokemon} = this.props
        return(
            <div>
                <Link to="">
                    <img></img>
                    <div>
                        <p>{pokemon.name}</p>
                    </div>
                </Link>
            </div>
        )
    }
}