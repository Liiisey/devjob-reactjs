import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router';
import './App.scss';
import PageAddjob from "./components/PageAddjob";
import PageJob from "./components/PageJob";
import Home from "./components/Home";
import Loading from "./components/Loading";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {jobs: [], skills: [], loading: true}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/jobs/').then(response => response.json()).then(data => this.setState({jobs: data["hydra:member"],
                loading: false}));
        fetch('http://127.0.0.1:8000/api/skills/').then(response => response.json()).then(data => this.setState({skills: data["hydra:member"],
            loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <Loading/>;
        }
      return (
        <header className="header">
          <nav>
            <ul>
                <li><NavLink to={"/"} exact>Accueil</NavLink></li>
                <li><NavLink to={"/offre"}>Offres d'emploi</NavLink></li>
                <li><NavLink to={"/ajouter-une-offre"}>Ajouter une offre</NavLink></li>
            </ul>
          </nav>
          <div className="page-container">
              <Route path={"/"} exact component={Home}/>
              <Route path={"/offre"}><PageJob jobs={this.state.jobs}/></Route>
              <Route path={"/ajouter-une-offre"}><PageAddjob skills={this.state.skills}/></Route>
          </div>
        </header>
      );
    }
}

export default App;