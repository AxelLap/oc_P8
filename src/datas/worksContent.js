export const worksContent = [
    {
        'id': "gipecrea",
        'title': 'GipéCréa - artiste peintre',
        'description': "Mon premier projet professionnel, cette mission a consité à créer à partir de zéro un site vitrine responsive permettant à un artiste peintre de montrer et de mettre en valeur son travail. La contrainte ici à été de crééer le site sans maquette en tenant compte des éxigences du client, ce dernier à été très satisfait du résultat ! ",
        'images':
            [
                '/images/gipeSlides/gipe-s-1.webp',
                '/images/gipeSlides/gipe-s-2.webp',
                '/images/gipeSlides/gipe-s-3.webp',
                '/images/gipeSlides/gipe-s-4.webp',
                '/images/gipeSlides/gipe-s-5.webp',

            ],
        'skills': [
            "html",
            "css",
            "javaScript",
            "web-design",
            "responsive design"
        ],
        'git': 'false',
        'gitLink': 'none',
        'uploaded': 'true',
        'siteLink': 'http://gipecrea.free.fr/'
    },
    {
        'id': "sophie",
        'title': "Sophie Bluel - Architecte",
        'description': "Projet d'étude frontend portant sur la maîtrise du fetch et de la manipulation du DOM en javascript, le but était de créer la partie front du site permettant de récupérer et filtrer dynamiquement les travaux de l'architecte depuis le backend via des requêtes API. Le site propose également une authentification pour l'admin via un token et une interface administrateur permettant à la cliente d'ajouter, de supprimer ou de modifier elle même ses travaux sur le site",
        'images': [
            '/images/sophieSlides/sophie-s-1.webp',
            '/images/sophieSlides/sophie-s-2.webp',
            '/images/sophieSlides/sophie-s-3.webp',
            '/images/sophieSlides/sophie-s-4.webp',
            '/images/sophieSlides/sophie-s-5.webp',



        ],
        'skills': [
            "html",
            "css",
            "javaScript",
            "gestion du CRUD coté front",
            "Authentification utilisateur"
        ],
        'git': 'true',
        'gitLink': 'https://github.com/AxelLap/sophie_bluel.git',
        'uploaded': 'false',
        'silteLink': 'none'
    },
    {
        'id': 'kasa',
        'title': "Kasa - Location immobiliere",
        'description': "Projet front de developpement d'une single page application de location immobiliere avec React. Les contraintes de ce projet ont été l'utilisation des composants et des hooks React (useState useEffect) ainsi que de sass pour la partie visuelle afin de créer une interface utilisateur dynamique et esthétique. Le site utilise les paramètres d'URL pour naviguer sur les pages de logements et est également responsive ",
        'images':
            [
                '/images/kasaSlides/kasa-s-1.webp',
                '/images/kasaSlides/kasa-s-2.webp',
                '/images/kasaSlides/kasa-s-3.webp',
                '/images/kasaSlides/kasa-s-4.webp',
                '/images/kasaSlides/kasa-s-5.webp',


            ],
        'skills': [
            "React",
            "sass",
            "React-Router-Dom",
            "useParams - useState - useEffect ",
            "Toggles et animations",
            "Slider d'images"
        ],
        'git': 'true',
        'gitLink': 'https://github.com/AxelLap/kasa.git',
        'uploaded': 'false',
        'silteLink': 'none'
    },
    {
        'id': 'mvg',
        'title': "Mon Vieux Grimmoire",
        'description': "Projet Backend de mise en place d'un serveur node (avec expressJS) et d'une base de donnée mongoDB pour un site de notation de livres. Le site gère la création et l'athentification utilisateur ainsi que le CRUD coté backend pour permettre à l'utilisateur logué d'ajouter ou supprimer des livres sur le site et de noter les livres ajoutés par les autres utilisateurs. l'aspect sécurité est assuré par le cryptage des mots de passe via bcrypt. Un aspect green code à également été implémenté en traitant le format et la taille des images entrantes via sharp et multer",
        'images':
            [
                '/images/mvgSlides/mvg-s-1.webp',
                '/images/mvgSlides/mvg-s-2.webp',
                '/images/mvgSlides/mvg-s-3.webp',
                '/images/mvgSlides/mvg-s-4.webp',
                '/images/mvgSlides/mvg-s-5.webp',


            ],
        'skills': [
            "node.js",
            "express.js",
            "MongoDB",
            "Création d'API coté back",
            "Authentification utilisateur",
            "Sécurisation de données",
            "green code"
        ],
        'git': 'true',
        'gitLink': 'https://github.com/AxelLap/mon_vieux_grimoire.git',
        'uploaded': 'false',
        'silteLink': 'none'
    }
]