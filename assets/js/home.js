let func = function(){
    let checkboxes=$(".row .col-xs-1 input")

    //Implements Strike through or remove strike through
    let strikeTask = function(checkbox){
        checkbox.addEventListener("click",function()
        {
            let id=$(this).prop("id");

            if($(this).prop("checked")==true)
            {
                $(`#task-description-display-${id} p`).css("text-decoration","line-through");
                $(`#task-description-display-${id} small`).css("text-decoration","line-through");
            }
            else if($(this).prop("checked")==false)
            {
                $(`#task-description-display-${id} p`).css("text-decoration","none");
                $(`#task-description-display-${id} small`).css("text-decoration","none");
            }
        })
    }

    //gives the functionality of strike through to all checkbox
    for(let i=0;i<checkboxes.length;i++)
    {
        strikeTask(checkboxes[i]);
    }

    //Selects All tasks present in the todo
    let selectAllTask = function(){
        $('#select-all-div #btn-select').click(function(e){
            e.preventDefault();
            
            for(let i=0;i<checkboxes.length;i++){  
                if(checkboxes[i].checked === false){
                    checkboxes[i].click();
                }
            }
            
        })
    }

    //Deselcts all the task present in the todo
    let unselectAllTask = function(){
        $('#select-all-div #btn-remove').click(function(e){
            e.preventDefault();
            
            for(let i=0;i<checkboxes.length;i++){
                if(checkboxes[i].checked === true){
                    checkboxes[i].click();
                }
            }
            
        })
    }
    let categoryButtons = $('.display-task button');
    for(categorybtn of categoryButtons){
        categorybtn.addEventListener('click', function(e){
            e.preventDefault();
        })
    }
    unselectAllTask();
    selectAllTask();
}();
