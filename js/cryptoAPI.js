class CryptoAPI {


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