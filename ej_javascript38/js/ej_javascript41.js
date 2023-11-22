function main() {
    const formulario = document.querySelector('#formu');
    const pueblo = formulario.querySelector("#pueblo");
    const imgprovincia = formulario.querySelector("#imgprovincia");

    const provinciasAndalucia = ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"];
    const idprovinciasAndalucia = ["almeria", "cadiz", "cordoba", "granada", "huelva", "jaen", "malaga", "sevilla"];
    const imagenesProvincia = {
        "almeria": "../ej_javascript38/recursos/almeria.png",
        "cadiz": "../ej_javascript38/recursos/cadiz.png",
        "cordoba": "../ej_javascript38/recursos/cordoba.png",
        "granada": "../ej_javascript38/recursos/granada.png",
        "huelva": "../ej_javascript38/recursos/huelva.png",
        "jaen": "../ej_javascript38/recursos/jaen.png",
        "malaga": "../ej_javascript38/recursos/malaga.png",
        "sevilla": "../ej_javascript38/recursos/sevilla.png"
    };
    const pueblosAndalucia = {
        "jaen": ["albanchez de magina", "alcala la real", "alcaudete", "aldeaquemada", "andujar", "arjona", "arjonilla", "arquillos", "arroyo del ojanco", "baeza", "bailen", "banos de la encina", "beas de segura", "bedmar y garciez", "begijar", "belmez de la moraleda", "benatae", "cabra del santo cristo", "cambil", "campillo de arenas", "canena", "carboneros", "carcheles", "castellar", "castillo de locubin", "cazalilla", "cazorla", "chiclana de segura", "chilluevar", "escanuela", "espeluy", "frailes", "fuensanta de martos", "fuerte del rey", "genave", "guarroman", "higuera de calatrava", "hinojares", "hornos", "huelma", "huesa", "ibros", "iznatoraf", "jabalquinto", "jaen", "jamilena", "jimena", "jodar", "la carolina", "la guardia de jaen", "la iruela", "la puerta de segura", "lahiguera", "larva", "linares", "lopera", "los villares", "lupion", "mancha real", "marmolejo", "martos", "mengibar", "montizon", "navas de san juan", "noalejo", "orcera", "peal de becerro", "pegalajar", "porcuna", "pozo alcon", "puente de genave", "quesada", "rus", "sabiote", "santa elena", "santiago de calatrava", "santiago-pontones", "santisteban del puerto", "santo tome", "segura de la sierra", "siles", "sorihuela del guadalimar", "torreblascopedro", "torredelcampo", "torredonjimeno", "torreperogil", "torres", "torres de albachenz", "ubeda", "valdepenas de jaen", "vilches", "villacarrillo", "villanueva de la reina", "villanueva del arzobispo", "villardompardo", "villarrodrigo", "villatorres"],
        "almeria": ["abla", "abrucena", "adra", "albanchez", "alboloduy", "albox", "alcolea", "alcon tar", "alhabia", "alhama de almeria", "alicun", "almeria", "almocita", "alsodux", "antas", "arboleas", "armuna de almanzora", "bacares", "bayarcal", "bayarque", "bedar", "beires", "benahadux", "benitagla", "benizalon", "bentarique", "berja", "canjayar", "cantoria", "carboneras", "castro de filabres", "chercos", "chirivel", "cobdar", "cuevas del almanzora", "dalias", "el ejido", "enix", "felix", "fines", "finana", "fondon", "gador", "garrucha", "gérgal", "huecija", "huercal de almeria", "huercal-overa", "illar", "instincion", "la mojonera", "laroya", "las tres villas", "laujar de andarax", "liquor", "los gallardos", "lubrin", "lucainena de las torres", "lucar", "macael", "maria", "mojacar", "nacimiento", "nijar", "ohanes", "olula de castro", "olula del rio", "oria", "padules", "partaloa", "paterna del rio", "pechina", "pulpi", "purchena", "ragol", "rioja", "roquetas de mar", "santa cruz de marchena", "santa fe de mondujar", "senes", "seron", "sierro", "somontin", "sorbas", "suflí", "tabernas", "taberno", "tahal", "terque", "tijola", "turre", "turrillas", "uleila del campo", "urracal", "velefique", "velez-blanco", "velez-rubio", "vera", "viator", "vicar", "zurgena"],
        "malaga": ["alameda", "alcaucin", "alfarnate", "alfarnatejo", "algarrobo", "algatocin", "alhaurin de la torre", "alhaurin el grande", "almachar", "almargen", "almogia", "alora", "alozaina", "alpandeire", "antequera", "archidona", "ardales", "arenas", "arriate", "atajate", "benadalid", "benahavis", "benalauria", "benalmadena", "benamargosa", "benamocarra", "benaojan", "benarraba", "campillos", "canillas de aceituno", "canillas de alba", "canete la real", "carratraca", "cartajima", "cartama", "casabermeja", "casarabonela", "casares", "coin", "colmenar", "comares", "competa", "cortes de la frontera", "cuevas bajas", "cuevas de san marcos", "cuevas del becerro", "cutar", "el borge", "el burgo", "estepona", "farajan", "frigiliana", "fuengirola", "fuente de piedra", "gaucin", "genalguacil", "guaro", "humilladero", "igualeja", "istan", "iznate", "jimera de libar", "jubrique", "juzcar", "macharaviaya", "malaga", "manilva", "marbella", "mijas", "moclinejo", "mollina", "monda", "montecorto", "montejaque", "nerja", "ojen", "parauta", "periana", "pizarra", "pujerra", "rincon de la victoria", "riogordo", "ronda", "salares", "sayalonga", "sedella", "serrato", "sierra de yeguas", "teba", "tolox", "torremolinos", "torrox", "totalan", "valle de abdalajis", "velez-malaga", "villanueva de algaidas", "villanueva de la concepcion", "villanueva de tapia", "villanueva del rosario", "villanueva del trabuco", "vinuela", "yunquera"],
        "sevilla": ["aguadulce", "alanis", "albaida del aljarafe", "alcala de guadaira", "alcala del rio", "alcolea del rio", "algamitas", "almaden de la plata", "almensilla", "arahal", "aznalcázar", "aznalcollar", "badolatosa", "benacazon", "bollullos de la mitacion", "bormujos", "brenes", "burguillos", "camas", "cantillana", "canada rosal", "carmona", "carrion de los cespedes", "casariche", "castilblanco de los arroyos", "castilleja de guzman", "castilleja de la cuesta", "castilleja del campo", "cazalla de la sierra", "constantina", "coria del rio", "coripe", "dos hermanas", "ecija", "el castillo de las guardas", "el coronil", "el cuervo de sevilla", "el garrobo", "el madrono", "el pedroso", "el real de la jara", "el ronquillo", "el rubio", "el saucejo", "el viso del alcor", "espartinas", "estepa", "fuentes de andalucia", "gelves", "gerena", "gilena", "gines", "guadalcanal", "guillena", "herrera", "huevar del aljarafe", "isla mayor", "la algaba", "la campana", "la luisiana", "la puebla de cazalla", "la puebla de los infantes", "la puebla del rio", "la rinconada", "la roda de andalucia", "lantejuela", "las cabezas de san juan", "las navas de la concepcion", "lebrija", "lora de estepa", "lora del rio", "los corrales", "los molares", "los palacios y villafranca", "mairena del alcor", "mairena del aljarafe", "marchena", "marinaleda", "martin de la jara", "montellano", "moron de la frontera", "olivares", "osuna", "palomares del rio", "paradas", "pedrera", "penaflor", "pilas", "pruna", "salteras", "san juan de aznalfarache", "san nicolas del puerto", "sanlucar la mayor", "santiponce", "sevilla", "bellavista-la palmera", "casco antiguo", "cerro-amate", "este-alcosa-torreblanca", "los remedios", "macarena", "macarena norte", "nervion", "san pablo-santa justa", "sur", "triana", "tocina", "tomares", "umbrete", "utrera", "valencina de la concepcion", "villamanrique de la condesa", "villanueva de san juan", "villanueva del ariscal", "villanueva del rio y minas", "villaverde del rio"],
        "cadiz": ["alcala de los gazules", "alcala del valle", "algar", "algeciras", "algodonales", "arcos de la frontera", "barbate", "benalup-casas viejas", "benaocaz", "bornos", "cadiz", "castellar de la frontera", "chiclana de la frontera", "chipiona", "conil de la frontera", "el bosque", "el gastor", "el puerto de santa maria", "espera", "grazalema", "jerez de la frontera", "jimena de la frontera", "la linea de la concepcion", "los barrios", "medina-sidonia", "olvera", "paterna de rivera", "prado del rey", "puerto real", "puerto serrano", "rota", "san fernando", "san jose del valle", "san roque", "sanlucar de barrameda", "setenil de las bodegas", "tarifa", "torre alhaquime", "trebujena", "ubrique", "vejer de la frontera", "villaluenga del rosario", "villamartin", "zahara"],
        "cordoba": ["adamuz", "aguilar de la frontera", "alcaracejos", "almedinilla", "almodovar del rio", "anora", "baena", "belalcazar", "belmez", "benameji", "bujalance", "cabra", "canete de las torres", "carcabuey", "cardena", "castro del rio", "conquista", "cordoba", "dona mencia", "dos torres", "el carpio", "el guijo", "el viso", "encinas reales", "espejo", "espiel", "fernán-núñez", "fuente la lancha", "fuente obejuna", "fuente palmera", "fuente-tojar", "guadalcazar", "hinojosa del duque", "hornachuelos", "iznajar", "la carlota", "la granjuela", "la rambla", "la victoria", "los blazquez", "lucena", "luque", "montalban de cordoba", "montemayor", "montilla", "montoro", "monturque", "moriles", "nueva carteya", "obejo", "palenciana", "palma del rio", "pedro abad", "pedroche", "penarroya-pueblonuevo", "posadas", "pozoblanco", "priego de cordoba", "puente genil", "rute", "san sebastian de los ballesteros", "santa eufemia", "santaella", "torrecampo", "valenzuela", "valsequillo", "villa del rio", "villaharta", "villanueva de cordoba", "villanueva del duque", "villanueva del rey", "villaralto", "villaviciosa de cordoba", "zuheros"],
        'granada': ['agron', 'alamedilla', 'albolote', 'albondón', 'albuñán', 'albuñol', 'albuñuelas', 'aldeire', 'alfacar', 'algarinejo', 'alhama de Granada', 'alhendin', 'alicún de Ortega', 'almegíjar', 'almuñécar', 'alpujarra de la Sierra', 'alquife', 'arenas del Rey', 'armilla', 'atarfe', 'baza', 'beas de Granada', 'beas de Guadix', 'benalúa', 'benalúa de las Villas', 'benamaurel', 'bérchules', 'bubión', 'busquístar', 'cacín', 'cádiar', 'cájar', 'calicasas', 'campotéjar', 'caniles', 'cáñar', 'capileira', 'carataunas', 'cástaras', 'castilléjar', 'castril', 'cenes de la Vega', 'chauchina', 'chimeneas', 'churriana de la Vega', 'cijuela', 'cogollos de Guadix', 'cogollos de la Vega', 'colomera', 'cortes de Baza', 'cortes y Graena', 'cuevas del Campo', 'cúllar', 'cúllar Vega', 'darro', 'dehesas de Guadix', 'dehesas Viejas', 'deifontes', 'diezma', 'dílar', 'dólar', 'dúdar', 'dúrcal', 'el Pinar', 'el Valle', 'escúzar', 'ferreira', 'fonelas', 'freila', 'fuente Vaqueros', 'galera', 'gobernador', 'gójar', 'gor', 'gorafe', 'granada', 'guadahortuna', 'guadix', 'gualchos', 'güejar Sierra', 'güevéjar', 'huélago', 'huéneja', 'huéscar', 'huétor de Santillán', 'huétor Tájar', 'huétor Vega', 'illora', 'itrabo', 'iznalloz', 'jayena', 'jerez del Marquesado', 'jete', 'jun', 'juviles', 'la Calahorra', 'la Malahá', 'la Peza', 'la Taha', 'la Zubia', 'láchar', 'lanjarón', 'lanteira', 'las Gabias', 'lecrín', 'lentegí', 'lobras', 'loja', 'los Guajares', 'lugros', 'lújar', 'maracena', 'marchal', 'moclín', 'molvízar', 'monachil', 'montefrío', 'montejícar', 'montillana', 'moraleda de Zafayona', 'morelábor', 'motril', 'murtas', 'nevada', 'nigüelas', 'nívar', 'ogíjares', 'orce', 'órgiva', 'otívar', 'padul', 'pampaneira', 'pedro Martínez', 'peligros', 'pinos Genil', 'pinos Puente', 'píñar', 'polícar', 'polopos', 'pórtugos', 'puebla de Don Fadrique', 'pulianas', 'purullena', 'quéntar', 'rubite', 'salar', 'salobreña', 'santa Cruz del Comercio', 'santa Fe', 'soportújar', 'sorvilán', 'torre-Cardela', 'torvizcón', 'trevélez', 'turón', 'ugíjar', 'valderrubio', 'valle del Zalabí', 'válor', 'vegas del Genil', 'vélez de Benaudalla', 'ventas de Huelma', 'villa de Otura', 'villamena', 'villanueva de las Torres', 'villanueva Mesía', 'víznar', 'zafarraya', 'zagra', 'zújar'],
        'huelva': ['alajar', 'aljaraque', 'almonaster la Real', 'almonte', 'alosno', 'aracena', 'aroche', 'arroyomolinos de León', 'ayamonte', 'beas', 'berrocal', 'bollullos Par del Condado', 'bonares', 'cabezas Rubias', 'cala', 'calañas', 'campofrío', 'cañaveral de León', 'cartaya', 'castaño del Robledo', 'chucena', 'corteconcepción', 'cortegana', 'cortelazor', 'cumbres de Enmedio', 'cumbres de San Bartolomé', 'cumbres Mayores', 'el Almendro', 'el Campillo', 'el Cerro de Andévalo', 'el Granado', 'encinasola', 'escacena del Campo', 'fuenteheridos', 'galaroza', 'gibraleón', 'higuera de la Sierra', 'hinojales', 'hinojos', 'huelva', 'isla Cristina', 'jabugo', 'la Granada de Río-Tinto', 'la Nava', 'la Palma del Condado', 'lepe', 'linares de la Sierra', 'los Marines', 'lucena del Puerto', 'manzanilla', 'minas de Riotinto', 'moguer', 'nerva', 'niebla', 'palos de la Frontera', 'paterna del Campo', 'paymogo', 'puebla de Guzmán', 'puerto Moral', 'punta Umbría', 'rociana del Condado', 'rosal de la Frontera', 'san Bartolomé de la Torre', 'san Juan del Puerto', 'san Silvestre de Guzmán', 'sanlúcar de Guadiana', 'santa Ana la Real', 'santa Bárbara de Casa', 'santa Olalla del Cala', 'trigueros', 'valdelarco', 'valverde del Camino', 'villablanca', 'villalba del Alcor', 'villanueva de las Cruces', 'villanueva de los Castillejos', 'villarrasa', 'zalamea la Real', 'zufre']
    };
    let pueblosUtilizados = {
        "almeria": [],
        "cadiz": [],
        "cordoba": [],
        "granada": [],
        "huelva": [],
        "jaen": [],
        "malaga": [],
        "sevilla": []
    }

    let textoCheck = crearChecks("checktabla", idprovinciasAndalucia, provinciasAndalucia);

    escribirSegunID("checksprovincias", textoCheck);

    pueblo.addEventListener("blur", function () {
        let pueblo = event.target.value;
        let provincia = puebloPerteneceProvincia(pueblo, pueblosAndalucia);

        if (provincia) {
            imgprovincia.src = imagenesProvincia[provincia];
            desmarcarChecks(formulario);
            marcarCheck(formulario, provincia);
            añadirPueblo(pueblosUtilizados, provincia, pueblo);
            if (pueblosUtilizados[provincia].length == 10){
                window.alert(`Enhorabuena! ${provincia} ha llegado a las 10 consultas`);
            }
        }

    });

}

function añadirPueblo(pueblos, provincia, pueblo) {
    if (!pueblos[provincia].includes(pueblo)) {
        pueblos[provincia].push(pueblo);
    }
}

function puebloPerteneceProvincia(pueblo, andalucia) {
    pueblo = pueblo.toLowerCase();

    for (const provincia in andalucia) {
        if (andalucia[provincia].includes(pueblo)) {
            return provincia;
        }
    }

    return false;
}

document.addEventListener("DOMContentLoaded", main);