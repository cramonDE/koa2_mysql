const { query } = require('../util/db');

let insertItems = async function(tableName, data) {
  let sql = ``;
  switch (tableName) {
    case 'user':
      sql = `
        INSERT INTO ${tableName} (password, user_nickname) VALUES ('${data.password}', '${data.user_nickname}');
      `;
      break;
    case 'pet':
      sql = `
        INSERT INTO ${tableName} (pet_nickname, pet_owner, pet_type, pet_weight, pet_sex, pet_birth) VALUES ('${data.pet_nickname}', '${data.pet_owner}', '${data.pet_type}', '${data.pet_weight}', '${data.pet_sex}', '${data.pet_birth}');
      `;
      break;
    case 'user_and_pet':
      sql = `
        INSERT INTO ${tableName} (user_id, pet_id) VALUES ( '${data.user_id}', '${data.pet_id}');
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
    case 'hotspot':
      sql = `
        INSERT INTO ${tableName} (hs_time, hs_user, hs_content) VALUES ('${data.hs_time}', '${data.hs_user}', '${data.hs_content}');
      `;
      break;
    case 'user_and_hotspot':
      sql = `
        INSERT INTO ${tableName} (user_id, hs_id) VALUES ( '${data.user_id}', '${data.hs_id}');
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


//
//
// $ curl -X POST --data "password=123&&user_nickname=丁同学" 127.0.0.1:3000/user
//
// curl -X POST --data "pet_nickname=小美&&pet_owner=1&&pet_type=美短&&pet_weight=20&&pet_sex=female&&pet_birth=2010-01-02" 127.0.0.1:3000/pet
//
// curl -X POST --data "user_id=4&&pet_id=4" 127.0.0.1:3000/user_and_pet
//
// curl -X POST --data "walk_stime=2010-01-02 00:00:11&&walk_etime=2010-01-02 00:00:11&&walk_pet=1" 127.0.0.1:3000/walk
//
// curl -X POST --data "com_time=2010-01-02&&com_user=4&&com_walk=4" 127.0.0.1:3000/comment
//
// curl -X POST --data "hs_time=2010-01-02 00:00:11&&hs_user=4&&hs_content=text4" 127.0.0.1:3000/hotspot
//
// curl -X POST --data "user_id=4&&hs_id=4" 127.0.0.1:3000/user_and_hotspot
//
// curl -X POST --data "good_name=猫粮4&&good_price=400&&good_count=10&&good_info=还行" 127.0.0.1:3000/good
