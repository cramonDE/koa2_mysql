const { query } = require('../util/db');

let initial = async function() {
	let init_sql = [];
	init_sql.push(`
	INSERT INTO \`user\` (username, password, user_nickname) VALUES ('甲同学', '1234', 'jiatongxue'), ('乙同学', '1234', 'jiatongxue'), ('丙同学', '1234', 'jiatongxue');
	`);
	init_sql.push(`
		INSERT INTO \`pet\` (pet_nickname, pet_owner, pet_type) VALUES ('小英','甲同学',"英短"), ('小橘','乙同学',"橘猫"), ('小耳','丙同学',"折耳");
	`)
	init_sql.push(`
		INSERT INTO \`walk\` (walk_stime, walk_etime, walk_pet) VALUES ('2010-01-02 00:00:00', '2010-01-02 00:00:11', "1"), ('2010-01-02 00:00:00', '2010-01-02 00:00:11', "2"), ('2010-01-02 00:00:00', '2010-01-02 00:00:11', "3");
	`)
	init_sql.push(`
		INSERT INTO \`comment\` (com_time, com_user, com_walk) VALUES ('2010-01-02', '甲同学', "1"), ('2010-01-02', '乙同学', "2"), ('2010-01-02', '丙同学', "3");
	`)
	init_sql.push(`
		INSERT INTO \`good\` (good_name, good_price, good_count, good_info) VALUES ('猫粮1', '100', "10", '还行'), ('猫粮2', '200', "10", '还行'), ('猫粮3', '300', "10", '还行');
	`)
	for (var i = 0; i < 5; i++) {
		try {
			await query( init_sql[i] )
		} catch (e) {
			console.log(e);
		} finally {

		}
	}
}

module.exports = {
	initial
};
