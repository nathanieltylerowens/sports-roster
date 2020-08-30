import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersByRosterId = (rosterId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="rosterId"&equalTo="${rosterId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

export default { getPlayersByRosterId, deletePlayer };
