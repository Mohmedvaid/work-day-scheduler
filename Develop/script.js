$(document).ready(function () {
    //Ready begins
    var arr = []

    function buildArr() {
        // check if stored array in local storage, if not then create the array
        // create the initial array
        // covert 24 to 12 hour 


        for (var i = 0; i < 9; i++) {

            if (JSON.parse(localStorage.getItem('arr'))) {
                arr = JSON.parse(localStorage.getItem('arr'));
            } else {


                if (i + 9 < 12) {
                    arr.push({
                        hour: `${i+9} am`,
                        events: ""
                    })
                } else {
                    if (i + 9 == 12) {
                        arr.push({
                            hour: `${i+9} pm`,
                            events: ""
                        })
                    } else {
                        arr.push({
                            hour: `${(i+9)-12} pm`,
                            events: ""
                        })
                    }

                }
            }

            $(`.container`).append(`<div class="whole-event" id="whole-event${i}"></div>`)
            $(`#whole-event${i}`).append(`<p class= "hours">${arr[i].hour}</p>`);

            $(`#whole-event${i}`).append(`<input id = "input-box"class="events-input${i}" value= '${arr[i].events}'><button class="save-btn fa fa-save" id="${i}"></button>`);


        }
    }



    function addEvent() {
        $(`.save-btn`).on('click', function (e) {
            var clickID = (e.target.id);
            var input = $(`.events-input${clickID}`).val()

            arr[clickID].events = [];
            arr[clickID].events.push(input)
            localStorage.setItem('arr', JSON.stringify(arr));
        })
    }

    //render funtion change the background color of the hours according to past, present and future
    function render() {
        for (var i = 0; i <= 8; i++) {
            if (i + 9 < moment().hour()) {
                $(`.events-input${i}`).css("background-color", "#cccccc")
            } else {
                $(`.events-input${i}`).css("background-color", "#00e200")
            }

            if (moment().hour() == i + 9) {

                $(`.events-input${i}`).css("background-color", "red")
            }

        }

        //Getting locale date
        var m = moment();
        //Formating and storing date in variable
        var date = `${m.format("dddd")}, ${m.format("MMMM Do")}`
        //Appending date in Jumbotron
        $(`#currentDay`).append(date)



        // loop though hours
        // determine if hour is greater than or equal to current hour
        // loop thru every events and display them
    }

    //Calling methods
    buildArr();
    render();
    addEvent();




    //Ready Ends
});