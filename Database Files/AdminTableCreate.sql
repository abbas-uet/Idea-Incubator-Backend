
/* Creating the Database of Idea Incubator*/
create database IdeaIncubator;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';



/* Creting Super AdminRoutes Table */
create table superAdmin(
id int primary key auto_increment not null,
username varchar(30) unique not null,
password varchar(30) not null,
email varchar(30) not null,
fullname varchar(30) not null
);

/* Creating AdminRoutes Table */
create table admin(
id int primary key auto_increment not null,
username varchar(30) unique not null,
password varchar(30) not null,
fullname varchar(30) not null
);


/* creating Department Table*/
create table department(
id int primary key auto_increment not null,
departmentname varchar(30) not null,
admins int 
);

/* Creating Department assigned Admins*/
create table departmentAdmin(
id int primary key auto_increment not null,
departmentId int not null,
adminId int not null,
foreign key(departmentId) references department(id),
foreign key(adminId) references admin(id)
);


/* Creating UserRoutes Table*/
create table user(
userid int primary key auto_increment not null,
username varchar(30) unique not null,
password varchar(30) not null,
joindate date ,
email varchar(30) not null
);


/* Creating Invoice Table */
create table invoice (
invoiceid varchar(10) primary key not null,
createdon datetime not null,
duedate datetime,
paymentMethod varchar(30),
ammount int,
status varchar(15),
userid int,
foreign key (userid) references user(userid)
);






/* Creating Table Currency Unit*/
create table currencyunit(
id int primary key auto_increment not null,
name varchar(10)
);


/* creating PromoCode table*/

create table promocode(
promoId int primary key auto_increment not null,
name varchar(30) not null,
discount int not null,
unit int,
expiraydate datetime not null,
foreign key(unit) references currencyunit(id)
);


/* Creating Emails Allowed on Promo Code table */
create table emailsPromo(
id int primary key auto_increment,
emailid varchar(30) not null,
promoid int,
foreign key (promoid)references promocode(promoId),
foreign key (emailid)references user(email)
);

/* Creating Subscription Table*/
create table subscription(
id int primary key auto_increment not null,
planname varchar(20) not null,
type enum('Basic','Standard','Pro','Plus') not null,
billingperiod enum('Monthly','6 Months','Yearly'),
ammount int not null,
unit int,
foreign key(unit) references currencyunit(id)
);


/*Promo Code applied on Subscription*/
create table subscriptionPromo(
id int primary key auto_increment not null,
subscriptionId int,
promoId int,
foreign key(subscriptionId) references subscription(id),
foreign key(promoId) references promocode(promoid)
);











