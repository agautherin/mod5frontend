import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from '../component/Homepage'
import Maneuvers from '../component/Maneuvers'
import Login from '../component/Login'
import Paperwork from '../component/Paperwork'


class Container extends React.Component {
    render(){
        return(
            <Switch>
                <Route path='/maneuvers' render={() =>
                    <Maneuvers />
                } />

                <Route path='/home' render={() =>
                    <Homepage />
                } />

                <Route path='/paperwork' render={() =>
                    this.props.paperwork.map(paperwork => <Paperwork paperWorkObj={paperwork} key={paperwork.id}/>)
                } />

                <Route path='/login' render={() =>
                    <Login currentUser={this.props.currentUser}/>
                } />
            </Switch>
        )
    }
}

export default Container