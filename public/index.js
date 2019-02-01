function createProductCard(product){
    return $(`
        <div class="col-5 card m-2 p-4">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col m-3 p-3">
                    <b>Rs. ${product.price}</b>
                </div>
                    <button class="col btn btn-primary m-3">Buy</button> 
            </div>
        </div>
    `)
}

$(function(){
    let productList = $('#product-list')
    $.get('/api/products',function(products){
        console.log('Request send to retreive data.');
        productList.empty();
        for(product of products){
            productList.append(createProductCard(product));
        }
    })
})
