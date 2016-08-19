module.exports = function(err) {
  console.log(err.toString());
  this.emit('end');
};
