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
                        events: [""]
                    })
                } else {
                    if (i + 9 == 12) {
                        arr.push({
                            hour: `${i+9} pm`,
                            events: [""]
                        })
                    } else {
                        arr.push({
                            hour: `${(i+9)-12} pm`,
                            events: [""]
                        })
                    }

                }
            }
            $(`.container`).append(`<h1 class= "hours">Time: ${arr[i].hour}</h1>`);
            $(`.container`).append(`<input class="events-input${i}" value= ${arr[i].events}><button class="save-btn" id="${i}">Save</button>`);

        }
    }



    function addEvent() {
        $(`.save-btn`).on('click',function(e) {
            var clickID= (e.target.id);
            console.log(clickID)
            var input = $(`.events-input${clickID}`).val()
            console.log(input)
            arr[clickID].events = [];
            arr[clickID].events.push(input)
            localStorage.setItem('arr', JSON.stringify(arr));
        })
    }

    function render() {
        for(var i = 0; i<=8;i++){
            console.log(`i=${i}`)
            if(i+9< moment().hour()){
                $(`.events-input${i}`).css("background-color", "grey")
            }
            else{
                $(`.events-input${i}`).css("background-color", "green")
            }

            if(moment().hour()==i+9){
                console.log(`current hour: ${moment().hour()}i=${i+9}`)
                $(`.events-input${i}`).css("background-color", "red")
            }

        }


        // loop though hours
        // determine if hour is greater than or equal to current hour
        // loop thru every events and display them
    }

    buildArr();
    render();
    addEvent();




    //Ready Ends
});