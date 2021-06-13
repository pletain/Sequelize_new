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
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });
}

exports.get_products_detail = (req, res) =>{
	//URL 변하는 변수를 id로 정해놓음
	//req.params.id로 받을 수 있다.
	models.Products.findByPk(req.params.id).then( (product) =>{
		res.render( 'admin/detail.html', { product }); // product : product 와 같이 중간에 중복되는 게 있으면 { Product }로 써도 무방하다
	}) //models. 뒤에 모델명을 넣어줘야 한다. Products.js 끝에 return하는 이름과 일치한다.
	
}