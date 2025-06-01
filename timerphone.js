(function () {
    var _id = "7bb8bd5d90717fce7ff2ab0003aaf76d";

    // Проверка на уникальность ID
    while (document.getElementById("timer" + _id)) {
        _id = _id + "0";
    }

    // Создаем контейнер для таймера
    document.write(
        "<div id='timer" + _id + "' style='min-width:393px;height:86px;'></div>"
    );

    // Загружаем скрипт таймера
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";

    // Функция инициализации таймера
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            view: [1, 1, 1, 1],
            type: {
                currentType: "1",
                params: {
                    usertime: true,
                    tz: "3",
                    utc: 1752578400000
                }
            },
            design: {
                type: "plate",
                params: {
                    round: "11",
                    background: "gradient",
                    "background-color": ["#7f6000", "#f4d67a"],
                    effect: "flipchart",
                    space: "0",
                    "separator-margin": "4",
                    "number-font-family": {
                        family: "Comfortaa",
                        link: "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "60",
                    "number-font-color": "#ffffff",
                    padding: "5",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        family: "Comfortaa",
                        link: "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#7f6000"
                }
            },
            designId: 3,
            theme: "white",
            width: 393,
            height: 86
        });

        if (_k != null) {
            l.run();
        }
    };

    // Обработка загрузки скрипта
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") {
            _f(1);
        }
    };

    // Вставка скрипта в <head>
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
