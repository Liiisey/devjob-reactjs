import React, {Component} from 'react';

class PageAddjob extends Component {
   state = {
       title: null,
       company: null,
       skills: [],
       url: null,
       description: null
   };

   change = e => {
       if(e.target.id === "skills") {
           this.state.skills = [].filter.call(e.target.options, o => o.selected).map(o => o.value);
       } else {
           this.setState({
               [e.target.id]: e.target.value
           });
       }
       console.log(this.state)
   };

   submit = e => {
       e.preventDefault();
       console.log(this.state);
       fetch('http://127.0.0.1:8000/api/jobs',{method:"POST", headers: {'Content-Type':'application/json'}, body: JSON.stringify({
               "title": this.state.title,
               "company": this.state.company,
               "skills": this.state.skills,
               "url": this.state.url,
               "description": this.state.description,
           })
       })
   };

    render() {
        const skills = this.props.skills.map(skill =><option value={"/api/skills/"+skill.id} key={skill.id}>{skill.name}</option>);
        console.log(this.submit);
        return (
            <div className="add-job">
                <h1>Ajouter une offre</h1>
                <form onSubmit={this.submit}>
                    <label>Titre</label>
                    <input type="text" id="title" onChange={this.change}/>

                    <label>Entreprise</label>
                    <input type="text" id="company" onChange={this.change}/>

                    <label>Compétences</label>
                    <select id="skills" onChange={this.change}>{skills}</select>

                    <label>Url</label>
                    <input type="url" id="url" onChange={this.change}/>

                    <label>Description</label>
                    <input type="text" id="description" onChange={this.change}/>
                    <button>Ajouter</button>
                </form>
            </div>
        );
    }
}

export default PageAddjob;