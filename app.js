
// BUDGET CONTROLLER
var budgetController = (function() {

  // some code

  })();


// UI CONTROLLER
var UIController = (function() {

  return {
    getinput: function() {
      return {
      type: document.querySelector('.add__type').value, // Will be either inc or exp
      description: document.querySelector('.add__description').value,
      value: document.querySelector('.add_value').value;
      };
    };
  };

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl. UICtrl) {

  var ctrlAddItem = function() {
    // 1. Get the filed input data
    var input = UICtrl.getInput();


    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);

