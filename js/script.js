// profile 


jQuery(document).ready(function () {
    localStorage.clear();
    jQuery(document).on('click', '.flex_item ', function () {
        // var iconid = jQuery(this).attr('id');
        var modal = jQuery(this).data('modal')
        var label1id = jQuery(this).data('label1id')
        var label2id = jQuery(this).data('label2id')
        var label1 = jQuery(this).data('label1')
        var label2 = jQuery(this).data('label2')



        jQuery(".modalbox").each(function () {
            if (jQuery(this).attr("class") == "modalbox " + modal) {

                jQuery(this).css("display", "block");
                if (modal == "modal2val") {
                    jQuery(".modal2val .modal1lab input").text(label1id)
                    jQuery(".modal2val .modal2lab input").text(label2id)

                    jQuery(".modal2val .modal1lab input").data('id', label1id)
                    jQuery(".modal2val .modal2lab input").data('id', label2id)

                    jQuery(".modal2val .modal1lab label").text(label1)
                    jQuery(".modal2val .modal2lab label").text(label2)
                } else {
                    jQuery(".modal1val .modal1lab input").text(label1id)

                    jQuery(".modal1val .modal1lab input").data('id', label1id)

                    jQuery(".modal1val .modal1lab label").text(label1)
                }
            }
            else {
                jQuery(this).css("display", "none");
            }
        });

    });





    jQuery(document).on('focusin', '.updown input ', function () {
        jQuery(this).parent().find('label').addClass('shift');
        jQuery(this).parent().addClass('wrap_shift');
        // if(jQuery(this).val() === ''){
        //     jQuery(this).parent().addClass('brdr_red');	
        //     jQuery(this).parent().removeClass('brdr_green');	
        // }
        // else{
        //     jQuery(this).parent().addClass('brdr_green');	
        //     jQuery(this).parent().removeClass('brdr_red');	
        // }
    });
    jQuery(document).on('focusout', '.updown input ', function () {
        if (jQuery(this).val() === '') {
            jQuery(this).parent().find('label').removeClass('shift');
            jQuery(this).parent().removeClass('wrap_shift');
        }
    });
    jQuery(document).on('keyup', '.updown input ', function () {
        var value = jQuery(this).val();
        // var id = jQuery(this).attr('id');
        var id = jQuery(this).data('id');

        jQuery(".field_card").each(function () {
            if (jQuery(this).attr('id') === id) {
                jQuery(this).removeClass('field_card_none')
                jQuery(this).text(value);
                localStorage.setItem(id, value);
            }
            // else {
            //     jQuery(this).css("display", "none");
            // }
        });

        // if(field.val() === ''){
        //     field.parent().addClass('brdr_red').removeClass('brdr_green');
        // }
        // else{
        //     field.parent().addClass('brdr_green').removeClass('brdr_red');	
        // }
    });



    // Add Imges 

    // add and remove image_box
    jQuery(document).on('click', '.image_box', function () {
        let text = jQuery(this).text();
        jQuery("#func").text(text);
        jQuery('.add_image_box').addClass('add_image_active');

    })
    jQuery(document).on('click', '.add_image_close', function () {
        jQuery(".add_image_box").removeClass('add_image_active');
        jQuery('.uploadimgText').css("display", "block");
        jQuery('#uploadimg').css("display", "none");
    })

    // Add images
    jQuery('.uploadimgText').css("display", "block");

    cropper = new cropper(document.getElementById('image-cropper'), {
        area: [340, 340],
        crop: [250, 150],
    })

    zoom.onchange = function () {
        document.getElementById('image-cropper').crop.zoom(this.value);
        document.getElementById('image-cropper-result').children[0].src =
            document.getElementById('image-cropper').crop.getCroppedImage().src;
    }
});

jQuery(document).on('click', '.image_color_left_box', function () {
    var color = jQuery(this).children().data('bgcolor');
    jQuery('.image_color_left_box').removeClass('bg_active');
    jQuery(this).addClass('bg_active');
    jQuery('.jcrop canvas').css('background-color', color);
    jQuery('.image_bgcolor_right').val(color);
})

jQuery(document).on('change', '.image_bgcolor_right', function () {
    var color = jQuery(this).val();
    jQuery('.jcrop canvas').css('background-color', color);
})