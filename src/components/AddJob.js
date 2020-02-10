import React, {Component} from 'react';

class AddJobs extends Component {
    render() {
        return (
            <div>
                <h1>Ajouter une offre</h1>
                <form>
                    Titre <input type="text" name="title"/><br/>
                    Entreprise <input type="text" name="entreprise"/><br/>
                    Compétences <input type="text" name="skills"/><br/>
                    URL <input type="url" name="url"/><br/>
                    Description <input type="text" name="description"/><br/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default AddJobs;