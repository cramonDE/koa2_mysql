const { query } = require('../util/db');

let deleteItems = async function(tableName, data) {
  let sql = ``;
	console.log(tableName);
  switch (tableName) {
    case 'hotspot':
      sql = `
        DELETE FROM ${tableName} WHERE hs_id = '${data.hs_id}' ;
      `;
      break;
    case 'comment':
			sql = `
				DELETE FROM ${tableName} WHERE com_id = '${data.com_id}' ;
			`
      break;

    default:


  }

// DELETE FROM Person WHERE LastName = 'Wilson'

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
	deleteItems
};

// //
//
// curl -X DElETE --data "com_id=1" 127.0.0.1:3000/comment
//
// curl -X DElETE --data "hs_id=1" 127.0.0.1:3000/hotspot
