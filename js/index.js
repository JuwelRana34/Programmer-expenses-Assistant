// common input function
function inputValue(id) {
  return parseFloat(document.getElementById(id).value);
}

// value 
var mainBalance 



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

      mainBalance = balance
      document.getElementById("balanceShowDiv").classList.remove("hidden");

      const div =document.createElement('div')
      div.innerHTML= `
        <div class="bg-blue-100 text-blue-500 p-3 my-2 rounded-md">
                  <p class="font-semibold"> ${(new Date).toLocaleDateString()}</p>
                  <h1 class="font-bold text-lg"> income: ${income}</h1>
                  <p>expenses:${totalExpanses} </p>
                  <p>balance: ${balance} </p>
              </div>
        `


    let transitionHistory = document.getElementById("transitionHistory")
      
    transitionHistory.insertBefore(div , transitionHistory.firstChild)
     




      document.getElementById("income").value = ''
      document.getElementById("software").value = ''
      document.getElementById("courses").value = ''
      document.getElementById("internet").value = ''
    } else {
      alert("income less then expenses");
    }
  } else {
    alert("plese give valid input ");
  }
});

document.getElementById("savingCalculatebtn").addEventListener("click", () => {
  // const income = inputValue("income");
  // const software = inputValue("software");
  // const courses = inputValue("courses");
  // const internet = inputValue("internet");

  // const balance = income - (software + courses + internet);

  const saving = inputValue("saving");
  // const savingFinal = (balance * saving) / 100;
  const savingFinal = (mainBalance * saving) / 100;
  if (savingFinal < mainBalance) {
    document.getElementById("SavingShow").innerText = savingFinal;

  // const afterSavingBalance = balance - savingFinal;
  const afterSavingBalance = mainBalance - savingFinal;

  document.getElementById("RemainingBalance").innerText = afterSavingBalance;
  document.getElementById("saving").value = ''
  }else{
      document.getElementById("saving").value = ''
    return alert("wrong input")
  }
});


// btn 

document.getElementById("history").addEventListener('click',() =>{
    document.getElementById("history").classList.add('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )
    document.getElementById("Assistant").classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )

    document.getElementById('allInput').classList.add('hidden') 
    document.getElementById('calculate').classList.add('hidden') 
    document.getElementById('savingDiv').classList.add('hidden') 
    document.getElementById('transitionHistory').classList.remove('hidden') 
}
)
document.getElementById("Assistant").addEventListener('click',() =>{
    document.getElementById("history").classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )
    document.getElementById("Assistant").classList.add('bg-gradient-to-r', 'from-blue-600', 'to-indigo-700' ,'text-white' )

    document.getElementById('allInput').classList.remove('hidden') 
    document.getElementById('calculate').classList.remove('hidden') 
    document.getElementById('savingDiv').classList.remove('hidden') 
    document.getElementById('transitionHistory').classList.add('hidden') 
     
}
)