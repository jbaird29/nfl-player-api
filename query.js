module.exports.getPlayer = function (mysql, playerName) {
  return new Promise(function (resolve, reject) {
    mysql.pool.query("SELECT * FROM nfl.rosters WHERE full_name = ?", [playerName], function (error, results, fields) {
      if (error) return reject(error);
      else return resolve(results);
    });
  });
};
