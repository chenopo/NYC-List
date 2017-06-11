$(document).ready(function() {
	
	var removeButton="<button class=Remove></button>";
	var ratingStar="<button class=Rating></button>"
	var ratingStars=ratingStar+ratingStar+ratingStar+ratingStar+ratingStar;
	var addToNewReco="&nbsp"+"&nbsp"+"&nbsp"+ratingStars+"&nbsp"+"&nbsp"+removeButton;
	var pubImage='<image src="./assets/Beer.jpg" width="30px" height="30px">'; 
	var entertainmentImage='<img src="./assets/Music.jpg "width="30px" height="30px">';
	var restaurantImage='<image src="./assets/Rest_Icon.jpg "width="30px" height="30px">';
	var dessertImage='<image src="./assets/Cupcake_icon.jpg" width="30px" height="30px">';

    $('input').focus(function() {
		$(this).val('');
		$(this).css("border", "1px solid black", "border-radius", "10px"); 
	});

    $('button.Add').click(function() {
    	var toAdd = $("input[name=recommendation]").val();
		var recType = $("#recommendation_Type").val(); // The value of the selected option
    	if (recType=="Pub") {
          $('.Pub').append('<li>'+pubImage+"&nbsp"+"&nbsp"+toAdd+addToNewReco+"</li>");
          //var pubList=;
          localStorage.setItem('pubList', $('.Pub').html());
    	} else if(recType=="Entertainment") {
    		$('.Entertainment').append('<li>'+entertainmentImage+"&nbsp"+"&nbsp"+toAdd+addToNewReco+"</li>");
    	} else if(recType=="Restaurant"){
    		$('.Restaurant').append('<li>'+restaurantImage+"&nbsp"+"&nbsp"+toAdd+addToNewReco+"</li>");
    	} else if(recType=="Dessert"){
    		$('.Dessert').append('<li>'+dessertImage+"&nbsp"+"&nbsp"+toAdd+addToNewReco+"</li>");
    	};
        $('input').val('Type your recommendation here');
    });

	$('ul').on('click','button.Remove', function(){
    	$(this).parent().fadeOut();
    });

    $('ul').on('click','button.Rating', function(){
    	$(this).toggleClass('Rated');
    	$(this).prevAll().toggleClass('Rated');
    });

    if(localStorage.getItem('pubList')) {
        $('.Pub').html(localStorage.getItem('pubList'));
    }

    $('button.Clear').click( function() {
        window.localStorage.clear();
        location.reload();
        return false;
    });

});