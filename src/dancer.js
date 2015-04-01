// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


};

MakeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // get positions of each dancer
    var pos = this.$node.offset();
    var x = pos.left;
    var y = pos.top;

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] !== this) {
        var otherPos = window.dancers[i].$node.offset();
        var otherX = otherPos.left;
        var otherY = otherPos.top;
        var distance = Math.sqrt(Math.pow((x - otherX),2)+Math.pow((y - otherY),2));
        console.log(distance);
        if ( distance < 100) {
          this.collision(x,y);
        }
      };
    } 
    // calculate distance of each dancer between the others using pythagorean theorem
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
MakeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
MakeDancer.prototype.lineUp = function(verticalAlign) {
  var top = this.$node.css('top');
  var left = this.$node.css('left');
  this.setPosition(verticalAlign, 100);
  setTimeout(this.setPosition.bind(this, top, left), 1000);
};

MakeDancer.prototype.collision = function(x, y) {
  console.log("in collision");
  this.$node.css ('background-image', "url('Nicki.jpg')");
  //this.setPosition(x,y);
}
//------------------------------------------------------
// Creates and returns a new dancer object that can step
/*var makeDancer = function(top, left, timeBetweenSteps){

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');


  dancer.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};*/