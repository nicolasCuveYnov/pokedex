import React, {Component} from "react"
import {Link} from "react-router-dom"
import {DebounceInput} from "react-debounce-input"

export default class Header extends Component{
    render(){
        return(
            <div className="header-wrap">
                <h1><Link to="/">Pokedex</Link></h1>
                <DebounceInput 
                element="input"
                debouceTimeout = {400}
                type = "text"
                placeholder = "Search..."
                value = {this.props.query}
                onChange = {(event) => this.props.searchData(event.target.value)}
                />
            </div>
        )
    } 
}