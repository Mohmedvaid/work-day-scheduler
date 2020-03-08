$(document).ready(function () {
    //Ready begins
    var arr = []

    function buildArr() {

        for (var i = 0; i < 9; i++) {
            if (i + 9 < 12) {
                arr.push({
                    hour: `${i+9} am`,
                    events: ["abc"]
                })
            } else {
                if (i + 9 == 12) {
                    arr.push({
                        hour: `${i+9} pm`,
                        events: ["abc"]
                    })
                } else {
                    arr.push({
                        hour: `${(i+9)-12} pm`,
                        events: ["abc"]
                    })
                }

            }
            $(`.container`).append(`<h1>Time: ${arr[i].hour}</h1>`);
            $(`.container`).append(`<h3>Event: ${arr[i].events}</h3>`);
        }
        //console.log(arr[i])

    }

    // check if stored array in local storage, if not then create the array
    // create the initial array
    // covert 24 to 12 hour 



    function addEvent() {
        //add events to the array for that hour
        // store it to local storage
    }

    function render() {
        // loop though hours
        // determine if hour is greater than or equal to current hour
        // loop thru every events and display them
    }

    buildArr();
    render();

    //Ready Ends
});