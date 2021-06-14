const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/products', ctrl.get_products );

router.get('/products/write', ctrl.get_products_write ); 

router.post('/products/write', ctrl.post_products_write ); 

//get으로 URL을 만들어주자
router.get('/products/detail/:id', ctrl.get_products_detail);



router.get('/products/edit/:id', ctrl.get_products_edit ); //→수정하기에서 폼이 채워져 있다.

router.post('/products/edit/:id', ctrl.post_products_edit ); //→수정하기에서 폼이 채워져 있다.

router.get('/products/delete/:id', ctrl.get_products_delete );


module.exports = router;
