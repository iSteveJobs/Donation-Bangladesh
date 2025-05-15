document
  .getElementById("btn-donation-now-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniDonationAmount = getInput("feni-donation-amount");

    const feniAvailableBalance = getText("feni-available-balance");

    const availableBalance = getText("available-balance");

    const nowAvailableBalance = availableBalance - feniDonationAmount;

    document.getElementById("available-balance").innerText =
      nowAvailableBalance;

    const nowFeniAvailableBalance = feniAvailableBalance + feniDonationAmount;

    document.getElementById("feni-available-balance").innerText =
      nowFeniAvailableBalance;

    const titleFoodFeni = document.getElementById("title-flood-feni").innerText;

    // start,, adding history button

    const div = document.createElement("div");
    div.innerHTML = `
       <p class = "mt-5 lg:ml-72 font-bold text-black"> ${feniDonationAmount} Taka is ${titleFoodFeni} </p>
       
       <p class = "text-gray-500 lg:ml-72" id="currentDate">Loading...</p>

      `;
    const historyContainer = document.getElementById("history-container");

    historyContainer.appendChild(div);

    // showing current date
    document.getElementById("currentDate").textContent = "Date : " + new Date();

    // end,, adding history button
  });
