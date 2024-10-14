(function ($, Drupal, window, document, undefined) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors

  Drupal.behaviors.anchor = {
    attach: function (context, settings) {
      $('.field--name-anchor input').on('blur', function() {
        paragraphId = $(this).val();
        $(this).closest('.field--name-anchor').find('input[name$="[0][value]"]').val(paragraphId);
      });
    }
  };

}(jQuery, Drupal, this, this.document));

