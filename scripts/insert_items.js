const { query } = require('../util/db');

let insertItems = async function(tableName, data) {
  let sql = ``;
  console.log(data.username);
  switch (tableName) {
    case 'user':
      sql = `
        INSERT INTO ${tableName} (username, password, user_nickname) VALUES ('${data.username}', '${data.password}', '${data.user_nickname}');
      `;
      break;
    case 'pet':
      sql = `
        INSERT INTO ${tableName} (pet_nickname, pet_owner, pet_type) VALUES ('${data.pet_nickname}', '${data.pet_owner}', '${data.pet_type}');
      `;
      break;
    case 'walk':
      sql = `
        INSERT INTO ${tableName} (walk_stime, walk_etime, walk_pet) VALUES ('${data.walk_stime}', '${data.walk_etime}', '${data.walk_pet}');
      `;
      break;
    case 'comment':
      sql = `
        INSERT INTO ${tableName} (com_time, com_user, com_walk) VALUES ('${data.com_time}', '${data.com_user}', '${data.com_walk}');
      `;
      break;
    case 'good':
      sql = `
        INSERT INTO ${tableName} (good_name, good_price, good_count, good_info) VALUES ('${data.good_name}', '${data.good_price}', '${data.good_count}', '${data.good_info}');
      `;
      break;
    default:


  }

  console.log(sql);
  try {

    let dataList = await query( sql )
    return dataList;
  } catch (e) {
    return e;
  } finally {

  }
}

module.exports = {
	insertItems
};
