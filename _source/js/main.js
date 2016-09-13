
$(document).ready(function () {
	$("body").on("click", "#btnGenerate", function() {
		getLinks();
	});

	drawPage();

	var $txtInput = $("#txtInput");


	// listen for enter key and button click
	$(document).keypress(function (e) {
		if (e.keyCode === 13) {
			getLinks();
		}
	});

	// listen for clear button
	$("body").on("click", "#clearSearch", function() {
		$txtInput
			.val("")
			.focus()
			.trigger("change");
	});

	// listener for show/hide of clear button
	$("body").on("change keyup", $txtInput, function() {
		console.log("input: " + $txtInput.val());
		showHideClearButton();
	});

	// select and focus textbox
	$txtInput
		.select()
		.focus();

	// set initial state of clear button
	showHideClearButton();
});


function showHideClearButton() {
	var showHide = $("#txtInput").val() === "";
	$("#clearSearch").toggleClass("not-visible", showHide);
}


function getURLVars(key_str) {
	"use strict";
	if (window.location.search) {
		var query = window.location.search.substr(1),
			pairs = query.split(/&|;/),
			i,
			pair;
		for (i = 0; i < pairs.length; i++) {
			pair = pairs[i].split("=");
			if (unescape(pair[0]) === key_str) {
				return unescape(pair[1]);
			}
		}
	} else {
		return '';
	}
}


function getLinks() {
	"use strict";
	document.location = document.location.pathname + '?txtInput=' + $("#txtInput").val();
}


function getResults() {
	var tSearchString,
		tSearchStringPlus,
		tSearchStringShowNameOnlyPlus;

		tSearchString = '';
		tSearchString = getURLVars('txtInput');
		tSearchString = tSearchString.replace(/ /g, ' ');
		tSearchString = tSearchString.replace(/\./g, ' ');
		tSearchString = tSearchString.replace(/_/g, ' ');
		tSearchString = tSearchString.replace(/-/g, ' ');
		tSearchString = tSearchString.replace(/'/g, '%27');

		tSearchStringShowNameOnlyPlus = tSearchString.replace(/[se]{1}[0-9]{2}/gi, '');
		tSearchStringShowNameOnlyPlus = tSearchStringShowNameOnlyPlus.replace(/^\s+|\s+$/gm,'');
		tSearchStringShowNameOnlyPlus = tSearchStringShowNameOnlyPlus.replace(/ /g, '+');

		tSearchStringPlus = tSearchString.replace(/ /g, '+');
		tSearchString = tSearchString.replace(/ /g, '%20');

	//nzb
	var ListNzb,
		NZBsDotOrg = " <a target='_blank' title='NZBsDotOrg' href='http://nzbs.org/search/" + tSearchString + "'> <i class='sprite-icons-nzbsdotorg'></i></a> ",
		NZBIndex = " <a target='_blank' title='NZBIndex' href='http://www.nzbindex.nl/search/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-nzbindex'></i></a> ",
		NZBKing = " <a target='_blank' title='NZBKing' href='http://www.nzbking.com/search/?q=\"" + tSearchStringPlus + "\"'> <i class='sprite-icons-nzbking'></i></a> ",
		Binsearch = " <a target='_blank' title='Binsearch' href='http://www.binsearch.info/?q=" + tSearchStringPlus + "&max=100&adv_age=1100'> <i class='sprite-icons-binsearch'></i></a> ",
		NzbFinder = " <a target='_blank' title='NzbFinder' href='https://www.nzbfinder.ws/search/" + tSearchString + "'> <i class='sprite-icons-nzbfinder'></i></a> ",
		OMGWTFNZBz = " <a target='_blank' title='OMGWTFNZBs' href='http://omgwtfnzbs.org/browse.php?search=" + tSearchStringPlus + "&amp;cat=default&amp;sort=1&amp;type=1'> <i class='sprite-icons-omg'></i></a> ",
		DogNZB = " <a target='_blank' title='DogNZB' href='http://dognzb.cr/search/" + tSearchString + "'> <i class='sprite-icons-dognzb'></i></a> ",
		NZBClub = " <a target='_blank' title='NZBClub' href='http://www.nzbclub.com/search.aspx?q=" + tSearchStringPlus + "'> <i class='sprite-icons-nzbclub'></i></a> ",
		FindNzb = " <a target='_blank' title='FindNzb' href='http://findnzb.net/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-findnzb'></i></a> ",
		NZBGeek = " <a target='_blank' title='NZBGeek' href='https://nzbgeek.info/geekseek.php?browseincludewords=" + tSearchString + "'> <i class='sprite-icons-nzbgeek'></i></a> ";

		ListNzb = NZBsDotOrg + NZBIndex + NZBKing + Binsearch + NzbFinder + OMGWTFNZBz + DogNZB + NZBClub + FindNzb + NZBGeek;

	//newznab public
	var ListNewznab,
		OZNzb = " <a target='_blank' title='OZNzb' href='https://www.oznzb.com/search/" + tSearchString + "'> <i class='sprite-icons-oznzb'></i></a> ",
		NzbSu = " <a target='_blank' title='NzbSu' href='https://nzb.su/search/" + tSearchString + "'> <i class='sprite-icons-nzbsu'></i></a> ",
		NzbIndexIn = " <a target='_blank' title='NzbIndexIn' href='http://nzbindex.in/search/" + tSearchString + "'> <i class='sprite-icons-nzbindexin'></i></a> ",
		NzbPlanet = " <a target='_blank' title='NzbPlanet' href='https://nzbplanet.net/search/" + tSearchStringPlus + "'> <i class='sprite-icons-nzbplanet'></i></a> ",
		Dusky = " <a target='_blank' title='Dusky' href='https://dusky.deepcave.net/search/" + tSearchString + "'> <i class='sprite-icons-dusky'></i></a> ";

		ListNewznab = OZNzb + NzbSu + NzbIndexIn + NzbPlanet + Dusky;

	//Other Links (no search param passed)
	var ListOther,
		NZBMovieSeeker = " <a target='_blank' title='NZB Movie Seeker' href='http://www.nzbmovieseeker.com/'> <i class='sprite-icons-nzbmovieseeker'></i></a> ";

		ListOther = NZBMovieSeeker;

	//Bit Torrent Links
	var ListTorrent,
		BTDigg = "", //" <a target='_blank' title='BTDigg' href='http://btdigg.org/search?info_hash=&q=" + tSearchStringPlus + "'> <i class='sprite-icons-btdigg'></i></a> ",
		TorrentProject = " <a target='_blank' title='TorrentProject' href='http://torrentproject.se/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-torrentproject'></i></a> ",
		NewTorrents = " <a target='_blank' title='NewTorrents' href='http://www.newtorrents.info/search/" + tSearchString + "'> <i class='sprite-icons-newtorrents'></i></a> ",
<<<<<<< HEAD
=======
		KickAssTorrents = " <a target='_blank' title='KickAssTorrents' href='https://kattorrentes.com/usearch/" + tSearchString + "/'> <i class='sprite-icons-kickasstorrents'></i></a> ",
>>>>>>> origin/master
		ThePirateBay = " <a target='_blank' title='ThePirateBay' href='http://thepiratebay.se/search/" + tSearchString + "'> <i class='sprite-icons-thepiratebay'></i></a> ",
		ExtraTorrent = " <a target='_blank' title='ExtraTorrent' href='http://extratorrent.com/search/?search=" + tSearchStringPlus + "'> <i class='sprite-icons-extratorrent'></i></a> ",
		ISOHunt = " <a target='_blank' title='ISOHunt' href='http://isohunt.to/torrents/?ihq=" + tSearchStringPlus + "'> <i class='sprite-icons-isohunt'></i></a> ",
		BitSnoop = " <a target='_blank' title='BitSnoop' href='http://bitsnoop.com/search/all/" + tSearchStringPlus + "'> <i class='sprite-icons-bitsnoop'></i></a> ",
		l337x = " <a target='_blank' title='' href='http://1337x.to/search/" + tSearchStringPlus + "/1/'> <i class='sprite-icons-l337x'></i></a> ",
		EzTv = " <a target='_blank' title='EZTV' href='https://eztv.ag/search/" + tSearchStringPlus + "'> <i class='sprite-icons-eztv'></i></a> ",
		FastBot = " <a target='_blank' title='FastBot' href='https://www.fastbot.me/" + tSearchString + "-1-1/'> <i class='sprite-icons-fastbot'></i></a> ",
		btdb = " <a target='_blank' title='BTDB' href='https://btdb.in/q/" + tSearchString + "/'> <i class='sprite-icons-btdb'></i></a> ",
		LimeTorrents = " <a target='_blank' title='Lime Torrents' href='https://www.limetorrents.cc/search/all/" + tSearchString + "/seeds/1/'> <i class='sprite-icons-limetorrents'></i></a> ";

		ListTorrent = BTDigg + TorrentProject + NewTorrents + ThePirateBay + ExtraTorrent + ISOHunt + BitSnoop + l337x + EzTv + FastBot + btdb + LimeTorrents;

	//XDCC Search
	var ListXDCC,
		SunXDCC;

		ExcursionScript = " <a class='h' target='_blank' title='Excursion Script' href='https://www.dropbox.com/s/nxiorybg930gcm8/excursion9.5.install.exe'> <i class='sprite-icons-excursionscript'></i></a> ";
		XDCCMe = " <a target='_blank' title='XDCCMe' href='http://www.xdcc.me'> <i class='sprite-icons-xdccme'></i></a> ";
		SunXDCC = " <a target='_blank' title='SunXDCC' href='http://sunxdcc.com/?sterm=" + tSearchStringPlus + "'> <i class='sprite-icons-sunxdcc'></i></a> ";
		ListXDCC = ExcursionScript + XDCCMe + SunXDCC;

	//AudioBook
	var ListAudioBook,
		AudioBookBay;

		AudioBookBay = " <a target='_blank' title='AudioBookBay' href='http://audiobookbay.co/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-audiobookbay'></i></a> ";
		AudioBookVault = " <a target='_blank' title='AudioBookVault' href='http://www.audiobookvault.ws/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-audiobookvault'></i></a> ";
		ListAudioBook = AudioBookBay + AudioBookVault;
		// add btdigg to the list
		ListAudioBook += BTDigg;

	//Book / Journal
	var ListBook,
		Libgen = " <a target='_blank' title='Libgen' href='http://gen.lib.rus.ec/search.php?req="+ tSearchStringPlus + "&lg_topic=libgen&open=0&view=simple&phrase=1&column=def'> <i class='sprite-icons-book1'></i></a> ",
		BooksC = " <a target='_blank' title='BooksC' href='http://booksc.org/s/?q=" + tSearchStringPlus + "&t=0'> <i class='sprite-icons-book2'></i></a> ",
		BookRE = " <a target='_blank' title='SciEng' href='http://bookre.org/isearch?q=" + tSearchStringPlus + "'> <i class='sprite-icons-book3'></i></a> ",
		BookZZ = " <a target='_blank' title='BookZZ' href='http://bookzz.org/s/?q=" + tSearchStringPlus + "&t=0'> <i class='sprite-icons-book4'></i></a> ",
		SciHub = " <a target='_blank' title='Sci-Hub' href='http://www.sci-hub.cc/'> <i class='sprite-icons-scihub'></i></a> ";

		ListBook = Libgen + BooksC + BookRE + BookZZ + SciHub;

	//Music/Video
	var ListMusicVideo,
		bandcamp = " <a target='_blank' title='bandcamp' href='http://bandcamp.com/search?q=" + tSearchStringPlus +"'> <i class='sprite-icons-bandcamp'></i></a> ",
		StreamSquid = " <a target='_blank' title='streamsquid' href='http://streamsquid.com/'> <i class='sprite-icons-streamsquid'></i></a> ",
		mp3Juices = " <a target='_blank' title='MP3 Juices' href='http://www.mp3juices.cc/'> <i class='sprite-icons-mp3juices'></i></a> ",
		tunefind = " <a target='_blank' title='Tune Find' href='http://www.tunefind.com/search/site?q=" + tSearchStringPlus + "'> <i class='sprite-icons-tunefind'></i></a> ";

		ListMusicVideo = bandcamp + StreamSquid + mp3Juices + tunefind;

	//PreDBs
	var ListPreDB,
		PreDbMe = " <a target='_blank' title='PreDBMe' href='http://predb.me/?search=" + tSearchStringPlus + "'> <i class='sprite-icons-predbme'></i></a> ",
		NfoHump = " <a target='_blank' title='VCDQ' href='http://www.nfohump.com/'> <i class='sprite-icons-nfohump'></i></a> ";

		ListPreDB = PreDbMe + NfoHump;

	//Subtitle
	var ListSubtitle,
		OpenSubtitles = " <a target='_blank' title='Open Subtitles' href='http://www.opensubtitles.org/en/search2/sublanguageid-all/moviename-" + tSearchStringPlus + "'> <i class='sprite-icons-opensubtitles'></i></a> ";

		ListSubtitle = OpenSubtitles;


	var results = "";
	results += "  <div class='results'>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>NZB</div>";
	results += "      <div class='row__icons'>" + ListNzb + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Newznab</div>";
	results += "      <div class='row__icons'>" + ListNewznab + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Torrent</div>";
	results += "      <div class='row__icons'>" + ListTorrent + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Audio Book</div>";
	results += "      <div class='row__icons'>" + ListAudioBook + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Book</div>";
	results += "      <div class='row__icons'>" + ListBook + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Pre DB</div>";
	results += "      <div class='row__icons'>" + ListPreDB + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Music/Video</div>";
	results += "      <div class='row__icons'>" + ListMusicVideo + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Other</div>";
	results += "      <div class='row__icons'>" + ListOther + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>XDCC</div>";
	results += "      <div class='row__icons'>" + ListXDCC + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Subtitle</div>";
	results += "      <div class='row__icons'>" + ListSubtitle + "</div>";
	results += "    </div>";
	results += "  </div>";

	return results;
}


function drawPage() {
	var markup = "";
	var txtInput = getURLVars('txtInput');
	var footerMarkup = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">	<a class="footer-button" href="mailto:jparkerweb@gmail.com" target="email">contact</a><a class="footer-button" href="https://github.com/jparkerweb/Low_Voltage_Generator" target="github">github</a>	  <button class="footer-button" name="submit" alt="PayPal"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">donate</button></form>';

	markup += "<div class='wrapper'>";
	markup += "  <header>";
	markup += "    <span class='title-text'>Low Voltage Generator</span>";
	markup += "    <i class='title-icon sprite-icons-lowvoltage2'></i>";
	markup += "  </header>";
	markup += "  <div class='search'>";
	markup += "    <input placeholder='what are you looking for...' type='text' name='txtInput' id='txtInput' class='search__text-box' value='" + txtInput + "' />";
	markup += "    <span id='clearSearch' class='search__clear'></span>";
	markup += "    <button type='button' id='btnGenerate' class='search__button'>Generate</button>";
	markup += "  </div>";

	if (txtInput !== "") {
		markup += getResults();
	}

	markup += "  <footer>"+ footerMarkup +"</footer>";
	markup += "</div>";

	$("body").append(markup);
}
