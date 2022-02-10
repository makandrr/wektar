export default {
  state: () => ({
    name: 'Основы',
    pageName: 'basics',
    description: 'В этом блоке разобраны базовые концепции математики: дроби, степени, корни, уравнения, комплексные числа и другие темы. Рекомендуется пройти этот блок, даже если вы уже имеете представление об этих концепциях.\n',
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
              { type: 'text', content: 'В этой теме начнём с разбора основополагающего понятия — вещественные числа. Это такие числа к которым все привыкли: 25. 5.3, 3.14 и т.д. Делятся они на различные типы. Самый маленький тип это [s]натуральные числа[/s]:' },
              { type: 'text', content: '$$ 1, 2, 3, 4, 5... $$' },
              { type: 'text', content: 'Этот тип включает в себя все числа от \\(1\\) до бесконечности, то есть этот ряд чисел бесконечен в одну сторону. Хочу заметить что \\(0\\) в натуральные числа не входит.' },
              { type: 'text', content: 'Следующий тип чисел — [s]целые числа[/s]:' },
              { type: 'text', content: '$$ ...-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5... $$' },
              { type: 'text', content: 'Этот тип расширяет натуральные числа, добавляя к ним отрицательные числа и \\(0\\). То есть этот ряд чисел бесконечен уже в две стороны.' },
              { type: 'text', content: 'Далее идут [s]рациональные числа[/s], которые расширяют целые числа, добавляя к ним дроби. Все числа этого типа могут быть выражены в виде:' },
              { type: 'text', content: '$$ r=\\frac{a}{b} $$' },
              { type: 'text', content: 'В этом курсе я не буду подробно останавливаться на том как работают дроби. Вкратце скажу то, что в данном случае дробь \\(\\frac{a}{b}\\) означает деление \\(a\\) на \\(b\\), либо взятие \\(a\\) частей от единицы разделённой на \\(b\\) частей. (это два абсолютно взаимозаменяемых определения которые приводят к одному результату)' },
              { type: 'text', content: 'Также стоит заметить что множестсво рациональных чисел состоит не только из дробей, но также из всех предыдущих типов. Например \\(42\\) относится к рациональным числам, так как его можно представить в виде дроби...' },
              { type: 'mini-question', content: { question: 'Как представить число 42 в виде дроби', answer: '\\(42=\\frac{42}{1}\\), так как \\(42\\) разделить на \\(1\\) будет \\(42\\)' } },
              { type: 'text', content: 'Такие случаи когда \\(b\\) является нулём, например \\(\\frac{0}{0}\\) или \\(\\frac{8}{0}\\) являются неопределёнными.' },
              { type: 'text', content: 'Если вы плохо разбираетесь в дробях, рекомендую обратиться к сторонним материалам для более начинающих.' },
              { type: 'text', content: 'Следующий и последний тип — [s]иррациональные числа[/s], который уже не является расширением рациональных чисел, а является отдельным типом, который включает в себя числа которые не могут быть выражены рациональным числом. Примером иррационального числа может быть число \\(\\pi\\) или \\(\\sqrt{2}\\)' },
              { type: 'text', content: 'Таким образом, все перечисленные типы чисел вместе образуют вещественные числа, множество которых обозначается символом \\(\\mathbb{R} \\). Когда мы говорим о числе, то мы подразумеваем именно это множество.' },
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
              { type: 'text', content: 'Есть также [s]ассоциативное свойство[/s] сложения и умножения. Выглядят они так:' },
              { type: 'text', content: '$$(a+b)+c=a+(b+c)$$' },
              { type: 'text', content: '$$(ab)c=a(bc)$$' },
              { type: 'text', content: 'Данные свойства нам говорят о том, что, неважно какие два члена суммы или произведения сложим, или умножим первыми. Скобки в выражениях указывают какое действие будет выполнено раньше.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'А теперь, рассмотрим очень важное свойство которое уже не такое интуитивно понятное как предыдущие — [s]дистрибутивное свойство[/s]:' },
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
              { type: 'text', content: 'Таким образом, мы пришли к варианту который получился бы у нас при использовании распределительного свойства. Теперь рассмотрим ещё пару важных примеров использования данного свойства.' },
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
              { type: 'text', content: 'Теперь рассмотрим важные свойства дробей.' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ab}{cd}$$' },
              { type: 'text', content: '$$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$$' },
              { type: 'text', content: '$$\\frac{a}{c}+\\frac{b}{c}=\\frac{a+b}{c}$$' },
              { type: 'text', content: '$$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$$' },
              { type: 'text', content: '$$\\frac{ac}{bc}=\\frac{a}{b}$$' },
              { type: 'text', content: '$$\\frac{a}{b}=\\frac{c}{d}\\Rightarrow ad=bc$$' },
              { type: 'text', content: 'Символ \\(\\Rightarrow \\) в последнем свойстве можно перевести как "следовательно" или "то", соответственно это можно перести как: если \\(\\frac{a}{b}=\\frac{c}{d}\\), то \\(ad=bc\\).' },
              { type: 'text', content: 'Особого внимания также заслуживает сложение дробей с разными знаменателями. В основном мы не пользуемся представленным свойством, а преобразуем дроби так что бы у них был одинаковый знаменатель. Для этого мы можем сокращать или расширять дроби не меняя их, в этом нам также может помочь НОК. Рассмотрим пример:' },
              { type: 'text', content: '$$\\frac{5}{36}+\\frac{7}{120}$$' },
              { type: 'text', content: 'Разложив знаменатели \\(36\\) и \\(120\\) мы получаем \\(36=2 \\cdot 2 \\cdot 3 \\cdot 3\\) и \\(120=2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 5\\). Исходя их этого НОК равен \\(360\\), и мы можем домножить каждую дробь до этого числа:' },
              { type: 'text', content: '$$\\frac{5 \\cdot 10}{36 \\cdot 10}+\\frac{7 \\cdot 3}{120 \\cdot 3}=\\frac{50}{360}+\\frac{21}{360}$$' },
              { type: 'text', content: 'Таким образом, мы не изменили значения дробей, но привели их к единому знаменателю, и теперь можем легко сложить:' },
              { type: 'text', content: '$$\\frac{50}{360}+\\frac{21}{360}=\\frac{71}{360}$$' }
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
              { type: 'text', content: 'Что делать, если мы хотим определить множество \\(A\\), в котором будут абсолютно все числа от \\(3\\) до \\(5\\)? Мы не можем просто написать \\(A=\\{3,4,5\\}\\), ведь между каждым из чисел есть ещё бесконечное количество дробных, и мы не сможем их всех перечислить. И для решения этой задачи существуют интервалы. Нам надо указать интервал всех чисел от \\(3\\) до \\(5\\). Для этого мы просто пишем \\(A=[3,5]\\), указывая начало и конец интервала. Таким образом, множество \\(A\\) включает в себя даже очень маленькие доли между числами, например верны следующие утверждения:' },
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
              { type: 'text', content: 'А как указать интервал \\((3, 5)\\) в виде неравенства? Для этого надо просто понять, какие числа отсеивает данный интервал. Он отсеивает все числа, которые меньше пяти, но больше трёх. Таким образом, можно записать это так \\(3 \t&lt; x \t&lt; 5\\) или так \\(5 > x > 3\\)' },
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
                  { type: 'interval-output', content: { interval: [2, 5], exclude: [true, true] } }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] объединение интервалов и нарисуйте его' },
                  { type: 'text', content: '$$A=(1,5)$$' },
                  { type: 'text', content: '$$B=(2,8)$$' },
                  { type: 'text', content: '$$A \\cup B = ?$$' }
                ],
                data: {},
                correctData: {},
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup B = (1, 8)$$' },
                  { type: 'interval-output', content: { interval: [1, 8], exclude: [true, true] } }
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
              { type: 'text', content: 'Теперь предположим что есть некое число \\(b\\), и \\(b > 5\\), а также есть такой модуль' },
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
              { type: 'text', content: '$$|b-a|$$' },
              { type: 'text', content: 'То есть надо вычесть второе число из первого и взять модуль из разницы. Теперь вы можете найти расстояние между любыми двумя точками на прямой, на пример, между точками \\(-12\\) и \\(17\\):' },
              { type: 'text', content: '$$|17-(-12)|=|17+12|=$$' },
              { type: 'text', content: '$$|29|=29$$' },
              { type: 'text', content: 'Для обозначение расстояния можно использовать запись \\(d(a, b)\\), которая буквально означает "расстояние между точками \\(a\\) и \\(b\\)"' },
              { type: 'text', content: '$$d(a,b)=|b-a|$$' },
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
                  { type: 'text', content: '$$2-\\frac{1}{3}+\\frac{2}{5}$$' }
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
                  exp: '>'
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
                correctAnswer: [
                  { type: 'text', content: '$$A \\cup B=\\{2,3,4,5,6,7,8,9,10,11,12\\}$$' }
                ]
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
              { type: 'text', content: 'Таким образом, мы смогли вычислить данное выражение без отдельного вычисления отрицательной степени \\(3^{-2}\\). Но всё-таки мы бы хотели вычислить сколько будет \\(3^{-2}\\). Мы знаем что' },
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
              { type: 'mini-question', content: { question: 'Какие два члена являются подобными?', answer: '\\(3x^{3}\\) и \\(-2x^{3}\\). Они оба имеют одинаковую буквенную часть: \\(x^{3}\\)' } },
              { type: 'text', content: 'Исходя из этого мы можем их сложить, но давайте сначала переставим их вместе для удобства:' },
              { type: 'text', content: '$$3x^{3}+4x^{2}+(-2)x^{3}$$' },
              { type: 'text', content: '$$=3x^{3}+(-2)x^{3}+4x^{2}$$' },
              { type: 'text', content: 'Теперь давайте сложим их:' },
              { type: 'text', content: '$$3x^{3}+(-2)x^{3}=$$' },
              { type: 'text', content: '$$=(3+(-2))x^{3}$$' },
              { type: 'text', content: '$$=(3-2)x^{3}=1x^{3}=x^{3}$$' },
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
              { type: 'text', content: '$$(2x\\cdot 4x)+(2x\\cdot (-2))+$$' },
              { type: 'text', content: '$$+(5\\cdot 4x)+(5\\cdot (-2))$$' },
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
              { type: 'text', content: '$$=ad+ae+af+bd+be+bf+$$' },
              { type: 'text', content: '$$+cd+ce+cf$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим последний пример с перемножением многочленов:' },
              { type: 'text', content: '$$(2x^{2}+7)(3x^{3}+2x^{2}-x)$$' },
              { type: 'text', content: '$$=2x^{2}(3x^{3}+2x^{2}-x)+$$' },
              { type: 'text', content: '$$+7(3x^{3}+2x^{2}-x)$$' },
              { type: 'text', content: '$$=(2x^{2}3x^{3})+$$' },
              { type: 'text', content: '$$+(2x^{2}2x^{2})+$$' },
              { type: 'text', content: '$$+(2x^{2}\\cdot (-x))+$$' },
              { type: 'text', content: '$$+(7\\cdot 3x^{3})+(7\\cdot 2x^{2})+(7\\cdot (-x))$$' },
              { type: 'text', content: '$$=(6x^{5})+(4x^{4})+(-2x^{3})+$$' },
              { type: 'text', content: '$$+(21x^{3})+(14x^{2})+(-7x)$$' },
              { type: 'text', content: '$$=6x^{5}+4x^{4}-2x^{3}+$$' },
              { type: 'text', content: '$$+21x^{3}+14x^{2}-7x$$' },
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
                  { type: 'text', content: '$$=7x^{3}8x+x^{2}8x-8\\cdot 8x-7x^{3}4-$$' },
                  { type: 'text', content: '$$-x^{2}4+8\\cdot 4$$' },
                  { type: 'text', content: '$$=56x^{4}+8x^{3}-64x-28x^{3}-$$' },
                  { type: 'text', content: '$$-4x^{2}+32$$' },
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
              { type: 'text', content: '$$a+b-(c+d-e)$$' },
              { type: 'text', content: '$$=a+b-c-d+e$$' },
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
              { type: 'text', content: '$$(a+4)^{2}=a^{2}+2\\cdot a \\cdot 4 + 4^{2}$$' },
              { type: 'text', content: '$$=a^{2}+8a+16$$' },
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
              { type: 'text', content: '$$(wx-5)(wx+5)=(wx)^{2}-5^{2}$$' },
              { type: 'text', content: '$$=w^{2}x^{2}-25$$' },
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
                  { type: 'text', content: '$$(14-t)(14+t)$$' },
                  { type: 'text', content: '$$=14^{2}-t^{2}=196-t^{2}$$' }
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
              { type: 'text', content: '$$9a^{4}b^{3}-6a^{6}b^{2}+3a^{3}b^{2}$$' },
              { type: 'text', content: '$$=3a^{3}b^{2}(3ab-2a^{3}+1)$$' },
              { type: 'text', content: 'Рассмотрим последний пример:' },
              { type: 'text', content: '$$7(x-1)+(x+2)(x-1)$$' },
              { type: 'text', content: 'В данном случае может быть не сразу видно, что здесь можно вынести за скобки. В этой сумме слагаемые это перемножение двух множителей. В первом идёт перемножение \\(7\\) на \\((x-1)\\), во втором \\((x+1)\\) на \\((x-1)\\). В обоих слагаемых идёт умножение некого множителя на \\((x-1)\\), соответственно можно каждое слагаемое на него поделить и вынести за скобки:' },
              { type: 'text', content: '$$=(x-1)(7+(x+2))$$' },
              { type: 'text', content: 'Теперь раскроем ненужные скобки перед знаком плюс и сложим \\(7\\) и \\(2\\):' },
              { type: 'text', content: '$$=(x-1)(7+x+2)$$' },
              { type: 'text', content: '$$=(x-1)(x+9)$$' },
              { type: 'text', content: 'Факторизация выполнена:' },
              { type: 'text', content: '$$7(x-1)+(x+2)(x-1)$$' },
              { type: 'text', content: '$$=(x-1)(x+9)$$' },
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
                  { type: 'text', content: '$$=(8x-3)(2x+3-1)$$' },
                  { type: 'text', content: '$$=(8x-3)(2x-2)$$' }
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
              { type: 'text', content: '$$x^{2}+bx+c=x^{2}+(r+s)x+rs$$' },
              { type: 'text', content: '$$=(x+r)(x+s)$$' },
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
              { type: 'text', content: '$$(x+8)(x+2)$$' },
              { type: 'text', content: '$$=x^{2}+2x+8x+16$$' },
              { type: 'text', content: '$$=x^{2}+10x+16$$' },
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
              { type: 'text', content: '$$ax^{2}+bx+c$$' },
              { type: 'text', content: '$$=pqx^{2}+(ps+qr)x+rs$$' },
              { type: 'text', content: '$$=(px+r)(qx+s)$$' },
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
                  { type: 'text', content: 'Пользуемся формулой' },
                  { type: 'text', content: '$$x^{2}+bx+c=x^{2}+(r+s)x+rs$$' },
                  { type: 'text', content: '$$=(x+r)(x+s)$$' },
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
                  { type: 'text', content: 'Пользуемся формулой' },
                  { type: 'text', content: '$$ax^{2}+bx+c$$' },
                  { type: 'text', content: '$$=pqx^{2}+(ps+qr)x+rs$$' },
                  { type: 'text', content: '$$=(px+r)(qx+s)$$' },
                  { type: 'text', content: 'В трёхчлене \\(a=24\\), \\(b=32\\), \\(c=10\\)' },
                  { type: 'text', content: 'Надо найти такие числа \\(p,q,r,s\\), что бы \\(pq=a\\), \\(rs=c\\) и \\(ps+qr=b\\). Такими числами являются \\(p=4, q=6, r=2, s=5\\):' },
                  { type: 'text', content: '$$pq=4\\cdot 6=24=a$$' },
                  { type: 'text', content: '$$rs=2\\cdot 5=10=c$$' },
                  { type: 'text', content: '$$ps+qr=4\\cdot 5+6\\cdot 2$$' },
                  { type: 'text', content: '$$=20+12=32=b$$' },
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
              { type: 'text', content: '$$(r-t)^{2}-25x^{2}$$' },
              { type: 'text', content: '$$=(r-t-5x)(r-t+5x)$$' },
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
              { type: 'text', content: 'Это был последний способ, рассмотренный в данной теме. Но есть конечно и другие способы, которые мы изучим позже. А пока пора переходить к практике!' },
              { type: 'text', content: 'Хочу заметить, что в заданиях на факторизацию выражений вида \\(ax^{2}+bx+c\\) подходящие числа могут упорно не находиться. Не разочаровывайтесь. Это нормально. В таких случаях просто посмотрите готовое решение и убедитесь в правильности подобранных в нём чисел. Не стоит часами перебирать всевозможные варианты. Для факторизации таких выражений есть гораздо более удобные методы, и мы их позже рассмотрим.' }
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
                  { type: 'text', content: '$$(20x^{3}-8x^{2}+12x-7)+$$' },
                  { type: 'text', content: '$$+(-10x^{3}+11x^{2}-14x+6)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(20x^{3}-8x^{2}+12x-7)+$$' },
                  { type: 'text', content: '$$+(-10x^{3}+11x^{2}-14x+6)$$' },
                  { type: 'text', content: '$$=20x^{3}-8x^{2}+12x-7-$$' },
                  { type: 'text', content: '$$-10x^{3}+11x^{2}-14x+6$$' },
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
      },
      4: {
        name: 'Рациональные выражения',
        steps: [
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Что такое [рациональное выражение]?' },
              { type: 'text', content: 'Мы уже изучили что такое алгебраические выражения. Рациональные же выражения это просто отношение двух алгебраических. Например:' },
              { type: 'text', content: '$$\\frac{x^{2}-8}{x^{3}+2x^{2}+1}$$' },
              { type: 'text', content: 'Но, к примеру, такое выражение:' },
              { type: 'text', content: '$$\\frac{x}{\\sqrt{4x+2}}$$' },
              { type: 'text', content: 'Такое выражение уже не подходит под определение, так как знаменатель дроби является корнем' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Область определения [алгебраического выражения]' },
              { type: 'text', content: 'Возьмём выражение:' },
              { type: 'text', content: '$$x^2-\\sqrt{x}$$' },
              { type: 'text', content: 'И подставим под переменную \\(x\\) число \\(4\\):' },
              { type: 'text', content: '$$4^2-\\sqrt{4}=16-2=14$$' },
              { type: 'text', content: 'В результате вычисления мы получили [s]определённое[/s] значение. Оно определено и мы можем сказать что это за значение. Но давайте подставим под \\(x\\) число \\(-4\\):' },
              { type: 'text', content: '$$(-4)^2-\\sqrt{-4}=16-\\sqrt{-4}$$' },
              { type: 'text', content: 'Теперь мы попали в ситуацию, где мы не можем вычесть корень и отрицательного числа. Мы не можем этого сделать так как во всём множестве вещественных чисел нет такого числа которое было бы равно корню из минус четырёх. Исходя из этого мы можем сказать что при значении переменной \\(x=-4\\) значение выражения не определено.' },
              { type: 'text', content: 'То множество чисел, или можно сказать промежуток, при подставлении чисел из которого под переменную выражения, это выражение будет определено, называется областью определения выражения. Для того что бы найти область определения выражения \\(x^2-\\sqrt{x}\\), нам надо понять при каких значениях выражение неопределенно. Неопределенно оно может быть из-за корня, а точнее из-за того что число под корнем отрицательное. А отрицательное это число тогда, когда \\(x\\) отрицателен. Соответственно можно сказать что выражение неопределенно при:' },
              { type: 'text', content: '$$x<0$$' },
              { type: 'text', content: 'А вот определено оно наоборот, при:' },
              { type: 'text', content: '$$x\\geqslant 0$$' },
              { type: 'text', content: 'Либо можно записать в виде интервала' },
              { type: 'text', content: '$$[0,\\infty)$$' },
              { type: 'text', content: 'Область определения выражения записывается в виде буквы \\(D\\), мы можем записать так:' },
              { type: 'text', content: '$$D= [0, \\infty)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим другое выражение:' },
              { type: 'text', content: '$$\\frac{5}{x-4}$$' },
              { type: 'text', content: 'Корня здесь нет, но есть деление, в котором знаменатель \\(x-4\\) может стать нулём, чего нельзя допускать. Для этого мы должны определить при каких значениях \\(x\\), знаменатель \\(x-4\\) не равен нулю. Нетрудно догадаться что нулю он будет равен только когда \\(x=4\\):' },
              { type: 'text', content: '$$4-4=0$$' },
              { type: 'text', content: 'Соответственно область определения равна всем числам кроме \\(4\\), так как тогда в знаменателе образуется ноль:' },
              { type: 'text', content: '$$x\\neq 4$$' },
              { type: 'text', content: 'В виде интервала можно записать так:' },
              { type: 'text', content: '$$D=(-\\infty, 4)\\cup (4,\\infty)$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь разберём более комплексный случай:' },
              { type: 'text', content: '$$\\frac{x-\\sqrt{x+5}}{\\sqrt{x}}$$' },
              { type: 'text', content: 'В данном случае мы должны исключить несколько случаев:' },
              { type: 'text', content: '1. Что бы в знаменателе не образовывалось нуля | \\(\\sqrt{x}\\neq 0\\)' },
              { type: 'text', content: '2. Что бы число под корнем находящемся в знаменателе(\\(\\sqrt{x}\\)) не было отрицательным | \\(x\\geq 0\\)' },
              { type: 'text', content: '3. Что бы число под корнем находящемся в числителе(\\(\\sqrt{x+5}\\)) не было отрицательным | \\(x+5\\geq 0\\)' },
              { type: 'text', content: 'Таким образом, есть три условия: \\(\\sqrt{x}\\neq 0\\), \\(x\\geq 0\\), \\(x+5\\geq 0\\)' },
              { type: 'text', content: 'Возьмём множество всех вещественных чисел:' },
              { type: 'text', content: '$$(-\\infty, \\infty)$$' },
              { type: 'text', content: 'И будем по порядку из него убирать все недопустимые интервалы' },
              { type: 'text', content: '1. \\(\\sqrt{x}\\neq 0\\). Во-первых, надо убрать все числа из интервала, при взятии из которых квадратного корня, получается ноль. Есть только одно число, при котором квадратный корень равен нулю, это сам ноль. \\(\\sqrt{0}=0\\). Соответственно ноль мы должны исключить из интервала:' },
              { type: 'text', content: '$$(-\\infty, 0) \\cup (0, \\infty)$$' },
              { type: 'text', content: '2. \\(x\\geq 0\\). Данное условие говорит, что все числа должны быть положительными. Соответственно теперь надо убрать из интервала \\((-\\infty, 0) \\cup (0, \\infty)\\) все отрицательные:' },
              { type: 'text', content: '$$(0, \\infty)$$' },
              { type: 'text', content: '3. \\(x+5\\geq 0\\). Данное условие говорит, что в интервале должны быть только такие числа, что если к любому взятому числу прибавить \\(5\\), должно получиться положительное число или ноль. То есть нам надо исключить из интервала те числа, при сложении с которыми числа \\(5\\), получается отрицательное число. Ведь тогда в выражении корень \\(\\sqrt{x+5}\\) будет иметь отрицательное подкоренное число. При каких значениях \\(x\\), \\(x+5\\) будет отрицательным? При \\(x=-5\\), \\(-5+5=0\\), а если взять чуток меньше, то уже получается отрицательное: \\(-5.1+5=-0.1\\). А при любом \\(x\\geqslant -5\\) отрицательного уже никак не может получиться. Таким образом, нам надо убрать все числа \\(x< -5\\). Но в интервале таких чисел уже нет, он начинается с нуля, так что оставляем его тем же:' },
              { type: 'text', content: '$$D=(0, \\infty)$$' },
              { type: 'text', content: 'Таким образом, мы сформировали интервал всех чисел, с которыми получится вычислить выражение \\(\\frac{x-\\sqrt{x+5}}{\\sqrt{x}}\\)' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь рассмотрим пример нахождения области определения такого выражения:' },
              { type: 'text', content: '$$\\frac{1}{x^2-3x+2}$$' },
              { type: 'text', content: 'В данном случае нам надо исключить образование нуля в знаменателе. То есть нам надо что бы выражение \\(x^2-3x+2\\) не было равно нулю. Исключить все числа из интервала \\((-\\infty, \\infty)\\), при подставлении которых под переменную \\(x\\) в интервал \\(x^2-3x+2\\) будет образовываться ноль. Но тут не так просто сказать, для каких значений будет ноль. Для этого давайте факторизируем этот трёхчлен:' },
              { type: 'text', content: '$$=\\frac{1}{(x-2)(x-1)}$$' },
              { type: 'text', content: 'Теперь очевидно при каких значениях будет ноль. Это \\(2\\) и \\(1\\). Убедитесь сами:' },
              { type: 'text', content: '$$x=2$$' },
              { type: 'text', content: '$$\\frac{1}{(2-2)(2-1)}=\\frac{1}{0\\cdot 1}=\\frac{1}{0}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x=1$$' },
              { type: 'text', content: '$$\\frac{1}{(1-2)(1-1)}=\\frac{1}{(-1)\\cdot 0}=\\frac{1}{0}$$' },
              { type: 'text', content: 'Соответственно эти числа надо исключить из интервала \\((-\\infty, \\infty)\\), и мы получим область определения выражения \\(\\frac{1}{x^2-3x+2}\\)' },
              { type: 'text', content: '$$D=(-\\infty, 1)\\cup (1, 2) \\cup (2, \\infty)$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\frac{x}{x-1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'В знаменателе будет получаться ноль при \\(x=1\\), соответственно надо исключить \\(1\\) из множества всех чисел \\((-\\infty, \\infty)\\):' },
                  { type: 'text', content: '$$D=(-\\infty, 1)\\cup (1, \\infty)$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\sqrt{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Под корнем не должно образовываться отрицательного числа. Ноль образуется при \\(x=-1\\), если начнём брать меньше(\\(\\sqrt{-1.1+1}=\\sqrt{-0.1}\\)), то, очевидно, уже получится меньше нуля, то есть отрицательные. Соответственно надо исключиться все числа меньше \\(-1\\):' },
                  { type: 'text', content: '$$D=(-1, \\infty)$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Упрощение] алгебраических выражений' },
              { type: 'text', content: 'Возьмём такую дробь:' },
              { type: 'text', content: '$$\\frac{xa}{ya}$$' },
              { type: 'text', content: 'По правилу умножения дробей мы можем выразить её так:' },
              { type: 'text', content: '$$=\\frac{x}{y}\\cdot \\frac{a}{a}$$' },
              { type: 'text', content: 'Так как дроби это деление, то во второй дроби всегда будет \\(1\\) в результате деления двух одинаковых чисел:' },
              { type: 'text', content: '$$=\\frac{x}{y}\\cdot 1$$' },
              { type: 'text', content: 'А так как умножение на \\(1\\) ничего не меняет, то можно её просто убрать:' },
              { type: 'text', content: '$$=\\frac{x}{y}$$' },
              { type: 'text', content: 'Таким образом, мы упростили дробь:' },
              { type: 'text', content: '$$\\frac{xa}{ya}=\\frac{x}{y}$$' },
              { type: 'text', content: 'И мы получили очень полезное свойство для упрощения дробей. В случае если в числителе и знаменателе есть одинаковый [s]множитель[/s], мы его можем просто убрать:' },
              { type: 'text', content: '$$\\frac{ac}{bc}=\\frac{a}{b}$$' },
              { type: 'text', content: 'И я не просто так выделил, что должен быть одинаковым именно множитель. Так как многие могут допустить ошибку, упростив дробь так:' },
              { type: 'text', content: '$$\\frac{a+c}{b+c}=\\frac{a}{b}$$' },
              { type: 'text', content: 'Но это ошибка. Вы можете проверить это, подставив под переменные числа, и увидеть что равенства нет - преобразование неверно:' },
              { type: 'text', content: '$$\\frac{a+c}{b+c}\\neq \\frac{a}{b}$$' },
              { type: 'text', content: 'Также ошибку можно допустить, упростив так:' },
              { type: 'text', content: '$$\\frac{ab+x}{ac+x}=\\frac{b+x}{c+x}$$' },
              { type: 'text', content: 'В данном случае \\(a\\) хоть и является множителем, но этот множитель относится к произведению, которое является членом суммы. А сокращать можно только тогда, когда множитель относится к произведению которое занимает весь числитель и знаменатель. Например:' },
              { type: 'text', content: '$$\\frac{a(b+x)}{a(c+x)}=\\frac{b+x}{c+x}$$' },
              { type: 'text', content: 'Данный пример уже правильный, так как множитель \\(a\\) и в числителе, и в знаменателе, относится к произведению которое занимает весь числитель или знаменатель.' },
              { type: 'text', content: 'Но на самом деле при полном понимании как работает этот процесс, вы не сможете совершить такие ошибки. И что вы должны сделать, так это именно понять, как же работает данное упрощение, а не просто следовать правилам которые я здесь указал. Если у вас будет понимание, то вам не понадобятся все мои пояснения.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Предлагаю рассмотреть некоторые примеры без моих пояснений. Разберитесь в точности почему преобразованию идут так а не иначе.' },
              { type: 'text', content: '$$\\frac{3x+9}{9x-9}=\\frac{3(x+3)}{3(3x-3)}=\\frac{x+3}{3x-3}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$\\frac{(x+4)(x-2)}{(x-2)(x+3)}=\\frac{x+4}{x+3}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$\\frac{x^{2}+x-6}{x^2+4x+3}=\\frac{(x-2)(x+3)}{(x+1)(x+3)}=\\frac{x-2}{x+1}$$' }
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
                  { type: 'text', content: '$$\\frac{6(x+2)(x+4)}{2(x+4)(x+3)}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6(x+2)(x+4)}{2(x+4)(x+3)}=\\frac{3(x+2)}{x+3}$$' },
                  { type: 'text', content: '(В данном случае в числителе и знаменателе числа \\(6\\) и \\(2\\) хоть и не одинаковые, но так как дробь это деление, то их можно просто поделить и получить \\(3\\), а затем записать её в числитель. В случае когда в числителе и знаменателе члены произведения одинаковые, мы их тоже делим, и получаем \\(1\\). При умножении на единицу произведение не меняется, соответственно смысла записывать её в числитель нету.)' },
                  { type: 'text', content: 'Стремитесь к глубокому пониманию!' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{x^2-9}{2x+6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2-9}{2x+6}=\\frac{(x-3)(x+3)}{2(x+3)}=\\frac{x-3}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{x^2+x-12}{x^2+5x-24}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2+x-12}{x^2+5x-24}=\\frac{(x-3)(x+4)}{(x-3)(x+8)}=\\frac{x+4}{x+8}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Умножение] рациональных выражений' },
              { type: 'text', content: 'По сути рациональное выражение это дробь. А умножение дробей происходит по простому правилу:' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot \\frac{c}{d}=\\frac{ac}{bd}$$' },
              { type: 'text', content: 'Соответственно также можно умножать и рациональные выражения:' },
              { type: 'text', content: '$$\\frac{(x+4)}{(x-2)}\\cdot \\frac{(x+2)}{(x+4)}=\\frac{(x+4)(x+2)}{(x-2)(x+4)}$$' },
              { type: 'text', content: 'После этого также можно упростить результат, сократив на \\((x+4)\\):' },
              { type: 'text', content: '$$=\\frac{x+2}{x-2}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'mini-question', content: { question: 'Составьте формулу для умножения дроби \\(\\frac{a}{b}\\) на число \\(c\\)', answer: '\\(\\frac{a}{b}\\cdot c=\\frac{ac}{b}\\)' } }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Переможьте] и [упростите] выражение' },
              { type: 'text', content: '$$\\frac{9(x+6)(x+1)}{x+3}\\cdot \\frac{(x+2)}{3(x+1)}$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$\\frac{9(x+6)(x+1)}{x+3}\\cdot \\frac{(x+2)}{3(x+1)}$$' },
              { type: 'text', content: '$$=\\frac{9(x+6)(x+1)(x+2)}{3(x+1)(x+3)}$$' },
              { type: 'text', content: '$$=\\frac{3(x+6)(x+2)}{x+3}$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Деление] рациональных выражений' },
              { type: 'text', content: 'Так как рациональные выражения это дроби, то для их деления можно использовать правило деления дробей:' },
              { type: 'text', content: '$$\\frac{a}{b} : \\frac{c}{d}=\\frac{a}{b}\\cdot \\frac{d}{c}$$' },
              { type: 'text', content: 'То есть, для того что бы поделить на дробь, мы можем выразить это деление в виде умножения, перевернув дробь являющеюся делителем, и поменяв знак с деления на умножения. Например:' },
              { type: 'text', content: '$$\\frac{(x+1)(x+3)}{x+2} : \\frac{(x+3)(x+6)}{(x+2)(x-1)}$$' },
              { type: 'text', content: '$$=\\frac{(x+1)(x+3)}{x+2} \\cdot \\frac{(x+2)(x-1)}{(x+3)(x+6)}$$' },
              { type: 'text', content: '$$=\\frac{(x+1)(x+3)(x+2)(x-1)}{(x+2)(x+3)(x+6)}$$' },
              { type: 'text', content: '$$=\\frac{(x+1)(x-1)}{x+6}$$' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Поделите] рациональные выражения' },
                  { type: 'text', content: '$$\\frac{(x-6)(x+1)}{(x+2)(x+6)} : \\frac{(x-6)(x+7)}{(x+2)(x+1)}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{(x-6)(x+1)}{(x+2)(x+6)} : \\frac{(x-6)(x+7)}{(x+2)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{(x-6)(x+1)}{(x+2)(x+6)} \\cdot \\frac{(x+2)(x+1)}{(x-6)(x+7)}$$' },
                  { type: 'text', content: '$$=\\frac{(x-6)(x+1)(x+2)(x+1)}{(x+2)(x+6)(x-6)(x+7)}$$' },
                  { type: 'text', content: '$$=\\frac{(x+1)^2}{(x+6)(x+7)}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Поделите] рациональные выражения' },
                  { type: 'text', content: '$$\\frac{x+2}{x^2-10x+24} : \\frac{x+1}{x^2-11x+28}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x+2}{x^2-10x+24} : \\frac{x+1}{x^2-11x+28}$$' },
                  { type: 'text', content: '$$=\\frac{x+2}{(x-4)(x-6)} : \\frac{x+1}{(x-4)(x-7)}$$' },
                  { type: 'text', content: '$$=\\frac{x+2}{(x-4)(x-6)} \\cdot \\frac{(x-4)(x-7)}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{(x+2)(x-4)(x-7)}{(x-4)(x-6)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{(x+2)(x-7)}{(x-6)(x+1)}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Сложение] и [вычитание] рациональных выражений' },
              { type: 'text', content: 'Если у двух дробей знаменатель одинаковый, то их можно сложить, сложив их числители:' },
              { type: 'text', content: '$$\\frac{a}{c}+\\frac{b}{c}=\\frac{a+b}{c}$$' },
              { type: 'text', content: 'По тому же принципу и с вычитанием:' },
              { type: 'text', content: '$$\\frac{a}{c}-\\frac{b}{c}=\\frac{a-b}{c}$$' },
              { type: 'text', content: 'Рассмотрим примеры:' },
              { type: 'text', content: '$$\\frac{x+4}{x+1}+\\frac{x+7}{x+1}$$' },
              { type: 'text', content: '$$=\\frac{(x+4)+(x+7)}{x+1}$$' },
              { type: 'text', content: '$$=\\frac{x+4+x+7}{x+1}$$' },
              { type: 'text', content: '$$=\\frac{2x+11}{x+1}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$\\frac{4x+7}{x+6}-\\frac{x-2}{x+6}$$' },
              { type: 'text', content: '$$=\\frac{(4x+7)-(x-2)}{x+6}$$' },
              { type: 'text', content: '$$=\\frac{4x+7-x+2}{x+6}$$' },
              { type: 'text', content: '$$=\\frac{3x+9}{x+6}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'sub-title', content: 'Разные знаменатели' },
              { type: 'text', content: 'Но что делать если знаменатели разные? В этом случае надо так расширить или сократить дроби что бы знаменатели у них стали одинаковыми.' },
              { type: 'text', content: 'При перемножении числителя и знаменателя дроби на одно и то же значение, значение самой дроби не изменится:' },
              { type: 'text', content: '$$\\frac{1}{2}=\\frac{1\\cdot 5}{2\\cdot 5}=\\frac{5}{10}$$' },
              { type: 'text', content: 'В данном случае \\(\\frac{1}{2}=\\frac{5}{10}\\). И это логично, ведь и то и то является половиной. Также мы можем делать обратное действие:' },
              { type: 'text', content: '$$\\frac{5}{10}=\\frac{5:5}{10:5}=\\frac{1}{2}$$' },
              { type: 'text', content: 'И данный принцип можно использовать что бы приводить дроби к одинаковому знаменателю. Возьмём простой пример с числами:' },
              { type: 'text', content: '$$\\frac{3}{8}+\\frac{1}{2}$$' },
              { type: 'text', content: 'В данном случае можно расширить дробь \\(\\frac{1}{2}\\) на число \\(4\\):' },
              { type: 'text', content: '$$=\\frac{3}{8}+\\frac{1\\cdot 4}{2\\cdot 4}$$' },
              { type: 'text', content: '$$=\\frac{3}{8}+\\frac{4}{8}$$' },
              { type: 'text', content: 'Как видите, дроби обрели одинаковый знаменатель. Теперь их можно сложить:' },
              { type: 'text', content: '$$=\\frac{7}{8}$$' },
              { type: 'text', content: 'Иногда нужно расширить обе дроби:' },
              { type: 'text', content: '$$\\frac{4}{7}+\\frac{2}{3}$$' },
              { type: 'text', content: '$$\\frac{4\\cdot 3}{7\\cdot 3}+\\frac{2\\cdot 7}{3\\cdot 7}$$' },
              { type: 'text', content: '$$\\frac{12}{21}+\\frac{14}{21}$$' },
              { type: 'text', content: '$$\\frac{26}{21}$$' },
              { type: 'text', content: 'Есть общая формула, которая позволяет привести дроби к одинаковому знаменателю:' },
              { type: 'text', content: '$$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad}{bd}+\\frac{cb}{db}=\\frac{ad+cb}{bd}$$' },
              { type: 'text', content: 'По сути она была использована в последнем примере. Если вы подумаете, то поймёте почему она работает. Но не стоит ей всегда пользоваться, иногда можно расширить только одну дробь и получить одинаковый знаменатель. Но она полезна для рациональных выражений:' },
              { type: 'text', content: '$$\\frac{x+5}{x+2}+\\frac{x+8}{x+1}$$' },
              { type: 'text', content: '$$=\\frac{(x+5)(x+1)}{(x+2)(x+1)}+\\frac{(x+8)(x+2)}{(x+1)(x+2)}$$' },
              { type: 'text', content: 'Может выглядеть немного запутано, но на самом деле всё просто. Первую дробь мы расширяем на знаменатель второй, а вторую на знаменатель первой. Продолжим:' },
              { type: 'text', content: '$$=\\frac{(x+5)(x+1)+(x+8)(x+2)}{(x+2)(x+1)}$$' },
              { type: 'text', content: '$$=\\frac{x^2+6x+5+x^2+10x+16}{(x+2)(x+1)}$$' },
              { type: 'text', content: '$$=\\frac{2x^2+16x+21}{x^2+3x+2}$$' },
              { type: 'text', content: 'Важно понять как это работает и почему это работает, и будете вы мастером приведения общего знаменателя.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{7}{x+6}+\\frac{2}{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{7}{x+6}+\\frac{2}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{7(x+1)}{(x+6)(x+1)}+\\frac{2(x+6)}{(x+1)(x+6)}$$' },
                  { type: 'text', content: '$$=\\frac{7(x+1)+2(x+6)}{(x+6)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{7x+7+2x+12}{(x+6)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{9x+19}{(x+6)(x+1)}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{8}{x+2}-\\frac{4}{x+3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{8}{x+2}-\\frac{4}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{8(x+3)}{(x+2)(x+3)}-\\frac{4(x+2)}{(x+3)(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{8(x+3)-4(x+2)}{(x+2)(x+3)}$$' },
                  { type: 'text', content: '$$=\\frac{8x+24-4x-8}{(x+2)(x+3)}$$' },
                  { type: 'text', content: '$$=\\frac{4x+16}{(x+2)(x+3)}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Рационализация] знаменателя' },
              { type: 'text', content: 'Во второй теме уже шла речь про рационализацию знаменателя, там мы рассматривали случай рационализации знаменателя в подобной дроби:' },
              { type: 'text', content: '$$\\frac{a}{\\sqrt{b}}$$' },
              { type: 'text', content: 'Но здесь мы теперь рассмотрим иной случай. Например:' },
              { type: 'text', content: '$$\\frac{14}{4+\\sqrt{7}}$$' },
              { type: 'text', content: 'Для того что бы рационализировать эту дробь, давайте расширим её на \\(4-\\sqrt{7}\\):' },
              { type: 'text', content: '$$=\\frac{14(4-\\sqrt{7})}{(4+\\sqrt{7})(4-\\sqrt{7})}$$' },
              { type: 'text', content: 'И теперь по преобразуем знаменатель по формуле \\((a+b)(a-b)=a^2-b^2\\):' },
              { type: 'text', content: '$$=\\frac{14(4-\\sqrt{7})}{4^2-\\sqrt{7}^2}$$' },
              { type: 'text', content: '$$=\\frac{14(4-\\sqrt{7})}{16-7}$$' },
              { type: 'text', content: '$$=\\frac{14(4-\\sqrt{7})}{9}$$' },
              { type: 'text', content: 'Как можно увидеть, знаменатель рационализован. Рассмотрим другой похожий пример:' },
              { type: 'text', content: '$$\\frac{2}{10-\\sqrt{3}}$$' },
              { type: 'text', content: '$$=\\frac{2(10-\\sqrt{3})}{(10-\\sqrt{3})(10+\\sqrt{3})}$$' },
              { type: 'text', content: '$$=\\frac{2(10-\\sqrt{3})}{10^2-\\sqrt{3}^2}$$' },
              { type: 'text', content: '$$=\\frac{2(10-\\sqrt{3})}{100-3}$$' },
              { type: 'text', content: '$$=\\frac{2(10-\\sqrt{3})}{97}$$' },
              { type: 'text', content: 'Надеюсь, принцип понятен.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$x^{2}+5x-20$$' }
                ],
                correctAnswer: '$$D=(-\\infty, \\infty)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\frac{2x+5}{x-4}$$' }
                ],
                correctAnswer: '$$D=(-\\infty, 4)\\cup (4, \\infty)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\sqrt{x}+1$$' }
                ],
                correctAnswer: '$$D=[0, \\infty)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\sqrt{x+4}-9$$' }
                ],
                correctAnswer: '$$D=[-4, \\infty)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\frac{x^2+\\sqrt{x}}{x-5}$$' }
                ],
                correctAnswer: '$$D=[0, 5)\\cup(5, \\infty)$$'
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Найдите] область определения выражения' },
                  { type: 'text', content: '$$\\frac{\\sqrt{4x}+x}{3x}$$' }
                ],
                correctAnswer: '$$D=(0, \\infty)$$'
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
                  { type: 'text', content: '$$\\frac{6(x^6+3)(x+2)^3}{2(x+2)(x-1)}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6(x^6+3)(x+2)^3}{2(x+2)(x-1)}$$' },
                  { type: 'text', content: '$$=\\frac{3(x^6+3)(x+2)^2}{x-1}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{x^2+6x+8}{x^2+5x+6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2+6x+8}{x^2+5x+6}$$' },
                  { type: 'text', content: '$$=\\frac{(x+4)(x+2)}{(x+3)(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{x+4}{x+3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{a^2-1}{a^2+5a+4}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{a^2-1}{a^2+5a+4}$$' },
                  { type: 'text', content: '$$=\\frac{(a+1)(a-1)}{(a+1)(a+4)}$$' },
                  { type: 'text', content: '$$=\\frac{a-1}{a+4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{4x^2-x-5}{4x^2+11x-20}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{4x^2-x-5}{4x^2+11x-20}$$' },
                  { type: 'text', content: '$$\\frac{(4x-5)(x+1)}{(x+4)(4x-5)}$$' },
                  { type: 'text', content: '$$\\frac{x+1}{x+4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Упростите] выражение' },
                  { type: 'text', content: '$$\\frac{x^4+x^2-20}{x^4-x^2-12}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^4+x^2-20}{x^4-x^2-12}$$' },
                  { type: 'text', content: '$$=\\frac{(x^2+5)(x^2-4)}{(x^2-4)(x^2+3)}$$' },
                  { type: 'text', content: '$$=\\frac{x^2+5}{x^2+3}$$' }
                ]
              }
            ]
          },
          {
            multi: 'true',
            type: 'task',
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] умножение' },
                  { type: 'text', content: '$$\\frac{x^2+5x+6}{x^2+3x-28}\\cdot \\frac{x^2-3x-4}{x^2+8x+15}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2+5x+6}{x^2+3x-28}\\cdot \\frac{x^2-3x-4}{x^2+8x+15}$$' },
                  { type: 'text', content: '$$=\\frac{(x+3)(x+2)}{(x-4)(x+7)}\\cdot \\frac{(x-4)(x+1)}{(x+3)(x+5)}$$' },
                  { type: 'text', content: '$$=\\frac{(x+3)(x+2)(x-4)(x+1)}{(x-4)(x+7)(x+3)(x+5)}$$' },
                  { type: 'text', content: '$$=\\frac{(x+2)(x+1)}{(x+7)(x+5)}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] умножение' },
                  { type: 'text', content: '$$\\frac{x^2}{x^2+1}\\cdot \\frac{1}{x-3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2}{x^2+1}\\cdot \\frac{1}{x-3}$$' },
                  { type: 'text', content: '$$=\\frac{x^2}{\\left(x^2+1\\right)\\left(x-3\\right)}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] умножение' },
                  { type: 'text', content: '$$\\frac{x+1}{x-1}\\cdot \\frac{1}{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x+1}{x-1}\\cdot \\frac{1}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{x+1}{(x-1)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{1}{x-1}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] умножение' },
                  { type: 'text', content: '$$\\frac{x^2+2x}{x-1}\\cdot \\frac{x^2+3x-4}{x+3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2+2x}{x-1}\\cdot \\frac{x^2+3x-4}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{x^2+2x}{x-1}\\cdot \\frac{(x-1)(x+4)}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{(x^2+2x)(x-1)(x+4)}{(x-1)(x+3)}$$' },
                  { type: 'text', content: '$$=\\frac{(x^2+2x)(x+4)}{x+3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] умножение' },
                  { type: 'text', content: '$$\\frac{x+2}{x-2}\\cdot \\frac{1}{x+2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x+2}{x-2}\\cdot \\frac{1}{x+2}$$' },
                  { type: 'text', content: '$$=\\frac{x+2}{(x-2)(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{1}{x-2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] деление' },
                  { type: 'text', content: '$$\\frac{1}{x}:\\frac{1}{x^2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x}:\\frac{1}{x^2}$$' },
                  { type: 'text', content: '$$=\\frac{1}{x}\\cdot \\frac{x^2}{1}$$' },
                  { type: 'text', content: '$$=\\frac{x^2}{x}$$' },
                  { type: 'text', content: '$$=x$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] деление' },
                  { type: 'text', content: '$$\\frac{x}{x+1}:\\frac{1}{1+x^2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x}{x+1}:\\frac{1}{1+x^2}$$' },
                  { type: 'text', content: '$$\\frac{x}{x+1}\\cdot \\frac{1+x^2}{1}$$' },
                  { type: 'text', content: '$$\\frac{x(1+x^2)}{x+1}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] деление' },
                  { type: 'text', content: '$$\\frac{2}{x}:\\frac{3}{x^2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{2}{x}:\\frac{3}{x^2}$$' },
                  { type: 'text', content: '$$=\\frac{2}{x}\\cdot \\frac{x^2}{3}$$' },
                  { type: 'text', content: '$$=\\frac{2(x^2)}{3x}$$' },
                  { type: 'text', content: '$$=\\frac{2x^2}{3x}$$' },
                  { type: 'text', content: '$$=\\frac{2x}{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] деление' },
                  { type: 'text', content: '$$\\frac{x+2}{x-1}:\\frac{x^2}{x^2+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x+2}{x-1}:\\frac{x^2}{x^2+1}$$' },
                  { type: 'text', content: '$$=\\frac{x+2}{x-1}\\cdot \\frac{x^2+1}{x^2}$$' },
                  { type: 'text', content: '$$=\\frac{(x+2)(x^2+1)}{x^2(x-1)}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выполните] деление' },
                  { type: 'text', content: '$$\\frac{1}{x-3}:\\frac{x+1}{x-1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x-3}:\\frac{x+1}{x-1}$$' },
                  { type: 'text', content: '$$=\\frac{1}{x-3}\\cdot \\frac{x-1}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{x-1}{(x-3)(x+1)}$$' }
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
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{4}{x+3}+1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{4}{x+3}+1$$' },
                  { type: 'text', content: '$$=\\frac{4}{x+3}+\\frac{x+3}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{4+x+3}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{x+7}{x+3}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{6}{x+3}+\\frac{2}{x+3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6}{x+3}+\\frac{2}{x+3}$$' },
                  { type: 'text', content: '$$=\\frac{8}{x+3}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{2}{x+3}+\\frac{2}{x+4}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{2}{x+3}+\\frac{2}{x+4}$$' },
                  { type: 'text', content: '$$=\\frac{2(x+4)}{(x+3)(x+4)}+\\frac{2(x+3)}{(x+3)(x+4)}$$' },
                  { type: 'text', content: '$$=\\frac{2(x+4)+2(x+3)}{(x+3)(x+4)}$$' },
                  { type: 'text', content: '$$=\\frac{2x+8+2x+6}{(x+3)(x+4)}$$' },
                  { type: 'text', content: '$$=\\frac{4x+14}{(x+3)(x+4)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{1}{x+2}+\\frac{1}{x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x+2}+\\frac{1}{x}$$' },
                  { type: 'text', content: '$$=\\frac{x}{x(x+2)}+\\frac{x+2}{x(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{x+x+2}{x(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{2x+2}{x(x+2)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] сложение' },
                  { type: 'text', content: '$$\\frac{1}{x^2}+\\frac{x}{x^3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x^2}+\\frac{x}{x^3}$$' },
                  { type: 'text', content: '$$=\\frac{1}{x^2}+\\frac{1}{x^2}$$' },
                  { type: 'text', content: '$$=\\frac{2}{x^2}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{x+2}{x-1}-\\frac{x^2}{x^2+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x+2}{x-1}-\\frac{x^2}{x^2+1}$$' },
                  { type: 'text', content: '$$=\\frac{(x+2)(x^2+1)}{(x-1)(x^2+1)}-\\frac{x^2(x-1)}{(x-1)(x^2+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^3+x+2x^2+2}{(x-1)(x^2+1)}-\\frac{x^3-x^2}{(x-1)(x^2+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^3+x+2x^2+2-(x^3-x^2)}{(x-1)(x^2+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^3+x+2x^2+2-x^3+x^2}{(x-1)(x^2+1)}$$' },
                  { type: 'text', content: '$$=\\frac{3x^2+x+2}{(x-1)(x^2+1)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{x}{5+x}-\\frac{x^2+1}{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x}{5+x}-\\frac{x^2+1}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{x(x+1)}{(x+5)(x+1)}-\\frac{(x^2+1)(x+5)}{(x+5)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^2+x}{(x+5)(x+1)}-\\frac{x^3+5x^2+x+5}{(x+5)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^2+x-(x^3+5x^2+x+5)}{(x+5)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x^2+x-x^3-5x^2-x-5)}{(x+5)(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{-x^3-4x^2-5}{(x+5)(x+1)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{3}{x^3}-\\frac{x+2}{x-2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{x^3}-\\frac{x+2}{x-2}$$' },
                  { type: 'text', content: '$$=\\frac{3(x-2)}{x^3(x-2)}-\\frac{x^3(x+2)}{x^3(x-2)}$$' },
                  { type: 'text', content: '$$=\\frac{3x-6}{x^3(x-2)}-\\frac{x^4+2x^3}{x^3(x-2)}$$' },
                  { type: 'text', content: '$$=\\frac{3x-6-x^4-2x^3}{x^3(x-2)}$$' },
                  { type: 'text', content: '$$=\\frac{-x^4-2x^3+3x-6}{x^3(x-2)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{1}{x+2}-\\frac{1}{x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x+2}-\\frac{1}{x}$$' },
                  { type: 'text', content: '$$=\\frac{x}{x(x+2)}-\\frac{x+2}{x(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{x-(x+2)}{x(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{x-x-2)}{x(x+2)}$$' },
                  { type: 'text', content: '$$=\\frac{-2}{x(x+2)}$$' },
                  { type: 'text', content: '$$=-\\frac{2}{x(x+2)}$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Выполните] вычитание' },
                  { type: 'text', content: '$$\\frac{1}{x^2}-\\frac{x}{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x^2}-\\frac{x}{x+1}$$' },
                  { type: 'text', content: '$$=\\frac{x+1}{x^2(x+1)}-\\frac{xx^2}{x^2(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{x+1-x^3}{x^2(x+1)}$$' },
                  { type: 'text', content: '$$=\\frac{-x^3+x+1}{x^2(x+1)}$$' }
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
                  { type: 'text', content: '$$\\frac{3}{\\sqrt{x}+7}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{\\sqrt{x}+7}$$' },
                  { type: 'text', content: '$$=\\frac{3}{\\sqrt{x}+7}\\cdot \\frac{\\sqrt{x}-7}{\\sqrt{x}-7}$$' },
                  { type: 'text', content: '$$=\\frac{3(\\sqrt{x}-7)}{x-49}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{8}{\\sqrt{x}-3}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{8}{\\sqrt{x}-3}$$' },
                  { type: 'text', content: '$$=\\frac{8}{\\sqrt{x}-3}\\cdot \\frac{\\sqrt{x}+3}{\\sqrt{x}+3}$$' },
                  { type: 'text', content: '$$=\\frac{8(\\sqrt{x}+3)}{x-9}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{1}{\\sqrt{x}+10}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{\\sqrt{x}+10}$$' },
                  { type: 'text', content: '$$=\\frac{1}{\\sqrt{x}+10}\\cdot \\frac{\\sqrt{x}-10}{\\sqrt{x}-10}$$' },
                  { type: 'text', content: '$$=\\frac{\\sqrt{x}-10}{x-100}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{x}{\\sqrt{x}-\\sqrt{4}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x}{\\sqrt{x}-\\sqrt{4}}$$' },
                  { type: 'text', content: '$$=\\frac{x}{\\sqrt{x}-\\sqrt{4}}\\cdot \\frac{\\sqrt{x}+\\sqrt{4}}{\\sqrt{x}+\\sqrt{4}}$$' },
                  { type: 'text', content: '$$=\\frac{x(\\sqrt{x}+\\sqrt{4})}{x-16}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Рационализируйте] знаменатель' },
                  { type: 'text', content: '$$\\frac{\\sqrt{x}}{\\sqrt{x}-4}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{\\sqrt{x}}{\\sqrt{x}-4}$$' },
                  { type: 'text', content: '$$=\\frac{\\sqrt{x}}{\\sqrt{x}-4}\\cdot \\frac{\\sqrt{x}+4}{\\sqrt{x}+4}$$' },
                  { type: 'text', content: '$$=\\frac{\\sqrt{x}(\\sqrt{x}+4)}{x-16}$$' }
                ]
              }
            ]
          }
        ]
      },
      5: {
        name: 'Уравнения',
        steps: [
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Что такое [уравнения]' },
              { type: 'text', content: 'Начинаем достаточно интересную тему - уравнения. Что бы понять что такое уравнение, надо понимать что такое равенство. Равенство это утверждение, что два математических выражения равны. Например:' },
              { type: 'text', content: '$$1+4=3+2$$' },
              { type: 'text', content: 'Можно легко понять, что данное равенство верно, так как и по левую, и по правую сторону знака равенства получается \\(5\\).' },
              { type: 'text', content: 'Уравнения это те же равенства, но в которых есть один или более неизвестных членов. Например:' },
              { type: 'text', content: '$$3+x=8$$' },
              { type: 'text', content: 'В данном случае неизвестным членом является переменная \\(x\\). Решить уравнение это значит найти при каких значениях неизвестных переменных, равенство становится верным. В данном случае надо найти такое число, что бы при сложении с ним тройки получалась восьмёрка. В данном случае, что бы равенство было верным, под \\(x\\) надо подставить число...' },
              { type: 'mini-question', content: { question: 'Какое число надо подставить под \\(x\\) что бы равенство было верным?', answer: '$$x=5$$' } },
              { type: 'text', content: 'И мы можем проверить это, подставив в уравнение найденное значение в уравнение...' },
              { type: 'mini-question', content: { question: 'Проверьте уравнение самостоятельно, подставив найденное значение вместо \\(x\\)', answer: '$$3+5=8$$' } },
              { type: 'margin' },
              { type: 'text', content: 'Числа которые мы находим в результате решения уравнений называют [s]корнями уравнений[/s]. Не путайте с \\(\\sqrt[n]{x}\\)' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'В предыдущих темах нам уже приходилось решать небольшие уравнения. Но более сложные уравнения не получится решить так легко, для этого придётся применять специальные методы. Об этом и будет данная тема.' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x-6=3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x=9$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$9-6=3$$' },
                  { type: 'text', content: '$$3=3$$' }
                ]
              },
              {
                type: 'task',
                multi: true,
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x-4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$2\\cdot 2-4=0$$' },
                  { type: 'text', content: '$$4-4=0$$' },
                  { type: 'text', content: '$$0=0$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Немного о [преобразовании выражений]' },
              { type: 'text', content: 'Для успешного решения уравнений, необходимо на хорошем уровне уметь как угодно преобразовывать выражения. Нужно с ними также свободно обращаться, как с собственными руками. Также надо уметь факторизировать выражения. Например, возьмём такое выражение и проделаем с ним различные действия:' },
              { type: 'text', content: '$$\\frac{3a+ab^2}{a^2-b^2}$$' },
              { type: 'text', content: 'Мы можем по свойству дистрибутивности вынести \\(a\\) за скобки:' },
              { type: 'text', content: '$$=\\frac{a(3+b^2)}{a^2-b^2}$$' },
              { type: 'text', content: 'Далее факторизируем знаменатель:' },
              { type: 'text', content: '$$=\\frac{a(3+b^2)}{(a-b)(a+b)}$$' },
              { type: 'text', content: 'Выразим в виде умножения:' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot \\frac{1}{(a-b)(a+b)}$$' },
              { type: 'text', content: 'Теперь второй множитель выразим в виде степени:' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot \\frac{1}{\\sqrt{(a-b)(a+b)}^2}$$' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot \\sqrt{(a-b)(a+b)}^{-2}$$' },
              { type: 'text', content: 'Выразим корень в виде степени:' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot (((a-b)(a+b))^{\\frac{1}{2}})^{-2}$$' },
              { type: 'text', content: 'Перемножим степени:' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot ((a-b)(a+b))^{\\frac{1}{2}\\cdot (-2)}$$' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot ((a-b)(a+b))^{-1}$$' },
              { type: 'text', content: 'Выразим отрицательную степень в виде дроби:' },
              { type: 'text', content: '$$=a(3+b^2)\\cdot \\frac{1}{(a-b)(a+b)}$$' },
              { type: 'text', content: 'Как видите, мы вернулись к тому выражению, которое уже было. То есть мы не потеряли значения выражения, мы лишь меняли его форму.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Ну и также для вас не должно быть неожиданностью, что' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot c \\neq \\frac{ac}{bc}$$' },
              { type: 'text', content: 'на самом деле' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot c = \\frac{ac}{b}$$' },
              { type: 'text', content: 'так как' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot c = \\frac{a}{b}\\cdot \\frac{c}{1}=\\frac{ac}{b}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'И также хочу отдельно отметить такое простое, но важное, свойство:' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot b=a$$' },
              { type: 'text', content: 'Его легко доказать:' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot b=\\frac{a}{b}\\cdot \\frac{b}{1}=\\frac{a\\cdot b}{b\\cdot 1}=\\frac{a}{1}$$' },
              { type: 'text', content: 'Данное свойство будет очень часто использоваться при преобразовании выражений без указания на него, так что рекомендую его записать и с удовольствием использовать что бы избавляться от знаменателя дроби.' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Частые] ошибки' },
              { type: 'text', content: 'Здесь я перечислил частые ошибки в преобразовании выражений. Под этим я не подразумеваю что знаки неравенства в выражениях ниже выставлены ошибочно. Наоборот, они выставлены правильно, и означают что выражения не равны, но многие могут их определить как равные.' },
              { type: 'text', content: '$$\\frac{1}{a}+\\frac{1}{b}\\neq \\frac{1}{a+b}$$' },
              { type: 'text', content: '$$\\frac{a+b}{a} \\neq b$$' },
              { type: 'text', content: '$$(a+b)^2 \\neq a^2+b^2$$' },
              { type: 'text', content: '$$\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$$' },
              { type: 'text', content: '$$\\sqrt{a^2+b^2} \\neq a+b$$' },
              { type: 'text', content: '$$a^2+b^2 \\neq (a+b)^2$$' },
              { type: 'text', content: 'Все перечисленные неравенства становятся равными при использовании умножения вместо сложения:' },
              { type: 'text', content: '$$\\frac{1}{a}\\cdot \\frac{1}{b} = \\frac{1}{ab}$$' },
              { type: 'text', content: '$$\\frac{ab}{a} = b$$' },
              { type: 'text', content: '$$(ab)^2 = a^2b^2$$' },
              { type: 'text', content: '$$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$$' },
              { type: 'text', content: '$$\\sqrt{a^2b^2} = ab$$' },
              { type: 'text', content: '$$a^2b^2 = (ab)^2$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Два] свойства равенств' },
              { type: 'text', content: 'При решении уравнений, огромную важность имеют два свойства равенств. Вот они:' },
              { type: 'text', content: '$$x=y \\Leftrightarrow x+a=y+a$$' },
              { type: 'text', content: '$$x=y \\Leftrightarrow xa=ya$$' },
              { type: 'text', content: 'Словами можно их описать так: применяя операции сложения, вычитания, умножения или деления к обеим частям равенства слева и справа, равенство остаётся верным. Возьмём такое равенство:' },
              { type: 'text', content: '$$4=4$$' },
              { type: 'text', content: 'Прибавим к обеим частям равенства число \\(6\\)' },
              { type: 'text', content: '$$4+6=4+6$$' },
              { type: 'text', content: '$$10=10$$' },
              { type: 'text', content: 'Как можно увидеть, равенство осталось верным. Можем теперь, например, разделить на \\(2\\)' },
              { type: 'text', content: '$$\\frac{10}{2}=\\frac{10}{2}$$' },
              { type: 'text', content: '$$5=5$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Возьмём другое равенство:' },
              { type: 'text', content: '$$9=2+7$$' },
              { type: 'text', content: 'Думаю, сомнений в его верности быть не должно. Давайте умножим обе стороны на \\(2\\)' },
              { type: 'text', content: '$$2\\cdot 9=2(2+7)$$' },
              { type: 'text', content: '$$18=4+14$$' },
              { type: 'text', content: 'И довольно легко убедиться что равенство всё ещё осталось верным:' },
              { type: 'text', content: '$$18=18$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'И напоследок, возьмём более интересный пример, в виде уравнения:' },
              { type: 'text', content: '$$\\frac{4}{a}=2a$$' },
              { type: 'text', content: 'Давайте умножим его на \\(a\\)' },
              { type: 'text', content: '$$a\\cdot \\frac{4}{a}=a\\cdot 2a$$' },
              { type: 'text', content: '$$\\frac{4a}{a}=2a^2$$' },
              { type: 'text', content: '$$4=2a^2$$' },
              { type: 'text', content: 'Как видите, путём простых преобразований, уравнение видоизменяется, но его значение на самом деле остаётся прежним. То есть мы просто меняем его форму. И если у уравнения есть какие-то решения, то у видоизменённого они остаются такие же, как и у исходного. Давайте продолжим им манипулировать, и разделим его на \\(2\\)' },
              { type: 'text', content: '$$\\frac{4}{2}=\\frac{2a^2}{2}$$' },
              { type: 'text', content: '$$2=a^2$$' },
              { type: 'text', content: 'Как видите, равенство сильно упростилось. Для простоты поменяем местами.' },
              { type: 'text', content: '$$a^2=2$$' },
              { type: 'text', content: 'И теперь мы можем легко понять чему равняется \\(a\\). Оно является такому числу, которое при возведении в квадрат даёт \\(2\\), то есть это \\(\\sqrt{2}\\):' },
              { type: 'text', content: 'Во многом решение уравнение состоит именно в таком преобразовании. Мы берём исходное уравнение, в котором не можем легко сказать какое значение надо подставить что бы оно стало верным, и упрощаем его до того, в котором уже можем это сделать.' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Линейные] уравнения' },
              { type: 'text', content: 'Давайте пойдём более последовательно, и разберёмся в самом простом для решения типе уравнений - [s]линейные уравнения[/s]. Общая форма линейного уравнения выглядит так:' },
              { type: 'text', content: '$$a_1x_1+a_2x_2+...+a_nx_n+b=0$$' },
              { type: 'text', content: 'В нём переменные \\(a\\) и \\(b\\) - это вещественные числа, а \\(x\\) - переменные' },
              { type: 'text', content: 'Но если проще будет понять на примере. Вот, например, линейное уравнение:' },
              { type: 'text', content: '$$6x+1=8$$' },
              { type: 'text', content: 'Но \\(x\\) не должен возводиться в степень. Например, это уже не линейное уравнение:' },
              { type: 'text', content: '$$6x^2+1=8$$' },
              { type: 'text', content: 'Также из \\(x\\) не должен вычитаться корень:' },
              { type: 'text', content: '$$6\\sqrt{x}+1=8$$' },
              { type: 'text', content: 'А также на \\(x\\) не должно ничего делиться:' },
              { type: 'text', content: '$$\\frac{6}{x}+1=8$$' },
              { type: 'text', content: 'И так тоже нельзя:' },
              { type: 'text', content: '$$\\frac{1}{5x-1}+1=8$$' },
              { type: 'text', content: 'Здесь мы хоть и не делим на сам \\(x\\), но то, на что мы делим, зависит от значения \\(x\\), что по сути равноценно.' },
              { type: 'text', content: 'Исходя из всего этого, можно сказать что линейные уравнения это такие уравнения в которых во всех местах неизвестная переменная лишь умножается на какое-либо число или складывается с каким либо числом или числом умноженным на саму переменную. Вычитание и деление тоже возможны, так как они являются частным случаем сложения и умножения.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Определите] тип уравнений' },
              { type: 'select-input', content: { label: '\\(10x+4=5x\\)', value: 'exp1', list: ['Линейное', 'Не линейное'] } },
              { type: 'select-input', content: { label: '\\(x^2=25\\)', value: 'exp2', list: ['Линейное', 'Не линейное'] } },
              { type: 'select-input', content: { label: '\\(12.5x-4=x\\cdot x\\)', value: 'exp3', list: ['Линейное', 'Не линейное'] } },
              { type: 'select-input', content: { label: '\\(\\frac{1}{2}x=3x-10\\)', value: 'exp4', list: ['Линейное', 'Не линейное'] } }
            ],
            data: {
              exp1: null,
              exp2: null,
              exp3: null,
              exp4: null
            },
            correctData: {
              exp1: 'Линейное',
              exp2: 'Не линейное',
              exp3: 'Не линейное',
              exp4: 'Линейное'
            }
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Решение] линейных уравнений' },
              { type: 'text', content: 'Давайте приступим к решению линейных уравнений. Начнём с самых простейших. Возьмём такое:' },
              { type: 'text', content: '$$x=8$$' },
              { type: 'text', content: 'Чему в данном уравнении должен быть равен \\(x\\) что бы равенство было верным? Это очевидно, что он должен быть равен \\(8\\)' },
              { type: 'text', content: '$$8=8$$' },
              { type: 'text', content: 'Само по себе равенство уже говорит чему равен \\(x\\), и именно к такому виду надо стремиться преобразовывая уравнения. Давайте возьмём такое уравнение:' },
              { type: 'text', content: '$$2x=4$$' },
              { type: 'text', content: 'Мы можем сказать чему равен \\(x\\) просто подумав на что надо умножить \\(2\\) что бы получить \\(4\\). Но давайте найдём это решение путём преобразования уравнения. Мы видим что слева у нас \\(2x\\), а нам бы хотелось что бы был просто \\(x\\). Соответственно так как он умножен на \\(2\\) нам надо разделить на \\(2\\):' },
              { type: 'text', content: '$$\\frac{2x}{2}=\\frac{4}{2}$$' },
              { type: 'text', content: '$$x=2$$' },
              { type: 'text', content: 'И как видите мы пришли к решению чему равен \\(x\\). Возьмём иной пример' },
              { type: 'text', content: '$$x+3=7$$' },
              { type: 'text', content: 'Мы хотим что бы слева у нас был просто \\(x\\). Но там не \\(x\\), а \\(x+3\\). То есть к нужному нам \\(x\\) прибавлена \\(3\\). Соответственно нам надо её вычесть, что бы остался один \\(x\\). Но и справой стороны конечно тоже надо вычесть \\(3\\) что бы не нарушить уравнение:' },
              { type: 'text', content: '$$x+3-3=7-3$$' },
              { type: 'text', content: '$$x=4$$' },
              { type: 'text', content: 'И вот мы пришли к решению. Можем его проверить:' },
              { type: 'text', content: '$$4+3=7$$' },
              { type: 'text', content: '$$7=7$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Возьмём следующее уравнение:' },
              { type: 'text', content: '$$4x+6=10$$' },
              { type: 'text', content: 'В данном случае давайте сначала вычтем \\(6\\)' },
              { type: 'text', content: '$$4x+6-6=10-6$$' },
              { type: 'text', content: '$$4x=4$$' },
              { type: 'text', content: 'Ну и теперь делим на \\(4\\)' },
              { type: 'text', content: '$$\\frac{4x}{4}=\\frac{4}{4}$$' },
              { type: 'text', content: '$$x=1$$' },
              { type: 'text', content: 'Решение найдено!' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Возьмём следующий пример:' },
              { type: 'text', content: '$$5x+8=2x-8$$' },
              { type: 'text', content: 'Давайте сначала вычтем \\(8\\) что бы убрать её с левой части' },
              { type: 'text', content: '$$5x+8-8=2x-8-8$$' },
              { type: 'text', content: '$$5x=2x-16$$' },
              { type: 'text', content: 'А так как мы хотим что бы слева у нас был \\(x\\) а справа численное значение, \\(2x\\) справа совсем не пишется. Давайте вычтем его:' },
              { type: 'text', content: '$$5x-2x=2x-16-2x$$' },
              { type: 'text', content: '$$5x-2x=-16$$' },
              { type: 'text', content: 'Ну и приведём подобные члены:' },
              { type: 'text', content: '$$3x=-16$$' },
              { type: 'text', content: 'Ну и далее делим на 3' },
              { type: 'text', content: '$$\\frac{3x}{3}=\\frac{-16}{3}$$' },
              { type: 'text', content: '$$x=-\\frac{16}{3}$$' },
              { type: 'text', content: 'Вот мы и получили ответ.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Рассмотрим последний пример:' },
              { type: 'text', content: '$$3(2x+1)=\\frac{1}{2}x$$' },
              { type: 'text', content: 'Развернём выражение справа по свойству дистрибутивности:' },
              { type: 'text', content: '$$6x+3=\\frac{1}{2}x$$' },
              { type: 'text', content: 'Вычтем \\(\\frac{1}{2}x\\) что бы убрать его из правой части:' },
              { type: 'text', content: '$$6x+3-\\frac{1}{2}x=\\frac{1}{2}x-\\frac{1}{2}x$$' },
              { type: 'text', content: '$$6x+3-\\frac{1}{2}x=0$$' },
              { type: 'text', content: 'Приведём подобные члены:' },
              { type: 'text', content: '$$\\frac{11}{2}x+3=0$$' },
              { type: 'text', content: 'Вычтем \\(3\\):' },
              { type: 'text', content: '$$\\frac{11}{2}x=0-3$$' },
              { type: 'text', content: '$$\\frac{11}{2}x=-3$$' },
              { type: 'text', content: 'Ну и чтобы слева убрать мешающий множитель \\(\\frac{11}{2}\\), надо на него разделить:' },
              { type: 'text', content: '$$\\frac{\\frac{11}{2}x}{\\frac{11}{2}}=\\frac{-3}{\\frac{11}{2}}$$' },
              { type: 'text', content: '$$x=-\\frac{6}{11}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Как видите, решение линейных уравнений сводится к использованию двух свойств равенств и приведения уравнения к форме \\(x=a\\), что бы слева остался один \\(x\\), а справа одно число.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x+1=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x+1=5$$' },
                  { type: 'text', content: '$$x+1-1=5-1$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x}{2}=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Вспоминаем полезное свойство \\(\\frac{a}{b}\\cdot b = a\\)' },
                  { type: 'text', content: '$$\\frac{x}{2}=5$$' },
                  { type: 'text', content: '$$\\frac{x}{2}\\cdot 2=5\\cdot 2$$' },
                  { type: 'text', content: '$$x=10$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-x+6+2x=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-x+6+2x=5$$' },
                  { type: 'text', content: '$$-x+2x+6=5$$' },
                  { type: 'text', content: '$$x+6=5$$' },
                  { type: 'text', content: '$$x+6-6=5-6$$' },
                  { type: 'text', content: '$$x=-1$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Выражение] переменной' },
              { type: 'text', content: 'То, что мы делали, когда решали линейные уравнения, называется выражением переменной. Выразить переменную значит найти её значение на основе данных предоставленных уравнением. Например:' },
              { type: 'text', content: '$$a=3bct$$' },
              { type: 'text', content: 'Из этого уравнения мы знаем как получить значение \\(a\\) если мы знаем \\(b\\), \\(c\\) и \\(t\\). То есть переменная а выражена на основе значений этих переменных. Мы знаем что её значение всегда есть произведение этих переменных умноженное на \\(3\\).' },
              { type: 'text', content: 'Но в этом уравнении заложены все зависимости переменных. Например, переменная \\(b\\) тоже зависит от значения \\(a\\), и для того что бы явно увидеть как именно она зависит, давайте решим для неё уравнение:' },
              { type: 'text', content: '$$3bct=a$$' },
              { type: 'text', content: '$$\\frac{3bct}{3ct}=\\frac{a}{3ct}$$' },
              { type: 'text', content: '$$b=\\frac{a}{3ct}$$' },
              { type: 'text', content: 'Таким образом мы теперь знаем как переменная \\(b\\) зависит от остальных переменных. Для ещё одного примера давайте возьмём существующую формулу:' },
              { type: 'text', content: '$$s=vt$$' },
              { type: 'text', content: 'По данной формуле мы можем найти пройденный телом путь \\((s)\\) за некоторое время \\((t)\\) с некоторой скоростью \\((v)\\).' },
              { type: 'text', content: 'Допусти, машина едет со скоростью \\(v=100 \\frac{км}{ч}\\) на протяжении \\(t=4\\) часов. Соответственно по формуле мы можем найти \\(s\\), то есть путь:' },
              { type: 'text', content: '$$s=100 \\cdot 4=400$$' },
              { type: 'text', content: 'Соответственно машина проедет \\(400\\) километров.' },
              { type: 'text', content: 'Я хочу ещё раз обратить внимание, что формула \\(s=vt\\) отражает не только что пройденный путь зависит от скорости и времени движения. Она отражает все зависимости каждой величины от двух остальных. Допусти мы уже знаем что \\(s=40км\\) и \\(v=60\\frac{км}{ч}\\) и подставили их в формулу:' },
              { type: 'text', content: '$$40=60t$$' },
              { type: 'text', content: 'То есть мы знаем что тело прошло \\(s=40\\)км со скоростью \\(v=60 \\frac{км}{ч}\\), но не знаем \\(t\\), то есть за сколько оно это сделало. Но из формулы видно, что \\(t\\) должно быть таким, что если его умножить на \\(60\\), то должно получиться \\(40\\). То есть \\(t\\) зависит от имеющихся величин пути и скорости. Давайте же решим это уравнение для \\(t\\):' },
              { type: 'text', content: '$$60t=40$$' },
              { type: 'text', content: '$$\\frac{60t}{60}=\\frac{40}{60}$$' },
              { type: 'text', content: '$$t=\\frac{4}{6}$$' },
              { type: 'text', content: 'В конце получился ответ \\(\\frac{4}{6}\\), выраженный в часах. А \\(\\frac{4}{6}\\) от часа это \\(40\\) минут.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Напоследок давайте возьмём такую формулу:' },
              { type: 'text', content: '$$T=2r-\\frac{4u}{g}$$' },
              { type: 'text', content: 'И попробуем, путём преобразований, выразить переменную \\(g\\). Для начала вычтем \\(2r\\):' },
              { type: 'text', content: '$$T-2r=2r-\\frac{4u}{g}-2r$$' },
              { type: 'text', content: '$$T-2r=-\\frac{4u}{g}$$' },
              { type: 'text', content: 'Теперь умножим на \\(g\\)' },
              { type: 'text', content: '$$g(T-2r)=g\\left(-\\frac{4u}{g}\\right)$$' },
              { type: 'text', content: '$$g(T-2r)=-4u$$' },
              { type: 'text', content: 'Заметьте что при умножении на \\(g\\) левая часть взята в скобки так как надо умножить на \\(g\\) всю левую часть а не отдельные члены. Теперь, что бы оставить слева \\(g\\), поделим на \\((T-2r)\\):' },
              { type: 'text', content: '$$\\frac{g(T-2r)}{T-2r}=\\frac{-4u}{T-2r}$$' },
              { type: 'text', content: '$$g=-\\frac{4u}{T-2r}$$' },
              { type: 'text', content: 'Вот так \\(g\\) был успешно выражен на основе остальных переменных. И при нужде найти его значение, зная остальные, мы сможем это сделать.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Умея так легко маипулировать выражениями, вам откроются большие возможности. А решение линейных уравнение совсем будет пустяком.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Выразите] переменную \\(l\\)' },
              { type: 'text', content: '$$2nt=\\frac{7rl}{3}$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$2nt=\\frac{7rl}{3}$$' },
              { type: 'text', content: '$$\\frac{7rl}{3}=2nt$$' },
              { type: 'text', content: '$$\\frac{7rl}{3}\\cdot 3=2nt\\cdot 3$$' },
              { type: 'text', content: '$$7rl=6nt$$' },
              { type: 'text', content: '$$\\frac{7rl}{7r}=\\frac{6nt}{7r}$$' },
              { type: 'text', content: '$$l=\\frac{6nt}{7r}$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Квадратные] уравнения' },
              { type: 'text', content: 'Теперь приступим к квадратным уравнениям. В линейных уравнениях все переменные были в первой степени которая не писалась. Квадратные уравнения это те же линейные, только в них уже есть переменные во второй степени. Например:' },
              { type: 'text', content: '$$x^2+5x=8x$$' },
              { type: 'text', content: '$$4-2x^2=6$$' },
              { type: 'text', content: 'Подходов к решению таких уравнений довольно много. Начнём с простейшего квадратного уравнения:' },
              { type: 'text', content: '$$x^2=4$$' },
              { type: 'text', content: 'Сможете ли вы сказать при каком числе вместо \\(x\\) равенство будет верным? Это конечно же будет \\(2\\), так как' },
              { type: 'text', content: '$$2^2=4$$' },
              { type: 'text', content: 'Но данный ответ ещё не является полным. В случае линейных уравнений, число которое является ответом всегда одно. В случае же квадратных уравнений их [s]всегда[/s] два. Мы нашли только один. Второй же ответ это \\(-2\\):' },
              { type: 'text', content: '$$(-2)^2=4$$' },
              { type: 'text', content: 'Таким образом есть два значения которые мы можем подставить вместо \\(x\\). Два решения:' },
              { type: 'text', content: '$$x_1=2$$' },
              { type: 'text', content: '$$x_2=-2$$' },
              { type: 'text', content: 'Возьмём другое квадратное уравнение:' },
              { type: 'text', content: '$$x^2+7=12$$' },
              { type: 'text', content: 'В данном случае мы действуем подобно тому как решали линейные уравнения. Приводим к форме в которой всё очевидно. В случае квадратных уравнений это \\(x^2=a\\). Для этого вычтем \\(7\\)' },
              { type: 'text', content: '$$x^2+7-7=12-7$$' },
              { type: 'text', content: '$$x^2=5$$' },
              { type: 'text', content: 'И теперь вопрос. Какие же числа мы можем подставить под \\(x\\). То есть что это за число такое, что при возведении во вторую степень даст \\(5\\). Из определения корня это конечно же \\(\\sqrt{5}\\). Так как' },
              { type: 'text', content: '$$(\\sqrt{5})^2=5$$' },
              { type: 'text', content: 'Корень из пяти это такое число которое при возведении в квадрат даст пять.' },
              { type: 'text', content: 'По опять же, мы нашли только одно решение - \\(\\sqrt{5}\\). Второе решение это \\(-\\sqrt{5}\\), так как' },
              { type: 'text', content: '$$(-\\sqrt{5})^2=5$$' },
              { type: 'text', content: 'Таким образом решения данного уравнения:' },
              { type: 'text', content: '$$x_1=\\sqrt{5}$$' },
              { type: 'text', content: '$$x_2=-\\sqrt{5}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Исходя из увиденного мы можем сказать что для простейшего квадратного уравнения' },
              { type: 'text', content: '$$x^2=a$$' },
              { type: 'text', content: 'Решениями являются:' },
              { type: 'text', content: '$$x_1=\\sqrt{a}$$' },
              { type: 'text', content: '$$x_2=-\\sqrt{a}$$' },
              { type: 'text', content: 'Проще это можно записать с помощью знака плюс-минус:' },
              { type: 'text', content: '$$x=\\pm\\sqrt{a}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь возьмём такое уравнение' },
              { type: 'text', content: '$$x^2-5x=-6$$' },
              { type: 'text', content: 'Это уже более сложный случай. К простейшей форме его привести не получится. В нём есть как в \\(x\\) во второй, так и в первой степени. А также есть отдельное число в правой части. Такое уравнение надо привести к вот такому удобному виду:' },
              { type: 'text', content: '$$ax^2+bx+c=0$$' },
              { type: 'text', content: 'С таким трёхчленом мы уже встречались когда изучали факторизацию. И именно знание факторизации нам сейчас очень пригодится. Но для начала давайте прибавим \\(6\\): ' },
              { type: 'text', content: '$$x^2-5x+6=-6+6$$' },
              { type: 'text', content: '$$x^2-5x+6=0$$' },
              { type: 'text', content: 'Теперь давайте факторизируем трёхчлен. В данном случае это сделать легко. Мы легко догадаемся что \\((-3)\\cdot (-2)=6\\) и \\((-3) + (-2)=-5\\). Соответственно числа \\(-3\\) и \\(-2\\) подходят, и мы их можем подставить в выражение \\((x+a)(x+b)\\):' },
              { type: 'text', content: '$$(x+(-3))(x+(-2))=0$$' },
              { type: 'text', content: '$$(x-3)(x-2)=0$$' },
              { type: 'text', content: 'А теперь самое интересное. Мы получили два простых выражения: \\((x-3)\\), \\((x-2)\\). И прекрасно то, что слева будет получаться ноль тогда, когда хотя бы в одном из них получится ноль. Например, при каком значении \\(x\\) в скобке \\((x-3)\\) получится \\(0\\)? Очевидно что это \\(3\\):' },
              { type: 'text', content: '$$3-3=0$$' },
              { type: 'text', content: 'И теперь давайте найденное число подставим в исходное уравнение:' },
              { type: 'text', content: '$$(3-3)(3-2)=0$$' },
              { type: 'text', content: '$$0\\cdot -1=0$$' },
              { type: 'text', content: '$$0=0$$' },
              { type: 'text', content: 'И как видите, равенство оказалось верным. В первом выражении в скобках получился ноль, и нам совершенно неважно что получится во второй скобке, так как получившийся ноль при умножении на значение из второй скобки всё равно всё превратит в ноль, и равенство будет верным.' },
              { type: 'text', content: 'То же самое можно сказать и о второй скобке. Что бы в ней получился ноль, надо подставить \\(2\\):' },
              { type: 'text', content: '$$2-2=0$$' },
              { type: 'text', content: 'И теперь проверим на исходном уравнении:' },
              { type: 'text', content: '$$(2-3)(2-2)=0$$' },
              { type: 'text', content: '$$(-1)0=0$$' },
              { type: 'text', content: '$$0=0$$' },
              { type: 'text', content: 'Вот и нашлись два числа: ' },
              { type: 'text', content: '$$x_1=3$$' },
              { type: 'text', content: '$$x_1=2$$' },
              { type: 'text', content: 'Для интереса мы можем также попробовать подставить их в исходное уравнение до факторизации:' },
              { type: 'text', content: '$$x^2-5x=-6$$' },
              { type: 'text', content: 'Подставим \\(2\\):' },
              { type: 'text', content: '$$2^2-5\\cdot 2=-6$$' },
              { type: 'text', content: '$$4-10=-6$$' },
              { type: 'text', content: '$$-6=-6$$' },
              { type: 'text', content: 'И как видите, равенство также оказалось верным. Можете самостоятельно проверить и для числа \\(3\\).' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'То что мы использовали можно описать свойством равенств: \\(ab=0\\) только если \\(a=0\\) или \\(b=0\\). Конечно оно распространяется и на большие выражения \\(abcd... = 0\\). Это чрезвычайно полезное свойство, из-за которого стоит держать в правой части равенство ноль. С его помощью мы можем раскладывать уравнения на несколько и решать их по отдельности, а потом собрать все их решения как решения исходного уравнения.' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Возьмём такое уравнение:' },
              { type: 'text', content: '$$x^2+8x+16=0$$' },
              { type: 'text', content: 'Оно уже находится в удобной для нас форме, и мы его можем легко факторизировать:' },
              { type: 'text', content: '$$(x+4)(x+4)=0$$' },
              { type: 'text', content: 'В данном случае выражения в скобках одинаковые. То есть если там будут получаться нули, то они будут получаться одновременно в двух. И нам надо найти при каком значении получается ноль в любой из скобок. То есть решить такое линейное уравнение:' },
              { type: 'text', content: '$$x+4=0$$' },
              { type: 'text', content: '$$x+4-4=0-4$$' },
              { type: 'text', content: '$$x=-4$$' },
              { type: 'text', content: '\\(x\\) получился равным \\(-4\\). Давайте подставим в факторизированное уравнение:' },
              { type: 'text', content: '$$(-4+4)(-4+4)=0$$' },
              { type: 'text', content: '$$0\\cdot 0=0$$' },
              { type: 'text', content: '$$0=0$$' },
              { type: 'text', content: 'Но может возникнуть вопрос. А где второй корень уравнения? Их ведь всегда должно быть два. Суть здесь в том что корней два, но они одинаковые, как и скобки.' },
              { type: 'text', content: 'Интересно то, что подобная факторизированная форма уравнения всегда указывает на решения, и их можно легко находить. Например, такое уравнение:' },
              { type: 'text', content: '$$(x-4)(x+8)=0$$' },
              { type: 'text', content: 'Мы сразу можем сказать в каких случаях выражение слева от знака равенства будет равно. Но по сути мы разбиваем это уравнение на два линейных и решаем их:' },
              { type: 'text', content: '$$x-4=0$$' },
              { type: 'text', content: '$$x-4+4=0+4$$' },
              { type: 'text', content: '$$x=4$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+8=0$$' },
              { type: 'text', content: '$$x+8-8=0-8$$' },
              { type: 'text', content: '$$x=-8$$' },
              { type: 'text', content: 'Вот и найдены два корня этого квадратного уравнения: \\(4\\) и \\(-8\\)' },
              { type: 'margin' },
              { type: 'text', content: 'Если так подумать, мы можем взять любые два числа, и составить уравнение корнями которого будут эти числа. Например, возьмём числа \\(3\\) и \\(5\\). И напишем такое факторизованное выражение в котором две скобки будут образовывать нули с этими числами:' },
              { type: 'text', content: '$$(x-3)(x-5)=0$$' },
              { type: 'text', content: 'И вот получилось уравнение с придуманными корнями. Можем его развернуть:' },
              { type: 'text', content: '$$x^2-8x+15=0$$' },
              { type: 'text', content: 'Так вы можете составлять квадратные уравнения, решение которых будете знать наперёд.' },
              { type: 'text', content: 'Давайте напоследок решим одно квадратное уравнение' },
              { type: 'text', content: '$$x^2=7+6x$$' },
              { type: 'text', content: '$$x^2-6x=7+6x-6x$$' },
              { type: 'text', content: '$$x^2-6x=7$$' },
              { type: 'text', content: '$$x^2-6x-7=7-7$$' },
              { type: 'text', content: '$$x^2-6x-7=0$$' },
              { type: 'text', content: '$$(x-7)(x+1)=0$$' },
              { type: 'text', content: 'Теперь можно разложить на два линейных уравнения и решить по отдельности:' },
              { type: 'margin' },
              { type: 'text', content: '$$x-7=0$$' },
              { type: 'text', content: '$$x-7+7=0+7$$' },
              { type: 'text', content: '$$x=7$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+1=0$$' },
              { type: 'text', content: '$$x+1-1=0-1$$' },
              { type: 'text', content: '$$x=-1$$' },
              { type: 'margin' },
              { type: 'text', content: 'Корни этих двух линейных уравнений и будут корнями изначального квадратного уравнения:' },
              { type: 'text', content: '$$x_1=7$$' },
              { type: 'text', content: '$$x_2=-1$$' },
              { type: 'margin' },
              { type: 'text', content: 'Важно держать справа от знака равенства ноль, иначе свойство равенства \\(ab=0\\) нам уже не поможет.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2=4$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{4}=2$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{4}=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+4=20$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+4=20$$' },
                  { type: 'text', content: '$$x^2+4-4=20-4$$' },
                  { type: 'text', content: '$$x^2=16$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{16}=4$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{16}=-4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$(x-2)(x-8)=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x-2)(x-8)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-2=0$$' },
                  { type: 'text', content: '$$x-2+2=0+2$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-8=0$$' },
                  { type: 'text', content: '$$x-8+8=0+8$$' },
                  { type: 'text', content: '$$x=8$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=2$$' },
                  { type: 'text', content: '$$x_2=8$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Первый подход к решению' },
                  { type: 'text', content: '$$x^2-1+1=0+1$$' },
                  { type: 'text', content: '$$x^2=1$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=-1$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Второй подход к решению' },
                  { type: 'text', content: 'Вспоминаем \\(a^2-b^2=(a-b)(a+b)\\)' },
                  { type: 'text', content: '$$x^2-1=0$$' },
                  { type: 'text', content: '$$x^2-1^2=0$$' },
                  { type: 'text', content: '$$(x-1)(x+1)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-1=0$$' },
                  { type: 'text', content: '$$x-1+1=0+1$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x+1=0$$' },
                  { type: 'text', content: '$$x+1-1=0-1$$' },
                  { type: 'text', content: '$$x=-1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-2x=24$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-2x=24$$' },
                  { type: 'text', content: '$$x^2-2x-24=24-24$$' },
                  { type: 'text', content: '$$x^2-2x-24=0$$' },
                  { type: 'text', content: '$$(x+4)(x-6)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x+4=0$$' },
                  { type: 'text', content: '$$x+4-4=0-4$$' },
                  { type: 'text', content: '$$x=-4$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-6=0$$' },
                  { type: 'text', content: '$$x-6+6=0+6$$' },
                  { type: 'text', content: '$$x=6$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=-4$$' },
                  { type: 'text', content: '$$x_2=6$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Полный] квадрат' },
              { type: 'text', content: 'В случае чисел полным квадратом называют числа которые можно получить возведя другое число в квадрат. Например, число \\(16\\) это полный квадрат так как его можно представить в виде \\(4^2\\). Полным квадратом также может быть трёхчлен. Например:' },
              { type: 'text', content: '$$x^2+8x+16$$' },
              { type: 'text', content: 'Мы можем его факторизировать. Это довольно легко сделать. \\(4\\cdot 4=16\\), \\(4+4=8\\). Соответственно два числа \\(4\\) подходят для факторизации выражения в \\((x+a)(x+b)\\):' },
              { type: 'text', content: '$$=(x+4)(x+4)$$' },
              { type: 'text', content: '$$=(x+4)^2$$' },
              { type: 'text', content: 'И как вы видите, мы представили выражение в виде квадрата, соответственно это выражение тоже является полным квадратом. Но зачем вам вся эта информация?' },
              { type: 'text', content: 'Дело всё в том что есть способ в уравнениях выражения которых не являются полным квадратом превращать в полный квадрат. Возьмём такое уравнение' },
              { type: 'text', content: '$$x^2+6x=0$$' },
              { type: 'text', content: 'Это даже не трёхчлен. Что бы сделать выражение слева от знака равенства полным квадратом. Для этого нам надо добавить число, что бы получился трёхчлен. Но конечно не любое. Вот формула нахождения этого числа для некоторого двучлена:' },
              { type: 'text', content: '$$x^2+bx+c$$' },
              { type: 'text', content: '$$c=\\left(\\frac{b}{2}\\right)^2$$' },
              { type: 'text', content: 'Судя по формуле, что бы найти нужное нам число \\(c\\), нам надо разделить коэффициент второго члена \\(6x\\) и возвести в квадрат. Давайте это сделаем:' },
              { type: 'text', content: '$$c=\\left(\\frac{6}{2}\\right)^2=3^2=9$$' },
              { type: 'text', content: 'Мы нашли необходимое число. Но мы не можем его просто подставить вот так:' },
              { type: 'text', content: '$$x^2+6x+9=0$$' },
              { type: 'text', content: 'Этим действием мы изменяем уравнение, и его корни уже будут другими. Для того что бы его не изменить, надо прибавить \\(9\\) и к левой части уравнения:' },
              { type: 'text', content: '$$x^2+6x+9=0+9$$' },
              { type: 'text', content: '$$x^2+6x+9=9$$' },
              { type: 'text', content: 'Теперь уравнение осталось равноценным исходному. Мы можем легко фактиризировать получившийся полный квадрат. \\(3\\cdot 3=9\\), \\(3+3=6\\), соответственно число \\(3\\) подходит:' },
              { type: 'text', content: '$$(x+3)^2=9$$' },
              { type: 'text', content: 'Но мы также могли воспользоваться формулой:' },
              { type: 'text', content: '$$x^2+bx+\\left(\\frac{b}{2}\\right)^2=\\left(x+\\frac{b}{2}\\right)^2$$' },
              { type: 'text', content: 'Из неё можно узнать не только что третий член трёхчлена всегда зависит от второго и равен \\(\\left(\\frac{b}{2}\\right)^2\\), но также что число \\(t\\) итоговой факторизации \\((x+t)^2\\) всегда равно \\(\\frac{b}{2}\\). Соответственно имея трёхчлен' },
              { type: 'text', content: '$$x^2+6x+9$$' },
              { type: 'text', content: 'Мы можем поделить коэффициент его второго члена, то есть \\(6\\) на \\(2\\) и подставить вместо \\(t\\) в выражение \\((x+t)^2\\):' },
              { type: 'text', content: '$$=\\left(x+\\frac{6}{2}\\right)^2=(x+3)^2$$' },
              { type: 'text', content: 'И я хочу что бы вы понимали, что \\(b\\) надо разделить именно на \\(2\\) не просто так. Это не случайная рабочая выдумка. Если мы вспомним формулу' },
              { type: 'text', content: '$$(a+b)=a^2+2ab+b^2$$' },
              { type: 'text', content: 'И на места \\(a\\) и \\(b\\) подставим \\(x\\) и \\(3\\):' },
              { type: 'text', content: '$$(x+3)=x^2+2\\cdot x\\cdot 3+3^2$$' },
              { type: 'text', content: 'И при вычислении получим:' },
              { type: 'text', content: '$$(x+3)=x^2+6x+9$$' },
              { type: 'text', content: 'Посмотрите, во втором члене получилось число \\(6\\) потому что \\(3\\) которую мы подставили в формулу умножилась на \\(2\\) которая всегда есть в формуле. То есть число всегда удваивается. И соответственно если мы хотим вернуть всё обратно, мы должны поделить его на \\(2\\), вот и весь секрет. Но давайте уже вернёмся к уравнению:' },
              { type: 'text', content: '$$(x+3)^2=9$$' },
              { type: 'text', content: 'В таком случае можно пойти по очевидности, и подумать какое число надо сложить с числом \\(3\\) что бы при возведении в квадрат получалось число \\(9\\). Но пойдём другим путём.' },
              { type: 'text', content: 'Мы должны помнить что' },
              { type: 'text', content: '$$x^2=a$$' },
              { type: 'text', content: '$$x=\\pm\\sqrt{a}$$' },
              { type: 'text', content: 'Соответственно в нашем случае \\(x\\) это \\((x+3)\\), а \\(a\\) это \\(9\\):' },
              { type: 'text', content: '$$x+3=\\pm\\sqrt{9}$$' },
              { type: 'text', content: '$$x+3=\\pm 3$$' },
              { type: 'text', content: 'Разложим уравнение на две части и решим их:' },
              { type: 'text', content: '$$x+3=3$$' },
              { type: 'text', content: '$$x+3-3=3-3$$' },
              { type: 'text', content: '$$x=0$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+3=-3$$' },
              { type: 'text', content: '$$x+3-3=-3-3$$' },
              { type: 'text', content: '$$x=-6$$' },
              { type: 'margin' },
              { type: 'text', content: 'Мы получили два значения, это и есть корни исходного уравнения:' },
              { type: 'text', content: '$$x_1=0$$' },
              { type: 'text', content: '$$x_2=-6$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Давайте решим другое уравнение этим способом:' },
              { type: 'text', content: '$$x^2+4x-10=0$$' },
              { type: 'text', content: 'Кстати подобное уравнение мы не сможем факторизировать как делали с предыдущими.' },
              { type: 'text', content: 'Для начала нам надо получить в левой части уравнения выражения формы \\(x^2+bx\\), то есть убрать \\(-10\\). Для этого прибавим \\(10\\):' },
              { type: 'text', content: '$$x^2+4x-10+10=0+10$$' },
              { type: 'text', content: '$$x^2+4x=10$$' },
              { type: 'text', content: 'Теперь надо дополнить двучлен третьим числом, что бы получить полный квадрат. Делим коэффициент второго члена на \\(2\\) - \\(\\frac{4}{2}=2\\). И возводим в квадрат - \\(2^2=4\\). Получилось число \\(4\\). Прибавляем его с обеих сторон:' },
              { type: 'text', content: '$$x^2+4x+4=10+4$$' },
              { type: 'text', content: '$$x^2+4x+4=14$$' },
              { type: 'text', content: 'Теперь факторизируем трёхчлен:' },
              { type: 'text', content: '$$(x+2)^2=14$$' },
              { type: 'text', content: 'Ну и тут просто:' },
              { type: 'text', content: '$$x+2=\\pm\\sqrt{14}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+2=\\sqrt{14}$$' },
              { type: 'text', content: '$$x+2-2=\\sqrt{14}-2$$' },
              { type: 'text', content: '$$x=\\sqrt{14}-2$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+2=-\\sqrt{14}$$' },
              { type: 'text', content: '$$x+2-2=-\\sqrt{14}-2$$' },
              { type: 'text', content: '$$x=-\\sqrt{14}-2$$' },
              { type: 'text', content: 'Получившиеся два решения таковы:' },
              { type: 'text', content: '$$x_1=\\sqrt{14}-2$$' },
              { type: 'text', content: '$$x_2=-\\sqrt{14}-2$$' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Решите] уравнение методом полного квадрата' },
              { type: 'text', content: '$$x^2+8x-5=0$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$x^2+8x-5=0$$' },
              { type: 'text', content: '$$x^2+8x-5+5=0+5$$' },
              { type: 'text', content: '$$x^2+8x=5$$' },
              { type: 'text', content: '$$x^2+8x+\\left(\\frac{8}{2}\\right)^2=5+\\left(\\frac{8}{2}\\right)^2$$' },
              { type: 'text', content: '$$x^2+8x+16=5+16$$' },
              { type: 'text', content: '$$x^2+8x+16=21$$' },
              { type: 'text', content: '$$(x+4)^2=21$$' },
              { type: 'text', content: '$$x+4=\\pm\\sqrt{21}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+4=\\sqrt{21}$$' },
              { type: 'text', content: '$$x+4-4=\\sqrt{21}-4$$' },
              { type: 'text', content: '$$x=\\sqrt{21}-4$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x+4=-\\sqrt{21}$$' },
              { type: 'text', content: '$$x+4-4=-\\sqrt{21}-4$$' },
              { type: 'text', content: '$$x=-\\sqrt{21}-4$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x_1=\\sqrt{21}-4$$' },
              { type: 'text', content: '$$x_2=-\\sqrt{21}-4$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Решение квадратных уравнений через [дискриминант]' },
              { type: 'text', content: 'Рассмотрим последний на текущий момент способ решения квадратных уравнений. Этот способ самый любимый среди школьников, так как с его помощью можно найти решению любого квадратного уравнения просто подставив числа в формулу. Но давайте изобретём этот способ самостоятельно. ' },
              { type: 'text', content: 'Суть заключается в том что мы просто выразим \\(x\\) из выражения' },
              { type: 'text', content: '$$ax^2+bx+c=0$$' },
              { type: 'text', content: 'Для начала делим на \\(a\\):' },
              { type: 'text', content: '$$\\frac{ax^2}{a}+\\frac{bx}{a}+\\frac{c}{a}=0$$' },
              { type: 'text', content: '$$x^2+\\frac{bx}{a}+\\frac{c}{a}=0$$' },
              { type: 'text', content: 'Вычитаем \\(\\frac{c}{a}\\):' },
              { type: 'text', content: '$$x^2+\\frac{bx}{a}+\\frac{c}{a}-\\frac{c}{a}=0-\\frac{c}{a}$$' },
              { type: 'text', content: '$$x^2+\\frac{bx}{a}=-\\frac{c}{a}$$' },
              { type: 'text', content: '$$x^2+\\frac{b}{a}x=-\\frac{c}{a}$$' },
              { type: 'text', content: 'Дополняем до полного квадрата. То что надо прибавить получаем делением \\(\\frac{b}{a}\\) на \\(2\\) и возведением в квадрат:' },
              { type: 'text', content: '$$x^2+\\frac{b}{a}x+\\left(\\frac{b}{2a}\\right)^2=-\\frac{c}{a}+\\left(\\frac{b}{2a}\\right)^2$$' },
              { type: 'text', content: '$$\\left(x+\\frac{b}{2a}\\right)^2=-\\frac{c}{a}+\\left(\\frac{b}{2a}\\right)^2$$' },
              { type: 'text', content: 'Складываем дроби справа от знака равенства:' },
              { type: 'text', content: '$$\\left(x+\\frac{b}{2a}\\right)^2=-\\frac{c}{a}+\\frac{b^2}{4a^2}$$' },
              { type: 'text', content: '$$\\left(x+\\frac{b}{2a}\\right)^2=-\\frac{4ac}{4a^2}+\\frac{b^2}{4a^2}$$' },
              { type: 'text', content: '$$\\left(x+\\frac{b}{2a}\\right)^2=\\frac{-4ac+b^2}{4a^2}$$' },
              { type: 'text', content: '$$\\left(x+\\frac{b}{2a}\\right)^2=\\frac{b^2-4ac}{4a^2}$$' },
              { type: 'text', content: '$$x+\\frac{b}{2a}=\\pm\\sqrt{\\frac{b^2-4ac}{4a^2}}$$' },
              { type: 'text', content: '$$x+\\frac{b}{2a}=\\pm\\frac{\\sqrt{b^2-4ac}}{\\sqrt{4a^2}}$$' },
              { type: 'text', content: '$$x+\\frac{b}{2a}=\\pm\\frac{\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: 'Вычитаем \\(\\frac{b}{2a}\\):' },
              { type: 'text', content: '$$x+\\frac{b}{2a}-\\frac{b}{2a}=\\frac{\\pm\\sqrt{b^2-4ac}}{2a}-\\frac{b}{2a}$$' },
              { type: 'text', content: '$$x=\\frac{\\pm\\sqrt{b^2-4ac}}{2a}-\\frac{b}{2a}$$' },
              { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: 'Вот мы и выразили \\(x\\). Теперь у нас есть формула в которую мы можем подставить значения \\(a\\), \\(b\\) и \\(c\\) из квадратного уравнения в стандартной форме и получить два корня уравнения. Один корень будет если вместо знака \\(\\pm\\) поставить \\(+\\), а второй если поставить \\(-\\). То есть два корня уравнения можно записать так:' },
              { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: 'Давайте для примера решим такое квадратное уравнение:' },
              { type: 'text', content: '$$4x^2+5x-1=0$$' },
              { type: 'text', content: 'Для удобства выпишем коэффициенты по порядку соотнося с буквами для подстановки в формулу:' },
              { type: 'text', content: '$$a=4$$' },
              { type: 'text', content: '$$b=5$$' },
              { type: 'text', content: '$$c=-1$$' },
              { type: 'text', content: 'И теперь подставим в формулу для \\(x_1\\):' },
              { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$x_1=\\frac{-5+\\sqrt{5^2-4\\cdot 4\\cdot (-1)}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_1=\\frac{-5+\\sqrt{25-(-16)}}{8}$$' },
              { type: 'text', content: '$$x_1=\\frac{-5+\\sqrt{41}}{8}$$' },
              { type: 'text', content: 'Первый корень уравнения получили. Больше в получившемся выражении точно вычислить нельзя, корень из \\(41\\) можно вычислить только приблизительно, так как \\(41\\) это не полный квадрат. Теперь найдём второй корень:' },
              { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$x_2=\\frac{-5-\\sqrt{5^2-4\\cdot 4\\cdot (-1)}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_2=\\frac{-5-\\sqrt{25-(-16)}}{8}$$' },
              { type: 'text', content: '$$x_2=\\frac{-5-\\sqrt{41}}{8}$$' },
              { type: 'text', content: 'Вот получились два решения для уравнения:' },
              { type: 'text', content: '$$x_1=\\frac{-5+\\sqrt{41}}{8}$$' },
              { type: 'text', content: '$$x_2=\\frac{-5-\\sqrt{41}}{8}$$' },
              { type: 'margin' },
              { type: 'text', content: 'Хочу заметить, что если число \\(b\\) в уравнении отрицательно, например \\(b=-2\\), то при подставлении в формулу на место \\(-b\\), надо подставить \\(-2\\) с инвертированным знаком, то есть \\(2\\). Ведь \\(-(-2)=2\\). Здесь многие ошибаются.' },
              { type: 'margin' },
              { type: 'text', content: 'Думаю теперь понятно почему этот способ там многим нравится. Он позволяет не думая просто подставить значения в формулу и получить корни уравнения. Но те способы которые я показал до этого не стоит забывать. Иногда они позволят быстрее решить уравнение. Ведь надо научиться думать, а не как робот подставлять значения в формулу. А иногда решить другим способом просто интереснее. Но я думаю, у многих возник вопрос, а что же такое дискриминант о котором шла речь в начале. Тут всё просто, но решите сначала одно уравнение самостоятельно.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Решите] квадратное уравнение через дискриминант' },
              { type: 'text', content: '$$5x^2-2x-8=0$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$a=5$$' },
              { type: 'text', content: '$$b=-2$$' },
              { type: 'text', content: '$$c=-8$$' },
              { type: 'text', content: '$$x_1=\\frac{-(-2)+\\sqrt{(-2)^2-4\\cdot 5\\cdot (-8)}}{2\\cdot 5}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4-(-160)}}{10}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{164}}{10}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x_2=\\frac{-(-2)-\\sqrt{(-2)^2-4\\cdot 5\\cdot (-8)}}{2\\cdot 5}$$' },
              { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{4-(-160)}}{10}$$' },
              { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{164}}{10}$$' },
              { type: 'text', content: 'Корни можно также упростить, если вынести \\(2\\) из под корня:' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4\\cdot 41}}{10}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4}\\sqrt{41}}{10}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+2\\sqrt{41}}{10}$$' },
              { type: 'text', content: '$$x_1=\\frac{2(1+\\sqrt{41})}{10}$$' },
              { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{41}}{5}$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{4\\cdot 41}}{10}$$' },
              { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{4}\\sqrt{41}}{10}$$' },
              { type: 'text', content: '$$x_2=\\frac{2-2\\sqrt{41}}{10}$$' },
              { type: 'text', content: '$$x_2=\\frac{2(1-\\sqrt{41})}{10}$$' },
              { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{41}}{5}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{41}}{5}$$' },
              { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{41}}{5}$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Уравнения ["без решения"] и что же такое [дискриминант]' },
              { type: 'text', content: 'Давйте решим такое уравнение:' },
              { type: 'text', content: '$$3x^2-2x+1=0$$' },
              { type: 'text', content: 'Найдём первый корень через формулу' },
              { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$x_1=\\frac{-(-2)+\\sqrt{(-2)^2-4\\cdot 3\\cdot 1}}{2\\cdot 3}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4-12}}{6}$$' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{-8}}{6}$$' },
              { type: 'text', content: 'Но тут возникла проблема. Как нам вычесть корень из \\(-8\\). Мы ведь не знаем никаких чисел которые бы в квадрате давали \\(-8\\). В школе говорят что уравнение не имеет решения, но это ложь. Уравнение второй степени, то есть квадратное, всегда имеет два корня. Только иногда они могут быть одинаковыми, но не быть их не может.' },
              { type: 'text', content: 'Среди вещественных чисел нет такого числа которое было бы равно \\(\\sqrt{-8}\\). Но такое число есть среди комплексных чисел, о которых будет следующая тема, и в ней вы научитесь выражать ответ на подобные уравнения. Но пока мы вполне можем написать и так:' },
              { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{-8}}{6}$$' },
              { type: 'text', content: 'Мы просто говорим что если вычислить данное выражение, то получится корень уравнения. Второй корень будет соответственно с минусом:' },
              { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{-8}}{6}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь давайте решим такое уравнение:' },
              { type: 'text', content: '$$4x^2+4x+1=0$$' },
              { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{16-4\\cdot 4\\cdot 1}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{16-16}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{0}}{8}$$' },
              { type: 'text', content: '$$x_1=\\frac{-4+0}{8}$$' },
              { type: 'text', content: '$$x_1=\\frac{-4}{8}$$' },
              { type: 'text', content: '$$x_1=-\\frac{1}{2}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{16-4\\cdot 4\\cdot 1}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{16-16}}{2\\cdot 4}$$' },
              { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{0}}{8}$$' },
              { type: 'text', content: '$$x_2=\\frac{-4-0}{8}$$' },
              { type: 'text', content: '$$x_2=\\frac{-4}{8}$$' },
              { type: 'text', content: '$$x_2=-\\frac{1}{2}$$' },
              { type: 'text', content: 'Как видите, под корнем получился ноль, и из-за этого в обоих случаях не имеет значения, прибавляем мы его или вычитаем, он ничего не меняет. А так как это единственная разница между формулами \\(x_1\\) и \\(x_2\\), то и разницы в корнях в итоге не будет. Корни будут одинаковыми.' },
              { type: 'text', content: 'Исходя их этого мы можем сказать, что если под знаком корня получился ноль, то корни будут одинаковыми, решение будет одно. Если число под корнем больше нуля, то корни будут разными. Если число под корнем меньше нуля, то корни нельзя выразить в виде вещественных чисел, и надо использовать комплексные, о которых в следующей теме.' },
              { type: 'text', content: 'Число под корнем это \\(b^2-4ac\\). И его называют [s]дискриминантом[/s]. От него зависит какими будут корни и сколько их будет. Дискриминант обозначают буквой \\(D\\). То есть можно записать так:' },
              { type: 'text', content: '\\(D<0 \\Rightarrow\\) корней будет два и они будут комплексными числами.' },
              { type: 'text', content: '\\(D=0 \\Rightarrow\\) корень будет один и он будет вещественным числом.' },
              { type: 'text', content: '\\(D>0 \\Rightarrow\\) корней будет два и они будут вещественными числами.' },
              { type: 'text', content: 'Зная что \\(D=b^2-4ac\\), мы можем легко определить сколько будет корней и какие они будут, если конкретно сами корни нас не интересуют. Например:' },
              { type: 'text', content: '$$5x^2+4x-1=0$$' },
              { type: 'text', content: '$$D=b^2-4ac=4^2-4\\cdot 5\\cdot (-1)=16-(-20)=36$$' },
              { type: 'text', content: '\\(36>0 \\Rightarrow\\) корней будет два и они будут вещественными числами.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Определите] количество корней уравнения и их вид чисел через дискриминант' },
                  { type: 'text', content: '$$5x^2+2x+1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a=5$$' },
                  { type: 'text', content: '$$b=2$$' },
                  { type: 'text', content: '$$c=1$$' },
                  { type: 'text', content: '$$D=b^2-4ac=2^2-4\\cdot 5\\cdot 1=4-20=-16$$' },
                  { type: 'text', content: 'Дискриминант меньше нуля, соответственно корней будет два и они будут в виде комплексных чисел.' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение через дискриминант' },
                  { type: 'text', content: '$$3x^2+x+2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a=3$$' },
                  { type: 'text', content: '$$b=1$$' },
                  { type: 'text', content: '$$c=2$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{1^2-4\\cdot 3\\cdot 2}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{1-24}}{6}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{-23}}{6}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{1^2-4\\cdot 3\\cdot 2}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{1-24}}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{-23}}{6}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{-23}}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{-23}}{6}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Рациональные] уравнения' },
              { type: 'text', content: 'Теперь рассмотрим рациональные уравнения. Это такие уравнения, в которых неизвестная величина находится в знаменателе. Иначе говоря, в таких уравнениях на некую переменную, значение которой надо найти, производится деление (или на выражение, значение которого зависит от этой переменной). Например:' },
              { type: 'text', content: '$$\\frac{10}{x}=2$$' },
              { type: 'text', content: 'Конечно же, здесь мы можем просто подумать, на какое число надо поделить \\(10\\) что бы получилось число \\(2\\). Это \\(5\\):' },
              { type: 'text', content: '$$\\frac{10}{5}=2$$' },
              { type: 'text', content: 'Но всё не всегда так очевидно. В основном решение таких уравнений заключается в преобразовании их в такой вид, где уже не будет деления на неизвестную переменную. Для этого очень полезным выступает такое свойство:' },
              { type: 'text', content: '$$\\frac{a}{b}\\cdot b = a$$' },
              { type: 'text', content: 'Используя его, мы можем решить уравнение так:' },
              { type: 'text', content: '$$\\frac{10}{x}=2$$' },
              { type: 'text', content: '$$\\frac{10}{x}\\cdot x=2\\cdot x$$' },
              { type: 'text', content: '$$10=2x$$' },
              { type: 'text', content: 'Как видите, уравнение стало линейным! Но тут очень важно заметить, что при умножении на обеих частей равенства на неизвестное или на выражение содержащее неизвестное, мы можем получить такое уравнение, в котором некоторые корни не будут являться корнями исходного уравнения. Такие корни будем называть побочными.' },
              { type: 'text', content: 'Проще говоря, стоит проверить получившийся корень или корни уравнения и отсеять побочные.' },
              { type: 'text', content: '$$2x=10$$' },
              { type: 'text', content: '$$\\frac{2x}{2}=\\frac{10}{2}$$' },
              { type: 'text', content: '$$x=5$$' },
              { type: 'text', content: '$$\\frac{10}{x}=2$$' },
              { type: 'text', content: '$$\\frac{10}{5}=2$$' },
              { type: 'text', content: '$$2=2$$' },
              { type: 'text', content: 'Как видите, получившийся корень является действительным корнем исходного уравнения. [s]В практической части этой темы я буду приводить проверку только в случае если побочные корни у уравнения есть.[/s]' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Теперь решим такое уравнение:' },
              { type: 'text', content: '$$\\frac{2x+5}{x}=9$$' },
              { type: 'text', content: 'Для начала, что бы избавиться от знаменателя, умножим на его значение, то есть \\(x\\):' },
              { type: 'text', content: '$$\\frac{2x+5}{x}\\cdot x=9\\cdot x$$' },
              { type: 'text', content: '$$2x+5=9x$$' },
              { type: 'text', content: 'Получилось линейное уравнение, которое очень легко решить:' },
              { type: 'text', content: '$$2x+5-9x=9x-9x$$' },
              { type: 'text', content: '$$2x-9x+5=0$$' },
              { type: 'text', content: '$$2x-9x+5-5=0-5$$' },
              { type: 'text', content: '$$2x-9x=-5$$' },
              { type: 'text', content: '$$-7x=-5$$' },
              { type: 'text', content: '$$\\frac{-7x}{-7}=\\frac{-5}{-7}$$' },
              { type: 'text', content: '$$x=\\frac{5}{7}$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Как вы можете убедиться, решение рациональных уравнений не такая сложная задача, которая в основном сводится к решению уравнений которые мы уже обсудили ранее и проверке.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x}{7}=\\frac{3}{5}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Хочу заметить, что в этом уравнении нет деления на \\(x\\). Оно является линейным.' },
                  { type: 'text', content: 'Первый подход к решению (выражение деления икса в виде умножения на дробь):' },
                  { type: 'text', content: '$$\\frac{x}{7}=\\frac{3}{5}$$' },
                  { type: 'text', content: '$$\\frac{1}{7}x=\\frac{3}{5}$$' },
                  { type: 'text', content: '$$\\frac{\\frac{1}{7}x}{\\frac{1}{7}}=\\frac{\\frac{3}{5}}{\\frac{1}{7}}$$' },
                  { type: 'text', content: '$$x=\\frac{3}{5} \\cdot \\frac{7}{1}$$' },
                  { type: 'text', content: '$$x=\\frac{21}{5}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Второй подход к решению (избавление от знаменателя):' },
                  { type: 'text', content: '$$\\frac{x}{7}=\\frac{3}{5}$$' },
                  { type: 'text', content: '$$\\frac{x}{7}\\cdot 7=\\frac{3}{5} \\cdot 7$$' },
                  { type: 'text', content: '$$x=\\frac{3}{5} \\cdot \\frac{7}{1}$$' },
                  { type: 'text', content: '$$x=\\frac{3\\cdot 7}{5\\cdot 1}$$' },
                  { type: 'text', content: '$$x=\\frac{21}{5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{6+x}{x-1}=\\frac{2}{x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6+x}{x-1}=\\frac{2}{x}$$' },
                  { type: 'text', content: '$$\\frac{6+x}{x-1}\\cdot (x-1)=\\frac{2}{x}\\cdot (x-1)$$' },
                  { type: 'text', content: '$$6+x=\\frac{2(x-1)}{x}$$' },
                  { type: 'text', content: '$$6+x=\\frac{2x-2}{x}$$' },
                  { type: 'text', content: '$$(6+x)\\cdot x=\\frac{2x-2}{x}\\cdot x$$' },
                  { type: 'text', content: '$$x(6+x)=2x-2$$' },
                  { type: 'text', content: '$$x^2+6x=2x-2$$' },
                  { type: 'text', content: '$$x^2+6x-2x+2=2x-2-2x+2$$' },
                  { type: 'text', content: '$$x^2+6x-2x+2=0$$' },
                  { type: 'text', content: '$$x^2+4x+2=0$$' },
                  { type: 'text', content: 'Получилось квадратное уравнение. Решить получится только через дискриминант' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{4^2-4\\cdot 1\\cdot 2}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{16-8}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-4+\\sqrt{8}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-4+2\\sqrt{2}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2(-2+\\sqrt{2})}{2}$$' },
                  { type: 'text', content: '$$x_1=-2+\\sqrt{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{4^2-4\\cdot 1\\cdot 2}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{16-8}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-4-\\sqrt{8}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-4-2\\sqrt{2}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2(-2-\\sqrt{2})}{2}$$' },
                  { type: 'text', content: '$$x_2=-2-\\sqrt{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=-2+\\sqrt{2}$$' },
                  { type: 'text', content: '$$x_2=-2-\\sqrt{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x-57}{x^2+1}=-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x-57}{x^2+1}=-1$$' },
                  { type: 'text', content: '$$\\frac{x-57}{x^2+1}\\cdot (x^2+1)=-1\\cdot (x^2+1)$$' },
                  { type: 'text', content: '$$x-57=-x^2-1$$' },
                  { type: 'text', content: '$$-x^2-1=x-57$$' },
                  { type: 'text', content: '$$-x^2-1+57=x-57+57$$' },
                  { type: 'text', content: '$$-x^2+56=x$$' },
                  { type: 'text', content: '$$-x^2+56-x=x-x$$' },
                  { type: 'text', content: '$$-x^2-x+56=0$$' },
                  { type: 'text', content: 'Решаем через дискриминант' },
                  { type: 'text', content: '$$a=-1$$' },
                  { type: 'text', content: '$$b=-1$$' },
                  { type: 'text', content: '$$c=56$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-(-1)+\\sqrt{(-1)^2-4\\cdot (-1)\\cdot 56}}{2\\cdot (-1)}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{1-(-224)}}{-2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{225}}{-2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+15}{-2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{16}{-2}$$' },
                  { type: 'text', content: '$$x_1=-8$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-(-1)-\\sqrt{(-1)^2-4\\cdot (-1)\\cdot 56}}{2\\cdot (-1)}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{1-(-224)}}{-2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{225}}{-2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-15}{-2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-14}{-2}$$' },
                  { type: 'text', content: '$$x_2=7$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=-8$$' },
                  { type: 'text', content: '$$x_2=7$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: '[Биквадратные] уравнения' },
              { type: 'text', content: 'Кроме квадратных уравнений, есть конечно же и уравнения других степеней. О них будем говорить подробнее когда научимся факторизировать такие выражения. А сейчас для примера возьмём частный вариант уравнения четвёртой степени, называемый биквадратным уравнением и выглядящий вот так:' },
              { type: 'text', content: '$$x^4-16x^2+16=0$$' },
              { type: 'text', content: 'Выражаем \\(x^4\\) в виде \\((x^2)^2\\)' },
              { type: 'text', content: '$$(x^2)^2-16x^2+16=0$$' },
              { type: 'text', content: 'И теперь делаем такой интересный ход:' },
              { type: 'text', content: 'y=x^2' },
              { type: 'text', content: 'Если \\(y=x^2\\), то в уравнении вместо \\(x^2\\) можно подставить \\(y\\), там как сказано, что это тоже самое' },
              { type: 'text', content: '$$y^2-16y+16=0$$' },
              { type: 'text', content: 'Теперь решаем получившееся квадратное уравнение. Не путайте что решаем для \\(y\\) а не \\(x\\)' },
              { type: 'text', content: 'a=1' },
              { type: 'text', content: 'b=-16' },
              { type: 'text', content: 'c=16' },
              { type: 'text', content: '$$y_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$y_1=\\frac{-(-16)+\\sqrt{16^2-4\\cdot 1\\cdot 16}}{2\\cdot 1}$$' },
              { type: 'text', content: '$$y_1=\\frac{16+\\sqrt{256-64}}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{16+\\sqrt{192}}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{16+8\\sqrt{3}}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{8(2+\\sqrt{3})}{2}$$' },
              { type: 'text', content: '$$y_1=4(2+\\sqrt{3})$$' },
              { type: 'margin' },
              { type: 'text', content: '$$y_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$y_2=\\frac{-(-16)-\\sqrt{16^2-4\\cdot 1\\cdot 16}}{2\\cdot 1}$$' },
              { type: 'text', content: '$$y_2=\\frac{16-\\sqrt{256-64}}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{16-\\sqrt{192}}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{16-8\\sqrt{3}}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{8(2-\\sqrt{3})}{2}$$' },
              { type: 'text', content: '$$y_2=4(2-\\sqrt{3})$$' },
              { type: 'margin' },
              { type: 'margin' },
              { type: 'text', content: 'Получились два корня:' },
              { type: 'text', content: '$$y=4(2+\\sqrt{3})$$' },
              { type: 'text', content: '$$y=4(2-\\sqrt{3})$$' },
              { type: 'text', content: 'Но теперь вспоминаем что \\(y\\) это \\(x^2\\). Подставляем вместо \\(y\\):' },
              { type: 'text', content: '$$x^2=4(2+\\sqrt{3})$$' },
              { type: 'text', content: '$$x^2=4(2-\\sqrt{3})$$' },
              { type: 'text', content: 'Получились два простейших квадратных уравнения. Вспоминаем что для таких простейших квадратных уравнений решения таковы:' },
              { type: 'text', content: '$$x^2=a$$' },
              { type: 'text', content: '$$x_1=\\sqrt{a}$$' },
              { type: 'text', content: '$$x_2=-\\sqrt{a}$$' },
              { type: 'text', content: 'Соответственно из каждого из двух получившихся уравнений получатся два корня, в сумме получится 4 корня:' },
              { type: 'text', content: '$$x^2=4(2+\\sqrt{3})$$' },
              { type: 'text', content: '$$x=\\sqrt{4(2+\\sqrt{3})}$$' },
              { type: 'text', content: '$$x=-\\sqrt{4(2+\\sqrt{3})}$$' },
              { type: 'text', content: '$$x^2=4(2-\\sqrt{3})$$' },
              { type: 'text', content: '$$x=\\sqrt{4(2-\\sqrt{3})}$$' },
              { type: 'text', content: '$$x=-\\sqrt{4(2-\\sqrt{3})}$$' },
              { type: 'text', content: 'Получилось четыре корня:' },
              { type: 'text', content: '$$x=\\sqrt{4(2+\\sqrt{3})}$$' },
              { type: 'text', content: '$$x=-\\sqrt{4(2+\\sqrt{3})}$$' },
              { type: 'text', content: '$$x=\\sqrt{4(2-\\sqrt{3})}$$' },
              { type: 'text', content: '$$x=-\\sqrt{4(2-\\sqrt{3})}$$' },
              { type: 'text', content: 'Получившиеся корня можно упростить:' },
              { type: 'text', content: '$$x_1=2\\sqrt{2+\\sqrt{3}}$$' },
              { type: 'text', content: '$$x_2=-2\\sqrt{2+\\sqrt{3}}$$' },
              { type: 'text', content: '$$x_3=2\\sqrt{2-\\sqrt{3}}$$' },
              { type: 'text', content: '$$x_4=-2\\sqrt{2-\\sqrt{3}}$$' },
              { type: 'text', content: 'Думаю многие заметили что у квадратного уравнения, то есть у уравнения второй степени всегда 2 корня, а сейчас у уравнения четвёртой степени получилось 4 корня. Это не совпадение.' },
              { type: 'text', content: 'Принцип решения который был использован иногда называют подстановкой. Мы подставили вместо \\(x^2\\) переменную \\(y\\). А затем вернули её обратно.' }
            ]
          },
          {
            type: 'task',
            content: [
              { type: 'main-title', content: '[Решите] уравнение' },
              { type: 'text', content: '$$x^4-5x^2+4=0$$' }
            ],
            correctAnswer: [
              { type: 'text', content: '$$(x^2)^2-5x^2+4=0$$' },
              { type: 'text', content: '$$y=x^2$$' },
              { type: 'text', content: '$$y^2-5y+4=0$$' },
              { type: 'text', content: '$$a=1$$' },
              { type: 'text', content: '$$b=-5$$' },
              { type: 'text', content: '$$c=4$$' },
              { type: 'text', content: '$$y_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$y_1=\\frac{-(-5)+\\sqrt{(-5)^2-4\\cdot 1\\cdot 4}}{2\\cdot 1}$$' },
              { type: 'text', content: '$$y_1=\\frac{5+\\sqrt{25-16}}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{5+\\sqrt{9}}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{5+3}{2}$$' },
              { type: 'text', content: '$$y_1=\\frac{8}{2}$$' },
              { type: 'text', content: '$$y_1=4$$' },
              { type: 'margin' },
              { type: 'text', content: '$$y_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
              { type: 'text', content: '$$y_2=\\frac{-(-5)-\\sqrt{(-5)^2-4\\cdot 1\\cdot 4}}{2\\cdot 1}$$' },
              { type: 'text', content: '$$y_2=\\frac{5-\\sqrt{25-16}}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{5-\\sqrt{9}}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{5-3}{2}$$' },
              { type: 'text', content: '$$y_2=\\frac{2}{2}$$' },
              { type: 'text', content: '$$y_2=1$$' },
              { type: 'margin' },
              { type: 'text', content: '$$y_1=4$$' },
              { type: 'text', content: '$$y_2=1$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x^2=4$$' },
              { type: 'text', content: '$$x^2=1$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x^2=4$$' },
              { type: 'text', content: '$$x=\\sqrt{4}$$' },
              { type: 'text', content: '$$x=2$$' },
              { type: 'text', content: '$$x=-\\sqrt{4}$$' },
              { type: 'text', content: '$$x=-2$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x^2=1$$' },
              { type: 'text', content: '$$x=\\sqrt{1}$$' },
              { type: 'text', content: '$$x=1$$' },
              { type: 'text', content: '$$x=-\\sqrt{1}$$' },
              { type: 'text', content: '$$x=-1$$' },
              { type: 'margin' },
              { type: 'text', content: '$$x_1=2$$' },
              { type: 'text', content: '$$x_2=-2$$' },
              { type: 'text', content: '$$x_3=1$$' },
              { type: 'text', content: '$$x_4=-1$$' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Уравнение с [корнями]' },
              { type: 'text', content: 'Теперь рассмотрим как решать уравнения в которые из неизвестной переменной или выражения с ней извлекается корень. Возьмём простейшее уравнение:' },
              { type: 'text', content: '$$\\sqrt{x}=8$$' },
              { type: 'text', content: 'В данном случае \\(x=64\\), так как \\(8\\cdot 8=64\\)' },
              { type: 'text', content: '$$\\sqrt{64}=8$$' },
              { type: 'text', content: '$$x=8$$' },
              { type: 'text', content: 'Но можно решить это уравнение и путём преобразования. Для этого вспоминаем что' },
              { type: 'text', content: '$$(\\sqrt{a})^2=a$$' },
              { type: 'text', content: 'Соответственно если возвести \\(\\sqrt{x}\\) в квадрат, то останется один \\(x\\):' },
              { type: 'text', content: '$$\\sqrt{x}=8$$' },
              { type: 'text', content: '$$(\\sqrt{x})^2=8^2$$' },
              { type: 'text', content: '$$x=8^2$$' },
              { type: 'text', content: '$$x=64$$' },
              { type: 'margin' },
              { type: 'text', content: 'Также можно решать и более сложные уравнения. Возьмём такое:' },
              { type: 'text', content: '$$\\sqrt{16x-4}-1=5$$' },
              { type: 'text', content: 'Что бы убрать корень, надо сначала его оставить одного на какой-то из сторон равенства.' },
              { type: 'text', content: '$$\\sqrt{16x-4}-1+1=5+1$$' },
              { type: 'text', content: '$$\\sqrt{16x-4}=6$$' },
              { type: 'text', content: '$$(\\sqrt{16x-4})^2=6^2$$' },
              { type: 'text', content: '$$16x-4=36$$' },
              { type: 'text', content: '$$16x-4+4=36+4$$' },
              { type: 'text', content: '$$16x=40$$' },
              { type: 'text', content: '$$\\frac{16x}{16}=\\frac{40}{16}$$' },
              { type: 'text', content: '$$x=\\frac{5}{2}$$' },
              { type: 'text', content: 'Как и в случае с рациональными уравнениями, при решении уравнений с корнями могут появиться побочные корни, соответственно вы должны проверять все корни что получаются при решении таких уравнений.' },
              { type: 'text', content: 'Побочные корни могут появиться при возведении обеих частей уравнения в квадрат. Например:' },
              { type: 'text', content: '$$4=4$$' },
              { type: 'text', content: '$$4^2=4^2$$' },
              { type: 'text', content: '$$16=16$$' },
              { type: 'text', content: 'Как видите, равенство не испортилось, но давайте теперь возьмём такое неверное равенство:' },
              { type: 'text', content: '$$-2=2$$' },
              { type: 'text', content: '$$(-2)^2=2^2$$' },
              { type: 'text', content: '$$4=4$$' },
              { type: 'text', content: 'Из-за возведения в квадрат мы потеряли информацию о минусе и \\(2\\). Равенство стало верным, хотя изначально это было не так. Так и порождаются побочные корни.' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{3x-1}=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{3x-1}=5$$' },
                  { type: 'text', content: '$$(\\sqrt{3x-1})^2=5^2$$' },
                  { type: 'text', content: '$$3x-1=25$$' },
                  { type: 'text', content: '$$3x-1+1=25+1$$' },
                  { type: 'text', content: '$$3x=26$$' },
                  { type: 'text', content: '$$\\frac{3x}{3}=\\frac{26}{3}$$' },
                  { type: 'text', content: '$$x=\\frac{26}{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{3x-7}-3=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{3x-7}-3=4$$' },
                  { type: 'text', content: '$$\\sqrt{3x-7}-3+3=4+3$$' },
                  { type: 'text', content: '$$\\sqrt{3x-7}=7$$' },
                  { type: 'text', content: '$$(\\sqrt{3x-7})^2=7^2$$' },
                  { type: 'text', content: '$$3x-7=49$$' },
                  { type: 'text', content: '$$3x=56$$' },
                  { type: 'text', content: '$$\\frac{3x}{3}=\\frac{56}{3}$$' },
                  { type: 'text', content: '$$x=\\frac{56}{3}$$' }
                ]
              }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Уравнения с [модулем]' },
              { type: 'text', content: 'Последний тип уравнений с которым стоит разобраться - это уравнения с модулем. Здесь всё достаточно просто.' },
              { type: 'text', content: '$$|x|=10$$' },
              { type: 'text', content: 'Подумайте, каким может быть \\(x\\) что бы \\(|x|=10\\). Во-первых, это, конечно же, \\(10\\):' },
              { type: 'text', content: '$$|10|=10$$' },
              { type: 'text', content: 'Но также и \\(-10\\):' },
              { type: 'text', content: '$$|-10|=10$$' },
              { type: 'text', content: 'То есть:' },
              { type: 'text', content: '$$x_1=10$$' },
              { type: 'text', content: '$$x_2=-10$$' },
              { type: 'text', content: 'Догадливый читатель заметит, что для уравнения' },
              { type: 'text', content: '$$|x|=a$$' },
              { type: 'text', content: 'Решениями являются:' },
              { type: 'text', content: '$$x=a$$' },
              { type: 'text', content: '$$x=-a$$' },
              { type: 'text', content: 'Иначе говоря, в уравнении \\(|x|=a\\), что бы в модуле получилось значение \\(a\\), на место \\(x\\) можно поставить саму переменную \\(a\\) и модуль \\(|a|=a\\). Но можно поставить и инвертированную \\(-a\\): \\(|-a|=a\\).' },
              { type: 'text', content: 'На основе этого решим такое уравнение:' },
              { type: 'text', content: '$$|2x-2|=8$$' },
              { type: 'text', content: 'Получится два уравнения:' },
              { type: 'text', content: '$$2x-2=8$$' },
              { type: 'text', content: '$$2x-2=-8$$' },
              { type: 'text', content: 'То есть мы говорим, что выражение в модуле, то есть \\(2x-2\\) должно быть либо равно \\(8\\), либо \\(-8\\). Нам неважно какой знак, так как в итоге модуль все равно превратит результат в положительный. Нам лишь надо найти значения \\(x\\) для обоих уравнений' },
              { type: 'text', content: 'Решим первое уравнение:' },
              { type: 'text', content: '$$2x-2+2=8+2$$' },
              { type: 'text', content: '$$2x=10$$' },
              { type: 'text', content: '$$\\frac{2x}{2}=\\frac{10}{2}$$' },
              { type: 'text', content: '$$x=5$$' },
              { type: 'text', content: 'Решим второе уравнение:' },
              { type: 'text', content: '$$2x-2+2=-8+2$$' },
              { type: 'text', content: '$$2x=-6$$' },
              { type: 'text', content: '$$\\frac{2x}{2}=\\frac{-6}{2}$$' },
              { type: 'text', content: '$$x=-3$$' },
              { type: 'text', content: 'Таким образом, корни уравнения таковы:' },
              { type: 'text', content: '$$x_1=5$$' },
              { type: 'text', content: '$$x_2=-3$$' },
              { type: 'text', content: 'И опять же, в случае с уравнениями с модулями мы можем столкнуться с побочными корнями, поэтому проверяйте полученные корни!' }
            ]
          },
          {
            type: 'article',
            content: [
              { type: 'main-title', content: 'Пора [практиковаться]' },
              { type: 'text', content: 'На текущий момент, основные типы уравнений разобраны. Пора переходить к обильной практике. В ней я кроме привычных вариантов уравнений которые мы решали в теоретической части данной темы, добавил некоторые нестандартные или видоизменённые варианты уравнений. В них вам может не получиться сразу ощутить как решить его привычных алгоритмом, и придётся подумать. Это очень важные задания. Если не получается сразу решить уравнение, не огорчайтесь. Рассмотрите его с другой стороны. Попробуйте как либо преобразовать. В конечно счёта одна из главных задач данного курса - научить думать. Удачи!' }
            ]
          },
          {
            type: 'task',
            multi: true,
            content: [
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Назовите] два основных свойства равенств' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x=y \\Leftrightarrow x+a=y+a$$' },
                  { type: 'text', content: '$$x=y \\Leftrightarrow xa=ya$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] линейное уравнение' },
                  { type: 'text', content: '$$6x+3=13+4x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$6x+3-4x=13+4x-4x$$' },
                  { type: 'text', content: '$$2x+3=13$$' },
                  { type: 'text', content: '$$2x+3-3=13-3$$' },
                  { type: 'text', content: '$$2x=10$$' },
                  { type: 'text', content: '$$\\frac{2x}{2}=\\frac{10}{2}$$' },
                  { type: 'text', content: '$$x=5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] квадратное уравнение всеми способами' },
                  { type: 'text', content: '$$x^2+2x-3=0$$' },
                  { type: 'text', content: 'Используйте все способы которые сможете найти. Может вы сможете придумать свой способ?' }
                ],
                correctAnswer: [
                  { type: 'sub-title', content: 'Через факторизацию' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=2$$' },
                  { type: 'text', content: '$$c=-3$$' },
                  { type: 'text', content: 'Находим два числа \\(r\\) и \\(s\\), которые будут удовлетворять таким равенствам' },
                  { type: 'text', content: '$$r\\cdot s = c = -3$$' },
                  { type: 'text', content: '$$s + r = b = 2$$' },
                  { type: 'text', content: 'Не трудно догадаться что это \\(-1\\) и \\(3\\):' },
                  { type: 'text', content: '$$-1\\cdot 3 = -3$$' },
                  { type: 'text', content: '$$-1 + 3 = 2$$' },
                  { type: 'text', content: 'Теперь подставляем их формулу факторизации:' },
                  { type: 'text', content: '$$(x+s)(x+r)=0$$' },
                  { type: 'text', content: '$$(x+3)(x+(-1))=0$$' },
                  { type: 'text', content: '$$(x+3)(x-1)=0$$' },
                  { type: 'text', content: 'Потому что факторизация уравнения будет' },
                  { type: 'text', content: '$$(x-1)(x-(-3))=0$$' },
                  { type: 'text', content: '$$(x-1)(x+3)=0$$' },
                  { type: 'text', content: 'Теперь, имея факторизацию, можно легко понять, что корни уравнения: \\(1\\) и \\(-3\\). Так как:' },
                  { type: 'text', content: '$$(1-1)(1+3)=0$$' },
                  { type: 'text', content: '$$0\\cdot 4=0$$' },
                  { type: 'text', content: '$$0=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$(-3-1)(-3+3)=0$$' },
                  { type: 'text', content: '$$-4\\cdot 0=0$$' },
                  { type: 'text', content: '$$0=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=3$$' },
                  { type: 'sub-title', content: 'Через дискриминант' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-2+\\sqrt{2^2-4\\cdot 1 \\cdot (-3)}}{2 \\cdot 1}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-2+\\sqrt{4-(-12)}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-2+\\sqrt{16}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-2+4}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2}{2}$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-2-\\sqrt{2^2-4\\cdot 1 \\cdot (-3)}}{2 \\cdot 1}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-2-\\sqrt{4-(-12)}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-2-\\sqrt{16}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-2-4}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-6}{2}$$' },
                  { type: 'text', content: '$$x_2=-3$$' },
                  { type: 'sub-title', content: 'Через дополнение до полного квадрата' },
                  { type: 'text', content: '$$x^2+2x-3=0$$' },
                  { type: 'text', content: '$$x^2+2x-3+3=0+3$$' },
                  { type: 'text', content: '$$x^2+2x=3$$' },
                  { type: 'text', content: '$$x^2+2x+\\left(\\frac{2}{2}\\right)^2=3+\\left(\\frac{2}{2}\\right)^2$$' },
                  { type: 'text', content: '$$x^2+2x+1^2=3+1^2$$' },
                  { type: 'text', content: '$$x^2+2x+1=3+1$$' },
                  { type: 'text', content: '$$x^2+2x+1=4$$' },
                  { type: 'text', content: '$$(x+1)^2=4$$' },
                  { type: 'text', content: '$$x+1=\\pm \\sqrt{4}$$' },
                  { type: 'text', content: '$$x+1=\\pm 2$$' },
                  { type: 'text', content: 'Получились два уравнения:' },
                  { type: 'text', content: '$$x+1=2$$' },
                  { type: 'text', content: '$$x+1=-2$$' },
                  { type: 'text', content: 'Решаем первое' },
                  { type: 'text', content: '$$x+1-1=2-1$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: 'Решаем второе' },
                  { type: 'text', content: '$$x+1=-2$$' },
                  { type: 'text', content: '$$x+1-1=-2-1$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'text', content: 'Итого:' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] квадратное уравнение' },
                  { type: 'text', content: '$$6x^2-7x-5=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a=6$$' },
                  { type: 'text', content: '$$b=-7$$' },
                  { type: 'text', content: '$$c=-5$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{-(-7)+\\sqrt{(-7)^2-4\\cdot a \\cdot (-5)}}{2\\cdot 6}$$' },
                  { type: 'text', content: '$$x_1=\\frac{7+\\sqrt{49-(-120)}}{12}$$' },
                  { type: 'text', content: '$$x_1=\\frac{7+\\sqrt{49+120}}{12}$$' },
                  { type: 'text', content: '$$x_1=\\frac{7+\\sqrt{169}}{12}$$' },
                  { type: 'text', content: '$$x_1=\\frac{7+13}{12}$$' },
                  { type: 'text', content: '$$x_1=\\frac{20}{12}$$' },
                  { type: 'text', content: '$$x_1=\\frac{5}{3}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-(-7)-\\sqrt{(-7)^2-4\\cdot a \\cdot (-5)}}{2\\cdot 6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{7-\\sqrt{49-(-120)}}{12}$$' },
                  { type: 'text', content: '$$x_2=\\frac{7-\\sqrt{49+120}}{12}$$' },
                  { type: 'text', content: '$$x_2=\\frac{7-\\sqrt{169}}{12}$$' },
                  { type: 'text', content: '$$x_2=\\frac{7-13}{12}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-6}{12}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{1}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{5}{3}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{1}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] рациональное уравнение' },
                  { type: 'text', content: '$$\\frac{6}{x-2}-2=1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6}{x-2}-2=1$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}-2+2=1+2$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}=3$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}\\cdot (x-2)=3(x-2)$$' },
                  { type: 'text', content: '$$6=3x-6$$' },
                  { type: 'text', content: '$$3x-6=6$$' },
                  { type: 'text', content: '$$3x-6+6=6+6$$' },
                  { type: 'text', content: '$$3x=12$$' },
                  { type: 'text', content: '$$\\frac{3x}{3}=\\frac{12}{3}$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение с корнями' },
                  { type: 'text', content: '$$\\sqrt{8x-5}=\\sqrt{4-x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{8x-5}=\\sqrt{4-x}$$' },
                  { type: 'text', content: '$$(\\sqrt{8x-5})^2=(\\sqrt{4-x})^2$$' },
                  { type: 'text', content: '$$8x-5=4-x$$' },
                  { type: 'text', content: '$$8x-5+5=4-x+5$$' },
                  { type: 'text', content: '$$8x=9-x$$' },
                  { type: 'text', content: '$$8x+x=9-x+x$$' },
                  { type: 'text', content: '$$9x=9$$' },
                  { type: 'text', content: '$$\\frac{9x}{9}=\\frac{9}{9}$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение с модулями' },
                  { type: 'text', content: '$$|x+1|=4x-2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|x+1|=4x-2$$' },
                  { type: 'text', content: 'Раскладываем на два уравнения' },
                  { type: 'text', content: '$$x+1=4x-2$$' },
                  { type: 'text', content: '$$x+1=-(4x-2)$$' },
                  { type: 'text', content: 'Решаем первое' },
                  { type: 'text', content: '$$x+1-1=4x-2-1$$' },
                  { type: 'text', content: '$$x=4x-3$$' },
                  { type: 'text', content: '$$x-4x=4x-3-4x$$' },
                  { type: 'text', content: '$$-3x=-3$$' },
                  { type: 'text', content: '$$\\frac{-3x}{-3}=\\frac{-3}{-3}$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: 'Решаем второе' },
                  { type: 'text', content: '$$x+1=-(4x-2)$$' },
                  { type: 'text', content: '$$x+1=-4x+2$$' },
                  { type: 'text', content: '$$x+1+4x=-4x+2+4x$$' },
                  { type: 'text', content: '$$5x+1=2$$' },
                  { type: 'text', content: '$$5x+1-1=2-1$$' },
                  { type: 'text', content: '$$5x=1$$' },
                  { type: 'text', content: '$$\\frac{5x}{5}=\\frac{1}{5}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{5}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Получилось два числа: \\(1\\) и \\(\\frac{1}{5}\\), но давайте их проверим:' },
                  { type: 'text', content: '$$|1+1|=4\\cdot 1-2$$' },
                  { type: 'text', content: '$$|2|=4-2$$' },
                  { type: 'text', content: '$$2=2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$|\\frac{1}{5}+1|=4\\cdot \\frac{1}{5}-2$$' },
                  { type: 'text', content: '$$|\\frac{1}{5}+\\frac{5}{5}|=\\frac{4}{5}-\\frac{10}{5}$$' },
                  { type: 'text', content: '$$|\\frac{6}{5}|=\\frac{-6}{5}$$' },
                  { type: 'text', content: '$$\\frac{6}{5}=-\\frac{6}{5}$$' },
                  { type: 'text', content: 'Как видите, число \\(1\\) подошло, а число \\(\\frac{1}{5}\\) нет. Значит у уравнения один корень:' },
                  { type: 'text', content: '$$x=1$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$6x=12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6x}{6}=\\frac{12}{6}$$' },
                  { type: 'text', content: '$$x=2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x+4=24$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x+4=24$$' },
                  { type: 'text', content: '$$2x+4-4=24-4$$' },
                  { type: 'text', content: '$$2x=20$$' },
                  { type: 'text', content: '$$\\frac{2x}{2}=\\frac{20}{2}$$' },
                  { type: 'text', content: '$$x=10$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{4x+x}{2}=8+\\frac{x}{2}$$' }
                ],
                correctAnswer: [
                  { type: 'sub-title', content: 'Первый подход' },
                  { type: 'text', content: '$$\\frac{4x+x}{2}=8+\\frac{x}{2}$$' },
                  { type: 'text', content: '$$\\frac{4x}{2}+\\frac{x}{2}=8+\\frac{x}{2}$$' },
                  { type: 'text', content: '$$\\frac{4x}{2}+\\frac{x}{2}-\\frac{x}{2}=8+\\frac{x}{2}-\\frac{x}{2}$$' },
                  { type: 'text', content: '$$\\frac{4x}{2}=8$$' },
                  { type: 'text', content: '$$2x=8$$' },
                  { type: 'text', content: '$$\\frac{2x}{x}=\\frac{8}{2}$$' },
                  { type: 'text', content: '$$x=4$$' },
                  { type: 'sub-title', content: 'Второй подход' },
                  { type: 'text', content: '$$\\left(\\frac{4x+x}{2}\\right)\\cdot 2=\\left(8+\\frac{x}{2}\\right)\\cdot 2$$' },
                  { type: 'text', content: '$$4x+x=8 \\cdot 2+\\frac{x}{2}\\cdot 2$$' },
                  { type: 'text', content: '$$4x+x=16+x$$' },
                  { type: 'text', content: '$$4x+x-x=16+x-x$$' },
                  { type: 'text', content: '$$4x=16$$' },
                  { type: 'text', content: '$$\\frac{4x}{4}=\\frac{16}{4}$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2=7$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2=7$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{7}$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{7}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{7}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+20=30$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+20=30$$' },
                  { type: 'text', content: '$$x^2+20-20=30-20$$' },
                  { type: 'text', content: '$$x^2=10$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{10}$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{10}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{10}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2-8=42$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2-8=42$$' },
                  { type: 'text', content: '$$2x^2-8+8=42+8$$' },
                  { type: 'text', content: '$$2x^2=50$$' },
                  { type: 'text', content: '$$\\frac{2x^2}{2}=\\frac{50}{2}$$' },
                  { type: 'text', content: '$$x^2=25$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{25}$$' },
                  { type: 'text', content: '$$x=\\pm 5$$' },
                  { type: 'text', content: '$$x_1=5$$' },
                  { type: 'text', content: '$$x_2=-5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-5x+4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-5x+4=0$$' },
                  { type: 'text', content: '$$-4\\cdot -1 = c = 4$$' },
                  { type: 'text', content: '$$-4 + (-1) = 5$$' },
                  { type: 'text', content: '$$(x+(-4))(x+(-1))=0$$' },
                  { type: 'text', content: '$$(x-4)(x-1)=0$$' },
                  { type: 'text', content: '$$x_1=4$$' },
                  { type: 'text', content: '$$x_2=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$14x^2+x-4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$14x^2+x-4=0$$' },
                  { type: 'text', content: '$$a=14$$' },
                  { type: 'text', content: '$$b=1$$' },
                  { type: 'text', content: '$$c=-4$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{1^2-4\\cdot 14 \\cdot (-4)}}{2\\cdot 14}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{1-(-224)}}{28}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+\\sqrt{225}}{28}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-1+15}{28}$$' },
                  { type: 'text', content: '$$x_1=\\frac{14}{28}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{1^2-4\\cdot 14 \\cdot (-4)}}{2\\cdot 14}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{1-(-224)}}{28}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-\\sqrt{225}}{28}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-1-15}{28}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-16}{28}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{4}{7}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{4}{7}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4x=39-\\frac{27}{x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x=39-\\frac{27}{x}$$' },
                  { type: 'text', content: '$$4x\\cdot x=\\left (39-\\frac{27}{x}\\right)\\cdot x$$' },
                  { type: 'text', content: '$$4x^2=39x-27$$' },
                  { type: 'text', content: '$$4x^2-39x=39x-27-39x$$' },
                  { type: 'text', content: '$$4x^2-39x=-27$$' },
                  { type: 'text', content: '$$4x^2-39x+27=-27+27$$' },
                  { type: 'text', content: '$$4x^2-39x+27=0$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{x+10}-7=-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{x+10}-7+7=-5+7$$' },
                  { type: 'text', content: '$$\\sqrt{x+10}=2$$' },
                  { type: 'text', content: '$$(\\sqrt{x+10})^2=2^2$$' },
                  { type: 'text', content: '$$x+10=4$$' },
                  { type: 'text', content: '$$x+10-10=4-10$$' },
                  { type: 'text', content: '$$x=-6$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4+3x-8=20$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4+3x-8+8=20+8$$' },
                  { type: 'text', content: '$$4+3x=28$$' },
                  { type: 'text', content: '$$4+3x-4=28-4$$' },
                  { type: 'text', content: '$$3x=24$$' },
                  { type: 'text', content: '$$\\frac{3x}{3}=\\frac{24}{3}$$' },
                  { type: 'text', content: '$$x=8$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x+4x-4=8$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x+4x-4=8$$' },
                  { type: 'text', content: '$$6x-4+4=8+4$$' },
                  { type: 'text', content: '$$6x=12$$' },
                  { type: 'text', content: '$$\\frac{6x}{6}=\\frac{12}{6}$$' },
                  { type: 'text', content: '$$x=2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$6-x+4x=9+x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$6-x+4x=9+x$$' },
                  { type: 'text', content: '$$6+3x=9+x$$' },
                  { type: 'text', content: '$$6+3x-x=9+x-x$$' },
                  { type: 'text', content: '$$6+2x=9$$' },
                  { type: 'text', content: '$$6+2x-6=9-6$$' },
                  { type: 'text', content: '$$2x=3$$' },
                  { type: 'text', content: '$$\\frac{2x}{2}=\\frac{3}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{3}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$3y+2y+4=-6$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3y+2y+4=-6$$' },
                  { type: 'text', content: '$$5y+4=-6$$' },
                  { type: 'text', content: '$$5y+4-4=-6-4$$' },
                  { type: 'text', content: '$$5y=-10$$' },
                  { type: 'text', content: '$$\\frac{5y}{5}=\\frac{-10}{5}$$' },
                  { type: 'text', content: '$$y=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4(2x-2)=16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4(2x-2)=16$$' },
                  { type: 'text', content: '$$8x-8=16$$' },
                  { type: 'text', content: '$$8x-8+8=16+8$$' },
                  { type: 'text', content: '$$8x=24$$' },
                  { type: 'text', content: '$$\\frac{8x}{8}=\\frac{24}{8}$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$8=4(2x-10)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$8=4(2x-10)$$' },
                  { type: 'text', content: '$$8=8x-40$$' },
                  { type: 'text', content: '$$8x-40=8$$' },
                  { type: 'text', content: '$$8x-40+40=8+40$$' },
                  { type: 'text', content: '$$8x=48$$' },
                  { type: 'text', content: '$$\\frac{8x}{8}=\\frac{48}{8}$$' },
                  { type: 'text', content: '$$x=6$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{7}{6}x+\\frac{4}{3}=\\frac{1}{3}-x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{7}{6}x+\\frac{4}{3}=\\frac{1}{3}-x$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x+\\frac{4}{3}-\\frac{4}{3}=\\frac{1}{3}-x-\\frac{4}{3}$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x=\\frac{1-4}{3}-x$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x=\\frac{-3}{3}-x$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x=-1-x$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x+x=-1-x+x$$' },
                  { type: 'text', content: '$$\\frac{7}{6}x+\\frac{6}{6}x=-1$$' },
                  { type: 'text', content: '$$\\frac{7+6}{6}x=-1$$' },
                  { type: 'text', content: '$$\\frac{13}{6}x=-1$$' },
                  { type: 'text', content: '$$\\frac{13}{6}x \\cdot 6=-1\\cdot 6$$' },
                  { type: 'text', content: '$$13x=-6$$' },
                  { type: 'text', content: '$$\\frac{13x}{13}=\\frac{-6}{13}$$' },
                  { type: 'text', content: '$$x=-\\frac{6}{13}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-\\frac{1}{5}x+\\frac{3}{4}=\\frac{4}{5}-x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-\\frac{1}{5}x+\\frac{3}{4}=\\frac{4}{5}-x$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x+\\frac{3}{4}-\\frac{3}{4}=\\frac{4}{5}-x-\\frac{3}{4}$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x=\\frac{4}{5}-x-\\frac{3}{4}$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x=\\frac{4\\cdot 4}{5 \\cdot 4}-x-\\frac{3 \\cdot 5}{4 \\cdot 5}$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x=\\frac{16}{20}-x-\\frac{15}{20}$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x=\\frac{16-15}{20}-x$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x=\\frac{1}{20}-x$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x+x=\\frac{1}{20}-x+x$$' },
                  { type: 'text', content: '$$-\\frac{1}{5}x+\\frac{5}{5}x=\\frac{1}{20}$$' },
                  { type: 'text', content: '$$\\frac{4}{5}x=\\frac{1}{20}$$' },
                  { type: 'text', content: '$$\\frac{4}{5}x\\cdot 5=\\frac{1}{20} \\cdot 5$$' },
                  { type: 'text', content: '$$4x=\\frac{1 \\cdot 5}{20}$$' },
                  { type: 'text', content: '$$4x=\\frac{5}{20}$$' },
                  { type: 'text', content: '$$4x=\\frac{1}{4}$$' },
                  { type: 'text', content: '$$4x \\cdot 4=\\frac{1}{4}\\cdot 4$$' },
                  { type: 'text', content: '$$16x=1$$' },
                  { type: 'text', content: '$$\\frac{16x}{16}=\\frac{1}{16}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{16}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$0.5x+4=0.2+0.3x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$0.5x+4=0.2+0.3x$$' },
                  { type: 'text', content: '$$(0.5x+4)\\cdot 10=(0.2+0.3x) \\cdot 10$$' },
                  { type: 'text', content: '$$5x+40=2+3x$$' },
                  { type: 'text', content: '$$5x+40-3x=2+3x-3x$$' },
                  { type: 'text', content: '$$2x+40=2$$' },
                  { type: 'text', content: '$$2x+40-40=2-40$$' },
                  { type: 'text', content: '$$2x=-38$$' },
                  { type: 'text', content: '$$\\frac{2x}{2}=\\frac{-38}{2}$$' },
                  { type: 'text', content: '$$x=-19$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{7}x-\\frac{x^2}{\\sqrt{x}^2}=1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{7}x-\\frac{x^2}{\\sqrt{x}^2}=1$$' },
                  { type: 'text', content: '$$\\sqrt{7}x-\\frac{x^2}{x}=1$$' },
                  { type: 'text', content: '$$\\sqrt{7}x-x=1$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$12–(2x–18)=(30+4x)+(12–6x)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$12–(2x–18)=(30+4x)+(12–6x)$$' },
                  { type: 'text', content: '$$12–2x+18=30+4x+12–6x$$' },
                  { type: 'text', content: '$$–2x+30=30+4x+12–6x$$' },
                  { type: 'text', content: '$$–2x+30-30=30+4x+12–6x-30$$' },
                  { type: 'text', content: '$$–2х=4x+12–6x$$' },
                  { type: 'text', content: '$$–2х=-2x+12$$' },
                  { type: 'text', content: '$$–2x+2x=-2x+12+2x$$' },
                  { type: 'text', content: '$$0=12$$' },
                  { type: 'text', content: 'Нет решения.' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение через факторизацию' },
                  { type: 'text', content: '$$x^2-5x+4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-5x+4=0$$' },
                  { type: 'text', content: '$$rs=c=4$$' },
                  { type: 'text', content: '$$r+s=b=-5$$' },
                  { type: 'text', content: '$$r=-4$$' },
                  { type: 'text', content: '$$s=-1$$' },
                  { type: 'text', content: '$$rs=-4 \\cdot -1 = 4$$' },
                  { type: 'text', content: '$$r+s=-4 + (-1) = -5$$' },
                  { type: 'text', content: 'Эти числа подходят, подставляем в факторизацию:' },
                  { type: 'text', content: '$$(x+s)(x+r)=0$$' },
                  { type: 'text', content: '$$(x-1)(x-4)=0$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение через факторизацию' },
                  { type: 'text', content: '$$x^2-13x+12=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-13x+12=0$$' },
                  { type: 'text', content: '$$rs=c=12$$' },
                  { type: 'text', content: '$$r+s=b=-13$$' },
                  { type: 'text', content: '$$r=-12$$' },
                  { type: 'text', content: '$$s=-1$$' },
                  { type: 'text', content: '$$rs=-12 \\cdot -1 = 12$$' },
                  { type: 'text', content: '$$r+s=-12 + (-1) = -13$$' },
                  { type: 'text', content: 'Эти числа подходят, подставляем в факторизацию:' },
                  { type: 'text', content: '$$(x+s)(x+r)=0$$' },
                  { type: 'text', content: '$$(x-1)(x-12)=0$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=12$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение через факторизацию' },
                  { type: 'text', content: '$$x^2+2x-35=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+2x-35=0$$' },
                  { type: 'text', content: '$$rs=c=-35$$' },
                  { type: 'text', content: '$$r+s=b=2$$' },
                  { type: 'text', content: '$$r=7$$' },
                  { type: 'text', content: '$$s=-5$$' },
                  { type: 'text', content: '$$rs=7 \\cdot -5 = 35$$' },
                  { type: 'text', content: '$$r+s=7 + (-5) = 2$$' },
                  { type: 'text', content: 'Эти числа подходят, подставляем в факторизацию:' },
                  { type: 'text', content: '$$(x+s)(x+r)=0$$' },
                  { type: 'text', content: '$$(x-5)(x+7)=0$$' },
                  { type: 'text', content: '$$x_1=5$$' },
                  { type: 'text', content: '$$x_2=-7$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2=17$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2=17$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{17}$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{17}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{17}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4x^2-12x+9=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^2-12x+9=0$$' },
                  { type: 'text', content: '$$a=4$$' },
                  { type: 'text', content: '$$b=-12$$' },
                  { type: 'text', content: '$$c=9$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-(-12)+\\sqrt{12^2-4\\cdot 4\\cdot 9}}{2\\cdot 4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{12+\\sqrt{144-144}}{8}$$' },
                  { type: 'text', content: '$$x_1=\\frac{12+\\sqrt{0}}{8}$$' },
                  { type: 'text', content: '$$x_1=\\frac{12+0}{8}$$' },
                  { type: 'text', content: '$$x_1=\\frac{12}{8}$$' },
                  { type: 'text', content: '$$x_1=\\frac{3}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{3}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2+3x-2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2+3x-2=0$$' },
                  { type: 'text', content: '$$a=2$$' },
                  { type: 'text', content: '$$b=3$$' },
                  { type: 'text', content: '$$c=-2$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-3+\\sqrt{3^2-4\\cdot 2\\cdot (-2)}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-3+\\sqrt{9-(-16)}}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-3+\\sqrt{25}}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-3+5}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-3-\\sqrt{3^2-4\\cdot 2\\cdot (-2)}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-3-\\sqrt{9-(-16)}}{4}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-3-\\sqrt{25}}{4}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-3-5}{4}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-8}{4}$$' },
                  { type: 'text', content: '$$x_2=-2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x_2=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$3x^2-\\frac{3}{4}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^2-\\frac{3}{4}=0$$' },
                  { type: 'text', content: '$$3x^2-\\frac{3}{4}+\\frac{3}{4}=0+\\frac{3}{4}$$' },
                  { type: 'text', content: '$$3x^2=\\frac{3}{4}$$' },
                  { type: 'text', content: '$$3x^2\\cdot 4=\\frac{3}{4}\\cdot 4$$' },
                  { type: 'text', content: '$$12x^2=3$$' },
                  { type: 'text', content: '$$\\frac{12x^2}{12}=\\frac{3}{12}$$' },
                  { type: 'text', content: '$$x^2=\\frac{1}{4}$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{\\frac{1}{4}}$$' },
                  { type: 'text', content: '$$x_1=\\frac{\\sqrt{1}}{\\sqrt{4}}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{\\sqrt{1}}{\\sqrt{4}}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{1}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{1}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-\\frac{5}{3}x+\\frac{2}{3}=0$$' }
                ],
                correctAnswer: [
                  { type: 'sub-title', content: 'Через факторизацию' },
                  { type: 'text', content: '$$x^2-\\frac{5}{3}x+\\frac{2}{3}=0$$' },
                  { type: 'text', content: '$$rs=c=\\frac{2}{3}$$' },
                  { type: 'text', content: '$$r+s=b=-\\frac{5}{3}$$' },
                  { type: 'text', content: '$$r=-1$$' },
                  { type: 'text', content: '$$s=-\\frac{2}{3}$$' },
                  { type: 'text', content: '$$rs=-1\\cdot \\left(-\\frac{2}{3}\\right)=\\frac{2}{3}=c$$' },
                  { type: 'text', content: '$$r+s=-1\\cdot + \\left(-\\frac{2}{3}\\right)=-\\frac{5}{3}=b$$' },
                  { type: 'text', content: '$$(x+r)(x+s)=0$$' },
                  { type: 'text', content: '$$(x-1)(x-\\frac{2}{3})=0$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=\\frac{2}{3}$$' },
                  { type: 'margin' },
                  { type: 'sub-title', content: 'Через дискриминант' },
                  { type: 'text', content: '$$x^2-\\frac{5}{3}x+\\frac{2}{3}=0$$' },
                  { type: 'text', content: '$$(x^2-\\frac{5}{3}x+\\frac{2}{3})\\cdot 3=0\\cdot 3$$' },
                  { type: 'text', content: '$$3x^2-5x+2=0$$' },
                  { type: 'text', content: '$$a=3$$' },
                  { type: 'text', content: '$$b=-5$$' },
                  { type: 'text', content: '$$c=2$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{5+\\sqrt{(-5)^2-4\\cdot 3\\cdot 2}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_1=\\frac{5+\\sqrt{25-24}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_1=\\frac{5+\\sqrt{1}}{6}$$' },
                  { type: 'text', content: '$$x_1=\\frac{5+1}{6}$$' },
                  { type: 'text', content: '$$x_1=\\frac{6}{6}$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{5-\\sqrt{(-5)^2-4\\cdot 3\\cdot 2}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_2=\\frac{5-\\sqrt{25-24}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_2=\\frac{5-\\sqrt{1}}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{5-1}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{4}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2}{3}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=\\frac{2}{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$0.1x^2-0.5x+0.6=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$0.1x^2-0.5x+0.6=0$$' },
                  { type: 'text', content: '$$(0.1x^2-0.5x+0.6)\\cdot 10=0\\cdot 10$$' },
                  { type: 'text', content: '$$x^2-5x+6=0$$' },
                  { type: 'text', content: '$$rs=c=6$$' },
                  { type: 'text', content: '$$r+s=b=-5$$' },
                  { type: 'text', content: '$$r=-3$$' },
                  { type: 'text', content: '$$s=-2$$' },
                  { type: 'text', content: '$$rs=(-3)\\cdot (-2) = 6 = c$$' },
                  { type: 'text', content: '$$r+s=-3+ (-2) = -5 = b$$' },
                  { type: 'text', content: '$$(x+r)(x+s)=0$$' },
                  { type: 'text', content: '$$(x-3)(x-2)=0$$' },
                  { type: 'text', content: '$$x_1=3$$' },
                  { type: 'text', content: '$$x_2=2$$' }
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
                  { type: 'main-title', content: '[Выразите] переменную [\\(r\\)]' },
                  { type: 'text', content: '$$b=\\frac{4r}{r-a^2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$b=\\frac{4r}{r-a^2}$$' },
                  { type: 'text', content: '$$b(r-a^2)=\\frac{4r}{r-a^2}(r-a^2)$$' },
                  { type: 'text', content: '$$b(r-a^2)=4r$$' },
                  { type: 'text', content: '$$br-ba^2=4r$$' },
                  { type: 'text', content: '$$br-ba^2+ba^2=4r+ba^2$$' },
                  { type: 'text', content: '$$br=4r+ba^2$$' },
                  { type: 'text', content: '$$\\frac{br}{b}=\\frac{4r+ba^2}{b}$$' },
                  { type: 'text', content: '$$r=\\frac{4r+ba^2}{b}$$' },
                  { type: 'text', content: 'Может показаться что \\(r\\) выражена, но заметьте что в выражении справа тоже есть \\(r\\). То есть \\(r\\) выражена через \\(r\\). Но это бессмысленно. Если мы захотим найти значение \\(r\\), то мы его явно знать не будем, соответственно данная формула не применима. Лучше сделать иначе:' },
                  { type: 'text', content: '$$br=4r+ba^2$$' },
                  { type: 'text', content: '$$br-4r=4r+ba^2-4r$$' },
                  { type: 'text', content: '$$br-4r=ba^2$$' },
                  { type: 'text', content: '$$r(b-4)=ba^2$$' },
                  { type: 'text', content: '$$r=\\frac{ba^2}{b-4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(z\\)]' },
                  { type: 'text', content: '$$x=\\frac{y^2-z}{x+10}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x=\\frac{y^2-z}{x+10}$$' },
                  { type: 'text', content: '$$\\frac{y^2-z}{x+10}=x$$' },
                  { type: 'text', content: '$$\\frac{y^2-z}{x+10}(x+10)=x(x+10)$$' },
                  { type: 'text', content: '$$y^2-z=x(x+10)$$' },
                  { type: 'text', content: '$$y^2-z-y^2=x(x+10)-y^2$$' },
                  { type: 'text', content: '$$-z=x(x+10)-y^2$$' },
                  { type: 'text', content: '$$-z\\cdot -1=(x(x+10)-y^2)\\cdot -1$$' },
                  { type: 'text', content: '$$z=-x(x+10)+y^2$$' },
                  { type: 'text', content: '$$z=-x^2-10x+y^2$$' },
                  { type: 'text', content: 'Важно заметить, что исходя из исходного равенства, \\(x\\) не должен быть равен \\(-10\\), иначе в знаменателе получится ноль. Это ограничение не пропадает и в получившемся выражении. Это конечно не значит что при \\(x=-10\\) оно будет неопределено. Это лишь значит что при \\(x=-10\\) в исходном выражении этот \\(z\\) не подойдёт, так как выражение все равно будет неопределено.' },
                  { type: 'text', content: '$$z=-x^2-10x+y^2$$' },
                  { type: 'text', content: '$$x\\neq -10$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(a\\)]' },
                  { type: 'text', content: '$$\\frac{ab}{c}=y-ca$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{ab}{c}=y-ca$$' },
                  { type: 'text', content: '$$\\frac{ab}{c}\\cdot c=(y-ca)\\cdot c$$' },
                  { type: 'text', content: '$$ab=yc-ac^2$$' },
                  { type: 'text', content: '$$ab+ac^2=yc-ac^2+ac^2$$' },
                  { type: 'text', content: '$$ab+ac^2=yc$$' },
                  { type: 'text', content: '$$a(b+c^2)=yc$$' },
                  { type: 'text', content: '$$\\frac{a(b+c^2)}{b+c^2}=\\frac{yc}{b+c^2}$$' },
                  { type: 'text', content: '$$a=\\frac{yc}{b+c^2}$$' },
                  { type: 'text', content: '$$c\\neq 0$$' },
                  { type: 'text', content: '$$b\\neq -c^2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(k\\)]' },
                  { type: 'text', content: '$$u^2-2g=\\frac{pk}{g}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$u^2-2g=\\frac{pk}{g}$$' },
                  { type: 'text', content: '$$\\frac{pk}{g}=u^2-2g$$' },
                  { type: 'text', content: '$$\\frac{pk}{g}\\cdot g=(u^2-2g)g$$' },
                  { type: 'text', content: '$$pk=gu^2-2g^2$$' },
                  { type: 'text', content: '$$\\frac{pk}{p}=\\frac{gu^2-2g^2}{p}$$' },
                  { type: 'text', content: '$$k=\\frac{gu^2-2g^2}{p}$$' },
                  { type: 'text', content: '$$g\\neq 0$$' },
                  { type: 'text', content: '$$p\\neq 0$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(y\\)]' },
                  { type: 'text', content: '$$\\sqrt[3]{xy}-\\sqrt{t}=l$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{xy}-\\sqrt{t}=l$$' },
                  { type: 'text', content: '$$\\sqrt[3]{xy}-\\sqrt{t}+\\sqrt{t}=l+\\sqrt{t}$$' },
                  { type: 'text', content: '$$\\sqrt[3]{xy}=l+\\sqrt{t}$$' },
                  { type: 'text', content: '$$(\\sqrt[3]{xy})^3=(l+\\sqrt{t})^3$$' },
                  { type: 'text', content: '$$xy=(l+\\sqrt{t})^3$$' },
                  { type: 'text', content: 'А теперь вспоминаем формулу для куба суммы (да, она наконец то пригодилась):' },
                  { type: 'text', content: '$$(a+b)^3=a^3+3a^2b+3ab^2+b^3$$' },
                  { type: 'text', content: '$$xy=l^3+3l^2\\sqrt{t}+3l(\\sqrt{t})^2+(\\sqrt{t})^3$$' },
                  { type: 'text', content: '$$xy=l^3+3l^2\\sqrt{t}+3lt+(\\sqrt{t})^2\\sqrt{t}$$' },
                  { type: 'text', content: '$$xy=l^3+3l^2\\sqrt{t}+3lt+t\\sqrt{t}$$' },
                  { type: 'text', content: '$$\\frac{xy}{x}=\\frac{l^3+3l^2\\sqrt{t}+3lt+t\\sqrt{t}}{x}$$' },
                  { type: 'text', content: '$$y=\\frac{l^3+3l^2\\sqrt{t}+3lt+t\\sqrt{t}}{x}$$' },
                  { type: 'text', content: 'Хотя на самом деле можно записать и так:' },
                  { type: 'text', content: '$$y=\\frac{(l+\\sqrt{t})^3}{x}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(t\\)]' },
                  { type: 'text', content: '$$\\frac{r}{t}-\\frac{y}{r}=u-y$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{r}{t}-\\frac{y}{r}=u-y$$' },
                  { type: 'text', content: '$$(\\frac{r}{t}-\\frac{y}{r})rt=(u-y)rt$$' },
                  { type: 'text', content: '$$\\frac{r^2t}{t}-\\frac{yrt}{r}=urt-yrt$$' },
                  { type: 'text', content: '$$r^2-yt=urt-yrt$$' },
                  { type: 'text', content: '$$r^2-yt-r^2=urt-yrt-r^2$$' },
                  { type: 'text', content: '$$-yt=urt-yrt-r^2$$' },
                  { type: 'text', content: '$$-yt-urt=urt-yrt-r^2-urt$$' },
                  { type: 'text', content: '$$-yt-urt=-yrt-r^2$$' },
                  { type: 'text', content: '$$-yt-urt+yrt=-yrt-r^2+yrt$$' },
                  { type: 'text', content: '$$-yt-urt+yrt=-r^2$$' },
                  { type: 'text', content: '$$t(-y-ur+yr)=-r^2$$' },
                  { type: 'text', content: '$$\\frac{t(-y-ur+yr)}{-y-ur+yr}=\\frac{-r^2}{-y-ur+yr}$$' },
                  { type: 'text', content: '$$t=\\frac{-r^2}{-y-ur+yr}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(b\\)]' },
                  { type: 'text', content: '$$\\frac{r-1}{b}+\\frac{r+5}{t}=\\frac{b-r}{t}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(\\frac{r-1}{b}+\\frac{r+5}{t})bt=(\\frac{b-r}{t})bt$$' },
                  { type: 'text', content: '$$\\frac{bt(r-1)}{b}+\\frac{bt(r+5)}{t}=\\frac{bt(b-r)}{t}$$' },
                  { type: 'text', content: '$$t(r-1)+b(r+5)=b(b-r)$$' },
                  { type: 'text', content: '$$tr-t+rb+5b=b^2-rb$$' },
                  { type: 'text', content: '$$b^2-rb=tr-t+rb+5b$$' },
                  { type: 'text', content: '$$b^2-rb-rb=tr-t+rb+5b-rb$$' },
                  { type: 'text', content: '$$b^2-2rb=tr-t+5b$$' },
                  { type: 'text', content: '$$b^2-2rb-5b=tr-t+5b-5b$$' },
                  { type: 'text', content: '$$b^2-2rb-5b=rt-t$$' },
                  { type: 'text', content: '$$b^2-2rb-5b-rt=rt-t-rt$$' },
                  { type: 'text', content: '$$b^2-2rb-5b-rt=-t$$' },
                  { type: 'text', content: '$$b^2-2rb-5b-rt+t=-t+t$$' },
                  { type: 'text', content: '$$b^2-2rb-5b-rt+t=0$$' },
                  { type: 'text', content: '$$b^2-(2r+5)b-rt+t=0$$' },
                  { type: 'text', content: 'Получилось квадратное уравнение, в котором основным неизвестным является \\(b\\). А коэффициенты таковы:' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=-2r-5$$' },
                  { type: 'text', content: '$$c=-rt+t$$' },
                  { type: 'text', content: '$$b=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$b=\\frac{-(-2r-5)\\pm\\sqrt{(-2r-5)^2-4\\cdot 1\\cdot (-rt+t)}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$b=\\frac{2r+5\\pm\\sqrt{(-2r-5)^2-4(-rt+t)}}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(E_1\\)]' },
                  { type: 'text', content: '$$v=\\frac{E_1-E_2}{h}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$v=\\frac{E_1-E_2}{h}$$' },
                  { type: 'text', content: '$$\\frac{E_1-E_2}{h}=v$$' },
                  { type: 'text', content: '$$\\frac{E_1-E_2}{h}\\cdot h=v\\cdot h$$' },
                  { type: 'text', content: '$$E_1-E_2=vh$$' },
                  { type: 'text', content: '$$E_1-E_2+E_2=vh+E_2$$' },
                  { type: 'text', content: '$$E_1=vh+E_2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(t\\)]' },
                  { type: 'text', content: '$$\\frac{htp}{gh^2}-h=g$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{htp}{gh^2}-h=g$$' },
                  { type: 'text', content: '$$\\frac{tp}{gh}-h=g$$' },
                  { type: 'text', content: '$$\\frac{tp}{gh}-h+h=g+h$$' },
                  { type: 'text', content: '$$\\frac{tp}{gh}=g+h$$' },
                  { type: 'text', content: '$$\\frac{tp}{gh}\\cdot gh=(g+h)gh$$' },
                  { type: 'text', content: '$$tp=ggh+hgh$$' },
                  { type: 'text', content: '$$tp=g^2h+gh^2$$' },
                  { type: 'text', content: '$$\\frac{tp}{p}=\\frac{g^2h+gh^2}{p}$$' },
                  { type: 'text', content: '$$t=\\frac{g^2h+gh^2}{p}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Выразите] переменную [\\(c\\)]' },
                  { type: 'text', content: 'Здесь придётся постараться. Выражение весьма сложное.' },
                  { type: 'text', content: '$$W=mc^2\\left(\\frac{1}{\\sqrt{1-\\left(\\frac{v}{c}\\right)^2}}-1\\right)$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$W=mc^2\\left(\\frac{1}{\\sqrt{1-\\left(\\frac{v}{c}\\right)^2}}-1\\right)$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2}{\\sqrt{1-\\left(\\frac{v}{c}\\right)^2}}-mc^2$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2}{\\sqrt{1-\\frac{v^2}{c^2}}}-mc^2$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2}{\\sqrt{\\frac{c^2}{c^2}-\\frac{v^2}{c^2}}}-mc^2$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2}{\\sqrt{\\frac{c^2-v^2}{c^2}}}-mc^2$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2}{\\frac{\\sqrt{c^2-v^2}}{\\sqrt{c^2}}}-mc^2$$' },
                  { type: 'text', content: '$$\\frac{a}{\\frac{b}{c}}=\\frac{a\\cdot c}{b}$$' },
                  { type: 'text', content: '$$W=\\frac{mc^2\\sqrt{c^2}}{\\sqrt{c^2-v^2}}-mc^2$$' },
                  { type: 'text', content: '$$W+mc^2=\\frac{mc^2\\sqrt{c^2}}{\\sqrt{c^2-v^2}}-mc^2+mc^2$$' },
                  { type: 'text', content: '$$W+mc^2=\\frac{mc^2\\sqrt{c^2}}{\\sqrt{c^2-v^2}}$$' },
                  { type: 'text', content: '$$(W+mc^2)^2=\\left(\\frac{mc^2\\sqrt{c^2}}{\\sqrt{c^2-v^2}}\\right)^2$$' },
                  { type: 'text', content: '$$W^2+2mc^2W+m^2c^4=\\left(\\frac{mc^2\\sqrt{c^2}}{\\sqrt{c^2-v^2}}\\right)^2$$' },
                  { type: 'text', content: '$$W^2+2mc^2W+m^2c^4=\\frac{(mc^2\\sqrt{c^2})^2}{(\\sqrt{c^2-v^2})^2}$$' },
                  { type: 'text', content: '$$W^2+2mc^2W+m^2c^4=\\frac{m^2c^4c^2}{c^2-v^2}$$' },
                  { type: 'text', content: '$$W^2+2mc^2W+m^2c^4=\\frac{m^2c^6}{c^2-v^2}$$' },
                  { type: 'text', content: '$$(W^2+2mc^2W+m^2c^4)(c^2-v^2)=\\frac{m^2c^6}{c^2-v^2}\\cdot (c^2-v^2)$$' },
                  { type: 'text', content: '$$(W^2+2mc^2W+m^2c^4)(c^2-v^2)=m^2c^6$$' },
                  { type: 'text', content: '$$W^2(c^2-v^2)+2mc^2W(c^2-v^2)+m^2c^4(c^2-v^2)=m^2c^6$$' },
                  { type: 'text', content: '$$c^2W^2-v^2W^2+2mc^4W-2mc^2v^2W+m^2c^6-m^2c^4v^2=m^2c^6$$' },
                  { type: 'text', content: '$$c^2W^2-v^2W^2+2mc^4W-2mc^2v^2W+m^2c^6-m^2c^4v^2-m^2c^6=m^2c^6-m^2c^6$$' },
                  { type: 'text', content: '$$c^2W^2-v^2W^2+2mc^4W-2mc^2v^2W-m^2c^4v^2=0$$' },
                  { type: 'text', content: '$$(-m^2v^2+2mW)c^4+(W^2-2mv^2W)c^2-v^2W^2=0$$' },
                  { type: 'text', content: 'Определим переменную \\(u=c^2\\)' },
                  { type: 'text', content: '$$(-m^2v^2+2mW)u^2+(W^2-2mv^2W)u-v^2W^2=0$$' },
                  { type: 'text', content: 'Получилось квадратное уравнение где \\(u\\) является неизвестной переменной.' },
                  { type: 'text', content: '$$a=(-m^2v^2+2mW)$$' },
                  { type: 'text', content: '$$b=(W^2-2mv^2W)$$' },
                  { type: 'text', content: '$$c=(-v^2W^2)$$' },
                  { type: 'text', content: '$$u=\\frac{-(W^2-2mv^2W)\\pm\\sqrt{(W^2-2mv^2W)^2-4(-m^2v^2+2mW)(-v^2W^2)}}{2(-m^2v^2+2mW)}$$' },
                  { type: 'text', content: '$$u=\\frac{-(W^2-2mv^2W)\\pm\\sqrt{W^4+4mv^2W^3}}{2(-m^2v^2+2mW)}$$' },
                  { type: 'text', content: '$$u=\\frac{-W^2+2mv^2W\\pm\\sqrt{W^4+4mv^2W^3}}{2(-m^2v^2+2mW)}$$' },
                  { type: 'text', content: '$$c^2=\\frac{-W^2+2mv^2W\\pm\\sqrt{W^4+4mv^2W^3}}{2(-m^2v^2+2mW)}$$' },
                  { type: 'text', content: '$$c=\\pm\\sqrt{\\frac{-W^2+2mv^2W\\pm\\sqrt{W^4+4mv^2W^3}}{2(-m^2v^2+2mW)}}$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{7x^2-x-5}{3x^2-2x-10}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{7x^2-x-5}{3x^2-2x-10}=0$$' },
                  { type: 'text', content: 'Тут нужно чётко уяснить две вещи:' },
                  { type: 'text', content: 'В левом выражении, то есть в дроби, будет получаться ноль если в числителе получился ноль, независимо от значния знаменателя: \\(\\frac{0}{a}=0\\)' },
                  { type: 'text', content: 'Но если в знаменателе получится ноль, то это будет деление на ноль, что не будет являться решением уравнения.' },
                  { type: 'text', content: 'Исходя из этого нам надо найти решения уравнения в числителе. В основном это будут решения всего уравнения. Но на всякий случай нужно решить уравнение в знаменателе что бы избежать такого корня уравнения при котором получится \\(\\frac{0}{0}\\).' },
                  { type: 'text', content: '$$7x^2-x-5=0$$' },
                  { type: 'text', content: '$$a=7$$' },
                  { type: 'text', content: '$$b=-1$$' },
                  { type: 'text', content: '$$c=-5$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{(-1)^2-4\\cdot 7 \\cdot (-5)}}{2\\cdot 7}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{1-(-140)}}{14}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{1+140)}}{14}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{141)}}{14}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{(-1)^2-4\\cdot 7 \\cdot (-5)}}{2\\cdot 7}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{1-(-140)}}{14}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{1+140}}{14}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{141}}{14}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Мы выяснили при каких значения в числителе будет \\(0\\):' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{141}}{14}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{141}}{14}$$' },
                  { type: 'text', content: 'Мы можем проверить, не получается ли нуля в знаменателе при подставлении этих значений уравнение. Либо же решить уравнение в знаменателе что бы точно сказать при каких значениях в знаменателе получится \\(0\\):' },
                  { type: 'text', content: '$$3x^2-2x-10=0$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-(-2)+\\sqrt{(-2)^2-4\\cdot 3 \\cdot (-10)}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4-(-120)}}{6}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{124}}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-(-2)-\\sqrt{(-2)^2-4\\cdot 3 \\cdot (-10)}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{4-(-120)}}{6}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{124}}{6}$$' },
                  { type: 'text', content: 'Как видите, значения \\(x\\) при которых в знаменателе образуется \\(0\\) не такие как те при которых \\(0\\) образуется в числителе, соответственно мы можем сказать что при значениях \\(x_1=\\frac{1+\\sqrt{141}}{14}\\) и \\(x_2=\\frac{1-\\sqrt{141}}{14}\\) нуля в знаменателе не получится. Поэтому данные корни подходят:' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{141}}{14}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{141}}{14}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{5x^2-2x-1}{7x-\\sqrt{x}}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{5x^2-2x-1}{7x-\\sqrt{x}}=0$$' },
                  { type: 'text', content: '$$5x^2-2x-1=0$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-(-2)+\\sqrt{(-2)^2-4\\cdot 5\\cdot (-1)}}{2\\cdot 5}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{24}}{10}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2+\\sqrt{4\\cdot 6}}{10}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2+2\\sqrt{6}}{10}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2(1+\\sqrt{6})}{10}$$' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{6}}{5}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-(-2)-\\sqrt{(-2)^2-4\\cdot 5\\cdot (-1)}}{2\\cdot 5}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{24}}{10}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2-\\sqrt{4\\cdot 6}}{10}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2-2\\sqrt{6}}{10}$$' },
                  { type: 'text', content: '$$x_2=\\frac{2(1-\\sqrt{6})}{10}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{6}}{5}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Получилось два гипотетических корня:' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{6}}{5}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{6}}{5}$$' },
                  { type: 'text', content: 'Второй корень можно сразу отбросить, по той причине что если вычислить приблизительное значение \\(\\frac{1-\\sqrt{6}}{5}\\), то получится отрицательное число. А в знаменателе есть \\(\\sqrt{x}\\), то есть данное отрицательное число будет под знаком корня, чего мы пока допустить не можем.' },
                  { type: 'text', content: 'Теперь найдём значения при которых в знаменателе образуется ноль:' },
                  { type: 'text', content: '$$7x-\\sqrt{x}=0$$' },
                  { type: 'text', content: '$$7x-\\sqrt{x}-7x=0-7x$$' },
                  { type: 'text', content: '$$-\\sqrt{x}=-7x$$' },
                  { type: 'text', content: '$$(-\\sqrt{x})^2=(-7x)^2$$' },
                  { type: 'text', content: '$$x=49x^2$$' },
                  { type: 'text', content: '$$x-49x^2=49x^2-49x^2$$' },
                  { type: 'text', content: '$$x-49x^2=0$$' },
                  { type: 'text', content: '$$x(1-49x)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$1-49x=0$$' },
                  { type: 'text', content: '$$-49x=-1$$' },
                  { type: 'text', content: '$$49x=1$$' },
                  { type: 'text', content: '$$\\frac{49x}{49}=\\frac{1}{49}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{49}$$' },
                  { type: 'text', content: 'При таких двух значениях в знаменателе получается ноль:' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x=\\frac{1}{49}$$' },
                  { type: 'text', content: 'Ни одно из них не совпадает со значением \\(\\frac{1+\\sqrt{6}}{5}\\). Соответственно, при \\(x=\\frac{1+\\sqrt{6}}{5}\\) в знаменателе нуля не будет, и как мы выяснили ранее, в числителе будет, поэтому это число является корнем уравнения:' },
                  { type: 'text', content: '$$x=\\frac{1+\\sqrt{6}}{5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{3x-7}{x+7}=\\frac{1}{2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{a}{b}=\\frac{c}{d}\\Rightarrow ad=bc$$' },
                  { type: 'text', content: '$$\\frac{3x-7}{x+7}=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$2(3x-7)=1(x+7)$$' },
                  { type: 'text', content: '$$6x-14=x+7$$' },
                  { type: 'text', content: '$$6x-14-x=x+7-x$$' },
                  { type: 'text', content: '$$5x-14=1$$' },
                  { type: 'text', content: '$$5x-14+14=7+14$$' },
                  { type: 'text', content: '$$5x=21$$' },
                  { type: 'text', content: '$$\\frac{5x}{5}=\\frac{21}{5}$$' },
                  { type: 'text', content: '$$x=\\frac{21}{5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$(x-8)^2=(x+7)^2+32$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x-8)^2=(x+7)^2+32$$' },
                  { type: 'text', content: '$$x^2-16x+64=x^2+14x+49+32$$' },
                  { type: 'text', content: '$$x^2-16x+64=x^2+14x+81$$' },
                  { type: 'text', content: '$$x^2-16x+64-14x=x^2+14x+81-14x$$' },
                  { type: 'text', content: '$$x^2-30x+64-x^2=x^2+81-x^2$$' },
                  { type: 'text', content: '$$-30x+64=81$$' },
                  { type: 'text', content: '$$-30x+64-64=81-64$$' },
                  { type: 'text', content: '$$-30x=17$$' },
                  { type: 'text', content: '$$\\frac{-30x}{-30}=\\frac{17}{-30}$$' },
                  { type: 'text', content: '$$x=-\\frac{17}{30}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4x^2-x=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^2-x=0$$' },
                  { type: 'text', content: '$$x(4x-1)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$4x-1=0$$' },
                  { type: 'text', content: '$$4x=1$$' },
                  { type: 'text', content: '$$\\frac{4x}{4}=\\frac{1}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{4}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x=\\frac{1}{4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x}}=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x}}=4$$' },
                  { type: 'text', content: '$$(\\sqrt{\\sqrt{x}})^2=4^2$$' },
                  { type: 'text', content: '$$\\sqrt{x}=16$$' },
                  { type: 'text', content: '$$(\\sqrt{x})^2=16^2$$' },
                  { type: 'text', content: '$$x=256$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2=0$$' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2+2=0+2$$' },
                  { type: 'text', content: '$$(\\sqrt{\\sqrt{x^2+4}})^2=2^2$$' },
                  { type: 'text', content: '$$\\sqrt{x^2+4}=4$$' },
                  { type: 'text', content: '$$(\\sqrt{x^2+4})^2=4^2$$' },
                  { type: 'text', content: '$$x^2+4=16$$' },
                  { type: 'text', content: '$$x^2+4-4=16-4$$' },
                  { type: 'text', content: '$$x^2=12$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{12}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt[3]{3x-1}=2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{3x-1}=2$$' },
                  { type: 'text', content: '$$(\\sqrt[3]{3x-1})^3=2^3$$' },
                  { type: 'text', content: '$$3x-1=8$$' },
                  { type: 'text', content: '$$3x-1+1=8+1$$' },
                  { type: 'text', content: '$$3x=9$$' },
                  { type: 'text', content: '$$\\frac{3x}{3}=\\frac{9}{3}$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt[3]{x}-1=3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt[3]{x}-1=3$$' },
                  { type: 'text', content: '$$\\sqrt[3]{x}-1+1=3+1$$' },
                  { type: 'text', content: '$$\\sqrt[3]{x}=4$$' },
                  { type: 'text', content: '$$(\\sqrt[3]{x})^3=4^3$$' },
                  { type: 'text', content: '$$x=64$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2^x=2^6$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2^x=2^6$$' },
                  { type: 'text', content: '$$x=6$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^4-x^2-4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^4-x^2-4=0$$' },
                  { type: 'text', content: '$$t=x^2$$' },
                  { type: 'text', content: '$$t^2-t-4=0$$' },
                  { type: 'text', content: '$$t=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$t=\\frac{-(-1)+\\sqrt{(-1)^2-4\\cdot 1\\cdot (-4)}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$t=\\frac{1+\\sqrt{1-(-16)}}{2}$$' },
                  { type: 'text', content: '$$t=\\frac{1+\\sqrt{17}}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$t=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$t=\\frac{-(-1)-\\sqrt{(-1)^2-4\\cdot 1\\cdot (-4)}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$t=\\frac{1-\\sqrt{1-(-16)}}{2}$$' },
                  { type: 'text', content: '$$t=\\frac{1-\\sqrt{17}}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2=t$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{t}$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{\\frac{1+\\sqrt{17}}{2}}$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{\\frac{1-\\sqrt{17}}{2}}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\sqrt{\\frac{1+\\sqrt{17}}{2}}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{\\frac{1+\\sqrt{17}}{2}}$$' },
                  { type: 'text', content: '$$x_3=\\sqrt{\\frac{1-\\sqrt{17}}{2}}$$' },
                  { type: 'text', content: '$$x_4=-\\sqrt{\\frac{1-\\sqrt{17}}{2}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4x^4-7x^2+1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4x^4-7x^2+1=0$$' },
                  { type: 'text', content: '$$t=x^2$$' },
                  { type: 'text', content: '$$4t^2-7t+1=0$$' },
                  { type: 'text', content: '$$t=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$t=\\frac{-(-7)+\\sqrt{(-7)^2-4\\cdot 4\\cdot 1}}{2\\cdot 4}$$' },
                  { type: 'text', content: '$$t=\\frac{7+\\sqrt{49-16}}{8}$$' },
                  { type: 'text', content: '$$t=\\frac{7+\\sqrt{33}}{8}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$t=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$t=\\frac{-(-7)-\\sqrt{(-7)^2-4\\cdot 4\\cdot 1}}{2\\cdot 4}$$' },
                  { type: 'text', content: '$$t=\\frac{7-\\sqrt{49-16}}{8}$$' },
                  { type: 'text', content: '$$t=\\frac{7-\\sqrt{33}}{8}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2=t$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{t}$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{\\frac{7+\\sqrt{33}}{8}}$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{\\frac{7-\\sqrt{33}}{8}}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\sqrt{\\frac{7+\\sqrt{33}}{8}}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{\\frac{7+\\sqrt{33}}{8}}$$' },
                  { type: 'text', content: '$$x_3=\\sqrt{\\frac{7-\\sqrt{33}}{8}}$$' },
                  { type: 'text', content: '$$x_4=-\\sqrt{\\frac{7-\\sqrt{33}}{8}}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{3}{x^2}-1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{3}{x^2}-1=0$$' },
                  { type: 'text', content: '$$\\left(\\frac{3}{x^2}-1\\right)\\cdot x^2=0\\cdot x^2$$' },
                  { type: 'text', content: '$$\\frac{3}{x^2}\\cdot x^2-1\\cdot x^2=0\\cdot x^2$$' },
                  { type: 'text', content: '$$3-x^2=0$$' },
                  { type: 'text', content: '$$3-x^2-3=0-3$$' },
                  { type: 'text', content: '$$-x^2=-3$$' },
                  { type: 'text', content: '$$-x^2\\cdot -1=-3\\cdot -1$$' },
                  { type: 'text', content: '$$x^2=3$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{3}$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{3}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{x-\\sqrt{x}}-10=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{x-\\sqrt{x}}-10=0$$' },
                  { type: 'text', content: '$$\\sqrt{x-\\sqrt{x}}-10+10=0+10$$' },
                  { type: 'text', content: '$$\\sqrt{x-\\sqrt{x}}=10$$' },
                  { type: 'text', content: '$$(\\sqrt{x-\\sqrt{x}})^2=10^2$$' },
                  { type: 'text', content: '$$x-\\sqrt{x}=100$$' },
                  { type: 'text', content: '$$x-\\sqrt{x}-x=100-x$$' },
                  { type: 'text', content: '$$-\\sqrt{x}=100-x$$' },
                  { type: 'text', content: '$$(-\\sqrt{x})^2=(100-x)^2$$' },
                  { type: 'text', content: '$$x=(100-x)^2$$' },
                  { type: 'text', content: '$$x=10000-2\\cdot 100\\cdot x + x^2$$' },
                  { type: 'text', content: '$$x=10000-200x + x^2$$' },
                  { type: 'text', content: '$$10000-200x + x^2=x$$' },
                  { type: 'text', content: '$$10000-200x + x^2-x=x-x$$' },
                  { type: 'text', content: '$$10000-201x + x^2=0$$' },
                  { type: 'text', content: '$$x^2-201x+10000=0$$' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=-201$$' },
                  { type: 'text', content: '$$c=10000$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-(-201)+\\sqrt{(-201)^2-4\\cdot 1\\cdot 10000}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x_1=\\frac{201+\\sqrt{40401-40000}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{201+\\sqrt{401}}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_2=\\frac{-b-\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-(-201)-\\sqrt{(-201)^2-4\\cdot 1\\cdot 10000}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x_2=\\frac{201-\\sqrt{40401-40000}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{201-\\sqrt{401}}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Значение \\(x_2\\) при вычислении приблизительного значения получается отрицательным, а исходном уравнении есть \\(\\sqrt{x}\\), соответственно такое число мы за корнеь уравнения приянть не можем. А вот \\(x_1\\) вполне можем.' },
                  { type: 'text', content: '$$x=\\frac{201+\\sqrt{401}}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^{-2}-1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^{-2}-1=0$$' },
                  { type: 'text', content: '$$(\\frac{1}{x^{2}}-1)\\cdot x^2=0\\cdot x^2$$' },
                  { type: 'text', content: '$$\\frac{1}{x^{2}}\\cdot x^2-1\\cdot x^2=0$$' },
                  { type: 'text', content: '$$1-x^2+x^2=0+x^2$$' },
                  { type: 'text', content: '$$1=x^2$$' },
                  { type: 'text', content: '$$x^2=1$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{1}$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1}{x}-\\frac{1}{x-1}-\\frac{1}{x-2}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x}-\\frac{1}{x-1}-\\frac{1}{x-2}=0$$' },
                  { type: 'text', content: '$$\\left(\\frac{1}{x}-\\frac{1}{x-1}-\\frac{1}{x-2}\\right)\\cdot x(x-1)(x-2)=0\\cdot x(x-1)(x-2)$$' },
                  { type: 'text', content: '$$\\frac{1}{x}\\cdot x(x-1)(x-2)-\\frac{1}{x-1}\\cdot x(x-1)(x-2)-\\frac{1}{x-2}\\cdot x(x-1)(x-2)=0\\cdot x(x-1)(x-2)$$' },
                  { type: 'text', content: '$$\\frac{x(x-1)(x-2)}{x}-\\frac{x(x-1)(x-2)}{x-1}-\\frac{x(x-1)(x-2)}{x-2}=0$$' },
                  { type: 'text', content: '$$(x-1)(x-2)-x(x-2)-x(x-1)=0$$' },
                  { type: 'text', content: '$$x^2-3x+2-x(x-2)-x(x-1)=0$$' },
                  { type: 'text', content: '$$x^2-3x+2-x^2+2x-x(x-1)=0$$' },
                  { type: 'text', content: '$$x^2-3x+2-x^2+2x-x^2+x=0$$' },
                  { type: 'text', content: '$$x^2-x^2-x^2-3x+2x+x+2=0$$' },
                  { type: 'text', content: '$$-x^2+2=0$$' },
                  { type: 'text', content: '$$-x^2+2-2=0-2$$' },
                  { type: 'text', content: '$$-x^2=-2$$' },
                  { type: 'text', content: '$$x^2=2$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{2}$$' },
                  { type: 'text', content: '$$x_1=\\sqrt{2}$$' },
                  { type: 'text', content: '$$x_2=-\\sqrt{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{9x-5}{2x-1}=\\frac{7x-5}{4x+2}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{9x-5}{2x-1}=\\frac{7x-5}{4x+2}$$' },
                  { type: 'text', content: '$$\\frac{a}{b}=\\frac{c}{d} \\Rightarrow ad=bc$$' },
                  { type: 'text', content: '$$(9x-5)(4x+2)=(2x-1)(7x-5)$$' },
                  { type: 'text', content: '$$36x^2-2x-10=14x^2-17x+5$$' },
                  { type: 'text', content: '$$36x^2-2x-10-14x^2+17x-5=14x^2-17x+5-14x^2+17x-5$$' },
                  { type: 'text', content: '$$36x^2-2x-10-14x^2+17x-5=0$$' },
                  { type: 'text', content: '$$22x^2+15x-15=0$$' },
                  { type: 'text', content: '$$a=22$$' },
                  { type: 'text', content: '$$b=15$$' },
                  { type: 'text', content: '$$c=-15$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-15\\pm\\sqrt{15^2-4\\cdot 22\\cdot (-15)}}{2\\cdot 22}$$' },
                  { type: 'text', content: '$$x=\\frac{-15\\pm\\sqrt{225-(-1320)}}{44}$$' },
                  { type: 'text', content: '$$x=\\frac{-15\\pm\\sqrt{1545}}{44}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=\\frac{-15+\\sqrt{1545}}{44}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-15-\\sqrt{1545}}{44}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{\\sqrt{\\frac{x}{3}-\\sqrt{x-3}}}{\\frac{1}{x}-x}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{\\sqrt{\\frac{x}{3}-\\sqrt{x-3}}}{\\frac{1}{x}-x}=0$$' },
                  { type: 'text', content: '$$\\sqrt{\\frac{x}{3}-\\sqrt{x-3}}=0$$' },
                  { type: 'text', content: '$$(\\sqrt{\\frac{x}{3}-\\sqrt{x-3}})^2=0^2$$' },
                  { type: 'text', content: '$$\\frac{x}{3}-\\sqrt{x-3}+\\sqrt{x-3}=0+\\sqrt{x-3}$$' },
                  { type: 'text', content: '$$\\frac{x}{3}=\\sqrt{x-3}$$' },
                  { type: 'text', content: '$$\\left(\\frac{x}{3}\\right)^2=(\\sqrt{x-3})^2$$' },
                  { type: 'text', content: '$$\\frac{x^2}{3^2}=x-3$$' },
                  { type: 'text', content: '$$\\frac{x^2}{9}=x-3$$' },
                  { type: 'text', content: '$$\\frac{x^2}{9}\\cdot 9=(x-3)\\cdot 9$$' },
                  { type: 'text', content: '$$x^2=9x-27$$' },
                  { type: 'text', content: '$$x^2-9x+27=9x-27-9x+27$$' },
                  { type: 'text', content: '$$x^2-9x+27=0$$' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=-9$$' },
                  { type: 'text', content: '$$c=27$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-(-9)\\pm\\sqrt{(-9)^2-4\\cdot 1\\cdot 27}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x=\\frac{9\\pm\\sqrt{81-108}}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{9\\pm\\sqrt{-27}}{2}$$' },
                  { type: 'text', content: 'Среди рациональных чисел корней данного уравнения нет. Так как дискриминант отрицателен.' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^3-x^2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^3-x^2=0$$' },
                  { type: 'text', content: '$$x^2(x-1)=0$$' },
                  { type: 'text', content: '$$x^2=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x-1=0$$' },
                  { type: 'text', content: '$$x-1+1=0+1$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x}{x}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: 'Тут можно пойти двумя путями.' },
                  { type: 'text', content: 'Первый путь:' },
                  { type: 'text', content: '$$\\frac{x}{x}=0$$' },
                  { type: 'text', content: 'Необходимо найти при каком значении \\(x\\) в числителе дроби будет ноль, очевидно что при \\(x=0\\):' },
                  { type: 'text', content: '$$\\frac{0}{0}=0$$' },
                  { type: 'text', content: 'Но и в знаменателе тоже будет ноль. А так как \\(x\\) в числителе будет нулём только когда \\(x=0\\), то других корней у уравнения нет, а ноль не подходит. Значит данное уравнение не имеет корней.' },
                  { type: 'margin' },
                  { type: 'text', content: 'Второй путь:' },
                  { type: 'text', content: '$$\\frac{x}{x}=0$$' },
                  { type: 'text', content: 'Очевидно что любая дробь с оциннаковым числителем и знаменателем будет равняться \\(1\\). Дробь \\(\\frac{x}{x}\\) подразумевает что и в числителе, и в знаменателе будут одинаковые числа, значит уравнение можно переписать так:' },
                  { type: 'text', content: '$$1=0$$' },
                  { type: 'text', content: 'Очевидно что данное равенство неверно. Уравнение само по себе содержит неверное равенство независимо от значения \\(x\\). Значит уравнение не имеет корней.' },
                  { type: 'margin' },
                  { type: 'margin' },
                  { type: 'text', content: 'На заметку, вот ещё уравнение в котором не может выполняться равенства назвисимо от значения \\(x\\):' },
                  { type: 'text', content: '$$x+5=x+1$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^6-x^4=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^6-x^4=0$$' },
                  { type: 'text', content: '$$x^4(x^2-1)=0$$' },
                  { type: 'text', content: '$$x^4(x^2-1^2)=0$$' },
                  { type: 'text', content: '$$x^4(x-1)(x+1)=0$$' },
                  { type: 'text', content: '$$x_0=0$$' },
                  { type: 'text', content: '$$x_1=1$$' },
                  { type: 'text', content: '$$x_2=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x-1}{x+1}+\\frac{x+1}{x-1}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x-1}{x+1}+\\frac{x+1}{x-1}=0$$' },
                  { type: 'text', content: '$$\\left(\\frac{x-1}{x+1}+\\frac{x+1}{x-1}\\right)\\cdot (x+1)(x-1)=0\\cdot (x+1)(x-1)$$' },
                  { type: 'text', content: '$$\\frac{x-1}{x+1}(x+1)(x-1)+\\frac{x+1}{x-1}(x+1)(x-1)=0$$' },
                  { type: 'text', content: '$$\\frac{(x-1)(x+1)(x-1)}{x+1}+\\frac{(x+1)(x+1)(x-1)}{x-1}=0$$' },
                  { type: 'text', content: '$$\\frac{(x-1)^2(x+1)}{x+1}+\\frac{(x+1)^2(x-1)}{x-1}=0$$' },
                  { type: 'text', content: '$$(x-1)^2+(x+1)^2=0$$' },
                  { type: 'text', content: '$$x^2-2x+1+x^2+2x+1=0$$' },
                  { type: 'text', content: '$$2x^2+2=0$$' },
                  { type: 'text', content: '$$2x^2+2-2=0-2$$' },
                  { type: 'text', content: '$$2x^2=-2$$' },
                  { type: 'text', content: '$$\\frac{2x^2}{2}=\\frac{-2}{2}$$' },
                  { type: 'text', content: '$$x^2=-1$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{-1}$$' },
                  { type: 'text', content: 'Вещественных корней нет.' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^x=27$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^x=27$$' },
                  { type: 'text', content: '$$3^3=27$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$|x-1|-1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|x-1|-1=0$$' },
                  { type: 'text', content: '$$|x-1|-1+1=0+1$$' },
                  { type: 'text', content: '$$|x-1|=1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-1=1$$' },
                  { type: 'text', content: '$$x-1+1=1+1$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$-(x-1)=1$$' },
                  { type: 'text', content: '$$-x+1=1$$' },
                  { type: 'text', content: '$$-x+1-1=1-1$$' },
                  { type: 'text', content: '$$-x=0$$' },
                  { type: 'text', content: '$$-x\\cdot -1=0\\cdot -1$$' },
                  { type: 'text', content: '$$x=0$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{y+1}-\\sqrt{y-6}=2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{y+1}-\\sqrt{y-6}=2$$' },
                  { type: 'text', content: '$$\\sqrt{y+1}-\\sqrt{y-6}+\\sqrt{y-6}=2+\\sqrt{y-6}$$' },
                  { type: 'text', content: '$$\\sqrt{y+1}=2+\\sqrt{y-6}$$' },
                  { type: 'text', content: '$$(\\sqrt{y+1})^2=(2+\\sqrt{y-6})^2$$' },
                  { type: 'text', content: '$$y+1=2^2+2\\cdot 2\\cdot \\sqrt{y-6}+(\\sqrt{y-6})^2$$' },
                  { type: 'text', content: '$$y+1=4+4\\sqrt{y-6}+y-6$$' },
                  { type: 'text', content: '$$y+1=4-6+4\\sqrt{y-6}+y$$' },
                  { type: 'text', content: '$$y+1=-2+4\\sqrt{y-6}+y$$' },
                  { type: 'text', content: '$$y+1=y+4\\sqrt{y-6}-2$$' },
                  { type: 'text', content: '$$y+1-y=y+4\\sqrt{y-6}-2-y$$' },
                  { type: 'text', content: '$$1=4\\sqrt{y-6}-2$$' },
                  { type: 'text', content: '$$1+2=4\\sqrt{y-6}-2+2$$' },
                  { type: 'text', content: '$$3=4\\sqrt{y-6}$$' },
                  { type: 'text', content: '$$3^2=(4\\sqrt{y-6})^2$$' },
                  { type: 'text', content: '$$9=4^2(\\sqrt{y-6})^2$$' },
                  { type: 'text', content: '$$9=16(y-6)$$' },
                  { type: 'text', content: '$$9=16y-96$$' },
                  { type: 'text', content: '$$16y-96=9$$' },
                  { type: 'text', content: '$$16y-96+96=9+96$$' },
                  { type: 'text', content: '$$16y=105$$' },
                  { type: 'text', content: '$$\\frac{16y}{16}=\\frac{105}{16}$$' },
                  { type: 'text', content: '$$y=\\frac{105}{16}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{x+1}+\\sqrt{2x+3}=1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{x+1}+\\sqrt{2x+3}=1$$' },
                  { type: 'text', content: '$$\\sqrt{x+1}+\\sqrt{2x+3}-\\sqrt{2x+3}=1-\\sqrt{2x+3}$$' },
                  { type: 'text', content: '$$\\sqrt{x+1}=1-\\sqrt{2x+3}$$' },
                  { type: 'text', content: '$$(\\sqrt{x+1})^2=(1-\\sqrt{2x+3})^2$$' },
                  { type: 'text', content: '$$x+1=1-2\\sqrt{2x+3}+(2x+3)$$' },
                  { type: 'text', content: '$$x+1=1-2\\sqrt{2x+3}+2x+3$$' },
                  { type: 'text', content: '$$x+1=4-2\\sqrt{2x+3}+2x$$' },
                  { type: 'text', content: '$$x+1-4=4-2\\sqrt{2x+3}+2x-4$$' },
                  { type: 'text', content: '$$x-3=-2\\sqrt{2x+3}+2x$$' },
                  { type: 'text', content: '$$x-3-2x=-2\\sqrt{2x+3}+2x-2x$$' },
                  { type: 'text', content: '$$-x-3=-2\\sqrt{2x+3}$$' },
                  { type: 'text', content: '$$(-x-3)^2=(-2\\sqrt{2x+3})^2$$' },
                  { type: 'text', content: '$$x^2+6x+9=4(2x+3)$$' },
                  { type: 'text', content: '$$x^2+6x+9=8x+12$$' },
                  { type: 'text', content: '$$x^2+6x+9-8x-12=8x+12-8x-12$$' },
                  { type: 'text', content: '$$x^2-2x-3=0$$' },
                  { type: 'text', content: '$$(x-3)(x+1)=0$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-1$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Проверим корни:' },
                  { type: 'text', content: '$$\\sqrt{3+1}+\\sqrt{2\\cdot 3+3}=1$$' },
                  { type: 'text', content: '$$\\sqrt{4}+\\sqrt{6+3}=1$$' },
                  { type: 'text', content: '$$\\sqrt{4}+\\sqrt{9}=1$$' },
                  { type: 'text', content: '$$2+3=1$$' },
                  { type: 'text', content: '$$5=1$$' },
                  { type: 'text', content: 'Как видите, число \\(3\\) не является корнем уравнения' },
                  { type: 'text', content: '$$\\sqrt{-1+1}+\\sqrt{2\\cdot (-1)+3}=1$$' },
                  { type: 'text', content: '$$\\sqrt{0}+\\sqrt{-2+3}=1$$' },
                  { type: 'text', content: '$$\\sqrt{0}+\\sqrt{1}=1$$' },
                  { type: 'text', content: '$$0+1=1$$' },
                  { type: 'text', content: '$$1=1$$' },
                  { type: 'text', content: 'Число \\(-1\\) является корнем уравнения.' },
                  { type: 'text', content: '$$x=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{1+x\\sqrt{x^2+24}}=x+1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{1+x\\sqrt{x^2+24}}=x+1$$' },
                  { type: 'text', content: '$$(\\sqrt{1+x\\sqrt{x^2+24}})^2=(x+1)^2$$' },
                  { type: 'text', content: '$$1+x\\sqrt{x^2+24}=x^2+2x+1$$' },
                  { type: 'text', content: '$$1+x\\sqrt{x^2+24}-x^2-2x-1=x^2+2x+1-x^2-2x-1$$' },
                  { type: 'text', content: '$$-x^2+x\\sqrt{x^2+24}-2x=0$$' },
                  { type: 'text', content: '$$-x(x-\\sqrt{x^2+24}+2)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$-x=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-\\sqrt{x^2+24}+2=0$$' },
                  { type: 'text', content: '$$x-\\sqrt{x^2+24}+2-x=0-x$$' },
                  { type: 'text', content: '$$-\\sqrt{x^2+24}+2=-x$$' },
                  { type: 'text', content: '$$-\\sqrt{x^2+24}+2-2=-x-2$$' },
                  { type: 'text', content: '$$-\\sqrt{x^2+24}=-x-2$$' },
                  { type: 'text', content: '$$(-\\sqrt{x^2+24})^2=(-x-2)^2$$' },
                  { type: 'text', content: '$$x^2+24=x^2+4x+4$$' },
                  { type: 'text', content: '$$x^2+24-x^2-4x-4=x^2+4x+4-x^2-4x-4$$' },
                  { type: 'text', content: '$$-4x+20=0$$' },
                  { type: 'text', content: '$$-4x+20-20=0-20$$' },
                  { type: 'text', content: '$$-4x=-20$$' },
                  { type: 'text', content: '$$4x=20$$' },
                  { type: 'text', content: '$$\\frac{4x}{4}=\\frac{20}{4}$$' },
                  { type: 'text', content: '$$x=5$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=0$$' },
                  { type: 'text', content: '$$x_2=5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1+x}{x-1}=\\frac{x^2-16}{x+1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1+x}{x-1}=\\frac{x^2-16}{x+1}$$' },
                  { type: 'text', content: '$$(x+1)^2=(x-1)(x^2-16)$$' },
                  { type: 'text', content: '$$x^2+2x+1=x^3-16x-x^2+16$$' },
                  { type: 'text', content: '$$x^3-16x-x^2+16=x^2+2x+1$$' },
                  { type: 'text', content: '$$x^3-16x-x^2+16-1=x^2+2x+1-1$$' },
                  { type: 'text', content: '$$x^3-16x-x^2+15=x^2+2x$$' },
                  { type: 'text', content: '$$x^3-x^2-16x+15=x^2+2x$$' },
                  { type: 'text', content: '$$x^3-x^2-16x+15-2x=x^2+2x-2x$$' },
                  { type: 'text', content: '$$x^3-x^2-18x+15=x^2$$' },
                  { type: 'text', content: '$$x^3-x^2-18x+15-x^2=x^2-x^2$$' },
                  { type: 'text', content: '$$x^3-2x^2-18x+15=0$$' },
                  { type: 'text', content: '$$(x-5)(x^2+3x-3)=0$$' },
                  { type: 'text', content: '$$x-5=0$$' },
                  { type: 'text', content: '$$x=5$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2+3x-3=0$$' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=3$$' },
                  { type: 'text', content: '$$c=-3$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-3\\pm\\sqrt{3^2-4\\cdot 1\\cdot (-3)}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x=\\frac{-3\\pm\\sqrt{21}}{2}$$' },
                  { type: 'text', content: '$$x_1=\\frac{-3+\\sqrt{21}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-3-\\sqrt{21}}{2}$$' },
                  { type: 'text', content: '$$x_3=5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x-5}{x-4}-\\frac{x-2}{x-1}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x-5}{x-4}-\\frac{x-2}{x-1}=0$$' },
                  { type: 'text', content: '$$\\frac{x-5}{x-4}-\\frac{x-2}{x-1}+\\frac{x-2}{x-1}=0+\\frac{x-2}{x-1}$$' },
                  { type: 'text', content: '$$\\frac{x-5}{x-4}=\\frac{x-2}{x-1}$$' },
                  { type: 'text', content: '$$(x-5)(x-1)=(x-4)(x-2)$$' },
                  { type: 'text', content: '$$x^2-6x+5=x^2-6x+8$$' },
                  { type: 'text', content: '$$x^2-6x+5+6x=x^2-6x+8+6x$$' },
                  { type: 'text', content: '$$x^2+5=x^2+8$$' },
                  { type: 'text', content: '$$x^2+5-8=x^2+8-8$$' },
                  { type: 'text', content: '$$x^2-3=x^2$$' },
                  { type: 'text', content: '$$x^2-3-x^2=x^2-x^2$$' },
                  { type: 'text', content: '$$-3=0$$' },
                  { type: 'text', content: 'Нет корней' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x^2-x}{2x}=x-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2-x}{2x}=x-5$$' },
                  { type: 'text', content: '$$\\frac{x^2}{2x}-\\frac{x}{2x}=x-5$$' },
                  { type: 'text', content: '$$\\frac{x}{2}-\\frac{1}{2}=x-5$$' },
                  { type: 'text', content: '$$\\frac{x-1}{2}=x-5$$' },
                  { type: 'text', content: '$$\\frac{x-1}{2}\\cdot 2=(x-5)\\cdot 2$$' },
                  { type: 'text', content: '$$x-1=2x-10$$' },
                  { type: 'text', content: '$$x-1-2x+10=2x-10-2x+10$$' },
                  { type: 'text', content: '$$-x+9=0$$' },
                  { type: 'text', content: '$$-x+9-9=0-9$$' },
                  { type: 'text', content: '$$-x=-9$$' },
                  { type: 'text', content: '$$-x\\cdot (-1)=-9\\cdot (-1)$$' },
                  { type: 'text', content: '$$x=9$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\left(\\frac{x}{2}+\\frac{x}{3}\\right)^2=\\frac{x}{4}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\left(\\frac{x}{2}+\\frac{x}{3}\\right)^2=\\frac{x}{4}$$' },
                  { type: 'text', content: '$$4\\left(\\frac{x}{2}+\\frac{x}{3}\\right)^2=\\frac{x}{4}\\cdot 4$$' },
                  { type: 'text', content: '$$4\\left(\\frac{x}{2}+\\frac{x}{3}\\right)^2=x$$' },
                  { type: 'text', content: '$$4\\left(\\frac{3x}{6}+\\frac{2x}{6}\\right)^2=x$$' },
                  { type: 'text', content: '$$4\\left(\\frac{5x}{6}\\right)^2=x$$' },
                  { type: 'text', content: '$$4\\frac{(5x)^2}{6^2}=x$$' },
                  { type: 'text', content: '$$4\\frac{25x^2}{36}=x$$' },
                  { type: 'text', content: '$$\\frac{4\\cdot 25x^2}{36}=x$$' },
                  { type: 'text', content: '$$\\frac{25x^2}{9}=x$$' },
                  { type: 'text', content: '$$\\frac{25x^2}{9}-x=x-x$$' },
                  { type: 'text', content: '$$\\frac{25x^2}{9}-x=0$$' },
                  { type: 'text', content: '$$\\frac{25x^2}{9}-\\frac{9x}{9}=0$$' },
                  { type: 'text', content: '$$\\frac{25x^2-9x}{9}=0$$' },
                  { type: 'text', content: '$$\\frac{25x^2-9x}{9}\\cdot 9=0\\cdot 9$$' },
                  { type: 'text', content: '$$25x^2-9x=0$$' },
                  { type: 'text', content: '$$x(25x-9)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$25x-9=0$$' },
                  { type: 'text', content: '$$25x-9+9=0+9$$' },
                  { type: 'text', content: '$$25x=9$$' },
                  { type: 'text', content: '$$\\frac{25x}{25}=\\frac{9}{25}$$' },
                  { type: 'text', content: '$$x=\\frac{9}{25}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=0$$' },
                  { type: 'text', content: '$$x_2=\\frac{9}{25}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2-2x=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2-2x=4$$' },
                  { type: 'text', content: '$$2x^2-2x-4=4-4$$' },
                  { type: 'text', content: '$$2x^2-2x-4=0$$' },
                  { type: 'text', content: '$$a=2$$' },
                  { type: 'text', content: '$$b=-2$$' },
                  { type: 'text', content: '$$c=-4$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-(-2)\\pm\\sqrt{(-2)^2-4\\cdot 2\\cdot (-4)}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x=\\frac{2\\pm\\sqrt{4+32}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{2\\pm\\sqrt{36}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{2\\pm 6}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{2 + 6}{4}$$' },
                  { type: 'text', content: '$$x_1=\\frac{8}{4}$$' },
                  { type: 'text', content: '$$x_1=2$$' },
                  { type: 'text', content: '$$x_2=\\frac{2 - 6}{4}$$' },
                  { type: 'text', content: '$$x_2=\\frac{-4}{4}$$' },
                  { type: 'text', content: '$$x_2=-1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=2$$' },
                  { type: 'text', content: '$$x_2=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$5x^2-4x=12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$5x^2-4x=12$$' },
                  { type: 'text', content: '$$5x^2-4x-12=12-12$$' },
                  { type: 'text', content: '$$5x^2-4x-12=0$$' },
                  { type: 'text', content: '$$a=5$$' },
                  { type: 'text', content: '$$b=-4$$' },
                  { type: 'text', content: '$$c=-12$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-(-4)\\pm\\sqrt{(-4)^2-4\\cdot 5\\cdot (-12)}}{2\\cdot 5}$$' },
                  { type: 'text', content: '$$x=\\frac{4\\pm\\sqrt{16+240}}{10}$$' },
                  { type: 'text', content: '$$x=\\frac{4\\pm 16}{10}$$' },
                  { type: 'text', content: '$$x_1=\\frac{20}{10}$$' },
                  { type: 'text', content: '$$x_1=2$$' },
                  { type: 'text', content: '$$x_2=\\frac{-12}{10}$$' },
                  { type: 'text', content: '$$x_2=-\\frac{6}{5}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=2$$' },
                  { type: 'text', content: '$$x_2=-\\frac{6}{5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-3x-4=20+2x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-3x-4=20+2x$$' },
                  { type: 'text', content: '$$x^2-3x-4-20-2x=20+2x-20-2x$$' },
                  { type: 'text', content: '$$x^2-5x-24=0$$' },
                  { type: 'text', content: '$$(x-8)(x+3)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x_1=8$$' },
                  { type: 'text', content: '$$x_2=-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2=x-2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2=x-2$$' },
                  { type: 'text', content: '$$x^2-x+2=x-2-x+2$$' },
                  { type: 'text', content: '$$x^2-x+2=0$$' },
                  { type: 'text', content: '$$a=1$$' },
                  { type: 'text', content: '$$b=-1$$' },
                  { type: 'text', content: '$$c=2$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-(-1)\\pm\\sqrt{(-1)^2-4\\cdot 1\\cdot 2}}{2\\cdot 1}$$' },
                  { type: 'text', content: '$$x=\\frac{1\\pm\\sqrt{-7}}{2}$$' },
                  { type: 'text', content: 'Вещественных корней нет. Только комплексные.' },
                  { type: 'text', content: '$$x_1=\\frac{1+\\sqrt{-7}}{2}$$' },
                  { type: 'text', content: '$$x_2=\\frac{1-\\sqrt{-7}}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$0.5x+4=0.2+0.3x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$0.5x+4=0.2+0.3x$$' },
                  { type: 'text', content: '$$0.5x+4-0.3x=0.2+0.3x-0.3x$$' },
                  { type: 'text', content: '$$0.2x+4=0.2$$' },
                  { type: 'text', content: '$$0.2x+4-4=0.2-4$$' },
                  { type: 'text', content: '$$0.2x=-3.8$$' },
                  { type: 'text', content: '$$\\frac{0.2x}{0.2}=\\frac{-3.8}{0.2}$$' },
                  { type: 'text', content: '$$x=-19$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{2}{7}x-\\frac{2}{3}=2x+\\frac{3}{7}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{2}{7}x-\\frac{2}{3}=2x+\\frac{3}{7}$$' },
                  { type: 'text', content: '$$\\frac{2}{7}x-\\frac{2}{3}-2x=2x+\\frac{3}{7}-2x$$' },
                  { type: 'text', content: '$$\\frac{2}{7}x-\\frac{2}{3}-\\frac{14}{7}x=\\frac{3}{7}$$' },
                  { type: 'text', content: '$$\\frac{-12}{7}x-\\frac{2}{3}=\\frac{3}{7}$$' },
                  { type: 'text', content: '$$\\frac{-12}{7}x-\\frac{2}{3}+\\frac{2}{3}=\\frac{3}{7}+\\frac{2}{3}$$' },
                  { type: 'text', content: '$$\\frac{-12}{7}x=\\frac{3\\cdot 3}{7\\cdot 3}+\\frac{2\\cdot 7}{3\\cdot 7}$$' },
                  { type: 'text', content: '$$\\frac{-12}{7}x=\\frac{9}{21}+\\frac{14}{21}$$' },
                  { type: 'text', content: '$$\\frac{-12}{7}x=\\frac{23}{21}$$' },
                  { type: 'text', content: '$$\\frac{\\frac{-12}{7}x}{\\frac{-12}{7}}=\\frac{\\frac{23}{21}}{\\frac{-12}{7}}$$' },
                  { type: 'text', content: '$$\\frac{\\frac{-12}{7}x}{\\frac{-12}{7}}=\\frac{23}{21} \\cdot \\frac{7}{-12}$$' },
                  { type: 'text', content: '$$x=-\\frac{23}{36}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4^{x+1}=4^5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4^{x+1}=4^5$$' },
                  { type: 'text', content: '$$x+1=5$$' },
                  { type: 'text', content: '$$x+1-1=5-1$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$4^x=16$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$4^x=16$$' },
                  { type: 'text', content: '$$4^x=4^2$$' },
                  { type: 'text', content: '$$x=2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{9a+7}}=2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{\\sqrt{9a+7}}=2$$' },
                  { type: 'text', content: '$$(\\sqrt{\\sqrt{9a+7}})^2=2^2$$' },
                  { type: 'text', content: '$$\\sqrt{9a+7}=4$$' },
                  { type: 'text', content: '$$(\\sqrt{9a+7})^2=4^2$$' },
                  { type: 'text', content: '$$9a+7=16$$' },
                  { type: 'text', content: '$$9a+7-7=16-7$$' },
                  { type: 'text', content: '$$9a=9$$' },
                  { type: 'text', content: '$$a=1$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1}{\\sqrt{x-1}}=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{\\sqrt{x-1}}=5$$' },
                  { type: 'text', content: '$$1=5\\sqrt{x-1}$$' },
                  { type: 'text', content: '$$1^2=(5\\sqrt{x-1})^2$$' },
                  { type: 'text', content: '$$1=25(x-1)$$' },
                  { type: 'text', content: '$$1=25x-25$$' },
                  { type: 'text', content: '$$25x-25=1$$' },
                  { type: 'text', content: '$$25x-25+25=1+25$$' },
                  { type: 'text', content: '$$25x=26$$' },
                  { type: 'text', content: '$$\\frac{25x}{25}=\\frac{26}{25}$$' },
                  { type: 'text', content: '$$x=\\frac{26}{25}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$3y+2y+4=-6$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3y+2y+4=-6$$' },
                  { type: 'text', content: '$$5y+4=-6$$' },
                  { type: 'text', content: '$$5y+4-4=-6-4$$' },
                  { type: 'text', content: '$$5y=-10$$' },
                  { type: 'text', content: '$$\\frac{5y}{5}=\\frac{-10}{5}$$' },
                  { type: 'text', content: '$$y=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+6x+9=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+6x+9=0$$' },
                  { type: 'text', content: '$$(x+3)^2=0$$' },
                  { type: 'text', content: '$$x=-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+6x+8=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+6x+8=0$$' },
                  { type: 'text', content: '$$x^2+6x+8-8=0-8$$' },
                  { type: 'text', content: '$$x^2+6x=-8$$' },
                  { type: 'text', content: '$$x^2+6x+\\left(\\frac{6}{2}\\right)^2=-8+\\left(\\frac{6}{2}\\right)^2$$' },
                  { type: 'text', content: '$$x^2+6x+9=-8+9$$' },
                  { type: 'text', content: '$$x^2+6x+9=1$$' },
                  { type: 'text', content: '$$(x+3)^2=1$$' },
                  { type: 'text', content: '$$\\sqrt{(x+3)^2}=\\pm\\sqrt{1}$$' },
                  { type: 'text', content: '$$x+3=\\pm 1$$' },
                  { type: 'text', content: '$$x+3-3=1-3$$' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'text', content: '$$x+3=-1$$' },
                  { type: 'text', content: '$$x+3-3=-1-3$$' },
                  { type: 'text', content: '$$x=-4$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'text', content: '$$x=-4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+2x-3=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+2x-3=0$$' },
                  { type: 'text', content: '$$(x+3)(x-1)=0$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+10x+25=64$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+10x+25=64$$' },
                  { type: 'text', content: '$$(x+5)^2=64$$' },
                  { type: 'text', content: '$$x+5=\\pm 8$$' },
                  { type: 'text', content: '$$x+5-5=8-5$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x+5=-8$$' },
                  { type: 'text', content: '$$x+5-5=-8-5$$' },
                  { type: 'text', content: '$$x=-13$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-13$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-x-18=12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-x-18-12=12-12$$' },
                  { type: 'text', content: '$$x^2-x-30=0$$' },
                  { type: 'text', content: '$$(x+5)(x-6)=0$$' },
                  { type: 'text', content: '$$x=-5$$' },
                  { type: 'text', content: '$$x=6$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{9}{8}x^2-2x=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{9}{8}x^2-2x=0$$' },
                  { type: 'text', content: '$$x\\left(\\frac{9}{8}x-2\\right)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$\\frac{9}{8}x-2=0$$' },
                  { type: 'text', content: '$$\\frac{9}{8}x-2+2=0+2$$' },
                  { type: 'text', content: '$$\\frac{9}{8}x=2$$' },
                  { type: 'text', content: '$$\\frac{\\frac{9}{8}x}{\\frac{9}{8}}=\\frac{2}{\\frac{9}{8}}$$' },
                  { type: 'text', content: '$$x=\\frac{2}{1}\\cdot \\frac{8}{9}$$' },
                  { type: 'text', content: '$$x=\\frac{16}{9}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x=\\frac{16}{9}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+3x-\\frac{7}{4}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+3x-\\frac{7}{4}=0$$' },
                  { type: 'text', content: '$$(x^2+3x-\\frac{7}{4})\\cdot 4=0\\cdot 4$$' },
                  { type: 'text', content: '$$4x^2+12x-7=0$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-12\\pm\\sqrt{12^2-4\\cdot 4\\cdot (-7)}}{2\\cdot 4}$$' },
                  { type: 'text', content: '$$x=\\frac{-12\\pm\\sqrt{256}}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{-12\\pm 16}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{-12+ 16}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{4}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{-12- 16}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{-28}{8}$$' },
                  { type: 'text', content: '$$x=\\frac{-7}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=-\\frac{7}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2+5x-3=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2+5x-3=0$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{5^2-4\\cdot 2\\cdot (-3)}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{25+24}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{49}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm 7}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5+7}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{2}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{-5- 7}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-12}{4}$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=-3$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: 'А попробуйте-ка решить кубическое уравнение. Придумаете подход?' },
                  { type: 'text', content: '$$3x^3-6x^2+15x-30=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3x^3-6x^2+15x-30=0$$' },
                  { type: 'text', content: '$$3(x^3-2x^2+5x-10)=0$$' },
                  { type: 'text', content: '$$\\frac{3(x^3-2x^2+5x-10)}{3}=\\frac{0}{3}$$' },
                  { type: 'text', content: '$$x^3-2x^2+5x-10=0$$' },
                  { type: 'text', content: '$$(x^3-2x^2)+(5x-10)=0$$' },
                  { type: 'text', content: '$$x^2(x-2)+5(x-2)=0$$' },
                  { type: 'text', content: '$$ac+bc=(a+b)c$$' },
                  { type: 'text', content: '$$(x^2+5)(x-2)=0$$' },
                  { type: 'text', content: '$$x^2+5=0$$' },
                  { type: 'text', content: '$$x^2+5-5=0-5$$' },
                  { type: 'text', content: '$$x^2=-5$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{-5}$$' },
                  { type: 'text', content: '$$x-2=0$$' },
                  { type: 'text', content: '$$x-2+2=0+2$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: 'Получился один вещественный корень \\(x=2\\) и два комплексных \\(x=\\sqrt{-5}\\) и \\(x=-\\sqrt{-5}\\)' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=\\sqrt{-5}$$' },
                  { type: 'text', content: '$$x=-\\sqrt{-5}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^3+2x^2-x-2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^3+2x^2-x-2=0$$' },
                  { type: 'text', content: '$$(x^3+2x^2)+(-x-2)=0$$' },
                  { type: 'text', content: '$$x^2(x+2)+(-x-2)=0$$' },
                  { type: 'text', content: '$$x^2(x+2)+(-1)(x+2)=0$$' },
                  { type: 'text', content: '$$(x^2-1)(x+2)=0$$' },
                  { type: 'text', content: '$$(x^2-1^2)(x+2)=0$$' },
                  { type: 'text', content: '$$a^2-b^2=(a-b)(a+b)=0$$' },
                  { type: 'text', content: '$$(x+1)(x-1)(x+2)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x+1=0$$' },
                  { type: 'text', content: '$$x=-1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-1=0$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x+2=0$$' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=-1$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: '$$x=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^4-81=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^4-81=0$$' },
                  { type: 'text', content: '$$(x^2)^2-9^2=0$$' },
                  { type: 'text', content: '$$a^2-b^2=(a-b)(a+b)$$' },
                  { type: 'text', content: '$$(x^2-9)(x^2+9)=0$$' },
                  { type: 'text', content: '$$(x^2-3^2)(x^2+9)=0$$' },
                  { type: 'text', content: '$$(x-3)(x+3)(x^2+9)=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x-3=0$$' },
                  { type: 'text', content: '$$x-3+3=0+3$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x+3=0$$' },
                  { type: 'text', content: '$$x+3-3=0-3$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2+9=0$$' },
                  { type: 'text', content: '$$x^2+9-9=0-9$$' },
                  { type: 'text', content: '$$x^2=-9$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{-9}$$' },
                  { type: 'margin' },
                  { type: 'text', content: 'Получилось 4 корня! Два вещественных:' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'text', content: 'И два комплексных:' },
                  { type: 'text', content: '$$x=\\sqrt{-9}$$' },
                  { type: 'text', content: '$$x=-\\sqrt{-9}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{2x+3}=\\sqrt{6x-1}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{2x+3}=\\sqrt{6x-1}$$' },
                  { type: 'text', content: '$$(\\sqrt{2x+3})^2=(\\sqrt{6x-1})^2$$' },
                  { type: 'text', content: '$$2x+3=6x-1$$' },
                  { type: 'text', content: '$$2x+3-6x=6x-1-6x$$' },
                  { type: 'text', content: '$$-4x+3=-1$$' },
                  { type: 'text', content: '$$-4x+3-3=-1-3$$' },
                  { type: 'text', content: '$$-4x=-4$$' },
                  { type: 'text', content: '$$\\frac{-4x}{-4}=\\frac{-4}{-4}$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$|x-2|=|x+4|$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|x-2|=|x+4|$$' },
                  { type: 'text', content: '$$\\frac{|x-2|}{|x+4|}=\\frac{|x+4|}{|x+4|}$$' },
                  { type: 'text', content: '$$\\left|\\frac{x-2}{x+4}\\right|=1$$' },
                  { type: 'text', content: '$$\\frac{x-2}{x+4}=1$$' },
                  { type: 'text', content: '$$\\frac{x-2}{x+4}\\cdot (x+4)=1\\cdot (x+4)$$' },
                  { type: 'text', content: '$$x-2=x+4$$' },
                  { type: 'text', content: '$$x-2-x=x+4-x$$' },
                  { type: 'text', content: '$$-2=4$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$-\\frac{x-2}{x+4}=1$$' },
                  { type: 'text', content: '$$-\\frac{x-2}{x+4}\\cdot (x+4)=1\\cdot (x+4)$$' },
                  { type: 'text', content: '$$-(x-2)=x+4$$' },
                  { type: 'text', content: '$$-x+2=x+4$$' },
                  { type: 'text', content: '$$-x+2-x=x+4-x$$' },
                  { type: 'text', content: '$$-2x+2=4$$' },
                  { type: 'text', content: '$$-2x+2-2=4-2$$' },
                  { type: 'text', content: '$$-2x=2$$' },
                  { type: 'text', content: '$$x=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$9^x=27$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$9^x=27$$' },
                  { type: 'text', content: '$$(3^2)^x=27$$' },
                  { type: 'text', content: '$$3^2x=27$$' },
                  { type: 'text', content: '$$3^2x=3^3$$' },
                  { type: 'text', content: '$$2x=3$$' },
                  { type: 'text', content: '$$x=\\frac{2}{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^x=256$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^x=256$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{z-57}{z^2+1}=-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{z-57}{z^2+1}=-1$$' },
                  { type: 'text', content: '$$\\frac{z-57}{z^2+1}\\cdot (z^2+1)=-1\\cdot (z^2+1)$$' },
                  { type: 'text', content: '$$z-57=-(z^2+1)$$' },
                  { type: 'text', content: '$$z-57=-z^2-1$$' },
                  { type: 'text', content: '$$z-57+z^2+1=-z^2-1+z^2+1$$' },
                  { type: 'text', content: '$$z^2+z-57+1=0$$' },
                  { type: 'text', content: '$$z^2+z-56=0$$' },
                  { type: 'text', content: '$$(z+8)(z-7)=0$$' },
                  { type: 'text', content: '$$z=-8$$' },
                  { type: 'text', content: '$$z=7$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$a-\\frac{5}{a}=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$a-\\frac{5}{a}=4$$' },
                  { type: 'text', content: '$$aa-\\frac{5}{a}a=4a$$' },
                  { type: 'text', content: '$$a^2-5=4a$$' },
                  { type: 'text', content: '$$a^2-5-4a=4a-4a$$' },
                  { type: 'text', content: '$$a^2-4a-5=0$$' },
                  { type: 'text', content: '$$(a+1)(a-5)=0$$' },
                  { type: 'text', content: '$$a=-1$$' },
                  { type: 'text', content: '$$a=5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x-\\frac{3}{x+2}=x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x-\\frac{3}{x+2}=x$$' },
                  { type: 'text', content: '$$2x(x+2)-\\frac{3}{x+2}(x+2)=x(x+2)$$' },
                  { type: 'text', content: '$$2x(x+2)-3=x(x+2)$$' },
                  { type: 'text', content: '$$2x^2+4x-3=x^2+2x$$' },
                  { type: 'text', content: '$$2x^2+4x-3-x^2-2x=x^2+2x-x^2-2x$$' },
                  { type: 'text', content: '$$x^2+2x-3=0$$' },
                  { type: 'text', content: '$$(x+3)(x-1)=0$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'text', content: '$$x=1$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$0.1x^2-0.5x+0.6=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$0.1x^2-0.5x+0.6=0$$' },
                  { type: 'text', content: '$$(0.1x^2-0.5x+0.6)\\cdot 10=0\\cdot 10$$' },
                  { type: 'text', content: '$$x^2-5x+6=10$$' },
                  { type: 'text', content: '$$(x-3)(x-2)=10$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2.4x-0.8x^2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2.4x-0.8x^2=0$$' },
                  { type: 'text', content: '$$(2.4x-0.8x^2)\\cdot 10=0\\cdot 10$$' },
                  { type: 'text', content: '$$24x-8x^2=0$$' },
                  { type: 'text', content: '$$x(24-8x)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$24-8x=0$$' },
                  { type: 'text', content: '$$24-8x-24=0-24$$' },
                  { type: 'text', content: '$$-8x=-24$$' },
                  { type: 'text', content: '$$-8x\\cdot (-1)=-24\\cdot (-1)$$' },
                  { type: 'text', content: '$$8x=24$$' },
                  { type: 'text', content: '$$\\frac{8x}{8}=\\frac{24}{8}$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{6x+3}}=3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{\\sqrt{6x+3}}=3$$' },
                  { type: 'text', content: '$$(\\sqrt{\\sqrt{6x+3}})^2=3^2$$' },
                  { type: 'text', content: '$$\\sqrt{6x+3}=9$$' },
                  { type: 'text', content: '$$(\\sqrt{6x+3})^2=9^2$$' },
                  { type: 'text', content: '$$6x+3=81$$' },
                  { type: 'text', content: '$$6x+3-3=81-3$$' },
                  { type: 'text', content: '$$6x=78$$' },
                  { type: 'text', content: '$$\\frac{6x}{6}=\\frac{78}{6}$$' },
                  { type: 'text', content: '$$x=13$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$9=\\sqrt{\\sqrt{x-3}}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$9=\\sqrt{\\sqrt{x-3}}$$' },
                  { type: 'text', content: '$$9^2=(\\sqrt{\\sqrt{x-3}})^2$$' },
                  { type: 'text', content: '$$81=\\sqrt{x-3}$$' },
                  { type: 'text', content: '$$81^2=(\\sqrt{x-3})^2$$' },
                  { type: 'text', content: '$$6561=x-3$$' },
                  { type: 'text', content: '$$6561+3=x-3+3$$' },
                  { type: 'text', content: '$$6564=x$$' },
                  { type: 'text', content: '$$x=6564$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2=0$$' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}-2+2=0+2$$' },
                  { type: 'text', content: '$$\\sqrt{\\sqrt{x^2+4}}=2$$' },
                  { type: 'text', content: '$$(\\sqrt{\\sqrt{x^2+4}})^2=2^2$$' },
                  { type: 'text', content: '$$\\sqrt{x^2+4}=4$$' },
                  { type: 'text', content: '$$(\\sqrt{x^2+4})^2=4^2$$' },
                  { type: 'text', content: '$$x^2+4=16$$' },
                  { type: 'text', content: '$$x^2+4-4=16-4$$' },
                  { type: 'text', content: '$$x^2=12$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{12}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\sqrt{12}$$' },
                  { type: 'text', content: '$$x=-\\sqrt{12}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{3x+\\sqrt{x}}=1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{3x+\\sqrt{x}}=1$$' },
                  { type: 'text', content: '$$(\\sqrt{3x+\\sqrt{x}})^2=1^2$$' },
                  { type: 'text', content: '$$3x+\\sqrt{x}=1$$' },
                  { type: 'text', content: '$$3x+\\sqrt{x}-3x=1-3x$$' },
                  { type: 'text', content: '$$(\\sqrt{x})^2=(1-3x)^2$$' },
                  { type: 'text', content: '$$x=(1-3x)^2$$' },
                  { type: 'text', content: '$$x=1^2-2\\cdot 1\\cdot 3x+(3x)^2$$' },
                  { type: 'text', content: '$$x=1-6x+9x^2$$' },
                  { type: 'text', content: '$$1-6x+9x^2=x$$' },
                  { type: 'text', content: '$$1-6x+9x^2-x=x-x$$' },
                  { type: 'text', content: '$$9x^2-7x+1=0$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-(-7)\\pm\\sqrt{(-7)^2-4\\cdot 9\\cdot 1}}{2\\cdot 9}$$' },
                  { type: 'text', content: '$$x=\\frac{7\\pm\\sqrt{49-36}}{18}$$' },
                  { type: 'text', content: '$$x=\\frac{7\\pm\\sqrt{13}}{18}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{7+\\sqrt{13}}{18}$$' },
                  { type: 'text', content: '$$x=\\frac{7-\\sqrt{13}}{18}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1}{2}x^2=x-1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{2}x^2=x-1$$' },
                  { type: 'text', content: '$$\\frac{1}{2}x^2-x=x-1-x$$' },
                  { type: 'text', content: '$$\\frac{1}{2}x^2-x=-1$$' },
                  { type: 'text', content: '$$\\frac{1}{2}x^2-x+1=-1+1$$' },
                  { type: 'text', content: '$$\\frac{1}{2}x^2-x+1=0$$' },
                  { type: 'text', content: '$$x=\\frac{1\\pm\\sqrt{1-4\\cdot \\frac{1}{2}\\cdot 1}}{2\\cdot \\frac{1}{2}}$$' },
                  { type: 'text', content: '$$x=\\frac{1\\pm\\sqrt{1-2}}{1}$$' },
                  { type: 'text', content: '$$x=\\frac{1\\pm\\sqrt{-1}}{1}$$' },
                  { type: 'text', content: '$$x=1\\pm\\sqrt{-1}$$' },
                  { type: 'text', content: 'Все корни комплексные' },
                  { type: 'text', content: '$$x=1+\\sqrt{-1}$$' },
                  { type: 'text', content: '$$x=1-\\sqrt{-1}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+2x+1=(x+1)^2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+2x+1=(x+1)^2$$' },
                  { type: 'text', content: '$$x^2+2x+1=x^2+2x+1$$' },
                  { type: 'text', content: '$$x^2+2x+1-x^2-2x-1=x^2+2x+1-x^2-2x-1$$' },
                  { type: 'text', content: '$$0=0$$' },
                  { type: 'text', content: 'Верно для любого значения \\(x\\)' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$10-x=\\frac{2x+4}{6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$10-x=\\frac{2x+4}{6}$$' },
                  { type: 'text', content: '$$(10-x)6=\\frac{2x+4}{6}\\cdot 6$$' },
                  { type: 'text', content: '$$60-6x=2x+4$$' },
                  { type: 'text', content: '$$60-6x-2x=2x+4-2x$$' },
                  { type: 'text', content: '$$60-8x-60=4-60$$' },
                  { type: 'text', content: '$$-8x=-56$$' },
                  { type: 'text', content: '$$\\frac{-8x}{-8}=\\frac{-56}{-8}$$' },
                  { type: 'text', content: '$$x=7$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$3-a=\\frac{9a+6}{4}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3-a=\\frac{9a+6}{4}$$' },
                  { type: 'text', content: '$$(3-a)\\cdot 4=\\frac{9a+6}{4}\\cdot 4$$' },
                  { type: 'text', content: '$$12-4a=9a+6$$' },
                  { type: 'text', content: '$$12-4a-9a=9a+6-9a$$' },
                  { type: 'text', content: '$$12-13a=6$$' },
                  { type: 'text', content: '$$12-13a-12=6-12$$' },
                  { type: 'text', content: '$$-13a=-6$$' },
                  { type: 'text', content: '$$a=\\frac{6}{13}$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x-11=6x-12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x-11=6x-12$$' },
                  { type: 'text', content: '$$2x-11-6x=6x-12-6x$$' },
                  { type: 'text', content: '$$-4x-11=-12$$' },
                  { type: 'text', content: '$$-4x-11+11=-12+11$$' },
                  { type: 'text', content: '$$-4x=-1$$' },
                  { type: 'text', content: '$$x=\\frac{1}{4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x=4x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x=4x$$' },
                  { type: 'text', content: '$$2x-4x=4x-4x$$' },
                  { type: 'text', content: '$$-2x=0$$' },
                  { type: 'text', content: '$$\\frac{-2x}{-2}=\\frac{0}{-2}$$' },
                  { type: 'text', content: '$$x=0$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1}{x}=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x}\\cdot x=0\\cdot x$$' },
                  { type: 'text', content: '$$1=0$$' },
                  { type: 'text', content: 'Нет корней.' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x+1=5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x+1=5$$' },
                  { type: 'text', content: '$$x+1-1=5-1$$' },
                  { type: 'text', content: '$$x=4$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x+1.5=4.5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x+1.5=4.5$$' },
                  { type: 'text', content: '$$x+1.5-1.5=4.5-1.5$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x+4.6=12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x+4.6=12$$' },
                  { type: 'text', content: '$$2x+4.6-4.6=12-4.6$$' },
                  { type: 'text', content: '$$2x=7.4$$' },
                  { type: 'text', content: '$$x=3.7$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$8.7x-8=-7.1+8.4x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$8.7x-8=-7.1+8.4x$$' },
                  { type: 'text', content: '$$(8.7x-8)10=(-7.1+8.4x)10$$' },
                  { type: 'text', content: '$$87x-80=-71+84x$$' },
                  { type: 'text', content: '$$87x-80+80=-71+84x+80$$' },
                  { type: 'text', content: '$$87x=84x+9$$' },
                  { type: 'text', content: '$$87x-84x=84x+9-84x$$' },
                  { type: 'text', content: '$$3x=9$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-1=\\frac{5+x}{6}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-1=\\frac{5+x}{6}$$' },
                  { type: 'text', content: '$$-1\\cdot 6=\\frac{5+x}{6}\\cdot 6$$' },
                  { type: 'text', content: '$$-6=5+x$$' },
                  { type: 'text', content: '$$5+x=-6$$' },
                  { type: 'text', content: '$$5+x-5=-6-5$$' },
                  { type: 'text', content: '$$x=-11$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{6+x}{x-1}=2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6+x}{x-1}=2$$' },
                  { type: 'text', content: '$$\\frac{6+x}{x-1}(x-1)=2(x-1)$$' },
                  { type: 'text', content: '$$6+x=2x-2$$' },
                  { type: 'text', content: '$$6+x-2x=2x-2-2x$$' },
                  { type: 'text', content: '$$6-x=-2$$' },
                  { type: 'text', content: '$$6-x-6=-2-6$$' },
                  { type: 'text', content: '$$-x=-8$$' },
                  { type: 'text', content: '$$x=8$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{6}{x-2}-2=1$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{6}{x-2}-2=1$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}-2+2=1+2$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}=3$$' },
                  { type: 'text', content: '$$\\frac{6}{x-2}(x-2)=3(x-2)$$' },
                  { type: 'text', content: '$$6=3x-6$$' },
                  { type: 'text', content: '$$3x-6=6$$' },
                  { type: 'text', content: '$$3x-6+6=6+6$$' },
                  { type: 'text', content: '$$3x=12$$' },
                  { type: 'text', content: '$$x=4$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2=9$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2=9$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{9}$$' },
                  { type: 'text', content: '$$x=\\pm 3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$(x-3)^2=9$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$(x-3)^2=9$$' },
                  { type: 'text', content: '$$x-3=\\pm\\sqrt{9}$$' },
                  { type: 'text', content: '$$x-3=\\pm 3$$' },
                  { type: 'text', content: '$$x-3+3=\\pm 3 + 3$$' },
                  { type: 'text', content: '$$x=\\pm 3 + 3$$' },
                  { type: 'text', content: '$$x=3 + 3$$' },
                  { type: 'text', content: '$$x=6$$' },
                  { type: 'text', content: '$$x=-3 + 3$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=6$$' },
                  { type: 'text', content: '$$x=0$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2+5x-3=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2+5x-3=0$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{5^2-4\\cdot 2\\cdot (-3)}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{25+24}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm\\sqrt{49}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5\\pm 7}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-5 + 7}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{2}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=\\frac{-12}{4}$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{1}{2}$$' },
                  { type: 'text', content: '$$x=-3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2+4x-5=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2+4x-5=0$$' },
                  { type: 'text', content: '$$x^2+4x-5+5=0+5$$' },
                  { type: 'text', content: '$$x^2+4x=5$$' },
                  { type: 'text', content: '$$x^2+4x+\\left(\\frac{4}{2}\\right)^2=5+\\left(\\frac{4}{2}\\right)^2$$' },
                  { type: 'text', content: '$$x^2+4x+4=5+4$$' },
                  { type: 'text', content: '$$x^2+4x+4=9$$' },
                  { type: 'text', content: '$$(x+2)^2=9$$' },
                  { type: 'text', content: '$$x+2=\\pm\\sqrt{9}$$' },
                  { type: 'text', content: '$$x+2=\\pm 3$$' },
                  { type: 'text', content: '$$x=\\pm 3 - 2$$' },
                  { type: 'text', content: '$$x=3 - 2$$' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: '$$x=-3 - 2$$' },
                  { type: 'text', content: '$$x=-5$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: '$$x=-5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^2-2x-3=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^2-2x-3=0$$' },
                  { type: 'text', content: '$$(x-3)(x+1)=0$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$5x^2-0.8x=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$5x^2-0.8x=0$$' },
                  { type: 'text', content: '$$(5x^2-0.8x)\\cdot 10=0 \\cdot 10$$' },
                  { type: 'text', content: '$$50x^2-8x=0$$' },
                  { type: 'text', content: '$$x(50x-8)=0$$' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$50x-8=0$$' },
                  { type: 'text', content: '$$50x-8+8=0+8$$' },
                  { type: 'text', content: '$$50x=8$$' },
                  { type: 'text', content: '$$x=\\frac{4}{25}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=0$$' },
                  { type: 'text', content: '$$x=\\frac{4}{25}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x-\\frac{3}{x+2}=x$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x-\\frac{3}{x+2}=x$$' },
                  { type: 'text', content: '$$2x(x+2)-\\frac{3}{x+2}(x+2)=x(x+2)$$' },
                  { type: 'text', content: '$$2x^2+4x-3=x^2+2x$$' },
                  { type: 'text', content: '$$2x^2+4x-3-x^2-2x=x^2+2x-x^2-2x$$' },
                  { type: 'text', content: '$$x^2+2x-3=0$$' },
                  { type: 'text', content: '$$(x+3)(x-1)=0$$' },
                  { type: 'text', content: '$$x=-3$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x+\\frac{10}{2x+1}=4$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x+\\frac{10}{2x+1}=4$$' },
                  { type: 'text', content: '$$x(2x+1)+\\frac{10}{2x+1}(2x+1)=4(2x+1)$$' },
                  { type: 'text', content: '$$2x^2+x+10=8x+4$$' },
                  { type: 'text', content: '$$2x^2+x+10-8x-4=8x+4-8x-4$$' },
                  { type: 'text', content: '$$2x^2-7x+6=0$$' },
                  { type: 'text', content: '$$x=\\frac{7\\pm\\sqrt{49-4\\cdot 12}}{2\\cdot 2}$$' },
                  { type: 'text', content: '$$x=\\frac{7\\pm 1}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{7+ 1}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{8}{4}$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=\\frac{7- 1}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{6}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{3}{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=\\frac{3}{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{x^2-2x}{x-1}=-2$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{x^2-2x}{x-1}=-2$$' },
                  { type: 'text', content: '$$\\frac{x^2-2x}{x-1}(x-1)=-2(x-1)$$' },
                  { type: 'text', content: '$$x^2-2x=-2x+2$$' },
                  { type: 'text', content: '$$x^2-2x+2x-2=-2x+2+2x-2$$' },
                  { type: 'text', content: '$$x^2-2=0$$' },
                  { type: 'text', content: '$$x^2-2+2=0+2$$' },
                  { type: 'text', content: '$$x^2=2$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{2}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\sqrt{2}$$' },
                  { type: 'text', content: '$$x=-\\sqrt{2}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\frac{1}{x-1}+\\frac{2}{x-2}=3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\frac{1}{x-1}+\\frac{2}{x-2}=3$$' },
                  { type: 'text', content: '$$\\frac{(x-1)(x-2)}{x-1}+\\frac{2(x-1)(x-2)}{x-2}=3(x-1)(x-2)$$' },
                  { type: 'text', content: '$$(x-2)+2(x-1)=3(x-1)(x-2)$$' },
                  { type: 'text', content: '$$(x-2)+2(x-1)=3(x^2-3x+2)$$' },
                  { type: 'text', content: '$$x-2+2x-2=3x^2-9x+6$$' },
                  { type: 'text', content: '$$3x^2-9x+6=x-2+2x-2$$' },
                  { type: 'text', content: '$$3x^2-9x+6=-4+3x$$' },
                  { type: 'text', content: '$$3x^2-9x+6-3x+4=-4+3x-3x+4$$' },
                  { type: 'text', content: '$$3x^2-12x+10=0$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm \\sqrt{144-4\\cdot 3\\cdot 10}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm \\sqrt{144-120}}{2\\cdot 3}$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm \\sqrt{24}}{6}$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm \\sqrt{4\\cdot 6}}{6}$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm \\sqrt{4}\\sqrt{6}}{6}$$' },
                  { type: 'text', content: '$$x=\\frac{12\\pm 2\\sqrt{6}}{6}$$' },
                  { type: 'text', content: '$$x=\\frac{6\\pm \\sqrt{6}}{3}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{6 + \\sqrt{6}}{3}$$' },
                  { type: 'text', content: '$$x=\\frac{6 - \\sqrt{6}}{3}$$' }
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
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^4-7x^2+12=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^4-7x^2+12=0$$' },
                  { type: 'text', content: '$$(x^2)^2-7x^2+12=0$$' },
                  { type: 'text', content: '$$u=x^2$$' },
                  { type: 'text', content: '$$u^2-7u+12=0$$' },
                  { type: 'text', content: '$$(u-4)(u-3)=0$$' },
                  { type: 'text', content: '$$u=4$$' },
                  { type: 'text', content: '$$u=3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$u=x^2$$' },
                  { type: 'text', content: '$$x^2=4$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{4}$$' },
                  { type: 'text', content: '$$x=\\pm2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2=3$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{3}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'text', content: '$$x=\\sqrt{3}$$' },
                  { type: 'text', content: '$$x=-\\sqrt{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-3x^4+15x^2-12=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-3x^4+15x^2-12=0$$' },
                  { type: 'text', content: '$$u=x^2$$' },
                  { type: 'text', content: '$$-3u^2+15u-12=0$$' },
                  { type: 'text', content: '$$u=\\frac{-15\\pm\\sqrt{15^2-4(-3)(-12)}}{2(-3)}$$' },
                  { type: 'text', content: '$$u=\\frac{-15\\pm\\sqrt{225-144}}{-6}$$' },
                  { type: 'text', content: '$$u=\\frac{-15\\pm\\sqrt{81}}{-6}$$' },
                  { type: 'text', content: '$$u=\\frac{-15\\pm 9}{-6}$$' },
                  { type: 'text', content: '$$u_1=\\frac{-15+ 9}{-6}$$' },
                  { type: 'text', content: '$$u_1=\\frac{-6}{-6}$$' },
                  { type: 'text', content: '$$u_1=1$$' },
                  { type: 'text', content: '$$u_2=\\frac{-24}{-6}$$' },
                  { type: 'text', content: '$$u_2=4$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x^2=1$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{1}$$' },
                  { type: 'text', content: '$$x=\\pm 1$$' },
                  { type: 'text', content: '$$x^2=4$$' },
                  { type: 'text', content: '$$x=\\pm\\sqrt{4}$$' },
                  { type: 'text', content: '$$x=\\pm 2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=1$$' },
                  { type: 'text', content: '$$x=-1$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$|2x-1|=50$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$|2x-1|=5$$' },
                  { type: 'text', content: '$$2x-1=5$$' },
                  { type: 'text', content: '$$2x-1+1=5+1$$' },
                  { type: 'text', content: '$$2x=6$$' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$2x-1=-5$$' },
                  { type: 'text', content: '$$2x-1+1=-5+1$$' },
                  { type: 'text', content: '$$2x=-4$$' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=3$$' },
                  { type: 'text', content: '$$x=-2$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$3|2a+7|=3a+12$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$3|2a+7|=3a+12$$' },
                  { type: 'text', content: '$$\\frac{3|2a+7|}{3}=\\frac{3a+12}{3}$$' },
                  { type: 'text', content: '$$|2a+7|=a+4$$' },
                  { type: 'text', content: '$$2a+7=a+4$$' },
                  { type: 'text', content: '$$2a+7-a=a+4-a$$' },
                  { type: 'text', content: '$$a+7=4$$' },
                  { type: 'text', content: '$$a+7-7=4-7$$' },
                  { type: 'text', content: '$$a=-3$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$|2a+7|=a+4$$' },
                  { type: 'text', content: '$$2a+7=-(a+4)$$' },
                  { type: 'text', content: '$$2a+7=-a-4$$' },
                  { type: 'text', content: '$$2a+7+a=-a-4+a$$' },
                  { type: 'text', content: '$$3a+7=-4$$' },
                  { type: 'text', content: '$$3a+7-7=-4-7$$' },
                  { type: 'text', content: '$$3a=-11$$' },
                  { type: 'text', content: '$$\\frac{3a}{3}=\\frac{-11}{3}$$' },
                  { type: 'text', content: '$$a=-\\frac{11}{3}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$a=-3$$' },
                  { type: 'text', content: '$$a=-\\frac{11}{3}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-8+\\sqrt{5a-5}=-3$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-8+\\sqrt{5a-5}=-3$$' },
                  { type: 'text', content: '$$-8+\\sqrt{5a-5}+8=-3+8$$' },
                  { type: 'text', content: '$$\\sqrt{5a-5}=5$$' },
                  { type: 'text', content: '$$(\\sqrt{5a-5})^2=5^2$$' },
                  { type: 'text', content: '$$5a-5=25$$' },
                  { type: 'text', content: '$$5a-5+5=25+5$$' },
                  { type: 'text', content: '$$5a=30$$' },
                  { type: 'text', content: '$$a=6$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$\\sqrt{6x-23}=\\sqrt{12-x}$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$\\sqrt{6x-23}=\\sqrt{12-x}$$' },
                  { type: 'text', content: '$$(\\sqrt{6x-23})^2=(\\sqrt{12-x})^2$$' },
                  { type: 'text', content: '$$6x-23=12-x$$' },
                  { type: 'text', content: '$$6x-23+x=12-x+x$$' },
                  { type: 'text', content: '$$7x-23=12$$' },
                  { type: 'text', content: '$$7x-23+23=12+23$$' },
                  { type: 'text', content: '$$7x=35$$' },
                  { type: 'text', content: '$$\\frac{7x}{7}=\\frac{35}{7}$$' },
                  { type: 'text', content: '$$x=5$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^3-3x^2-4x+12=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^3-3x^2-4x+12=0$$' },
                  { type: 'text', content: '$$(x^3-3x^2)+(-4x+12)=0$$' },
                  { type: 'text', content: '$$x^2(x-3)-4(x-3)=0$$' },
                  { type: 'text', content: '$$(x^2-4)(x-3)=0$$' },
                  { type: 'text', content: '$$(x-2)(x+2)(x-3)=0$$' },
                  { type: 'text', content: '$$x=2$$' },
                  { type: 'text', content: '$$x=-2$$' },
                  { type: 'text', content: '$$x=3$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$x^3-3x^2+3x-1=0$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$x^3-3x^2+3x-1=0$$' },
                  { type: 'text', content: '$$a^3-3a^2b+2ab^2-b^3=(a-b)^3$$' },
                  { type: 'text', content: '$$(x-1)^3=0$$' },
                  { type: 'text', content: '$$x=1$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$2x^2+14x=-19$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$2x^2+14x=-19$$' },
                  { type: 'text', content: '$$2x^2+14x+19=-19+19$$' },
                  { type: 'text', content: '$$2x^2+14x+19=0$$' },
                  { type: 'text', content: '$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$' },
                  { type: 'text', content: '$$x=\\frac{-14\\pm\\sqrt{14^2-4(2)(19)}}{2(2)}$$' },
                  { type: 'text', content: '$$x=\\frac{-14\\pm\\sqrt{44}}{4}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=\\frac{-14+\\sqrt{44}}{4}$$' },
                  { type: 'text', content: '$$x=\\frac{-14-\\sqrt{44}}{4}$$' }
                ]
              },
              {
                type: 'task',
                content: [
                  { type: 'main-title', content: '[Решите] уравнение' },
                  { type: 'text', content: '$$-3x^2+x=-5$$' }
                ],
                correctAnswer: [
                  { type: 'text', content: '$$-3x^2+x=-5$$' },
                  { type: 'text', content: '$$-3x^2+x+5=-5+5$$' },
                  { type: 'text', content: '$$-3x^2+x+5=0$$' },
                  { type: 'text', content: '$$x=\\frac{-1\\pm\\sqrt{1^2-4(-3)(5)}}{2(-3)}$$' },
                  { type: 'text', content: '$$x=\\frac{-1\\pm\\sqrt{61}}{-6}$$' },
                  { type: 'margin' },
                  { type: 'text', content: '$$x=-\\frac{-1+\\sqrt{61}}{6}$$' },
                  { type: 'text', content: '$$x=\\frac{1+\\sqrt{61}}{6}$$' }
                ]
              }
            ]
          }
        ]
      }

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
