//delgetstei holbootoi module:
var uiController = (function () {
  console.log("hello from uiController");
})();

//financetai holbootoi module:
var financeController = (function () {
  console.log("hello from financeController");
})();

//Holbogch module:
var appController = (function (uiController, financeController) {})(
  uiController,
  financeController
);

// enter yumuu add darhad ajildag function:
var ctrlAddItem = function () {
  //btn darah uyed event barij awah
  document.querySelector(".add__btn").addEventListener("click", function () {
    console.log(".add__btn tovch daragdlaa");
  });
  //Enter tovch darsan uyed event barij awah
  document.addEventListener("keypress", function (event) {
    console.log("tovch daragdlaa");
    if (event.key === 32) {
      console.log("Enter daragdlaa");
    } else {
      console.log("Uur tovch darsan bn" + event.key);
    }
  });
};

//1. Oruulah ugugdliig delgetsees olj awna

//2. Olj awsan ugugdluudee web deeree tohiroh hesegt ni gargana
//4. Tusviig tootsno
//Etssiin uldegdel, tootsoog delgetsend gargana
