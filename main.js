const questions = [
	{
		question: "Я чувствую подавленность",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Утром я чувствую себя лучше всего",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "У меня бывают периоды плача или близости к слезам",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "У меня плохой ночной сон",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Аппетит у меня не хуже обычного",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Мне приятно смотреть на привлекательных женщин/мужчин, разговаривать с ними, находиться рядом",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Я замечаю, что теряю вес (не в связи со специальной диетой или другими специальными мерами для снижения веса)",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Меня беспокоят проблемы со стулом",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Сердце бьется быстрее, чем обычно",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Я устаю без всяких причин",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Я мыслю так же ясно, как всегда",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Мне легко делать то, что я умею",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Чувствую беспокойство и не могу усидеть на месте",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "У меня есть надежды на будущее",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Я более раздражителен, чем обычно",
		answerstext: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Мне легко принимать решения",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Я чувствую, что полезен и необходим",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Я живу достаточно полной жизнью",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Меня до сих пор радует то, что радовало всегда",
		answerstext: ["Да", "Нет"],
		correct: 2,
	},
	{
		question: "Я чувствую, что другим людям станет лучше, если я умру",
		answerstext: ["Да", "Нет"],
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
				</div>
		</label>
	</li>`;

	for ([index, answerContent] of questions[qindex]['answerstext'].entries()){
		let answerHTML = questionTemplate
									.replace('%number%', index+1)
									.replace('%answer%', questions[qindex]['answerstext'][index])

		listContainer.innerHTML += answerHTML;
		
	}

}

function checkAnswer(){
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	if (!checkedRadio){
		console.log("No answer selected")
		return
	}else{
		console.log("The answer is selected")
	}

	const userAnswer = parseInt(checkedRadio.value);

	if (userAnswer === questions[qindex]['correct']){
		score++;
	}

	if (qindex !== questions.length-1){
		qindex++;
		clearPage();
		showQuestion();
	} else {
		clearPage();
		showResults();
		testResults();
	}
}
let results = 0
function showResults(){
	const resultsTemplste = 
				`<h2 class="title">%title%</h2>
				<h3 class="summary">%mesage%</h3>
				<p class="result">%result%</p>
				`;
	let title, message;
	if (score>=0 && score<=10 ){
		results = 1
		title = 'Нормальное состояние';
		message = 'Ваше состояние в пределах нормы.';
	} else if (score>=11 && score<=14){
		results = 2
		title = 'Лёгкая депрессия';
		message = 'Возможно, вы имеете депрессию лёгкой степени, ситуативного или невротического происхождения.';
	} else if (score>=15 && score<=17){
		results = 3
		title = 'Умеренная депрессия';
		message = 'Вам стоит подумать об обращении к специалисту за помощью.';
	} else if (score>=18 && score<=18){
		results = 4
		title = 'Тяжелая депрессия';
		message = 'Вам необходима помощь специалиста.';
	}
	
	let result = `${score} из ${questions.length} симптомов.`

	const finalMessage = resultsTemplste
							.replace('%title%', title)
							.replace('%mesage%', message)
							.replace('%result%', result)
	headerContainer.innerHTML = finalMessage
	btn.blur();
	btn. innerText = 'Начать заново';
	btn.onclick = () => history.go();
}

function testAnswer(){
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	if (!checkedRadio){
		console.log("The answer is selected")
		return
	}else{
		console.log("No answer selected")
		return
	}

}
testAnswer();
function testResults(){
	if (score>=0 && score<=10 ){
		if(results === 1){
			console.log('Results are right')
		} else(
			console.log('Results are wrong')
		)
	}else if(score>=11 && score<=14){
		if(results === 2){
			console.log('Results are right')
		} else(
			console.log('Results are wrong')
		)
	}else if(score>=15 && score<=17){
		if(results === 3){
			console.log('Results are right')
		} else(
			console.log('Results are wrong')
		)
	}else if(score>=18){
		if(results === 4){
			console.log('Results are right')
		} else(
			console.log('Results are wrong')
		)
	}
}
