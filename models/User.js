const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');


// Create the User model
class User extends Model {
  checkPassword(loginPw) {
    console.log(this.password)
    return bcrypt.compareSync(loginPw, this.password);
  }
  // email_type(email){
  // return this.email === email
  // }

}

// Defines a table called User
User.init(
  {
    // Defines the columns/fields for the User table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7],
      },
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    // adds a createdAt and updatedAt timestamps to the model
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
