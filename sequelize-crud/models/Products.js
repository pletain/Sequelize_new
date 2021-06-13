module.exports = function(sequelize, DataTypes){
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // primaryKey와 autoIncrement로 자동으로 1씩 증가한다.
            name : { type: DataTypes.STRING }, //제품 이름
            price : { type: DataTypes.INTEGER }, //제품 가격
            description : { type: DataTypes.TEXT } //제품에 대한 설명
        }
    );
    return Products;
}