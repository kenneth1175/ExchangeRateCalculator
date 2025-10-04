function calculate() {
  fetch("items.json")
  .then((res) => res.json());
  .then(data)
}
calculate();
