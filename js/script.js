// profile


jQuery(document).ready(function () {
    localStorage.clear();
    jQuery(document).on('click', '.card_fill ', function () {
        // $('body').removeClass('modal-open');

        const id = jQuery(this).data('id');
        const modal = jQuery(this).data('modal')
        const label1id = jQuery(this).data('label1id')
        const label2id = jQuery(this).data('label2id')
        const label1 = jQuery(this).data('label1')
        const label2 = jQuery(this).data('label2')
        const c_btn = "#" + id + "cancel_btn";
        jQuery(".save_btn").attr('id', id + "save_btn")
        jQuery(".cancel_btn").attr('id', id + "cancel_btn")

        jQuery(document).on('click', '.save_btn', function () {
            jQuery(".social_media_con").removeAttr("id");
            let ele = jQuery(this).attr('id');
            if (ele == id + "save_btn") {
                let box = $('*[data-id="' + id + '"]')
                let svg = $('*[data-id="' + id + '"] svg')
                let text = $('*[data-id="' + id + '"] div')
                box.addClass("box_none")
                svg.addClass('svg_none')
                box.removeAttr("data-bs-toggle")
                text.css("color", "silver")
                jQuery("." + id).removeClass("card_fill")

                
            }
        })

        jQuery(".modalbox").each(function () {
            if (jQuery(this).attr("class") == "modalbox " + modal) {

                jQuery(this).css("display", "block");
                if (modal == "modal2val") {
                    jQuery('#' + label1id).show()
                    jQuery('#' + label2id).show()

                    jQuery(".modal2val .modal1lab input").data('id', label1id)
                    jQuery(".modal2val .modal2lab input").data('id', label2id)

                    jQuery(".modal2val .modal1lab input").val(localStorage.getItem(label1id));
                    jQuery(".modal2val .modal2lab input").val(localStorage.getItem(label2id));

                    jQuery(".modal2val .modal1lab label").text(label1)
                    jQuery(".modal2val .modal2lab label").text(label2)

                    jQuery(document).on('click', c_btn, function () {
                        let lab1id1 = jQuery(".modal2val .modal1lab input").data('id')
                        let lab2id2 = jQuery(".modal2val .modal2lab input").data('id')

                        jQuery('#' + lab1id1).val(localStorage.setItem(lab1id1, ""));
                        jQuery('#' + lab2id2).val(localStorage.setItem(lab2id2, ""));
                        jQuery("#" + lab1id1).text("")
                        jQuery("#" + lab2id2).text("")
                    })
                } else if (modal == "modal3val") {
                    jQuery(".modal3val .modal1lab input").data('id', label1id)
                    jQuery(".modal3val .modal2lab input").data('id', label2id)

                    jQuery(".modal3val .modal1lab input").val(localStorage.getItem(label1id));
                    jQuery(".modal3val .modal2lab input").val(localStorage.getItem(label2id));

                    jQuery(".modal3val .modal1lab label").text(label1)
                    jQuery(".modal3val .modal2lab label").text(label2)
                    jQuery('div#' + id).show()

                    let sm_con = jQuery("#sm_con")
                    let svg = jQuery("." + id + " svg").html()
                    let con = jQuery(".social_media_con").attr("id");

                    if (con == undefined) {
                        let data = `
                        <div class="social_media social_media_con ${id} mb-3" id="${id}" data-cardid="${id}" data-modal="modal3val"
                            data-bs-toggle="modal" data-bs-target="#fildetail">
                            <span class="social_media_icon d-flex justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style="width: 30px;"
                                    class="card_svg">
                                    ${svg}
                                </svg>
                            </span>
                            <span class="social_media_para_con ms-3">
                                <div class="social_media_para card_text1 fs-7 fw-bold lh-2" id="${label1id}"> 
                                    <input type="hidden" id="${label1id}_inp">
                                </div>
                                <div class="social_media_para card_text2 fs-7 lh-1 fw-lighter" id="${label2id}">
                                    <input type="hidden" id="${label2id}_inp">
                                </div>
                            </span>
                            <i class="card_edit fa-solid fa-pen-to-square"></i>
                        </div> `;

                        sm_con.append(data)
                    }

                    jQuery(document).on('click', c_btn, function () {
                        let labid1 = jQuery(".modal3val .modal1lab input").data('id')
                        let labid2 = jQuery(".modal3val .modal2lab input").data('id')

                        jQuery('#' + id).hide()

                        jQuery(".modal3val .modal1lab input").val(localStorage.setItem(labid1, ""));
                        jQuery(".modal3val .modal2lab input").val(localStorage.setItem(labid2, ""));
                        jQuery('div#' + id + " .social_media_para_con #" + labid1).text("")
                        jQuery('div#' + id + " .social_media_para_con #" + labid2).text("")
                        jQuery(".social_media_con").removeAttr("id");
                        jQuery(".social_media_con").removeClass(id);
                    })

                } else {

                    jQuery(".modal1val .modal1lab input").data('id', label1id)
                    jQuery(".modal1val .modal1lab input").val(localStorage.getItem(label1id));
                    jQuery(".modal1val .modal1lab label").text(label1)

                    jQuery(document).on('click', c_btn, function () {
                        let lab01id = jQuery(".modal1val .modal1lab input").data('id')
                        localStorage.setItem(lab01id, "")
                        jQuery('#' + lab01id).val("");
                        jQuery("#" + lab01id).text("")
                    })
                }
            }
            else {
                jQuery(this).css("display", "none");
            }

            // jQuery(".social_media_con").click(function () {
            jQuery(document).on('click', '.social_media_con', function () {
                let id = jQuery(this).data("cardid");
                let card_text1 = $('div[data-cardid="' + id + '"] .social_media_para_con .card_text1').attr('id')
                let card_text2 = $('div[data-cardid="' + id + '"] .social_media_para_con .card_text2').attr('id')

                let card_text1lab = jQuery("#" + card_text1).text()
                let card_text2lab = jQuery("#" + card_text2).text()

                let card_text1val = jQuery(".modal3val .modal1lab input").val(card_text1lab);
                let card_text2val = jQuery(".modal3val .modal2lab input").val(card_text2lab);

                localStorage.setItem(card_text1, card_text1lab)
                localStorage.setItem(card_text2, card_text2lab)

                jQuery(".modal3val .modal1lab input").data('id', card_text1)
                jQuery(".modal3val .modal2lab input").data('id', card_text2)

            })
            // })
        });

    });

    jQuery(document).on('focusin', '.updown input ', function () {
        jQuery(this).parent().find('label').addClass('shift');
        jQuery(this).parent().addClass('wrap_shift');
        // if(jQuery(this).val() === ''){
        // jQuery(this).parent().addClass('brdr_red');
        // jQuery(this).parent().removeClass('brdr_green');
        // }
        // else{
        // jQuery(this).parent().addClass('brdr_green');
        // jQuery(this).parent().removeClass('brdr_red');
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
        // field.parent().addClass('brdr_red').removeClass('brdr_green');
        // }
        // else{
        // field.parent().addClass('brdr_green').removeClass('brdr_red');
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