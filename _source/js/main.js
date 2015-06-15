
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
		NZBKing,
		Binsearch,
		NzbFinder,
		OMGWTFNZBz,
		DogNZB,
		NZBClub,
		FindNzb,
		NZBGeek,
		GingaDADDY;

		NZBsDotOrg = " <a target='_blank' title='NZBsDotOrg' href='http://nzbs.org/search/" + tSearchString + "'> <i class='sprite-icons-nzbsdotorg'></i></a> ";
		NZBIndex = " <a target='_blank' title='NZBIndex' href='http://www.nzbindex.nl/search/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-nzbindex'></i></a> ";
		NZBKing = " <a target='_blank' title='NZBKing' href='http://www.nzbking.com/search/?q=\"" + tSearchStringPlus + "\"'> <i class='sprite-icons-nzbking'></i></a> ";
		Binsearch = " <a target='_blank' title='Binsearch' href='http://www.binsearch.info/?q=" + tSearchStringPlus + "&max=100&adv_age=1100'> <i class='sprite-icons-binsearch'></i></a> ";
		NzbFinder = " <a target='_blank' title='NzbFinder' href='https://www.nzbfinder.ws/search/" + tSearchString + "'> <i class='sprite-icons-nzbfinder'></i></a> ";
		OMGWTFNZBz = " <a target='_blank' title='OMGWTFNZBs' href='http://omgwtfnzbs.org/browse.php?search=" + tSearchStringPlus + "&amp;cat=default&amp;sort=1&amp;type=1'> <i class='sprite-icons-omg'></i></a> ";
		DogNZB = " <a target='_blank' title='DogNZB' href='http://dognzb.cr/search/" + tSearchString + "'> <i class='sprite-icons-dognzb'></i></a> ";
		NZBClub = " <a target='_blank' title='NZBClub' href='http://www.nzbclub.com/search.aspx?q=" + tSearchStringPlus + "'> <i class='sprite-icons-nzbclub'></i></a> ";
		FindNzb = " <a target='_blank' title='FindNzb' href='http://findnzb.net/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-findnzb'></i></a> ";
		NZBGeek = " <a target='_blank' title='NZBGeek' href='https://nzbgeek.info/geekseek.php?browseincludewords=" + tSearchString + "'> <i class='sprite-icons-nzbgeek'></i></a> ";
		GingaDADDY = " <a target='_blank' title='GingaDADDY' href='https://www.gingadaddy.com/nzbbrowse.php?b=2&st=1&k=" + tSearchStringPlus + "&c=0&g=0&sr=1&o=0'> <i class='sprite-icons-gingadaddy'></i></a> ";
		ListNzb = NZBsDotOrg + NZBIndex + NZBKing + Binsearch + NzbFinder + OMGWTFNZBz + DogNZB + NZBClub + FindNzb + NZBGeek + GingaDADDY;

	//newznab public
	var ListNewznab,
		Nzbs2go,
		NzbIndexIn,
		NzbPlanet,
		NzbNdx,
		Dusky,
		HomeOfNzb;

		OZNzb = " <a target='_blank' title='OZNzb' href='https://www.oznzb.com/search/" + tSearchString + "'> <i class='sprite-icons-oznzb'></i></a> ";
		NzbSu = " <a target='_blank' title='NzbSu' href='https://nzb.su/search/" + tSearchString + "'> <i class='sprite-icons-nzbsu'></i></a> ";
		Nzbs2go = " <a target='_blank' title='Nzbs2go' href='http://www.nzbs4u.net/search/" + tSearchString + "'> <i class='sprite-icons-nzbs2go'></i></a> ";
		NzbIndexIn = " <a target='_blank' title='NzbIndexIn' href='http://nzbindex.in/search/" + tSearchString + "'> <i class='sprite-icons-nzbindexin'></i></a> ";
		NzbPlanet = " <a target='_blank' title='NzbPlanet' href='https://nzbplanet.net/search/" + tSearchStringPlus + "'> <i class='sprite-icons-nzbplanet'></i></a> ";
		NzbNdx = " <a target='_blank' title='NzbNdx' href='http://www.nzbndx.com/search/" + tSearchString + "'> <i class='sprite-icons-nzbndx'></i></a> ";
		Dusky = " <a target='_blank' title='Dusky' href='https://dusky.deepcave.net/search/" + tSearchString + "'> <i class='sprite-icons-dusky'></i></a> ";
		HomeOfNzb = " <a target='_blank' title='HomeOfNzb' href='http://homeofnzb.com/search/" + tSearchString + "'> <i class='sprite-icons-homeofnzb'></i></a> ";
		ListNewznab = OZNzb + NzbSu + Nzbs2go + NzbIndexIn + NzbPlanet + NzbNdx + Dusky + HomeOfNzb;

	//Other Links (no search param passed)
	var ListOther,

		NzbRss = " <a target='_blank' title='NzbRss' href='http://www.nzb-rss.com/'> <i class='sprite-icons-nzbrss'></i></a> ";
		EzTv = " <a target='_blank' title='EZTV' href='http://eztv.it/'> <i class='sprite-icons-eztv'></i></a> ";
		ListOther = NzbRss + EzTv;

	//Bit Torrent Links
	var ListTorrent,
		Strike,
		Popcorn,
		BTDigg,
		MetaSearch,
		TorrentProject,
		TorrentBox,
		NewTorrents,
		KickAssTorrents,
		ThePirateBay,
		OldPirateBay,
		ExtraTorrent,
		ISOHunt,
		BitSnoop,
		l337x,
		h33t,
		TorrentzEu;

		Strike = " <a target='_blank' title='Strike' href='https://getstrike.net/torrents/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-strike'></i></a> ";
		Popcorn = " <a target='_blank' title='Popcorn' href='http://popcorn.cab/search?query=" + tSearchStringShowNameOnlyPlus + "'> <i class='sprite-icons-popcorn'></i></a> ";
		BTDigg = " <a target='_blank' title='BTDigg' href='http://btdigg.org/search?info_hash=&q=" + tSearchStringPlus + "'> <i class='sprite-icons-btdigg'></i></a> ";
		MetaSearch = " <a target='_blank' title='MetaSearch' href='http://metasearch.torrentproject.com/#!search=" + tSearchStringPlus + "'> <i class='sprite-icons-metasearch'></i></a> ";
		TorrentProject = " <a target='_blank' title='TorrentProject' href='http://torrentproject.se/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-torrentproject'></i></a> ";
		TorrentBox = " <a target='_blank' title='TorrentBox' href='http://torrentbox.sx/search?sort=age_asc&q=" + tSearchStringPlus + "'> <i class='sprite-icons-torrentbox'></i></a> ";
		NewTorrents = " <a target='_blank' title='NewTorrents' href='http://www.newtorrents.info/search/" + tSearchString + "'> <i class='sprite-icons-newtorrents'></i></a> ";
		KickAssTorrents = " <a target='_blank' title='KickAssTorrents' href='http://kickass.to/usearch/" + tSearchString + "/'> <i class='sprite-icons-kickasstorrents'></i></a> ";
		ThePirateBay = " <a target='_blank' title='ThePirateBay' href='http://thepiratebay.se/search/" + tSearchString + "'> <i class='sprite-icons-thepiratebay'></i></a> ";
		OldPirateBay = " <a target='_blank' title='OldPirateBay' href='https://oldpiratebay.org/search.php?q=" + tSearchStringPlus + "'> <i class='sprite-icons-oldpiratebay'></i></a> ";
		ExtraTorrent = " <a target='_blank' title='ExtraTorrent' href='http://extratorrent.com/search/?search=" + tSearchStringPlus + "'> <i class='sprite-icons-extratorrent'></i></a> ";
		ISOHunt = " <a target='_blank' title='ISOHunt' href='http://isohunt.to/torrents/?ihq=" + tSearchStringPlus + "'> <i class='sprite-icons-isohunt'></i></a> ";
		BitSnoop = " <a target='_blank' title='BitSnoop' href='http://bitsnoop.com/search/all/" + tSearchStringPlus + "'> <i class='sprite-icons-bitsnoop'></i></a> ";
		l337x = " <a target='_blank' title='1337x' href='http://1337x.org/search/" + tSearchStringPlus + "/0/'> <i class='sprite-icons-1337x'></i></a> ";
		h33t = " <a target='_blank' title='h33t' href='http://h33t.to/search/" + tSearchStringPlus + "'> <i class='sprite-icons-h33t'></i></a> ";
		TorrentzEu = " <a target='_blank' title='TorrentzEu' href='http://torrentz.eu/search?f=" + tSearchStringPlus + "'> <i class='sprite-icons-torrentzeu'></i></a> ";
		ListTorrent = Strike + Popcorn + BTDigg + MetaSearch + TorrentProject + TorrentBox + NewTorrents + KickAssTorrents + ThePirateBay + OldPirateBay + ExtraTorrent + ISOHunt + BitSnoop + l337x + h33t + TorrentzEu;

	//XDCC Search
	var ListXDCC,
		SunXDCC;

		ExcursionScript = " <a class='h' target='_blank' title='Excursion Script' href='https://www.dropbox.com/s/nxiorybg930gcm8/excursion9.5.install.exe'> <i class='sprite-icons-excursionscript'></i></a> ";
		XDCCMe = " <a target='_blank' title='XDCCMe' href='http://www.xdcc.me/search.php?Description=" + tSearchStringPlus + "'> <i class='sprite-icons-xdccme'></i></a> ";
		SunXDCC = " <a target='_blank' title='SunXDCC' href='http://sunxdcc.com/?sterm=" + tSearchStringPlus + "'> <i class='sprite-icons-sunxdcc'></i></a> ";
		ListXDCC = ExcursionScript + XDCCMe + SunXDCC;

	//PreDBs
	var ListPreDBs,
		VCDQ,
		NfoHump;

		PreDbMe = " <a target='_blank' title='PreDBMe' href='http://predb.me/?search=" + tSearchStringPlus + "'> <i class='sprite-icons-predbme'></i></a> ";
		OrlyDB = " <a target='_blank' title='OrlyDB' href='http://www.orlydb.com/?q=" + tSearchStringPlus + "'> <i class='sprite-icons-orlydb'></i></a> ";
		VCDQ = " <a target='_blank' title='VCDQ' href='http://www.vcdq.com/browse/1/0/3_2/10_9_21_22_23_24_6_28_32_19_11_3_2/0/2011_2012_2013/0/" + tSearchString + "/0/0/0'> <i class='sprite-icons-vcdq'></i></a> ";
		NfoHump = " <a target='_blank' title='VCDQ' href='http://www.nfohump.com/'> <i class='sprite-icons-nfohump'></i></a> ";
		ListPreDBs = PreDbMe + OrlyDB + VCDQ + NfoHump;

	//AudioBooks
	var ListAudioBooks,
		AudioBookBay;

		AudioBookBay = " <a target='_blank' title='AudioBookBay' href='http://audiobookbay.co/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-audiobookbay'></i></a> ";
		AudioBookVault = " <a target='_blank' title='AudioBookVault' href='http://www.audiobookvault.ws/?s=" + tSearchStringPlus + "'> <i class='sprite-icons-audiobookvault'></i></a> ";
		ListAudioBooks = AudioBookBay + AudioBookVault;

	//MP3s
	var ListMP3,
		MP3skull;

		MP3skull = " <a target='_blank' title='MP3skull' href='https://mp3skull.to/mp3/" + tSearchStringPlus + ".html'> <i class='sprite-icons-mp3skull'></i></a> ";
		ListMP3 = MP3skull;

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
	results += "      <div class='row__title'>DBs</div>";
	results += "      <div class='row__icons'>" + ListPreDBs + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Audio Books</div>";
	results += "      <div class='row__icons'>" + ListAudioBooks + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>MP3s</div>";
	results += "      <div class='row__icons'>" + ListMP3 + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>Other</div>";
	results += "      <div class='row__icons'>" + ListOther + "</div>";
	results += "    </div>";
	results += "    <div class='results__row'>";
	results += "      <div class='row__title'>XDCC</div>";
	results += "      <div class='row__icons'>" + ListXDCC + "</div>";
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
