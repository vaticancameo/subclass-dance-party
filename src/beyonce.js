var Beyonce = function(top, left, timeBetweenSteps) {
  MakeSquareDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('beyonce');

};

Beyonce.prototype = Object.create(MakeSquareDancer.prototype);
Beyonce.prototype.constructor = Beyonce;

Beyonce.prototype.step = function() {
  this.oldStep();
  this.setPosition(Math.random() * $('body').height(), Math.random() * $('body').width());
}

Beyonce.prototype.collision = function() {
  
}; 