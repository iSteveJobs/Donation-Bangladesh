document
  .getElementById("btn-donation-now-quota")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaDonationAmount = getInput("quota-donation-amount");

    const quotaAvailableBalance = getText("quota-available-balance");

    const availableBalance = getText("available-balance");

    const nowAvailableBalance = availableBalance - quotaDonationAmount;

    document.getElementById("available-balance").innerText =
      nowAvailableBalance;

    const nowQuotaAvailableBalance = quotaAvailableBalance + quotaDonationAmount;

    document.getElementById("quota-available-balance").innerText =
      nowQuotaAvailableBalance;

    const titleFoodQuota = document.getElementById("title-quota").innerText;

    // start,, adding history button

    const div = document.createElement("div");
    div.innerHTML = `
       <p class = "mt-5 lg:ml-72 font-bold text-black"> ${quotaDonationAmount} Taka is ${titleFoodQuota} </p>
       
       <p class = "text-gray-500 lg:ml-72" id="currentDate">Loading...</p>

      `;
    const historyContainer = document.getElementById("history-container");

    historyContainer.appendChild(div);

    // showing current date
    document.getElementById("currentDate").textContent = "Date : " + new Date();

    // end,, adding history button
  });
