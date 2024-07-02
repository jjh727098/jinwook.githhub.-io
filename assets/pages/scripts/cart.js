if($('body.cart').length){
    
    let cartQtyBtn = $('.table-wrapper-responsive  input[type="number"]');
    let cartDelBtn = $('.table-wrapper-responsive .del-goods');
    let totalPrice = $('.shopping-total-price strong');
    let cartItemSpan = $('.cart_content em span');

    calcTotal();

   cartQtyBtn.change(calcTotal);

   cartDelBtn.click(function(){  
        $(this).closest('tr').remove();
        calcTotal();
   });

    function calcTotal(){
        let cartItem = $('.table-wrapper-responsive tr:not(:first-child)');

        cartItemSpan.text(cartItem.length);

        
    }


}