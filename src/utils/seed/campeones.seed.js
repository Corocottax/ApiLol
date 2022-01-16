const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Corocottax:52MyXgk7m-KXZ7w@cluster0.c7yvm.mongodb.net/ApiLol?retryWrites=true&w=majority";
const campeonesSchema = require("../../api/campeones/campeones.model.js");

const campeones = [
    
    {
        "name":"Aatrox",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339414/imagenes-campeones/Aatrox_t2gn2y.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/aatrox"
    },
    {
        "name":"Ahri",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339415/imagenes-campeones/Ahri_d9yk89.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ahri"
    },
    {
        "name":"Akali",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339414/imagenes-campeones/Akali_dafnrf.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/akali"
    },
    {
        "name":"Akshan",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339414/imagenes-campeones/Akshan_psbpie.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/akshan"
    },
    {
        "name":"Alistar",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339415/imagenes-campeones/Alistar_oocnlk.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/alistar"
    },
    {
        "name":"Amumu",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339415/imagenes-campeones/Amumu_mfxtpw.png",
        "calles":[

            "61e43461c5928008f63d33b5",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/amumu"
    },
    {
        "name":"Anivia",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339416/imagenes-campeones/Anivia_mcftnd.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/anivia"
    },
    {
        "name":"Annie",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339415/imagenes-campeones/Annie_rptgel.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/annie"
    },
    {
        "name":"Aphelios",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339415/imagenes-campeones/Aphelios_wkbfqh.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/aphelios"
    },
    {
        "name":"Ashe",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339416/imagenes-campeones/Ashe_inuzab.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ashe"
    },
    {
        "name":"Aurelion Sol",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339442/imagenes-campeones/AurelionSol_nisius.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/aurelionsol"
    },
    {
        "name":"Azir",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339416/imagenes-campeones/Azir_fo3al4.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/azir"
    },
    {
        "name":"Bardo",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1641974781/imgs/Bardo_l6balx.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/bard"
    },
    {
        "name":"Blitzcrank",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339416/imagenes-campeones/Blitzcrank_rznf37.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/blitzcrank"
    },
    {
        "name":"Brand",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339416/imagenes-campeones/Brand_tclp0v.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/brand"
    },
    {
        "name":"Braum",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339418/imagenes-campeones/Braum_frhyam.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/braum"
    },
    {
        "name":"Caitlyn",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339417/imagenes-campeones/Caitlyn_g6q0qj.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/caitlyn"
    },
    {
        "name":"Camille",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339417/imagenes-campeones/Camille_notcyw.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/camille"
    },
    {
        "name":"Cassiopeia",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339418/imagenes-campeones/Cassiopeia_c3afxs.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/cassiopeia"
    },
    {
        "name":"Cho'Gath",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339417/imagenes-campeones/ChoGath_fdmxvb.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/chogath"
    },
    {
        "name":"Corki",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339417/imagenes-campeones/Corki_ysyagh.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/corki"
    },
    {
        "name":"Darius",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339444/imagenes-campeones/Darius_v5qqwi.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/darius"
    },
    {
        "name":"Diana",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339417/imagenes-campeones/Diana_dyryoo.png",
        "calles":[

            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/diana"
    },
    {
        "name":"Draven",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339418/imagenes-campeones/Draven_iwimj3.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/draven"
    },
    {
        "name":"Dr.Mundo",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339418/imagenes-campeones/DrMundo_zglskn.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/drmundo"
    },
    {
        "name":"Ekko",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339419/imagenes-campeones/Ekko_n4zvsz.png",
        "calles":[

            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ekko"
    },
    {
        "name":"Elise",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339419/imagenes-campeones/Elise_k1ny6o.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/elise"
    },
    {
        "name":"Evelynn",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339419/imagenes-campeones/Evelynn_iwbsur.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/evelynn"
    },
    {
        "name":"Ezreal",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339419/imagenes-campeones/Ezreal_wnhrpk.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ezreal"
    },
    {
        "name":"Fiddlesticks",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Fiddlesticks_l6q3ur.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/fiddlesticks"
    },
    {
        "name":"Fiora",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Fiora_dsxbmd.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/fiora"
    },
    {
        "name":"Fizz",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339419/imagenes-campeones/Fizz_nxsiql.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/fizz"
    },
    {
        "name":"Galio",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339443/imagenes-campeones/Galio_ccznro.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/galio"
    },
    {
        "name":"Gangplank",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Gangplank_zpwbaf.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/gangplank"
    },
    {
        "name":"Garen",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Garen_xtjgfu.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/garen"
    },
    {
        "name":"Gnar",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Gnar_cm8kv6.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/gnar"
    },
    {
        "name":"Gragas",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339421/imagenes-campeones/Gragas_jrhh21.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/gragas"
    },
    {
        "name":"Graves",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339420/imagenes-campeones/Graves_tvjuhw.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/graves"
    },
    {
        "name":"Gwen",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339421/imagenes-campeones/Gwen_oayhvs.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/gwen"
    },
    {
        "name":"Hecarim",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339421/imagenes-campeones/Hecarim_j6xt2l.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/hecarim"
    },
    {
        "name":"Heimerdinger",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339421/imagenes-campeones/Heimerdinger_ptiprr.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/heimerdinger"
    },
    {
        "name":"Illaoi",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339422/imagenes-campeones/Illaoi_a2uz8m.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/illaoi"
    },
    {
        "name":"Irelia",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339443/imagenes-campeones/Irelia_ubt5m4.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/irelia"
    },
    {
        "name":"Ivern",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339421/imagenes-campeones/Ivern_sddlgd.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ivern"
    },
    {
        "name":"Janna",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339422/imagenes-campeones/Janna_ecohxk.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/janna"
    },
    {
        "name":"Jarvan IV",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339422/imagenes-campeones/JarvanIV_oumqb2.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/jarvaniv"
    },
    {
        "name":"Jax",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339422/imagenes-campeones/Jax_zauptg.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/jax"
    },
    {
        "name":"Jayce",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Jayce_y6lclu.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/jayce"
    },
    {
        "name":"Jhin",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339422/imagenes-campeones/Jhin_j5spqi.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/jhin"
    },
    {
        "name":"Jinx",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Jinx_tyx0ue.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/jinx"
    },
    {
        "name":"Kai'sa",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Kaisa_b5af4y.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kaisa"
    },
    {
        "name":"Kalista",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Kalista_ysj6oa.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kalista"
    },
    {
        "name":"Karma",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Karma_nxhvnu.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/karma"
    },
    {
        "name":"Karthus",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339442/imagenes-campeones/Karthus_pjriwe.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/karthus"
    },
    {
        "name":"Kassadin",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339423/imagenes-campeones/Kassadin_fvqn6z.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kassadin"
    },
    {
        "name":"Katarina",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339424/imagenes-campeones/Katarina_bsxefo.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/katarina"
    },
    {
        "name":"Kayle",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1641974781/imgs/Kayle_ncfvtz.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kayle"
    },
    {
        "name":"Kayn",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339424/imagenes-campeones/Kayn_aetyhf.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kayn"
    },
    {
        "name":"Kennen",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339424/imagenes-campeones/Kennen_jikwzz.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kennen"
    },
    {
        "name":"Kha'Zix",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/Khazix_ufjwxm.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/khazix"
    },
    {
        "name":"Kindred",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/Kindred_bk0wgl.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kindred"
    },
    {
        "name":"Kled",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/Kled_mnpgdv.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kled"
    },
    {
        "name":"Kog'Maw",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/KogMaw_gnpvrs.png",
        "calles":[

            "61e43461c5928008f63d33b4",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/kogmaw"
    },
    {
        "name":"LeBlanc",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/LeBlanc_ryxr7h.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/leblanc"
    },
    {
        "name":"Lee Sin",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339442/imagenes-campeones/LeeSin_rcasqa.png",
        "calles":[

            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/leesin"
    },
    {
        "name":"Leona",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339425/imagenes-campeones/Leona_n2onmz.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/leona"
    },
    {
        "name":"Lillia",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339427/imagenes-campeones/Lillia_fwqisa.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/lillia"
    },
    {
        "name":"Lissandra",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339426/imagenes-campeones/Lissandra_dlrb5v.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/lissandra"
    },
    {
        "name":"Lucian",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339427/imagenes-campeones/Lucian_shttt7.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/lucian"
    },
    {
        "name":"Lulu",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339427/imagenes-campeones/Lulu_lyz61o.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/lulu"
    },
    {
        "name":"Lux",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339427/imagenes-campeones/Lux_oicllh.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/lux"
    },
    {
        "name":"Maestro Yi",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339426/imagenes-campeones/MaestroYi_qzojoi.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/masteryi"
    },
    {
        "name":"Malphite",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Malphite_vedu04.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/malphite"
    },
    {
        "name":"Malzahar",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Malzahar_hfmate.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/malzahar"
    },
    {
        "name":"Maokai",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339427/imagenes-campeones/Maokai_v9p6lr.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/maokai"
    },
    {
        "name":"Miss Fortune",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339443/imagenes-campeones/MissFortune_yvhly2.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/missfortune"
    },
    {
        "name":"Mordekaiser",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Mordekaiser_ojnjod.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/mordekaiser"
    },
    {
        "name":"Morgana",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Morgana_jn6ua8.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/morgana"
    },
    {
        "name":"Nami",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339429/imagenes-campeones/Nami_ykp03f.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nami"
    },
    {
        "name":"Nasus",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Nasus_bijzqi.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nasus"
    },
    {
        "name":"Nautilus",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339429/imagenes-campeones/Nautilus_mpv5w7.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nautilus"
    },
    {
        "name":"Neeko",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339428/imagenes-campeones/Neeko_g2msnx.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/neeko"
    },
    {
        "name":"Nidalee",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339429/imagenes-campeones/Nidalee_qk85d7.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nidalee"
    },
    {
        "name":"Nocturne",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Nocturne_ohhahu.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nocturne"
    },
    {
        "name":"Nunu y Willump",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/NunuyWillump_ibhyts.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/nunu"
    },
    {
        "name":"Olaf",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Olaf_yr8xrh.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/olaf"
    },
    {
        "name":"Orianna",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339443/imagenes-campeones/Orianna_hlqwnc.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/orianna"
    },
    {
        "name":"Ornn",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Ornn_jqvrxs.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ornn"
    },
    {
        "name":"Pantheon",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Pantheon_vicigg.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b5",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/pantheon"
    },
    {
        "name":"Poppy",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Poppy_jjerpz.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/poppy"
    },
    {
        "name":"Pyke",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339430/imagenes-campeones/Pyke_liue1j.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/pyke"
    },
    {
        "name":"Qiyana",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339431/imagenes-campeones/Qiyana_uj2ohq.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/qiyana"
    },
    {
        "name":"Quinn",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Quinn_gbmc4i.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/quinn"
    },
    {
        "name":"Rakan",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339431/imagenes-campeones/Rakan_jcdjro.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/rakan"
    },
    {
        "name":"Rammus",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339431/imagenes-campeones/Rammus_ikuhqw.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/rammus"
    },
    {
        "name":"Rek'Sai",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339431/imagenes-campeones/Reksai_h3rx0h.gif",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/reksai"
    },
    {
        "name":"Rell",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339432/imagenes-campeones/Rell_lfp7kx.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/rell"
    },
    {
        "name":"Renekton",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339443/imagenes-campeones/Renekton_nicxim.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/renekton"
    },
    {
        "name":"Rengar",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339433/imagenes-campeones/Rengar_mwmerh.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/rengar"
    },
    {
        "name":"Riven",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339433/imagenes-campeones/Riven_nviebe.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/riven"
    },
    {
        "name":"Rumble",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339433/imagenes-campeones/Rumble_wfxlt9.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/rumble"
    },
    {
        "name":"Ryze",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339433/imagenes-campeones/Ryze_k47el5.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ryze"
    },
    {
        "name":"Samira",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339433/imagenes-campeones/Samira_da3pd7.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/samira"
    },
    {
        "name":"Sejuani",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Sejuani_thmdze.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sejuani"
    },
    {
        "name":"Senna",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Senna_feetau.png",
        "calles":[

            "61e43461c5928008f63d33b5",
            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/senna"
    },
    {
        "name":"Seraphine",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Seraphine_mmrpsm.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/seraphine"
    },
    {
        "name":"Sett",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Sett_qa6gqr.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sett"
    },
    {
        "name":"Shaco",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339434/imagenes-campeones/Shaco_ayugcv.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/shaco"
    },

    {
        "name":"Shen",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339444/imagenes-campeones/Shen_iuxsyb.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/shen"
    },
    {
        "name":"Shyvana",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Shyvana_u5cqck.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/shyvana"
    },
    {
        "name":"Singed",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339435/imagenes-campeones/Singed_gttzps.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/singed"
    },
    {
        "name":"Sion",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339435/imagenes-campeones/Sion_vap0gb.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sion"
    },
    {
        "name":"Sivir",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339435/imagenes-campeones/Sivir_ugq02k.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sivir"
    },
    {
        "name":"Skarner",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339435/imagenes-campeones/Skarner_thfh4p.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/skarner"
    },
    {
        "name":"Sona",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Sona_ytbeus.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sona"
    },
    {
        "name":"Soraka",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Soraka_sdbszh.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/soraka"
    },
    {
        "name":"Swain",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Swain_tnwhg5.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/swain"
    },
    {
        "name":"Sylas",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Sylas_e9z1yh.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/sylas"
    },
    {
        "name":"Syndra",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339436/imagenes-campeones/Syndra_kgpiqk.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/syndra"
    },
    {
        "name":"Tahm Kench",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339444/imagenes-campeones/TahmKench_ym46sm.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/tahmkench"
    },
    {
        "name":"Taliyah",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339437/imagenes-campeones/Taliyah_kuutq3.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/taliyah"
    },
    {
        "name":"Talon",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339437/imagenes-campeones/Talon_zge2la.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/talon"
    },
    {
        "name":"Taric",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339437/imagenes-campeones/Taric_cipkaf.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/taric"
    },
    {
        "name":"Teemo",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339437/imagenes-campeones/Teemo_l5uc5f.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/teemo"
    },
    {
        "name":"Thresh",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339438/imagenes-campeones/Thresh_fu9tts.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/thresh"
    },
    {
        "name":"Tristana",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339437/imagenes-campeones/Tristana_vyvs69.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/tristana"
    },
    {
        "name":"Trundle",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339438/imagenes-campeones/Trundle_bo3jeb.png",
        "calles":[

            "61e43461c5928008f63d33b2",
            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/trundle"
    },
    {
        "name":"Tryndamere",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339438/imagenes-campeones/Tryndamere_gq1bxt.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/tryndamere"
    },
    {
        "name":"Twisted Fate",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339438/imagenes-campeones/TwistedFate_zoshot.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/twistedfate"
    },
    {
        "name":"Twitch",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339438/imagenes-campeones/TwistedFate_zoshot.png",
        "calles":[

            "61e43461c5928008f63d33b4",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/twitch"
    },
    {
        "name":"Udyr",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339445/imagenes-campeones/Udyr_ih67cy.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/udyr"
    },
    {
        "name":"Urgot",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339439/imagenes-campeones/Urgot_ecymqh.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/urgot"
    },
    {
        "name":"Varus",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339439/imagenes-campeones/Varus_wudglg.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/varus"
    },
    {
        "name":"Vayne",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339439/imagenes-campeones/Vayne_ehjx6t.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/vayne"
    },
    {
        "name":"Veigar",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339439/imagenes-campeones/Veigar_uudsxt.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/veigar"
    },
    {
        "name":"Vel'Koz",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339440/imagenes-campeones/VelKoz_byaa16.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/velkoz"
    },
    {
        "name":"Vex",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339439/imagenes-campeones/Vex_xlac1f.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/vex"
    },
    {
        "name":"Vi",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339440/imagenes-campeones/Vi_sebgdf.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/vi"
    },
    {
        "name":"Viego",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339440/imagenes-campeones/Viego_lhd09n.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/viego"
    },
    {
        "name":"Viktor",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339441/imagenes-campeones/Viktor_tobzab.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/viktor"
    },
    {
        "name":"Vladimir",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339440/imagenes-campeones/Vladimir_sal9if.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/vladimir"
    },
    {
        "name":"Volibear",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339444/imagenes-campeones/Volibear_oc2q7y.png",
        "calles":[

            "61e43461c5928008f63d33b1",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/volibear"
    },
    {
        "name":"Warwick",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339440/imagenes-campeones/Warwick_gpdktw.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/warwick"
    },
    {
        "name":"Wukong",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339441/imagenes-campeones/Wukong_bzlska.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/monkeyking"
    },
    {
        "name":"Xayah",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339412/imagenes-campeones/Xayah_dmmtwc.png",
        "calles":[

            "61e43461c5928008f63d33b4"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/xayah"
    },
    {
        "name":"Xerath",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339412/imagenes-campeones/Xerath_e3rzch.png",
        "calles":[

            "61e43461c5928008f63d33b5",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/xerath"
    },
    {
        "name":"Xin Zhao",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339412/imagenes-campeones/XinZhao_cjxp7o.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/xinzhao"
    },
    {
        "name":"Yasuo",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Yasuo_qyl6dr.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/yasuo"
    },
    {
        "name":"Yone",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Yone_sdsugk.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/yone"
    },
    {
        "name":"Yorick",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339412/imagenes-campeones/Yorick_ttzdeh.png",
        "calles":[

            "61e43461c5928008f63d33b1"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/yorick"
    },
    {
        "name":"Yuumi",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Yuumi_wsewlo.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/yuumi"
    },
    {
        "name":"Zac",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Zac_v7nip9.png",
        "calles":[

            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/zac"
    },
    {
        "name":"Zed",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339445/imagenes-campeones/Zed_mhdc1j.png",
        "calles":[

            "61e43461c5928008f63d33b3",
            "61e43461c5928008f63d33b2"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/zed"
    },
    {
        "name":"Ziggs",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Ziggs_pgbsfq.png",
        "calles":[

            "61e43461c5928008f63d33b4",
            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/ziggs"
    },
    {
        "name":"Zilean",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339413/imagenes-campeones/Zilean_xyhowb.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/zilean"
    },
    {
        "name":"Zoe",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339414/imagenes-campeones/Zoe_i82cex.png",
        "calles":[

            "61e43461c5928008f63d33b3"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/zoe"
    },
    {
        "name":"Zyra",
        "url":"https://res.cloudinary.com/dhp2zuftj/image/upload/v1642339414/imagenes-campeones/Zyra_s7eyyj.png",
        "calles":[

            "61e43461c5928008f63d33b5"

        ],
        "runas":"https://www.leagueofgraphs.com/es/champions/runes/zyra"
    }

];

const CampeonesDocuments = campeones.map((campeones) => new campeonesSchema(campeones));

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allCampeones = await campeonesSchema.find();

    if (allCampeones.length) {

      await campeonesSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings Campeones: ${err}`))
  
.then(async () => {

    await campeonesSchema.insertMany(CampeonesDocuments);

    console.log("You actually can play lol");

}).catch((err) => console.log(`Error makings Campeones: ${err}`))
  
.finally(() => mongoose.disconnect());