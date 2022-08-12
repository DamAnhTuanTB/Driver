import { ajax } from '@setel/web-common/exposes/ajax';
import * as React from 'react';
import './app.css';

export const App = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    ajax
      .get('https://pokemon-json.herokuapp.com/api/pokemons')
      .then(setPokemons);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1>Create Setel App</h1>
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    </div>
  );
};
