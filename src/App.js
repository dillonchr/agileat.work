import React from 'react';
import Header from './components/header';
import Comic from './components/comic';

export default class App extends React.PureComponent {
    state = {
        comics: []
    };

    componentWillMount() {
        const request = new XMLHttpRequest();
        request.addEventListener('load', ({target}) => {
            const comics = JSON.parse(target.response);
            this.setState({ comics });
        });
        request.open('GET', 'comics.json');
        request.send();
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.state.comics.length && <Comic comic={this.state.comics[0]} />}
            </div>
        );
    }
}
