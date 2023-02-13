var Bee = function() {
  //create the bee class

  //call the superclass Grub
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//create a bee prototype
//point it to the grub prototype
Bee.prototype = Object.create(Grub.prototype);

//create a constructor and set it to the grub constructor
Bee.prototype.constructor = Bee;


