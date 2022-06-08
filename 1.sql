create database dzy_users;
use dzy_users;
create table users
(
    id       int primary key auto_increment,
    username varchar(32) not null,
    password varchar(32) not null
);
insert into users values(1,'admin','123456');