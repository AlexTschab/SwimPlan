import { Application } from "@hotwired/stimulus"
import NestedForm from 'stimulus-rails-nested-form'

const application = Application.start()
application.register('nested-form', NestedForm)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// Import the cocoon JavaScript file
import "cocoon";

// Call the cocoon function on the document ready event
$(document).ready(function() {
  // Initialize cocoon
  $(".cocoon-form").cocoon();
});
