import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import './Job.scss';
import SkillLi from "./SkillLi";

class JobInfo extends Component {
    render() {
        const job = this.props.job;
        const skillsLi = job.skills.map((skill, key)=><span key={key}><SkillLi skill={skill}/></span>);
        return (
            <div className="margin-box">
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <div className="row"><span className="badge badge-success">{job.company}</span>{skillsLi}</div>
                    <p className="card-text">Offre ajoutée le: {moment(job.createdAt).fromNow()}</p>
                </div>
            </div>
            </div>
        );
    }
}

export default JobInfo;