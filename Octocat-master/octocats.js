//Write your constructor function below.
function Octocat(n,a){
  this.Name = n;
  this.Arms = a;
  this.Slap = function(){
    for(var b=0;b<this.Arms;b++){
      console.log("SLAP");
    }
  }

}


var Greg = new Octocat("Greg",8);
var Jack = new Octocat("Jack",69);
var Pabloescobar = new Octocat("Pablo Escobar",17);


Greg.Slap();
