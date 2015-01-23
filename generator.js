module.exports = {
  generate : function (amount) {
    var array = [];
    var arrayShuffle = [];
    amount = 1000;

    // if(amount === 1000){
      for(var i = 0; i <= amount; i++){
        var number = 0;
        
        number += i;

        array.push(number);

}
    //     //arrayShuffle = array[Math.floor(Math.random() * array.length)];
    //    //console.log(arrayShuffle);
    // }
    //     console.log(array);
    //    //return array;
      
      
    // // }

    var m = array.length;

    while(m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
};