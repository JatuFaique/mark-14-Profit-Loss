var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);
    
    calculateProfitLoss(ip,qty,cp);
    
}

submitBtn.addEventListener('click', submitHandler);

function showOutput(message){
    /* switch (status) {
        case 'PROFIT':
            outputBox.innerHTML=message;
            break;
        case 'LOSS':
            outputBox.innerHTML = message;
            break;
        case ''
    
        default:
            break;
    } */
    
    outputBox.innerHTML=message

}



function calculateProfitLoss(initialPrice,stocksQuantity,currentPrice){
    if(initialPrice>currentPrice){
        var loss = (initialPrice - currentPrice)*stocksQuantity;
        var losspercentage = (loss/initialPrice) * 100;

        showOutput(`Loss ${loss} and loss percent ${losspercentage}`)
        console.log(`Loss ${loss} and loss percent ${losspercentage}`)


    }
    else if (initialPrice<currentPrice){
        var profit = (currentPrice-initialPrice)*stocksQuantity;
        var profitpercentage = (profit/initialPrice) * 100;

        showOutput(`Profit ${profit} and profit percent ${profitpercentage}`)

    }
    else{
        showOutput(`No pain No Gain`)
    }
}

