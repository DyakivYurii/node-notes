const bcrypt = require('bcrypt');

const hashingPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const checkPassword = async (currentPassword, hashedPassword) => {
  return await bcrypt.compare(currentPassword, hashedPassword);
};

console.log(
  hashingPassword('MyPassword')
    .then((result) => {
      checkPassword(`MyPassword`, result)
        .then((result) => {
          console.log(`Compared element:`, result);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    })
);
