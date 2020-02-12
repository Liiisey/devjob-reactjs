import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router';
import moment from 'moment';
import 'moment/locale/fr';
import SkillLi from "./SkillLi";

class JobInfo extends Component {
    render() {
        const job = this.props.job;
        const skillsLi = job.skills.map((skill, key)=><li key={key}><SkillLi skill={skill}/></li>);
        return (
            <article className="job-info">
                <h2>{job.title}</h2>
                <ul>{skillsLi}</ul>
                <p>Offre ajoutée le: {moment(job.createdAt).fromNow()}</p>
            </article>
        );
    }
}

export default JobInfo;