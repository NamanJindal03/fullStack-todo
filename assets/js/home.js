let checkboxes=$(".row .col-xs-1 input")
for(let i=0;i<checkboxes.length;i++)
{
    checkboxes[i].addEventListener("click",function()
    {
        let id=$(this).prop("id");
        console.log(id);
        if($(this).prop("checked")==true)
        {
            $(`#task-description-display-${id} p`).css("text-decoration","line-through");
            $(`#task-description-display-${id} small`).css("text-decoration","line-through");
            //console.log("check")
        }
        else if($(this).prop("checked")==false)
        {
            //console.log("not check")
            $(`#task-description-display-${id} p`).css("text-decoration","none");
            $(`#task-description-display-${id} small`).css("text-decoration","none");
        }
    })
}