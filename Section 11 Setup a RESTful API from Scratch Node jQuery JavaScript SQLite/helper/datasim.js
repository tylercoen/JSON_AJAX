const data = {
  users: [
    { user: "admin", pass: "password", id: 1 },
    {
      user: "admin1",
      pass: "password2",
      id: 2,
    },
  ],
};

function getRow(id) {
  for (let item of data.users) {
    if (item.id == id) return item;
  }
  return false;
}

const findID = function (users, id) {
  return users.indexOf(getRow(id));
};
exports.data = data;
exports.getRow = getRow;
exports.findID = findID;
