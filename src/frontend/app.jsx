import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Timeline} from "./components/timeline/timeline";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import {LoginPage} from "./components/admin/login-page";
import {LogoutPage} from "./components/admin/logout-page";
import {AdminPage} from "./components/admin/admin-page";
import {SettingsContext} from "./SettingsContext";

const App = props => {
    const [settings, setSettings] = useState(undefined);

    useEffect(() => {
        let settings;
        fetch('/api/settings')
            .then(res => res.json())
            .then(setSettings);
    }, [])

    return (
        <SettingsContext.Provider value={settings}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h1 className={'app-title'} aria-label={'Soda'}>S🥤da</h1>
                            <p className={'app-subtitle'}>A refreshing incident board...</p>
                            <h2 className={'timeline-title'}>Timeline</h2>
                            <Timeline/>
                        </div>
                    </Route>
                    <Route exact path={'/logout'} component={LogoutPage}/>
                    <Route exact path="/admin" component={AdminPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route render={() => <h1>Page not found</h1>}/>
                </Switch>
            </BrowserRouter>
        </SettingsContext.Provider>)
};

ReactDOM.render(<App/>, document.getElementById('app'));
