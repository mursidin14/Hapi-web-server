const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'HomePage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const {username = 'strength'} = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `hai. ${username}`;
            }
            return `hello, ${username}`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    }
]

module.exports = routes;