var MakeSquareDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');
  this.pulse();

};

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;
MakeSquareDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeSquareDancer.prototype.pulse = function() {
  setTimeout(this.pulse.bind(this), 1000);
  if (this.$node.hasClass('expand')) {
    this.$node.removeClass('expand');
  } else{
    this.$node.addClass('expand');
  }

};