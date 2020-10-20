const itemCosts = {"poloShirt" : 15, "mousePad" : 5, "sticker" : 1.5, "banner" : 12};
const code_to_Output = {"poloShirt" : "Polo Shirt", "mousePad" : "Mouse Pad", "sticker" : "Sticker", "banner" : "Banner"}
const numbersToCommaPattern = new RegExp(/\B(?=(\d{3})+(?!\d))/g)

var totalOrders = 0;
var totalExpenditures = 0;
var totalItems = {"poloShirt" : 0, "mousePad" : 0, "sticker" : 0, "banner" : 0};

var discountsPair = {"Freshman" : 1, "Sophomore" : 0.9, "Junior" : 0.9, "Senior" : 0.85};

var totalBrothers = 0
var totalSisters = 0

function calculate(poloShirtTxt, mousePadTxt, stickerTxt, bannerTxt){
    surveyForm = document.getElementsByName("surveyForm")[0];
    surveyInputs = surveyForm.getElementsByTagName("input");

    if (surveyInputs[0].checked){
        totalBrothers++;
    }

    if (surveyInputs[1].checked){
        totalSisters++;
    }

    discountsForm = document.getElementsByName("discountsForm")[0];
    discountInputs = discountsForm.getElementsByTagName("input");

    let checkedDiscountInput = null;
    for (let input in discountInputs){
        if (discountInputs[input].checked == true){
            checkedDiscountInput = discountInputs[input];
            break;
        }
    }

    if (checkedDiscountInput == null){
        alert("Select your grade.");
        return;
    }

    priceDiscount = discountsPair[checkedDiscountInput.value];

    let quantities = {"poloShirt" : poloShirtTxt.value, "mousePad" : mousePadTxt.value, "sticker" : stickerTxt.value, "banner" : bannerTxt.value};

    let originalCost = 0;
    let zeroQuantityItems = 0;
    //iterate over each item in the dict to get the cost
    for (let key in quantities){
        if (quantities[key] == ""){
            quantities[key] = 0;
        }

        if (quantities[key] == 0){
            zeroQuantityItems++;
        }

        //change from string to int
        quantities[key] = parseInt(quantities[key]);

        originalCost += itemCosts[key] * quantities[key];
        totalItems[key] += quantities[key];
    }
    
    //check if all items have a quantity of zero
    if (zeroQuantityItems == Object.keys(quantities).length){
        alert("You must order at least one item.");
        return;
    }

    //round to 2 decimal places
    discountCost = Math.round((originalCost * priceDiscount) * 100) / 100;

    totalOrders++;
    totalExpenditures += discountCost;

    let averageOrder = Math.round((totalExpenditures / totalOrders) * 100) / 100;

    //regex to add commas every third number
    let originalCostString = originalCost.toString().replace(numbersToCommaPattern, ",");
    let afterDiscountString = discountCost.toString().replace(numbersToCommaPattern, ",");
    let totalExpendituresString = totalExpenditures.toString().replace(numbersToCommaPattern, ",");
    let averageOrderString = averageOrder.toString().replace(numbersToCommaPattern, ",");
    let totalBrothersString = totalBrothers.toString().replace(numbersToCommaPattern, ",")
    let totalSistersString = totalSisters.toString().replace(numbersToCommaPattern, ",")

    //output
    document.outputForm.txaoutputField.value = `Original Cost: $${originalCostString}\n`;
    document.outputForm.txaoutputField.value += `Discount: ${100 - (priceDiscount * 100)}%\n`;
    document.outputForm.txaoutputField.value += `After Discount: $${afterDiscountString}\n`;
    document.outputForm.txaoutputField.value += `Total Orders: ${totalOrders}\n`;
    document.outputForm.txaoutputField.value += `Total Expenditures: $${totalExpendituresString}\n`;
    document.outputForm.txaoutputField.value += `Average of Total Orders: $${averageOrderString}\n`;
    document.outputForm.txaoutputField.value += `Total Brothers: ${totalBrothersString}\n`;
    document.outputForm.txaoutputField.value += `Total Sisters: ${totalSistersString}`;
    //total amount bought for each item
    for (let item in totalItems){
        let itemAmountString = totalItems[item].toString().replace(numbersToCommaPattern, ",");
        document.outputForm.txaoutputField.value += `\nTotal ${code_to_Output[item]}s: ${itemAmountString}`;
    }
    
    //clear inputs
    for (let i in arguments){
        arguments[i].value = '';
    }
}