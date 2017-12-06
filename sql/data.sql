CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(30),
  `password` varchar(150),
  `user_nickname` varchar(30),
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `pet` (
  `pet_id` int(32) NOT NULL AUTO_INCREMENT,
  `pet_nickname` varchar(30),
  `pet_owner` varchar(30),
  `pet_type` varchar(30),
  PRIMARY KEY (`pet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `walk` (
  `walk_stime` datetime,
  `walk_etime` datetime,
  `walk_pet` int(32),
  `walk_id` int(32) NOT NULL AUTO_INCREMENT,
  CONSTRAINT FOREIGN KEY (`walk_pet`) REFERENCES `pet`(`pet_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  PRIMARY KEY (`walk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `comment` (
  `com_time` datetime,
  `com_user` varchar(30),
  `com_walk` int(32),
  `com_id` int(32) NOT NULL AUTO_INCREMENT,
  CONSTRAINT FOREIGN KEY (`com_user`) REFERENCES `user`(`username`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (`com_walk`) REFERENCES `walk`(`walk_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  PRIMARY KEY (`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `good` (
  `good_name` varchar(30),
  `good_price` varchar(150),
  `good_id` int(32) NOT NULL AUTO_INCREMENT,
  `good_count` int(32),
  `good_info` varchar(30),
  PRIMARY KEY (`good_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
