const User = ( Sequelize, DataTypes ) => {

    const model = Sequelize.define(
        'signup',
        {
            id: {
                type: DataTypes.INTEGER, // INTERGER => int의 문법이다
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name: { 
                type: DataTypes.STRING(10), // STRING  => varchar의 문법이다
                allowNull : false,
            },
            password: {
                type: DataTypes.TEXT('medium') // TEXT('medium') => mediumtext의 문법이다.
            },
            email: {
                type: DataTypes.STRING(20),
                allowNull : false,
            }
        },
        {
            timestamps: false, // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: 'signup',
            freezeTableNmae: true, // 시퀄라이즈는 모든모델에 자동으로 s를 붙이려고 한다 그래서 테이블이름을 내가 만든걸로 고정하겠다 .
        }
        
    );
    return model;
}


module.exports = User;