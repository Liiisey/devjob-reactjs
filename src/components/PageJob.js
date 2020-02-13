import React, {Component} from 'react';
import JobCard from "./JobCard";

class PageJob extends Component {
    render() {
        return (
            <div className="page-job">
                <div className="offset-1">
                    <br/>
                    <h1>Offres d'emploi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu efficitur lectus. Etiam quis sem rhoncus, vehicula neque eu, accumsan massa.</p>
                    <JobCard jobs={this.props.jobs}/>
                </div>
            </div>
        );
    }
}

export default PageJob;