import React, {Component} from 'react';

class SkillLi extends Component {
    render() {
        const skill = this.props.skill;
        return (
            <div>
                <span className="badge badge-info">{skill.name}</span>
            </div>
        );
    }
}

export default SkillLi;