(function ($) {

    $(window).on('load', function () {

        $('.aiosrs-pro-custom-field.aiosrs-pro-custom-field-repeater .aiosrs-pro-repeater-table-wrap').hide();
        $('.aiosrs-pro-custom-field.aiosrs-pro-custom-field-repeater .bsf-repeater-add-new-btn').hide();
        $('.aiosrs-pro-custom-field.aiosrs-pro-custom-field-repeater-target .aiosrs-pro-repeater-table-wrap').hide();
        $('.aiosrs-pro-custom-field.aiosrs-pro-custom-field-repeater-target .bsf-repeater-add-new-btn').hide();
    });


    $(document).ready(function () {
        const { __ } = wp.i18n;
        $("#wpsp-reset-dialog-confirmation").dialog({
            dialogClass: 'wp-dialog',
            autoOpen: false,
            modal: true
        });
        // Added support to repeater validation.
        $('.aiosrs-pro-custom-field-repeater').each(function (index, repeater) {
            if (!$(repeater).find('.wpsp-required-error-field').length) {
                $(repeater).parents('.bsf-aiosrs-schema-row-content').prev().removeClass('wpsp-required-error-field');
            }
        });

        $('.wpsp-show-repeater-field').click(function () {

            var parent = $(this).parents('.aiosrs-pro-custom-field-repeater');
            parent.find('.aiosrs-pro-repeater-table-wrap').show();
            parent.find('.bsf-repeater-add-new-btn').show();
            parent.find('.wpsp-show-repeater-field').addClass('bsf-hidden');
            parent.find('.wpsp-hide-repeater-field').removeClass('bsf-hidden');
        });

        $('.wpsp-hide-repeater-field').click(function () {

            var parent = $(this).parents('.aiosrs-pro-custom-field-repeater');
            parent.find('.aiosrs-pro-repeater-table-wrap').hide();
            parent.find('.bsf-repeater-add-new-btn').hide();
            parent.find('.wpsp-hide-repeater-field').addClass('bsf-hidden');
            parent.find('.wpsp-show-repeater-field').removeClass('bsf-hidden');
        });

        $('.wpsp-show-repeater-target-field').click(function () {

            var parent = $(this).parents('.aiosrs-pro-custom-field-repeater-target');
            parent.find('.aiosrs-pro-repeater-table-wrap').show();
            parent.find('.bsf-repeater-add-new-btn').show();
            parent.find('.wpsp-show-repeater-target-field').addClass('bsf-hidden');
            parent.find('.wpsp-hide-repeater-target-field').removeClass('bsf-hidden');
        });

        $('.wpsp-hide-repeater-target-field').click(function () {

            var parent = $(this).parents('.aiosrs-pro-custom-field-repeater-target');
            parent.find('.aiosrs-pro-repeater-table-wrap').hide();
            parent.find('.bsf-repeater-add-new-btn').hide();
            parent.find('.wpsp-hide-repeater-target-field').addClass('bsf-hidden');
            parent.find('.wpsp-show-repeater-target-field').removeClass('bsf-hidden');
        });


        $(document).on('change click', function () {
            $('.wpsp-local-fields').find("select, textarea, input").on('change keyup', function (event) {

                if (event.isTrigger && !$(this).hasClass('wpsp-specific-field') && !$(this).hasClass('wpsp-date-field')) {
                    return false;
                }

                var parent = $(this).parents('.wpsp-local-fields');
                parent.find('.wpsp-default-hidden-value').val($(this).val());
                parent.find('.wpsp-default-hidden-fieldtype').val($(this).parents('.wpsp-parent-field').attr('data-type'));

                if ($(this).is("select") && $(this).parent().hasClass('wpsp-connect-field')) {

                    let selected_option = $(this).val();

                    if ("create-field" === selected_option || "specific-field" === selected_option) {
                        if ("create-field" === selected_option) {
                            display_custom_field(parent);
                            parent.find('.wpsp-default-hidden-fieldtype').val('custom-field');
                        }
                        if ("specific-field" === selected_option) {
                            display_specific_field(parent);
                            parent.find('.wpsp-default-hidden-fieldtype').val('specific-field');
                        }
                        parent.find('.wpsp-default-hidden-value').val("");
                    }
                }

            });

            $('select.bsf-aiosrs-schema-meta-field').change(function () {

                var parent = $(this).parents('.wpsp-local-fields');
                var label = parent.find('select option:selected').html();

                let selected_option = $(this).val();

                if ('none' === selected_option || 'create-field' === selected_option || 'specific-field' === selected_option) {
                    parent.find('.bsf-aiosrs-schema-heading-help').attr('title', 'Please connect any field to apply in the Schema Markup!');
                } else {
                    parent.find('.bsf-aiosrs-schema-heading-help').attr('title', 'The ' + label + ' value in this field will be added to the schema markup of this particular post/page.');
                }
            });

            $('input[type="checkbox"].wpsp-enable-schema-toggle__input').on('click', function () {

                let parent = $(this).parents('.wpsp-enable-schema-markup');
                let this_val = $(this).val();
                let is_checked = parent.find('.wpsp-enable-schema-toggle').hasClass('is-checked');

                if (!is_checked && "1" === this_val) {
                    parent.find('.wpsp-enable-schema-toggle__input-hidden').attr('value', '1');
                    parent.find('.wpsp-enable-schema-toggle').addClass('is-checked');
                } else {
                    parent.find('.wpsp-enable-schema-toggle__input-hidden').attr('value', 'disabled');
                    parent.find('.wpsp-enable-schema-toggle').removeClass('is-checked');
                }
            });

            function display_specific_field(parent) {

                parent.find('.wpsp-connect-field,.wpsp-custom-field').hide();
                parent.find('.wpsp-specific-field').removeClass('bsf-hidden').show().find("select, textarea, input").val('');
            }

            function display_custom_field(parent) {

                parent.find('.wpsp-connect-field,.wpsp-specific-field').hide();
                parent.find('.wpsp-custom-field').removeClass('bsf-hidden').show().find("select, textarea, input").val('');
            }

            $(document).on('click', ".wpsp-field-close", function () {

                var parent = $(this).parents('.wpsp-local-fields');
                let select = parent.find('.wpsp-connect-field')
                .removeClass('bsf-hidden').show()
                .find("select").removeAttr('disabled');
                let select_val = select.val();
                if("specific-field" === select_val) {
                    parent.find('.wpsp-default-hidden-value').val("");
                    parent.find('.wpsp-default-hidden-fieldtype').val("specific-field");
                    display_specific_field(parent);
                    return;
                }
                parent.find('.wpsp-default-hidden-value').val("");
                parent.find('.wpsp-default-hidden-fieldtype').val("custom-field");
                display_custom_field(parent);

            });

            $(document).on('click', ".wpsp-specific-field-connect, .wpsp-custom-field-connect", function () {

                let parent = $(this).parents('.wpsp-local-fields');
                let select = parent.find('.wpsp-connect-field')
                    .removeClass('bsf-hidden').show()
                    .find("select").removeAttr('disabled');

                let select_val = select.val();

                if ("create-field" === select_val || "specific-field" === select_val) {
                    select_val = "none";
                }

                parent.find('.wpsp-default-hidden-value').val(select_val);
                parent.find('.wpsp-default-hidden-fieldtype').val("global-field");
                parent.find('.wpsp-custom-field, .wpsp-specific-field').hide();
            });
        });

        $(document).on('change input', '.bsf-rating-field', function () {

            var star_wrap = $(this).next('.aiosrs-star-rating-wrap'),
                value = $(this).val(),
                filled = (value > 5) ? 5 : ((value < 0) ? 0 : parseInt(value)),
                half = (value == filled || value > 5 || value < 0) ? 0 : 1,
                empty = 5 - (filled + half);

            star_wrap.find('span').each(function (index, el) {
                $(this).removeClass('dashicons-star-filled dashicons-star-half dashicons-star-empty');
                if (index < filled) {
                    $(this).addClass('dashicons-star-filled')
                } else if (index == filled && half == 1) {
                    $(this).addClass('dashicons-star-half')
                } else {
                    $(this).addClass('dashicons-star-empty')
                }
            });
        });

        $(document).on('click', '.aiosrs-star-rating-wrap:not(.disabled) > .aiosrs-star-rating', function (e) {
            e.preventDefault();
            var index = $(this).data('index');
            var star_wrap = $(this).parent();
            var parent = $(this).parents('.wpsp-local-fields');
            star_wrap.prev('.bsf-rating-field').val(index);
            parent.find('.wpsp-default-hidden-value').val(index);
            star_wrap.find('.aiosrs-star-rating').each(function (i, el) {
                $(this).removeClass('dashicons-star-filled dashicons-star-half dashicons-star-empty');
                if (i < index) {
                    $(this).addClass('dashicons-star-filled')
                } else {
                    $(this).addClass('dashicons-star-empty')
                }
            });
        });

        $(document).on('change', '#aiosrs-pro-custom-fields .aiosrs-pro-custom-field-checkbox input[type="checkbox"]', function (e) {
            e.preventDefault();

            var siblings = $(this).closest('tr.row').siblings('tr.row');
            if ($(this).prop('checked')) {
                siblings.show();
            } else {
                siblings.hide();
            }
        });

        $('#aiosrs-pro-custom-fields .aiosrs-pro-custom-field-checkbox input[type="checkbox"]').trigger('change');

        $(document.body).on('change', '#aiosrs-pro-custom-fields .wpsp-enable-schema-markup input[type="checkbox"].wpsp-enable-schema-toggle__input', function (e) {
            e.preventDefault();

            let parent = $(this).parents('.wpsp-enable-schema-markup');

            if ($(this).prop('checked')) {
                parent.find('.wpsp-enable-schema-toggle').addClass('is-checked');
                parent.find('.wpsp-enable-schema-toggle__input-hidden').attr('value', '1');
            } else {
                parent.find('.wpsp-enable-schema-toggle').removeClass('is-checked');
                parent.find('.wpsp-enable-schema-toggle__input-hidden').attr('value', 'disabled');
            }
        });

        $('#aiosrs-pro-custom-fields .wpsp-enable-schema-markup input[type="checkbox"].wpsp-enable-schema-toggle__input').trigger('change');

        $(document).on('click', '.aiosrs-reset-rating', function (e) {
            e.preventDefault();
            let this_obj = $(this);
            let parent = this_obj.closest('.aiosrs-pro-custom-field-rating');

            let ajax_data = {
                action: 'aiosrs_reset_post_rating',
                post_id: this_obj.data('post-id'),
                schema_id: this_obj.data('schema-id'),
                nonce: this_obj.data('nonce')
            }

            $("#wpsp-reset-dialog-confirmation").dialog({
                resizable: false,
                title: __('Confirmation Required!', 'wp-schema-pro'),
                height: "auto",
                width: 400,
                modal: true,
                open: function (event, ui) {
                    $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
                    var markup = '<p><span class="dashicons dashicons-trash"></span> Do you really want to reset current post rating?</p>';
                    $(this).html(markup);
                },
                buttons: {
                    "Yes": function () {
                        this_obj.addClass('reset-disabled');
                        parent.find('.spinner').addClass('is-active');
                        jQuery.ajax({
                            url: ajaxurl,
                            type: 'post',
                            dataType: 'json',
                            data: ajax_data
                        }).success(function (response) {
                            if ('undefined' != typeof response['success'] && response['success'] == true) {
                                let avg_rating = response['rating-avg'],
                                    review_count = response['review-count'];
                                parent.find('.aiosrs-rating').text(avg_rating);
                                parent.find('.aiosrs-rating-count').text(review_count);
                                parent.find('.aiosrs-star-rating-wrap > .aiosrs-star-rating')
                                    .removeClass('dashicons-star-filled dashicons-star-half dashicons-star-empty')
                                    .addClass('dashicons-star-empty');
                            } else {
                                this_obj.removeClass('reset-disabled');
                            }
                            parent.find('.spinner').removeClass('is-active');
                        });
                        $(this).dialog("close");
                    },
                    "Cancel": function () {
                        $(this).dialog("close");
                    }
                }
            });
            $("#wpsp-reset-dialog-confirmation").dialog("open");
        });

        $(document).on('change', '.multi-select-wrap select', function () {

            var multiselect_wrap = $(this).closest('.multi-select-wrap'),
                select_wrap = multiselect_wrap.find('select'),
                input_field = multiselect_wrap.find('input[type="hidden"]'),
                value = select_wrap.val();

            if ('undefined' != typeof value && null != value && value.length > 0) {
                input_field.val(value.join(','));
            } else {
                input_field.val('');
            }
        });

        // Verticle Tabs
        $(document).on('click', '.aiosrs-pro-meta-fields-tab', function (e) {
            e.preventDefault();

            var id = $(this).data('tab-id');
            $(this).siblings('.aiosrs-pro-meta-fields-tab').removeClass('active');
            $(this).addClass('active');

            $('#aiosrs-pro-custom-fields').find('.aiosrs-pro-meta-fields-wrap').removeClass('open');
            $('#aiosrs-pro-custom-fields').find('.' + id).addClass('open');
        });

        // Toggle Js for Enable Schema Markup.

        $(document.body).on('change', '#aiosrs-pro-custom-fields .wpsp-enable-schema-markup .wpsp-enable-schema-toggle', function (e) {
            var parent = $(this).parents('.aiosrs-pro-meta-fields-tab');
            var parents = $(this).parents('.inside');
            var id = parent.data('tab-id');
            var has_class = parents.find('.aiosrs-pro-meta-fields-wrapper').find('.' + id).hasClass('is-enable-schema-markup');
            let is_checked = parent.find('.wpsp-enable-schema-toggle').hasClass('is-checked');

            if (!has_class && !is_checked) {
                parents.find('.aiosrs-pro-meta-fields-wrapper').find('.' + id).addClass('is-enable-schema-markup');
            }
        });

        $('#aiosrs-pro-custom-fields .wpsp-enable-schema-markup .wpsp-enable-schema-toggle').trigger('change');

        $('.wpsp-enable-schema-toggle').on('click', function () {

            var parent = $(this).parents('.aiosrs-pro-meta-fields-tab');
            var parents = $(this).parents('.inside');
            var id = parent.data('tab-id');

            parents.find('.aiosrs-pro-meta-fields-wrapper').find('.' + id).toggleClass('is-enable-schema-markup');
        });

        // Call Tooltip
        $('.bsf-aiosrs-schema-heading-help').tooltip({
            content: function () {
                return $(this).prop('title');
            },
            tooltipClass: 'bsf-aiosrs-schema-ui-tooltip',
            position: {
                my: 'center top',
                at: 'center bottom+10',
            },
            hide: {
                duration: 200,
            },
            show: {
                duration: 200,
            },
        });

        var file_frame;
        window.inputWrapper = '';

        $(document.body).on('click', '.image-field-wrap .aiosrs-image-select', function (e) {

            e.preventDefault();

            window.inputWrapper = $(this).closest('.bsf-aiosrs-schema-custom-text-wrap, .aiosrs-pro-custom-field-image');

            // Create the media frame.
            file_frame = wp.media({
                button: {
                    text: 'Select Image',
                    close: false
                },
                states: [
                    new wp.media.controller.Library({
                        title: __('Select Custom Image', 'wp-schema-pro'),
                        library: wp.media.query({ type: 'image' }),
                        multiple: false,
                    })
                ]
            });

            // When an image is selected, run a callback.
            file_frame.on('select', function () {

                var attachment = file_frame.state().get('selection').first().toJSON();

                var image = window.inputWrapper.find('.image-field-wrap img');
                if (image.length == 0) {
                    window.inputWrapper.find('.image-field-wrap').append('<a href="#" class="aiosrs-image-select img"><img src="' + attachment.url + '" /></a>');
                } else {
                    image.attr('src', attachment.url);
                }
                window.inputWrapper.find('.image-field-wrap').addClass('bsf-custom-image-selected');
                window.inputWrapper.find('.single-image-field').val(attachment.id);

                var parent = window.inputWrapper.parents('.wpsp-local-fields');
                parent.find('.wpsp-default-hidden-value').val(attachment.id);
                parent.find('.wpsp-default-hidden-fieldtype').val(window.inputWrapper.parents('.wpsp-parent-field').attr('data-type'));

                file_frame.close();
            });

            file_frame.open();
        });


        $(document).on('click', '.aiosrs-image-remove', function (e) {

            e.preventDefault();
            var parent = $(this).closest('.bsf-aiosrs-schema-custom-text-wrap, .aiosrs-pro-custom-field-image');
            parent.find('.image-field-wrap').removeClass('bsf-custom-image-selected');
            parent.find('.single-image-field').val('');
            parent.find('.image-field-wrap img').removeAttr('src');
        });

        var file_frame;
        window.inputWrapper = '';
    });

})(jQuery);