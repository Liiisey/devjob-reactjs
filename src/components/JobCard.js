import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import JobInfo from "./JobInfo";
import './JobInfo.scss';

class JobCard extends Component {
    state = {jobSelect: {},};
    AddView(job) {
        fetch('http://127.0.0.1:8000/api/jobs/' + job.id)
            .then(response => response.json())
            .then(data => this.setState({
                    jobSelect: data, loading: false,
                    jobskill: data.skills.map(skill =><span className="badge badge-info" key={skill.id}>{skill.name}</span>),
                    date: <p>Offre ajoutée le : {moment().format("MMM Do YYYY")}</p>,
                    varCompany: <div><span className="badge badge-success">{job.company}</span></div>,
                    varUrl: <p>Voir l'offre: {job.company}</p>
                })
            )
    };

    render() {
        const jobsLi = this.props.jobs.map(job =><div key={job.id}><JobInfo job={job}/><div className="btn-see"><button className="btn btn-danger" onClick={event => this.AddView(job)}>Voir plus</button></div></div>);
        const jobS = this.state.jobSelect;
        return (
            <React.Fragment>
                <div>{jobsLi}</div>
                    <div className="card job-card">
                        <h5 className="card-header">{jobS.title}</h5>
                        <div className="card-body">
                            <div className="row">{this.state.varCompany}{this.state.jobskill}</div>
                            <p>{this.state.date}</p>
                            <p>{this.state.varUrl}</p>
                            <p>{jobS.description}</p>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default JobCard;