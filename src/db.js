const db = `Työnkuvaus,Alkurajapvm,Loppuraja,osoite,nimi,lat,lng\nLUOKAT 70 JA 71 LATTIAKORJAUS,12/04/2018,12/04/2018,Tuohipolku 10,Pihkapuiston ala-aste,60.2517159,24.853717\n"VANHAN ALAKATON PURKU,UUDEN ASENNUS",09/07/2018,09/07/2018,Pikkaraistie 7,Kumina lpk,60.2794507,25.0270411\n"KIRJAHYLLYJEN SIIRTO,SUOJASEINIEN R",09/07/2018,09/07/2018,Kellosilta 9,Pasilan kirjasto,60.2007754,24.9358785\nVESIVAHINGON PAIKANNUS JA KORJAUS,24/07/2018,24/07/2018,Kellosilta 9,Pasilan kirjasto,60.2007754,24.9358785\nIV-KANAVIEN KORJAUS AULA-TILOISSA,27/07/2018,27/07/2018,Knutersintie 924,Sakarinmäen peruskoulu,60.2617945,25.2113561\nKANNAKKEIDEN ASENNUS SEINÄÄN,09/08/2018,09/08/2018,Torikatu 1,Hakaniemen väistöhalli,40.8816153,29.3689582\nVESIVAHINGON KORJAUS,13/08/2018,18/09/2018,Metsäpurontie 14/Kuusikkotie,Maunula Lp,60.2296117,24.92867\nSMARTBOARDIN JA VIDEOTYKKIEN SIIRTO,09/08/2018,09/08/2018,Neljäs linja 11-15,Kallion ala-aste,60.1833792,24.9507648\nMATTOSAUMOJEN KORJAUS,10/08/2018,10/08/2018,Jalava,Meilahden ala-aste/hammashoitola,52.8529516,24.2697611\nVAATELOKEROIDEN+HYLLYJEN KORJAUS,10/08/2018,10/08/2018,Paciuksenkaari 21,Pacius Lpk,60.1960179,24.8937871\nVIEMÄRIKANNEN KORJAUS,15/08/2018,15/08/2018,Lönnrotinkatu 3,Hietalahden kauppahalli,64.2227913,27.7299603\nINVA WC:N PAPERITELINEEN UUSIMINEN,16/08/2018,16/08/2018,Päijänteentie 5,Vallilan kirjasto,60.1922199,24.9623972\nPUURUNGON POISTO PIHALTA,21/08/2018,12/09/2018,Riihitie 9,Elka Dh,62.2226493,25.7165391\nVARASTOKONTIN POISTO TYÖMAALTA,21/08/2018,21/08/2018,Raumantie 2,Munkkivuoren ala-aste,60.2054441,24.8787071\nPIHAKIVETYKSEN KORJAUS,21/08/2018,21/08/2018,Aleksis Kiven katu 3,Harjun nuorisotalo,61.4959873,23.7604419\nGRAFITTIEN POISTO,21/08/2018,21/08/2018,Metsäpurontie 4,Maunula-talo,60.605367,24.8556363\n"BETONILATTIAN PAIKKAUS, SERMIT",21/08/2018,21/08/2018,Teinintie 12,Oulunkylän ala-aste,60.2320863,24.9607072\nKELLARIN TYHJENNYS,22/08/2018,22/08/2018,Limingantie 78,Marjala Lpk,60.2049188,24.9553545\nOVI ERISTEIDEN KORJAUS,23/08/2018,23/08/2018,Koulutanhua 1,Laajasalon peruskoulu,60.1788623,25.0574486\nVALKOTAULUN JA PÖYTIEN SIIROJA,23/08/2018,23/08/2018,Laivalahdenkatu,Helsingin Silkkikutomo,60.1945579,25.0374316\nALASARANAN KORJAUS,24/08/2018,24/08/2018,Hillerikuja 4,Hertsikan ala-aste,60.2094524,25.0434152\nIV-KONEEN HUOLTOLUUKUN ASENNUS,24/08/2018,24/08/2018,Tilkank,Pikku-Huopalahden monitoimitalo,0,0\nIKKUNAHELOJEN KORJAUS,31/08/2018,31/08/2018,Intiankatu 31,Marjala Lpk,60.2095911,24.9644323\nRAKENNEAVAUKSIA,29/08/2018,29/08/2018,Isonnevantie 22,Gynasiet lärkan,60.2167703,24.8909075\nTUULETUSVENTTIILIN KORJAUS,04/09/2018,04/09/2018,Malmin lentoasema,Malmin lentoasema,60.2464754,25.0454945\nRAKENNEAVAUKSIA,05/09/2018,05/09/2018,Viinenkuja 6,Pitäjänmäen peruskoulu,60.2265564,24.860191\nSARANSUOJIA/SORMISUOJIEN ASENNUS,05/09/2018,05/09/2018,Nallitie 3,Nalli Lpk,60.2350175,25.0612988\nKAAPPIEN + SÄHKÖLIEDEN IRROTUS,06/09/2018,10/09/2018,Koulutanhua 2B,Laajasalon nuorisotalo,60.1793683,25.05566\nOVEN + LUKON ASENNUS,07/09/2018,07/09/2018,Jollaksentie 67,Puuskakulma lpk,60.1648491,25.07469\n"OVEN VAIHTO, TIILISEINÄN PAIKKAUS",07/09/2018,07/09/2018,Tuohipolku 10,Pihkapuiston ala-aste,60.2517159,24.853717\nVESIKATTOVUODON PAIKANNUS+KORJAUS,18/09/2018,18/09/2018,Takomotie 13,Strömbergin ala-aste,60.2190813,24.873346\nTILAMUUTOKSET,11/09/2018,11/09/2018,Malmin lentoasema/Rajavartiolaitos,Malmin lentoasema/Rajavartiolaitos,0,0\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Korsnäsintie 17/Branten,Korsnäsintie 17/Branten,0,0\nRAKENNUSTEN PURKUTYÖT,14/12/2018,14/12/2018,Susirajantie 18/Warglyan,Susirajantie 18/Warglyan,0,0\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Susirajantie 24/Pilvilinna,Susirajantie 24/Pilvilinna,0,0\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Talosaarentie 213,Talosaarentie 213,60.2417796,25.1790844\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Rödje-Fantsin tie 9/Torp-Fants,Rödje-Fantsin tie 9/Torp-Fants,0,0\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Rödje-Fantsin tie 11/Lill-Fants,Rödje-Fantsin tie 11/Lill-Fants,0,0\nRAKENNUSTEN PURKUTYÖT,12/09/2018,12/09/2018,Rödje-Fantsin tie 33,Rödje-Fantsin tie 33,60.2529683,25.1751027\nILMANOTTOPUTKEN PAIKANNUS MAAN ALTA,17/09/2018,17/09/2018,Sturenkatu 2,Aleksis Kiven peruskoulu,60.193792,24.956026\nKOSTEUSVAURIOKORJAUKSET,25/09/2018,25/09/2018,Rajavartiolaitos,Malmin lentoasema,0,0\nOVIEN KUNNOSTUS,25/09/2018,25/09/2018,Agronominkatu 2,Latokartanon peruskoulu,60.2345232,25.0337994\nDEKKARIHUONEEN KYLPYHUONEREMONTTI,28/09/2018,28/09/2018,Viides linja 11,Kallion kirjasto,60.1836099,24.9536318\nLEIKKIPUISTON RAKENTAMINEN,04/10/2018,04/10/2018,Porvoonkatu 4,Brahe Lp,60.1909403,24.9455672\nLEIKKIPUISTON RAKENTAMINEN,04/10/2018,04/10/2018,Uudenpellonkuja 5,Kotinummi Lp,60.2578567,25.0158925\nLEIKKIPUISTON RAKENTAMINEN,04/10/2018,04/10/2018,Satamasaarentie 3,Lohikäärmeenpuisto Lp,60.2119987,25.1393441\nKOSTEUSKARTOITUS+RAKENNEAVAUKSIA,04/10/2018,04/10/2018,Sturenkatu 25,Sturenkatu 25,60.193521,24.955437\nULKOSEINIEN TIIVISTYSKORJAUKSET,16/10/2018,16/10/2018,Riihitie 9,Elka Lpk,62.2226493,25.7165391\nTELINEIDEN ASENNUS TUTKIMUKSIA VART,18/10/2018,18/10/2018,Pau,Lpk The Little English Kindergarten,43.2957547,-0.3685668\nSISÄOPASTEIDEN MUUTOSTYÖT YM,23/10/2018,23/10/2018,Kahvikuja 3,Palvelukeskus Albatross,60.2062904,25.1463932\n"ILMANOTTOPUTKEN KAIVUU,KAIVONRENGAS",29/10/2018,29/10/2018,Sturenkatu 2,Aleksis Kiven peruskoulu,60.1861581,24.9409991\n"LIIKUNTASUMAT,IKKUNATIIVISTEET",02/11/2018,02/11/2018,Takomotie 13,Strömbergin ala-aste,60.2190813,24.873346\n"VESIKOURUN VAIHTO,KATON PUHDISTUS",07/11/2018,16/11/2018,Hämeentie 98,Vallila Lp,60.4577971,22.3061093\nLASTENRATTAIDEN VARASTON SEINÄPURKU,08/11/2018,08/11/2018,Eläintarhantie 18 A,Linnunlaulu Lpk,60.1807412,24.9466376\n"KAAPPIEN SIIRTELYÄ,ROSKIEN KULJETUS",19/11/2018,19/11/2018,Vanha Rantatie 254,Killinmäki,63.9604666,23.4334935\nTELINEET LAMPUN VAIHTOA VARTEN,22/11/2018,22/11/2018,Topeliuksenkatu 6,Töölön kirjasto,60.1833462,24.9174514\nTIKKAIDEN TOIMITUS MITTAUKSIA VART,28/11/2018,28/11/2018,Villiruusunkuja 4,Auringonpilkku lpk,60.2026519,25.1482291\nKORJAUSSUUNNITTELU,17/12/2018,17/12/2018,Tuohipolku 10,Pihkapuiston ala-aste,60.2517159,24.853717\nMUUTTOLAATIKOIDEN TOIMITUS,17/12/2018,17/12/2018,Kimnaasipolku 5,Maatullin ala-aste,60.274631,25.028157\nVARASTOINTIKONTTI LELUILLE,10/12/2018,10/12/2018,Porvoonkatu 4,Brahe Lp,60.1898357,24.9475168\nAULAN NAISTEN WC-TILOJEN KUNNOSTUS,11/12/2018,11/12/2018,Klaneettitie 5,Kanneltalo,60.2387865,24.8759076\nHAITTA-AINEKARTOITUS,21/12/2018,21/12/2018,Suokuja 21/Lillåker,Suokuja 21/Lillåker,0,0\nHAITTA-AINEKARTOITUS,21/12/2018,21/12/2018,Ribbingintie 93,Ribbingintie 93,60.2349453,25.2071786\nMUUTOSTYÖT,01/03/2018,13/04/2018,Keinulaudankuja 4,Kontulan Symppis,60.2366091,25.0850534\n"IV-SUUNNITTELU, IV-TYÖT",10/12/2018,10/12/2018,Syyriankatu 1,Floora Lpk,60.2087031,24.9711684\nILMANPUHDISTIN VUOKRAT,12/06/2018,12/06/2018,Tolarintie 6,Pohjois-Haagan ala-aste,60.2267815,24.8922139\nPIHAKATOKSEN VALOJEN KUNNOSTUS,16/04/2018,16/04/2018,Klaavuntie 17,Puotilan ala-aste,60.2138607,25.0937093\nKALUSTEMUUTOKSET,02/01/2018,02/01/2018,Turjantie,Kimmo Lpk,60.209665,24.9431283\nTEKNISENTYÖNLUOKAN KOSTEUSVAURIO,02/01/2018,02/01/2018,Berliininkatu 4-6,Arabian peruskoulu,60.2037681,24.9751769\nPIHAN PARANNUS,02/01/2018,02/01/2018,Berliininkatu 4-6,Arabian peruskoulu,60.2037681,24.9751769\n"KOURUJEN PUHDISTUS, PATOLEVYN KIINN",04/01/2018,04/01/2018,Piianpolku,Piianpuisto Asukastalo Renki,60.9491302,25.8178856\nSEINÄN KORJAUS,05/01/2018,05/01/2018,Mäkipellontie 19,Alppilan lukio,60.2204204,24.8987169\nKORJAUSTYÖT LISTAN MUKAAN,04/01/2018,04/01/2018,Louhentie 3,Yhtenäiskoulu,60.2142673,24.940526\nRAKENNEAVAUKSET,09/01/2018,09/01/2018,Paviljonkipäiväkodit,Paviljonkipäiväkodit,0,0\nPIENKORJAUKSET,12/01/2018,12/01/2018,Maunulanmäki 5,Maunulan ala-aste,60.2281332,24.9295655\nSOKKELIN TUULETUSAUKKOJEN VERKOTUS,12/01/2018,12/01/2018,Yhdyskunnantie,Lpk Pakilan lastenpaikka,60.2489284,24.9582438\nJUHLASALIN PIENKORJAUKSET,15/01/2018,15/01/2018,Mäkelänkatu 93,Käpylän peruskoulu,60.2089919,24.9453831\nVAATENAULAKOT,15/01/2018,15/01/2018,Kartanomuseontie 2,Metsolan ala-aste,60.2517035,24.9617442\nKENKÄTELINEEN KUNNOSTUS,15/01/2018,15/01/2018,Solakallionti,Metsolan ala-asteen koulu,0,0\nKAAPPISÄNKYJEN KUNNOSTUS,15/01/2018,15/01/2018,Syyriankatu 3,Floora Lpk,60.2083666,24.9712904\nAKUSTOLEVYJEN VAIHTO,15/01/2018,15/01/2018,Oulunkylän ala-aste/Veräjälaakson sivuko,Oulunkylän ala-aste/Veräjälaakson sivuko,0,0\nLASITUSTYÖT JA KESKUSKELLONKORJAUS,15/01/2018,15/01/2018,Pohjolankatu 45,Kåttby lågstadieskola,61.6984128,27.2387505\nRAKENNEAVAUKSET,16/01/2018,16/01/2018,Hangaari,Malmin lentoasema,0,0\nSISÄÄNKÄYNTIKATOKSEN SEINÄ,17/01/2018,17/01/2018,Piianpolku 3-5,Apila Lpk,61.5199407,23.8936908\nPIENKORJAUKSET,17/01/2018,16/03/2018,Teinintie 13,Norppa Lpk,60.2301075,24.9588736\nNAULAKOITA,17/01/2018,17/01/2018,Teinintie 12,Oulunkylän ala-aste,60.2320863,24.9607072\nVÄLIVERHO ASENNETTUNA,16/01/2018,16/01/2018,Vetelintie 4,Pelimanni Lpk,60.2369443,24.8844445\nTAULUN KIINNITYS,18/01/2018,18/01/2018,Maapadontie 1,Majava Lpk,60.2314735,24.9494636\nOVI KORJAUS,18/01/2018,18/01/2018,Mikkolankuja 3,Toivolan koulu,60.2407747,24.9663908\nPALOKATKOTYÖT,18/01/2018,18/01/2018,Jokiniementie 3,Veräjämäki Lpk,60.2242297,24.9737242\nIKKUNAKORJAUS,26/01/2018,26/01/2018,Pohjolankatu 45,Kottby lågstadieskola,61.6984128,27.2387505\nNAULAKOT JA KENKÄTELINEET,26/01/2018,26/01/2018,Maunulanmäki 5,Maunulan ala-aste,60.2281332,24.9295655\nPALOTARKASTAJAN LISTAN MUK.TYÖT,29/01/2018,29/01/2018,Kylänvanhimmantie 1,Nestori Lpk,60.2255527,24.9570027\n"IKKUNAKORJAUS, ÄÄNIERISTELEVYT",29/01/2018,29/01/2018,Kivalterinpolku 3,Ågeli Lpk,60.2308622,24.9576603\nKELLARIN KOSTEUSVAURIOKORJAUS,31/01/2018,13/03/2018,Kullervonkatu 7,Käpylän pelastuslaitos,60.2167593,24.9569788\nTYTTÖJEN WC:N KOSTEUSVAURIOKORJAUS,31/01/2018,31/01/2018,Viinenkuja 6,Pitäjänmäen peruskoulu,60.2265564,24.860191\nLIIKUNTASALIN KAITEEN KORJAUS,31/01/2018,31/01/2018,Mäkelänkatu 93,Käpylän peruskoulu,60.2089919,24.9453831\nFYSIIKANLUOKAN MATTOTYÖ,01/02/2018,01/02/2018,Pilkekuja 10,Pakilan yläaste,60.2423639,24.9271691\nSOKKELIN TUULETUSLUUKUT,06/02/2018,06/02/2018,Pohjolankatu 3,Pellava Lpk,61.6951919,27.2346667\nTIMANTTIPORAUKSET YM.,06/02/2018,06/02/2018,Ylätuvanpolku 4,Torpparinmäki Lp,60.25844,24.9466267`
export const data = db.split('\n').map(row => {
  const attributes = row.split(',')
  return {
    description: attributes[0],
    startDate: attributes[1],
    endDate: attributes[2],
    address: attributes[3],
    name: attributes[4],
    lat: Number(attributes[5]),
    lng: Number(attributes[6]),
  }
})