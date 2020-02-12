import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import JobInfo from "./JobInfo";

class JobCard extends Component {
    state = {jobSelect: {},};
    AddView(job) {
        fetch('http://127.0.0.1:8000/api/jobs/' + job.id)
            .then(response => response.json())
            .then(data => this.setState({
                    jobSelect: data, loading: false,
                    jobskill: data.skills.map(skill => <li key={skill.id}>{skill.name}</li>),
                    date: <p>Offre ajoutée le : {moment().format("MMM Do YYYY")}</p>
                })
            )
    };

    render() {
        const jobsLi = this.props.jobs.map(job =><li key={job.id}><JobInfo job={job}/><button onClick={event => this.AddView(job)}>Voir plus</button></li>);
        const jobS = this.state.jobSelect;
        return (
            <div className="job-card">
                <ul>{jobsLi}</ul>
                <div>{jobS.title}</div>
                <div>{jobS.company}</div>
                <div>{this.state.jobskill}</div>
                <div>{jobS.url}</div>
                <div>{jobS.description}</div>
            </div>
        );
    }
}

export default JobCard;