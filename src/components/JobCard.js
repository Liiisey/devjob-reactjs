import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import './Job.scss';
import JobInfo from "./JobInfo";

class JobCard extends Component {
    state = {jobSelect: {},};
    AddView(job) {
        fetch('http://127.0.0.1:8000/api/jobs/' + job.id)
            .then(response => response.json())
            .then(data => this.setState({
                    jobSelect: data, loading: false,
                    jobSkill: data.skills.map(skill =><span className="badge badge-info" key={skill.id}>{skill.name}</span>),
                    varDate: <p>Offre ajoutée le: {moment(job.createdAt).fromNow()}</p>,
                    varCompany: <span className="badge badge-success">{job.company}</span>,
                    varUrl: <p>Voir l'offre: {job.url}</p>
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
                            <div className="row">{this.state.varCompany}{this.state.jobSkill}</div>
                            <p>{this.state.varDate}</p>
                            <p>{this.state.varUrl}</p>
                            <p>{jobS.description}</p>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default JobCard;