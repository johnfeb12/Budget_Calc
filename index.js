//Array to pick the date for the month

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const d = new Date();

//Specific Style date

const month = monthNames[d.getMonth()];
const year = d.getFullYear();
const date = `${month} ${year}`

document.querySelector('.date').textContent = date;


//Set up variables to hold income and expenses 

let income = 0;
let expenses = 0;



//on click the application starts

document.querySelector('.submit').addEventListener('click', function(e){

    e.preventDefault()

    const choice = document.querySelector('.select').value;
    const description = document.querySelector('.description').value;
    const amount = eval(document.querySelector('.amount').value);
    
    //if selection is equal to income then the function runs

    if(choice === "Income"){
        //sets up the income variable 
       income = parseInt(income) + amount;
        document.querySelector('.incomeNumber').textContent = `+${income}`;
        // console.log(income);

        //function to remove entry
        const getValue = function (e) {
            income = income - newDiv.value
            document.querySelector('.incomeNumber').textContent = `+${income}`;
            document.querySelector('.Amount').textContent = `$ ${income - expenses}`;
            this.remove()
        }

        //creates dive to hold info

        const mainDiv = document.querySelector('.incomeArea')
        const newDiv = document.createElement('div')
        newDiv.classList = 'testDiv row'
        newDiv.value = amount
        newDiv.onclick = getValue


        
        //Description from input

        const descrip = document.createElement('div')
        descrip.classList = 'descrip col'
        descrip.textContent = description
        newDiv.appendChild(descrip)

        //Date added 
        const dateWhen = document.createElement('div')
        dateWhen.classList = 'Date col'
        dateWhen.textContent = date
        newDiv.appendChild(dateWhen)

        //Amount from input
        const amount1 = document.createElement('div')
        amount1.classList = 'amount1 col'
        amount1.textContent = `$ +${amount}`
        newDiv.appendChild(amount1)


        mainDiv.appendChild(newDiv)

        document.querySelector('.Amount').textContent = `$ ${income - expenses}`;


        
    }else if(choice === 'expense'){
        expenses = parseInt(expenses) + amount;
        document.querySelector('.expenseNumber').textContent = `-${expenses}`;

        //function to remove entry

        const getValue = function (e) {
            expenses = expenses - newDivExp.value
            document.querySelector('.expenseNumber').textContent = `-${expenses}`;
            document.querySelector('.Amount').textContent = `$ ${income - expenses}`;
            this.remove()
        }

        //creates div for info 

        const secondDiv = document.querySelector('.expenseArea')
        const newDivExp = document.createElement('div')
        newDivExp.classList = 'testDiv row'
        newDivExp.value = amount
        newDivExp.onclick = getValue
       
        //description from input

        const descrip = document.createElement('div')
        descrip.classList = 'descrip col-md-4'
        descrip.textContent = description
        newDivExp.appendChild(descrip)

        //date when created

        const dateWhen = document.createElement('div')
        dateWhen.classList = 'Date col-md-4'
        dateWhen.textContent = date
        newDivExp.appendChild(dateWhen)

        //amount from input

        const amountExp = document.createElement('div')
        amountExp.classList = 'amount1 col-md-4'
        amountExp.textContent = `$ -${amount}`
        newDivExp.appendChild(amountExp)

        secondDiv.appendChild(newDivExp)

        document.querySelector('.Amount').textContent = `$ ${income - expenses}`;
    }

    // console.log(choice,description,amount);
})




