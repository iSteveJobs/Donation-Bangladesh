// goto blog page
document.getElementById("btn-blog").addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "/blog.html";
});

// show donation page, remove history page
document
  .getElementById("btn-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection("hidden-donation");

    //start: change bg color for button
    document.getElementById("btn-history").classList.add("bg-white");

    document.getElementById("btn-donation").classList.remove("bg-white");

    document.getElementById("btn-donation").classList.add("bg-[#B4F461]");
    //end: change bg color for button
  });

// show history page, remove donation page
document
  .getElementById("btn-history")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection("hidden-history");

    //start: change bg color for button
    document.getElementById("btn-donation").classList.add("bg-white");

    document.getElementById("btn-history").classList.remove("bg-white");

    document.getElementById("btn-history").classList.add("bg-[#B4F461]");
    //end: change bg color for history button
  });
