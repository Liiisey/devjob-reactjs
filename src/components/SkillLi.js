import React, {Component} from 'react';

class SkillLi extends Component {
    render() {
        const skill = this.props.skill;
        return (
            <div>
                {skill.name}
            </div>
        );
    }
}

export default SkillLi;