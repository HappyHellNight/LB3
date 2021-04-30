
	var trigger=0, name, age, sex,place,education, mathematic, asu, cutting, programming,language; // обьявляем переменные которые понадобятся в ходе работы
	var button = document.getElementById('b');
	document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			do {
			name = prompt("Введите имя");
			} while (!(/([a-zA-Zа-яёА-ЯЁ])/.test(name)));
			do {
			age = parseInt(prompt("Введите возраст"));
			} while (!(/\d/.test(age)));
			do {
			sex = prompt("Введите пол");
			} while (!(/([М])/.test(sex) || /([Ж])/.test(sex)|| /([M])/.test(sex) || /([W])/.test(sex)));
			place = prompt("Место рождения");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			language = confirm("Знаете ли вы какой-либо иностранный язык?");
			document.getElementById("startTest").style = "display: none";
			document.getElementById("education").setAttribute('disabled', 'disabled');
			document.getElementById("mathematic").setAttribute('disabled', 'disabled');
			document.getElementById("asu").setAttribute('disabled', 'disabled');
			document.getElementById("cutting").setAttribute('disabled', 'disabled');
			document.getElementById("programming").setAttribute('disabled', 'disabled');
			document.getElementById("language").setAttribute('disabled', 'disabled');
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#place").val(place)
			$("#place").focus();
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("language").checked = language;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".					
	    	var x = document.getElementById("div1");

		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		}
		}
