import React, { Component } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../../features/nav/NavBar/NavBar'
import {Container} from 'semantic-ui-react'
import EventDetailedPage from "../../features/events/EventDetailedPage/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/events/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={HomePage} />
            </Switch>
            <Route path="/(.+)" render={() =>(
                <div>
                    <NavBar/>
                    <Container className="main">
                        <Switch>
                            <Route path={'/events'} component={EventDashboard} />
                            <Route path={'/event/:id'} component={EventDetailedPage} />
                            <Route path={'/people'} component={PeopleDashboard} />
                            <Route path={'/profile/:id'} component={UserDetailedPage} />
                            <Route path={'/manage/:id'} component={EventForm} />
                            <Route path={'/settings'} component={SettingsDashboard} />
                            <Route path={'/createEvent'} component={EventForm} />
                            <Route path={'/test'} component={TestComponent} />
                        </Switch>
                    </Container>
                </div>
            )}
            />
        </div>

    );
  }
}

export default App;
