const db = `Työnkuvaus,Alkurajapvm,Loppuraja,osoite,nimi,lat,lng\nVIEMÄRIKANNEN KORJAUS,15/08/2018,15/08/2018,Lönnrotinkatu 3,Hietalahden kauppahalli,61.058442,28.1806387\nINVA WC:N PAPERITELINEEN UUSIMINEN,16/08/2018,16/08/2018,Päijänteentie 5,Vallilan kirjasto,60.1922199,24.9623972\nPUURUNGON POISTO PIHALTA,21/08/2018,12/09/2018,Riihitie 9,Elka Dh,62.2226493,25.7165391\nVARASTOKONTIN POISTO TYÖMAALTA,21/08/2018,21/08/2018,Raumantie 2,Munkkivuoren ala-aste,60.2054441,24.8787071\nPIHAKIVETYKSEN KORJAUS,21/08/2018,21/08/2018,Aleksis Kiven katu 3,Harjun nuorisotalo,61.4959873,23.7604419\nGRAFITTIEN POISTO,21/08/2018,21/08/2018,Metsäpurontie 4,Maunula-talo,60.605367,24.8556363\n"BETONILATTIAN PAIKKAUS, SERMIT",21/08/2018,21/08/2018,Teinintie 12,Oulunkylän ala-aste,60.2320863,24.9607072\nKELLARIN TYHJENNYS,22/08/2018,22/08/2018,Limingantie 78,Marjala Lpk,60.205136,24.9558065\nOVI ERISTEIDEN KORJAUS,23/08/2018,23/08/2018,Koulutanhua 1,Laajasalon peruskoulu,60.1788623,25.0574486\nVALKOTAULUN JA PÖYTIEN SIIROJA,23/08/2018,23/08/2018,Laivalahdenkatu,Helsingin Silkkikutomo,60.1945579,25.0374316`
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