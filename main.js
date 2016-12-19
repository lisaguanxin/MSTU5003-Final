//hide the chat box
//onlclick


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
var messageList=[];
var userMsg="xxx";

document.querySelector('#postBtn').addEventListener('click', function(){
	userMsg = document.querySelector('#userText').value;
	messageList.push(userMsg);
	console.log(messageList);

	var el = document.createElement('P'); // <p></p>
			el.innerText = userMsg;			// <p>Message here</p>

	document.querySelector('#messages').appendChild(el);


	document.querySelector('#userText').value = "";
});

document.$('.material-icons').addEventListener('click',function(){
  alert("If u have any question, pls send email to xg2242@tc.columbia.edu");
});
