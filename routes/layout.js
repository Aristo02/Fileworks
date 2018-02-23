var express = require('express');
var router = express.Router();


/* Main Menu */
var menu = [
    {
        name_menu: "Controlador",
        href: "/dashbord",
        icon: "fa fa-tachometer"
    },
    {
        name_menu: "Contabilidade",
        href: "/accounting",
        icon: "fa fa-calculator"
    },
    {
        name_menu: "Pessoas",
        href: "/peoples",
        icon: "fa fa-user-circle-o"
    },
    {
        name_menu: "Empresas",
        href: "/companies",
        icon: "fa fa-building"
    },
    {
        name_menu: "Lançamentos",
        href: "/releases",
        icon: "fa fa-clone"
    },
    {
        name_menu: "Eventos",
        href: "/events",
        icon: "fa fa-glass"
    }
];

/* GET  Main Menu. */
router.get('/menu', function (req, res, next) {

    //res.render('menu', {menuList: menu});

});

module.exports = router;