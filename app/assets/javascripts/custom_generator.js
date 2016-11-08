document.addEventListener("turbolinks:load", function() {
    var minInput = $("#minInput");
    var maxInput = $("#maxInput");
    var amountOfControlInput = $("#amountOfControlInput");
    var outputDiv = $("#outputDiv");
    var enableDelayStopCheckbox = $("#enableDelayStopCheckbox");
    var numberElementTemplate = '<div class="col-xs"><span class="display-1 number"></span></div>';
    
    $("#btnSubmit").click(function(){
        var minValue = minInput.val();
        var maxValue = maxInput.val();
        var amount = amountOfControlInput.val();
        var enableDelayStop = enableDelayStopCheckbox.is(":checked");
        
        outputDiv.empty();
        
        for (var i = 0; i < amount; i++) {
            outputDiv.append(numberElementTemplate);
        }
        
        $(".number").each(function(index){
            var numberElement = $(this);
            var myNumber = getRandomIntInclusive(minValue, maxValue);
            numberElement.numAnim({
                endAt: myNumber,
            duration: enableDelayStop ? 2+index : 2
            });
        });
    });
});