export default {
  state: () => ({
    name: 'Основы',
    pageName: 'basics',
    description: 'В этом блоке разобраны самые основные концепции математики: уравнения и неравенства, степени и корни, координатная прямая и плоскость. Также будут немного затронуты комплексные числа. Рекомендуется всем пройти данный блок, даже если вы уже знакомы с этими концепциями.',
    topics: [
      'Вещественные числа',
      'Степени и корни',
      'Алгебраические выражения',
      'Рациональные выражения',
      'Уравнения',
      'Комплексные числа',
      'Неравенства',
      'Координатная плоскость; графики уравнений; круги',
      'Линии',
      'Решение уравнений и неравенств графическом способом'
    ],
    content: {
      1: {
        name: 'Вещественные числа',
        steps: [
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Что такое [вещественные числа]' },
              { type: 'text', content: 'В этой теме мы начнём с разбора основополагающего понятия — [s]вещественные числа[/s]. Это такие числа которые мы используем в повседневной жизни, и делятся они на различные типы.' },
              { type: 'text', content: 'Самый маленький тип это [s]натуральные числа[/s]:' },
              { type: 'text', content: '$$ 1, 2, 3, 4, 5... $$' },
              { type: 'text', content: 'Данный тип включает в себя все числа от \\(1\\) до бесконечности, то есть данный ряд чисел бесконечен в одну сторону. Хочу заметить что \\(0\\) в натуральные числа не входит.' },
              { type: 'text', content: 'Следующий тип чисел — [s]целые числа[/s]:' },
              { type: 'text', content: '$$ ...-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5... $$' },
              { type: 'text', content: 'Данный тип расширяет натуральные числа, добавляя к ним отрицательные числа и \\(0\\). То есть данный ряд чисел бесконечен уже в две стороны.' },
              { type: 'text', content: 'Далее у нас идут [s]рациональные числа[/s], которые расширяют целые числа, добавляя к ним дроби. Все числа данного типа могут быть выражены в виде:' },
              { type: 'text', content: '$$ r=\\frac{a}{b} $$' },
              { type: 'text', content: 'В данном курсе я не буду подробно останавливаться на том как работают дроби. Вкратце скажу лишь то, что в данном случае дробь \\(\\frac{a}{b}\\) означает деление \\(a\\) на \\(b\\), либо взятие \\(a\\) частей от единицы разделённой на \\(b\\) частей. (это два абсолютно взаимозаменяемых определения которые приводят к одному результату)' },
              { type: 'text', content: 'Также стоит заметить что множестсво рациональных чисел состоит не только из дробей, но также из всех предыдущих типов. Например \\(42\\) относится к рациональным числам, так как его можно представить в виде дроби \\(\\frac{42}{1}\\)(\\(42\\) делить на \\(1\\) будет \\(42\\))' },
              { type: 'mini-question', content: { question: 'Как представить число 42 в виде дроби', answer: '\\(42=\\frac{42}{1}\\), так как \\(42\\) разделить на \\(1\\) будет \\(42\\)' } },
              { type: 'text', content: 'Такие случаи когда \\(b\\) является нулём, например \\(\\frac{0}{0}\\) или \\(\\frac{8}{0}\\) являются неопределёнными.' },
              { type: 'text', content: 'Если вы плохо разбираетесь в дробях, рекомендую обратиться к сторонним материалам для более начинающих.' },
              { type: 'text', content: 'Следующий и последний тип — [s]иррациональные числа[/s], который уже не является расширением рациональных чисел, а является отдельным типом, который включает в себя числа которые не могут быть выражены рациональным числом. Примером иррационального числа может быть число \\(\\pi\\) или \\(\\sqrt{2}\\)' },
              { type: 'text', content: 'Таким образом все перечисленные типы чисел вместе образуют вещественные числа, множество которых обозначается символом \\(\\mathbb{R} \\). Когда мы говорим о числе, то мы подразумеваем именно это множество.' },
              { type: 'text', content: 'Любое вещественное число имеет десятичное представление. Если число рациональное то некоторая его часть будет повторяться. Например:' },
              { type: 'text', content: '$$ \\frac{1}{2}=0.50000... = 0.5\\overline{0}  $$' },
              { type: 'text', content: '$$ \\frac{145}{555}=0.261261261... = 0.\\overline{261} $$' },
              { type: 'text', content: 'Вы можете заметить что чёрточка сверху обозначает бесконечное повторение числа' },
              { type: 'text', content: 'Если мы возьмём иррациональные числа, в них не будет повторяющейся части, соответственно последовательность после десятичной точки можно вычислять бесконечно, в зависимости от необходимой точности.' },
              { type: 'text', content: '$$ \\sqrt{2} = 1.414213562373095... $$' },
              { type: 'text', content: '$$ \\pi = 3.141592653589793... $$' },
              { type: 'text', content: 'Если мы решим остановиться на некотором числе после точки, мы должны будем использовать для этого правила округления' },
              { type: 'text', content: '$$\\pi\\approx3.14159265 $$' },
              { type: 'text', content: 'Знак \\(\\approx\\) говорит о том что число \\(3.14159265\\) приблизительно равно \\(\\pi\\)' },
              { type: 'sub-title', content: 'Свойства вещественных чисел' },
              { type: 'text', content: 'Теперь поговорим о том какие есть важные свойства вещественных чисел. Мы понимаем что \\(2+3=3+2\\), или что \\(4+2=2+4\\). Но все такие случаи описываются одним свойством:' },
              { type: 'text', content: '$$ a+b=b+a $$' },
              { type: 'text', content: 'Под \\(a\\) и \\(b\\) можно подставить любые два числа и равенство будет работать. Иными словами данное свойство говорит что порядок сложения чисел не имеет значения — сумма будет одинаковой. Название данного свойства: [s]коммутативное свойство сложения[/s].' },
              { type: 'text', content: 'На самом деле данное свойство показывает также что \\(1+2+3=3+2+1\\) если подставить \\(a=1+2\\) и \\(b=3\\). Либо можно привести к виду \\(a+b=b+a\\) сложив \\(1+2\\) и получить равенство \\(3+3=3+3\\) при котором под \\(a\\) и \\(b\\) подставить \\(3\\).' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Следующее свойство — [s]коммутативное свойство умножения[/s]:' },
              { type: 'text', content: '$$a \\cdot b=b \\cdot a$$' },
              { type: 'text', content: 'Оно очень похоже на коммутативное свойство сложения, но только уже относится к умножению. Часто в выражениях опускаются знаки умножения, поэтому можно записать:' },
              { type: 'text', content: '$$ab=ba$$' },
              { type: 'text', content: 'Исходя из этого, можно сказать что \\(7 \\cdot 8 = 8 \\cdot 7\\), или же что \\(2 \\cdot 3 \\cdot 4=4 \\cdot 3 \\cdot 2\\) по логике описанной в предыдущем свойстве.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Есть также ассоциативное свойство сложения и умножения. Выглядят они так:' },
              { type: 'text', content: '$$(a+b)+c=a+(b+c)$$' },
              { type: 'text', content: '$$(ab)c=a(bc)$$' },
              { type: 'text', content: 'Данные свойства нам говорят о том, что, неважно какие два члена суммы или произведения сложим, или умножим первыми. Скобки в выражениях указывают какое действие будет выполнено раньше.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'А теперь, рассмотрим очень важное свойство которое уже не такое интуитивно понятное как предыдущие — [s]распределительное свойство[/s]:' },
              { type: 'text', content: '$$a(b+c)=ab+ac$$' },
              { type: 'text', content: 'Данное свойство говорит: для того что бы умножить сумму на число, мы можем умножить число на каждое слагаемое и сложить полученные результаты. Например:' },
              { type: 'text', content: '$$3(5+2)=3\\cdot 5+3\\cdot 2=15+6=21$$' },
              { type: 'text', content: '$$3(5+2)=3\\cdot 7=21$$' },
              { type: 'text', content: 'Также вместо числа \\(a\\) можно подставить сумму:' },
              { type: 'text', content: '$$(1+2)(5+2)=$$' },
              { type: 'text', content: '$$=(1+2)5+(1+2)2=$$' },
              { type: 'text', content: '$$=1\\cdot 5 + 2\\cdot 5 + 1\\cdot 2 + 2\\cdot 2=$$' },
              { type: 'text', content: '$$=(1+2)5+(1+2)2=$$' },
              { type: 'text', content: '$$(1+2)(5+2)=3\\cdot7=21$$' },
              { type: 'text', content: 'Как можно увидеть, результаты получаются одинаковые.' },
              { type: 'text', content: 'В данном случае \\(a=1+2\\), \\(b=5\\) и \\(c=2\\). Но почему данное свойство так работает? Попробую объяснить' },
              { type: 'text', content: 'Допустим мы пишем:' },
              { type: 'text', content: '$$3(3+4)$$' },
              { type: 'text', content: 'По сути оно означает что мы просто складываем три суммы \\(3+4\\). Это можно переписать так:' },
              { type: 'text', content: '$$(3+4)+(3+4)+(3+4)$$' },
              { type: 'text', content: 'Скобки в данном случае не играют никакой роли, так как сумма не зависит от порядка сложения. Мы можем убрать эти скобки:' },
              { type: 'text', content: '$$3+4+3+4+3+4$$' },
              { type: 'text', content: 'А затем мы можем для удобства сгруппировать одинаковые слагаемые в скобки:' },
              { type: 'text', content: '$$(3+3+3)+(4+4+4)$$' },
              { type: 'text', content: 'А так как многократное складывание одного числа можно выразить умножением, то можно написать это так(скобки я ставлю лишь для удобства, без них умножение было бы все равно первым):' },
              { type: 'text', content: '$$(3\\cdot 3)+(3\\cdot 4)$$' },
              { type: 'text', content: 'Таким образом мы пришли к варианту который получился бы у нас при использовании распределительного свойства. Теперь рассмотрим ещё пару важных примеров использования данного свойства.' },
              { type: 'text', content: '$$2(x+3)=$$' },
              { type: 'text', content: '$$=2\\cdot x+2\\cdot 3$$' },
              { type: 'text', content: '$$=2x+6$$' },
              { type: 'margin', content: {} },
              { type: 'text', content: '$$(2+4)3$$' },
              { type: 'text', content: '$$=3(2+4)$$' },
              { type: 'text', content: '$$=3\\cdot 2+3\\cdot 4$$' },
              { type: 'text', content: '$$=6+12=18$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$(a+b)(c+d)$$' },
              { type: 'text', content: '$$=(a+b)c+(a+b)d$$' },
              { type: 'text', content: '$$=ac+bc+ad+db$$' },
              { type: 'text', content: 'В последнем примере вы можете увидеть что при первом использовании распределительного свойства получилась сумма \\((a+b)c+(a+b)d\\) в которой к слагаемым \\((a+b)c\\) и \\((a+b)d\\) было также применено распределительное свойство.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Выберите] использованное свойство' },
              { type: 'select-input', content: { label: '\\((3x+2)5=15x+10\\)', value: 'exp1', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
              { type: 'select-input', content: { label: '\\(4+12=12+4\\)', value: 'exp2', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
              { type: 'select-input', content: { label: '\\(3(x+6)=3x+18\\)', value: 'exp3', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
              { type: 'select-input', content: { label: '\\((6+3)+2=6+(3+2)\\)', value: 'exp4', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } }
            ],
            data: {
              exp1: null,
              exp2: null,
              exp3: null,
              exp4: null
            },
            correctData: {
              exp1: 'Дистрибутивное свойство',
              exp2: 'Коммутативное свойство',
              exp3: 'Дистрибутивное свойство',
              exp4: 'Ассоциативное свойство'
            }
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Сложение] и [вычитание]' },
              { type: 'text', content: 'Теперь немного поговорим о сложении и вычитании. В частности о числе \\(0\\). При сложении нуля с любым другим числом, результат остаётся тем же числом: \\(0+a=a\\), где \\(a\\)-любое число.' },
              { type: 'text', content: 'Любое число \\(a\\) имеет обратное ему \\(-a\\). Например если \\(a=3\\) то \\(-a=-3\\), а если \\(a=-5\\) то \\(-a=5\\). То есть знак минуса меняет знак на противоположный. Для обратных чисел мы можем сказать что \\(a+(-a)=0\\). Всё потому что прибавление отрицательного числа к положительному, или наоборот, является вычитанием. Вычитание это обратное действие сложению.' },
              { type: 'text', content: '$$a-b=a+(-b)$$' },
              { type: 'text', content: 'Вот свойства отрицательных чисел которые вы должны понимать:' },
              { type: 'text', content: '$$(-1)\\cdot a=-a$$' },
              { type: 'text', content: '$$-(-a)=a$$' },
              { type: 'text', content: '$$(-a)b=a(-b)=-(ab)$$' },
              { type: 'text', content: '$$(-a)(-b)=ab$$' },
              { type: 'text', content: '$$-(a+b)=-a-b$$' },
              { type: 'text', content: '$$-(a-b)=-a+b=b-a$$' },
              { type: 'text', content: 'Все эти свойства используются для преобразования выражений, что может быть нужно для совершенно разных целей. Вот примеры использования' },
              { type: 'text', content: '$$-(a+10)=-a-10$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$-(a+b-c)=$$' },
              { type: 'text', content: '$$-a-b-(-c)=-a-b+c$$' },
              { type: 'text', content: 'Рекомендую разбирать все примеры вплоть до мельчайших деталей того как одно выражение преобразуется в другое.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Раскройте] скобки' },
                  { type: 'text', content: 'Раскрыть скобки это значит убрать скобки преобразовавя выражение так что бы значение выражения осталось прежним. ' },
                  { type: 'text', content: '$$5(a+b)$$' }
                ],
                correctAnswer: '$$5(a+b)=5a+5b$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Раскройте] скобки' },
                  { type: 'text', content: 'Раскрыть скобки это значит убрать скобки преобразовав выражение так что бы значение выражения осталось прежним. ' },
                  { type: 'text', content: '$$(x-y)2$$' }
                ],
                correctAnswer: '$$(x-y)2=2(x-y)=2x-2y$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Умножение] и [деление]' },
              { type: 'text', content: 'Теперь поговорим об умножении и делении. При умножении любого числа на \\(1\\), число остаётся прежним: \\(a\\cdot 1=a\\). Любое число \\(a\\) кроме нуля имеет обратное ему значение \\(\\frac{1}{a}\\), которое удовлетворяет \\(a\\cdot\\frac{1}{a}=1\\). Деление является обратным к умножению. Что поделить число \\(a\\) на число \\(b\\) мы можем умножить число \\(a\\) на \\(\\frac{1}{b}\\):' },
              { type: 'text', content: '$$a\\div b=a\\cdot \\frac{1}{b}$$' },
              { type: 'text', content: 'Выражение \\(a\\cdot \\frac{1}{b}\\) мы можем записывать как \\(\\frac{a}{b}\\). Ссылаясь на \\(\\frac{a}{b}\\) мы говорим что это [s]отношение[/s] \\(a\\) к \\(b\\) или деление \\(a\\) на \\(b\\). Число \\(a\\) мы называем [s]числителем[/s], \\(b\\) [s]знаменателем[/s]' },
              { type: 'text', content: 'Теперь рассмотрим важные свойства дробей которые вы уже должны знать, раз вы осмелились изучать данный курс' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ab}{cd}$$' },
              { type: 'text', content: '$$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$$' },
              { type: 'text', content: '$$\\frac{a}{c}+\\frac{b}{c}=\\frac{a+b}{c}$$' },
              { type: 'text', content: '$$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$$' },
              { type: 'text', content: '$$\\frac{ac}{bc}=\\frac{a}{b}$$' },
              { type: 'text', content: '$$\\frac{a}{b}=\\frac{c}{d}\\Rightarrow ad=bc$$' },
              { type: 'text', content: 'Символ \\(\\Rightarrow \\) в последнем свойстве можно перевести как "следовательно" или "то", соответственно это можно перести как: если \\(\\frac{a}{b}=\\frac{c}{d}\\), то \\(ad=bc\\).' },
              { type: 'text', content: 'Особого внимания также заслуживает сложение дробей с разными знаменателями. В основном мы не пользуемся представленным свойством, а преобразуем дроби так что бы у них был одинаковый знаменатель. Для этого мы можем сокращать или расширять дроби не меняя их, в этом нам также может помочь НОК. Рассмотрим пример:' },
              { type: 'text', content: '$$\\frac{5}{36}+\\frac{7}{120}$$' },
              { type: 'text', content: 'Разложив знаменатели \\(36\\) и \\(120\\) мы получаем \\(36=2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 3\\) и \\(120=2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 5\\). Исходя их этого НОК равен \\(360\\), и мы можем домножить каждую дробь до этого числа:' },
              { type: 'text', content: '$$\\frac{5 \\cdot 10}{36 \\cdot 10}+\\frac{7 \\cdot 3}{120 \\cdot 3}=\\frac{50}{360}+\\frac{21}{360}$$' },
              { type: 'text', content: 'Таким образом мы не изменили значения дробей, но привели их к единому знаменателю, и теперь можем легко сложить:' },
              { type: 'text', content: '$$\\frac{50}{360}+\\frac{21}{360}=\\frac{71}{360}$$' },
              { type: 'text', content: 'Если многое было не понятно, не знаете что такое НОК, не понимаете как работают дроби и что это такое, рекомендую перед прохождением данного курса, ознакомиться с материалами для более начинающих.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Сложите] дроби' },
              { type: 'text', content: '$$\\frac{3}{10}+\\frac{4}{15}$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$\\frac{3}{10}+\\frac{4}{15}=\\frac{3 \\cdot 3}{10 \\cdot 3}+\\frac{4 \\cdot 2}{15 \\cdot 2}$$' },
              { type: 'text', content: '$$=\\frac{9}{30}+\\frac{8}{30}=\\frac{17}{30}$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Координатная прямая' },
              { type: 'text', content: 'Теперь рассмотрим как можно визуально отобразить вещественные числа, а точнее, их ряд. Для этого мы можем использовать [s]координатную прямую[/s]. В её центре находится ноль, слева все отрицательные числа, справа положительные. Вот пример такой прямой:' },
              { type: 'real-line-output', content: {} },
              { type: 'text', content: 'Она идёт бесконечно в обе стороны, но нарисовать мы этого не можем, и в этом примере ограничились 5 единицами в обе стороны. На ней мы можем отметить число 2' },
              { type: 'real-line-output', content: { values: [{ label: '2', value: 2 }] } },
              { type: 'text', content: 'Хотя это не особо имеет смысл так как целые числа уже отмечены делениями, гораздо интереснее будет отметить например \\(0.5\\)' },
              { type: 'real-line-output', content: { values: [{ label: '0.5', value: 0.5 }] } },
              { type: 'text', content: 'Вот ещё примеры:' },
              { type: 'real-line-output', content: { values: [{ label: '0.25', value: 0.25 }, { label: 'e', value: Math.E }, { label: 'π', value: Math.PI }, { label: '-3.5', value: -3.5 }] } },
              { type: 'text', content: 'Среди чисел на прямой можно также заметить два числа обозначенных буквами. Это иррациональные числа. С ними мы познакомимся позже.' },
              { type: 'text', content: 'Когда мы говорим что \\(a\\) меньше \\(b\\) и записываем \\(a\t&lt;b\\), то соответственно \\(b-a\\) больше нуля. А в геометрическом смысле это означает что \\(a\\) лежит левее \\(b\\) на координатной прямой. Соответственно если мы пишем \\(a>b\\), то значит на координатной прямой \\(a\\) лежит правее \\(b\\). Также есть символы \\(\\leq \\) и \\(\\geq \\) которые означают "меньше или равно"(\\(\\leq \\)) и "больше или равно"(\\(\\geq \\)). Например, вот верные неравенства:' },
              { type: 'text', content: '$$-1.3<2.5$$' },
              { type: 'text', content: '$$-1.3>-e$$' },
              { type: 'text', content: '$$2.5>a$$' },
              { type: 'real-line-output', content: { values: [{ label: '2.5', value: 2.5 }, { label: '-1.3', value: -1.3 }, { label: '-e', value: -Math.E }, { label: 'a', value: 1.8 }] } },
              { type: 'text', content: 'Хочу заметить, что мы хоть и не знаем точное числовое значение переменной \\(a\\), но ориентируясь на координатную прямую, можно точно сказать что \\(2.5>a\\), так как' },
              { type: 'mini-question', content: { question: 'Почему мы можем сказать что \\(2.5\\) больше \\(a\\)', answer: 'Потому что \\(2.5\\) лежит правее \\(a\\) на координатной оси' } }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Множества] и [интервалы]' },
              { type: 'text', content: 'Множество это коллекция объектов, которые мы называем [s]элементами множества[/s]. Если \\(S\\) это множество, то запись \\(a \\in S\\) означает что \\(a\\) является элементом множества \\(S\\). А \\(b \\notin S\\) означает что \\(b\\) не является элементом множества \\(S\\). Например, если множество \\(Z\\) содержит все целые числа, то \\(-5\\in Z\\), но \\(7.645 \\notin Z\\). Некоторые множества могут быть описаны перечислением их элементов. Например, скажем, что множество \\(A\\) содержит все натуральные числа меньше семи:' },
              { type: 'text', content: '$$A = \\{1,2,3,4,5,6\\}$$' },
              { type: 'text', content: 'Если \\(A\\) и \\(B\\) это некоторые множества, то \\(A \\cup B\\) означает объединение данных множеств. То есть во множестве \\(С=A \\cup B\\) будут находиться элементы обоих множеств. А вот \\(A\\cap B\\) означает пересечение множеств, значит множество \\(D=A\\cap B\\) будет иметь только те элементы, которые находятся в обоих множествах. Также есть знак \\(\\varnothing \\) который означает пустое множество. Проще будет понять на примере:' },
              { type: 'text', content: '$$A = \\{1,2,3,4,5,6,7,8\\}$$' },
              { type: 'text', content: '$$B = \\{6,7,8,9,10\\}$$' },
              { type: 'text', content: '$$A \\cup B = \\{1,2,3,4,5,6,7,8,9,10\\}$$' },
              { type: 'text', content: '$$A \\cap B = \\{6,7,8\\}$$' },
              { type: 'text', content: '$$B \\cap \\{11,12,13\\} = \\varnothing $$' },
              { type: 'sub-title', content: 'Интервалы' },
              { type: 'text', content: 'Что делать, если мы хотим определить множество \\(A\\), в котором будут абсолютно все числа от \\(3\\) до \\(5\\)? Мы не можем просто написать \\(A=\\{3,4,5\\}\\), ведь между каждым из чисел есть ещё бесконечное количество дробных, и мы не сможем их всех перечислить. И для решения этой задачи существуют интервалы. Нам надо указать интервал всех чисел от \\(3\\) до \\(5\\). Для этого мы просто пишем \\(A=[3,5]\\), указывая начало и конец интервала. Таким образом множество \\(A\\) включает в себя даже очень маленькие доли между числами, например верны следующие утверждения:' },
              { type: 'text', content: '$$3.5\\in A$$' },
              { type: 'text', content: '$$4.1\\in A$$' },
              { type: 'text', content: '$$5\\in A$$' },
              { type: 'text', content: '$$3.0001\\in A$$' },
              { type: 'text', content: '$$3\\in A$$' },
              { type: 'text', content: 'Стоит также заметить, что в множество \\(A\\) также входят начальная и конечная точка интервала: \\(3\\) и \\(5\\)' },
              { type: 'text', content: 'Данный интервал мы можем нарисовать:' },
              { type: 'interval-output', content: { interval: [3, 5] } },
              { type: 'text', content: 'Но иногда нам не надо что бы начальные и конечные точки интервала входили в множество, для этого мы определяем интервал используя круглые скобки: \\(B=(3,5)\\), и на прямой точки обозначаем не закрашенными:' },
              { type: 'interval-output', content: { interval: [3, 5], exclude: [true, true] } },
              { type: 'text', content: 'Для этого интервала удовлетворяют следующие утверждения:' },
              { type: 'text', content: '$$3\\notin B$$' },
              { type: 'text', content: '$$5\\notin B$$' },
              { type: 'text', content: '$$3.3\\in B$$' },
              { type: 'text', content: 'А также, мы можем определить такой интервал: \\(C=(3,5]\\), в котором есть все числа от \\(3\\)(не включая саму тройку) до \\(5\\)(включая пятёрку). В нём уже:' },
              { type: 'text', content: '$$3\\notin C$$' },
              { type: 'text', content: '$$5\\in C$$' },
              { type: 'text', content: 'Предлагаю рассмотреть различные интервалы' },
              { type: 'text', content: '$$[1,4]$$' },
              { type: 'interval-output', content: { interval: [1, 4], dashAmountOverload: 20, firstNumberOverload: -10 } },
              { type: 'text', content: '$$(-2,3)$$' },
              { type: 'interval-output', content: { interval: [-2, 3], dashAmountOverload: 20, firstNumberOverload: -10, exclude: [true, true] } },
              { type: 'text', content: '$$[-7,8]$$' },
              { type: 'interval-output', content: { interval: [-7, 8], dashAmountOverload: 20, firstNumberOverload: -10 } },
              { type: 'text', content: '$$(-4,4]$$' },
              { type: 'interval-output', content: { interval: [-4, 4], dashAmountOverload: 20, firstNumberOverload: -10, exclude: [true, false] } },
              { type: 'text', content: 'Интервалы можно указывать также в виде неравенства. Например, \\(x>4\\) определяет условие, при котором числа подходят под некий интервал. Здесь он отбирает все числа которые больше четырёх. В записи интервала это будет \\((4, \\infty )\\), где знак бесконечности указывает что в правую сторону интервал бесконечен. Нарисовать это можно так:' },
              { type: 'interval-output', content: { interval: [-4, 4], infinitySides: [false, true], exclude: [true, false] } },
              { type: 'text', content: 'А как указать интервал \\((3, 5)\\) в виде неравенства? Для этого надо просто понять, какие числа отсеивает данный интервал. Он отсеивает все числа, которые меньше пяти, но больше трёх. Таким образом можно записать это так \\(3 \t&lt; x \t&lt; 5\\) или так \\(5 > x > 3\\)' },
              { type: 'text', content: 'Для указания интервала \\([3, \\infty )\\) в виде неравенства надо понять, что, данный интервал отсеивает все числа которые больше трёх либо равны трём, то есть можно использовать знак "больше или равно" \\(\\geqslant \\). Получится \\(x \\geqslant 3\\).' },
              { type: 'text', content: 'Рассмотрим всевозможные интервалы с некоторыми числами \\(a\\) и \\(b\\)' },
              { type: 'text', content: '$$(a, b)$$' },
              { type: 'text', content: '$$a < x < b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], exclude: [true, true], startLabel: 'a', endLabel: 'b' } },
              { type: 'text', content: '$$[a, b]$$' },
              { type: 'text', content: '$$a \\leqslant  x \\leqslant  b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b' } },
              { type: 'text', content: '$$[a, b)$$' },
              { type: 'text', content: '$$a \\leqslant  x <  b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', exclude: [false, true] } },
              { type: 'text', content: '$$(a, b]$$' },
              { type: 'text', content: '$$a <  x \\leqslant  b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', exclude: [true, false] } },
              { type: 'text', content: '$$(a, \\infty)$$' },
              { type: 'text', content: '$$x > a$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', exclude: [true, false], infinitySides: [false, true] } },
              { type: 'text', content: '$$[a, \\infty)$$' },
              { type: 'text', content: '$$x \\geqslant  a$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', infinitySides: [false, true] } },
              { type: 'text', content: '$$(-\\infty, b)$$' },
              { type: 'text', content: '$$x < b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', infinitySides: [true, false], exclude: [false, true] } },
              { type: 'text', content: '$$(-\\infty, b]$$' },
              { type: 'text', content: '$$x \\leqslant  b$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', infinitySides: [true, false] } },
              { type: 'text', content: '$$(-\\infty, \\infty)$$' },
              { type: 'text', content: '$$\\mathbb{R}$$' },
              { type: 'interval-output', content: { interval: [-3, 3], startLabel: 'a', endLabel: 'b', infinitySides: [true, true] } },
              { type: 'text', content: 'В последнем интервале можно увидеть символ \\(\\mathbb{R}\\). Он означает множество всех вещественных чисел.' },
              { type: 'text', content: 'Вот ещё несколько примеров различных интервалов:' },
              { type: 'text', content: '$$[-1.5, 3.2)$$' },
              { type: 'text', content: '$$-1.5 \\leqslant x < 3.2$$' },
              { type: 'interval-output', content: { interval: [-15, 32], startLabel: '-1.5', endLabel: '3.2', exclude: [false, true] } },
              { type: 'text', content: '$$[3, \\infty)$$' },
              { type: 'text', content: '$$x \\geqslant 3$$' },
              { type: 'interval-output', content: { interval: [3, 6], infinitySides: [false, true] } },
              { type: 'text', content: '$$(-1.3, -0.5)$$' },
              { type: 'text', content: '$$-1.3 < x < -0.5$$' },
              { type: 'interval-output', content: { interval: [-13, -5], startLabel: '-1.3', endLabel: '-0.5', exclude: [true, true] } }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Нарисуйте] интервал' },
                  { type: 'text', content: '$$(0, 5)$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: [
                  { type: 'interval-output', content: { interval: [0, 5], exclude: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$(-1, 3)$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: '$$-1<x<3$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Нарисуйте] интервал выраженый неравенством' },
                  { type: 'text', content: '$$-5\t&lt;x\t&lt;2$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: [
                  { type: 'interval-output', content: { interval: [-5, 2], exclude: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] в виде неравенства интервал' },
                  { type: 'text', content: '$$[-10, 5)$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: '$$-10\\leqslant x<5$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Пересечения] и [объединения] интервалов' },
              { type: 'text', content: 'Теперь поговорим о нахождении [s]пересечений[/s] и [s]объединений[/s] интервалов, но лучше сразу увидеть примеры:' },
              { type: 'text', content: '$$A=(3, 7)$$' },
              { type: 'text', content: '$$B=(1, 4)$$' },
              { type: 'text', content: '$$A\\cap B=(3,4)$$' },
              { type: 'interval-output', content: { interval: [3, 7], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'interval-output', content: { interval: [1, 4], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'interval-output', content: { interval: [3, 4], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'text', content: '$$A=[1, 5)$$' },
              { type: 'text', content: '$$B=[3, 8]$$' },
              { type: 'text', content: '$$A\\cap B=(3,5)$$' },
              { type: 'interval-output', content: { interval: [1, 5], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [false, true] } },
              { type: 'interval-output', content: { interval: [3, 8], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [false, false] } },
              { type: 'interval-output', content: { interval: [3, 5], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [false, true] } },
              { type: 'text', content: '$$A=(3, 8)$$' },
              { type: 'text', content: '$$B=(-2, 4)$$' },
              { type: 'text', content: '$$A\\cup B=(-2,8)$$' },
              { type: 'interval-output', content: { interval: [3, 8], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'interval-output', content: { interval: [-2, 4], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'interval-output', content: { interval: [-2, 8], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'text', content: '$$A=[-3, 5)$$' },
              { type: 'text', content: '$$B=(-1, 8)$$' },
              { type: 'text', content: '$$A\\cup B=[-3,8)$$' },
              { type: 'interval-output', content: { interval: [-3, 5], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [false, true] } },
              { type: 'interval-output', content: { interval: [-1, 8], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [true, true] } },
              { type: 'interval-output', content: { interval: [-3, 8], firstNumberOverload: -10, dashAmountOverload: 21, exclude: [false, true] } },
              { type: 'text', content: 'Я бы мог вам сказать каким правилам подчиняются точки, в результате объединения или пересечения, превращаясь в закрашенные или пустые, но, если вы хорошо поняли интервалы, что вам необходимо сделать на текущий момент, то вы, итак, поймёте почему точки себя так ведут.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(1,5)$$' },
                  { type: 'text', content: '$$B=(2,8)$$' },
                  { type: 'text', content: '$$A \\cap B = ?$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: [
                  { type: 'text', content: '$$A \\cap B = (2, 5)$$' },
                  { type: 'interval-output', content: { interval: [2, 5] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(1,5)$$' },
                  { type: 'text', content: '$$B=(2,8)$$' },
                  { type: 'text', content: '$$A \\cup B = ?$$' },
                  { type: 'text', content: '$$A \\cup B = ?$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup B = (1, 8)$$' },
                  { type: 'interval-output', content: { interval: [1, 8] } }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Модуль' },
              { type: 'text', content: 'Модуль некоторого числа \\(a\\) это расстояние от этого числа на координатной прямой до нуля, обозначается как \\(|a|\\).' },
              { type: 'text', content: 'Например модуль числа \\(3\\) будет равен \\(|3|=3\\), так как расстояние от тройки до нуля на координатной прямой равно трём, можете самостоятельно посчитать:' },
              { type: 'real-line-output', content: {} },
              { type: 'text', content: 'А сколько будет \\(|-3|\\)? Это будет также \\(3\\), так как отрицательная тройка, находится на том же расстоянии от нуля что и положительная тройка. Примеры:' },
              { type: 'text', content: '$$|5|=5$$' },
              { type: 'text', content: '$$|-2|=2$$' },
              { type: 'text', content: '$$|-1.5|=1.5$$' },
              { type: 'text', content: '$$|0|=0$$' },
              { type: 'text', content: '$$|100|=100$$' },
              { type: 'text', content: 'Можно заметить что результат все является положительным, ведь расстояние не может быть отрицательным. Положительные числа остаются без изменений, а отрицательные меняют знак на положительный.' },
              { type: 'text', content: 'Исходя из этого можно формально описать модуль как: если \\(a\\geqslant 0\\), то \\(|a|=a\\), если \\(a<0\\), то \\(|a|=-a\\). То есть если в модуль идёт число больше или равное нулю, то оно остаётся без изменений, а если меньше нуля, то есть со знаком минус, то знак числа меняется. Не стоит думать что знак минуса перед переменной означает что мы превращаем значение переменной в отрицательное число. Мы просто меняем знак на противоположный: минус на плюс, плюс на минус.' },
              { type: 'text', content: '$$|-3| = -(-3)=3$$' },
              { type: 'text', content: 'Теперь предположим что есть некое число \\(b\\), которое \\(b > 5\\), и есть такой модуль' },
              { type: 'text', content: '$$|2-b|$$' },
              { type: 'text', content: 'Мы знаем что число \\(b\\) больше пяти, соответственно оно и больше двух, и если его вычесть из двойки, то получится отрицательное число. Исходя из этого, выражение \\(2-b\\) даст нам отрицательное число, на которое мы можем применить вышеописанное правило модуля:' },
              { type: 'text', content: '$$|2-b|=-(2-b)$$' },
              { type: 'text', content: 'Выражение \\(-(2-b)\\) означает что мы умножаем отрицательную единицу на \\(2-b\\), и можем записать это так: \\(-1(2-b)\\), и после этого воспользоваться свойством дистрибутивности:' },
              { type: 'text', content: '$$-(2-b)=-1(2-b)=$$' },
              { type: 'text', content: '$$(-1)2-(-1)b=$$' },
              { type: 'text', content: '$$-2-(-b)=-2+b=b-2$$' },
              { type: 'text', content: '$$|2-b|=b-2, b > 5$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] модуль' },
                  { type: 'text', content: '$$|6|=?$$' }
                ],
                correctData: {},
                data: {},
                correctAnswer: '$$|6|=6$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] модуль' },
                  { type: 'text', content: '$$|-2|=?$$' }
                ],
                correctData: {},
                data: {},
                correctAnswer: '$$|-2|=2$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] модуль' },
                  { type: 'text', content: '$$|-3.5|=?$$' }
                ],
                correctData: {},
                data: {},
                correctAnswer: '$$|-3.5|=3.5$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] модуль' },
                  { type: 'text', content: '$$a\t&lt;b$$' },
                  { type: 'text', content: '$$|a-b|=?$$' }
                ],
                correctData: {},
                data: {},
                correctAnswer: '$$|a-b|=-(a-b)=-a+b=b-a$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Свойства [модуля]' },
              { type: 'text', content: 'При работе с модулями, верны следующие свойства:' },
              { type: 'text', content: '1. Результат модуля всегда положительный: \\(|a|\\geqslant 0\\)' },
              { type: 'text', content: '2. Некое число и противоположное ему всегда имеют одинаковый модуль: \\(|a|=|-a|\\)' },
              { type: 'text', content: '3. Модуль произведения равен произведению отдельных модулей: \\(|ab|=|a||b|\\)' },
              { type: 'text', content: '4. Модуль отношения равен отношению отдельных модулей: \\(|\\frac{a}{b}|=\\frac{|a|}{|b|}\\)' },
              { type: 'text', content: '5. Модуль суммы не может быть больше суммы отдельных модулей членов суммы: \\(|a+b|\\leqslant |a|+|b|\\)' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Расстояние' },
              { type: 'text', content: 'Мы легко можем сказать, какое расстояние от некого числа \\(a\\) до нуля, оно равно \\(|a|\\). Но что делать, если нам надо найти расстояние от числа \\(4\\) не до нуля, а до единицы. Если подумать, можно понять, что это расстояние будет на единицу меньше чем до нуля, то есть \\(3\\). Есть универсальная формула расстояния между некоторыми точками \\(a\\) и \\(b\\) на координатной прямой:' },
              { type: 'text', content: '$$d(a,b)=|b-a|$$' },
              { type: 'text', content: 'То есть надо вычесть второе число из первого и взять модуль из разницы. Теперь вы можете найти расстояние между любыми двумя точками на прямой, на пример, между точками \\(-12\\) и \\(17\\):' },
              { type: 'text', content: '$$|17-(-12)|=|17+12|=$$' },
              { type: 'text', content: '$$|29|=29$$' },
              { type: 'text', content: 'Но я не советую слепо использовать эту формулу, я настоятельно рекомендую внимательно рассмотреть то, как она работает, почему она написана именно так, а не иначе. Только таким образом вы сможете поистине понимать математику. Попробуйте убрать модуль и попробовать подставить числа, что изменится? Почему? Почему формула работает? На текущем этапе это легко понять путём логических рассуждений, без долгих доказательств.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние между точками' },
                  { type: 'text', content: '$$3, 8$$' }
                ],
                correctAnswer: '$$|8-3|=|5|=5$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние между точками' },
                  { type: 'real-line-output', content: { values: [{ value: '-2', label: '-2' }, { value: '5', label: '5' }], dashCount: 14 } }
                ],
                correctAnswer: '$$|5-(-2)|=|5+2|=|7|$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Дайте] примеры типов чисел' },
                  { type: 'number-input', content: { value: 'natural', label: 'Натуральное число' } },
                  { type: 'number-input', content: { value: 'integer', label: 'Целое число, которое не натуральное' } },
                  { type: 'number-input', content: { value: 'rational', label: 'Рациональное число, которое не целое' } }
                ],
                data: {
                  natural: null,
                  integer: null,
                  rational: null
                },
                correctData: {
                  natural: /^[123456789]+[0123456789]*$/,
                  integer: /^(0|-[123456789]+)$/,
                  rational: /^\d+\.((0+\d+)|\d+)$/
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] множество чисел' },
                  { type: 'text', content: 'Выразите множество чисел между \\(3\\) и \\(8\\) (\\(8\\) не включая) в виде неравенства и интервала, а также нарисуйте его.' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3\\leqslant x<8$$' },
                  { type: 'text', content: '$$[3,8)$$' },
                  { type: 'interval-output', content: { interval: [3, 8], exclude: [false, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Ответьте] на вопрос' },
                  { type: 'text', content: 'Чему равно расстояние между точками \\(a\\) и \\(b\\).' }
                ],
                correctAnswer: '$$d(a,b)=|b-a|$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние' },
                  { type: 'text', content: 'Найдите расстояние между точками \\(-3\\) и \\(9\\)' }
                ],
                correctAnswer: '$$|9-(-3)|=|9+3|=|12|=12$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выберите] использованное свойство' },
                  { type: 'select-input', content: { label: '\\(3+1=1+3\\)', value: 'exp1', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\(a+5=5+a\\)', value: 'exp2', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\(a(3+b)=3a+ab\\)', value: 'exp3', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\(15+1.1=1.1+15\\)', value: 'exp4', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } }
                ],
                data: {
                  exp1: null,
                  exp2: null,
                  exp3: null,
                  exp4: null
                },
                correctData: {
                  exp1: 'Коммутативное свойство',
                  exp2: 'Коммутативное свойство',
                  exp3: 'Дистрибутивное свойство',
                  exp4: 'Коммутативное свойство'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выберите] использованное свойство' },
                  { type: 'select-input', content: { label: '\\(45(a+2)=45a+90\\)', value: 'exp1', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\((a+5)+b=a+(5+b)\\)', value: 'exp2', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\(3a+b=b+3a\\)', value: 'exp3', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } },
                  { type: 'select-input', content: { label: '\\((a+b)c=ac+bc\\)', value: 'exp4', list: ['Коммутативное свойство', 'Ассоциативное свойство', 'Дистрибутивное свойство'] } }
                ],
                data: {
                  exp1: null,
                  exp2: null,
                  exp3: null,
                  exp4: null
                },
                correctData: {
                  exp1: 'Дистрибутивное свойство',
                  exp2: 'Ассоциативное свойство',
                  exp3: 'Коммутативное свойство',
                  exp4: 'Дистрибутивное свойство'
                }
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя коммутативное свойство сложения' },
                  { type: 'text', content: '$$a+2$$' }
                ],
                correctAnswer: '$$a+2=2+a$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя коммутативное свойство умножения]' },
                  { type: 'text', content: '$$b\\cdot 26$$' }
                ],
                correctAnswer: '$$b\\cdot 26=26\\cdot b$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя ассоциативное свойство сложения]' },
                  { type: 'text', content: '$$a + (3+b)$$' }
                ],
                correctAnswer: '$$a+(3+b)=(a+3)+b$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя коммутативное свойство умножения]' },
                  { type: 'text', content: '$$d(10a)$$' }
                ],
                correctAnswer: '$$d(10a)=(d10)a$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя дистрибутивное свойство]' },
                  { type: 'text', content: '$$7(a+b)$$' }
                ],
                correctAnswer: '$$7(a+b)=7a+7b$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя дистрибутивное свойство]' },
                  { type: 'text', content: 'В данном случае надо сделать как в предыдущем задании, только наоборот. Это называется вынесение общего множителя за скобки' },
                  { type: 'text', content: '$$3x+3y$$' }
                ],
                correctAnswer: '$$3x+3y=3(x+y)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя дистрибутивное свойство]' },
                  { type: 'text', content: '$$12a+4b$$' }
                ],
                correctAnswer: '$$12a+4b=4(3a+b)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] выражение используя дистрибутивное свойство]' },
                  { type: 'text', content: '$$14x+7x$$' }
                ],
                correctAnswer: '$$14x+7x=7x(2+1)$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Используйте] свойства чисел для записи выражения без скобок' },
                  { type: 'text', content: '$$3(2+b)$$' }
                ],
                correctAnswer: '$$3(2+b)=3\\cdot 2 + 3b=6+3b$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Используйте] свойства чисел для записи выражения без скобок' },
                  { type: 'text', content: '$$a(3+c)b$$' }
                ],
                correctAnswer: '$$a(3+c)b=ab(3+c)=3ab+abc$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Используйте] свойства чисел для записи выражения без скобок' },
                  { type: 'text', content: '$$\\frac{3}{7}(a+7+b)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{7}(a+7+b)=$$' },
                  { type: 'text', content: '$$\\frac{3a}{7}+\\frac{3\\cdot 7}{7}+\\frac{3b}{7}=$$' },
                  { type: 'text', content: '$$\\frac{3a}{7}+3+\\frac{3b}{7}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Используйте] свойства чисел для записи выражения без скобок' },
                  { type: 'text', content: '$$(a+3c)(3d+4t-u)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(a+3c)(3d+4t-u)=$$' },
                  { type: 'text', content: '$$=a(3d+4t-u)+3c(3d+4t-u)=$$' },
                  { type: 'text', content: '$$=3ad+4at-au+9dc+12tc-3uc$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{3}{4}+\\frac{7}{8}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{4}+\\frac{7}{8}=$$' },
                  { type: 'text', content: '$$=\\frac{6}{8}+\\frac{7}{8}=$$' },
                  { type: 'text', content: '$$=\\frac{6+7}{8}=$$' },
                  { type: 'text', content: '$$=\\frac{13}{8}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{1}{5}+\\frac{1}{8}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{5}+\\frac{1}{8}=$$' },
                  { type: 'text', content: '$$=\\frac{1\\cdot 8}{5\\cdot 8}+\\frac{1\\cdot 5}{8\\cdot 5}=$$' },
                  { type: 'text', content: '$$=\\frac{8}{40}+\\frac{5}{40}=$$' },
                  { type: 'text', content: '$$=\\frac{13}{40}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{1}{7}-\\frac{2}{5}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{7}-\\frac{2}{5}=$$' },
                  { type: 'text', content: '$$=\\frac{1\\cdot 5}{7\\cdot 5}-\\frac{2\\cdot 7}{5\\cdot 7}=$$' },
                  { type: 'text', content: '$$=\\frac{5}{35}-\\frac{14}{35}=$$' },
                  { type: 'text', content: '$$=\\frac{5-14}{35}=$$' },
                  { type: 'text', content: '$$=\\frac{-9}{35}=$$' },
                  { type: 'text', content: '$$=-\\frac{9}{35}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$2-\\frac{3}{8}+\\frac{4}{9}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2-\\frac{1}{3}+\\frac{2}{5}=$$' },
                  { type: 'text', content: '$$=2-\\frac{1\\cdot 5}{3\\cdot 5}+\\frac{2\\cdot 3}{5\\cdot 3}=$$' },
                  { type: 'text', content: '$$=2-\\frac{5}{15}+\\frac{6}{15}=$$' },
                  { type: 'text', content: '$$=\\frac{30}{15}-\\frac{5}{15}+\\frac{6}{15}=$$' },
                  { type: 'text', content: '$$=\\frac{25}{15}+\\frac{6}{15}=$$' },
                  { type: 'text', content: '$$=\\frac{31}{15}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{1}{2}(\\frac{1}{4}+3)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{2}(\\frac{1}{4}+3)=$$' },
                  { type: 'text', content: '$$=(\\frac{1}{2}\\cdot\\frac{1}{4})+(\\frac{1}{2}\\cdot 3)=$$' },
                  { type: 'text', content: '$$=\\frac{1\\cdot 1}{2\\cdot 4}+\\frac{1}{2}\\cdot \\frac{3}{1}=$$' },
                  { type: 'text', content: '$$=\\frac{1\\cdot 1}{2\\cdot 4}+\\frac{1\\cdot 3}{2\\cdot 1}=$$' },
                  { type: 'text', content: '$$=\\frac{1}{8}+\\frac{3}{2}=$$' },
                  { type: 'text', content: '$$=\\frac{1}{8}+\\frac{3\\cdot 4}{2\\cdot 4}=$$' },
                  { type: 'text', content: '$$=\\frac{1}{8}+\\frac{12}{8}=$$' },
                  { type: 'text', content: '$$=\\frac{13}{8}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{\\frac{1}{2}+\\frac{3}{5}}{2-\\frac{3}{4}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$=\\frac{\\frac{1\\cdot5}{2\\cdot 5}+\\frac{3\\cdot2}{5\\cdot2}}{\\frac{2}{1}-\\frac{3}{4}}$$' },
                  { type: 'text', content: '$$=\\frac{\\frac{5}{10}+\\frac{6}{10}}{\\frac{2\\cdot4}{1\\cdot4}-\\frac{3}{4}}$$' },
                  { type: 'text', content: '$$=\\frac{\\frac{11}{10}}{\\frac{8}{4}-\\frac{3}{4}}=$$' },
                  { type: 'text', content: '$$=\\frac{\\frac{11}{10}}{\\frac{5}{4}}=$$' },
                  { type: 'text', content: '$$=\\frac{11}{10}:\\frac{5}{4}=$$' },
                  { type: 'text', content: '$$=\\frac{11}{10}\\cdot\\frac{4}{5}=$$' },
                  { type: 'text', content: '$$=\\frac{11\\cdot 4}{10\\cdot 5}$$' },
                  { type: 'text', content: '$$=\\frac{44}{50}$$' },
                  { type: 'text', content: '$$=\\frac{22}{25}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(6\\)', rightChar: '\\(2\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '>'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(\\frac{3}{5}\\)', rightChar: '\\(\\frac{1}{5}\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '>'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(2\\)', rightChar: '\\(\\frac{7}{2}\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '<'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(\\frac{12}{4}\\)', rightChar: '\\(\\frac{9}{3}\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '='
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(|-3|\\)', rightChar: '\\(2\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '>'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(-\\frac{22}{3}\\)', rightChar: '\\(|-\\frac{23}{3}|\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '<'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] знак неравенства' },
                  { type: 'comparison-sign-input', content: { leftChar: '\\(|-\\frac{4}{9}|\\)', rightChar: '\\(\\frac{16}{81}\\)', value: 'exp' } }
                ],
                data: {
                  exp: '?'
                },
                correctData: {
                  exp: '='
                }
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(x\\) положителен' }
                ],
                correctAnswer: '$$x>0$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(x\\) больше \\(4\\)' }
                ],
                correctAnswer: '$$x>4$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(a\\) меньше \\(10\\)' }
                ],
                correctAnswer: '$$a<10$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(r\\) больше \\(-2\\), но меньше \\(14\\)' }
                ],
                correctAnswer: '$$-2<r<14$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(p\\) меньше \\(d\\), но больше \\(d-10\\)' }
                ],
                correctAnswer: '$$d-10<p<d$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: 'Расстояние между \\(s\\) и \\(7\\) не больше 8' }
                ],
                correctAnswer: '$$|7-s|\\leqslant 8$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Запишите] утверждение в виде неравенства' },
                  { type: 'text', content: '\\(x\\) на расстоянии не меньше \\(3\\) от \\(d\\)' }
                ],
                correctAnswer: '$$|x-d| \\geqslant 3$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cup C=?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup C =$$' },
                  { type: 'text', content: '$$ \\{ -4, -1, 0, 2,3,4,5,6,7,8,9,10 \\}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cap C=?$$' }
                ],
                correctAnswer: '$$A \\cap C = \\{ 3,5,6,7 \\}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cap B=?$$' }
                ],
                correctAnswer: '$$A \\cap B = \\{ 10 \\}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cup B=?$$' }
                ],
                correctAnswer: '$$B \\cup C = \\{ -4,-1,0,3,5,6,7,10,11,12 \\}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cup B \\cup C=?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup B \\cup C = $$' },
                  { type: 'text', content: '$$\\{ -4, -1, 0, 2,3,4,5,6,7,8,9,10,11,12\\}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение множеств' },
                  { type: 'text', content: '$$A = \\{ 2,3,4,5,6,7,8,9,10 \\}$$' },
                  { type: 'text', content: '$$B=\\{ 10,11,12 \\}$$' },
                  { type: 'text', content: '$$C = \\{ -4,-1,0,3,5,6,7 \\}$$' },
                  { type: 'text', content: '$$A \\cap B \\cap C=?$$' }
                ],
                correctAnswer: '$$A \\cap B \\cap C = \\varnothing $$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$A \\cap B = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cap B = (-2, 4]$$' },
                  { type: 'interval-output', content: { interval: [-2, 4], exclude: [true, false] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$A \\cup B = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup B = (-\\infty, \\infty)$$' },
                  { type: 'interval-output', content: { interval: [-2, 4], infinitySides: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$A \\cap С = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cap С = (-2, 6)$$' },
                  { type: 'interval-output', content: { interval: [-2, 6], exclude: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$A \\cup C = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup C = [-3, \\infty)$$' },
                  { type: 'interval-output', content: { interval: [-3, 4], infinitySides: [false, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$B \\cup C = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$B \\cup C = (-\\infty, 6)$$' },
                  { type: 'interval-output', content: { interval: [-3, 6], infinitySides: [true, false], exclude: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] пересечение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(-2, \\infty )$$' },
                  { type: 'text', content: '$$B=(-\\infty, 4 ]$$' },
                  { type: 'text', content: '$$C=[-3, 6 )$$' },
                  { type: 'text', content: '$$A \\cap B \\cap C = ?$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$A \\cap B \\cap C = (-2, 4]$$' },
                  { type: 'interval-output', content: { interval: [-2, 4], exclude: [true, false] } }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$(4, \\infty)$$' }
                ],
                correctAnswer: '$$x>4$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$(-\\infty, 6)$$' }
                ],
                correctAnswer: '$$x<6$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$[-14, \\infty)$$' }
                ],
                correctAnswer: '$$x\\geqslant -14$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$(6, 10)$$' }
                ],
                correctAnswer: '$$6<x<10$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$[-4, 19]$$' }
                ],
                correctAnswer: '$$-4\\leqslant x\\leqslant 19$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] интервал в виде неравенства' },
                  { type: 'text', content: '$$(2, 8]$$' }
                ],
                correctAnswer: '$$2< x\\leqslant 8$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$x > -2$$' }
                ],
                correctAnswer: '$$(-2, \\infty )$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$x < 4$$' }
                ],
                correctAnswer: '$$(-\\infty, 4 )$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$x \\geqslant  9$$' }
                ],
                correctAnswer: '$$[9, \\infty )$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$12>x \\geqslant  3$$' }
                ],
                correctAnswer: '$$[3, 12 )$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$-7&lt;x\\leqslant 10$$' }
                ],
                correctAnswer: '$$(-7, 10 ]$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] неравенство в виде интервала' },
                  { type: 'text', content: '$$20\\leqslant x\\leqslant 30$$' }
                ],
                correctAnswer: '$$[20, 30]$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$|24|$$' }
                ],
                correctAnswer: '$$|24|=24$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$|-451|$$' }
                ],
                correctAnswer: '$$|-451|=451$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$|d-10|$$' },
                  { type: 'text', content: '$$d < 4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|d-10|=-(d-10)=$$' },
                  { type: 'text', content: '$$-d-(-10)=-d+10=10-d$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$|a-7|$$' },
                  { type: 'text', content: '$$a < 3$$' }
                ],
                correctAnswer: '$$|a-7|=a-7$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$|4-|7 - 10||(-2)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|4-|7 - 10||(-2)=$$' },
                  { type: 'text', content: '$$|4-|-3||(-2)=$$' },
                  { type: 'text', content: '$$|4-3|(-2)=|1|(-2)=$$' },
                  { type: 'text', content: '$$1\\cdot (-2) = -2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{|4-10|}{|10-4|}$$' }
                ],
                correctAnswer: '$$\\frac{|4-10|}{|10-4|}=\\frac{|-6|}{|6|}=\\frac{6}{6}=1$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние между точками' },
                  { type: 'real-line-output', content: { values: [{ label: '-3.5', value: -3.5 }, { label: '2.3', value: '2.3' }] } }
                ],
                correctAnswer: '$$|2.3-(-3.5)|=|2.3+3.5|=|5.8|=5.8$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние между точками' },
                  { type: 'text', content: '$$6 и 12.4$$' }
                ],
                correctAnswer: '$$|12.4-6|=|6.4|=6.4$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] расстояние между точками' },
                  { type: 'text', content: '$$\\frac{1}{2} и \\frac{4}{3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|\\frac{4}{3}-\\frac{1}{2}|$$' },
                  { type: 'text', content: '$$=|\\frac{8}{6}-\\frac{3}{6}|$$' },
                  { type: 'text', content: '$$=\\frac{5}{6}$$' }
                ]
              }
            ]
          }
        ]
      },
      2: {
        name: 'Степени и корни',
        steps: [
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Что такое [степень числа]' },
              { type: 'text', content: 'В этой теме мы подробно разберёмся в том что такое степени и корни.' },
              { type: 'sub-title', content: 'Степени' },
              { type: 'text', content: 'Степень некоторого числа есть перемножение некоторого числа самого на себя несколько раз. Запись \\(a^{b}\\) читается как "\\(a\\) в степени \\(b\\)", и означает что мы перемножаем \\(a\\) на себя \\(b\\) раз. Проще понять на примере:' },
              { type: 'text', content: '$$3^{4}=3\\cdot 3\\cdot 3\\cdot 3=81$$' },
              { type: 'text', content: '$$a^3=aaa$$' },
              { type: 'text', content: 'Также мы можем пойти обратным путём, выразив повторяющийся множитель в виде степени:' },
              { type: 'text', content: '$$5\\cdot 5\\cdot 5\\cdot 5=5^{4}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражения' },
                  { type: 'text', content: '$$2^{4}$$' },
                  { type: 'text', content: '$$5^{3}$$' },
                  { type: 'text', content: '$$a^{4}$$' },
                  { type: 'text', content: '$$2^{6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2^{4}=2\\cdot 2\\cdot 2\\cdot 2=16$$' },
                  { type: 'text', content: '$$5^{3}=5\\cdot 5\\cdot 5=125$$' },
                  { type: 'text', content: '$$a^{4}=a\\cdot a\\cdot a\\cdot a=aaaa$$' },
                  { type: 'text', content: '$$2^{6}=2\\cdot 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2=64$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] в виде степени' },
                  { type: 'text', content: '$$4\\cdot 4\\cdot 4\\cdot 4$$' },
                  { type: 'text', content: '$$3\\cdot 3\\cdot 3\\cdot 3\\cdot 3$$' },
                  { type: 'text', content: '$$xxx$$' },
                  { type: 'text', content: '$$9\\cdot 9$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4\\cdot 4\\cdot 4\\cdot 4=4^{4}$$' },
                  { type: 'text', content: '$$3\\cdot 3\\cdot 3\\cdot 3\\cdot 3=3^{5}$$' },
                  { type: 'text', content: '$$xxx=x^{3}$$' },
                  { type: 'text', content: '$$9\\cdot 9=9^{2}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Свойство [степеней]' },
              { type: 'text', content: 'Мы можем заметить интересное свойство степеней:' },
              { type: 'text', content: '$$a^{3}a^{2}=aaaaa=a^{5}$$' },
              { type: 'text', content: 'то есть' },
              { type: 'text', content: '$$a^{3}a^{2}=a^{3+2}=a^{5}$$' },
              { type: 'text', content: '$$a^{x}a^{y}=a^{x+y}$$' },
              { type: 'text', content: 'Для отрицательных чисел это свойство тоже работает:' },
              { type: 'text', content: '$$3^{4}3^{-2}=3^{4-2}=3^{2}=9$$' },
              { type: 'text', content: 'Таким образом мы смогли вычислить данное выражение без отдельного вычисления отрицательной степени \\(3^{-2}\\). Но всё-таки мы бы хотели вычислить сколько будет \\(3^{-2}\\). Мы знаем что' },
              { type: 'text', content: '$$3^{4}\\cdot 3^{-2}=9$$' },
              { type: 'text', content: 'то есть' },
              { type: 'text', content: '$$81 \\cdot 3^{-2}=9$$' },
              { type: 'text', content: 'И, чтобы найти неизвестный множитель, надо поделить произведение на известный множитель:' },
              { type: 'text', content: '$$3^{-2}=\\frac{9}{81}=\\frac{1}{9}$$' },
              { type: 'text', content: 'Мы можем сформировать такое свойство:' },
              { type: 'text', content: '$$a^{-b}=\\frac{1}{a^{b}}$$' },
              { type: 'text', content: 'Вот примеры:' },
              { type: 'text', content: '$$3^{-4}=\\frac{1}{3^{4}}=\\frac{1}{81}$$' },
              { type: 'text', content: '$$2^{-5}=\\frac{1}{2^{5}}=\\frac{1}{32}$$' },
              { type: 'text', content: '$$5^{-1}=\\frac{1}{5^{1}}=\\frac{1}{5}$$' },
              { type: 'text', content: 'Таким же образом мы можем вычислить допустим \\(3^{0}\\):' },
              { type: 'text', content: '$$3^{2}\\cdot 3^{0}=3^{2+0}=3^{2}=9$$' },
              { type: 'text', content: '$$9\\cdot 3^{0}=9$$' },
              { type: 'text', content: '$$3^{0}=\\frac{9}{9}=1$$' },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$a^{0}=1$$' },
              { type: 'text', content: 'Любое число в нулевой степени равно единице' },
              { type: 'text', content: 'Теперь рассмотрим все свойства степеней, включая те что получили сами:' },
              { type: 'text', content: '$$a^{x}a^{y}=a^{x+y}$$' },
              { type: 'text', content: '$$3^{2}3^{4}=3^{2+4}=3^{6}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$\\frac{a^{x}}{a^{y}}=a^{x-y}$$' },
              { type: 'text', content: '$$\\frac{7^{10}}{7^{7}}=7^{10-7}=7^{3}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$(a^{x})^{y}=a^{xy}$$' },
              { type: 'text', content: '$$(4^{3})^{2}=4^{3\\cdot 2}=3^{6}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$(ab)^{x}=a^{x}b^{x}$$' },
              { type: 'text', content: '$$(4\\cdot 2)^{5}=4^{5}2^{5}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$\\left(\\frac{a}{b}\\right)^{x}=\\frac{a^x}{b^x}$$' },
              { type: 'text', content: '$$\\left(\\frac{4}{10}\\right)^{7}=\\frac{4^7}{10^7}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$\\left(\\frac{a}{b}\\right)^{-x}=\\left(\\frac{b}{a}\\right)^{x}$$' },
              { type: 'text', content: '$$\\left(\\frac{15}{31}\\right)^{-3}=\\left(\\frac{31}{15}\\right)^{3}$$' },
              { type: 'margin', content: '' },
              { type: 'text', content: '$$\\frac{a^{-x}}{b^{-y}}=\\frac{b^{y}}{a^{x}}$$' },
              { type: 'text', content: '$$\\frac{4^{-2}}{7^{-3}}=\\frac{7^{3}}{4^{2}}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$a^{4}\\cdot a^{5}$$' }
                ],
                correctAnswer: '$$a^{4}\\cdot a^{5}=a^{9}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$(w^{2})^{4}$$' }
                ],
                correctAnswer: '$$(w^{2})^{4}=w^{2\\cdot 4}=w^{8}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$(ar)^{3}$$' }
                ],
                correctAnswer: '$$(ar)^{3}=a^{3}r^{3}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$(tc^{4})^{2}$$' }
                ],
                correctAnswer: '$$(tc^{4})^{2}=t^{2}\\cdot (c^{4})^{2}=t^{2}c^{8}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$a^{5}a^{-2}$$' }
                ],
                correctAnswer: '$$a^{5}a^{-2}=a^{5-2}=a^{3}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$v^{-4}v^{-2}$$' }
                ],
                correctAnswer: '$$v^{-4}v^{-2}=v^{-6}=\\frac{1}{v^{6}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\frac{r^{3}}{r^{7}}$$' }
                ],
                correctAnswer: '$$\\frac{r^{3}}{r^{7}}=r^{3-7}=r^{-4}=\\frac{1}{r^{4}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$(y^{4}y^{2})^{2}$$' }
                ],
                correctAnswer: '$$(y^{4}y^{2})^{2}=(y^{4+2})^{2}=(y^{6})^{2}=y^{12}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\left(\\frac{(ab^{2}c^{-3})^{2}}{a^{2}b^{-3}}\\right)^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(\\frac{(ab^{2}c^{-3})^{2}}{a^{2}b^{-3}})^{2}$$' },
                  { type: 'text', content: '$$=(\\frac{a^{2}b^{4}c^{-6}}{a^{2}b^{-3}})^{2}$$' },
                  { type: 'text', content: '$$=\\frac{(a^{2}b^{4}c^{-6})^{2}}{(a^{2}b^{-3})^{2}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{4}b^{8}c^{-12}}{a^{4}b^{-6}}$$' },
                  { type: 'text', content: '$$=\\frac{b^{8}c^{-12}}{b^{-6}}$$' },
                  { type: 'text', content: '$$=b^{(8+6)}c^{-12}$$' },
                  { type: 'text', content: '$$=b^{14}c^{-12}$$' },
                  { type: 'text', content: '$$=b^{14}\\frac{1}{c^{12}}$$' },
                  { type: 'text', content: '$$=\\frac{b^{14}}{c^{12}}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Корень' },
              { type: 'text', content: 'Мы знаем как вычислить \\(a^{n}\\) если \\(n\\) - целое число. Но для того что бы понять как вычислить степень вида \\(a^{\\frac{n}{b}}\\), нам надо знать что такое [s]корень[/s].' },
              { type: 'text', content: 'Запись \\(\\sqrt{a} \\) читается как "квадратный корень из \\(a\\)", и означает' },
              { type: 'text', content: '$$\\sqrt{a}=b \\Leftrightarrow b^{2}=a$$' },
              { type: 'text', content: 'Данная запись означает что квадратный корень из некого числа, есть такое число, при возведении в квадрат которого, получается исходное.' },
              { type: 'text', content: 'Например, \\(\\sqrt{9}=3\\), потому что \\(3^{2}=9\\). \\(\\sqrt{16}=4\\), потому что' },
              { type: 'mini-question', content: { question: 'Почему \\(\\sqrt{16}=4\\)?', answer: 'Потому что \\(4^{2}=16\\)' } },
              { type: 'text', content: 'Также в записи \\(x^{2}=81\\), мы видим что у нас неизвестное основание степени, сама степень — \\(2\\), а также известен результат. Соответственно мы можем взять квадратный корень из результата и получить неизвестное основание: \\(\\sqrt{81}=9\\). И мы можем проверить что \\(9^{2}=81\\).' },
              { type: 'text', content: 'Мы также знаем что любое число в квадрате больше нуля: \\(a^{2}>0\\), соответственно мы не можем вычесть корень из отрицательного числа, например \\(\\sqrt{-4}\\), \\((-2) \\cdot (-2) = 4\\), никак не \\(-4\\).' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] квадратный корень' },
                  { type: 'text', content: '$$\\sqrt{9}$$' }
                ],
                correctAnswer: '$$\\sqrt{9}=3$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] квадратный корень' },
                  { type: 'text', content: '$$\\sqrt{4}$$' }
                ],
                correctAnswer: '$$\\sqrt{4}=2$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] квадратный корень' },
                  { type: 'text', content: '$$\\sqrt{36}$$' }
                ],
                correctAnswer: '$$\\sqrt{36}=6$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] квадратный корень' },
                  { type: 'text', content: '$$\\sqrt{81}$$' }
                ],
                correctAnswer: '$$\\sqrt{81}=9$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Корень [n-ой] степени' },
              { type: 'text', content: 'Квадратный корень является лишь частным случаем корня n-ой(энной) степени. В случае с квадратным корнем из \\(a\\), мы ищем такое числа, которое при возведении во [s]вторую[/s] степень даст \\(a\\). Корень же n-ой степени из \\(a\\) ищет число, при возведении которого в некоторую степень \\(n\\) получится \\(a\\). Записывается так: \\(\\sqrt[n]{a}\\). Исходя из описанного получается такое определение:' },
              { type: 'text', content: '$$\\sqrt[n]{a}=b\\Leftrightarrow b^{n}=a$$' },
              { type: 'text', content: 'То есть корень из \\(a\\) n-ой степени равен некоторому \\(b\\), при возведении которого в степень \\(n\\) получается \\(a\\).' },
              { type: 'text', content: 'Также из-за того что, допустим, \\((-3)\\cdot (-3)\\cdot (-3) = (-27)\\), мы можем вычесть корень третьей степени из \\((-27)\\):' },
              { type: 'text', content: '$$\\sqrt[3]{-27}=-3$$' },
              { type: 'text', content: 'Но это возможно только если степень - нечётная. Если же степень чётная, то произведение отрицательных чисел всегда будет приводить к положительному:' },
              { type: 'text', content: '$$\\sqrt[4]{-16}$$' },
              { type: 'text', content: '$$(-2)\\cdot (-2)\\cdot (-2)\\cdot (-2)=16\\neq -16$$' },
              { type: 'text', content: 'Таким образом, мы не можем получить отрицательное число, если количество отрицательных множителей чётное.' },
              { type: 'text', content: 'Квадратный корень можно записать и так: \\(\\sqrt[2]{a}\\), но так как это довольно частый случай, принято не писать степень корня и держать в голове, что это корень второй степени.' },
              { type: 'text', content: 'Теперь ещё немного примеров:' },
              { type: 'text', content: '$$\\sqrt[5]{32}=2$$' },
              { type: 'text', content: '$$2^{5}=32$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[4]{81}=3$$' },
              { type: 'text', content: '$$3^{4}=81$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[2]{49}=\\sqrt{49}=7$$' },
              { type: 'text', content: '$$7^{2}=49$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[3]{-27}=-3$$' },
              { type: 'text', content: '$$(-3)^{3}=(-27)$$' },
              { type: 'text', content: 'Давайте теперь рассмотрим такой пример:' },
              { type: 'text', content: '$$\\sqrt{3^{2}}=\\sqrt{9}=3$$' },
              { type: 'text', content: 'В этом примере число под корнем мы возводим во вторую степень, а потом обратно извлекаем корень второй степени и у нас получается исходное число. Поэтому мы можем предположить, что, \\(\\sqrt{a^{2}}=a\\). Но это не так, рассмотрите этот пример:' },
              { type: 'text', content: '$$\\sqrt{(-3)^{2}}=\\sqrt{9}=3$$' },
              { type: 'text', content: 'Как можно увидеть, в роли числа \\(a\\) стоит \\(-3\\), а в результате получается \\(3\\). Потому что' },
              { type: 'mini-question', content: { question: 'Почему \\(\\sqrt{(-3)^{2}}=3\\), а не \\(-3\\)', answer: 'Потому что при возведении в квадрат любого отрицательного числа, всегда получается положительное, соответственно корень из \\((-3)^{2}\\) это корень из положительного числа \\(9\\).' } },
              { type: 'text', content: 'Исходя из этой простой логики, мы можем понять что результатом \\(\\sqrt{a^{2}}\\) всегда будет положительное число, соответственно мы можем написать такое равенство: \\(\\sqrt{a^{2}}=|a|\\). То есть, каким бы не был \\(a\\), мы всегда приводим его к положительному числу, соответственно мы можем легко сказать ответ на такие примеры:' },
              { type: 'text', content: '$$\\sqrt{6^{2}}=6$$' },
              { type: 'text', content: '$$\\sqrt{(-4)^{2}}=4$$' },
              { type: 'text', content: '$$\\sqrt{(-12)^{2}}=12$$' },
              { type: 'text', content: '$$\\sqrt{4^{2}}=4$$' },
              { type: 'text', content: 'Но если вы хорошо понимаете, почему \\(\\sqrt{a^{2}}=|a|\\), то вы также сможете заметить что данное свойство работает не только для корней второй степени, но и для' },
              { type: 'mini-question', content: { question: 'Для каких коренй ещё работает данное свойство?', answer: 'Для все остальных корней с чётной степенью' } }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] корень' },
                  { type: 'text', content: '$$\\sqrt[3]{27}$$' }
                ],
                correctAnswer: '$$\\sqrt[3]{27}=3$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] корень' },
                  { type: 'text', content: '$$\\sqrt[4]{81}$$' }
                ],
                correctAnswer: '$$\\sqrt[4]{81}=3$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] корень' },
                  { type: 'text', content: '$$\\sqrt[5]{-32}$$' }
                ],
                correctAnswer: '$$\\sqrt[5]{-32}=-2$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] корень' },
                  { type: 'text', content: '$$\\sqrt[6]{64}$$' }
                ],
                correctAnswer: '$$\\sqrt[6]{64}=2$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Свойства [корней]' },
              { type: 'text', content: 'Теперь рассмотрим свойства корней' },
              { type: 'text', content: '$$\\sqrt[n]{ab}=\\sqrt[n]{a}\\sqrt[n]{b}$$' },
              { type: 'text', content: '$$\\sqrt[2]{4\\cdot 16}=\\sqrt[2]{4}\\cdot \\sqrt[2]{16}=2\\cdot 4=8$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[n]{\\frac{a}{b}}=\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$' },
              { type: 'text', content: '$$\\sqrt[3]{\\frac{8}{27}}=\\frac{\\sqrt[3]{8}}{\\sqrt[3]{27}}=\\frac{2}{3}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[n]{\\sqrt[m]{a}}=\\sqrt[nm]{a}$$' },
              { type: 'text', content: '$$\\sqrt[3]{\\sqrt{64}}=\\sqrt[3\\cdot 2]{64}=\\sqrt[6]{64}=2$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[n]{a^{n}}=a$$' },
              { type: 'text', content: 'Если только \\(n\\) - нечётное' },
              { type: 'text', content: '$$\\sqrt[3]{(-7)^{3}}=-7$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[n]{a^{n}}=|a|$$' },
              { type: 'text', content: 'Если \\(n\\) - чётное' },
              { type: 'text', content: '$$\\sqrt[4]{(-16)^{4}}=|-16|=16$$' },
              { type: 'sub-title', content: 'Упрощение и преобразование выражений с корнями' },
              { type: 'text', content: 'Используя данные свойства, мы можем очень хорошо преобразовывать и упрощать выражения с корнями, например:' },
              { type: 'text', content: '$$\\sqrt[5]{x^{6}}$$' },
              { type: 'text', content: 'Сначала можем показаться что с данным корнем ничего не сделать, но это не так. Давайте разложим \\(x^{6}\\) на \\(x^{4}x^{2}\\) по свойству степеней:' },
              { type: 'text', content: '$$\\sqrt[5]{x^{5}x}$$' },
              { type: 'text', content: 'Далее по свойству корней, разделим данный корень на два:' },
              { type: 'text', content: '$$\\sqrt[5]{x^{5}}\\cdot \\sqrt[5]{x}$$' },
              { type: 'text', content: 'И теперь корень \\(\\sqrt[5]{x^{5}}\\) мы можем убрать по свойству \\(\\sqrt[n]{x^{n}}=x\\), без модуля, так как степень нечётная:' },
              { type: 'text', content: '$$x\\sqrt[5]{x}$$' },
              { type: 'text', content: 'Так, получилось более простое выражение \\(x\\sqrt[5]{x}\\), в котором не надо возводить \\(x\\) в шестую степень.' },
              { type: 'text', content: 'Рассмотрим более интересный пример:' },
              { type: 'text', content: '$$\\sqrt{64a^{4}b^{8}}$$' },
              { type: 'text', content: 'Для начала разделим данные корни:' },
              { type: 'text', content: '$$\\sqrt{64}\\sqrt{a^{4}}\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'Далее мы можем вычислить корень из \\(64\\). \\(8\\cdot 8 = 64\\), соответственно корень из \\(64\\) равен восьми:' },
              { type: 'text', content: '$$8\\sqrt{a^{4}}\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'Есть корень второй степени из \\(a^{4}\\), не из \\(a^{2}\\). Но можно разложить \\(a^{4}\\) на \\(a^{2}a^{2}\\):' },
              { type: 'text', content: '$$8\\sqrt{a^{2}a^{2}}\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'И разделить корень:' },
              { type: 'text', content: '$$8\\sqrt{a^{2}}\\sqrt{a^{2}}\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'Теперь на оба корня \\(\\sqrt{a^{2}}\\) мы можем применить свойство \\(\\sqrt[n]{a^{n}}=|a|\\)' },
              { type: 'text', content: '$$8|a||a|\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'Получилось два модуля, можно применить на них свойство модулей \\(|ab|=|a||b|\\)' },
              { type: 'text', content: '$$8|aa|\\sqrt{b^{8}}$$' },
              { type: 'text', content: '$$8|a^{2}|\\sqrt{b^{8}}$$' },
              { type: 'text', content: 'Далее делаем похожие действия с \\(\\sqrt{b^{8}}\\)' },
              { type: 'text', content: '$$8|a^{2}|\\sqrt{b^{2}b^{2}b^{2}b^{2}}$$' },
              { type: 'text', content: '$$8|a^{2}|\\sqrt{b^{2}}\\sqrt{b^{2}}\\sqrt{b^{2}}\\sqrt{b^{2}}$$' },
              { type: 'text', content: '$$8|a^{2}||b||b||b||b|$$' },
              { type: 'text', content: '$$8|a^{2}||b^{4}|$$' },
              { type: 'text', content: '$$8|a^{2}b^{4}|$$' },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$\\sqrt{64a^{4}b^{8}}=8|a^{2}b^{4}|$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[6]{x^{6}}$$' }
                ],
                correctAnswer: '$$\\sqrt[6]{x^{6}}=|x|$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[4]{x^{4}y^{6}16}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[4]{x^{4}y^{6}16}$$' },
                  { type: 'text', content: '$$=\\sqrt[4]{x^{4}}\\sqrt[4]{y^{6}}\\sqrt[4]{16}$$' },
                  { type: 'text', content: '$$=|x|\\sqrt[4]{y^{4}y^{2}}2$$' },
                  { type: 'text', content: '$$=|x|\\sqrt[4]{y^{4}}\\sqrt[4]{y^{2}}2$$' },
                  { type: 'text', content: '$$=|x||y|\\sqrt[4]{y^{2}}2$$' },
                  { type: 'text', content: '$$=2|xy|\\sqrt[4]{y^{2}}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Объединение] корней' },
              { type: 'text', content: 'Благодаря свойствам корней и свойству дистрибутивности, мы можем эффективно объединять корни. Например:' },
              { type: 'text', content: '$$3\\sqrt{7}+7\\sqrt{7}$$' },
              { type: 'text', content: 'В этой сумме есть общий множитель - \\(\\sqrt{7}\\),  его мы можем вынести:' },
              { type: 'text', content: '$$\\sqrt{7}(3+7)$$' },
              { type: 'text', content: 'Для удобства поменяем местами:' },
              { type: 'text', content: '$$(3+7)\\sqrt{7}$$' },
              { type: 'text', content: 'И наконец сложим \\(3 + 7\\)' },
              { type: 'text', content: '$$10\\sqrt{7}$$' },
              { type: 'text', content: 'Таким образом, сумма \\(3\\sqrt{7}+7\\sqrt{7}\\) превратилась в произведение \\(10\\) и \\(\\sqrt{7}\\). Часто, выражения вида "\\(a\\sqrt{b}\\)" читаются как "\\(a\\) корней из \\(b\\)". \\(10\\sqrt{7}\\) - десять корней из семи. Рассмотрим более интересный пример:' },
              { type: 'text', content: '$$\\sqrt{128}+\\sqrt{200}$$' },
              { type: 'text', content: 'В данном примере нет общего множителя, но мы можем сделать так:' },
              { type: 'text', content: '$$=\\sqrt{2\\cdot 64}+\\sqrt{2\\cdot 100}$$' },
              { type: 'text', content: '$$=\\sqrt{2}\\sqrt{64}+\\sqrt{2}\\sqrt{100}$$' },
              { type: 'text', content: '$$=\\sqrt{2}\\cdot 8 + \\sqrt{2}\\cdot 10$$' },
              { type: 'text', content: 'Как теперь можно увидеть, образовался общий множитель \\(\\sqrt{2}\\), вынесем его:' },
              { type: 'text', content: '$$=\\sqrt{2}(8+10)$$' },
              { type: 'text', content: '$$=(8+10)\\sqrt{2}$$' },
              { type: 'text', content: '$$=18\\sqrt{2}$$' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь рассмотрим другой пример:' },
              { type: 'text', content: '$$\\sqrt{16a}+\\sqrt{a^{3}}$$' },
              { type: 'text', content: 'Здесь у нас также нет общего множителя, но мы можем сделать так:' },
              { type: 'text', content: '$$=\\sqrt{16}\\sqrt{a}+\\sqrt{a^{2}a}$$' },
              { type: 'text', content: '$$=4\\sqrt{a}+|a|\\sqrt{a}$$' },
              { type: 'text', content: 'Получился общий множитель \\(\\sqrt{a}\\), теперь вынесем его за скобки:' },
              { type: 'text', content: '$$=(4+|a|)\\sqrt{a}$$' },
              { type: 'text', content: 'Рассмотрим ещё пример с одним корнем:' },
              { type: 'text', content: '$$\\sqrt{64a^{2}+64b}$$' },
              { type: 'text', content: 'Здесь мы можем вынести \\(64\\) за скобки:' },
              { type: 'text', content: '$$=\\sqrt{64(a^{2}+b)}$$' },
              { type: 'text', content: 'Теперь есть произведение, которое можно разделить на два корня:' },
              { type: 'text', content: '$$=\\sqrt{64}\\sqrt{a^{2}+b}$$' },
              { type: 'text', content: '$$=8\\sqrt{a^{2}+b}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Объедините] корни' },
                  { type: 'text', content: '$$\\sqrt{32}-\\sqrt{18}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{32}-\\sqrt{18}$$' },
                  { type: 'text', content: '$$=\\sqrt{16\\cdot 2}-\\sqrt{9\\cdot 2}$$' },
                  { type: 'text', content: '$$=4\\sqrt{2}-3\\sqrt{2}$$' },
                  { type: 'text', content: '$$=(4-3)\\sqrt{2}$$' },
                  { type: 'text', content: '$$=1\\sqrt{2}=\\sqrt{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Объедините] корни' },
                  { type: 'text', content: '$$\\sqrt{16x^{3}}+\\sqrt{x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{16x^{3}}+\\sqrt{x}$$' },
                  { type: 'text', content: '$$=\\sqrt{16}\\sqrt{x^{2}x}+\\sqrt{x}$$' },
                  { type: 'text', content: '$$=4|x|\\sqrt{x}+\\sqrt{x}$$' },
                  { type: 'text', content: '$$=(4|x|+1)\\sqrt{x}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Объедините] корни' },
                  { type: 'text', content: '$$\\sqrt{64a^{2}-64a}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{64a^{2}-64a}$$' },
                  { type: 'text', content: '$$=\\sqrt{64(a^{2}-a)}$$' },
                  { type: 'text', content: '$$=8\\sqrt{a^{2}-a}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Рациональная] степень' },
              { type: 'text', content: 'Мы уже знаем как возводить в целую степень, например, \\(3^{4}\\) или \\(2^{-6}\\), но как возвести число в рациональную степень, которая представляет собой дроби вида \\(\\frac{a}{b}\\). Давайте для начала рассмотрим случай когда степень является дробью с числителем \\(1\\):' },
              { type: 'text', content: '$$16^{\\frac{1}{2}}$$' },
              { type: 'text', content: 'Для того чтобы вычислить такую степень, мы должны взять квадратный корень со степенью знаменателя из рациональной степени, легче увидеть:' },
              { type: 'text', content: '$$16^{\\frac{1}{2}}=\\sqrt[2]{16}=4$$' },
              { type: 'text', content: 'Вот ещё пример:' },
              { type: 'text', content: '$$27^{\\frac{1}{3}}=\\sqrt[3]{27}=3$$' },
              { type: 'text', content: 'Таким образом, формула будет такой:' },
              { type: 'text', content: '$$a^{\\frac{1}{n}}=\\sqrt[n]{a}$$' },
              { type: 'text', content: 'Но в случае если числитель степени не является единицей, то мы должны применить одну их этих двух эквивалентных формул:' },
              { type: 'text', content: '$$a^{\\frac{m}{n}}=\\sqrt[n]{a^{m}}$$' },
              { type: 'text', content: '$$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^{m}$$' },
              { type: 'text', content: 'Эти две формулы абсолютно эквивалентны, и всегда будут приводить к одному результату. Рассмотрим примеры:' },
              { type: 'text', content: '$$64^{\\frac{1}{2}}=\\sqrt[2]{64}=8$$' },
              { type: 'margin' },
              { type: 'text', content: '$$27^{\\frac{2}{3}}=\\sqrt[3]{27^{2}}=\\sqrt[3]{729}=9$$' },
              { type: 'text', content: '$$27^{\\frac{2}{3}}=(\\sqrt[3]{27})^{2}=3^{2}=9$$' },
              { type: 'margin' },
              { type: 'text', content: '$$25^{-\\frac{1}{2}}=\\frac{1}{25^{\\frac{1}{2}}}=\\frac{1}{\\sqrt{25}}=\\frac{1}{5}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] степень' },
                  { type: 'text', content: '$$36^{\\frac{1}{2}}$$' }
                ],
                correctAnswer: '$$36^{\\frac{1}{2}}=\\sqrt{36}=6$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] степень' },
                  { type: 'text', content: '$$64^{\\frac{5}{6}}$$' }
                ],
                correctAnswer: '$$64^{\\frac{5}{6}}=(\\sqrt[6]{64})^{5}=2^{5}=32$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] степень' },
                  { type: 'text', content: '$$32^{-\\frac{2}{5}}$$' }
                ],
                correctAnswer: '$$32^{-\\frac{2}{5}}=\\frac{1}{32^{\\frac{2}{5}}}=\\frac{1}{(\\sqrt[5]{32})^{2}}=\\frac{1}{2^{2}}=\\frac{1}{4}$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Свойства степеней [с рациональными степенями]' },
              { type: 'text', content: 'Рассмотрим теперь использования свойств степеней для рациональных степеней:' },
              { type: 'text', content: '$$x^{\\frac{2}{5}}x^{\\frac{1}{5}}=x^{\\frac{2}{5}+\\frac{1}{5}}=x^{\\frac{3}{5}}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\frac{x^{\\frac{1}{7}}x^{\\frac{3}{7}}}{x^{\\frac{2}{7}}}$$' },
              { type: 'text', content: '$$=\\frac{x^{\\frac{1}{7}+\\frac{3}{7}}}{x^{\\frac{2}{7}}}$$' },
              { type: 'text', content: '$$=\\frac{x^{\\frac{4}{7}}}{x^{\\frac{2}{7}}}$$' },
              { type: 'text', content: '$$=x^{\\frac{4}{7}-\\frac{2}{7}}$$' },
              { type: 'text', content: '$$=x^{\\frac{2}{7}}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$(4x^{3}y^{4})^{\\frac{1}{2}}=4^{\\frac{1}{2}}x^{3\\cdot \\frac{1}{2}}y^{4\\cdot \\frac{1}{2}}$$' },
              { type: 'text', content: '$$=\\sqrt{4}x^{\\frac{3}{2}}y^{\\frac{4}{2}}$$' },
              { type: 'text', content: '$$=2(\\sqrt{x})^{3}y^{2}$$' },
              { type: 'text', content: '$$=2\\sqrt{x^{3}}y^{2}$$' },
              { type: 'text', content: '$$=2\\sqrt{x^{2}}\\sqrt{x}y^{2}$$' },
              { type: 'text', content: '$$=2|x|\\sqrt{x}y^{2}$$' },
              { type: 'text', content: '$$=2|x|y^{2}\\sqrt{x}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$(\\frac{2x^{\\frac{3}{4}}}{y^{\\frac{1}{3}}})^{3}(\\frac{y^{4}}{x^{-\\frac{1}{2}}})$$' },
              { type: 'text', content: '$$=\\frac{2^{3}(x^{\\frac{3}{4}})^{3}}{(y^{\\frac{1}{3}})^{3}}\\cdot (y^{4}x^{\\frac{1}{2}})$$' },
              { type: 'text', content: '$$=\\frac{8x^{\\frac{9}{4}}}{y}\\cdot y^{4}x^{\\frac{1}{2}}$$' },
              { type: 'text', content: '$$=8x^{\\frac{11}{4}}y^{3}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$a^{\\frac{3}{4}}a^{\\frac{1}{8}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{\\frac{3}{4}}a^{\\frac{1}{8}}=a^{\\frac{6}{8}}a^{\\frac{1}{8}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{6}{8}+\\frac{1}{8}}=a^{\\frac{7}{8}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{a^{\\frac{3}{8}}a^{\\frac{5}{8}}}{a^{\\frac{1}{8}}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{a^{\\frac{3}{8}}a^{\\frac{5}{8}}}{a^{\\frac{1}{8}}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{\\frac{3}{8}+\\frac{5}{8}}}{a^{\\frac{1}{8}}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{\\frac{8}{8}}}{a^{\\frac{1}{8}}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{7}{8}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{(8a^{3}b^{4})^{\\frac{2}{3}}}{(a^{4}b^{-8})^{\\frac{1}{4}}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{(8a^{3}b^{4})^{\\frac{2}{3}}}{(a^{4}b^{-8})^{\\frac{1}{4}}}$$' },
                  { type: 'text', content: '$$=\\frac{8^{\\frac{2}{3}}(a^{3})^{\\frac{2}{3}}(b^{4})^{\\frac{2}{3}}}{(a^{4})^{\\frac{1}{4}}(b^{-8})^{\\frac{1}{4}}}$$' },
                  { type: 'text', content: '$$=\\frac{4a^{\\frac{6}{3}}b^{\\frac{8}{3}}}{a^{\\frac{4}{4}}b^{-\\frac{8}{4}}}$$' },
                  { type: 'text', content: '$$=\\frac{4a^{2}b^{\\frac{8}{3}}}{ab^{-2}}$$' },
                  { type: 'text', content: '$$=4a^{2-1}b^{\\frac{8}{3}-(-2)}$$' },
                  { type: 'text', content: '$$=4ab^{\\frac{8}{3}+\\frac{6}{3}}$$' },
                  { type: 'text', content: '$$=4ab^{\\frac{14}{3}}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Выражение] корней в виде степени' },
              { type: 'text', content: 'В ходе упрощения выражений, может быть полезно выразить корень в виде степени, рассмотрим примеры:' },
              { type: 'text', content: '$$\\frac{\\sqrt[5]{a^{3}}}{\\sqrt[5]{a}}$$' },
              { type: 'text', content: '$$=\\frac{a^{\\frac{3}{5}}}{a^{\\frac{1}{5}}}=a^{\\frac{2}{5}}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[3]{b}\\sqrt[6]{b^{5}}=b^{\\frac{1}{3}}b^{\\frac{5}{6}}$$' },
              { type: 'text', content: '$$=b^{\\frac{2}{6}}b^{\\frac{5}{6}}=b^{\\frac{7}{6}}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt{x\\sqrt{x}}=\\sqrt{xx^{\\frac{1}{2}}}$$' },
              { type: 'text', content: '$$=(xx^{\\frac{1}{2}})^{\\frac{1}{2}}=x^{\\frac{1}{2}}x^{\\frac{1}{4}}$$' },
              { type: 'text', content: '$$=x^{\\frac{2}{4}}x^{\\frac{1}{4}}=x^{\\frac{3}{4}}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{a^{2}}\\sqrt[6]{a^{5}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{a^{2}}\\sqrt[6]{a^{5}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{2}{3}}a^{\\frac{5}{6}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{2}{3}+\\frac{5}{6}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{4}{6}+\\frac{5}{6}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{9}{6}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{3}{2}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt{a\\sqrt[5]{a}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{a\\sqrt[5]{a}}$$' },
                  { type: 'text', content: '$$=\\sqrt{aa^{\\frac{1}{5}}}$$' },
                  { type: 'text', content: '$$=\\sqrt{a^{\\frac{5}{5}}a^{\\frac{1}{5}}}$$' },
                  { type: 'text', content: '$$=\\sqrt{a^{\\frac{6}{5}}}$$' },
                  { type: 'text', content: '$$=(a^{\\frac{6}{5}})^{\\frac{1}{2}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{6}{10}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{3}{5}}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Рационализация] знаменателя' },
              { type: 'text', content: 'Часто бывает полезно избавиться от знаменателя дроби в виде корня, для этого можем перемножить числитель и знаменатель на этот корень:' },
              { type: 'text', content: '$$\\frac{a}{\\sqrt{b}}=\\frac{a}{\\sqrt{b}}\\cdot \\frac{\\sqrt{b}}{\\sqrt{b}}=\\frac{a\\sqrt{b}}{b}$$' },
              { type: 'text', content: 'Но эта работает только для корней второй степени, для корней иных степеней есть свой способ:' },
              { type: 'text', content: '$$\\frac{b}{\\sqrt[n]{a^{m}}} = \\frac{b}{\\sqrt[n]{a^{m}}} \\cdot \\frac{\\sqrt[n]{a^{n-m}}}{\\sqrt[n]{a^{n-m}}}=\\frac{b\\sqrt[n]{a^{n-m}}}{a}$$' },
              { type: 'text', content: 'Но работать это будет только если \\(m < n\\). Но как это вообще работает? Вот демонстрация преобразования:' },
              { type: 'text', content: '$$\\sqrt[n]{a^{m}}\\sqrt[n]{a^{n-m}}=\\sqrt[n]{a^{m+n-m}}=\\sqrt[n]{a^{n}}=a $$' },
              { type: 'text', content: 'Если в знаменателе дроби нет корней, о такой дроби говорят что она в [s]стандартной форме[/s].' },
              { type: 'text', content: 'Рассмотрим примеры рационализации знаменателя:' },
              { type: 'text', content: '$$\\frac{6}{\\sqrt{7}}$$' },
              { type: 'text', content: 'В данном случае в знаменателе находится квадратный корень из семи, соответственно мы можем сделать так:' },
              { type: 'text', content: '$$\\frac{6}{\\sqrt{7}}=\\frac{6}{\\sqrt{7}}\\cdot \\frac{\\sqrt{7}}{\\sqrt{7}}=\\frac{6\\sqrt{7}}{7}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$\\frac{3}{\\sqrt[5]{2}}$$' },
              { type: 'text', content: 'В данном случае воспользуемся другой формулой для не квадратных корней:' },
              { type: 'text', content: '$$\\frac{3}{\\sqrt[5]{2}}\\cdot \\frac{\\sqrt[5]{2^{5-1}}}{\\sqrt[5]{2^{5-1}}}=\\frac{3}{\\sqrt[5]{2}}\\cdot \\frac{\\sqrt[5]{2^{4}}}{\\sqrt[5]{2^{4}}}$$' },
              { type: 'text', content: '$$=\\frac{3\\sqrt[5]{16}}{2}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$\\sqrt[6]{\\frac{5}{x^{2}}}=\\frac{\\sqrt[6]{5}}{\\sqrt[6]{x^{2}}}=\\frac{\\sqrt[6]{5}}{\\sqrt[6]{x^{2}}}\\cdot \\frac{\\sqrt[6]{x^{6-2}}}{\\sqrt[6]{x^{6-2}}}=$$' },
              { type: 'text', content: '$$=\\frac{\\sqrt[6]{5}}{\\sqrt[6]{x^{2}}}\\cdot \\frac{\\sqrt[6]{x^{4}}}{\\sqrt[6]{x^{4}}}=\\frac{\\sqrt[6]{5x^{4}}}{x}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{3}{\\sqrt{5}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{\\sqrt{5}}=\\frac{3}{\\sqrt{5}}\\cdot \\frac{\\sqrt{5}}{\\sqrt{5}}=\\frac{3\\sqrt{5}}{5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{7}{\\sqrt{8a}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{7}{\\sqrt{8a}}=\\frac{7}{\\sqrt{8a}}\\cdot \\frac{\\sqrt{8a}}{\\sqrt{8a}}$$' },
                  { type: 'text', content: '$$=\\frac{7\\sqrt{8a}}{8a}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{1}{\\sqrt[3]{5}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{\\sqrt[3]{5}}=\\frac{1}{\\sqrt[3]{5}}\\cdot \\frac{\\sqrt[3]{5^{3-1}}}{\\sqrt[3]{5^{3-1}}}$$' },
                  { type: 'text', content: '$$=\\frac{1}{\\sqrt[3]{5}}\\cdot \\frac{\\sqrt[3]{5^{2}}}{\\sqrt[3]{5^{2}}}=$$' },
                  { type: 'text', content: '$$=\\frac{\\sqrt[3]{5^{2}}}{5}=\\frac{\\sqrt[3]{25}}{5}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] степень в виде произведения' },
                  { type: 'text', content: '$$6^{4}$$' }
                ],
                correctAnswer: '$$6^{4}=6\\cdot 6\\cdot 6\\cdot 6$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перепишите] произведение виде степени' },
                  { type: 'text', content: '$$3\\cdot 3\\cdot 3\\cdot 3\\cdot 3$$' }
                ],
                correctAnswer: '$$3\\cdot 3\\cdot 3\\cdot 3\\cdot 3=3^{5}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выберите] верные и неверные свойства степеней' },
                  { type: 'select-input', content: { label: '\\((a^{n})^{m}=a^{nm}\\)', value: 'prop1', list: ['Верно', 'Невервно'] } },
                  { type: 'select-input', content: { label: '\\(\\frac{a^{n}}{a^{m}}=a^{m-n}\\)', value: 'prop2', list: ['Верно', 'Невервно'] } },
                  { type: 'select-input', content: { label: '\\(a^{n}a^{m}=a^{n+m}\\)', value: 'prop3', list: ['Верно', 'Невервно'] } },
                  { type: 'select-input', content: { label: '\\(\\frac{a^{-m}}{b^{-n}}=\\frac{b^{n}}{a^{m}}\\)', value: 'prop3', list: ['Верно', 'Невервно'] } }
                ],
                data: {
                  prop1: null,
                  prop2: null,
                  prop3: null
                },
                correctData: {
                  prop1: 'Верно',
                  prop2: 'Невервно',
                  prop3: 'Верно'
                }
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] корень в виде степени' },
                  { type: 'text', content: '$$\\sqrt[5]{8}$$' }
                ],
                correctAnswer: '$$\\sqrt[5]{8}=8^{\\frac{1}{5}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] степень в виде корня' },
                  { type: 'text', content: '$$4^{\\frac{1}{7}}$$' }
                ],
                correctAnswer: '$$4^{\\frac{1}{7}}=\\sqrt[7]{4}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{3}{\\sqrt{7}}$$' }
                ],
                correctAnswer: '$$\\frac{3}{\\sqrt{7}}=\\frac{3}{\\sqrt{7}}\\cdot \\frac{\\sqrt{7}}{\\sqrt{7}}=\\frac{3\\sqrt{7}}{7}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: 'Найдите неизвествную степень' },
                  { type: 'text', content: '$$7^{\\frac{2}{7}}\\cdot 7^{\\_\\_}=7$$' }
                ],
                correctAnswer: '$$7^{\\frac{2}{7}}\\cdot 7^{\\frac{5}{7}}=7^{\\frac{2}{7}+\\frac{5}{7}}=7^{\\frac{7}{7}}=7^{1}=7$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выразите] корень в виде степени' },
                  { type: 'text', content: '$$\\sqrt{7}$$' }
                ],
                correctAnswer: '$$\\sqrt{7}=7^{\\frac{1}{2}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] корень в виде степени' },
                  { type: 'text', content: '$$\\sqrt[7]{2}$$' }
                ],
                correctAnswer: '$$\\sqrt[7]{2}=2^{\\frac{1}{7}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] степень в виде корня' },
                  { type: 'text', content: '$$8^{\\frac{1}{3}}$$' }
                ],
                correctAnswer: '$$8^{\\frac{1}{3}}=\\sqrt[3]{8}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] степень в виде корня' },
                  { type: 'text', content: '$$5^{\\frac{2}{9}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$5^{\\frac{2}{9}}=\\sqrt[9]{2^{2}}$$' },
                  { type: 'text', content: '$$или$$' },
                  { type: 'text', content: '$$5^{\\frac{2}{9}}=\\sqrt[9]{2}^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] степень в виде корня' },
                  { type: 'text', content: '$$2^{-\\frac{1}{3}}$$' }
                ],
                correctAnswer: '$$2^{-\\frac{1}{3}}=\\frac{1}{2^{\\frac{1}{3}}}=\\frac{1}{\\sqrt[3]{2}}$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$2^{4}$$' }
                ],
                correctAnswer: '$$2^{4}=2\\cdot 2\\cdot 2\\cdot 2=16$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$-2^4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'В дааном случае к числу \\(2\\) применяется и степень, и изменение знака, но степень имеет больший приоритет, так что она выполняется первее:' },
                  { type: 'text', content: '$$-2^4=-(2\\cdot 2\\cdot 2\\cdot 2)=-(16)=-16$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$(-2)^4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'В данном случае, операция изменения знака находится в скобках, поэтому выполняется раньше чем более приоритетная операция степени:' },
                  { type: 'text', content: '$$(-2)^4=(-2)\\cdot (-2)\\cdot (-2)\\cdot (-2)=16$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$16^{-\\frac{1}{2}}$$' }
                ],
                correctAnswer: '$$16^{-\\frac{1}{2}}=\\frac{1}{16^{\\frac{1}{2}}}=\\frac{1}{\\sqrt{16}}=\\frac{1}{4}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$2^{7}2^{-5}$$' }
                ],
                correctAnswer: '$$2^{7}2^{-5}=2^{7-5}=2^{2}=4$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\sqrt{32}\\sqrt{2}$$' }
                ],
                correctAnswer: '$$\\sqrt{32}\\sqrt{2}=\\sqrt{32\\cdot 2}=\\sqrt{64}=8$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\frac{3^{7}}{3^{4}}$$' }
                ],
                correctAnswer: '$$\\frac{3^{7}}{3^{4}}=3^{7-4}=3^3=27$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{2}\\sqrt[3]{64}$$' }
                ],
                correctAnswer: '$$\\sqrt[3]{2}\\sqrt[3]{64}=\\sqrt[3]{2}\\sqrt[3]{2^{6}}=\\sqrt[3]{2}2^{2}=4\\sqrt[3]{2}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\sqrt{\\frac{4}{16}}$$' }
                ],
                correctAnswer: '$$\\sqrt{\\frac{4}{16}}=\\frac{\\sqrt{4}}{\\sqrt{16}}=\\frac{2}{4}=\\frac{1}{2}$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$a^{3}a^{4}b^{-2}$$' }
                ],
                correctAnswer: '$$a^{3}a^{4}b^{-2}=a^{3+4}b^{-2}=a^{7}\\frac{1}{b^{2}}=\\frac{a^{7}}{b^{2}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$(x^{2}y^{-3})^{2}$$' }
                ],
                correctAnswer: '$$(x^{2}y^{-3})^{2}=x^{2\\cdot 2}y^{-3\\cdot 2}=x^{4}y^{-6}=x^{4}\\frac{1}{y^{6}}=\\frac{x^{4}}{y^{6}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\frac{a^{6}}{a^{9}}$$' }
                ],
                correctAnswer: '$$\\frac{a^{6}}{a^{9}}=a^{6-9}=a^{-3}=\\frac{1}{a^{3}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$w^{3}w^{0}v^{-2}$$' }
                ],
                correctAnswer: '$$w^{3}w^{0}v^{-2}=w^{3+0}v^{-2}=w^{3}v^{-2}=w^{3}\\frac{1}{v^{2}}=\\frac{w^{3}}{v^{2}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$(\\frac{b}{a})^{-2}(ab)^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(\\frac{b}{a})^{-2}(ab)^{2}=\\frac{b^{-2}}{a^{-2}}a^{2}b^{2}$$' },
                  { type: 'text', content: '$$=\\frac{a^{2}}{b^{2}}a^{2}b^{2}=\\frac{a^{2}a^{2}b^{2}}{b^{2}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{4}b^{2}}{b^{2}}=a^{4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\frac{t^{2}t^{4}}{t^{5}t^{-7}}$$' }
                ],
                correctAnswer: '$$\\frac{t^{2}t^{4}}{t^{5}t^{-7}}=\\frac{t^{6}}{t^{-2}}=t^{6-(-2)}=t^{8}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$(-2h^{3})^{2}(4h^{4})$$' }
                ],
                correctAnswer: '$$(-2h^{3})^{2}4h^{4}=(-2)^{2}(h^{3})^{2}4h^{4}=4h^{6}4h^{4}=16h^{10}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\frac{(a^{3}b)^{2}}{(a^{-2}b^{3})^{3}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{(a^{3}b)^{2}}{(a^{-2}b^{3})^{3}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{6}b^{2}}{a^{-6}b^{9}}$$' },
                  { type: 'text', content: '$$=a^{6-(-6)}b^{2-9}=a^{12}b^{-7}=a^{12}\\frac{1}{b^{7}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{12}}{b^{7}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение и [избавьтесь] от отрицательных степеней' },
                  { type: 'text', content: '$$\\frac{g^{-2}g^{-5}c}{c^{-2}g^{2}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{g^{-2}g^{-5}c}{c^{-2}g^{2}}$$' },
                  { type: 'text', content: '$$=\\frac{g^{-7}c}{c^{-2}g^{2}}$$' },
                  { type: 'text', content: '$$=g^{-7-2}c^{1+2}=g^{-9}c^{3}$$' },
                  { type: 'text', content: '$$=\\frac{1}{g^{9}}c^{3}=\\frac{c^{3}}{g^{9}}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[5]{t^{5}}$$' }
                ],
                correctAnswer: '$$\\sqrt[5]{t^{5}}=t$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[6]{r^{6}}$$' }
                ],
                correctAnswer: '$$\\sqrt[6]{r^{6}}=|r|$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{27a^{6}b^{3}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{27a^{6}b^{3}}$$' },
                  { type: 'text', content: '$$=\\sqrt[3]{27}\\sqrt[3]{a^{6}}\\sqrt[3]{b^{3}}$$' },
                  { type: 'text', content: '$$=3\\sqrt[3]{a^{3}a^{3}}b=3\\sqrt[3]{a^{3}}\\sqrt[3]{a^{3}}b$$' },
                  { type: 'text', content: '$$=3aab=3a^{2}b$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{\\sqrt{64a^{6}}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{\\sqrt{64a^{6}}}=\\sqrt[3\\cdot 2]{64a^{6}}=\\sqrt[6]{64a^{6}}$$' },
                  { type: 'text', content: '$$=\\sqrt[6]{64}\\sqrt[6]{a^{6}}=2|a|$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt{72}+\\sqrt{50}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{72}+\\sqrt{50}=\\sqrt{9\\cdot 4\\cdot 2} + \\sqrt{25\\cdot 2}$$' },
                  { type: 'text', content: '$$=\\sqrt{9}\\sqrt{4}\\sqrt{2}+\\sqrt{25}\\sqrt{2}$$' },
                  { type: 'text', content: '$$=3\\cdot 2\\cdot \\sqrt{2}+5\\cdot \\sqrt{2}$$' },
                  { type: 'text', content: '$$=6\\sqrt{2}+5\\sqrt{2}$$' },
                  { type: 'text', content: '$$=(6+5)\\sqrt{2}=11\\sqrt{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt{16a}+\\sqrt{a^{5}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{16a}+\\sqrt{a^{5}}$$' },
                  { type: 'text', content: '$$=\\sqrt{16}\\sqrt{a}+\\sqrt{a^{2}a^{2}a}$$' },
                  { type: 'text', content: '$$=4\\sqrt{a}+\\sqrt{a^{2}}\\sqrt{a^{2}}\\sqrt{a}$$' },
                  { type: 'text', content: '$$=4\\sqrt{a}+aa\\sqrt{a}$$' },
                  { type: 'text', content: '$$=4\\sqrt{a}+a^{2}\\sqrt{a}$$' },
                  { type: 'text', content: '$$=\\sqrt{a}(4+a^{2})$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt{24w+20w^{2}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{24w+20w^{2}}$$' },
                  { type: 'text', content: '$$=\\sqrt{4(6w+5w^{2})}$$' },
                  { type: 'text', content: '$$=\\sqrt{4}\\sqrt{6w+5w^{2}}$$' },
                  { type: 'text', content: '$$=2\\sqrt{6w+5w^{2}}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$27^{\\frac{1}{3}}$$' }
                ],
                correctAnswer: '$$27^{\\frac{1}{3}}=\\sqrt[3]{27}=3$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$\\left(\\frac{9}{4}\\right)^{-\\frac{1}{2}}$$' }
                ],
                correctAnswer: '$$\\left(\\frac{9}{4}\\right)^{-\\frac{1}{2}}=\\frac{9^{-\\frac{1}{2}}}{4^{-\\frac{1}{2}}}=\\frac{4^{\\frac{1}{2}}}{9^{\\frac{1}{2}}}=\\frac{\\sqrt{4}}{\\sqrt{9}}=\\frac{2}{3}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычислите] выражение' },
                  { type: 'text', content: '$$(\\sqrt[3]{5})^{6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(\\sqrt[3]{5})^{6}=\\frac{1}{(\\sqrt[3]{5})^{6}}$$' },
                  { type: 'text', content: '$$=\\frac{1}{\\sqrt[3]{5^{6}}}=\\frac{1}{\\sqrt[3]{5^{3}5^{3}}}$$' },
                  { type: 'text', content: '$$=\\frac{1}{\\sqrt[3]{5^{3}}\\sqrt[3]{5^{3}}}=\\frac{1}{5\\cdot 5}=\\frac{1}{25}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$a^{\\frac{3}{4}}a^{\\frac{1}{4}}$$' }
                ],
                correctAnswer: '$$a^{\\frac{3}{4}}a^{\\frac{1}{4}}=a^{\\frac{3}{4}+\\frac{1}{4}}=a^{\\frac{4}{4}}=a^{1}=a$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{x^{\\frac{2}{5}}x^{\\frac{6}{5}}}{x^{\\frac{1}{5}}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^{\\frac{2}{5}}x^{\\frac{6}{5}}}{x^{\\frac{1}{5}}}=\\frac{x^{\\frac{2}{5}+\\frac{6}{5}}}{x^{\\frac{1}{5}}}$$' },
                  { type: 'text', content: '$$=\\frac{x^{\\frac{8}{5}}}{x^{\\frac{1}{5}}}=x^{\\frac{7}{5}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\left(\\frac{a^{8}b^{-4}}{16b^{\\frac{4}{3}}}\\right)^{-\\frac{1}{4}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\left(\\frac{a^{8}b^{-4}}{16b^{\\frac{4}{3}}}\\right)^{-\\frac{1}{4}}$$' },
                  { type: 'text', content: '$$=\\frac{(a^{8}b^{-4})^{-\\frac{1}{4}}}{(16b^{\\frac{4}{3}})^{-\\frac{1}{4}}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{-2}b^{1}}{2^{-1}b^{-\\frac{1}{3}}}$$' },
                  { type: 'text', content: '$$=\\frac{2b}{a^{2}b^{-\\frac{1}{3}}}$$' },
                  { type: 'text', content: '$$=\\frac{2b^{\\frac{4}{3}}}{a^{2}}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[7]{a^{2}}$$' }
                ],
                correctAnswer: '$$\\sqrt[7]{a^{2}}=a^{\\frac{2}{7}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt{t^{3}}$$' }
                ],
                correctAnswer: '$$\\sqrt{t^{3}}=t^{\\frac{3}{2}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{a^{4}}\\sqrt[4]{a^{3}}$$' }
                ],
                correctAnswer: '$$\\sqrt[3]{a^{4}}\\sqrt[4]{a^{3}}=a^{\\frac{4}{3}}a^{\\frac{3}{4}}=a^{\\frac{16}{12}}a^{\\frac{9}{12}}=a^{\\frac{25}{12}}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[3]{x^{4}y^{2}}\\sqrt[5]{x^{2}y}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{x^{4}y^{2}}\\sqrt[5]{x^{2}y}$$' },
                  { type: 'text', content: '$$=(x^{4}y^{2})^{\\frac{1}{3}}(x^{2}y)^{\\frac{1}{5}}$$' },
                  { type: 'text', content: '$$=x^{\\frac{4}{3}}y^{\\frac{2}{3}}x^{\\frac{2}{5}}y^{\\frac{1}{5}}$$' },
                  { type: 'text', content: '$$=x^{\\frac{4}{3}}x^{\\frac{2}{5}}y^{\\frac{2}{3}}y^{\\frac{1}{5}}$$' },
                  { type: 'text', content: '$$=x^{\\frac{20}{15}}x^{\\frac{6}{15}}y^{\\frac{10}{15}}y^{\\frac{3}{15}}$$' },
                  { type: 'text', content: '$$=x^{\\frac{26}{15}}y^{\\frac{13}{15}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\sqrt[5]{a\\sqrt{a}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[5]{a\\sqrt{a}}$$' },
                  { type: 'text', content: '$$=\\sqrt[5]{aa^{\\frac{1}{2}}}$$' },
                  { type: 'text', content: '$$=(aa^{\\frac{1}{2}})^{\\frac{1}{5}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{1}{5}}a^{\\frac{1}{10}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{2}{10}}a^{\\frac{1}{10}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{3}{10}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{\\sqrt[7]{a^{7}}}{\\sqrt[7]{a^{6}}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{\\sqrt[7]{a^{7}}}{\\sqrt[7]{a^{6}}}$$' },
                  { type: 'text', content: '$$=\\frac{a^{\\frac{7}{7}}}{a^{\\frac{6}{7}}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{7}{7}-\\frac{6}{7}}$$' },
                  { type: 'text', content: '$$=a^{\\frac{1}{7}}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{1}{\\sqrt{12}}$$' }
                ],
                correctAnswer: '$$\\frac{1}{\\sqrt{12}}=\\frac{1}{\\sqrt{12}}\\cdot \\frac{\\sqrt{12}}{\\sqrt{12}}=\\frac{\\sqrt{12}}{12}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{4}{\\sqrt[6]{2^{4}}}$$' }
                ],
                correctAnswer: '$$\\frac{4}{\\sqrt[6]{2^{4}}}=\\frac{4}{\\sqrt[6]{2^{4}}}\\cdot \\frac{\\sqrt[6]{2^{2}}}{\\sqrt[6]{2^{2}}}=\\frac{4\\sqrt[6]{2^{2}}}{2}=\\frac{4\\sqrt[6]{4}}{2}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\sqrt{\\frac{2}{5}}$$' }
                ],
                correctAnswer: '$$\\sqrt{\\frac{2}{5}}=\\frac{\\sqrt{2}}{\\sqrt{5}}=\\frac{\\sqrt{2}}{\\sqrt{5}}\\cdot \\frac{\\sqrt{5}}{\\sqrt{5}}=\\frac{\\sqrt{10}}{5}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{x}{\\sqrt{3x}}$$' }
                ],
                correctAnswer: '$$\\frac{x}{\\sqrt{3x}}=\\frac{x}{\\sqrt{3x}}\\cdot \\frac{\\sqrt{3x}}{\\sqrt{3x}}=\\frac{x\\sqrt{3x}}{3x}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{10}{\\sqrt{10}}$$' }
                ],
                correctAnswer: '$$\\frac{10}{\\sqrt{10}}=\\frac{10}{\\sqrt{10}}\\cdot \\frac{\\sqrt{10}}{\\sqrt{10}}=\\frac{10\\sqrt{10}}{10}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{a}{\\sqrt[9]{b^{3}}}$$' }
                ],
                correctAnswer: '$$\\frac{a}{\\sqrt[9]{b^{3}}}=\\frac{a}{\\sqrt[9]{b^{3}}}\\cdot \\frac{\\sqrt[9]{b^{6}}}{\\sqrt[9]{b^{6}}}=\\frac{a\\sqrt[9]{b^{6}}}{b}$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\sqrt[7]{\\frac{1}{16}}$$' }
                ],
                correctAnswer: '$$\\sqrt[7]{\\frac{1}{16}}=\\frac{\\sqrt[7]{1}}{\\sqrt[7]{2^{4}}}=\\frac{1}{\\sqrt[7]{2^{4}}}\\cdot \\frac{\\sqrt[7]{2^{3}}}{\\sqrt[7]{2^{3}}}=\\frac{\\sqrt[7]{2^{3}}}{2}$$'
              }
            ]
          }
        ]
      },
      3: {
        name: 'Алгебраические выражения',
        steps: [
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Что такое [многочлен]?' },
              { type: 'text', content: 'Переменная это буква, которая представляет некоторое число. Соединяя переменные и числа знаками действий, мы получаем [s]алгебраическое выражение[/s]. Вот примеры:' },
              { type: 'text', content: '$$3a+4$$' },
              { type: 'text', content: '$$5x^{2}+2x-7$$' },
              { type: 'text', content: '$$\\frac{x^{2}-a}{10x}$$' },
              { type: 'text', content: '$$3y+\\sqrt[3]{5y}$$' },
              { type: 'text', content: 'Одночлен это алгебраическое выражение вида \\(ax^{n}\\), в котором \\(a\\) это вещественное число, \\(x\\) это некоторая переменная, а \\(n\\) это неотрицательное целое число. Сумма двух одночленов называется двучленом. Сумма трёх - трёхчленом. Сумма любого количества одночленов называется [s]многочленом[/s]. Многочлен стандартного вида можно выразить так:' },
              { type: 'text', content: '$$a_{n}x^{n}+a_{n-1}x^{n-1}+...+a_1x+a_{0}$$' },
              { type: 'text', content: 'То есть это такой многочлен, который состоит их суммы переменных с постоянно уменьшающейся степенью до нулевой, и на каждую из переменных также умножается некоторое своё число \\(a_{n}\\). Рассмотрим пример многочлена:' },
              { type: 'text', content: '$$4x^{2}+6x+5$$' },
              { type: 'text', content: 'Данный многочлен состоит из трёх одночленов. У первого переменная \\(x\\) возведена во вторую степень и умножена на \\(4\\). У второго переменная возведена в первую степень и умножена на \\(6\\). У третьего переменная тоже есть, но она возведена в нулевую степень, соответственно всегда равна единице которая умножается на число \\(5\\) и не меняет его. Каждый из одночленов из которых состоит многочлен называют членом многочлена. Исходя из этого можно сказать что у этого многочлена три члена. Также иногда говорят о степени многочлена, имея в виду наибольшую степень переменной у многочлена.' },
              { type: 'text', content: 'Давайте теперь рассмотрим другой многочлен:' },
              { type: 'text', content: '$$2a-3$$' },
              { type: 'text', content: 'Может показаться что это не многочлен, так как в нём не сложение, а вычитание, но нет. Вычитание это лишь прибавление отрицательного второго слагаемого, так что этот многочлен можно переписать так:' },
              { type: 'text', content: '$$2a+(-3)$$' },
              { type: 'text', content: 'Членами данного многочлена являются: \\(2a\\) и \\(-3\\). Степень же данного многочлена - \\(1\\), так как в члене \\(2a\\) переменная \\(a=a^{1}\\). Теперь рассмотрим более интересный многочлен:' },
              { type: 'text', content: '$$5x^{4}+7x^{2}+2$$' },
              { type: 'text', content: 'Может показаться что в этом многочлене нет членов третьей и первой степени, но это не так, просто все они умножены на ноль, и мы их не пишем, но можем написать:' },
              { type: 'text', content: '$$5x^{4}+0x^{3}+7x^{2}+0x+2$$' },
              { type: 'text', content: 'Никто вам не мешает поставить члены многочлена в том порядке в котором вы хотите, например:' },
              { type: 'text', content: '$$3x+5x^{3}-2x^{2}+8$$' },
              { type: 'text', content: 'Но для удобства работы с ним, стоит поместить его члены в порядке убывания степеней:' },
              { type: 'text', content: '$$5x^{3}-2x^{2}+3x+8$$' },
              { type: 'text', content: 'Члены данного многочлена: \\(5x^{3}\\), \\(-2x^{2}\\), \\(3x\\), \\(8\\). Степень: - \\(3\\)' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Выпишите] члены многочлена' },
              { type: 'text', content: '$$x^{2}+3x-2$$' }
            ],
            correctAnswer: '$$x^{2}, 3x, (-2)$$'
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Сложение и вычитание [многочленов]' },
              { type: 'text', content: 'Давайте рассмотрим так пример многочлена:' },
              { type: 'text', content: '$$2x^{2}+6x^{2}$$' },
              { type: 'text', content: 'Данный многочлен состоит из двух одночленов: \\(2x^{2}\\) и \\(6x^{2}\\). У одночленов всегда есть численный множитель, его называют [s]коэффициентом[/s]. Когда коэффициента у одночлена не написано, это значит он равен единице. Одночлены приведённого выше многочлена имеет коэффициенты соответственно: \\(2\\) и \\(6\\). С терминологией пока всё, вернёмся к многочлену:' },
              { type: 'text', content: '$$2x^{2}+6x^{2}$$' },
              { type: 'text', content: 'Можно заметить что у обоих его членов буквенная часть одинакова - \\(x^{2}\\), соответственно, по свойству дистрибутивности мы можем вынести \\(x^{2}\\) за скобки:' },
              { type: 'text', content: '$$x^{2}(2+6)$$' },
              { type: 'text', content: 'Затем, поменять местами для удобства и сложить:' },
              { type: 'text', content: '$$=(2+6)x^{2}=8x^{2}$$' },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$2x^{2}+6x^{2}=8x^{2}$$' },
              { type: 'text', content: 'Можно заметить что мы просто сложили два одночлена в один, сложив их коэффициенты. Данный процесс называется [s]приведением подобных членов[/s] многочлена. Можно понять, что подобные члены, это те у которых буквенная часть одинакова.' },
              { type: 'text', content: 'Возьмём другой многочлен:' },
              { type: 'text', content: '$$3x^{3}+4x^{2}-2x^{3}$$' },
              { type: 'text', content: 'Члены данного многочлена: \\(3x^{3}\\), \\(4x^{2}\\), \\(-2x^{3}\\). Два из них являются подобными, это' },
              { type: 'mini-question', content: { question: 'Какие два члена являются подобными?', answer: '\\(3x^{3}\\) и \\(-2x^{3}\\). Они оба имеют одиннаковую буквенную часть: \\(x^{3}\\)' } },
              { type: 'text', content: 'Исходя из этого мы можем их сложить, но давайте сначала переставим их вместе для удобства:' },
              { type: 'text', content: '$$3x^{3}+4x^{2}+(-2)x^{3}=3x^{3}+(-2)x^{3}+4x^{2}$$' },
              { type: 'text', content: 'Теперь давайте сложим их:' },
              { type: 'text', content: '$$3x^{3}+(-2)x^{3}=$$' },
              { type: 'text', content: '$$=(3+(-2))x^{3}=(3-2)x^{3}=1x^{3}=x^{3}$$' },
              { type: 'text', content: 'Таким образом получился одночлен \\(x^{3}\\) с коэффициентом равным \\(1\\), которую мы не пишем. Теперь вместо \\(3x^{3}+(-2)x^{3}\\) в исходном многочлене подставим результат сложения:' },
              { type: 'text', content: '$$x^{3}+4x^{2}$$' },
              { type: 'text', content: 'И переставим члены в порядке возрастания степеней:' },
              { type: 'text', content: '$$4x^{2}+x^{3}$$' },
              { type: 'text', content: 'Обычно этот процесс проделывают быстрее, не расписывая подробно вынесения за скобки буквенного множителя. Рассмотрим пример:' },
              { type: 'text', content: '$$4x^{2}+5x^{3}-2x^{2}+x^{3}$$' },
              { type: 'text', content: 'Мы видим здесь 4 одночлена: \\(4x^{2}\\), \\(5x^{3}\\), \\(-2x^{2}\\), \\(x^{3}\\). Из них подобны: \\(4x^{2}\\) и \\(-2x^{2}\\), \\(5x^{3}\\) и \\(x^{3}\\). Переместим их местами для удобства:' },
              { type: 'text', content: '$$5x^{3}+x^{3}+4x^{2}-2x^{2}$$' },
              { type: 'text', content: 'Теперь осталось только сложить коэффициенты подобных членов. У членов с буквенной частью \\(x^{3}\\) коэффициенты: \\(5\\) и \\(1\\), соответственно получится один одночлен с коэффициентом \\(5+1=6\\):' },
              { type: 'text', content: '$$6x^{3}+4x^{2}-2x^{2}$$' },
              { type: 'text', content: 'У одночленов с буквенной частью \\(x^{2}\\) коэффициенты: \\(4\\) и \\(-2\\), коэффициент их суммы равен \\(4+(-2)=4-2=2\\):' },
              { type: 'text', content: '$$6x^{3}+2x^{2}$$' },
              { type: 'text', content: 'Готово! Подобные члены приведены.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим теперь пример сложения двух многочленов:' },
              { type: 'text', content: '$$(2x^{2}+3x+2)+(4x^{2}+4x+5)$$' },
              { type: 'text', content: 'Раскроем скобки. Так как и перед первой, и перед второй скобкой не стоит знака минуса, мы можем просто убрать их:' },
              { type: 'text', content: '$$2x^{2}+3x+2+4x^{2}+4x+5$$' },
              { type: 'text', content: 'По сути многочлен уже сложен. Но в нём можно привести подобные члены, для упрощения вида:' },
              { type: 'text', content: '$$6x^{2}+7x+7$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотри теперь пример вычитания многочленов:' },
              { type: 'text', content: '$$(6x^{2}-4x+7)-(2x^{2}-7)$$' },
              { type: 'text', content: 'Раскроем скобки. Перед первой скобкой ничего не стоит(точнее стоит знак плюс, но мы его не пишем), соответственно её можно просто убрать' },
              { type: 'text', content: '$$6x^{2}-4x+7-(2x^{2}-7)$$' },
              { type: 'text', content: 'Но вот у второй скобки стоит знак минус, соответственно, при убирании скобок надо также изменить знак на противоположный у всех членов внутри неё по свойству \\(-(x+y)=-x-y\\)' },
              { type: 'text', content: '$$6x^{2}-4x+7-2x^{2}+7$$' },
              { type: 'text', content: 'Таким образом член \\(2x^{2}\\) превратился в \\(-2x^{2}\\), а \\(-7\\) в \\(+7\\). Теперь приведём подобные члены:' },
              { type: 'text', content: '$$4x^{2}-4x+14$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Приведите] подобные члены' },
                  { type: 'text', content: '$$4x^{2}+3x^{2}+2x+2$$' }
                ],
                correctAnswer: '$$7x^{2}+2x+2$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Приведите] подобные члены' },
                  { type: 'text', content: '$$5x+7x^{2}-2x-x^{2}-3$$' }
                ],
                correctAnswer: '$$6x^{2}+3x-3$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Умножение] многочленов' },
              { type: 'text', content: 'Теперь посмотрим как можно умножать многочлены, но для начала рассмотрим такой пример:' },
              { type: 'text', content: '$$(a+b)(c+d)$$' },
              { type: 'text', content: 'Как перемножить два данных множителя? Для начала вспомним свойство дистрибутивности:' },
              { type: 'text', content: '$$a(b+c)=ab+ac$$' },
              { type: 'text', content: 'По нему мы можем умножить \\((a+b)\\) на сумму \\((c+d)\\) таким образом:' },
              { type: 'text', content: '$$(a+b)(c+d)=(a+b)c+(a+b)d$$' },
              { type: 'text', content: 'То есть по свойству дистрибутивности мы перемножили \\((a+b)\\) на каждый из членов суммы \\((c+d)\\) а затем сложили. Но теперь мы можем заметить что получившиеся слагаемые \\((a+b)c\\) и \\((a+b)d\\) также можно умножить используя свойство дистрибутивности:' },
              { type: 'text', content: '$$=ac+bc+ad+bd$$' },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$(a+b)(c+d)=ac+bc+ad+bd$$' },
              { type: 'text', content: 'Можно заметить что результат умножения этих двух сумм является просто [s]суммой произведений каждого слагаемого одной суммы на каждое другой[/s]. Иначе говоря, мы сложили всевозможные сочетания слагаемых разных сумм.' },
              { type: 'text', content: 'Рассмотрим умножение многочленов:' },
              { type: 'text', content: '$$(2x+5)(4x-2)$$' },
              { type: 'text', content: 'Раз нам надо перемножить и сложить всевозможные произведения слагаемых, начнём с \\(2x\\), и умножим его на каждый из членов второй суммы:' },
              { type: 'text', content: '$$(2x\\cdot 4x)+(2x\\cdot (-2))$$' },
              { type: 'text', content: 'Теперь же умножим \\(5\\) также на каждый из членов второй суммы и прибавим это к тому что у нас уже есть:' },
              { type: 'text', content: '$$(2x\\cdot 4x)+(2x\\cdot (-2))+(5\\cdot 4x)+(5\\cdot (-2))$$' },
              { type: 'text', content: 'Теперь всё перемножим:' },
              { type: 'text', content: '$$(8x^{2})+(-4x)+(20x)+(-10)$$' },
              { type: 'text', content: 'И раскроем скобки:' },
              { type: 'text', content: '$$8x^{2}-4x+20x-10$$' },
              { type: 'text', content: 'И конечно же приведём подобные члены:' },
              { type: 'text', content: '$$8x^{2}+16x-10$$' },
              { type: 'text', content: 'Таким получился результат перемножения двучленов:' },
              { type: 'text', content: '$$(2x+5)(4x-2)=8x^{2}+16x-10$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим теперь пример перемножения двух сумм с тремя слагаемыми:' },
              { type: 'text', content: '$$(a+b+c)(d+e+f)$$' },
              { type: 'text', content: 'Суть остаётся вся та же, перемножаем каждое слагаемое первой суммы на каждое второй и складываем:' },
              { type: 'text', content: '$$=ad+ae+af+bd+be+bf+cd+ce+cf$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим последний пример с перемножением многочленов:' },
              { type: 'text', content: '$$(2x^{2}+7)(3x^{3}+2x^{2}-x)$$' },
              { type: 'text', content: '$$=2x^{2}(3x^{3}+2x^{2}-x)+7(3x^{3}+2x^{2}-x)$$' },
              { type: 'text', content: '$$=(2x^{2}3x^{3})+(2x^{2}2x^{2})+(2x^{2}\\cdot (-x))+(7\\cdot 3x^{3})+(7\\cdot 2x^{2})+(7\\cdot (-x))$$' },
              { type: 'text', content: '$$=(6x^{5})+(4x^{4})+(-2x^{3})+(21x^{3})+(14x^{2})+(-7x)$$' },
              { type: 'text', content: '$$=6x^{5}+4x^{4}-2x^{3}+21x^{3}+14x^{2}-7x$$' },
              { type: 'text', content: '$$=6x^{5}+4x^{4}+19x^{3}+14x^{2}-7x$$' },
              { type: 'margin' },
              { type: 'text', content: 'Что бы не запутаться, делайте всё систематически, в строгом порядке, не в перемешку.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(3x+2)(6x-4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(3x+2)(6x-4)=$$' },
                  { type: 'text', content: '$$=(3x+2)6x+(3x+2)(-4)=$$' },
                  { type: 'text', content: '$$=18x^{2}+12x-12x-8=$$' },
                  { type: 'text', content: '$$=18x^{2}-8$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] число на многочлен' },
                  { type: 'text', content: '$$9(4x^{2}-x+3)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$9(4x^{2}-x+3)=$$' },
                  { type: 'text', content: '$$=9\\cdot 4x^{2}-9 \\cdot x + 9 \\cdot 3=$$' },
                  { type: 'text', content: '$$=36x^{2}-9x+27$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(7x^{3}+x^{2}-8)(8x-4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(7x^{3}+x^{2}-8)(8x-4)$$' },
                  { type: 'text', content: '$$=7x^{3}8x+x^{2}8x-8\\cdot 8x-7x^{3}4-x^{2}4+8\\cdot 4$$' },
                  { type: 'text', content: '$$=56x^{4}+8x^{3}-64x-28x^{3}-4x^{2}+32$$' },
                  { type: 'text', content: '$$=56x^{4}-20x^{3}-4x^{2}-64x+32$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Развёртывание] выражений' },
              { type: 'text', content: 'Процесс раскрытия скобок это процесс, при котором мы преобразовываем выражение так, что скобки пропадают. Например, такое выражение:' },
              { type: 'text', content: '$$a+(b-c)$$' },
              { type: 'text', content: 'Как нам в нём раскрыть скобки? То есть как его преобразовать в выражение без скобок. В данном выражении мы видим что к переменной \\(a\\) прибавляется разница \\(b-c\\). То есть прибавляется \\(b\\) но уменьшенное на \\(c\\). Исходя из этого мы можем вычесть \\(c\\) и после того как прибавили \\(b\\) к \\(a\\). Соответственно мы можем просто убрать скобки:' },
              { type: 'text', content: '$$=a+b-c$$' },
              { type: 'text', content: 'Но нет нужды проделывать такие рассуждения. Для случаев когда значение в скобках прибавляется, есть правило, что эти скобки можно просто убрать без ущерба выражению:' },
              { type: 'text', content: '$$a+b+(c+d)=a+b+c+d$$' },
              { type: 'text', content: 'Если же значение в скобках вычитается, то всем членах находящимся в скобках надо поменять знак на противоположный:' },
              { type: 'text', content: '$$a+b-(c+d-e)=a+b-c-d+e$$' },
              { type: 'text', content: 'В случае если выражение в скобках умножается, то такой процесс называется [s]развёртыванием выражения[/s], и используется свойство дистрибутивности:' },
              { type: 'text', content: '$$a+b(c+d-e)=a+bc+bd-be$$' },
              { type: 'margin' },
              { type: 'sub-title', content: 'Вывод полезных для развёртывания выражений формул' },
              { type: 'text', content: 'Давайте развернём данное выражение:' },
              { type: 'text', content: '$$(a+b)^{2}$$' },
              { type: 'text', content: 'Возведение в квадрат это просто умножения самого на себя:' },
              { type: 'text', content: '$$=(a+b)(a+b)$$' },
              { type: 'text', content: 'Теперь пользуясь свойством дистрибутивности, развёртываем:' },
              { type: 'text', content: '$$=(a+b)a+(a+b)b=$$' },
              { type: 'text', content: '$$=aa+ba+ab+bb=$$' },
              { type: 'text', content: '$$=a^{2}+ab+ab+b^{2}$$' },
              { type: 'mini-question', content: { question: 'Закончите развёртывание выражения (приведите подобные члены)', answer: '$$a^{2}+2ab+b^{2}$$' } },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$(a+b)^{2}=a^{2}+2ab+b^{2}$$' },
              { type: 'text', content: 'Довольно часто бывает нужно возвести в квадрат сумму, и что бы не проделывать эти вычисления каждый раз, можно просто запомнить эту формулу. Её называют формулой [s]квадрата суммы[/s]. Давайте рассмотрим пример её использования для развёртывания в таком выражении:' },
              { type: 'text', content: '$$(a+4)^{2}=a^{2}+2\\cdot a \\cdot 4 + 4^{2}=a^{2}+8a+16$$' },
              { type: 'text', content: 'Можно конечно же вывести и формулу квадрата разности \\((a-b)^{2}\\):' },
              { type: 'mini-question', content: { question: 'Какова формула квадрата разности? Выведите её. \\((a-b)^{2}\\)', answer: '\\((a-b)^{2}=a^{2}-2ab+b^{2}\\)' } },
              { type: 'text', content: 'Рассмотрим пример использования формулы квадрата разности:' },
              { type: 'text', content: '$$(3b-\\sqrt{t})^{2}$$' },
              { type: 'text', content: '$$=(3b)^{2}-2\\cdot 3b \\cdot \\sqrt{t} + (\\sqrt{t})^{2}$$' },
              { type: 'text', content: '$$=9b^{2}-6b\\sqrt{t}+t$$' },
              { type: 'text', content: 'Эти формулы полезно будет запомнить, что бы быстрее развёртывать выражения. Но зубрить их совсем не обязательно, можно просто записать их на бумажку, и по мере надобности к ним обращаться, и со временем они сами запомнятся.' },
              { type: 'text', content: 'Если ещё один частый случай:' },
              { type: 'text', content: '$$(a+b)(a-b)$$' },
              { type: 'text', content: 'Развернём выражение:' },
              { type: 'text', content: '$$=(a+b)a+(a+b)(-b)$$' },
              { type: 'text', content: '$$=aa+ba+a(-b)+b(-b)$$' },
              { type: 'text', content: '$$=a^{2}+ab-ab-b^{2}$$' },
              { type: 'text', content: '$$=a^{2}-b^{2}$$' },
              { type: 'text', content: 'Таким образом:' },
              { type: 'text', content: '$$(a+b)(a-b)=a^{2}-b^{2}$$' },
              { type: 'text', content: 'Рассмотрим конечно же к этой формуле пример:' },
              { type: 'text', content: '$$(wx-5)(wx+5)=(wx)^{2}-5^{2}=w^{2}x^{2}-25$$' },
              { type: 'margin' },
              { type: 'text', content: 'Можно также вывести формулы кубов \\((a+b)^{3}\\) и \\((a-b)^{3}\\), но делать это более долго. Вот что получится в результате:' },
              { type: 'text', content: '$$(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}$$' },
              { type: 'text', content: '$$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}$$' },
              { type: 'text', content: 'Используются они реже чем предыдущие, но записать их всё-таки есть смысл.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Разверните] выражение' },
                  { type: 'text', content: '$$3x(2x-8)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Просто используем свойство дистрибутвности.' },
                  { type: 'text', content: '$$3x(2x-8)=6x^{2}-24x$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Разверните] выражение' },
                  { type: 'text', content: '$$(3+x^{2})^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Используем формулу квадрата суммы:' },
                  { type: 'text', content: '$$(a+b)^{2}=a^{2}+2ab+b^{2}$$' },
                  { type: 'text', content: '$$(3+x^{2})^{2}=3^{2}+2\\cdot 3 \\cdot x^{2}+(x^{2})^{2}$$' },
                  { type: 'text', content: '$$=9+6x^{2}+x^{4}$$' },
                  { type: 'text', content: '$$=x^{4}+6x^{2}+9$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Разверните] выражение' },
                  { type: 'text', content: '$$(14-t)(14+t)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Используем формулу \\((a-b)(a+b)=a^{2}-b^{2}\\)' },
                  { type: 'text', content: '$$(14-t)(14+t)=14^{2}-t^{2}=196-t^{2}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Факторизация] выражений' },
              { type: 'text', content: 'Мы говорили о развёртывании выражений:' },
              { type: 'text', content: '$$(3x+2)(2x-1)=6x^{2}+x-2$$' },
              { type: 'text', content: '[s]Факторизация выражений[/s] - это процесс, обратный развёртыванию выражений:' },
              { type: 'text', content: '$$6x^{2}+x-2=(3x+2)(2x-1)$$' },
              { type: 'text', content: 'При факторизации выражения \\(6x^{2}+x-2\\) мы получаем \\((3x+2)(2x-1)\\), так как развернув \\((3x+2)(2x-1)\\) мы получим \\(6x^{2}+x-2\\)' },
              { type: 'text', content: '$$6x^{2}+x-2=(3x+2)(2x-1)$$' },
              { type: 'text', content: 'Но мы так можем сказать лишь потому, что мы изначально имели факторизированное выражение. Но что делать если мы имеем например выражение \\(4x^{2}+3x-8\\), и нам надо его разложить на множители? Это достаточно большая тема, в которой есть много способов и путей, и нужно много тренировки, что бы эти пути видеть. Рассмотрим простейшие примеры.' },
              { type: 'text', content: 'Давайте факторизируем такое выражения:' },
              { type: 'text', content: '$$16x^{2}+8x$$' },
              { type: 'text', content: 'В данном примере мы можем вынести общий множитель за скобки, по свойству дистрибутивности. Но вариантов много:' },
              { type: 'text', content: '$$16x^{2}+8x=2(8x^{2}+4x)$$' },
              { type: 'text', content: '$$16x^{2}+8x=4(4x^{2}+2x)$$' },
              { type: 'text', content: '$$16x^{2}+8x=8(2x^{2}+x)$$' },
              { type: 'text', content: '$$16x^{2}+8x=x(16x+8)$$' },
              { type: 'text', content: '$$16x^{2}+8x=2x(8x+4)$$' },
              { type: 'text', content: '$$16x^{2}+8x=4x(4x+2)$$' },
              { type: 'text', content: '$$16x^{2}+8x=8x(2x+1)$$' },
              { type: 'text', content: 'Какой же из этой кучи вариантов лучше взять? В данном случае лучше взять тот, в котором получилось вынести за скобки больше переменных и больше число, то есть последний:' },
              { type: 'text', content: '$$16x^{2}+8x=8x(2x+1)$$' },
              { type: 'text', content: 'Факторизация выполнена, двигаемся к следующему примеру:' },
              { type: 'text', content: '$$9a^{4}b^{3}-6a^{6}b^{2}+3a^{3}b^{2}$$' },
              { type: 'text', content: 'Здесь также мы можем вынести общий множитель за скобки. Но вместо выписывания всех возможных вариантов, которых здесь 23, давайте подумаем. Какое максимальное число мы можем взять для вынесения за скобки? Это \\(3\\), так как все члены многочлена делятся на \\(3\\), а больше уже не стоит брать, зачем нам дроби.' },
              { type: 'text', content: '$$3(3a^{4}b^{3}-2a^{6}b^{2}+a^{3}b^{2})$$' },
              { type: 'text', content: 'Далее. Вынесем максимальную степень переменной \\(a\\). Максимальная степень \\(a\\) которая есть у каждого члена это \\(3\\). Выносим \\(a^{3}\\) и делим каждый из членов, соответственно, на \\(a^{3}\\):' },
              { type: 'text', content: '$$3a^{3}(3ab^{3}-2a^{3}b^{2}+b^{2})$$' },
              { type: 'text', content: 'Осталось вынести максимальную степень \\(b\\). Максимальная степень которая есть у каждого члена это \\(2\\). Выносим:' },
              { type: 'text', content: '$$3a^{3}b^{2}(3ab-2a^{3}+1)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$9a^{4}b^{3}-6a^{6}b^{2}+3a^{3}b^{2}=3a^{3}b^{2}(3ab-2a^{3}+1)$$' },
              { type: 'text', content: 'Рассмотрим последний пример:' },
              { type: 'text', content: '$$7(x-1)+(x+2)(x-1)$$' },
              { type: 'text', content: 'В данном случае может быть не сразу видно, что здесь можно вынести за скобки. В этой сумме слагаемые это перемножение двух множителей. В первом идёт перемножение \\(7\\) на \\((x-1)\\), во втором \\((x+1)\\) на \\((x-1)\\). В обоих слагаемых идёт умножение некого множителя на \\((x-1)\\), соответственно можно каждое слагаемое на него поделить и вынести за скобки:' },
              { type: 'text', content: '$$=(x-1)(7+(x+2))$$' },
              { type: 'text', content: 'Теперь раскроем ненужные скобки перед знаком плюс и сложим \\(7\\) и \\(2\\):' },
              { type: 'text', content: '$$=(x-1)(7+x+2)$$' },
              { type: 'text', content: '$$=(x-1)(x+9)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$7(x-1)+(x+2)(x-1)=(x-1)(x+9)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Но это были простые случаи, не всегда факторизацию можно провести простым вынесением множителя за скобки. Например - \\(x^{2}+8x+4\\). Здесь не найти общего множителя для вынесения, и надо использовать иной подход. Но об этом позже.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$7x^{3}-x^{2}$$' }
                ],
                correctAnswer: '$$7x^{3}-x^{2}=x^{2}(7x-1)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x(8x-3)+(8x-3)3-(8x-3)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x(8x-3)+(8x-3)3-(8x-3)$$' },
                  { type: 'text', content: '$$=(8x-3)(2x+3-1)=(8x-3)(2x-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2a^{3}b^{2}+8ab$$' }
                ],
                correctAnswer: '$$2a^{3}b^{2}+8ab=2ab(a^{2}b+4)$$'
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Факторизация] трёхчлена' },
              { type: 'text', content: 'Для трёхчленов вида' },
              { type: 'text', content: '$$x^{2}+bx+c$$' },
              { type: 'text', content: 'Есть полезная формула:' },
              { type: 'text', content: '$$x^{2}+bx+c=x^{2}+(r+s)x+rs=(x+r)(x+s)$$' },
              { type: 'text', content: 'То есть нам дано разложить \\(b\\) на два некоторых числа \\(r\\) и \\(s\\). Но не любые, а только те, которые при перемножении будут давать \\(c\\). И после этого подставить эти числа в выражение \\((x+r)(x+s)\\).' },
              { type: 'text', content: 'Рассмотрим пример факторизации такого выражения:' },
              { type: 'text', content: '$$x^{2}+10x+16$$' },
              { type: 'text', content: 'Число \\(b=10\\), число \\(с=16\\). Нам надо найти такие два числа, которые при сложении будут давать \\(10\\), а при умножении \\(16\\). \\(6\\) и \\(4\\) при сложении дают \\(10\\), но при умножении дают \\(24\\) а не \\(16\\), соответственно они не подходят. А вот числа \\(8\\) и \\(2\\) вполне подходят:' },
              { type: 'text', content: '$$8+2=10$$' },
              { type: 'text', content: '$$8\\cdot 2 = 16$$' },
              { type: 'text', content: 'Давайте теперь эти два числа подставим в выражение \\((x+r)(x+s)\\), на места переменных \\(r\\) и \\(s\\)' },
              { type: 'text', content: '$$(x+8)(x+2)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$x^{2}+10x+16=(x+8)(x+2)$$' },
              { type: 'text', content: 'Можем проверить развёртыванием:' },
              { type: 'text', content: '$$(x+8)(x+2)=x^{2}+2x+8x+16=x^{2}+10x+16$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим второй пример:' },
              { type: 'text', content: '$$x^{2}+3-18$$' },
              { type: 'text', content: 'В данном случае \\(b=3\\), \\(c=-18\\). Нам надо найти такие числа \\(s\\) и \\(r\\), что бы при сложении они давали \\(3\\), а при умножении \\(-18\\). Одно из этих чисел должно быть отрицательным, что бы получилось отрицательное при перемножении. В данном случае подходят числа \\(-3\\) и \\(6\\):' },
              { type: 'text', content: '$$-3+6=3=b$$' },
              { type: 'text', content: '$$-3\\cdot 6 = -18=c$$' },
              { type: 'text', content: '\\(s=-3\\), \\(r=6\\). Подставляем:' },
              { type: 'text', content: '$$(x+s)(x+r)$$' },
              { type: 'text', content: '$$(x+(-3))(x+6)=(x-3)(x+6)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$x^{2}+3-18=(x-3)(x+6)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'sub-title', content: 'Трехчлен вида \\(ax^{2}+bx+c\\)' },
              { type: 'text', content: 'Теперь перейдём к более сложной для факторизации форме трёхчлена, у которой в первом члене с \\(x^{2}\\) есть коэффициент' },
              { type: 'text', content: '$$ax^{2}+bx+c$$' },
              { type: 'text', content: 'Для данной формы также есть своя формула:' },
              { type: 'text', content: '$$ax^{2}+bx+c=pqx^{2}+(ps+qr)x+rs=(px+r)(qx+s)$$' },
              { type: 'text', content: 'Выглядит она более заморочено. Но если разобраться, можно понять. Нам надо разложить числа \\(a\\) и \\(c\\) на произведение двух множителей. \\(a\\) на \\(p\\cdot q\\), \\(b\\) на \\(r\\cdot s\\). Сделать это не сложно. Но загвоздка в том, что сумма \\(ps+qr\\) должна образовывать число \\(b\\). А это не всегда так. Рассмотрим пример:' },
              { type: 'text', content: '$$15x^{2}+54x+48$$' },
              { type: 'text', content: 'Здесь переменные: \\(a=15\\), \\(b=54\\), \\(c=48\\)' },
              { type: 'text', content: 'Найдём два числа \\(p\\) и \\(q\\), которые при перемножении дадут \\(a\\), то есть \\(15\\). Например \\(p=5\\) и \\(q=3\\):' },
              { type: 'text', content: '$$5\\cdot 3 = 15 = a$$' },
              { type: 'text', content: 'Теперь разложим число \\(c\\) на \\(r\\) и \\(s\\). Например \\(r=24\\) и \\(s=2\\):' },
              { type: 'text', content: '$$24\\cdot 2 = 48 = c$$' },
              { type: 'text', content: 'По формуле, складывая \\(ps+qr\\) должно получаться число \\(b\\), то есть \\(54\\), и только тогда подобранные числа сформируют правильную факторизацию. У нас \\(p=5\\), \\(q=3\\), \\(r=24\\), \\(s=2\\). Проверим:' },
              { type: 'text', content: '$$p\\cdot s + q\\cdot r$$' },
              { type: 'text', content: '$$= 5\\cdot 2 + 3\\cdot 24 = 10 + 72 = 82 \\neq 54$$' },
              { type: 'text', content: 'В результате получилось число \\(82\\), а не \\(54\\). Соответственно числа подобраны неправильно. Попробуем такие числа: \\(p=3\\), \\(q=5\\), \\(r=6\\), \\(s=8\\):' },
              { type: 'text', content: '$$pq=3\\cdot 5=15=a$$' },
              { type: 'text', content: '$$rs=6\\cdot 8=48=c$$' },
              { type: 'text', content: '$$ps+qr=3\\cdot 8+5\\cdot 6=24+30=54$$' },
              { type: 'text', content: 'А вот данные числа уже подошли, и получилось число \\(54\\). Соответственно мы можем их теперь подставить в выражение \\((px+r)(qx+s)\\):' },
              { type: 'text', content: '$$(3x+6)(5x+8)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$15x^{2}+54x+48=(3x+6)(5x+8)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Это, конечно же, не единственный способ факторизации. Есть более простые методы, но в некоторых ситуациях данный метод может оказаться полезным, поэтому о нём стоит знать.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] трёхчлен' },
                  { type: 'text', content: '$$x^{2}+11x+24$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Пользуемся формулой \\(x^{2}+bx+c=x^{2}+(r+s)x+rs=(x+r)(x+s)\\)' },
                  { type: 'text', content: 'Число \\(c\\), то есть \\(24\\), надо разложить на два множителя \\(r\\) и \\(s\\). Например: \\(r=8\\), \\(s=3\\):' },
                  { type: 'text', content: '$$8\\cdot 3 = 24 = c$$' },
                  { type: 'text', content: 'Проверяем равна ли сумма \\(r+s\\) числу \\(b\\):' },
                  { type: 'text', content: '$$8+3=11=b$$' },
                  { type: 'text', content: 'Да, равна. Подставляем числа в \\((x+r)(x+s)\\):' },
                  { type: 'text', content: '$$(x+8)(x+3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] трёхчлен' },
                  { type: 'text', content: '$$24x^{2}+32x+10$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Пользуемся формулой \\(ax^{2}+bx+c=pqx^{2}+(ps+qr)x+rs=(px+r)(qx+s)\\)' },
                  { type: 'text', content: 'В трёхчлене \\(a=24\\), \\(b=32\\), \\(c=10\\)' },
                  { type: 'text', content: 'Надо найти такие числа \\(p,q,r,s\\), что бы \\(pq=a\\), \\(rs=c\\) и \\(ps+qr=b\\). Такими числами являются \\(p=4, q=6, r=2, s=5\\):' },
                  { type: 'text', content: '$$pq=4\\cdot 6=24=a$$' },
                  { type: 'text', content: '$$rs=2\\cdot 5=10=c$$' },
                  { type: 'text', content: '$$ps+qr=4\\cdot 5+6\\cdot 2=20+12=32=b$$' },
                  { type: 'text', content: 'Подставляем в \\((px+r)(qx+s)\\):' },
                  { type: 'text', content: '$$(4x+2)(6x+5)$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Полезные формулы] для факторизации' },
              { type: 'text', content: 'Давайте вспомним полезные формулы развёртывания:' },
              { type: 'text', content: '$$(a-b)(a+b)=a^{2}-b^{2}$$' },
              { type: 'text', content: '$$(a+b)^{2}=a^{2}+2ab+b^{2}$$' },
              { type: 'text', content: '$$(a-b)^{2}=a^{2}-2ab+b^{2}$$' },
              { type: 'text', content: '$$(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}$$' },
              { type: 'text', content: '$$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}$$' },
              { type: 'text', content: 'Эти формулы мы можем использовать и для факторизации с тем же успехом, что и для развёртывания. Например, видя выражение вида \\(a^{2}-b^{2}\\), по формуле разности квадратов, мы можем сразу его факторизировать, переписав в виде \\((a-b)(a+b)\\). Полезные формулы факторизации можно написать так:' },
              { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
              { type: 'text', content: '$$a^{2}+2ab+b^{2}=(a+b)^{2}$$' },
              { type: 'text', content: '$$a^{2}-2ab+b^{2}=(a-b)^{2}$$' },
              { type: 'text', content: '$$a^{3}+3a^{2}b+3ab^{2}+b^{3}=(a+b)^{3}$$' },
              { type: 'text', content: '$$a^{3}-3a^{2}b+3ab^{2}-b^{3}=(a-b)^{3}$$' },
              { type: 'text', content: 'Возьмём к примеру такое выражение:' },
              { type: 'text', content: '$$x^{2}-16$$' },
              { type: 'text', content: 'Для того что бы оно подходило по форму \\(a^{2}-b^{2}\\), выразим \\(16\\) в виде квадрата:' },
              { type: 'text', content: '$$=x^{2}-4^{2}$$' },
              { type: 'text', content: 'И теперь по форме \\(a^{2}-b^{2}\\), у нас есть два чего-то, возведённого в квадрат. Это \\(x\\) и \\(4\\). Мы можем их подставить в формулу \\((a-b)(a+b)\\)' },
              { type: 'text', content: '$$=(x-4)(x+4)$$' },
              { type: 'text', content: 'Таким образом факторизация выполнена:' },
              { type: 'text', content: '$$x^{2}-16=(x-4)(x+4)$$' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим другой пример:' },
              { type: 'text', content: '$$(r-t)^{2}-25x^{2}$$' },
              { type: 'text', content: 'Проведём преобразования в форму \\(a^{2}-b^{2}\\)' },
              { type: 'text', content: '$$=(r-t)^{2}-5^{2}x^{2}$$' },
              { type: 'text', content: '$$=(r-t)^{2}-(5x)^{2}$$' },
              { type: 'text', content: 'Теперь, по формуле \\(a^{2}-b^{2}=(a-b)(a+b)\\), у нас \\(a=(r-t)\\) и \\(b=5x\\). Подставим в выражение \\((a-b)(a+b)\\), и получим выполненную факторизацию:' },
              { type: 'text', content: '$$(r-t)^{2}-25x^{2}=(r-t-5x)(r-t+5x)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь рассмотрим другой пример:' },
              { type: 'text', content: '$$x^{2}+14x+49$$' },
              { type: 'text', content: 'Данное выражение можно преобразовать так, что бы оно подходило под форму \\(a^{2}+2ab+b^{2}\\):' },
              { type: 'text', content: '$$=x^{2}+2x7+7^{2}$$' },
              { type: 'text', content: 'И теперь можно подставить значения \\(x\\) и \\(7\\) в \\((a+b)^{2}\\) и получить готовую факторизацию:' },
              { type: 'text', content: '$$=(x+7)^{2}$$' },
              { type: 'margin' },
              { type: 'text', content: 'Для следующего примера воспользуемся формулой квадрата разности \\(a^{2}-2ab+b^{2}=(a-b)^{2}\\):' },
              { type: 'text', content: '$$x^{2}-8x+16$$' },
              { type: 'text', content: '$$=x^{2}-2x4+4^{2}$$' },
              { type: 'text', content: '$$=(x-4)^{2}$$' },
              { type: 'text', content: 'Многочлены вида \\(a^{2}+2ab+b^{2}\\) или \\(a^{2}-2ab+b^{2}\\) называют [s]полным квадратом[/s].' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Кроме приведённых выше формул, есть ещё две, которые также бывают полезны:' },
              { type: 'text', content: '$$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})$$' },
              { type: 'text', content: '$$a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$$' },
              { type: 'text', content: 'Их мы также можем использовать для факторизации:' },
              { type: 'text', content: '$$8x^{3}+27$$' },
              { type: 'text', content: '$$=(2x)^{3}+3^{3}$$' },
              { type: 'text', content: '$$=(2x+3)(4x^{2}-6x+9)$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x^{3}-1$$' },
              { type: 'text', content: '$$=x^{3}-1^{3}$$' },
              { type: 'text', content: '$$=(x-1)(x^{2}+x+1)$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-25$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-25$$' },
                  { type: 'text', content: '$$=x^{2}-5^{2}$$' },
                  { type: 'text', content: '$$=(x-5)(x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+16x+64$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+16x+64$$' },
                  { type: 'text', content: '$$=x^{2}+2x8+8^{2}$$' },
                  { type: 'text', content: '$$=(x+8)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}+8$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}+8$$' },
                  { type: 'text', content: '$$=x^{3}+2^{3}$$' },
                  { type: 'text', content: '$$=(x+2)(x^{2}-2x+4)$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Полная] факторизация' },
              { type: 'text', content: 'Иногда, проведя факторизацию выражения, её можно провести ещё раз на получившихся множителях. Например:' },
              { type: 'text', content: '$$3a^{3}-3ab^{2}$$' },
              { type: 'text', content: '$$=3a(a^{2}-b^{2})$$' },
              { type: 'text', content: 'В получившемся выражении появилась разность квадратов, которую мы можем факторизировать по формуле \\(a^{2}-b^{2}=(a-b)(a+b)\\):' },
              { type: 'text', content: '$$=3a(a-b)(a+b)$$' },
              { type: 'text', content: 'Только когда мы провели факторизацию везде где могли, то можем считать факторизацию полной. Рассмотрим ещё пример:' },
              { type: 'text', content: '$$7r^{5}t^{2}-7rt^{6}$$' },
              { type: 'text', content: '$$=7rt^{2}(r^{4}-t^{2})$$' },
              { type: 'text', content: '$$=7rt^{2}((r^{2})^{2}-(t^{2})^{2})$$' },
              { type: 'text', content: '$$=7rt^{2}(r^{2}-t^{2})(r^{2}+t^{2})$$' },
              { type: 'text', content: '$$=7rt^{2}(r-t)(r+t)(r^{2}+t^{2})$$' },
              { type: 'sub-title', content: 'Факторизация выражений с дробными степенями' },
              { type: 'text', content: 'Рассмотрим пример факторизации выражения с дробными степенями:' },
              { type: 'text', content: '$$2x^{\\frac{5}{2}}+16x^{\\frac{3}{2}}+24x^{\\frac{1}{2}}$$' },
              { type: 'text', content: '$$=2x^{\\frac{1}{2}}(x^{\\frac{4}{2}}+8x^{\\frac{2}{2}}+12)$$' },
              { type: 'text', content: '$$=2x^{\\frac{1}{2}}(x^{2}+8x+12)$$' },
              { type: 'text', content: 'В результате вынесения за скобки \\(2x^{\\frac{1}{2}}\\), получилось выражение \\(x^{2}+8x+12\\), которое мы тоже можем факторизировать, что бы получить полную факторизацию:' },
              { type: 'text', content: '$$=2x^{\\frac{1}{2}}(x+2)(x+6)$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2t^3-32t$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2t^3-32t$$' },
                  { type: 'text', content: '$$=2t(t^{2}-16)$$' },
                  { type: 'text', content: '$$=2t(t^{2}-4^{2})$$' },
                  { type: 'text', content: '$$=2t(t-4)(t+4)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$5a^4-20a^2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$5a^4-20a^2$$' },
                  { type: 'text', content: '$$=5a^{2}(a^{2}-4)$$' },
                  { type: 'text', content: '$$=5a^{2}(a^{2}-2^{2})$$' },
                  { type: 'text', content: '$$=5a^{2}(a-2)(a+2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{\\frac{7}{3}}-18x^{\\frac{1}{3}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{\\frac{7}{3}}-18x^{\\frac{1}{3}}$$' },
                  { type: 'text', content: '$$=2x^{\\frac{1}{3}}(x^{\\frac{6}{3}}-9)$$' },
                  { type: 'text', content: '$$=2x^{\\frac{1}{3}}(x^{2}-9)$$' },
                  { type: 'text', content: '$$=2x^{\\frac{1}{3}}(x^{2}-3^{2})$$' },
                  { type: 'text', content: '$$=2x^{\\frac{1}{3}}(x-3)(x+3)$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Факторизация методом [группирования]' },
              { type: 'text', content: 'Многочлены с 4 или более членами иногда могут быть факторизированы методом группирования. Например, такой многочлен:' },
              { type: 'text', content: '$$g^3+2g^2+5g+10$$' },
              { type: 'text', content: 'Сгруппируем пары в скобки:' },
              { type: 'text', content: '$$=(g^3+2g^2)+(5g+10)$$' },
              { type: 'text', content: 'Теперь вынесем за скобки общие множители:' },
              { type: 'text', content: '$$=g^{2}(g+2)+5(g+2)$$' },
              { type: 'text', content: 'И теперь у нас получилась сумма, в которой \\((g+2)\\) есть в обоих членах, соответственно его можно также вынести и останутся \\(g^{2}\\) и \\(5\\):' },
              { type: 'mini-question', content: { question: 'Закончите факторизацию самостоятельно', answer: '$$=(g+2)(g^{2}+5)$$' } },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим другой пример:' },
              { type: 'text', content: '$$x^3-6x^2-16x+96$$' },
              { type: 'text', content: '$$(x^3-6x^2)+(-16x+96)$$' },
              { type: 'text', content: '$$x^{2}(x-6)-16(x-6)$$' },
              { type: 'text', content: '$$=(x-6)(x^{2}-16)$$' },
              { type: 'text', content: '$$=(x-6)(x^{2}-4^{2})$$' },
              { type: 'text', content: '$$=(x-6)(x-4)(x+4)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Это был последний способ, рассмотренный в данной теме. Но есть конечно и другие способы, которые мы изучим позже. А пока пора переходить к практике!' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Сложите] многочлены' },
                  { type: 'text', content: '$$(7x^{2}+6)+(2x^{2}-4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'По сути, сложить многочлены, это значит просто раскрыть скобки и привести подобные члены.' },
                  { type: 'text', content: '$$(7x^{2}+6)+(2x^{2}-4)$$' },
                  { type: 'text', content: '$$=7x^{2}+6+2x^{2}-4$$' },
                  { type: 'text', content: '$$=9x^{2}+2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Сложите] многочлены' },
                  { type: 'text', content: '$$(2x^{2}+6x+1)+(-7x^{2}+2x-3)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(2x^{2}+6x+1)+(-7x^{2}+2x-3)$$' },
                  { type: 'text', content: '$$=2x^{2}+6x+1-7x^{2}+2x-3$$' },
                  { type: 'text', content: '$$=-5x^{2}+8x-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Сложите] многочлены' },
                  { type: 'text', content: '$$(x-3)+(x+2)+(x+4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x-3)+(x+2)+(x+4)$$' },
                  { type: 'text', content: '$$=x-3+x+2+x+4$$' },
                  { type: 'text', content: '$$=3x+3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Сложите] многочлены' },
                  { type: 'text', content: '$$(20x^{3}-8x^{2}+12x-7)+(-10x^{3}+11x^{2}-14x+6)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(20x^{3}-8x^{2}+12x-7)+(-10x^{3}+11x^{2}-14x+6)$$' },
                  { type: 'text', content: '$$=20x^{3}-8x^{2}+12x-7-10x^{3}+11x^{2}-14x+6$$' },
                  { type: 'text', content: '$$=10x^{3}+3x^{2}-2x-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Сложите] многочлены' },
                  { type: 'text', content: '$$(2v^{2}+3v-7)+(6v^{2}+4v+4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(2v^{2}+3v-7)+(6v^{2}+4v+4)$$' },
                  { type: 'text', content: '$$=2v^{2}+3v-7+6v^{2}+4v+4$$' },
                  { type: 'text', content: '$$=8v^{2}+7v-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычтите] многочлен' },
                  { type: 'text', content: '$$(2x+5)-(x+8)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(2x+5)-(x+8)$$' },
                  { type: 'text', content: '$$=2x+5-x-8$$' },
                  { type: 'text', content: '$$=x-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычтите] многочлен' },
                  { type: 'text', content: '$$(2x^{2}+1)-(x^{2}-2x+1)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(2x^{2}+1)-(x^{2}-2x+1)$$' },
                  { type: 'text', content: '$$=2x^{2}+1-x^{2}+2x-1$$' },
                  { type: 'text', content: '$$=x^{2}+2x$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычтите] многочлен' },
                  { type: 'text', content: '$$(-7w^{2}-2w-1)-(-5w^{2}+3w-2)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(-7w^{2}-2w-1)-(-5w^{2}+3w-2)$$' },
                  { type: 'text', content: '$$=-7w^{2}-2w-1+5w^{2}-3w+2$$' },
                  { type: 'text', content: '$$=-2w^{2}-5w+1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычтите] многочлен' },
                  { type: 'text', content: '$$(3x^{2}-7x-4)-(6x^{2}-6x+1)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(3x^{2}-7x-4)-(6x^{2}-6x+1)$$' },
                  { type: 'text', content: '$$=3x^{2}-7x-4-6x^{2}+6x-1$$' },
                  { type: 'text', content: '$$=-3x^{2}-x-5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Вычтите] многочлен' },
                  { type: 'text', content: '$$(12x^{2}+x)-(6-9x^{2}+x^{7}-8x)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(12x^{2}+x)-(6-9x^{2}+x^{7}-8x)$$' },
                  { type: 'text', content: '$$12x^{2}+x-6+9x^{2}-x^{7}+8x$$' },
                  { type: 'text', content: '$$-x^{7}+21x^{2}+9x-6$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(x+3)(x-3)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(a-b)(a+b)=a^{2}-b^{2}$$' },
                  { type: 'text', content: '$$(x+3)(x-3)=x^{2}-9$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(x+2)(x-1)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x+2)(x-1)$$' },
                  { type: 'text', content: '$$=(x+2)x-(x+2)1$$' },
                  { type: 'text', content: '$$=x^{2}+2x-x-2$$' },
                  { type: 'text', content: '$$=x^{2}+x-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(x^{2}-4)(5x+16)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x^{2}-4)(5x+16)$$' },
                  { type: 'text', content: '$$=5x^{3}+16x^{2}-20x-64$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(7x^{2}+6)(2x^{2}-4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(7x^{2}+6)(2x^{2}-4)$$' },
                  { type: 'text', content: '$$=14x^{4}-16x^{2}-24$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(x+1)(x^{2}-2x+4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x+1)(x^{2}-2x+4)$$' },
                  { type: 'text', content: '$$=x^{3}-x^{2}+2x+4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(6+c)^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(a+b)^{2}=a^{2}+2ab+b^{2}$$' },
                  { type: 'text', content: '$$(6+c)^{2}$$' },
                  { type: 'text', content: '$$=6^{2}+2\\cdot 6c+c^{2}$$' },
                  { type: 'text', content: '$$=36+12c+c^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(6+x)(6-x)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(a+b)(a-b)=a^{2}-b^{2}$$' },
                  { type: 'text', content: '$$(6+x)(6-x)$$' },
                  { type: 'text', content: '$$6^{2}-x^{2}$$' },
                  { type: 'text', content: '$$36-x^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(6n^{2}-6n-5)(7n^{2}+6n-5)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(6n^{2}-6n-5)(7n^{2}+6n-5)$$' },
                  { type: 'text', content: '$$=42n^{4}-6n^{3}-101n^{2}+25$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(2x^{2}-x+4)(x^{2}+3x+2)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(2x^{2}-x+4)(x^{2}+3x+2)$$' },
                  { type: 'text', content: '$$=2x^{4}+5x^{3}+5x^{2}+10x+8$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Перемножьте] многочлены' },
                  { type: 'text', content: '$$(x-2)(x^{2}+2x+4)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x-2)(x^{2}+2x+4)$$' },
                  { type: 'text', content: '$$=x^{3}-8$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x+9$$' }
                ],
                correctAnswer: '$$3x+9=3(x+3)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$16x-4$$' }
                ],
                correctAnswer: '$$16x-4=4(4x-1)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x-21$$' }
                ],
                correctAnswer: '$$3x-21=3(x-7)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$14a+35$$' }
                ],
                correctAnswer: '$$14a+35=7(2a+5)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$18x-9$$' }
                ],
                correctAnswer: '$$18x-9=9(2x-1)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x+6y$$' }
                ],
                correctAnswer: '$$3x+6y=3(x+2y)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$6x-14y$$' }
                ],
                correctAnswer: '$$2(3x-7y)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$8x+12y-2z$$' }
                ],
                correctAnswer: '$$8x+12y-2z=2(4x+6y-z)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3a^{2}b-18a^{2}b^{2}+3b^{2}$$' }
                ],
                correctAnswer: '$$3a^{2}b-18a^{2}b^{2}+3b^{2}=3b(a^{2}-6a^{2}b+b)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3(x+4)b-6(x+4)b^{2}$$' }
                ],
                correctAnswer: '$$3(x+4)b-6(x+4)b^{2}=3b(x+4)(1-2b)$$'
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-6x+9$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-2ab+b^{2}=(a-b)^{2}$$' },
                  { type: 'text', content: '$$x^{2}-6x+9$$' },
                  { type: 'text', content: '$$=x^{2}-2\\cdot 3x+3^{2}$$' },
                  { type: 'text', content: '$$=(x-3)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+4x+4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}+2ab+b^{2}=(a+b)^{2}$$' },
                  { type: 'text', content: '$$x^{2}+4x+4$$' },
                  { type: 'text', content: '$$=x^{2}+2\\cdot 2x+2^{2}$$' },
                  { type: 'text', content: '$$=(x+2)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+8x+16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}+2ab+b^{2}=(a+b)^{2}$$' },
                  { type: 'text', content: '$$x^{2}+8x+16$$' },
                  { type: 'text', content: '$$=x^{2}+2\\cdot 4x+4^{2}$$' },
                  { type: 'text', content: '$$=(x+4)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$1+12x+36x^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$1+12x+36x^{2}$$' },
                  { type: 'text', content: '$$=36x^{2}+12x+1$$' },
                  { type: 'text', content: '$$=(6x)^{2}+(2)(6x)(1)+1^{2}$$' },
                  { type: 'text', content: '$$=(6x+1)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$49x^{2}+70x+25$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$49x^{2}+70x+25$$' },
                  { type: 'text', content: '$$(7x)^{2}+(2)(7x)(5)+5^{2}$$' },
                  { type: 'text', content: '$$=(7x+5)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$x^{2}-4$$' },
                  { type: 'text', content: '$$=x^{2}-2^{2}$$' },
                  { type: 'text', content: '$$=(x-2)(x+2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$9x^{2}-16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$9x^{2}-16$$' },
                  { type: 'text', content: '$$=(3x)^{2}-4^{2}$$' },
                  { type: 'text', content: '$$=(3x-4)(3x+4)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$8x^{2}-98$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$8x^{2}-98$$' },
                  { type: 'text', content: '$$=2(4x^{2}-49)$$' },
                  { type: 'text', content: '$$=2((2x)^{2}-7^{2})$$' },
                  { type: 'text', content: '$$=2(2x-7)(2x+7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$6x^{2}-24y^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$6x^{2}-(6)(4)y^{2}$$' },
                  { type: 'text', content: '$$=6(x^{2}-4y^{2})$$' },
                  { type: 'text', content: '$$=6(x^{2}-(2y)^{2})$$' },
                  { type: 'text', content: '$$=6(x-2y)(x+2y)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$20x^{2}-5y^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-b^{2}=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$20x^{2}-5y^{2}$$' },
                  { type: 'text', content: '$$=5(4x^{2}-y^{2})$$' },
                  { type: 'text', content: '$$=5((2x)^{2}-y^{2})$$' },
                  { type: 'text', content: '$$=5(2x-y)(2x+y)$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+5x+6$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+5x+6$$' },
                  { type: 'text', content: '$$=(x+3)(x+2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-15x+26$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-15x+26$$' },
                  { type: 'text', content: '$$=(x-13)(x-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$u^{2}-8u+12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$u^{2}-8u+12$$' },
                  { type: 'text', content: '$$=(u-6)(u-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+4x-21$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+4x-21$$' },
                  { type: 'text', content: '$$=(x+7)(x-3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$u^{2}-26u-27$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$u^{2}-26u-27$$' },
                  { type: 'text', content: '$$=(u+1)(u-27)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{2}+7x+6$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{2}+7x+6$$' },
                  { type: 'text', content: '$$=(2x+3)(x+2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x^{2}+5x+2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^{2}+5x+2$$' },
                  { type: 'text', content: '$$=(3x+2)(x+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$6x^{2}+5x+1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$6x^{2}+5x+1$$' },
                  { type: 'text', content: '$$=(3x+1)(2x+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{2}+7x+5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{2}+7x+5$$' },
                  { type: 'text', content: '$$=(x+1)(2x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$4x^{2}+8x+3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^{2}+8x+3$$' },
                  { type: 'text', content: '$$=(2x+1)(2x+3)$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}+5x^{2}-9x-45$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}+5x^{2}-9x-45$$' },
                  { type: 'text', content: '$$=(x^{3}+5x^{2})+(-9x-45)$$' },
                  { type: 'text', content: '$$=x^{2}(x+5)-9(x+5)$$' },
                  { type: 'text', content: '$$=(x^{2}-9)(x+5)$$' },
                  { type: 'text', content: '$$=(x^{2}-3^{2})(x+5)$$' },
                  { type: 'text', content: '$$=(x-3)(x+3)(x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}-5x^{2}+3x-15$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}-5x^{2}+3x-15$$' },
                  { type: 'text', content: '$$=(x^{3}-5x^{2})+(3x-15)$$' },
                  { type: 'text', content: '$$=x^{2}(x-5)+3(x-5)$$' },
                  { type: 'text', content: '$$=(x^{2}+3)(x-5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x^{3}-6x^{2}+15x-30$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^{3}-6x^{2}+15x-30$$' },
                  { type: 'text', content: '$$=3(x^{3}-2x^{2}+5x-10)$$' },
                  { type: 'text', content: '$$=3((x^{3}-2x^{2})+(5x-10))$$' },
                  { type: 'text', content: '$$=3(x^{2}(x-2)+5(x-2))$$' },
                  { type: 'text', content: '$$=3((x^{2}+5)(x-2))$$' },
                  { type: 'text', content: '$$=3(x^{2}+5)(x-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$9x^{3}+36x^{2}-4x-16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$9x^{3}+36x^{2}-4x-16$$' },
                  { type: 'text', content: '$$=(9x^{3}+36x^{2})+(-4x-16)$$' },
                  { type: 'text', content: '$$=9x^{2}(x+4)-4(x+4)$$' },
                  { type: 'text', content: '$$=(x+4)(9x^{2}-4)$$' },
                  { type: 'text', content: '$$=(x+4)((3x)^{2}-2^{2})$$' },
                  { type: 'text', content: '$$=(x+4)(3x-2)(3x+2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}-x^{2}-x+1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}-x^{2}-x+1$$' },
                  { type: 'text', content: '$$=(x^{3}-x^{2})+(-x+1)$$' },
                  { type: 'text', content: '$$=x^{2}(x-1)-1(x-1)$$' },
                  { type: 'text', content: '$$=(x^{2}-1)(x-1)$$' },
                  { type: 'text', content: '$$=(x^{2}-1^{2})(x-1)$$' },
                  { type: 'text', content: '$$=(x-1)(x+1)(x-1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}-2x^{2}-x+2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}-2x^{2}-x+2$$' },
                  { type: 'text', content: '$$=(x^{3}-2x^{2})+(-x+2)$$' },
                  { type: 'text', content: '$$=x^{2}(x-2)+-1(x-2)$$' },
                  { type: 'text', content: '$$=(x^{2}-1)(x-2)$$' },
                  { type: 'text', content: '$$=(x^{2}-1^{2})(x-2)$$' },
                  { type: 'text', content: '$$=(x-1)(x+1)(x-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}+3x^{2}-4x-12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}+3x^{2}-4x-12$$' },
                  { type: 'text', content: '$$=(x^{3}+3x^{2})+(-4x-12)$$' },
                  { type: 'text', content: '$$=x^{2}(x+3)-4(x+3)$$' },
                  { type: 'text', content: '$$=(x^{2}-4)(x+3)$$' },
                  { type: 'text', content: '$$=(x^{2}-2^{2})(x+3)$$' },
                  { type: 'text', content: '$$=(x-2)(x+2)(x+3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$12x^{3}+2x^{2}-30x-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$12x^{3}+2x^{2}-30x-5$$' },
                  { type: 'text', content: '$$=(12x^{3}+2x^{2})+(-30x-5)$$' },
                  { type: 'text', content: '$$=2x^{2}(6x+1)-5(6x+1)$$' },
                  { type: 'text', content: '$$=(6x+1)(2x^{2}-5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{3}+5x^{2}-9x-45$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{3}+5x^{2}-9x-45$$' },
                  { type: 'text', content: '$$=(x^{3}+5x^{2})+(-9x-45)$$' },
                  { type: 'text', content: '$$=x^{2}(x+5)+-9(x+5)$$' },
                  { type: 'text', content: '$$=(x^{2}-9)(x+5)$$' },
                  { type: 'text', content: '$$=(x^{2}-3^{2})(x+5)$$' },
                  { type: 'text', content: '$$=(x-3)(x+3)(x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x^{3}-6x^{2}+15x-30$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^{3}-6x^{2}+15x-30$$' },
                  { type: 'text', content: '$$=3(x^{3}-2x^{2}+5x-10)$$' },
                  { type: 'text', content: '$$=3((x^{3}-2x^{2})+(5x-10))$$' },
                  { type: 'text', content: '$$=3(x^{2}(x-2)+5(x-2))$$' },
                  { type: 'text', content: '$$=3(x^{2}+5)(x-2)$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+16x+84$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+16x+84$$' },
                  { type: 'text', content: '$$=(x+8)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-2x^{2}-3x-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-2x^{2}-3x-1$$' },
                  { type: 'text', content: '$$=-(2x+1)(x+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$64x^{2}-49$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$64x^{2}-49$$' },
                  { type: 'text', content: '$$=(8x)^{2}-7^{2}$$' },
                  { type: 'text', content: '$$=(8x-7)(8x+7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-7x+10$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-7x+10$$' },
                  { type: 'text', content: '$$=(x-5)(x-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$16x-4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$16x-4$$' },
                  { type: 'text', content: '$$=4(4x-1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$12x^{3}+2x^{2}-30x-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$12x^{3}+2x^{2}-30x-5$$' },
                  { type: 'text', content: '$$=(12x^{3}+2x^{2})+(-30x-5)$$' },
                  { type: 'text', content: '$$=2x^{2}(6x+1)-5(6x+1)$$' },
                  { type: 'text', content: '$$=(2x^{2}-5)(6x+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-5xy-25x^{2}+15x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-5xy-25x^{2}+15x$$' },
                  { type: 'text', content: '$$=-5x(y+5x-3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$4x^{2}-12x+20$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^{2}-12x+20$$' },
                  { type: 'text', content: '$$=4(x^2-3x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+15x+26$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+15x+26$$' },
                  { type: 'text', content: '$$=(x+2)(x+13)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x-21$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x-21$$' },
                  { type: 'text', content: '$$=3(x-7)$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$16x-4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$16x-4$$' },
                  { type: 'text', content: '$$=4(4x-1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$u^{2}-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$u^{2}-1$$' },
                  { type: 'text', content: '$$=u^{2}-1^{2}$$' },
                  { type: 'text', content: '$$=(u-1)(u+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{3}-6x^{2}-20x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{3}-6x^{2}-20x$$' },
                  { type: 'text', content: '$$=2x(x^{2}-3x-10)$$' },
                  { type: 'text', content: '$$=2x(x+2)(x-5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-8x+16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-8x+16$$' },
                  { type: 'text', content: '$$=(x-4)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+3x-10$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+3x-10$$' },
                  { type: 'text', content: '$$=(x-2)(x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-2xy-4x^{2}+6x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-2xy-4x^{2}+6x$$' },
                  { type: 'text', content: '$$=-2x(y+2x-3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{2}+9x-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{2}+9x-5$$' },
                  { type: 'text', content: '$$=(2x-1)(x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-x^{2}-4x+21$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-x^{2}-4x+21$$' },
                  { type: 'text', content: '$$=-(x-3)(x+7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$u^{2}-8u+12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$u^{2}-8u+12$$' },
                  { type: 'text', content: '$$=(u-2)(u-6)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+18x+81$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+18x+81$$' },
                  { type: 'text', content: '$$=(x+9)^{2}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$22x^{2}-28x+12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$22x^{2}-28x+12$$' },
                  { type: 'text', content: '$$=2(11x^2-14x+6)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-49$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-49$$' },
                  { type: 'text', content: '$$=x^{2}-7^{2}$$' },
                  { type: 'text', content: '$$=(x-7)(x+7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$8x^{2}-10x+3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$8x^{2}-10x+3$$' },
                  { type: 'text', content: '$$=(2x-1)(4x-3)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-12x+35$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-12x+35$$' },
                  { type: 'text', content: '$$=(x-5)(x-7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$a^{5}+a^{3}-a^{2}-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(a^{5}+a^{3})+(-a^{2}-1)$$' },
                  { type: 'text', content: '$$=a^{3}(a^{2}+1)-1(a^{2}+1)$$' },
                  { type: 'text', content: '$$=(a^{3}-1)(a^{2}+1)$$' },
                  { type: 'text', content: '$$=(a^2+1)(a-1)(a^2+a+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$9x^{2}y+12xy^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$9x^{2}y+12xy^{2}$$' },
                  { type: 'text', content: '$$=3xy(3x+4y)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$4x^{2}+12x+9$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^{2}+12x+9$$' },
                  { type: 'text', content: '$$=(2x+3)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$16a^{2}+14a+20$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$16a^{2}+14a+20$$' },
                  { type: 'text', content: '$$=2(8a^2+7a+10)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-4k^{4}-20k^{3}+24k^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-4k^{4}-20k^{3}+24k^{2}$$' },
                  { type: 'text', content: '$$=4k^2(-k^2-5k+6)$$' },
                  { type: 'text', content: '$$=4k^2(k-1)(k+6)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-12x+36$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-12x+36$$' },
                  { type: 'text', content: '$$=(x-6)^{2}$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+16x-17$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+16x-17$$' },
                  { type: 'text', content: '$$=(x+1)(x-17)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{5}+x2x^{4}2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{5}+x2x^{4}2$$' },
                  { type: 'text', content: '$$=x^5(1+2x)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$a^{2}-4a+4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a^{2}-4a+4$$' },
                  { type: 'text', content: '$$=(a-2)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-2x^{2}-3x-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-2x^{2}-3x-1$$' },
                  { type: 'text', content: '$$=-(2x+1)(x+1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$8x^{2}-98$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$8x^{2}-98$$' },
                  { type: 'text', content: '$$=2(4x^{2}-49)$$' },
                  { type: 'text', content: '$$=2((2x)^{2}-7^{2})$$' },
                  { type: 'text', content: '$$=2(2x-7)(2x+7)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$6x^{2}-14y$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$6x^{2}-14y$$' },
                  { type: 'text', content: '$$2(3x^{2}-7y)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$6x^{2}-12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$6x^{2}-12$$' },
                  { type: 'text', content: '$$=6(x^{2}-2)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+18x+81$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+18x+81$$' },
                  { type: 'text', content: '$$=(x+9)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$36x^{2}+21x+18$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$36x^{2}+21x+18$$' },
                  { type: 'text', content: '$$=3(12x^2+7x+6)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$3x^{4}3x^{3}36x^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^{4}3x^{3}36x^{2}$$' },
                  { type: 'text', content: '$$=324x^9$$' }
                ]
              }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{2}+7x+5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{2}+7x+5$$' },
                  { type: 'text', content: '$$=(x+1)(2x+5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$25x^{2}+40x+16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$25x^{2}+40x+16$$' },
                  { type: 'text', content: '$$=(5x+4)^{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$2x^{3}-6x^{2}-20x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^{3}-6x^{2}-20x$$' },
                  { type: 'text', content: '$$=2x(x^2-3x-10)$$' },
                  { type: 'text', content: '$$=2x(x+2)(x-5)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$-6x^{2}+24$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-6x^{2}+24$$' },
                  { type: 'text', content: '$$=6\\left(-x^2+4\\right)$$' },
                  { type: 'text', content: '$$=-6\\left(x+2\\right)\\left(x-2\\right)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}-11x+10$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}-11x+10$$' },
                  { type: 'text', content: '$$=(x-1)(x-10)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$4r^{2}+16rs-10s^{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4r^{2}+16rs-10s^{2}$$' },
                  { type: 'text', content: '$$=2\\left(2r^2+8rs-5s^2\\right)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$36x^{2}+21x+18$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$36x^{2}+21x+18$$' },
                  { type: 'text', content: '$$=3\\left(12x^2+7x+6\\right)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$x^{2}+4x-12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{2}+4x-12$$' },
                  { type: 'text', content: '$$=(x-2)(x+6)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$24x^{3}-6x^{2}+8x-2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$24x^{3}-6x^{2}+8x-2$$' },
                  { type: 'text', content: '$$=2(12x^3-3x^2+4x-1)$$' },
                  { type: 'text', content: '$$=2((12x^3-3x^2)+(4x-1))$$' },
                  { type: 'text', content: '$$=2(3x^{2}(4x-1)+1(4x-1))$$' },
                  { type: 'text', content: '$$=2(3x^{2}+1)(4x-1)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Факторизируйте] выражение' },
                  { type: 'text', content: '$$5x^{2}+35x-30$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$5x^{2}+35x-30$$' },
                  { type: 'text', content: '$$=5(x^2+7x-6)$$' }
                ]
              }
            ]
          }
        ]
      }
      // 4: {
      //   name: 'Рациональные выражения'
      // },
      // 5: {
      //   name: 'Уравнения'
      // },
      // 6: {
      //   name: 'Комплексгые числа'
      // },
      // 7: {
      //   name: 'Неравенства'
      // },
      // 8: {
      //   name: 'Координатная плоскость; графики уравнений; круги'
      // },
      // 9: {
      //   name: 'Линии'
      // },
      // 10: {
      //   name: 'Решение уравнений и неравенств графическом способом'
      // }
    }
  })
}
