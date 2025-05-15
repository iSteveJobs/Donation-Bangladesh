function getInput(id) {
  return parseFloat(document.getElementById(id).value);
}

function getText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function showSection(id) {
  // hide all
  document.getElementById("hidden-donation").classList.add("hidden");

  document.getElementById("hidden-history").classList.add("hidden");

  // how required section
  document.getElementById(id).classList.remove("hidden");
}
