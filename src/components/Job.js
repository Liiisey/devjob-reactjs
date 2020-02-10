import React, {Component} from 'react';

class Jobs extends Component {
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/jobs/' + this.props.match.params.id).then(response => response.json()).then(data => this.setState({jobs: data}));
    }

    render() {
        return (
            <div>
                <h1>Offres d'emploi</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu efficitur lectus. Etiam quis sem rhoncus, vehicula neque eu, accumsan massa.</p>
            </div>
        );
    }
}

export default Jobs;