const { query } = require('../util/db');

let selectItems = async function(tableName) {
  let sql = `SELECT * FROM ${tableName}`;
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
	selectItems
};
