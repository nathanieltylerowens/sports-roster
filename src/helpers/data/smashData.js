import rosterData from './rosterData';
import playerData from './playerData';

const completeRosterDelete = (rosterId) => new Promise((resolve, reject) => {
  rosterData.deleteRoster(rosterId)
    .then(() => {
      playerData.getPlayersByRosterId(rosterId)
        .then((players) => {
          players.forEach((player) => {
            playerData.deletePlayer(player.id);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { completeRosterDelete };
