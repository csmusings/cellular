
array = []
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops

$(document).ready(function() {
  function drawArray(){
      for(var x = 0; x < 50; x++) {
        array.push([])
          for(var y = 0; y < 50; y++) {
              var unit = $("<div class='unit'></div>");
              unit.text(y)
              unit.addClass("x"+x +"y" +y)
              unit.attr("activated","nul")
              array[x].push(unit)
              unit.appendTo('#container');
          }

      }
    array[0][25].attr("activated","black");

  // rule = array[0].map(function (v,i) {
  //   return v.attr("activated")
  // })
  // console.log(rule);

  }
  // row = array.slice(0,10);
  // console.log(row);

  drawArray();
  function filler() {
    for (rowIteration = 1; rowIteration < array.length; rowIteration++)
    {
        previousRow = array[rowIteration-1]
      
        for (cellIteration = 0; cellIteration < array.length; cellIteration++)
        {
          // rule = previousRow.slice(cellIteration,cellIteration+3)
          rule = previousRow.slice(cellIteration-1,cellIteration+2).map(function (v,i) {
            return v.attr("activated")
          })

          if ((!rule.equals(['e','e','e']) && rule.length === 3))
          {

            if (rule.equals(['nul','black','nul']))
              {
                array[rowIteration][cellIteration].addClass("black")
               array[rowIteration][cellIteration].attr("activated","black")
              }

            if (rule.equals(['nul','nul','black'])){
                array[rowIteration][cellIteration].addClass("black")
               array[rowIteration][cellIteration].attr("activated","black")
            }

          }
        }

    }
  // console.log("rule is ", rule);
  }



});



//
//
//
// Array.prototype.equals = function (array) {
//     // if the other array is a falsy value, return
//     if (!array)
//         return false;
//
//     // compare lengths - can save a lot of time
//     if (this.length != array.length)
//         return false;
//
//     for (var i = 0, l=this.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (this[i] instanceof Array && array[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!this[i].equals(array[i]))
//                 return false;
//         }
//         else if (this[i] != array[i]) {
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;
//         }
//     }
//     return true;
// }
// // Hide method from for-in loops
// Object.defineProperty(Array.prototype, "equals", {enumerable: false});
