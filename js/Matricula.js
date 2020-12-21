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

var MatriculaBody = function MatriculaBody() {
	var _React$useState = React.useState(null),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    tipo = _React$useState2[0],
	    setTipo = _React$useState2[1];

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "row" },
			tipo && React.createElement(
				"div",
				{ className: "col-12" },
				React.createElement(
					"span",
					{ className: "close rojo", type: "button", onClick: function onClick() {
							return setTipo(null);
						} },
					"\u2190 Volver "
				)
			),
			!tipo ? React.createElement(
				React.Fragment,
				null,
				React.createElement(
					"div",
					{ className: "col-12 align-center" },
					React.createElement(
						"div",
						{ className: "col-12" },
						React.createElement(
							"h2",
							{ className: "cero" },
							"Selecci\xF3n de Nivel"
						)
					),
					React.createElement(
						"div",
						{ className: "col-12" },
						React.createElement(
							"p",
							{ className: "cero" },
							"Selecciona el nivel del ni\xF1o o ni\xF1a postulante."
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-6" },
					React.createElement(
						"button",
						{ className: "rojo-back-noshape col-12", onClick: function onClick() {
								return setTipo('school');
							} },
						"Escuela"
					)
				),
				React.createElement(
					"div",
					{ className: "col-6" },
					React.createElement(
						"button",
						{ className: "rojo-back-noshape col-12", onClick: function onClick() {
								return setTipo('garden');
							} },
						"Jardin"
					)
				)
			) : React.createElement(
				React.Fragment,
				null,
				tipo === 'school' && React.createElement(
					React.Fragment,
					null,
					React.createElement(
						"div",
						{ className: "text-left col-12" },
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h3",
								{ className: "cero" },
								"ADMISI\xD3N ONLINE"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h6",
								{ className: "cero" },
								"WWW.SISTEMADEADMISIONESCOLAR.CL"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"p",
								{ className: "cero" },
								"El principal objetivo del Sistema de Admisi\xF3n Escolar es garantizar que las familias puedan elegir el proyecto educativo que mejor coincida con la educaci\xF3n que desean para sus hijos, a trav\xE9s de un sistema centralizado, confiable y transparente que les ayude a optimizar de mejor manera su tiempo."
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"h5",
								{ className: "cero" },
								"\xBFQui\xE9nes deben postular?"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"p",
								null,
								"Todas aquellas familias que deseen que sus hijos o hijas:"
							),
							React.createElement(
								"ul",
								{ className: "lista rojo" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Asistan por primera vez a un establecimiento educacional Municipal o Particular Subvencionado."
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Ingresen a PreK\xEDnder en un colegio Municipal o Particular Subvencionado."
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Deseas cambiarlo a otro establecimiento subvencionado por el Estado. "
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"a",
								{ className: "cero rojo" },
								"No deben participar"
							),
							React.createElement(
								"a",
								{ className: "cero" },
								" del Sistema de Admisi\xF3n si:"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"ul",
								{ className: "lista rojo" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Deseas que tu hijo o hija contin\xFAe en el mismo establecimiento en el que se encuentra matriculado. "
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Deseas cambiar a tu hijo o hija a un colegio Particular Pagado. "
									)
								)
							)
						)
					)
				),
				tipo === 'garden' && React.createElement(
					React.Fragment,
					null,
					React.createElement(
						"div",
						{ className: "text-left col-12" },
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h3",
								{ className: "cero" },
								"ADMISI\xD3N JARDIN"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"h5",
								null,
								"Requisitos:"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"ul",
								{ className: "lista rojo" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Registro Social de Hogares."
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Certificado de Nacimiento de la ni\xF1a o ni\xF1o."
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										null,
										"Carnet de control (vacunas al d\xEDa)."
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"h5",
								null,
								"Horarios de Atenci\xF3n"
							)
						),
						React.createElement(
							"div",
							{ className: "col-12" },
							React.createElement(
								"p",
								null,
								"De Lunes a Viernes de 9 a 16 horas."
							)
						)
					)
				)
			)
		)
	);
};

function Matricula() {
	var toggleModal = function toggleModal() {
		document.getElementById('matricula-modal').style.display = "none";
	};
	return React.createElement(
		"div",
		{ className: "modal" },
		React.createElement(ModalUno, {
			title: "Matricula 2021",
			body: React.createElement(MatriculaBody, null),
			footer: "Fundaci\xF3n para la Educaci\xF3n - Ej\xE9rcito de Salvaci\xF3n",
			close: toggleModal
		})
	);
}

var domContainer = document.getElementById('matricula-modal');
ReactDOM.render(React.createElement(Matricula, null), domContainer);