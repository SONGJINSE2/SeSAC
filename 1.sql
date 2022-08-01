CREATE DATABASE sesac;
USE sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);

ALTER TABLE user DROP COLUMN birthday;
ALTER TABLE user ADD COLUMN birthday date not null;

DROP TABLE user;

DESC user;
show databases;
use sesac;
show tables;

CREATE TABLE user (
	id varchar(10) not null primary key ,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM( 'F', 'M', '' ) default '',
    birthday DATE not null,
    age int(3) not null default 0
);

use sesac;
show tables;
desc member;

ALTER TABLE member MODIFY id varchar(10);
ALTER TABLE member MODIFY COLUMN gender varchar(2) default '여';
ALTER TABLE member ADD interest varchar(100) null;
ALTER TABLE member DROP age;
ALTER TABLE member MODIFY COLUMN gender varchar(2) not null default '여';

INSERT INTO user (ID, name, birthday) VALUES('id1','홍길동','2022-08-01');
SELECT * FROM user;
INSERT INTO user VALUES('id3','송우준','2022-08-01');
INSERT INTO user (ID, birthday) VALUES('id3','2022-08-01');

SELECT * FROM user WHERE name='홍길동';
SELECT * FROM user WHERE name='홍길동' ORDER BY ID DESC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT * FROM user LIMIT 4;

SELECT name, birthday FROM user;

SELECT * FROM user WHERE name LIKE '%진세' ;
SELECT * FROM user ;


UPDATE user SET name='홍길동2', birthday='2022-07-31' WHERE ID != 'id2';
SELECT * FROM user;

DELETE FROM user WHERE ID='id2';

SELECT * FROM user;
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hong1234','8o4bkg','홍길동','M', '1990-01-31', '33');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('sexysung','87awjkdf','성춘향','F', '1992-03-31', '31');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('power70','qxur8sda','변사또','M', '1970-05-02', '53');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hanjo','jk48fn4','한조','M', '1984-10-18', '39');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('widowmaker','38ewifh3','위도우','F', '1976-06-27', '47');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('dvadva','k3f3ah','송하나','F', '2001-06-03', '22');
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('jungkrat','4ifha7f','정크랫','M', '1999-11-11', '24');

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id,name FROM user WHERE birthday LIKE '199%-%%-%%';
SELECT * FROM user WHERE birthday LIKE '%%%%-06-%%' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%-%%-%%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw='12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id='jungkrat';

SELECT * FROM user;

