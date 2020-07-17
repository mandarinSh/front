import React from "react";
import {Route} from "react-router-dom";
import {split} from 'lodash';

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import LogsPage from "./logsPage/LogsPage";
import TasksPage from "./tasks/TasksPage.react";
import ResultPage from "./results/ResultPage.react";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outside';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faClipboardList, faChartBar, faPollH, faInfo} from '@fortawesome/free-solid-svg-icons';

export class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        return (
            <div className="">
                <Route render={({location, history}) => (
                    <React.Fragment>
                        <ClickOutside onClickOutside={() => {this.setState({expanded: false})}}>
                            <SideNav
                                expanded={this.state.expanded}
                                onToggle={(expanded) => {
                                    this.setState({expanded});
                                }}
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                            >
                                <SideNav.Toggle />
                                <SideNav.Nav selected={split(location.pathname, '/')[1]}>
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={faHome} />
                                        </NavIcon>
                                        <NavText>
                                            {'Home'}
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="logs">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={faClipboardList} />
                                        </NavIcon>
                                        <NavText>
                                            {'Logs'}
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="tasks">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={faChartBar} />
                                        </NavIcon>
                                        <NavText>
                                            {'Analyzer'}
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="results">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={faPollH} />
                                        </NavIcon>
                                        <NavText>
                                            {'Results'}
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="about">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={faInfo} />
                                        </NavIcon>
                                        <NavText>
                                            {'About'}
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                        </ClickOutside>
                        <main>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/home" component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/logs" component={LogsPage} />
                            <Route path="/tasks" component={TasksPage} />
                            <Route path="/results" component={ResultPage} />
                        </main>
                    </React.Fragment>
                )}
                />
            </div>
        );
    }
}

export default Sidenav;
