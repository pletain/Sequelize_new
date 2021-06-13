const models = require('../../models');

exports.get_products = ( _ , res) => {
    models.Products.findAll({

    }).then( (products) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render( 'admin/products.html' ,{ products : products });
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body);
	    models.Products.create({ 
        name : req.body.name, //body-parser로 날아온 name 정보가 들어감
        price : req.body.price , //body-parser로 날아온 price 정보가 들어감
        description : req.body.description //body-parser로 날아온 description 정보가 들어감
    }).then( () => { //callback 함수 처리
        res.redirect('/admin/products');
    });
	
	 models.Products.create(req.body).then( () => { //callback 함수 처리
        models.Products.create(req.body).then( () => { //callback 함수 처리
			res.redirect('/admin/products'); // sequelize로 저장 후, 다시 main 페이지로 redirect 시켜준다.
    });
    });
	
}