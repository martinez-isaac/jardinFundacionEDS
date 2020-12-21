var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ModalUno = function ModalUno(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ id: "myModal", className: "modal" },
			React.createElement(
				"div",
				{ className: "modal-content azul-back-shape" },
				React.createElement(
					"div",
					{ className: "modal-header azul-back" },
					React.createElement(
						"span",
						{ className: "close", id: "closemodalbtn", type: "button", onClick: props.close },
						"x"
					),
					React.createElement(
						"h2",
						null,
						props.title
					)
				),
				React.createElement(
					"div",
					{ className: "modal-body" },
					props.body
				),
				React.createElement(
					"div",
					{ className: "modal-footer" },
					React.createElement(
						"a",
						null,
						props.footer
					)
				)
			)
		)
	);
};

var GaleriaSimple = function GaleriaSimple(props) {
	var _React$useState = React.useState(0),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    myFoto = _React$useState2[0],
	    setMyFoto = _React$useState2[1];

	var plusSlides = function plusSlides(key) {
		var suma = myFoto + key;
		if (suma > props.pics.length - 1) {
			setMyFoto(0);
		} else if (suma < 0) {
			setMyFoto(props.pics.length - 1);
		} else {
			setMyFoto(suma);
		}
	};
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "card-one cero " + props.color },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "foto-container" },
					props.pics ? React.createElement(
						React.Fragment,
						null,
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							props.pics.map(function (item, key) {
								return React.createElement(
									React.Fragment,
									null,
									myFoto === key && React.createElement(
										React.Fragment,
										null,
										React.createElement(
											Styles,
											{ link: item.link },
											React.createElement(
												"div",
												{ className: "numbertext" },
												myFoto + 1,
												" / ",
												props.pics.length
											),
											React.createElement(
												"div",
												{ className: "text-block" },
												React.createElement(
													"div",
													{ className: "col-12" },
													React.createElement(
														"h4",
														null,
														item.title
													)
												),
												React.createElement(
													"div",
													{ className: "col-12" },
													React.createElement(
														"p",
														null,
														item.description
													)
												)
											)
										),
										React.createElement(
											"a",
											{ className: "prev fotosmove", onClick: function onClick() {
													return plusSlides(-1);
												} },
											" ",
											"<"
										),
										React.createElement(
											"a",
											{ className: "next fotosmove", onClick: function onClick() {
													return plusSlides(1);
												} },
											" ",
											">"
										)
									)
								);
							})
						)
					) : React.createElement(
						"p",
						null,
						"Cargando Fotos..."
					)
				)
			)
		)
	);
};

var Escuela = function Escuela(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-12" },
				React.createElement(
					"h2",
					{ className: "col-12 cero" },
					"Escuela Particular de Parvulos- Ej\xE9rcito de Savaci\xF3n"
				),
				React.createElement(
					"h5",
					{ className: "col-12 cero" },
					"Reconocida por el Ministerio de Educaci\xF3n RES. 01270"
				)
			),
			React.createElement(
				"div",
				{ className: "col-12 cero" },
				React.createElement(
					"div",
					{ className: "col-12 col-b-7" },
					React.createElement(
						"p",
						null,
						"Somos una comunidad educativa con 20 a\xF1os de trabajar al servicio de los ni\xF1os y sus familias. Nuestro personal cuenta con la experiencia, conocimientos y la vocaci\xF3n necesarios para hacer del aprendizaje una vivencia significativa."
					),
					React.createElement(
						"p",
						null,
						React.createElement(
							"ul",
							{ className: "lista rojo" },
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Metodo Matte de Ense\xF1anza."
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Apoyo de Profesionales."
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Psicopedagogo - Fonoaudi\xF3loga"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Educaci\xF3n Diferencial"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Profesor Educaci\xF3n F\xEDsica -Proyecto Integraci\xF3n PIE"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Proyecto SEP - Apoyo Laboratorio Tecnol\xF3gico"
								)
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-12 col-b-5" },
					props.fotos && React.createElement(GaleriaSimple, { pics: props.fotos })
				)
			)
		)
	);
};

var Jardin = function Jardin(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-12" },
				React.createElement(
					"h2",
					{ className: "col-12 cero" },
					"Jardin Infantil \"Las Acacias\""
				)
			),
			React.createElement(
				"div",
				{ className: "col-12 cero" },
				React.createElement(
					"div",
					{ className: "col-12 col-b-7" },
					React.createElement(
						"p",
						null,
						"Somos una comunidad educativa con 20 a\xF1os de trabajar al servicio de los ni\xF1os y sus familias. Nuestro personal cuenta con la experiencia, conocimientos y la vocaci\xF3n necesarios para hacer del aprendizaje una vivencia significativa."
					),
					React.createElement(
						"p",
						null,
						React.createElement(
							"ul",
							{ className: "lista rojo" },
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"P.E.I. Proyecto Educativo Institucional "
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Curriculum Integra"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Medio Menor - Medio Mayor"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Alimentaci\xF3n D.A.O."
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Desayuno - Almuerzo - Once "
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									null,
									"Horario Atenci\xF3n 08:30 a 16:30 hrs"
								)
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-12 col-b-5" },
					props.fotos && React.createElement(GaleriaSimple, { pics: props.fotos })
				)
			)
		)
	);
};
var Cristiana = function Cristiana(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-12" },
				React.createElement(
					"h2",
					{ className: "col-12 cero" },
					"Educaci\xF3n Cristiana"
				)
			),
			React.createElement(
				"div",
				{ className: "col-12 cero" },
				React.createElement(
					"div",
					{ className: "col-12 col-b-7" },
					React.createElement(
						"p",
						null,
						"La espiritualidad de los ni\xF1os y ni\xF1as es una valiosa herramienta para cultivar su serenidad y paz interior y as\xED ayudar su sistema inmune. Orar o rezar junto con ellos reafirma que no est\xE1n solos y que Dios es un amigo cercano que les acompa\xF1a en momentos alegres y dif\xEDciles."
					)
				),
				React.createElement(
					"div",
					{ className: "col-12 col-b-5" },
					props.fotos && React.createElement(GaleriaSimple, { pics: props.fotos })
				)
			)
		)
	);
};

var Tarjeta = function Tarjeta(props) {
	return React.createElement(
		"div",
		{ className: "card-containt" },
		React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-8 cero" },
				React.createElement(
					"h3",
					{ className: "align-right" },
					props.title
				)
			),
			React.createElement(
				"div",
				{ className: "col-4 cero" },
				React.createElement("img", { src: props.svg, className: "animacion-informaciones" })
			)
		)
	);
};

var Tarjetas = function Tarjetas(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "card-three", onClick: function onClick() {
					return props.change('Escuela', React.createElement(Escuela, { fotos: props.fotos }));
				} },
			React.createElement(Tarjeta, {
				title: "Escuela Particular de Parvulos",
				svg: "./views/img/svg/escuela-de-parvulos.svg" })
		),
		React.createElement(
			"div",
			{ className: "card-three", onClick: function onClick() {
					return props.change('Jardin', React.createElement(Jardin, { fotos: props.fotos }));
				} },
			React.createElement(
				"div",
				{ className: "card-containt" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-4 cero" },
						React.createElement("div", { id: "ni\xF1o-jardin" })
					),
					React.createElement(
						"div",
						{ className: "col-8 cero" },
						React.createElement(
							"h3",
							null,
							"Jardin Infantil \"Las Acacias\""
						)
					)
				)
			)
		),
		React.createElement(
			"div",
			{ className: "card-three", onClick: function onClick() {
					return props.change('Cristiana', React.createElement(Cristiana, { fotos: props.fotos }));
				} },
			React.createElement(
				"div",
				{ className: "card-containt" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-4 cero" },
						React.createElement("div", { id: "educacion-cristiana" })
					),
					React.createElement(
						"div",
						{ className: "col-8 cero" },
						React.createElement(
							"h3",
							null,
							"Educaci\xF3n Cristiana"
						)
					)
				)
			)
		),
		React.createElement(
			"a",
			{ href: "https://www.fundacionescuelaseds.com", target: "_blank" },
			React.createElement(
				"div",
				{ className: "card-three" },
				React.createElement(
					"div",
					{ className: "card-containt" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-8 cero" },
							React.createElement(
								"h3",
								{ id: "fundacion" },
								"Fundaci\xF3n para la Educaci\xF3n Ej\xE9rcito de Salvaci\xF3n"
							)
						),
						React.createElement(
							"div",
							{ className: "col-4 cero" },
							React.createElement("div", { id: "logofundacion" })
						)
					)
				)
			)
		),
		React.createElement(
			"a",
			{ href: "https://www.integra.cl", target: "_blank" },
			React.createElement(
				"div",
				{ className: "card-three" },
				React.createElement(
					"div",
					{ className: "card-containt" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h3",
								null,
								"Fundaci\xF3n Integra"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement("div", { id: "logointegra" })
						)
					)
				)
			)
		),
		React.createElement(
			"a",
			{ href: "https://www.mineduc.cl", target: "_blank" },
			React.createElement(
				"div",
				{ className: "card-three" },
				React.createElement(
					"div",
					{ className: "card-containt" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h3",
								null,
								"Ministerio de Educaci\xF3n"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement("div", { id: "mineduc" })
						)
					)
				)
			)
		),
		React.createElement(
			"div",
			{ className: "card-three" },
			React.createElement(
				"div",
				{ className: "card-containt" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-12 cero" },
						React.createElement(
							"h3",
							null,
							"Descarga nuestra App"
						)
					),
					React.createElement(
						"div",
						{ className: "col-12 cero" },
						React.createElement("div", { id: "app" })
					)
				)
			)
		)
	);
};

function TarjetasInformacion() {
	var _React$useState3 = React.useState(false),
	    _React$useState4 = _slicedToArray(_React$useState3, 2),
	    loading = _React$useState4[0],
	    setLoading = _React$useState4[1];

	var _React$useState5 = React.useState(null),
	    _React$useState6 = _slicedToArray(_React$useState5, 2),
	    message = _React$useState6[0],
	    setMessage = _React$useState6[1];

	var _React$useState7 = React.useState(false),
	    _React$useState8 = _slicedToArray(_React$useState7, 2),
	    modal = _React$useState8[0],
	    setModal = _React$useState8[1];

	var _React$useState9 = React.useState(''),
	    _React$useState10 = _slicedToArray(_React$useState9, 2),
	    body = _React$useState10[0],
	    setBody = _React$useState10[1];

	var _React$useState11 = React.useState(null),
	    _React$useState12 = _slicedToArray(_React$useState11, 2),
	    fotos = _React$useState12[0],
	    setFotos = _React$useState12[1];

	var closeModal = function closeModal() {
		setModal(false);
		setBody('');
	};
	var changeCard = function changeCard(name, componente) {
		if (name === 'Escuela' || name === 'Jardin' || name === 'Cristiana') {
			setLoading(true);
			var Config = {
				'content-type': 'application/json;charset=UTF-8'
			};
			var datos = {
				fotosCategoria: name
			};
			var URL = "https://api.educandoconamor.cl/api/index.php";
			fetch(URL, {
				method: 'POST',
				body: JSON.stringify(datos),
				headers: Config
			}).then(function (res) {
				return res.json();
			}).catch(function (error) {
				setMessage('Error: ' + error);
			}).then(function (response) {
				if (response.message) {
					setMessage(JSON.stringify(response.message) + ' ' + JSON.stringify(response.errors));
				} else if (response.fotos) {
					setFotos(response.fotos);
				} else {
					setMessage('Error Inesperado: Revisa tu conexión a internet.');
				}
			});
			setBody(componente);
			setModal(true);
			setLoading(false);
		}
	};
	return React.createElement(
		React.Fragment,
		null,
		modal && React.createElement(ModalUno, {
			title: "Informacion Importante",
			body: body,
			close: closeModal
		}),
		React.createElement(
			"div",
			{ className: "animation-right" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-12" },
					React.createElement(
						"div",
						{ className: "col-12" },
						React.createElement(
							"h3",
							null,
							"Informaci\xF3n Importante"
						)
					),
					React.createElement(
						"div",
						{ className: "col-12 cero" },
						React.createElement(
							"div",
							{ className: "card-four scrollea" },
							React.createElement(
								"div",
								{ className: "card-containt-two container" },
								React.createElement(Tarjetas, { change: changeCard, fotos: fotos })
							)
						)
					)
				)
			)
		)
	);
}

var domContainer = document.getElementById('tarjetas-informacion');
ReactDOM.render(React.createElement(TarjetasInformacion, null), domContainer);