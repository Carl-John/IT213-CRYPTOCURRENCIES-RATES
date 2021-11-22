class CryptoAPI {
    //Query the rest of API with a currency and cryptocurrency

    async queryAPI(currency, cryptocurrency) {
        //Query the URL
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        //Return as JSON
        const result = await url.json();

        //Return the Object
        return {
            result
        }

    }

    //Get all the Currencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        //Return as a JSON
        const cryptoCurrencies = await url.json();

        //Return the Object
        return {
            cryptoCurrencies
        }
    }
}