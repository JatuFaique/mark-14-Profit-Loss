var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var cp = currentPrice.value;
    
    calculateProfitLoss(ip,qty,cp);
    
}

submitBtn.addEventListener('click', submitHandler);



function calculateProfitLoss(initialPrice,stocksQuantity,currentPrice){
    if(initialPrice>currentPrice){
        var loss = (initialPrice - currentPrice)*stocksQuantity;
        var losspercentage = (loss/initialPrice) * 100;

        console.log(`Loss ${loss} and loss percent ${losspercentage}`)
    }
    else{
        var profit = (currentPrice-initialPrice)*stocksQuantity;
        var profitpercentage = (profit/initialPrice) * 100;

        console.log(`Profit ${profit} and profit percent ${profitpercentage}`)

    }
}