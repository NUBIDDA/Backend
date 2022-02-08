module.exports = (queryInterface, Sequelize) => {
  const user = queryInterface.define(
    "user",
    {
      nick: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  return user;
};
