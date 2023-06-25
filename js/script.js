// profile 

jQuery(document).ready(function () {
    localStorage.clear();
    jQuery(document).on('click', '.flex_item ', function () {
        var id = jQuery(this).data('id');
        var modal = jQuery(this).data('modal')
        var label1id = jQuery(this).data('label1id')
        var label2id = jQuery(this).data('label2id')
        var label1 = jQuery(this).data('label1')
        var label2 = jQuery(this).data('label2')
        jQuery(".save_btn").attr('id', id)

        jQuery(document).on('click', '.save_btn', function () {
            let ele = jQuery(this).attr('id');
            if (ele == id) {
                let box = $('*[data-id="' + id + '"]')
                let svg = $('*[data-id="' + id + '"] svg')
                let text = $('*[data-id="' + id + '"] div')
                box.addClass("box_none")
                box.removeAttr("data-bs-toggle")
                svg.addClass('svg_none')
                text.css("color", "silver")
            }
        })

        jQuery(".modalbox").each(function () {
            if (jQuery(this).attr("class") == "modalbox " + modal) {

                jQuery(this).css("display", "block");
                if (modal == "modal2val") {
                    // jQuery(".modal2val .modal1lab input").text(label1id)
                    // jQuery(".modal2val .modal2lab input").text(label2id)

                    jQuery(".modal2val .modal1lab input").data('id', label1id)
                    jQuery(".modal2val .modal2lab input").data('id', label2id)

                    jQuery(".modal2val .modal1lab input").val(localStorage.getItem(label1id));
                    jQuery(".modal2val .modal2lab input").val(localStorage.getItem(label2id));

                    jQuery(".modal2val .modal1lab label").text(label1)
                    jQuery(".modal2val .modal2lab label").text(label2)
                } else if (modal == "modal3val") {

                    jQuery(".modal3val .modal1lab input").data('id', label1id)
                    jQuery(".modal3val .modal2lab input").data('id', label2id)

                    jQuery(".modal3val .modal1lab input").val(localStorage.getItem(label1id));
                    jQuery(".modal3val .modal2lab input").val(localStorage.getItem(label2id));

                    jQuery(".modal3val .modal1lab label").text(label1)
                    jQuery(".modal3val .modal2lab label").text(label2)

                    let sm_con = jQuery("#sm_con")
                    let svg = jQuery("." + id + " svg").html()

                    let data = `<div class="social_media social_media_con  d-flex align-items-center mb-3" id="${id}">
                            <span class="social_media_icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="card_svg">
                                ${svg}
                            </svg>
                            </span>
                            <span class="social_media_para_con ms-3">
                                <div class="social_media_para fs-7 fw-bold lh-2" id="${label1id}"></div>
                                <div class="social_media_para fs-7 lh-1 fw-lighter" id="${label2id}"></div>
                            </span>
                        </div> `;

                    sm_con.append(data)

                } else {
                    // jQuery(".modal1val .modal1lab input").text(label1id)

                    jQuery(".modal1val .modal1lab input").data('id', label1id)

                    jQuery(".modal1val .modal1lab input").val(localStorage.getItem(label1id));

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
        var id = jQuery(this).data('id');

        jQuery(".field_card").each(function () {
            if (jQuery(this).attr('id') == id) {
                jQuery(this).removeClass('field_card_none')
                jQuery(this).text(value);
                localStorage.setItem(id, value);
            }
        });
        jQuery(".social_media_para").each(function () {
            if (jQuery(this).attr('id') == id) {
                jQuery(this).text(value);
                localStorage.setItem(id, value);
            }
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

    $('#fileupload').on('change', function () {
        $('.uploadimgText').hide();
        $('.uploadimg').show();
    });


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
});