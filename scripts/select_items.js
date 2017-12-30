const { query } = require('../util/db');

let selectItems = async function(tableName, data) {
  console.log(tableName);
  let sql = '';
  switch (tableName) {
    case 'hotspot':
      if (data.page != null) {
        sql = `SELECT * FROM \`hotspot\` WHERE hs_id <= (SELECT COUNT(*) FROM \`hotspot\`)- ${data.page}*20 ORDER BY hs_id DESC LIMIT 20`;
      } else if (data.pet_id != null) {
        sql = `SELECT DISTINCT * FROM \`hotspot\` LEFT JOIN pet_and_hotspot ON hotspot.hs_id=pet_and_hotspot.hs_id WHERE pet_id = ${data.pet_id}`;
      } else {
        sql = `SELECT * FROM \`hotspot\` ORDER BY \`hs_id\` DESC LIMIT 20`;
      }
      break;
    case 'comment':
      sql = `SELECT * FROM \`comment\` WHERE com_hs = ${data.hs_id}`;
      break;
    case 'pet':
      if (data.user_id != null) {
        sql = `SELECT * FROM \`pet\` WHERE pet_owner = ${data.user_id}`;
      } else {
        sql = `
          SELECT DISTINCT * FROM \`pet\` LEFT JOIN (SELECT pet_id, hs_id FROM \`pet_and_hotspot\`)AS joinTable ON pet.pet_id=joinTable.pet_id WHERE hs_id = ${data.hs_id}
        `
      }
      break;
    default:
    sql = `SELECT * FROM ${tableName}`;

  }

  // if (tableName == 'hotspot') {
  //   if (data.page != null) {
  //     sql = `SELECT * FROM \`hotspot\` WHERE hs_id <= (SELECT COUNT(*) FROM \`hotspot\`)- ${data.page}*20 ORDER BY hs_id DESC LIMIT 20`;
  //   } else if (data.pet_id != null) {
  //     sql = `SELECT * FROM \`hotspot\` LEFT JOIN pet_and_hotspot ON hotspot.hs_id=pet_and_hotspot.hs_id WHERE pet_id = ${data.pet_id}`;
  //   } else {
  //     sql = `SELECT * FROM \`hotspot\` ORDER BY \`hs_id\` DESC LIMIT 20`;
  //   }
  // } else if (tableName == 'comment') {
  //   sql = `SELECT * FROM \`comment\` WHERE com_hs = ${data.hs_id}`;
  // } else {
  //   sql = `SELECT * FROM ${tableName}`;
  //
  // }
  try {
    console.log(sql);
    let dataList = await query( sql )
    return dataList;
  } catch (e) {
    return e;
  } finally {

  }
}


module.exports = {
	selectItems
};



//SELECT * FROM `hotspot` ORDER BY `hs_id` DESC LIMIT 20
//SELECT * FROM `hotspot` LEFT JOIN pet_and_hotspot ON hotspot.hs_id=pet_and_hotspot.hs_id
