let category = document.getElementsByClassName('the_category');
let categcourse = document.getElementsByClassName('categcourse');
// let mainfield = document.getElementsByClassName('thecourses');

for(let i = 0; i<category.length; i++){
	category[i].onclick = function() {


		for(let j = 0; j<category.length; j++){

			category[j].style.backgroundColor = '#F2F2F2';
			category[j].style.color = 'black'

		}

		category[i].style.backgroundColor = '#1587c2';
		category[i].style.color = 'white';


		for(let j = 0; j < categcourse.length; j++){
			categcourse[j].style.display = 'none'
		}
		// console.log(categcourse[0]);
		if (category[i] == category[0]) {
			for(let j = 0; j < categcourse.length; j++){
			categcourse[j].style.display = 'block'
		}

		return true;
		}

		categcourse[i-1].style.display = 'block'


	}
}


// let courses = document.getElementsByClassName('.one_course');
// let course_text_title = document.getElementsByClassName('.course_text');
// let course_text_main = document.getElementsByClassName('.course_text');




// for(let i=0; i<courses.length;i++){
// 	courses[i].onclick = function() {

// 	}
// }

// .getElementsByTagName('h2')[0];
// .getElementsByTagName('p')[0];
// document.cookie = "user=Rolan";

