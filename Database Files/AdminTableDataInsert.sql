

/* Inserting into Super admin table */
insert into superadmin(username,password,email,fullname) values('abbasali','123','ali7956710@gmail.com','Abbas Ali');
insert into superadmin(username,password,email,fullname) values('sehar','123','ali7956710@gmail.com','Sehar Asghar');
insert into superadmin(username,password,email,fullname) values('bisma','123','ali7956710@gmail.com','Bisma Asghar');
insert into superadmin(username,password,email,fullname) values('noor','123','ali7956710@gmail.com','Noor');


/* Inserting into admin table */
insert into admin(username,password,fullname) values('abbasali','123','Abbas Ali');
insert into admin(username,password,fullname) values('sehar','123','Sehar Asghar');
insert into admin(username,password,fullname) values('bisma','123','Bisma Asghar');
insert into admin(username,passwordinvoice,fullname) values('noor','123','Noor');


/* inserting into department table*/

insert into department(departmentname,admins) values('CS',1);
insert into department(departmentname,admins) values('EE',1);
insert into department(departmentname,admins) values('SE',1);


/* adding the admin to department*/
insert into departmentadmin(departmentId,adminId) values(1,1);
insert into departmentadmin(departmentId,adminId) values(2,3);
insert into departmentadmin(departmentId,adminId) values(3,3);


/*Inserting the usdepartmenters */
insert into user(username,password,email,joindate,fullname) values('abbasali','123','ali7956710@gmail.com',current_date(),'Abbas Ali');
insert into user(username,password,email,joindate,fullname) values('sehar','123','ali56710@gmail.com',current_date(),'Sehar Asghar');
insert into user(username,password,email,joindate,fullname) values('bisma','123','ali796710@gmail.com',current_date(),'Bisma Asghar');
insert into user(username,password,email,joindate,fullname) values('noor','123','ali795710@gmail.com',current_date(),'Noor');


/* Inseting the Invoices */
insert into invoice(createdon,duedate,paymentMethod,ammount,status,userId) values(current_timestamp(),current_timestamp(),'online',546,'confirmed',1);
insert into invoice(createdon,duedate,paymentMethod,ammount,status,userId) values(current_timestamp(),current_timestamp(),'online',6,'confirmed',1);
insert into invoice(createdon,duedate,paymentMethod,ammount,status,userId) values(current_timestamp(),current_timestamp(),'online',46,'confirmed',1);
insert into invoice(createdon,duedate,paymentMethod,ammount,status,userId) values(current_timestamp(),current_timestamp(),'online',56,'confirmed',1);


/* inserting into Currency Unit */
insert into currencyunit(name) values('$');
insert into currencyunit(name) values('PKR');
insert into currencyunit(name) values('EURO');


/* Inserting into subscription */
insert into subscription(planname,type,billingperiod,ammount,unit) values('Standard','Basic','Monthly',427,1);
insert into subscription(planname,type,billingperiod,ammount,unit) values('Gold','Pro','Monthly',427,2);
insert into subscription(planname,type,billingperiod,ammount,unit) values('Standard','Standard','Monthly',427,3);



/* Inserting into promocode */
insert into promocode(name,discount,unit,expirydate) values('Abc',40,1,current_timestamp());
insert into promocode(name,discount,unit,expirydate) values('bc',4,2,current_timestamp());
insert into promocode(name,discount,unit,expirydate) values('Ac',23,2,current_timestamp());


/* Inserting into emailsPromo */
insert into emailspromo(emailid,promoid)values('ali7956710@gmail.com',1);
insert into emailspromo(emailid,promoid)values('ali796710@gmail.com',1);
insert into emailspromo(emailid,promoid)values('ali796710@gmail.com',1);


/* Inserting promos into subscription */
insert into subscriptionpromo(subscriptionId,promoId) values(1,1);
insert into subscriptionpromo(subscriptionId,promoId) values(1,2);
insert into subscriptionpromo(subscriptionId,promoId) values(2,1);
insert into subscriptionpromo(subscriptionId,promoId) values(3,3);
