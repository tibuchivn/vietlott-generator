$(function(){
    generateRandomNumber();
    $("#btnSpin").click(function(){
        generateRandomNumber();
    });
});

function generateRandomNumber(){
    $(".number").each(function(index){
        var numberElement = $(this);
        var myNumber = getRandomIntInclusive(0, 99);
        numberElement.numAnim({
            endAt: myNumber,
        duration: 2+index
        });
    });
}