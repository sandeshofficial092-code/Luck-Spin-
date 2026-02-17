let balance = 0;
let firstSpin = true;
let referralSpins = 0;

const rewardsFirst = [50, 70, 90];
const rewardsNormal = [0.5, 1, 2, 3, 5];

document.getElementById("refLink").value =
  window.location.href + "?ref=12345";

function unlockSpin() {
  document.getElementById("telegramGate").style.display = "none";
  document.getElementById("spinSection").classList.remove("hidden");
}

function spin() {
  let reward = 0;

  if (firstSpin) {
    reward = rewardsFirst[Math.floor(Math.random() * rewardsFirst.length)];
    firstSpin = false;
  } else if (referralSpins > 0) {
    reward = rewardsNormal[Math.floor(Math.random() * rewardsNormal.length)];
    referralSpins--;
    document.getElementById("refSpins").innerText = referralSpins;
  } else {
    alert("No spins left! Refer to get more spins.");
    return;
  }

  balance += reward;
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("result").innerText =
    "🎉 You won ₹" + reward;
}

function copyRef() {
  const ref = document.getElementById("refLink");
  ref.select();
  document.execCommand("copy");
  alert("Referral link copied!");
}

function withdraw() {
  if (balance >= 100) {
    document.getElementById("withdrawMsg").innerText =
      "✅ Withdrawal request submitted!";
    balance = 0;
    document.getElementById("balance").innerText = balance;
  } else {
    document.getElementById("withdrawMsg").innerText =
      "❌ Minimum ₹100 required!";
  }
}
