const countProps = function (obj) {
  console.log(Object.keys(obj).length);
};
countProps({});
countProps({ name: "Mango", age: 2 });
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
