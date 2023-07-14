let app_question = document.getElementsByClassName('app_question_line');

let pluses = document.getElementsByClassName('the_app_question_plus');

let question_text = document.getElementsByClassName('the_app_question_text');

let question_answer = document.getElementsByClassName('app_question_hidden_answer');

let big_questions = document.getElementsByClassName('app_questions');

let change_h2_app = document.getElementById('change_h2_app');

let change_h2_app_array = ['Подача заявок','Требования к участникам','Информация о проекте','Обучение','Трудоустройство']



for(let i=0; i<app_question.length; i++){
	app_question[i].onclick = function() {


		question_answer[i].classList.toggle('toggledisp')

		if (pluses[i].style.rotate != '45deg') {
			pluses[i].style.rotate = '45deg'
		}else if(pluses[i].style.rotate == '45deg'){
			pluses[i].style.rotate = '0deg'
		}
		
	}



	question_answer[i].onclick = function() {
		question_answer[i].classList.toggle('toggledisp');
		pluses[i].style.rotate = '0deg'
	}
}



let question_nav = document.getElementsByClassName('question_nav')[0].getElementsByTagName('button');


for(let i=0; i<question_nav.length; i++){
	question_nav[i].onclick = function() {
			
			change_h2_app.innerText = change_h2_app_array[i];

			big_questions[i].style.display = 'block';

		for(let j=0; j<question_nav.length; j++){
			question_nav[j].style.backgroundColor = 'unset';
			question_nav[j].style.color = 'black';
			if (j!=i) {
				big_questions[j].style.display = 'none';
			}
			
		}
		question_nav[i].style.backgroundColor = '#1587c2';
		question_nav[i].style.color = 'white';


	}

}



// let hideit_but = document.getElementsByClassName('hideit_but');
// let hide_it = document.getElementsByClassName('hide_it');
// let half_page = document.getElementById('half_page');
// let inputs = document.getElementsByTagName('input')


// hideit_but[2].onclick = function() {
// 	alert('Отправка формы на доработке');
// }


// hideit_but[1].onclick = function() {

// 	for(let i = 0; i<=5; i++){
// 		if (inputs[i].value == '') {
// 			alert('Не все поля заполнены');
// 			return false;
// 		}
// 	}

// 	hide_it[0].style.display = 'none';
// 	hide_it[1].style.display = 'block';
// 	hide_it[2].style.display = 'block';
// 	hideit_but[0].style.visibility = 'visible';
// 	hideit_but[1].style.display = 'none';
// 	hideit_but[2].style.display = 'block';
// 	half_page.innerText = '2 / 2';
// }

// hideit_but[0].onclick = function() {
// 	hide_it[0].style.display = 'block';
// 	hide_it[1].style.display = 'none';
// 	hide_it[2].style.display = 'none';
// 	hideit_but[0].style.visibility = 'hidden';
// 	hideit_but[1].style.display = 'block';
// 	hideit_but[2].style.display = 'none';
// 	half_page.innerText = '1 / 2';
// }



let news = document.getElementsByClassName('news_post');
let news_content = document.getElementsByClassName('separate_content');



for(let i = 0; i<news.length;i++){

	news[i].onclick = function() {
		document.getElementsByTagName('nav')[0].style.display = 'none';
		document.body.style.overflow = 'hidden';
		document.getElementsByClassName('absolute_separate')[0].style.display = 'block';
		for(let j = 0; j<news.length;j++ ){
			news_content[j].style.display = 'none';
		}
		news_content[i].style.display = 'block';

	}
}


document.getElementsByClassName('arrow_left')[0].onclick = function(){
	document.getElementsByTagName('nav')[0].style.display = 'flex';
	document.body.style.overflow = 'auto';
	document.getElementsByClassName('absolute_separate')[0].style.display = 'none';
}
		


let cases = document.getElementsByClassName('cases');
let thecases = document.getElementsByClassName('thecases');
let arrow_cases = document.getElementsByClassName('c_arrow');
let c_counter = 0;
let c_counter_2 = 0;

window.addEventListener('resize', function() {
    if(window.screen.width < 770){
		thecases[0].style.transform = 'translateX(0)';
		thecases[0].style.overflow = 'auto';
		thecases[1].style.transform = 'translateX(0)';
		thecases[1].style.overflow = 'auto';
	}
}, true);



arrow_cases[0].onclick = function(){
	if (thecases[0].style.transform == 'translateX(50vw)'||thecases[0].style.transform == 'translateX(40vw)') {
		thecases[0].style.transform = 'translateX(40vw)';return true;
		 // cases[0].style.marginLeft ='10vw';
	}

	else{
		c_counter += 50;
		thecases[0].style.transform = 'translateX('+ c_counter + 'vw)';
	}

}


arrow_cases[1].onclick = function(){

c_counter += -50;
	    cases[0].style.margin ='0';
		cases[0].style.overflow = 'hidden';
		thecases[0].style.overflow = 'unset';
		thecases[0].style.transform = 'translateX('+ c_counter + 'vw)';

}



arrow_cases[2].onclick = function(){
	if (thecases[1].style.transform == 'translateX(50vw)'||thecases[1].style.transform == 'translateX(40vw)') {
		thecases[1].style.transform = 'translateX(40vw)';return true;
		 // cases[0].style.marginLeft ='10vw';
	}

	else{
		c_counter_2 += 50;
		thecases[1].style.transform = 'translateX('+ c_counter_2 + 'vw)';
	}

}



arrow_cases[3].onclick = function(){

c_counter_2 += -50;
	    cases[1].style.margin ='0';
		cases[1].style.overflow = 'hidden';
		thecases[1].style.overflow = 'unset';
		thecases[1].style.transform = 'translateX('+ c_counter_2 + 'vw)';

}






document.getElementsByClassName('foot_absol')[0].onclick =function() {
	document.getElementsByClassName('fixed_foot')[0].style.display='none';
}

document.getElementsByClassName('fixed_foot')[0].getElementsByTagName('button')[0].onclick = function(
	) {document.getElementsByClassName('fixed_foot')[0].style.display='none'} 



let ccbig = document.getElementById('ccbig');
let cardcase_1 = document.getElementsByClassName('cc1');
let ccclose = document.getElementById('inner_back');
let cbbig = document.getElementsByClassName('cardcasebig_1');
let cbbig_2 = document.getElementsByClassName('cardcasebig_2');

for(let i = 0; i<cardcase_1.length;i++){
	cardcase_1[i].onclick = function() {
		cbbig[0].style.display = 'block';
		cbbig_2[0].innerHTML = cardcase_1[i].innerHTML + ccclose.innerHTML;

		document.getElementById('ccbigclose').onclick = function(){
			cbbig[0].style.display = 'none';
		}

		
	} 
}






let fight_am = document.getElementsByClassName('i_am');
let wrapfght = document.getElementsByClassName('wrap_chfight');

for(let i = 0; i < fight_am.length; i++){
	fight_am[i].onclick = function(){
		cbbig[1].style.display = 'block';
		wrapfght[i].style.display = 'block';
	}

	document.getElementById('ccbigclose_2').onclick = function(){
			cbbig[1].style.display = 'none';
			for(let j = 0; j<fight_am.length;j++){
				wrapfght[j].style.display = 'none';
			}		 			
		}

		cbbig[1].onclick = function() {
			cbbig[1].style.display = 'none';
			for(let j = 0; j<fight_am.length;j++){
				wrapfght[j].style.display = 'none';
			}	
		}

		cbbig[0].onclick = function() {
			cbbig[0].style.display = 'none';
		}
}


// document.getElementById('main_form').addEventListener('submit',(event)=>{
// 	 event.preventDefault();
// })



let inputs =  document.getElementsByTagName('input');

	document.getElementById('main_form').addEventListener('submit',(event)=>{
for(let i = 0; i<=5; i++){
		if (inputs[i].value == '') {
					event.preventDefault();
					alert('Не все поля заполнены');
					return false;
				}

			}

			if (!document.querySelectorAll('[type="checkbox"]')[0].checked) {
					event.preventDefault();
					alert('Примите условия соглашения об обработке персональных данных');
					return false;
				}



})
	

