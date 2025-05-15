document
  .getElementById("btn-donation-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliDonationAmount = getInput("noakhali-donation-amount");

    const noakhaliAvailableBalance = getText("noakhali-available-balance");

    const availableBalance = getText("available-balance");

    const nowAvailableBalance = availableBalance - noakhaliDonationAmount;

    document.getElementById("available-balance").innerText =
      nowAvailableBalance;

    const nowNoakhaliAvailableBalance =
      noakhaliAvailableBalance + noakhaliDonationAmount;

    document.getElementById("noakhali-available-balance").innerText =
      nowNoakhaliAvailableBalance;

    const titleFoodNoakhali = document.getElementById(
      "title-flood-noakhali"
    ).innerText;

    // start,, adding history button

    const div = document.createElement("div");
    div.innerHTML = `
       <p class = "mt-5 lg:ml-72 font-bold text-black"> ${noakhaliDonationAmount} Taka is ${titleFoodNoakhali} </p>
       
       <p class = "text-gray-500 lg:ml-72" id="currentDate">Loading...</p>

      `;
    const historyContainer = document.getElementById("history-container");

    historyContainer.appendChild(div);

    // showing current date
    document.getElementById("currentDate").textContent = "Date : " + new Date();

    // end,, adding history button
  });
