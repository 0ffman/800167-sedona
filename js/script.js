var toggleButton = document.querySelector(".btn-search");
var searchForm = document.querySelector(".search-form");
var form = searchForm.querySelector("form");
var arrival = searchForm.querySelector("[name=arrival]");
var exit = searchForm.querySelector("[name=exit]");
var adult = searchForm.querySelector("[name=adult]");

toggleButton.addEventListener("click", function(evt) {
  if (searchForm.classList.contains("search-form-show")) {
      searchForm.classList.remove("search-form-show");
  } 
  else {
    searchForm.classList.add("search-form-show");
    arrival.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !exit.value || !adult.value ) {
      evt.preventDefault();
  }
  });