import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './styles.css';
import SubtitlePage from './SubtitlePage.js';
/*komentar*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: [
        { id: 1, name: 'Osnovni pojmi v AI', content: `Umetna inteligenca (UI) je široko področje računalništva, ki se ukvarja z ustvarjanjem inteligentnih agentov, ki so sistemi, ki lahko samostojno razmišljajo, delujejo in se učijo. Nekateri osnovni pojmi v umetni inteligenci so:

        Učenje: Učenje je proces, s katerim se agent izboljšuje v opravljanju naloge na podlagi izkušenj. Obstaja veliko različnih vrst učenja, vključno z nadzorovanim učenjem, nenadzorovanim učenjem in utrjevanjem učenja.
        Predstavljanje znanja: Predstavljanje znanja je način kodiranja informacij o svetu v računalniškem programu. Obstaja veliko različnih načinov predstavljanja znanja, vključno z logičnimi mrežami, produkcijskimi sistemi in semantičnimi mrežami.
        Računanje z negotovostjo: Računanje z negotovostjo se ukvarja z zastopanjem in sklepanjem o negotovih ali nepopolnih informacijah. To je pomembno področje UI, saj se mnogi realni problemi ukvarjajo z negotovostjo.
        Načrtovanje: Načrtovanje je proces določanja zaporedja dejanj, ki jih mora agent izvesti, da bi dosegel določen cilj. Obstaja veliko različnih algoritmov načrtovanja, vključno z iskanjem v širini in iskanjem v globini.
        Razumevanje naravnega jezika: Razumevanje naravnega jezika (NLP) je področje UI, ki se ukvarja z interakcijo med računalniki in človeškim jezikom. NLP se uporablja v številnih aplikacijah, kot so strojno prevajanje, prepoznavanje govora in obdelava besedila.
        Računalniški vid: Računalniški vid je področje UI, ki se ukvarja z razumevanjem digitalnih slik in videoposnetkov. Računalniški vid se uporablja v številnih aplikacijah, kot so prepoznavanje obraza, prepoznavanje objektov in avtonomna vožnja.` },
        { id: 2, name: 'Ključni koncepti strojnega učenja', content: `Strojno učenje je veja umetne inteligence (UI), ki se ukvarja z ustvarjanjem sistemov, ki se lahko učijo iz izkušenj in izboljšujejo svojo zmogljivost brez eksplicitnega programiranja. To pomeni, da se lahko sistemi strojnega učenja samodejno prilagajajo novim podatkom in situacijam, kar jim omogoča, da opravljajo zapletene naloge, kot so prepoznavanje slik, prepoznavanje govora in napovedovanje trendov.

        Nekateri ključni koncepti strojnega učenja so:
        
        Učenje s podatki: Večina sistemov strojnega učenja se uči iz podatkov, ki so sestavljeni iz primerov vhodnih podatkov in želenih izhodov. Ti podatki se lahko uporabijo za usposabljanje modela strojnega učenja, ki se lahko nato uporablja za napovedovanje ali odločanje o novih vnosnih podatkih.
        Nadzorovano učenje: V nadzorovanem učenju so podatki opremljeni z želenimi izhodi, imenovanimi označbe. Na primer, nabor podatkov slik mačk in psov z ustreznimi označbami "mačka" in "pes" bi se uporabil za usposabljanje modela strojnega učenja za prepoznavanje mačk in psov na novih slikah.
        Nenadzorovano učenje: V nenadzorovanem učenju podatki nimajo označb. Namen nenadzorovanega učenja je odkriti vzorce ali strukturo v podatkih. Na primer, nabor podatkov o nakupnih navadah kupcev bi se lahko uporabil za nenadzorovano učenje za odkrivanje skupin kupcev z podobnimi nakupnimi vzorci.
        Učenje s pojačanjem: V učenju s pojačanjem se agent uči iz interakcije z okoljem. Agent prejme dejanja, ki jih lahko izvede, in povratne informacije o posledicah svojih dejanj. Cilj agenta je maksimizirati skupno nagrado, ki jo prejme od okolja.
        Nevronske mreže: Nevronske mreže so navdihnjene s človeškimi možgani in so sestavljene iz umetnih nevronov, ki so medsebojno povezani. Nevronske mreže se lahko naučijo zelo zapletenih funkcij iz podatkov in so zelo učinkovite pri nalogah, kot so prepoznavanje slik in prepoznavanje govora.
        Algoritmi optimizacije: Algoritmi optimizacije se uporabljajo za iskanje parametrov modela strojnega učenja, ki najbolje ustrezajo podatkom. Ti algoritmi poskušajo minimizirati napako modela ali maksimizirati njegovo zmogljivost.
        Strojno učenje ima široko paleto uporabe v različnih panogah, vključno z:
        
        Računalniški vid: Prepoznavanje slik, prepoznavanje objektov, sledenje gibanju
        Obdelava naravnega jezika: Prepoznavanje govora, strojno prevajanje, obdelava besedila
        Robotika: Krmiljenje robotov, navigacija, manipulacija s predmeti
        Finančni trgi: Napovedovanje cen delnic, odkrivanje goljufij, upravljanje s tveganji
        Zdravstvo: Diagnoza bolezni, odkrivanje zdravil, personalizirana medicina
        Strojno učenje je močno orodje, ki ima potencial za revolucijo na mnogih področjih našega življenja. Pomembno pa je, da strojno učenje uporabljamo odgovorno in etično. Pomembno se je tudi zavedati potencialnih tveganj strojnega učenja, kot so pristranskost, zloraba in izguba delovnih mest.` },
        { id: 3, name: 'Temeljni koncepti nevronskih mrež', content: `Nevronske mreže so ena od najpomembnejših vej umetne inteligence (UI), ki se močno navdihujejo pri delovanju človeških možganov. Te mreže so sestavljene iz umetnih nevronov, ki so medsebojno povezani v kompleksne strukture. Vsak nevron prejema vhodne signale iz drugih nevronov ali iz zunanjih virov, te signale obdela in nato pošilja izhodne signale drugim nevronom.

        Nevronske mreže se lahko učijo iz podatkov in se sčasoma prilagajajo, da bi izboljšale svojo zmogljivost pri opravljanju določenih nalog. Ta proces učenja se imenuje strojno učenje in se lahko izvaja na dva načina:
        
        Nadzorovano učenje: V nadzorovanem učenju so nevronske mreže usposobljene na naboru podatkov, ki vsebuje primere vhodnih podatkov in želenih izhodov. Na primer, nabor slik mačk in psov z ustreznimi označbami "mačka" in "pes" bi se uporabil za usposabljanje nevronske mreže za prepoznavanje mačk in psov na novih slikah.
        Nenadzorovano učenje: V nenadzorovanem učenju nevronske mreže niso usposobljene na naboru podatkov z želenimi izhodi. Namesto tega se morajo same naučiti odkriti vzorce in strukturo v podatkih. Na primer, nabor podatkov o nakupnih navadah kupcev bi se lahko uporabil za nenadzorovano učenje nevronske mreže za odkrivanje skupin kupcev z podobnimi nakupnimi vzorci.
        Nevronske mreže so sestavljene iz treh glavnih komponent:
        
        Nevron: Osnovna enota nevronske mreže. Nevron prejema vhodne signale, jih obdela in nato pošilja izhodne signale.
        Sinapse: Povezave med nevroni. Vsaka sinapsa ima svojo težo, ki določa moč povezave med dvema nevronoma.
        Funkcija aktivacije: Funkcija, ki določa izhodni signal nevrona na podlagi njegovih vhodnih signalov.
        Nevronske mreže se lahko učijo s prilagajanjem uteži sinaps. Ta proces prilagajanja se imenuje učenje s povratnimi informacijami in se lahko izvaja z različnimi algoritmi, kot sta algoritem povratnega širjenja in algoritem hebbianovega učenja.
        
        Nevronske mreže imajo široko paleto uporabe v različnih panogah, vključno z:
        
        Računalniški vid: Prepoznavanje slik, prepoznavanje objektov, sledenje gibanju
        Obdelava naravnega jezika: Prepoznavanje govora, strojno prevajanje, obdelava besedila
        Robotika: Krmiljenje robotov, navigacija, manipulacija s predmeti
        Finančni trgi: Napovedovanje cen delnic, odkrivanje goljufij, upravljanje s tveganji
        Zdravstvo: Diagnoza bolezni, odkrivanje zdravil, personalizirana medicina
        Nevronske mreže so močno orodje, ki ima potencial za revolucijo na mnogih področjih našega življenja. Pomembno pa je, da nevronske mreže uporabljamo odgovorno in etično. Pomembno se je tudi zavedati potencialnih tveganj nevronskih mrež, kot so pristranskost, zloraba in izguba delovnih mest.` },
        { id: 4, name: 'Obdelava naravnega jezika', content: `Obdelava naravnega jezika (ONJ) je veja umetne inteligence (UI), ki se ukvarja z interakcijo med računalniki in človeškim jezikom. Cilj ONJ je omogočiti računalnikom razumevanje in ustvarjanje človeškega jezika, kar vključuje naloge, kot so:

        Prepoznavanje govorjenega jezika: Pretvorba govorjenega jezika v besedilo.
        Razumevanje naravnega jezika (RNJ): Razumevanje pomena besedila in konteksta, v katerem se uporablja.
        Ustvarjanje naravnega jezika (UNJ): Ustvarjanje besedila, ki je skladno z gramatiko in semantiko človeškega jezika.
        Strojno prevajanje: Prevajanje besedila iz enega jezika v drugega.
        Povzemanje besedila: Ustvarjanje krajšega besedila, ki ohranja ključne informacije izvirnega besedila.
        Odgovarjanje na vprašanja: Odgovarjanje na vprašanja o besedilu.
        Analiza besedila: Razvrščanje besedila v kategorije, odkrivanje tem in izločanje pomembnih informacij.
        ONJ ima široko paleto uporabe v različnih panogah, vključno z:
        
        Storitve za stranke: Chatboti za pomoč strankam pri reševanju težav in odgovarjanju na vprašanja.
        Izobraževanje: Osebni učni sistemi, ki se lahko prilagajajo individualnim potrebam študentov.
        Zdravstvo: Sistemi za elektronske zdravstvene kartoteke, ki lahko samodejno izvlečejo ključne informacije iz besedilnih zapisov.
        Pravo: Sistemi za iskanje po pravnih dokumentih in prepoznavanje relevantnih precedensov.
        Novinarstvo: Avtomatsko ustvarjanje novic in poročil.
        Trženje: Ciljno usmerjeno oglaševanje in personalizirana priporočila izdelkov.
        ONJ se sooča s številnimi izzivi, kot so:
        
        Večpomenskost: Beseda ali fraza lahko ima več pomenov, odvisno od konteksta.
        Nejasnost: Besedilo je lahko nejasno ali dvoumno, kar otežuje razumevanje njegovega pomena.
        Variabilnost: Človeški jezik je zelo variabilen in se lahko spreminja glede na govorca, situacijo in čas.
        Pomanjkanje podatkov: Za usposabljanje modelov ONJ je potrebno veliko podatkov, ki so lahko dragi in težko dostopni.
        Kljub tem izzivom je ONJ hitro rastoče področje z velikim potencialom za izboljšanje našega življenja. Razvoj novih tehnologij ONJ bo omogočil računalnikom, da bodo še bolje razumeli in se odzivali na človeški jezik, kar bo odprlo nove možnosti za interakcijo med ljudmi in stroji.` },
        { id: 5, name: 'Računalniški vid', content: `Računalniški vid je veja umetne inteligence (UI), ki se ukvarja z razumevanjem in analizo vizualnih informacij iz digitalnih slik in videoposnetkov. Cilj računalniškega vida je omogočiti računalnikom, da "vidijo" in razumejo svet okoli sebe na podoben način kot ljudje. To vključuje naloge, kot so:

        Prepoznavanje objektov: Prepoznavanje in kategoriziranje objektov v slikah in videoposnetkih.
        Detekcija objektov: Odkrivanje in lokacija objektov v slikah in videoposnetkih.
        Sledenje objektov: Sledenje gibanju objektov v videoposnetkih.
        Semantična segmentacija: Razvrščanje vsakega piksela v sliki v določeno kategorijo.
        Prepoznavanje obraza: Prepoznavanje in preverjanje identitete ljudi na slikah in videoposnetkih.
        Rekonstrukcija 3D: Ustvarjanje 3D modelov iz slik ali videoposnetkov.
        Avtonomna vožnja: Omogočanje avtomobilom, da se sami vozijo po cestah.
        Medicinska diagnostika: Pomoč zdravnikom pri diagnosticiranju bolezni z analizo slik in videoposnetkov.
        Računalniški vid ima široko paleto uporabe v različnih panogah, vključno z:
        
        Varnost: Sistemi za nadzor in prepoznavanje obraza za preprečevanje zločinov.
        Kmetijstvo: Avtomatsko krmiljenje kmetijskih strojev in spremljanje pridelkov.
        Proizvodnja: Avtomatsko pregledovanje izdelkov za napake.
        Robotika: Omogočanje robotom, da se gibljejo in komunicirajo s svojim okoljem.
        Arheologija: Analiza slik in videoposnetkov arheoloških najdišč.
        Astronomija: Analiza slik in videoposnetkov vesolja.
        Računalniški vid se sooča s številnimi izzivi, kot so:
        
        Osvetlitev: Spremembe v osvetlitvi lahko otežijo prepoznavanje objektov in značilnosti v slikah.
        Hrup: Šum v slikah in videoposnetkih lahko zamegli informacije in oteži analizo.
        Occluzija: Nekateri deli objektov so lahko skriti pred pogledom, kar otežuje prepoznavanje celotnega objekta.
        Variabilnost: Objekti se lahko pojavijo v različnih oblikah, velikostih in barvah, kar otežuje prepoznavanje istega objekta v različnih kontekstih.
        Kljub tem izzivom je računalniški vid hitro rastoče področje z velikim potencialom za izboljšanje našega življenja. Razvoj novih tehnologij računalniškega vida bo omogočil računalnikom, da bodo še bolje razumeli vizualni svet, kar bo odprlo nove možnosti za interakcijo med ljudmi in stroji.` },
        { id: 6, name: 'Etični izzivi in odgovornost', content: `Umetna inteligenca (UI) ima velik potencial za izboljšanje našega življenja na številne načine, vendar je pomembno, da se zavedamo tudi etičnih izzivov in odgovornosti, ki so povezani z njenim razvojem in uporabo. Nekateri od ključnih etičnih izzivov UI vključujejo:

        Pristranskost: Algoritmi UI so lahko pristranski, kar pomeni, da lahko diskriminirajo določene skupine ljudi. To se lahko zgodi, če so podatki, ki se uporabljajo za usposabljanje algoritmov, pristranski ali če so algoritmi sami zasnovani na način, ki diskriminira določene skupine. Na primer, algoritem za prepoznavanje obraza, ki je bil usposobljen na naboru podatkov predvsem belcev, lahko ima težave pri prepoznavanju temnopoltih ljudi.
        
        Preglednost: Algoritmi UI so lahko zelo zapleteni in je težko razumeti, kako delujejo. To lahko oteži zagotavljanje, da so algoritmi pošteni in da ne diskriminirajo. Poleg tega je lahko težko odgovoriti, kdo je odgovoren za napake, ki jih naredijo algoritmi UI.
        
        Avtonomija: Nekateri sistemi UI postajajo vse bolj avtonomni, kar pomeni, da lahko sprejemajo odločitve brez človeškega posredovanja. To lahko povzroči težave, če sistemi UI sprejemajo odločitve, ki škodujejo ljudem ali kršijo njihove pravice. Na primer, avtonomen avtomobil bi se lahko odločil, da se izogne pešcu, kar bi povzročilo trčenje z drugim avtomobilom.
        
        Zloraba: Sistemi UI se lahko zlorabijo za zlonamerne namene, kot so nadzor ljudi, širjenje dezinformacij ali izvajanje kibernetskih napadov. Pomembno je vzpostaviti varnostne ukrepe, ki bodo preprečili zlorabo sistemov UI.
        
        Odgovornost: Pomembno je določiti, kdo je odgovoren za posledice sistemov UI. Ali so odgovorni razvijalci sistemov, ljudje, ki jih uporabljajo, ali lastniki podjetij, ki jih uporabljajo? To je zapleteno vprašanje, na katerega še ni dokončnega odgovora.
        
        Da bi se spopadli z etičnimi izzivi UI, je pomembno, da razvijemo etične smernice za razvoj in uporabo UI. Te smernice bi morale upoštevati načela, kot so poštenost, preglednost, odgovornost in dobro počutje ljudi. Pomembno je tudi izobraževati ljudi o etičnih posledicah UI in jih spodbujati k kritičnemu razmišljanju o uporabi sistemov UI.
        
        Poleg teh etičnih izzivov je pomembno upoštevati tudi vpliv UI na družbo. UI ima potencial za avtomatizacijo številnih delovnih mest, kar lahko povzroči izgubo delovnih mest in socialne nemi re. Pomembno je razviti politike, ki bodo ljudem pomagale prilagoditi se spreminjajočemu se delovnemu trgu in jim zagotoviti potrebno podporo.
        
        Umetna inteligenca je močno orodje, ki ima potencial za izboljšanje našega življenja na številne načine. Vendar pa je pomembno, da se zavedamo tudi etičnih izzivov in odgovornosti, ki so povezani z njenim razvojem in uporabo. Z skrbno načrtovanjem in predvidevanjem lahko zagotovimo, da se UI uporablja na način, ki koristi celotni družbi.
        
        Upam, da vam je ta kratek pregled etičnih izzivov in odgovornosti pri umetni inteligenci dal koristen uvod v to pomembno temo.
        ` },
      ],
      selectedSubtitle: null, 
    };
  }

  handleSubtitleClick = (subtitle) => {
    this.setState({ selectedSubtitle: subtitle });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li>
                <Link to="/">Domov</Link>
              </li>
              {this.state.subtitles.map((subtitle) => (
                <li key={subtitle.id}>
                  <Link to={`/subtitles/${subtitle.name}`} onClick={() => this.handleSubtitleClick(subtitle)}>
                    {subtitle.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {this.state.subtitles.map((subtitle) => (
                <Route key={subtitle.id} path={`/subtitles/${subtitle.name}`} element={<SubtitlePage subtitle={subtitle} />} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="subtitle-content">
      <h2></h2>
      <p>Welcome to the AI Subtitles App!</p>
    </div>
  );
}

export default App;