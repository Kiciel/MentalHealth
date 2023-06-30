const questions = [
	{
		question: "Какая птицу не встретишь зимой?",
		answerstext: ["Ласточку", "Снегиря", "Синицу"],
		answers: ["http://klubmama.ru/uploads/posts/2022-08/1661382477_29-klubmama-ru-p-podelka-ptitsa-lastochka-foto-31.jpg", 
		"https://pic.rutubelist.ru/video/30/fa/30fa1c27748d7fd1cd36e4c84786850c.jpg", 
		"https://animalzoom.ru/sites/default/files/field/image/sinica-bolshaia-10.jpg"],
		correct: 1,
	},
	{
		question: "Кто не впадает в зимнюю спячку?",
		answerstext: ["Медведь", "Ёж", "Белка"],
		answers: ["https://klike.net/uploads/posts/2023-01/1675142505_3-51.jpg", 
		"https://animal.tden.ru/wp-content/uploads/2014/10/z_233ed9d7.jpg", 
		"https://99px.ru/sstorage/56/2013/01/image_560601131720377007218.jpg"],
		correct: 3,
	},
	{
		question: "Какие цветы самыми первыми вырастают из-под снега ранней весной?",
		answerstext: ["Ветреница", "Подснежник", "Пролеска"],
		answers: ["https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663386023_14-mykaleidoscope-ru-p-sadovaya-vetrenitsa-vkontakte-14.jpg", 
		"https://phonoteka.org/uploads/posts/2023-03/1679516027_phonoteka-org-p-podsnezhniki-oboi-oboi-krasivo-33.jpg", 
		"https://vsegda-pomnim.com/uploads/posts/2022-04/1650540805_64-vsegda-pomnim-com-p-kak-viglyadyat-tsveti-proleski-foto-68.jpg"],
		correct: 2,
	},
	{
		question: "Что относится к весенней примете?",
		answerstext: ["Идет снег", "Бегут ручьи", "Желтеют листья"],
		answers: ["https://vsegda-pomnim.com/uploads/posts/2022-02/1645923228_5-vsegda-pomnim-com-p-sneg-foto-7.jpg", 
		"http://img-fotki.yandex.ru/get/68556/116075328.2eb/0_1f3b0e_77f93472_XXL.jpg", 
		"https://w-dog.ru/wallpapers/10/8/481277365446300/osen-listya-krasochnye-osennie-derevo.jpg"],
		correct: 2,
	},
	{
		question: "Какой месяц лета самый жаркий?",
		answerstext: ["Июнь", "Июль", "Август"],
		answers: ["", 
		"", 
		""],
		correct: 2,
	},
	{
		question: "Чем покрыто тело рыб?",
		answerstext: ["Чешуя", "Перья", "Шерсть"],
		answers: ["https://i.pinimg.com/originals/1e/6e/06/1e6e066661d41eb28b14d40d405fe14a.jpg", 
		"https://w-dog.ru/wallpapers/2/9/558868986913650/tekstura-s-izobrazheniem-perev-ekzoticheskoj-pticy.jpg", 
		"http://images.ctfassets.net/i04syw39vv9p/7057qi18qbxsKWNmb5a7Ro/72c5b978723cb3b5a0259a53062f7ead/DanCox_D125287.jpg"],
		correct: 1,
	},
	{
		question: "Отметь несъедобный гриб!",
		answerstext: ["Лисичка", "Шампиньон", "Бледная поганка"],
		answers: ["https://kipmu.ru/wp-content/uploads/lisichkigl-scaled.jpg", 
		"https://vsegda-pomnim.com/uploads/posts/2023-02/1675721435_vsegda-pomnim-com-p-shampinon-lugovoi-sedobnii-foto-45.jpg", 
		"https://vsegda-pomnim.com/uploads/posts/2023-02/1675662962_vsegda-pomnim-com-p-foto-blednoi-poganki-i-shampinona-foto-52.jpg"],
		correct: 3,
	},
	{
		question: "Что делают насекомые осенью?",
		answerstext: ["Летают на улице", "Впадают в анабиоз", "Спят"],
		answers: ["", 
		"", 
		""],
		correct: 2,
	},
	{
		question: "О чем наука экология?",
		answerstext: ["О животных", "О космосе", "О бережном отношении к природе"],
		answers: ["", 
		"", 
		""],
		correct: 3,
	},
	{
		question: "Как выглядит знак переработки мусора?",
		answerstext: ["", "", ""],
		answers: ["https://edin-center-reshenii.com/images/ic49.png", 
		"http://ofertikon.pl/2777-thickbox_default/naklejka-in28-smieci-wrzucac-do-kosza.jpg", 
		"https://cdn4.iconfinder.com/data/icons/green-energy-outline-1/64/02_lamp_energy_save_green_light_ecology-1024.png"],
		correct: 1,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const btn = document.querySelector('#submit');

let score = 0;
let qindex = 0;

clearPage();
showQuestion();
checkNumber();
btn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	title = headerTemplate.replace('%title%', questions[qindex]['question'])
	headerContainer.innerHTML = title;
	
	const questionTemplate = 
	`<li>
		<label>
				<div class="img-block">
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span> <br>
					<img class="image-quiz" src="%src%" alt="">
				</div>
		</label>
	</li>`;

	for ([index, answerContent] of questions[qindex]['answers'].entries()){
		let answerHTML = questionTemplate
									.replace('%number%', index+1)
									.replace('%src%', answerContent)
									.replace('%answer%', questions[qindex]['answerstext'][index])

		listContainer.innerHTML += answerHTML;
		
	}

}
function checkNumber(){
	if (qindex<2){
		document.body.style.backgroundImage = "url('https://3dnews.ru/assets/external/illustrations/2019/03/24/984660/The-Red-Lantern_1.png')";
	}else if(2<=qindex && qindex<=3){
		document.body.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/a478a992570855.5e873af304901.jpg')";
	}else if(4<=qindex && qindex<=5){
		document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/b1/b1/72/b1b17241e8cd578a8c7d3bd8994f8e1f.jpg')";
	}else if(6<=qindex && qindex<=7){
		document.body.style.backgroundImage = "url('https://wp-s.ru/wallpapers/12/17/319175601807267/risunok-motociklist-edet-po-osennemu-lesu.jpg')";
	}else{
		document.body.style.backgroundImage = "url('https://phonoteka.org/uploads/posts/2022-09/1663709775_24-phonoteka-org-p-fon-dlya-ekologicheskoi-prezentatsii-pinte-24.jpg')";
	}
}

function checkAnswer(){
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
	
	if (!checkedRadio){
		btn.blur();
		return
	}

	const userAnswer = parseInt(checkedRadio.value);

	if (userAnswer === questions[qindex]['correct']){
		score++;
	}

	if (qindex !== questions.length-1){
		qindex++;
		clearPage();
		showQuestion();
		checkNumber();
	} else {
		clearPage();
		showResults();
	}
}

function showResults(){
	const resultsTemplste = 
				`<h2 class="title">%title%</h2>
				<h3 class="summary">%mesage%</h3>
				<p class="result">%result%</p>
				`;
	let title, message;
	if (score === questions.length){
		title = 'Отлично!';
		message = 'Вы ответили верно на все вопросы!';
	} else if ((score*100)/questions.length>=50){
		title = 'Хорошо!';
		message = 'Вы дали более половины правильных ответов!';
	}else {
		title = 'Неплохо!';
		message = 'Вы дали более половины правильных ответов!';
	}
	let result = `Верно ${score} из ${questions.length} вопросов.`

	const finalMessage = resultsTemplste
							.replace('%title%', title)
							.replace('%mesage%', message)
							.replace('%result%', result)
	headerContainer.innerHTML = finalMessage
	btn.blur();
	btn. innerText = 'Начать заново';
	btn.onclick = () => history.go();
}