var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function UltimasFotos() {
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
      fotos = _React$useState8[0],
      setFotos = _React$useState8[1];

  React.useEffect(function () {
    cargarFotos();
  }, []);

  var cargarFotos = function cargarFotos() {
    setLoading(true);
    var Config = {
      'content-type': 'application/json;charset=UTF-8'
    };
    var datos = {
      galeria: true
    };
    var URL = 'https://api.educandoconamor.cl/api/index.php';
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: Config
    }).then(function (res) {
      return res.json();
    }).catch(function (error) {
      setMessage('Error: ' + error);
    }).then(function (result) {
      if (result.message) {
        setMessage(JSON.stringify(result.message) + ' ' + JSON.stringify(result.errors));
      } else if (result.fotos) {
        setFotos(result.fotos);
      } else {
        setMessage('Error: Revisa tu conexión a internet.');
      }
    });
    setLoading(false);
  };

  return React.createElement(
    React.Fragment,
    null,
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
            { className: "col-9 cero" },
            React.createElement(
              "h3",
              null,
              "Ultimas Fotos"
            )
          ),
          React.createElement(
            "a",
            { href: "/?page=galeria" },
            React.createElement(
              "div",
              { className: "col-3 cero" },
              React.createElement(
                "a",
                { className: "link azul-claro right-link" },
                "Ver Todas"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-12" },
          React.createElement(GaleriaSimple, { pics: fotos, color: "azul-back-shape" })
        )
      )
    )
  );
}

var domContainer = document.getElementById('ultimas-fotos');
ReactDOM.render(React.createElement(UltimasFotos, null), domContainer);