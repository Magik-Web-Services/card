$(document).ready(function () {
    // add and remove image_box
    jQuery(document).on('click', '.right_images_box_container .image_box', function () {
        let text = jQuery(this).text();
        jQuery("#func").text(text);
        jQuery('.add_image_box').addClass('add_image_active');

    })
    jQuery(document).on('click', '.add_image_box .add_image_tittle i', function () {
        jQuery(".add_image_box").removeClass('add_image_active');
        jQuery('.uploadimgText').css("display", "block");
        jQuery('#uploadimg').css("display", "none");
    })

    // Add images
    jQuery('.uploadimgText').css("display", "block");

});

var crop = cropper(document.getElementById('image-cropper'), {
    area: [340, 340],
    crop: [150, 150],
})

let zoom = document.getElementById('zoom');

jQuery(document).on('click', '#img_dec', function () {
    let dec = zoom.value - 0.1;
    zoom.value = dec;
});

jQuery(document).on('click', '#img_inc', function () {
    let inc = zoom.value + 0.1;
    zoom.value = inc;
    // console.log(zoom.value);
});

zoom.onchange = function () {
    document.getElementById('image-cropper').crop.zoom(this.value);
    document.getElementById('image-cropper-result').children[0].src =
            document.getElementById('image-cropper').crop.getCroppedImage().src;
}

// zoom.onchange = function () {
//     document.getElementById('image-cropper-result').children[0].src =
//         document.getElementById('image-cropper').crop.getCroppedImage().src;
// }