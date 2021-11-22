class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
    }
    //Prints the option for the form
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;

                //Build the <select> from the rest API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    //Add the options
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })
            })
    }

    //Prints a Message 2 parameters message and classes

    printMessage(message, className) {
        const div = document.createElement('div');
        
        //Add the Classes
        div.className = className;
        //Add the Message
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);

        //Remove the Message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    //Prints the result of the valuation/rate
    displayResult(result, currency) {
        
        //Read the currency
        let currencyName;
        currencyName = 'price_' + currency.toLowerCase();
        //Read the result from the object
        const value = result[currencyName];

        let HTMLTemplate = '';

        HTMLTemplate += `
            <div class="card cyan draken-3">
                <div class"card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result.name} from ${currency} is $ ${value}</p>

                </div>
            </div>
        `;

        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;
    }
}