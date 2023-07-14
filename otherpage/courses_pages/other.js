// let app_question = document.getElementsByClassName('course_slize_unit');

// let pluses = document.getElementsByClassName('course_plus');

// let question_answer = document.getElementsByClassName('course_hidden_answer');



// for(let i=0; i<app_question.length; i++){
// 	app_question[i].onclick = function() {


// 		question_answer[i].classList.toggle('toggledisp')

// 		if (pluses[i].style.rotate != '45deg') {
// 			pluses[i].style.rotate = '45deg'
// 		}
// 		else if(pluses[i].style.rotate == '45deg'){
// 			pluses[i].style.rotate = '0deg'
// 		}
		
// 	}
// }




// let cases = document.getElementsByClassName('cases');
// let thecases = document.getElementsByClassName('thecases');
// let arrow_cases = document.getElementsByClassName('c_arrow');
// let c_counter = 0;

// window.addEventListener('resize', function() {
//     if(window.screen.width < 770){
// 		thecases[0].style.transform = 'translateX(0)';
// 		thecases[0].style.overflow = 'auto';
// 	}
// }, true);



// arrow_cases[0].onclick = function(){
// 	if (thecases[0].style.transform == 'translateX(50vw)'||thecases[0].style.transform == 'translateX(40vw)') {
// 		thecases[0].style.transform = 'translateX(40vw)';return true;
// 		 // cases[0].style.marginLeft ='10vw';
// 	}

// 	else{
// 		c_counter += 50;
// 		thecases[0].style.transform = 'translateX('+ c_counter + 'vw)';
// 	}

// }


// arrow_cases[1].onclick = function(){

// c_counter += -50;
// 	    cases[0].style.margin ='0';
// 		cases[0].style.overflow = 'hidden';
// 		thecases[0].style.overflow = 'unset';
// 		thecases[0].style.transform = 'translateX('+ c_counter + 'vw)';

// }


// document.getElementsByClassName('images')[0].getElementsByTagName('a')[0].herf = '../../index.html';



// let ccbig = document.getElementById('ccbig');
// let cardcase_1 = document.getElementsByClassName('cc1');
// let ccclose = document.getElementById('inner_back');
// let cbbig = document.getElementsByClassName('cardcasebig_1');
// let cbbig_2 = document.getElementsByClassName('cardcasebig_2');

// for(let i = 0; i<cardcase_1.length;i++){
// 	cardcase_1[i].onclick = function() {
// 		cbbig[0].style.display = 'block';
// 		cbbig_2[0].innerHTML = cardcase_1[i].innerHTML + ccclose.innerHTML;

// 		document.getElementById('ccbigclose').onclick = function(){
// 			cbbig[0].style.display = 'none';
			
// 		}

		
// 	} 
// }



// let hideit_but = document.getElementsByClassName('hideit_but');
// let hide_it = document.getElementsByClassName('hide_it');
// let half_page = document.getElementById('half_page');
// let inputs = document.getElementsByTagName('input');



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

// cbbig[0].onclick = function() {
// 			cbbig[0].style.display = 'none';
// 		}

		
document.getElementById('change_program').innerText = document.getElementsByTagName('h2')[0].innerText;



let accept = document.getElementsByClassName('i_accept')[0];
accept.style.display = 'block';
accept.innerHTML = '<label><input type="checkbox"> Я принимаю условия соглашения об обработке персональных данных ЦОПП</label>'



document.getElementsByClassName('inputs_2')[0].style.display = 'block';
document.getElementsByClassName('half_page')[0].style.display = 'none';
document.getElementsByClassName('next_click ')[1].style.display = 'none';
document.getElementsByClassName('next_click ')[2].style.display = 'block';



let inputs = document.getElementsByTagName('input');
document.querySelectorAll('[placeholder="Комментарий"]')[0].style.display = 'none';

	document.getElementsByClassName('main_form')[0].addEventListener('submit',(event)=>{
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
	