CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(32) NOT NULL AUTO_INCREMENT,
  `password` varchar(150),
  `user_nickname` varchar(30),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE IF NOT EXISTS `pet` (
  `pet_id` int(32) NOT NULL AUTO_INCREMENT,
  `pet_nickname` varchar(30),
  `pet_owner` int(32),
  `pet_type` varchar(30),
  `pet_weight` int(32),
  `pet_sex` varchar(30),
  `pet_birth` datetime,
  CONSTRAINT FOREIGN KEY (`pet_owner`) REFERENCES `user`(`user_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  PRIMARY KEY (`pet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `user_and_pet` (
  `like_id` int(32) NOT NULL AUTO_INCREMENT,
  `user_id` int(32) NOT NULL ,
  `pet_id` int(32) NOT NULL ,
  PRIMARY KEY (`like_id`),
  CONSTRAINT FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (`pet_id`) REFERENCES `pet`(`pet_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE
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
  `com_user` int(32),
  `com_walk` int(32),
  `com_id` int(32) NOT NULL AUTO_INCREMENT,
  CONSTRAINT FOREIGN KEY (`com_user`) REFERENCES `user`(`user_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (`com_walk`) REFERENCES `walk`(`walk_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  PRIMARY KEY (`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `hotspot` (
  `hs_time` datetime,
  `hs_user` int(32),
  `hs_content` varchar(30),
  `hs_id` int(32) NOT NULL AUTO_INCREMENT,
  CONSTRAINT FOREIGN KEY (`hs_user`) REFERENCES `user`(`user_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  PRIMARY KEY (`hs_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `user_and_hotspot` (
  `like_id` int(32) NOT NULL AUTO_INCREMENT,
  `user_id` int(32) NOT NULL ,
  `hs_id` int(32) NOT NULL ,
  PRIMARY KEY (`like_id`),
  CONSTRAINT FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE,
  CONSTRAINT FOREIGN KEY (`hs_id`) REFERENCES `hotspot`(`hs_id`)
  ON DELETE  RESTRICT  ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `good` (
  `good_name` varchar(30),
  `good_price` varchar(150),
  `good_id` int(32) NOT NULL AUTO_INCREMENT,
  `good_count` int(32),
  `good_info` varchar(30),
  PRIMARY KEY (`good_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
