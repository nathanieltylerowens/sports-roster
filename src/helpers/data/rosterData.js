import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getRosterByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/rosters.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deleteRoster = (rosterId) => axios.delete(`${baseUrl}/rosters/${rosterId}.json`);

const getSingleRoster = (rosterId) => axios.get(`${baseUrl}/rosters/${rosterId}.json`);

export default {
  getRosterByUid,
  getSingleRoster,
  deleteRoster,
};
