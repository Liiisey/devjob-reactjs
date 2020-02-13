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
           // eslint-disable-next-line
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
        const skills = this.props.skills.map(skill =><option value={"/api/skills/" + skill.id} key={skill.id}>{skill.name}</option>);
        console.log(this.submit);
        return (
            <div className="add-job">
                <div className="offset-1">
                    <br/>
                    <h1>Ajouter une offre</h1>
                    <br/>
                    <div className="col-md-5 offset-2">
                        <form onSubmit={this.submit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Titre</label>
                                <input type="text" className="form-control" id="title" name="title" onChange={this.change}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Entreprise</label>
                                <input type="text" className="form-control" id="company" name="company" onChange={this.change}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Compétences</label>
                                <select multiple={true} className="form-control" id="skills" name="skills" onChange={this.change}>{skills}</select>
                                <small id="skillsHelp" className="form-text text-muted">Pour sélectionner plusieurs compétences: ctrl+clique.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">URL</label>
                                <input type="url" className="form-control" id="url" name="url" onChange={this.change}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="description" name="description" rows="3" onChange={this.change}/>
                            </div>
                            <button className="btn btn-warning">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageAddjob;