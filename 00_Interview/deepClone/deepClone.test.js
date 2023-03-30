const obj = {
  field1: 1,
  field2: undefined,
  field3: "ConardLi",
  field4: {
    child: "child",
    child2: {
      child2: "child2",
    },
  },
};
obj.obj = obj;
module.exports = obj;
