import { pokemonServiceHandlers } from './pokemon.service.mock';
import { setupServer } from 'msw/node';

export const mockServer = setupServer(...pokemonServiceHandlers);
