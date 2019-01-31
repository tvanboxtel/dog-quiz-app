import React from 'react'
import DogNameContainer from './DogNameContainer'
import ImageComponent from '../components/ImageComponent'
import store from '../store'
import GetBreeds from '../components/GetBreeds'
import Stats from '../components/Stats'
import GetHint from './GetHint'

export default class ButtonApp extends React.Component {
    render() {
        return(
            <div>
                <h1>Who's this Pokémon?</h1>
                <Stats></Stats>
                
                <div className="buttons-container">
                    <DogNameContainer value={this.props.data}></DogNameContainer>
                </div>
                <ImageComponent />
                <GetBreeds />
                <GetHint />
            </div>
        )
    }
}