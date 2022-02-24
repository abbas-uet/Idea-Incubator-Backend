const express = require('express');
const router = express.Router();



//superAdmins
const superAdminRoutes=require('./SuperAdmin/superadmins');
//admins
const adminsRoutes=require('./Admins/admins');
//departments
const departmentRoutes=require('./Departments/departments');
//invoices
const invoicesRoutes = require('./Invoices/invoices');
//subscriptions
const subscriptionRoutes=require('./Subscription/subscriptions');
//user
const userRoutes = require('./User/user');
//Mentor
const mentorRoutes=require('./Mentor/Mentor');
//Industry
const industryRoutes = require('./Idustry/industry');
//Talent
const talentRoutes = require('./Talent/talent');
//Currency Unit
const currencyUnitRoutes=require('./CurrencyUnit/currenyunit');
//Department Admin
const departmentAdminsRoutes=require('./DepartmentAdmin/departmentadmin');
//emailPromo
const emailsPromoRoutes=require('./EmailsPromo/emailspromo');
//PromoCode
const promoCodeRoutes = require('./PromoCode/promocode');
//Subscription Promo
const subscriptionPromoRoutes=require('./SubscriptionPromo/subscriptionpromo');
//Files
const filesRoutes=require('./Files/files');











router.use('/currency_unit',currencyUnitRoutes);

router.use('/department_admin',departmentAdminsRoutes);

router.use('/email_promo',emailsPromoRoutes);

router.use('/promo_code',promoCodeRoutes);

router.use('/subscription_promo',subscriptionPromoRoutes);

router.use('/files',filesRoutes);

router.use('/super_admins',superAdminRoutes);

router.use('/admins',adminsRoutes);

router.use('/departments',departmentRoutes);

router.use('/invoices',invoicesRoutes);

router.use('/subscriptions',subscriptionRoutes);

router.use('/users',userRoutes);

router.use('/mentors',mentorRoutes);

router.use('/industries',industryRoutes);

router.use('/talents',talentRoutes);

module.exports = router;
