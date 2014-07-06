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

var buttonGroup = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">	<div class="btn-group" style="font-weight:normal;">	  <a class="btn btn-inverse" href="mailto:jparkerweb@gmail.com" target="email">	    <i class="icon-envelope"></i> contact	  </a>	  <a class="btn btn-inverse	" href="https://github.com/jparkerweb/Low_Voltage_Generator" target="github">	    <i class="icon-github"></i> github	  </a>	  <button class="btn btn-inverse" name="submit" alt="PayPal">	    <i class="icon-usd"></i>	    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"> donate</button>	</div></form>';

if (getURLVars('txtInput') !== '') {
	window.document.write("<div id='outerdiv' align='center'><span class='lowvoltagegenerator lowvoltagegenerator-title'><span class='lowvoltagegenerator-title--text'>Low Voltage Generator</span> <div class='sprite-icons-lowvoltage lowvoltagegenerator-icon'></div><span><div id='innerdiv'>Links for: <span class='search'>" + getURLVars('txtInput') + "<span><br ><br ><div id='divLinks'><div><br ><div><div class='input-append'><input class='span2' id='txtInput' name='txtInput' type='text'><button class='btn btn-inverse' type='button' onClick='javascript:getLinks();'>Generate</button><br><br>"+ buttonGroup +"</div>");
} else {
	window.document.write("<div id='outerdiv' align='center'><span class='lowvoltagegenerator lowvoltagegenerator-title'><span class='lowvoltagegenerator-title--text'>Low Voltage Generator</span> <div class='sprite-icons-lowvoltage lowvoltagegenerator-icon'></div><span><div id='innerdiv'><div><div class='input-append'><input class='span2' id='txtInput' name='txtInput' type='text'><button class='btn btn-inverse' type='button' onClick='javascript:getLinks();'>Generate</button></div><div>");
}



$(document).ready(function () {
	"use strict";

	$("#txtInput").focus();
	$(document).keypress(function (e) {
		if (e.keyCode === 13) {
			getLinks();
		}
	});
	
	var tSearchString,
		tSearchStringPlus;
		tSearchString = '';
		tSearchString = getURLVars('txtInput');
		tSearchString = tSearchString.replace(/ /g, ' ');
		tSearchString = tSearchString.replace(/\./g, ' ');
		tSearchString = tSearchString.replace(/_/g, ' ');
		tSearchString = tSearchString.replace(/-/g, ' ');
		tSearchString = tSearchString.replace(/'/g, '%27');

		tSearchStringPlus = tSearchString.replace(/ /g, '+');
		tSearchString = tSearchString.replace(/ /g, '%20');


	//nzb
	var NZBsDotOrg,
		NZBIndex,
		Binsearch,
		NzbFinder,
		OMGWTFNZBz,
		DogNZB,
		NZBClub,
		FindNzb,
		NZBGeek,
		NzbAG,
		GingaDADDY;
		NZBsDotOrg = " <a target='_blank' title='NZBsDotOrg' href='http://nzbs.org/search/" + tSearchString + "'> <div class='sprite-icons-nzbsdotorg'></div><a> ";
		NZBIndex = " <a target='_blank' title='NZBIndex' href='http://www.nzbindex.nl/search/?q=" + tSearchStringPlus + "'> <div class='sprite-icons-nzbindex'></div><a> ";
		Binsearch = " <a target='_blank' title='Binsearch' href='http://www.binsearch.info/?q=" + tSearchStringPlus + "&max=100&adv_age=1100'> <div class='sprite-icons-binsearch'></div><a> ";
		NzbFinder = " <a target='_blank' title='NzbFinder' href='https://www.nzbfinder.ws/search/" + tSearchString + "'> <div class='sprite-icons-nzbfinder'></div><a> ";
		OMGWTFNZBz = " <a target='_blank' title='OMGWTFNZBs' href='http://omgwtfnzbs.org/browse.php?search=" + tSearchStringPlus + "&amp;cat=default&amp;sort=1&amp;type=1'> <div class='sprite-icons-omg'></div><a> ";
		DogNZB = " <a target='_blank' title='DogNZB' href='http://dognzb.cr/search/" + tSearchString + "'> <div class='sprite-icons-dognzb'></div><a> ";
		NZBClub = " <a target='_blank' title='NZBClub' href='http://www.nzbclub.com/search.aspx?q=" + tSearchStringPlus + "'> <div class='sprite-icons-nzbclub'></div><a> ";
		FindNzb = " <a target='_blank' title='FindNzb' href='http://findnzb.net/?q=" + tSearchStringPlus + "'> <div class='sprite-icons-findnzb'></div><a> ";
		NZBGeek = " <a target='_blank' title='NZBGeek' href='https://index.nzbgeek.info/search/" + tSearchString + "'> <div class='sprite-icons-nzbgeek'></div><a> ";
		NzbAG = " <a target='_blank' title='NzbAG' href='https://nzb.ag/search/" + tSearchString + "'> <div class='sprite-icons-nzbag'></div><a> ";
		GingaDADDY = " <a target='_blank' title='GingaDADDY' href='https://www.gingadaddy.com/nzbbrowse.php?b=2&st=1&k=" + tSearchStringPlus + "&c=0&g=0&sr=1&o=0'> <div class='sprite-icons-gingadaddy'></div><a> ";

		
	//newznab public
	var OZNzb,
		NewzB,
		NzbSu,
		NZBZombie,
		Nzbs2go,
		FreeNzb,
		NzbIndexIn;
		OZNzb = " <a target='_blank' title='OZNzb' href='https://www.oznzb.com/search/" + tSearchString + "'> <div class='sprite-icons-oznzb'></div><a> ";
		NewzB = " <a target='_blank' title='NewzB' href='http://newzb.net/search/" + tSearchString + "'> <div class='sprite-icons-newzb'></div><a> ";
		NzbSu = " <a target='_blank' title='NzbSu' href='https://nzb.su/search/" + tSearchString + "'> <div class='sprite-icons-nzbsu'></div><a> ";
		NZBZombie = " <a target='_blank' title='NZBZombie' href='https://www.nzbzombie.com/search/" + tSearchString + "'> <div class='sprite-icons-nzbzombie'></div><a> ";
		Nzbs2go = " <a target='_blank' title='Nzbs2go' href='http://www.nzbs4u.net/search/" + tSearchString + "'> <div class='sprite-icons-nzbs2go'></div><a> ";
		FreeNzb = " <a target='_blank' title='FreeNzb' href='http://freenzb.com/search/" + tSearchString + "'> <div class='sprite-icons-freenzb'></div><a> ";
		NzbIndexIn = " <a target='_blank' title='NzbIndexIn' href='http://nzbindex.in/search/" + tSearchString + "'> <div class='sprite-icons-nzbindexin'></div><a> ";
			
			
	//Other Links (no search param passed)
	var NzbRss,
		EzTv;
		NzbRss = " <a target='_blank' title='NzbRss' href='http://www.nzb-rss.com/'> <div class='sprite-icons-nzbrss'></div><a> ";
		EzTv = " <a target='_blank' title='EZTV' href='http://eztv.it/'> <div class='sprite-icons-eztv'></div><a> ";
			
	//Bit Torrent Links
	var BTDigg,
		NewTorrents,
		KickAssTorrents,
		ThePirateBay,
		ExtraTorrent,
		ISOHunt,
		BitSnoop,
		l337x,
		h33t,
		TorrentzEu,
		fenopy;
		BTDigg = " <a target='_blank' title='BTDigg' href='http://btdigg.org/search?q=" + tSearchStringPlus + "'> <div class='sprite-icons-btdigg'></div><a> ";
		NewTorrents = " <a target='_blank' title='NewTorrents' href='http://www.newtorrents.info/search/" + tSearchString + "'> <div class='sprite-icons-newtorrents'></div><a> ";
		KickAssTorrents = " <a target='_blank' title='KickAssTorrents' href='http://kickass.to/usearch/" + tSearchString + "/'> <div class='sprite-icons-kickasstorrents'></div><a> ";
		ThePirateBay = " <a target='_blank' title='ThePirateBay' href='http://thepiratebay.se/search/" + tSearchString + "'> <div class='sprite-icons-thepiratebay'></div><a> ";
		ExtraTorrent = " <a target='_blank' title='ExtraTorrent' href='http://extratorrent.com/search/?search=" + tSearchStringPlus + "'> <div class='sprite-icons-extratorrent'></div><a> ";
		ISOHunt = " <a target='_blank' title='ISOHunt' href='http://isohunt.com/torrents/?ihq=" + tSearchStringPlus + "'> <div class='sprite-icons-isohunt'></div><a> ";
		BitSnoop = " <a target='_blank' title='BitSnoop' href='http://bitsnoop.com/search/all/" + tSearchStringPlus + "'> <div class='sprite-icons-bitsnoop'></div><a> ";
		l337x = " <a target='_blank' title='1337x' href='http://1337x.org/search/" + tSearchStringPlus + "/0/'> <div class='sprite-icons-1337x'></div><a> ";
		h33t = " <a target='_blank' title='h33t' href='http://h33t.to/search/" + tSearchStringPlus + "'> <div class='sprite-icons-h33t'></div><a> ";
		TorrentzEu = " <a target='_blank' title='TorrentzEu' href='http://torrentz.eu/search?f=" + tSearchStringPlus + "'> <div class='sprite-icons-torrentzeu'></div><a> ";
		fenopy = " <a target='_blank' title='fenopy' href='http://fenopy.se/?keyword=" + tSearchStringPlus + "'> <div class='sprite-icons-fenopy'></div><a> ";
				
	//XDCC Search
	var ExcursionScript,
		XDCCMe,
		XDCCFinder,
		SunXDCC;
		ExcursionScript = " <a target='_blank' title='Excursion Script' href='https://www.dropbox.com/s/nxiorybg930gcm8/excursion9.5.install.exe'> <div class='sprite-icons-excursionscript'></div><a> ";
		XDCCMe = " <a target='_blank' title='XDCCMe' href='http://www.xdcc.me/search.php?Description=" + tSearchStringPlus + "'> <div class='sprite-icons-xdccme'></div><a> ";
		XDCCFinder = " <a target='_blank' title='XDCCFinder' href='http://www.xdccfinder.com/results.php?kw=" + tSearchString + "'> <div class='sprite-icons-xdccfinder'></div><a> ";
		SunXDCC = " <a target='_blank' title='SunXDCC' href='http://sunxdcc.com/?sterm=" + tSearchStringPlus + "'> <div class='sprite-icons-sunxdcc'></div><a> ";
	
	//File Lockers
	var FilesTube;
		FilesTube = " <a target='_blank' title='FilesTube' href='http://www.filestube.com/search.html?q=" + tSearchStringPlus + "'> <div class='sprite-icons-filestube'></div><a> ";

	//PreDBs
	var PreDbMe,
		OrlyDB,
		VCDQ;
		PreDbMe = " <a target='_blank' title='PreDBMe' href='http://predb.me/?search=" + tSearchStringPlus + "'> <div class='sprite-icons-predbme'></div><a> ";
		OrlyDB = " <a target='_blank' title='OrlyDB' href='http://www.orlydb.com/?q=" + tSearchStringPlus + "'> <div class='sprite-icons-orlydb'></div><a> ";
		VCDQ = " <a target='_blank' title='VCDQ' href='http://www.vcdq.com/browse/1/0/3_2/10_9_21_22_23_24_6_28_32_19_11_3_2/0/2011_2012_2013/0/" + tSearchString + "/0/0/0'> <div class='sprite-icons-vcdq'></div><a> ";
			
	//add new html content to page
	$("#divLinks").attr('nowrap', 'nowrap');
	$("#divLinks").append('<table class="results-table" border="0"><tr><td class="title">nzb...<td><td>' + NZBsDotOrg + DogNZB + NzbAG + GingaDADDY + NZBIndex + Binsearch + NzbFinder + OMGWTFNZBz + NZBClub + FindNzb + NZBGeek + '<td><tr>' + '<tr><td class="title">newznab...<td><td>' + NzbSu +  OZNzb + NewzB + NzbIndexIn + NZBZombie + Nzbs2go + FreeNzb + '<td><tr>' + '<tr><td class="title">torrent:.<td><td>' + BTDigg + NewTorrents + KickAssTorrents + ThePirateBay + ExtraTorrent + ISOHunt + BitSnoop + l337x + h33t + TorrentzEu + fenopy + '<td><tr>' + '<tr><td class="title">other...<td><td>' + NzbRss + EzTv + '<td><tr>' + '<tr><td class="title">xdcc...' + ExcursionScript + '<td><td>' + XDCCMe + XDCCFinder + SunXDCC + '<td><tr>' + '<tr><td class="title">file.lockers...<td><td>' + FilesTube + '<td><tr>' + '<tr><td class="title">infos...<td><td>' + PreDbMe + OrlyDB + VCDQ + '<td><tr>' + '</table>');
});