import { rest } from 'msw';

export const pokemonServiceHandlers = [
  rest.get('https://pokemon-json.herokuapp.com/api/pokemons', (_, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          name: 'Bulbasaur',
          sprite: 'https://pokemon-json.herokuapp.com/sprites/001MS.png',
          thumbnail:
            'https://pokemon-json.herokuapp.com/thumbnails/001Bulbasaur.png',
        },
        {
          id: 2,
          name: 'Ivysaur',
          sprite: 'https://pokemon-json.herokuapp.com/sprites/002MS.png',
          thumbnail:
            'https://pokemon-json.herokuapp.com/thumbnails/002Ivysaur.png',
        },
      ])
    )
  ),
];
