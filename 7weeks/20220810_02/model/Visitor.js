const Visitor = ( Sequelize, DataTypes ) => {
    // Sequelize 는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize

    const model = Sequelize.define(
        'visitor', //visitor라는 테이블에서 컬럼은 id,name,comment
        {
            // CREATE ~~~ ( id int not null auto_increment primary key )
            id: {
                type: DataTypes.INTEGER, // INTERGER => int의 문법이다
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            // name varchar(10) not null
            name: { 
                type: DataTypes.STRING(10), // STRING  => varchar의 문법이다
                allowNull : false,
                primaryKey : true,
            },
            // comment mediumtext
            comment: {
                type: DataTypes.TEXT('medium') // TEXT('medium') => mediumtext의 문법이다.
            }
        },
        // (3)모델옵션정의
        {
            timestamps: false, // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: 'visitor',
            freezeTableNmae: true, // 시퀄라이즈는 모든모델에 자동으로 s를 붙이려고 한다 그래서 테이블이름을 내가 만든걸로 고정하겠다 .
        }
        
    );
    return model;
}


module.exports = Visitor;