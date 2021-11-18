// Instanciate the Classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

//Create the Variables

const form = document.getElementById('form');



//Add EventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Read Currencies
    const currencySelect = document.getElementById('currency').value;
    //Read Cryptocurrencies
    const cryptoCurrencySelect = document.getElementById(cryptocurrency).value;


    //Validate that the select has something
    if(currencySelect === '' || cryptoCurrencySelect === '') {
        //Display an error
        console.log('error');
    } else {
        console.log('succes');
    } 
    
})