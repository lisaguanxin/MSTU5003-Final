//how to realzie click --> show the new step btn?
//Write the function of btn showing when clicking on btn YES/NOT SURE;
//listen to YES or NotSure;
//how to hide the content until clicking on the btn? DOM Animation included?

function myStep1() {
  document.getElementById("step1");
}
onclick = myStep1();


document.getElementById('myItems').addEventListener('click', function(event){

	if (event.target.tagName === "BUTTON") {

		if (event.target.classList.contains('gotItBtn')) {
			event.target.parentElement.parentElement.nextElementSibling.classList.add('shownItem');
		} else {

			if (event.target.classList.contains('btn-danger')) {
				// add showFeedback class
				event.target.nextElementSibling.classList.add('showFeedback');
			} else {
				var buttonEl = event.target;
				var itemEl = buttonEl.parentElement;
				var nextItemEl = itemEl.nextElementSibling;

				console.log(buttonEl);
				console.log(itemEl);

				nextItemEl.classList.add('shownItem');
			}

		}

		// alert('show next item');
	} else {
		// do nothing
	}
});
