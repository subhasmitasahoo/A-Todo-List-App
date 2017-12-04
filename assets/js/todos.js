//Completed Todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Deleting Todos
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
});

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>'+$(this).val()+"</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
});