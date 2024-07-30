
var rkey = get_cookie("rkey")
var host = {
    debug: false,
    settings: {
        'connection.web.callcommand': 'https://peapos.com/',
        'connection.local.basket': {
            Url: '/app/js/LocalStorageBasket.js',
            Function: 'LocalBasket'
        },
        'connection.web.basiscore': 'https://basispanel.ir/apicms',
        'connection.web.accounting': 'https://basispanel.ir/apicms',
        'connection.web.accounting_eshop': `https://www.basisfly.com/eshop-test/${rkey}`,
        'connection.web.media': 'https://basispanel.ir/apicms',
        'default.dbsource.verb': 'post',
        'default.call.verb': 'get',
        'default.viewCommand.groupColumn': 'prpid',
        'default.dmnid': '4689',
        'default.binding.regex': '\\{##([^#]*)##\\}'

    }
}
