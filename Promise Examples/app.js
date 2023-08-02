const url = "https://swapi.dev/api/planets";
function fetchData() {
  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
