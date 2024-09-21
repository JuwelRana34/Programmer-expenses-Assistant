// common input function
function inputValue(id) {
  return parseFloat(document.getElementById(id).value);
}

// target Element

document.getElementById("calculate").addEventListener("click", () => {
  const income = inputValue("income");
  const software = inputValue("software");
  const courses = inputValue("courses");
  const internet = inputValue("internet");

  if (
    !isNaN(income) &&
    !isNaN(software) &&
    !isNaN(courses) &&
    !isNaN(internet)
  ) {
    const totalExpanses = software + courses + internet;
    if (income > totalExpanses) {
      document.getElementById("totalExpenses").innerText =
        totalExpanses.toFixed(2);

      const balance = income - totalExpanses;
      document.getElementById("balance").innerText = balance;

      document.getElementById("balanceShowDiv").classList.remove("hidden");
    } else {
      alert("income less then expenses");
    }
  } else {
    alert("plese give valid input ");
  }
});

document.getElementById("savingCalculatebtn").addEventListener("click", () => {
  const income = inputValue("income");
  const software = inputValue("software");
  const courses = inputValue("courses");
  const internet = inputValue("internet");

  const balance = income - (software + courses + internet);

  const saving = inputValue("saving");
  const savingFinal = (balance * saving) / 100;
  document.getElementById("SavingShow").innerText = savingFinal;

  const afterSavingBalance = balance - savingFinal;
  // document.getElementById("balance").innerText =

  document.getElementById("RemainingBalance").innerText = afterSavingBalance;
});


// btn 

document.getElementById("history").addEventListener('click',() =>{
    document.getElementById("history").classList.add('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )
    document.getElementById("Assistant").classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )

    document.getElementById('allInput').classList.add('hidden') 
    document.getElementById('calculate').classList.add('hidden') 
}
)
document.getElementById("Assistant").addEventListener('click',() =>{
    document.getElementById("history").classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )
    document.getElementById("Assistant").classList.add('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )

    document.getElementById('allInput').classList.remove('hidden') 
    document.getElementById('calculate').classList.remove('hidden') 
}
)