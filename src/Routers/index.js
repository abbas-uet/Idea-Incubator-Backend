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
const userRoutes = require('./User');
//Mentor
const mentorRoutes=require('./Mentor');
//Industry
const industryRoutes = require('./Idustry');
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
//Ideas
const ideasRoutes=require('./Idea/ideas');
//Asset
const assetRoutes=require('./Assets/assets');

//Zoom
const zoomRoutes=require('./Zoom/Zoom');










router.use('/currency_units',currencyUnitRoutes);

router.use('/department_admins',departmentAdminsRoutes);

router.use('/email_promos',emailsPromoRoutes);

router.use('/promo_codes',promoCodeRoutes);

router.use('/subscription_promos',subscriptionPromoRoutes);

router.use('/files',filesRoutes);

router.use('/super_admins',superAdminRoutes);

router.use('/admins',adminsRoutes);

router.use('/departments',departmentRoutes);

router.use('/department_admins',departmentAdminsRoutes);

router.use('/invoices',invoicesRoutes);

router.use('/subscriptions',subscriptionRoutes);

router.use('/users',userRoutes);

router.use('/mentors',mentorRoutes);

router.use('/industrys',industryRoutes);

router.use('/talents',talentRoutes);

router.use('/ideas',ideasRoutes);

router.use('/assets',assetRoutes);

router.use('/zoom',zoomRoutes);

module.exports = router;
