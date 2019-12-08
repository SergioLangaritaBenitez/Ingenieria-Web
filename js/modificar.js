
var myList = [
  {"_id":0,"titulo":"1984","autor":["George Orwell"],"anno":"1948","estado":"Comprado"},
{"_id":1,"titulo":"Así habló zaratustra","autor":["Nietzsche"],"anno":"1883","estado":"Comprado"},
{"_id":2,"titulo":"Antimanual de filosofía","autor":["Michel Onfray"],"anno":"2001","estado":"Comprado"},
{"_id":3,"titulo":"Diálogos sobre la religión natural","autor":["David Hume"],"anno":"1779","estado":"Comprado"},
{"_id":4,"titulo":"Divina Comedia","autor":["Dante Alighieri"],"anno":"1307","estado":"Comprado"},
{"_id":5,"titulo":"Dubliners","autor":["James Joyce"],"anno":"1914","estado":"Comprado"},
{"_id":6,"titulo":"El Aleph","autor":["Jorge Luis Borges"],"anno":"1949","estado":"Comprado"},
{"_id":7,"titulo":"El arte de la guerra","autor":["Sun Tzu"],"anno":"-500","estado":"Comprado"},
{"_id":8,"titulo":"El asesinato de Garcia Lorca","autor":["Ian Gibson"],"anno":"1979","estado":"Comprado"},
{"_id":9,"titulo":"El club de la lucha","autor":["Chuck Palahniuk"],"anno":"1996","estado":"Comprado"},
{"_id":10,"titulo":"El Comisario","autor":["Sven Hassel"],"anno":"1984","estado":"Comprado"},
{"_id":11,"titulo":"El contrato social","autor":["Jean-Jacques Rousseau"],"anno":"1762","estado":"Comprado"},
{"_id":12,"titulo":"El día D la batalla de Normandia","autor":["Antony Beevor"],"anno":"2009","estado":"Comprado"},
{"_id":13,"titulo":"El dia que Nietzsche lloro.","autor":["Irvin d. yalon"],"anno":"1992","estado":"Leido"},
{"_id":14,"titulo":"El guardián entre el centeno.","autor":["Jerome David Salinger"],"anno":"1951","estado":"Comprado"},
{"_id":15,"titulo":"El ingenioso hidalgo don quijote de la mancha","autor":["Miguel de Cervantes"],"anno":"1605","estado":"Comprado"},
{"_id":16,"titulo":"El miedo a la libertad","autor":["Erich Fromm"],"anno":"1941","estado":"Comprado"},
{"_id":17,"titulo":"El nacimiento de la tragedia","autor":["Nietzsche"],"anno":"1872","estado":"Comprado"},
{"_id":18,"titulo":"El padrino","autor":["Mario Puzo"],"anno":"1969","estado":"Comprado"},
{"_id":19,"titulo":"El tragaluz","autor":["Antonio Buero Vallejo"],"anno":"1967","estado":"Comprado"},
{"_id":20,"titulo":"En 2084","autor":["El Chojin"],"anno":"2016","estado":"Comprado"},
{"_id":21,"titulo":"Filosofía para bufones","autor":["Pedro González Calero"],"anno":"2007","estado":"Comprado"},
{"_id":22,"titulo":"Finis Mundi","autor":["Laura Gallego García"],"anno":"1999","estado":"Comprado"},
{"_id":23,"titulo":"Homenaje a Cataluña","autor":["George Orwell"],"anno":"1938","estado":"Comprado"},
{"_id":24,"titulo":"IFNI La guerra que silenció Franco","autor":["Gastón Segura Valero"],"anno":"2006","estado":"Comprado"},
{"_id":25,"titulo":"Investigación sobre el entendimiento humano","autor":["David Hume"],"anno":"1748","estado":"Comprado"},
{"_id":26,"titulo":"La metamorfosis","autor":["Franz Kafka"],"anno":"1915","estado":"Comprado"},
{"_id":27,"titulo":"Fuente Ovejuna","autor":["Lope de Vega"],"anno":"1619","estado":"Comprado"},
{"_id":28,"titulo":"Hamlet","autor":["William Shakespeare"],"anno":"1603","estado":"Comprado"},
{"_id":29,"titulo":"Escritos sobre el materialismo","autor":["Carl Marx"],"anno":"2012","estado":"Comprado"},
{"_id":30,"titulo":"A pesar del muro, la hiedra","autor":["Alberto García Teresa"],"anno":"2017","estado":"Sin Comprar"},
{"_id":31,"titulo":"Contra los franceses(1980)","autor":["Anonimo"],"anno":"1980","estado":"Sin Comprar"},
{"_id":32,"titulo":"Poesias Completas","autor":["Antonio Machado"],"anno":"1975","estado":"Leido"},
{"_id":33,"titulo":"Marianela","autor":["Benito Pérez Galdós"],"anno":"1878","estado":"Comprado"},
{"_id":34,"titulo":"Brendan Behans New York","autor":["Brendan Behan"],"anno":"1964","estado":"Sin Comprar"},
{"_id":35,"titulo":"Mazurca para dos muertos","autor":["Camilo José Cela"],"anno":"1983","estado":"Comprado"},
{"_id":36,"titulo":"El 18 brumario de Luis Bonaparte","autor":["Carl Marx"],"anno":"1852","estado":"Sin Comprar"},
{"_id":37,"titulo":"El Capital","autor":["Carl Marx"],"anno":"1867","estado":"Leido"},
{"_id":38,"titulo":"Armas de destrucción matemática","autor":["Cathy oneil"],"anno":"2016","estado":"Sin Comprar"},
{"_id":39,"titulo":"El anillo de Clarisee: tradición y nihilismo en la literatura moderna","autor":["Claudio Magris"],"anno":"1993","estado":"Sin Comprar"},
{"_id":40,"titulo":"El director","autor":["David Jiménez"],"anno":"2019","estado":"Leido"},
{"_id":41,"titulo":"Auto de fe","autor":["Elias Canetti"],"anno":"1935","estado":"Sin Comprar"},
{"_id":42,"titulo":"Las bicicletas son para el verano","autor":["Fernando Fernán Gómez"],"anno":"1984","estado":"Comprado"},
{"_id":43,"titulo":"Crónica de Dalkey","autor":["Flann OBrien"],"anno":"1964","estado":"Sin Comprar"},
{"_id":44,"titulo":"Rebelión en la granja","autor":["George Orwell"],"anno":"1945","estado":"Leido"},
{"_id":45,"titulo":"Bartleby, la formula della creazione","autor":["Giorgio Agamben"],"anno":"1993","estado":"Sin Comprar"},
{"_id":46,"titulo":"Diván de Oriente y Occidente","autor":["Goethe"],"anno":"1819","estado":"Sin Comprar"},
{"_id":47,"titulo":"A merced de una corriente salvaje","autor":["Henry Roth"],"anno":"1992","estado":"Sin Comprar"},
{"_id":48,"titulo":"Billy Bud","autor":["Herman Melville"],"anno":"1891","estado":"Sin Comprar"},
{"_id":49,"titulo":"Una historia del Mundo","autor":["Hugh Thomas"],"anno":"1979","estado":"Comprado"},
{"_id":50,"titulo":"El azar y la necesidad","autor":["Jacques L.Monod"],"anno":"1970","estado":"Sin Comprar"},
{"_id":51,"titulo":"Ecofascismo","autor":["Jahet Biehl","Peter StaudenMaier"],"anno":"2019","estado":"Sin Comprar"},
{"_id":52,"titulo":"Capitalism in the Web of Life","autor":["Jason W. Moore"],"anno":"2015","estado":"Sin Comprar"},
{"_id":53,"titulo":"Al otoño","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":54,"titulo":"Al sentarme a leer King Lear otra vez","autor":["John Keats"],"anno":"1818","estado":"Sin Comprar"},
{"_id":55,"titulo":"Se lo que estas pensando","autor":["John Verdon"],"anno":"2010","estado":"Comprado"},
{"_id":56,"titulo":"Los Años del miedo","autor":["Juan Eslava Galán"],"anno":"2008","estado":"Comprado"},
{"_id":57,"titulo":"Tao Te Ching","autor":["Lao Tse"],"anno":"-500","estado":"Leido"},
{"_id":58,"titulo":"Los cachorros","autor":["Mario Vargas Llosa"],"anno":"1967","estado":"Comprado"},
{"_id":59,"titulo":"Antifa.El manual Antifascista","autor":["MarK Bray"],"anno":"2017","estado":"Sin Comprar"},
{"_id":60,"titulo":"Guerra mundial Z","autor":["Max Brooks"],"anno":"2006","estado":"Leido"},
{"_id":61,"titulo":"Los santos inocentes","autor":["Miguel Delibes"],"anno":"1981","estado":"Comprado"},
{"_id":62,"titulo":"Adding Insult to Injury","autor":["Nancy Fraser"],"anno":"2008","estado":"Sin Comprar"},
{"_id":63,"titulo":"El principe","autor":["Nicolas Maquiavelo"],"anno":"1532","estado":"Leido"},
{"_id":64,"titulo":"El anticristo","autor":["Nietzsche"],"anno":"1895","estado":"Leido"},
{"_id":65,"titulo":"Sobre el porvenir de nuestas escuelas","autor":["Nietzsche"],"anno":"1872","estado":"Comprado"},
{"_id":66,"titulo":"¿Quién domina el mundo?","autor":["Noam Chomsky"],"anno":"2016","estado":"Leido"},
{"_id":67,"titulo":"Razones para la anarquía","autor":["Noam Chomsky"],"anno":"2005","estado":"Comprado"},
{"_id":68,"titulo":"Brooklyn Follies","autor":["Paul Auster"],"anno":"2005","estado":"Sin Comprar"},
{"_id":69,"titulo":"Así se domina el mundo. Desvelando las claves del poder mundial","autor":["Pedro Baños"],"anno":"2017","estado":"Leido"},
{"_id":70,"titulo":"Política para bufones","autor":["Pedro González Calero"],"anno":"2012","estado":"Comprado"},
{"_id":71,"titulo":"El año que pasé en la bahía de nadie","autor":["Peter Handke"],"anno":"1994","estado":"Sin Comprar"},
{"_id":72,"titulo":"Carta breve para un largo adiós","autor":["Peter Handke"],"anno":"1972","estado":"Sin Comprar"},
{"_id":73,"titulo":"¿Sueñan los androides con ovejas eléctricas?","autor":["Philip K.Dick"],"anno":"1968","estado":"Comprado"},
{"_id":74,"titulo":"Azul de Prusia","autor":["Phillip Kerr"],"anno":"2018","estado":"Sin Comprar"},
{"_id":75,"titulo":"Diccionario de la memoria colectiva","autor":["Ricard Vinyes"],"anno":"2018","estado":"Sin Comprar"},
{"_id":76,"titulo":"El aborto","autor":["Richard Brautigan"],"anno":"1971","estado":"Sin Comprar"},
{"_id":77,"titulo":"Cultura y modernidad : perspectivas filosóficas de Oriente y Occidente","autor":["Richard Rorty"],"anno":"2001","estado":"Sin Comprar"},
{"_id":78,"titulo":"Contingencia, ironía y solidaridad","autor":["Richard Rorty"],"anno":"1989","estado":"Sin Comprar"},
{"_id":79,"titulo":"Cuidar la libertad: entrevistas sobre política y filosofía","autor":["Richard Rorty"],"anno":"2005","estado":"Sin Comprar"},
{"_id":80,"titulo":"Anatomía del facismo","autor":["Robert O.Paxton"],"anno":"2004","estado":"Sin Comprar"},
{"_id":81,"titulo":"El ayudante","autor":["Robert Walser"],"anno":"1908","estado":"Leido"},
{"_id":82,"titulo":"El malestar en la cultura","autor":["Sigmund Freud"],"anno":"1930","estado":"Leido"},
{"_id":83,"titulo":"Rebeldes","autor":["Susan E.Hinton"],"anno":"1967","estado":"Comprado"},
{"_id":84,"titulo":"El hombre en busca de sentido.","autor":["Viktor Emil Frankl"],"anno":"1946","estado":"Leido"},
{"_id":85,"titulo":"Neuromante","autor":["William Gibson"],"anno":"1984","estado":"Leido"},
{"_id":86,"titulo":"El conde de Montecristo","autor":["Alejandro Dumas"],"anno":"1844","estado":"Sin Comprar"},
{"_id":87,"titulo":"Historia de España","autor":["Arturo Pérez-Reverte"],"anno":"2019","estado":"Sin Comprar"},
{"_id":88,"titulo":"Las tiendas de color canelo","autor":["Bruno Schulz"],"anno":"1934","estado":"Sin Comprar"},
{"_id":89,"titulo":"El viaje al fin de la noche","autor":["Céline"],"anno":"1932","estado":"Sin Comprar"},
{"_id":90,"titulo":"Muerte a credito","autor":["Céline"],"anno":"1936","estado":"Sin Comprar"},
{"_id":91,"titulo":"La paradoja democrática.","autor":["Chantal Mouffe"],"anno":"2000","estado":"Sin Comprar"},
{"_id":92,"titulo":"El retorno de lo político.","autor":["Chantal Mouffe"],"anno":"1993","estado":"Sin Comprar"},
{"_id":93,"titulo":"En torno a lo político.","autor":["Chantal Mouffe"],"anno":"2007","estado":"Sin Comprar"},
{"_id":94,"titulo":"Hegemonía y estrategia socialista.","autor":["Chantal Mouffe"],"anno":"2004","estado":"Sin Comprar"},
{"_id":95,"titulo":"El infinito viajar","autor":["Claudio Magris"],"anno":"2005","estado":"Sin Comprar"},
{"_id":96,"titulo":"El estadio de Wimbledon","autor":["Daniele Del Giudice"],"anno":"1983","estado":"Sin Comprar"},
{"_id":97,"titulo":"Llámame Brooklyn","autor":["Eduardo Lago"],"anno":"2006","estado":"Sin Comprar"},
{"_id":98,"titulo":"La urna","autor":["Enrique Banchs"],"anno":"1911","estado":"Sin Comprar"},
{"_id":99,"titulo":"Los Papalagi","autor":["Erich Scheurmann"],"anno":"1920","estado":"Sin Comprar"},
{"_id":100,"titulo":"El orden del día","autor":["Eric Vuillard"],"anno":"2017","estado":"Sin Comprar"},
{"_id":101,"titulo":"Nadie encendía las lámparas","autor":["Felisberto Hernandez"],"anno":"1947","estado":"Sin Comprar"},
{"_id":102,"titulo":"Narraciones incompletas","autor":["Felisberto Hernandez"],"anno":"2015","estado":"Sin Comprar"},
{"_id":103,"titulo":"La educación del estoico","autor":["Fernando Pessoa"],"anno":"1999","estado":"Sin Comprar"},
{"_id":104,"titulo":"Los cuentos de Canteburry","autor":["Geoffrey Chaucer"],"anno":"1476","estado":"Sin Comprar"},
{"_id":105,"titulo":"Lincoln en el bardo","autor":["George Saunders"],"anno":"2017","estado":"Sin Comprar"},
{"_id":106,"titulo":"En busca de mi hermana china","autor":["Georgina Higueras"],"anno":"2018","estado":"Sin Comprar"},
{"_id":107,"titulo":"Idea della prosa","autor":["Giorgio Agamben"],"anno":"1985","estado":"Sin Comprar"},
{"_id":108,"titulo":"El puente","autor":["Hart Crane"],"anno":"1934","estado":"Sin Comprar"},
{"_id":109,"titulo":"Llamalo sueño","autor":["Henry Roth"],"anno":"1934","estado":"Sin Comprar"},
{"_id":110,"titulo":"Mardi","autor":["Herman Melville"],"anno":"1849","estado":"Sin Comprar"},
{"_id":111,"titulo":"La muerte de Virgilio","autor":["Hermann Broch"],"anno":"1945","estado":"Sin Comprar"},
{"_id":112,"titulo":"La pena de Belgica","autor":["Hugo Claus"],"anno":"1983","estado":"Sin Comprar"},
{"_id":113,"titulo":"La superioridad moral de la izquierda","autor":["Ignacio Sanchez-Cuenca"],"anno":"2018","estado":"Sin Comprar"},
{"_id":114,"titulo":"Finnegans Wake","autor":["James Joyce"],"anno":"1939","estado":"Sin Comprar"},
{"_id":115,"titulo":"Los muertos","autor":["James Joyce"],"anno":"1914","estado":"Sin Comprar"},
{"_id":116,"titulo":"Nueve cuentos","autor":["Jerome David Salinger"],"anno":"1953","estado":"Sin Comprar"},
{"_id":117,"titulo":"Franny y Zooey","autor":["Jerome David Salinger"],"anno":"1961","estado":"Sin Comprar"},
{"_id":118,"titulo":"La guerra interminable.","autor":["Joe Haldeman"],"anno":"1974","estado":"Sin Comprar"},
{"_id":119,"titulo":"El secreto de Christine","autor":["John Banville"],"anno":"2006","estado":"Sin Comprar"},
{"_id":120,"titulo":"Oda a Psyche","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":121,"titulo":"Oda sobre una urna griega","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":122,"titulo":"Oda a un ruiseñor","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":123,"titulo":"Oda a la melancolía","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":124,"titulo":"Oda a la indolencia","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":125,"titulo":"Hyperion","autor":["John Keats"],"anno":"1818","estado":"Sin Comprar"},
{"_id":126,"titulo":"La Belle Dame sans merci: una balada","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":127,"titulo":"La caída de Hyperion: un sueño","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":128,"titulo":"Lamia y otros poemas","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":129,"titulo":"La víspera de Sta. Agnes","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":130,"titulo":"La estrella brillante","autor":["John Keats"],"anno":"1819","estado":"Sin Comprar"},
{"_id":131,"titulo":"Endymion: un romance poético","autor":["John Keats"],"anno":"1817","estado":"Sin Comprar"},
{"_id":132,"titulo":"El paraiso perdido","autor":["John Milton"],"anno":"1667","estado":"Sin Comprar"},
{"_id":133,"titulo":"La muerte y la brújula","autor":["Jorge Luis Borges"],"anno":"1942","estado":"Sin Comprar"},
{"_id":134,"titulo":"El relato nacional","autor":["Jose Alvarez Junco","Gregorio de la Fuente"],"anno":"2017","estado":"Sin Comprar"},
{"_id":135,"titulo":"El siglo de la revolución","autor":["Josep Fontana"],"anno":"2017","estado":"Sin Comprar"},
{"_id":136,"titulo":"Las dos muertes de mozart","autor":["Joseph Gelinek"],"anno":"2018","estado":"Sin Comprar"},
{"_id":137,"titulo":"El llano en llamas","autor":["Juan Rulfo"],"anno":"1953","estado":"Sin Comprar"},
{"_id":138,"titulo":"Por favor,cuida de mamá","autor":["Kyung-Sook Shin"],"anno":"2008","estado":"Sin Comprar"},
{"_id":139,"titulo":"La farsa de las starps: La cara oculta del mito emprendedor","autor":["Lopez Menacho"],"anno":"2018","estado":"Sin Comprar"},
{"_id":140,"titulo":"La responsabilidad de las multitudes","autor":["Manuel Azaña"],"anno":"1900","estado":"Sin Comprar"},
{"_id":141,"titulo":"El gran vidrio","autor":["Marcel Duchamp"],"anno":"1923","estado":"Sin Comprar"},
{"_id":142,"titulo":"La ética protestante y el espíritu del capitalismo","autor":["Max Weber"],"anno":"1905","estado":"Sin Comprar"},
{"_id":143,"titulo":"Fortunes of Feminism","autor":["Nancy Fraser"],"anno":"2013","estado":"Sin Comprar"},
{"_id":144,"titulo":"Feminism for the 99%","autor":["Nancy Fraser"],"anno":"2019","estado":"Sin Comprar"},
{"_id":145,"titulo":"El dominio mundial: Elementos del poder y claves geopolíticas","autor":["Pedro Baños"],"anno":"2018","estado":"Sin Comprar"},
{"_id":146,"titulo":"La tregua","autor":["Primo Levi"],"anno":"1963","estado":"Sin Comprar"},
{"_id":147,"titulo":"La caída de Madrid","autor":["Rafael Chirbes"],"anno":"2000","estado":"Sin Comprar"},
{"_id":148,"titulo":"La pesca de la trucha en América","autor":["Richard Brautigan"],"anno":"1967","estado":"Sin Comprar"},
{"_id":149,"titulo":"Forjar nuestro país","autor":["Richard Rorty"],"anno":"1995","estado":"Sin Comprar"},
{"_id":150,"titulo":"La filosofía y el espejo de la naturaleza","autor":["Richard Rorty"],"anno":"1979","estado":"Sin Comprar"},
{"_id":151,"titulo":"El velo Negro","autor":["Rick Moody"],"anno":"2002","estado":"Sin Comprar"},
{"_id":152,"titulo":"El extraño caso del doctor Jekyll y el señor Hyde","autor":["Robert Louis Stevenson"],"anno":"1886","estado":"Sin Comprar"},
{"_id":153,"titulo":"El paseo","autor":["Robert Walser"],"anno":"1917","estado":"Sin Comprar"},
{"_id":154,"titulo":"Los hermanos Tanner","autor":["Robert Walser"],"anno":"1907","estado":"Sin Comprar"},
{"_id":155,"titulo":"Jakob von Gunten","autor":["Robert Walser"],"anno":"1909","estado":"Sin Comprar"},
{"_id":156,"titulo":"Murphy","autor":["Samuel Beckett"],"anno":"1938","estado":"Sin Comprar"},
{"_id":157,"titulo":"La última cinta de Krapp","autor":["Samuel Beckett"],"anno":"1958","estado":"Sin Comprar"},
{"_id":158,"titulo":"El principe moderno","autor":["Simon Pablo"],"anno":"2018","estado":"Sin Comprar"},
{"_id":159,"titulo":"Icaria","autor":["Uwe Timm"],"anno":"2018","estado":"Sin Comprar"},
{"_id":160,"titulo":"El mercader de Venecia","autor":["William Shakespeare"],"anno":"1605","estado":"Sin Comprar"},
{"_id":161,"titulo":"El diario","autor":["Witold Gombrowicz"],"anno":"1969","estado":"Sin Comprar"},
{"_id":162,"titulo":"Pedro o las ambiguedades","autor":["Herman Melville"],"anno":"1852","estado":"Sin Comprar"},
{"_id":163,"titulo":"El enemigo conoce el sistema","autor":["Marta Peirano"],"anno":"2019","estado":"Sin Comprar"},
{"_id":164,"titulo":"Lo que el viento se llevó","autor":["Margaret Mitchell"],"anno":"1936","estado":"Sin Comprar"},
{"_id":165,"titulo":"Guerra Y Paz","autor":["León Tolstói"],"anno":"1869","estado":"Sin Comprar"},
{"_id":166,"titulo":"Contra quiénes luchar","autor":["Jorge Verstrynge"],"anno":"2013","estado":"Sin Comprar"},
{"_id":167,"titulo":"Populismo. El veto de los pueblos","autor":["Jorge Verstrynge"],"anno":"2017","estado":"Sin Comprar"},
{"_id":168,"titulo":"Una sociedad para la Guerra. Los efectos de la guerra en la sociedad industrial","autor":["Jorge Verstrynge"],"anno":"1988","estado":"Sin Comprar"},
{"_id":169,"titulo":"Memorias de un maldito","autor":["Jorge Verstrynge"],"anno":"1999","estado":"Sin Comprar"},
{"_id":170,"titulo":"Sobre el poder del pueblo","autor":["Jorge Verstrynge"],"anno":"2000","estado":"Sin Comprar"},
{"_id":171,"titulo":"R: Rebeldes, revolucionarios y refractarios: ensayo sobre la disidencia","autor":["Jorge Verstrynge"],"anno":"2002","estado":"Sin Comprar"},
{"_id":172,"titulo":"La guerra periférica y el islam revolucionario. Orígenes, reglas y ética de la guerra asimétrica","autor":["Jorge Verstrynge"],"anno":"2005","estado":"Sin Comprar"},
{"_id":173,"titulo":"Frente al Imperio: Guerra Asimétrica y Guerra Total","autor":["Jorge Verstrynge"],"anno":"2007","estado":"Sin Comprar"},
{"_id":174,"titulo":"Proteccionismo y Economía de Gran Espacio","autor":["Jorge Verstrynge"],"anno":"2009","estado":"Sin Comprar"},
{"_id":175,"titulo":"¡Viva la desobediencia! Elogio del refractario","autor":["Jorge Verstrynge"],"anno":"2011","estado":"Sin Comprar"},
{"_id":176,"titulo":"Iliada","autor":["Homero"],"anno":"-762","estado":"Comprado"},
{"_id":177,"titulo":"La Odisea","autor":["Homero"],"anno":"-675","estado":"Comprado"},
{"_id":178,"titulo":"Ángeles Vengadoras","autor":["Lyuba Vinogradova"],"anno":"2017","estado":"Comprado"},
{"_id":179,"titulo":"El arte de conocerse a sí mismo","autor":["Arthur Schopenhauer"],"anno":"1995","estado":"Comprado"},
{"_id":180,"titulo":"El género en disputa:Feminismo y la subversión de la identidad","autor":["Judith Butler"],"anno":"1990","estado":"Comprado"},
{"_id":181,"titulo":"Historia de la revolución francesa","autor":["A.Thiers"],"anno":"1940","estado":"Comprado"},
{"_id":182,"titulo":"Que esperar de la democracia","autor":["Adam Przeworski"],"anno":"2010","estado":"Sin Comprar"},
{"_id":183,"titulo":"Iglesia S.A. Dinero y poder de la multinacional vaticana en España","autor":["Ángel Munárriz"],"anno":"2019","estado":"Sin Comprar"},
{"_id":184,"titulo":"Seven","autor":["Anthony Bruno"],"anno":"1996","estado":"Sin Comprar"},
{"_id":185,"titulo":"La naranja mecanica","autor":["Anthony Burgess"],"anno":"1962","estado":"Comprado"},
{"_id":186,"titulo":"Réquiem polifónico por Occidente","autor":["Augusto Zamora"],"anno":"2018","estado":"Sin Comprar"},
{"_id":187,"titulo":"Construir pueblo. Hegemonía y radicalización de la democracia.","autor":["Chantal Mouffe"],"anno":"2015","estado":"Sin Comprar"},
{"_id":188,"titulo":"Técnica del golpe de estado","autor":["Curzio Malaparte"],"anno":"1931","estado":"Sin Comprar"},
{"_id":189,"titulo":"Locos. Una comedia de gestos","autor":["Felipe Alfau"],"anno":"1936","estado":"Sin Comprar"},
{"_id":190,"titulo":"Un hombre que duerme","autor":["Georges Perec"],"anno":"1967","estado":"Sin Comprar"},
{"_id":191,"titulo":"Bartleby,el escribiente","autor":["Herman Melville"],"anno":"1853","estado":"Comprado"},
{"_id":192,"titulo":"Moby Dick","autor":["Herman Melville"],"anno":"1851","estado":"Sin Comprar"},
{"_id":193,"titulo":"The piazza Tales","autor":["Herman Melville"],"anno":"1856","estado":"Sin Comprar"},
{"_id":194,"titulo":"Telefónica","autor":["Ilsa Barea"],"anno":"2019","estado":"Sin Comprar"},
{"_id":195,"titulo":"Un puente sobre el drina","autor":["Ivo Andric"],"anno":"1945","estado":"Sin Comprar"},
{"_id":196,"titulo":"Ulysses","autor":["James Joyce"],"anno":"1922","estado":"Sin Comprar"},
{"_id":197,"titulo":"Levantad,carpinteros,la viga del tejado y Seymour:una introducción","autor":["Jerome David Salinger"],"anno":"1963","estado":"Sin Comprar"},
{"_id":198,"titulo":"Sueño y poesía","autor":["John Keats"],"anno":"1816","estado":"Sin Comprar"},
{"_id":199,"titulo":"Sobre la primera vez que vi el Homero de Chapman","autor":["John Keats"],"anno":"1816","estado":"Sin Comprar"},
{"_id":200,"titulo":"El mar de las Sirtes","autor":["Julien Gracq"],"anno":"1951","estado":"Sin Comprar"},
{"_id":201,"titulo":"La guerra de las salamandras.","autor":["Karel Capek"],"anno":"1936","estado":"Leido"},
{"_id":202,"titulo":"Unruly practices","autor":["Nancy Fraser"],"anno":"1989","estado":"Sin Comprar"},
{"_id":203,"titulo":"Capitalismo. Una conversación desde la Teoría Crítica","autor":["Nancy Fraser"],"anno":"2018","estado":"Sin Comprar"},
{"_id":204,"titulo":"The Old Is Dying and the New Cannot Be Born","autor":["Nancy Fraser"],"anno":"2019","estado":"Sin Comprar"},
{"_id":205,"titulo":"Redistribution or Recognition?","autor":["Nancy Fraser","Judith Butler"],"anno":"2017","estado":"Sin Comprar"},
{"_id":206,"titulo":"La invención de la soledad","autor":["Paul Auster"],"anno":"1982","estado":"Sin Comprar"},
{"_id":207,"titulo":"Willard y sus trofeos de bolos","autor":["Richard Brautigan"],"anno":"1975","estado":"Sin Comprar"},
{"_id":208,"titulo":"Consecuencias del pragmatismo","autor":["Richard Rorty"],"anno":"1982","estado":"Sin Comprar"},
{"_id":209,"titulo":"El giro lingüístico: dificultades metafilosóficas de la filosofía lingüística","autor":["Richard Rorty"],"anno":"1967","estado":"Sin Comprar"},
{"_id":210,"titulo":"Una ética para laicos","autor":["Richard Rorty"],"anno":"2009","estado":"Sin Comprar"},
{"_id":211,"titulo":"Se abriran las grandes alamedas","autor":["Salvador Allende"],"anno":"2006","estado":"Sin Comprar"},
{"_id":212,"titulo":"¿Por qué la guerra?","autor":["Sigmund Freud","Albert Einstein"],"anno":"1989","estado":"Sin Comprar"},
{"_id":213,"titulo":"Tierra Baldia","autor":["TS Eliot"],"anno":"1922","estado":"Sin Comprar"},
{"_id":214,"titulo":"Sapiens De animales a dioses","autor":["Yuval Noah Harari"],"anno":"2011","estado":"Comprado"},
{"_id":215,"titulo":"The confidence-man:His masquerade","autor":["Herman Melville"],"anno":"1857","estado":"Sin Comprar"},
{"_id":216,"titulo":"Un mundo feliz","autor":["Aldous Huxley"],"anno":"1932","estado":"Sin Comprar"},
{"_id":217,"titulo":"4 3 2 1","autor":["Paul Auster"],"anno":"2017","estado":"Sin Comprar"},
{"_id":218,"titulo":"El país de las últimas cosas","autor":["Paul Auster"],"anno":"1987","estado":"Sin Comprar"},
{"_id":219,"titulo":"El palacio de la luna","autor":["Paul Auster"],"anno":"1989","estado":"Sin Comprar"},
{"_id":220,"titulo":"La música del azar","autor":["Paul Auster"],"anno":"1990","estado":"Sin Comprar"},
{"_id":221,"titulo":"Leviatán","autor":["Paul Auster"],"anno":"1992","estado":"Sin Comprar"},
{"_id":222,"titulo":"Mr.Vértigo","autor":["Paul Auster"],"anno":"1994","estado":"Sin Comprar"},
{"_id":223,"titulo":"Tombuctú","autor":["Paul Auster"],"anno":"1999","estado":"Sin Comprar"},
{"_id":224,"titulo":"El libro de la ilusiones","autor":["Paul Auster"],"anno":"2002","estado":"Sin Comprar"},
{"_id":225,"titulo":"La noche del oráculo","autor":["Paul Auster"],"anno":"2003","estado":"Sin Comprar"},
{"_id":226,"titulo":"Viajes por el Scriptorium","autor":["Paul Auster"],"anno":"2007","estado":"Sin Comprar"},
{"_id":227,"titulo":"Un hombre en la oscuridad","autor":["Paul Auster"],"anno":"2008","estado":"Sin Comprar"},
{"_id":228,"titulo":"Invisible","autor":["Paul Auster"],"anno":"2009","estado":"Sin Comprar"},
{"_id":229,"titulo":"Sunset Park","autor":["Paul Auster"],"anno":"2010","estado":"Sin Comprar"},
{"_id":230,"titulo":"Mein Kampf","autor":["Adolf Hitler"],"anno":"1925","estado":"Sin Comprar"},
{"_id":231,"titulo":"Zweites Buch","autor":["Adolf Hitler"],"anno":"1961","estado":"Sin Comprar"},
{"_id":232,"titulo":"Una casa para siempre, \"libro de relatos y novela a la vez\"","autor":["Enrique Vila-Matas"],"anno":"1988","estado":"Sin Comprar","genero":"Cuento","editorial":"Anagrama"},
{"_id":233,"titulo":"Suicidios ejemplares","autor":["Enrique Vila-Matas"],"anno":"1991","estado":"Sin Comprar","genero":"Cuento","editorial":"Anagrama"},
{"_id":234,"titulo":"El viajero más lento. El arte de no terminar nada","autor":["Enrique Vila-Matas"],"anno":"1992","estado":"Sin Comprar","genero":"Ensayo","editorial":"Anagrama"},
{"_id":235,"titulo":"Exploradores del abismo","autor":["Enrique Vila-Matas"],"anno":"2007","estado":"Sin Comprar","genero":"Cuento","editorial":"Anagrama"},
{"_id":236,"titulo":"Y Pasavento ya no estaba","autor":["Enrique Vila-Matas"],"anno":"2008","estado":"Sin Comprar","genero":"Ensayo","editorial":"Mansalva"},
{"_id":237,"titulo":"Dietario voluble","autor":["Enrique Vila-Matas"],"anno":"2008","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":238,"titulo":"Niña, cuento infantil con ilustraciones de Anuska Allepuz","autor":["Enrique Vila-Matas"],"anno":"2013","estado":"Sin Comprar","genero":"Cuento","editorial":"Alfaguara"},
{"_id":239,"titulo":"Kassel no invita a la lógica","autor":["Enrique Vila-Matas"],"anno":"2014","estado":"Sin Comprar","genero":"Ensayo","editorial":"Seix Barral"},
{"_id":240,"titulo":"Hijos sin hijos","autor":["Enrique Vila-Matas"],"anno":"1993","estado":"Sin Comprar","genero":"Anagrama","editorial":"Anagrama"},
{"_id":241,"titulo":"Recuerdos inventados","autor":["Enrique Vila-Matas"],"anno":"1994","estado":"Sin Comprar","genero":"Cuento","editorial":"Anagrama"},
{"_id":242,"titulo":"Lejos de Veracruz","autor":["Enrique Vila-Matas"],"anno":"1995","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":243,"titulo":"Ella era Hemingway. No soy Auster","autor":["Enrique Vila-Matas"],"anno":"2008","estado":"Sin Comprar","genero":"Ensayo","editorial":"Alfabia"},
{"_id":244,"titulo":"La dublinesca","autor":["Enrique Vila-Matas"],"anno":"2010","estado":"Leido","genero":"Novela","editorial":"Seix Barral"},
{"_id":245,"titulo":"El traje de los domingos","autor":["Enrique Vila-Matas"],"anno":"1995","estado":"Sin Comprar","genero":"Ensayo","editorial":"Huerga y Fierro"},
{"_id":246,"titulo":"Para acabar con los números redondos","autor":["Enrique Vila-Matas"],"anno":"1997","estado":"Sin Comprar","genero":"Ensayo","editorial":"Pre-Textos"},
{"_id":247,"titulo":"Extraña forma de vida","autor":["Enrique Vila-Matas"],"anno":"1997","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":248,"titulo":"El viaje vertical","autor":["Enrique Vila-Matas"],"anno":"1999","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":249,"titulo":"Bartleby y compañia.","autor":["Enrique Vila-Matas"],"anno":"2000","estado":"Leido","genero":"Novela","editorial":"Anagrama"},
{"_id":250,"titulo":"Desde la ciudad nerviosa","autor":["Enrique Vila-Matas"],"anno":"2000","estado":"Sin Comprar","genero":"Ensayo","editorial":"Alfaguara"},
{"_id":251,"titulo":"El mal de Montano","autor":["Enrique Vila-Matas"],"anno":"2002","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":252,"titulo":"Extrañas notas de laboratorio, El otro, el mismo","autor":["Enrique Vila-Matas"],"anno":"2003","estado":"Sin Comprar","genero":"Ensayo","editorial":"El otro,El mismo"},
{"_id":253,"titulo":"Aunque no entendamos nada","autor":["Enrique Vila-Matas"],"anno":"2003","estado":"Sin Comprar","genero":"Ensayo","editorial":"J.C. Sáez Editor"},
{"_id":254,"titulo":"París no se acaba nunca","autor":["Enrique Vila-Matas"],"anno":"2003","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":255,"titulo":"El viento ligero en Parma","autor":["Enrique Vila-Matas"],"anno":"2004","estado":"Sin Comprar","genero":"Ensayo","editorial":"Sexto Piso"},
{"_id":256,"titulo":"Doctor Pasavento","autor":["Enrique Vila-Matas"],"anno":"2005","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":257,"titulo":"Perder teorías","autor":["Enrique Vila-Matas"],"anno":"2010","estado":"Sin Comprar","genero":"Novela","editorial":"Seix Barral"},
{"_id":258,"titulo":"Un lugar solitario","autor":["Enrique Vila-Matas"],"anno":"2011","estado":"Comprado","genero":"Novela","editorial":"Debolsillo"},
{"_id":259,"titulo":"Chet Baker piensa en su arte","autor":["Enrique Vila-Matas"],"anno":"2011","estado":"Sin Comprar","genero":"Cuento","editorial":"Debolsillo"},
{"_id":260,"titulo":"Una vida absolutamente maravillosa.Ensayos selectos","autor":["Enrique Vila-Matas"],"anno":"2011","estado":"Sin Comprar","genero":"Ensayo","editorial":"Debolsillo"},
{"_id":261,"titulo":"Aire de Dylan, memorias falsas del escritor Juan Lancastre","autor":["Enrique Vila-Matas"],"anno":"2012","estado":"Sin Comprar","genero":"Novela","editorial":"Seix Barral"},
{"_id":262,"titulo":"Marienbad eléctrico","autor":["Enrique Vila-Matas"],"anno":"2015","estado":"Sin Comprar","genero":"Ensayo","editorial":"Christian Bourgois"},
{"_id":263,"titulo":"Mac y su contratiempo","autor":["Enrique Vila-Matas"],"anno":"2017","estado":"Comprado","genero":"Novela","editorial":"Seix Barral"},
{"_id":264,"titulo":"Impón tu suerte","autor":["Enrique Vila-Matas"],"anno":"2018","estado":"Sin Comprar","genero":"Ensayo","editorial":"Círculo de Tiza"},
{"_id":265,"titulo":"Because she never asked","autor":["Enrique Vila-Matas"],"anno":"2015","estado":"Sin Comprar","genero":"\\N","editorial":"New Directions"},
{"_id":266,"titulo":"Bastian Scheneider","autor":["Enrique Vila-Matas"],"anno":"2017","estado":"Sin Comprar","genero":"\\N","editorial":"Seix Barral"},
{"_id":267,"titulo":"Esta bruma insensata","autor":["Enrique Vila-Matas"],"anno":"2019","estado":"Comprado","genero":"Novela","editorial":"Seix Barral"},
{"_id":268,"titulo":"Fuera de aquí. Conversaciones con André Gabastou","autor":["Enrique Vila-Matas"],"anno":"2013","estado":"Sin Comprar","genero":"Ensayo","editorial":"Galaxia Gutenberg"},
{"_id":269,"titulo":"Cabinet d´amateur,an oblique novel","autor":["Enrique Vila-Matas"],"anno":"2019","estado":"Sin Comprar","genero":"\\N","editorial":"La Caixa Collection & Whitechapel Gallery"},
{"_id":270,"titulo":"De l´imposture en littérature / De la impostura en literatura. Vila-Matas / Echenoz","autor":["Enrique Vila-Matas"],"anno":"2008","estado":"Sin Comprar","genero":"\\N","editorial":"Editions Meet"},
{"_id":271,"titulo":"Mujer en el espejo contemplando el paisaje","autor":["Enrique Vila-Matas"],"anno":"1973","estado":"Sin Comprar","genero":"Novela","editorial":"Tusquets"},
{"_id":272,"titulo":"La asesina ilustrada","autor":["Enrique Vila-Matas"],"anno":"1977","estado":"Comprado","genero":"Novela","editorial":"Tusquets"},
{"_id":273,"titulo":"Al sur de los párpados","autor":["Enrique Vila-Matas"],"anno":"1980","estado":"Comprado","genero":"Novela","editorial":"Fundamentos"},
{"_id":274,"titulo":"Nunca voy al cine","autor":["Enrique Vila-Matas"],"anno":"1982","estado":"Comprado","genero":"Cuento","editorial":"Laerte"},
{"_id":275,"titulo":"Impostura","autor":["Enrique Vila-Matas"],"anno":"1984","estado":"Comprado","genero":"Novela","editorial":"Tusquets"},
{"_id":276,"titulo":"Historia abreviada de la literatura portátil, mezcla de ficción y ensayo","autor":["Enrique Vila-Matas"],"anno":"1985","estado":"Sin Comprar","genero":"Novela","editorial":"Anagrama"},
{"_id":277,"titulo":"Falcó","autor":["Arturo Pérez-Reverte"],"anno":"2016","estado":"Comprado","nombre_saga":"Serie Falcó","entrega":"1"},
{"_id":278,"titulo":"Sabotaje","autor":["Arturo Pérez-Reverte"],"anno":"2018","estado":"Comprado","nombre_saga":"Serie Falcó","entrega":"3"},
{"_id":279,"titulo":"Corsarios de Levante","autor":["Arturo Pérez-Reverte"],"anno":"2006","estado":"Comprado","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"6"},
{"_id":280,"titulo":"El caballero del jubón amarillo","autor":["Arturo Pérez-Reverte"],"anno":"2003","estado":"Comprado","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"5"},
{"_id":281,"titulo":"El oro del rey","autor":["Arturo Pérez-Reverte"],"anno":"2000","estado":"Comprado","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"4"},
{"_id":282,"titulo":"El puente de los asesinos","autor":["Arturo Pérez-Reverte"],"anno":"2011","estado":"Comprado","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"7"},
{"_id":283,"titulo":"El sol de Breda","autor":["Arturo Pérez-Reverte"],"anno":"1998","estado":"Comprado","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"3"},
{"_id":284,"titulo":"El capitán Alatriste","autor":["Arturo Pérez-Reverte"],"anno":"1996","estado":"Leido","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"1"},
{"_id":285,"titulo":"Limpieza de sangre","autor":["Arturo Pérez-Reverte"],"anno":"1997","estado":"Leido","nombre_saga":"Las aventuras del capitán Alatriste","entrega":"2"},
{"_id":286,"titulo":"Eva","autor":["Arturo Pérez-Reverte"],"anno":"2017","estado":"Comprado","nombre_saga":"Serie Falcó","entrega":"2"},
{"_id":287,"titulo":"Cuidades de la llanura","autor":["Cormac McCarthy"],"anno":"1998","estado":"Comprado","nombre_saga":"Trilogía de la Frontera","entrega":"3"},
{"_id":288,"titulo":"Todos los hermosos caballos","autor":["Cormac McCarthy"],"anno":"1992","estado":"Sin Comprar","nombre_saga":"Trilogía de la Frontera","entrega":"1"},
{"_id":289,"titulo":"En la frontera","autor":["Cormac McCarthy"],"anno":"1994","estado":"Sin Comprar","nombre_saga":"Trilogía de la Frontera","entrega":"2"},
{"_id":290,"titulo":"La caida de Hyperion","autor":["Dan Simmons"],"anno":"1991","estado":"Leido","nombre_saga":"Saga Hyperion","entrega":"2"},
{"_id":291,"titulo":"Hyperion","autor":["Dan Simmons"],"anno":"1989","estado":"Leido","nombre_saga":"Saga Hyperion","entrega":"1"},
{"_id":292,"titulo":"Ciudad de cristal","autor":["Paul Auster"],"anno":"1985","estado":"Comprado","nombre_saga":"La trilogía de Nueva York","entrega":"1"},
{"_id":293,"titulo":"Fantasmas","autor":["Paul Auster"],"anno":"1986","estado":"Comprado","nombre_saga":"La trilogía de Nueva York","entrega":"2"},
{"_id":294,"titulo":"La habitación cerrada","autor":["Paul Auster"],"anno":"1986","estado":"Comprado","nombre_saga":"La trilogía de Nueva York","entrega":"3"},
{"_id":295,"titulo":"Ciberleviatan","autor":["José María Lassalle"],"anno":"2019","estado":"Sin Comprar"},
{"_id":296,"titulo":"La riqueza de las naciones","autor":["Adam Smith"],"anno":"1776","estado":"Sin Comprar"},
{"_id":297,"titulo":"La montaña magica","autor":["Thomas Mann"],"anno":"1924","estado":"Sin Comprar"},
{"_id":298,"titulo":"Las penas del joven Werther","autor":["Goethe"],"anno":"1774","estado":"Sin Comprar"},
{"_id":299,"titulo":"El capote","autor":["Nikolái Gogol"],"anno":"1842","estado":"Sin Comprar"},
{"_id":300,"titulo":"Mis documentos","autor":["Alejandro Zambra"],"anno":"2014","estado":"Sin Comprar"},
{"_id":301,"titulo":"Yo ya he estado aquí: ficciones de la repetición","autor":["Jordi Balló","Xavier Pérez"],"anno":"2005","estado":"Sin Comprar"},
{"_id":302,"titulo":"Museo de la Novela de la Eterna","autor":["Macedonio Fernandéz"],"anno":"1967","estado":"Sin Comprar"},
{"_id":303,"titulo":"Alguien voló sobre el nido del cuco","autor":["Ken Kesey"],"anno":"1962","estado":"Sin Comprar"},
{"_id":304,"titulo":"Viaje al manicomio","autor":["Kate Millett"],"anno":"1990","estado":"Sin Comprar"},

];


/*
 <div class="groupmod group">
    <select name="estado" required>
      <option value="Sin Comprar">Sin Comprar</option>
      <option value="Comprado">Comprado</option>
      <option value="Leido">Leido</option>
    </select>
    <span class="highlight"></span>
    <span class="bar"></span>
  </div>
*/

function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);
  for (var i = 0; i < myList.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = myList[i][columns[colIndex]];
        if (typeof cellValue =="object" && cellValue.length != 1){
          var aux="";
          for (var inCell = 0; inCell < cellValue.length-1; inCell++) {
            aux+=cellValue[inCell]+ " y "
          }
          aux+=cellValue[cellValue.length-1]
        cellValue= aux
        }
        if(colIndex==3){
          if(cellValue=="Sin Comprar"){
            cellValue='<div class="groupmod group">'+
                        '<select name="estado" required>'+
                          '<option value="Sin Comprar" selected>Sin Comprar</option>'+
                          '<option value="Comprado">Comprado</option>'+
                          '<option value="Leido">Leido</option>'+
                        '</select>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                      '</div>'
          }
          if(cellValue=="Comprado"){
            cellValue='<div class="groupmod group">'+
                        '<select name="estado" required>'+
                          '<option value="Sin Comprar">Sin Comprar</option>'+
                          '<option value="Comprado" selected>Comprado</option>'+
                          '<option value="Leido">Leido</option>'+
                        '</select>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                      '</div>'
          }
          if(cellValue=="Leido"){
            cellValue='<div class="groupmod group">'+
                        '<select name="estado" required>'+
                          '<option value="Sin Comprar">Sin Comprar</option>'+
                          '<option value="Comprado">Comprado</option>'+
                          '<option value="Leido" selected>Leido</option>'+
                        '</select>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                      '</div>'
          }
          
        }
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }

    

      
      $(selector).append(row$);
      
    
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if(key == "titulo" ||
      key == "autor" ||
      key == "anno" ||
      key == "estado" || 
      key == "nombre_saga" ||
      key == "entrega"
      ){
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
  }

  $(selector).append(headerTr$);
  
  return columnSet;
}