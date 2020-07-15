import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import LogsPage from "./logsPage/LogsPage";
import TasksPage from "./tasks/TasksPage.react";
import ResultPage from "./results/ResultPage.react";
import {ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/logs" component={LogsPage} />
                <Route path="/tasks" component={TasksPage} />
                <Route path="/results" component={ResultPage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    );
}

export default App;
