var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var TarjetaNoticia = function TarjetaNoticia(props) {
	var style = {
		background: "url(" + props.image + ") center",
		backgroundSize: "cover",
		backgroundClip: "padding-box",
		width: "110px",
		height: "110px",
		borderRadius: "50%",
		border: "5px solid #54c0f8"
	};
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-1 cero" },
				React.createElement("div", { style: style })
			),
			React.createElement(
				"div",
				{ className: "col-11 cero" },
				React.createElement(
					"div",
					{ className: "card-one azul",
						id: props.multi ? "noticia-unica" : "noticia-home"
					},
					React.createElement(
						"div",
						{ className: "texto-noticia" },
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"h4",
								null,
								props.title
							)
						),
						React.createElement(
							"div",
							{ className: "col-12 cero" },
							React.createElement(
								"a",
								{ className: "col-12 cero" },
								props.body
							)
						)
					)
				)
			)
		)
	);
};

var Styles = function Styles(props) {
	var style = {
		background: "url(" + props.link + ") no-repeat center",
		backgroundSize: "contain",
		backgrounClip: "padding-box",
		width: "100%",
		height: "220px",
		borderRadius: "9px"
	};
	return React.createElement(
		"div",
		{ style: style },
		props.children
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

var ModalNoticia = function ModalNoticia(props) {
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
						"X"
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
						{ href: "/?page=noticias" },
						React.createElement(
							"a",
							null,
							"Ir a noticias"
						)
					)
				)
			)
		)
	);
};

var ModalMensaje = function ModalMensaje(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			{ id: "mensaje", className: "modal" },
			React.createElement(
				"div",
				{ className: "modal-content rojo-back" },
				React.createElement(
					"div",
					{ className: "modal-header" },
					React.createElement(
						"h2",
						null,
						"\xA1Mensaje Importante!"
					)
				),
				React.createElement(
					"div",
					{ className: "modal-body" },
					React.createElement(
						"a",
						null,
						props.body
					)
				)
			)
		)
	);
};

var ModalCargando = function ModalCargando(props) {
	return React.createElement(
		React.Fragment,
		null,
		props.loading && React.createElement(
			"div",
			{ id: "cargando", className: "modal" },
			React.createElement(
				"div",
				{ className: "modal-content" },
				React.createElement(
					"h3",
					null,
					"CARGANDO..."
				)
			)
		)
	);
};

var Body = function Body(props) {
	return React.createElement(
		"div",
		{ className: "row" },
		React.createElement(
			"div",
			{ className: "col-12 col-b-7" },
			React.createElement(
				"a",
				null,
				props.cuerpo
			)
		),
		React.createElement(
			"div",
			{ className: "col-12 col-b-5" },
			React.createElement(GaleriaSimple, { pics: props.fotos })
		)
	);
};

var Noticia = function Noticia(props) {
	var _React$useState3 = React.useState(false),
	    _React$useState4 = _slicedToArray(_React$useState3, 2),
	    loading = _React$useState4[0],
	    setLoading = _React$useState4[1];

	var _React$useState5 = React.useState(null),
	    _React$useState6 = _slicedToArray(_React$useState5, 2),
	    message = _React$useState6[0],
	    setMessage = _React$useState6[1];

	var _React$useState7 = React.useState([]),
	    _React$useState8 = _slicedToArray(_React$useState7, 2),
	    noticia = _React$useState8[0],
	    setNoticia = _React$useState8[1];

	var _React$useState9 = React.useState([]),
	    _React$useState10 = _slicedToArray(_React$useState9, 2),
	    fotos = _React$useState10[0],
	    setFotos = _React$useState10[1];

	React.useEffect(function () {
		cargarNoticia();
	}, []);

	var cargarNoticia = function cargarNoticia() {
		setLoading(true);
		var Config = {
			'content-type': 'application/json;charset=UTF-8'
		};
		var URL = "https://api.educandoconamor.cl/api/index.php";
		var datos = {
			noticia: props.noticia
		};
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify(datos),
			headers: Config
		}).then(function (res) {
			return res.json();
		}).catch(function (error) {
			return console.log('Error: ' + error);
		}).then(function (response) {
			if (response.message) {
				setMessage(JSON.stringify(response.message) + ' ' + JSON.stringify(response.errors));
			} else if (response.noticia) {
				setNoticia(response.noticia);
				setFotos(response.fotos);
			} else {
				setMessage('Error: Revisa tu conexión a internet.');
			}
		});
		setLoading(false);
	};
	return React.createElement(ModalNoticia, {
		close: props.close,
		title: noticia.titulo ? noticia.titulo : 'Cargando',
		body: React.createElement(Body, { cuerpo: noticia.cuerpo, fotos: fotos })
	});
};

function Tarjeta() {
	var _React$useState11 = React.useState(true),
	    _React$useState12 = _slicedToArray(_React$useState11, 2),
	    page = _React$useState12[0],
	    setPage = _React$useState12[1];

	var _React$useState13 = React.useState(false),
	    _React$useState14 = _slicedToArray(_React$useState13, 2),
	    loading = _React$useState14[0],
	    setLoading = _React$useState14[1];

	var _React$useState15 = React.useState([]),
	    _React$useState16 = _slicedToArray(_React$useState15, 2),
	    noticias = _React$useState16[0],
	    setNoticias = _React$useState16[1];

	var _React$useState17 = React.useState(null),
	    _React$useState18 = _slicedToArray(_React$useState17, 2),
	    noticia = _React$useState18[0],
	    setNoticia = _React$useState18[1];

	var _React$useState19 = React.useState(''),
	    _React$useState20 = _slicedToArray(_React$useState19, 2),
	    message = _React$useState20[0],
	    setMessage = _React$useState20[1];

	React.useEffect(function () {
		cargarNoticias();
		var interval = setInterval(function () {
			setPage(function (page) {
				return !page;
			});
		}, 6000);
		return function () {
			return clearInterval(interval);
		};
	}, []);

	var cargarNoticias = function cargarNoticias() {
		setLoading(true);
		var Config = {
			'content-type': 'application/json;charset=UTF-8'
		};
		var datos = {
			listNoticiasInicio: true
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
			} else if (response.noticias) {
				setNoticias(response.noticias);
			} else {
				setMessage('Error: Error inesperado. Revisa tu conexión a internet.');
			}
		});
		setLoading(false);
	};

	var cerrarNoticia = function cerrarNoticia() {
		return setNoticia(null);
	};

	return React.createElement(
		React.Fragment,
		null,
		loading && React.createElement(ModalCargando, { loading: loading }),
		noticia && React.createElement(Noticia, { noticia: noticia, close: cerrarNoticia }),
		React.createElement(
			"div",
			{ className: "animation-left" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-12" },
					React.createElement(
						"div",
						{ className: "col-9 cero" },
						React.createElement(
							"h3",
							null,
							"\xDAltimas Noticias"
						)
					),
					React.createElement(
						"a",
						{ href: "/?page=noticias" },
						React.createElement(
							"div",
							{ className: "col-3 cero" },
							React.createElement(
								"a",
								{ className: "link azul-claro right-link", id: "ver-noticias" },
								" Ver Todas"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-12 cero" },
					React.createElement(
						React.Fragment,
						null,
						noticias && React.createElement(
							React.Fragment,
							null,
							React.createElement(
								"div",
								{ className: "no-pc" },
								noticias.map(function (item, key) {
									var mostrar = page ? 0 : 1;
									var es = key === mostrar ? true : false;
									if (es) {
										return React.createElement(
											React.Fragment,
											null,
											React.createElement(
												"div",
												{ onClick: function onClick() {
														return setNoticia(item.identificacion);
													} },
												React.createElement(TarjetaNoticia, {
													keys: key,
													title: item.titulo,
													body: item.cuerpo,
													image: item.foto,
													id: item.identificacion,
													page: page,
													multi: false
												})
											)
										);
									}
									return null;
								})
							),
							React.createElement(
								"div",
								{ className: "only-pc" },
								noticias.map(function (item, key) {
									if (page ? key <= 2 : key > 2) {
										return React.createElement(
											React.Fragment,
											null,
											React.createElement(
												"div",
												{ className: "col-12", onClick: function onClick() {
														return setNoticia(item.identificacion);
													} },
												React.createElement(TarjetaNoticia, {
													keys: key,
													title: item.titulo,
													body: item.cuerpo,
													image: item.foto,
													id: item.identificacion,
													page: page,
													multi: false
												})
											)
										);
									}
									return null;
								})
							)
						)
					)
				)
			)
		)
	);
}
var domContainer = document.getElementById('tarjeta-noticias');
ReactDOM.render(React.createElement(Tarjeta, null), domContainer);