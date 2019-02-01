$(function(){
    let pname = $('#productName')
    let pmanufacturer = $('#productManufacturer')
    let pprice = $('#productPrice')
    
    $('#btnProductAdd').click(function () {
      // AJAX Call
        console.log('Button was clicked.')
        $.post(
            '/api/products',
            {name: pname.val() , manufacturer : pmanufacturer.val() , price : pprice.val()},
            function(data){
                console.log(data);
                window.alert("Added "+data.name+" to Database.")
            }
        )
    });
})