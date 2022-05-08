async function loading() {
	marquee();
	const newsbar = document.getElementById("marquee");
	const content = document.getElementById("light_button");
	const hours = new Date().getHours();

	/* It's checking the time and changing the theme accordingly. */
	if (hours >= 7 && hours <= 19) {
		document.body.className = "light-mode";
		content.src = "assets/img/buttons/dark.png";
		newsbar.className = "dark-mode";
	} else {
		document.body.className = "dark-mode";
		content.src = "assets/img/buttons/light.png";
		newsbar.className = "light-mode";
	}
	
	/* It's hiding the loading screen. */
	var wrapper = document.getElementById("loading");
	wrapper.className = "loaded";
	await new Promise((resolve) => setTimeout(resolve, 500));
	wrapper.style.display = "none";
}

function toggleLight() {
	/* It's changing the theme of the website. */
	const content = document.getElementById("light_button");
	const newsbar = document.getElementById("marquee");
	if (document.body.className === "dark-mode") {
		document.body.className = "light-mode";
		content.src = "assets/img/buttons/dark.png";
		newsbar.className = "dark-mode";
	} else {
		document.body.className = "dark-mode";
		content.src = "assets/img/buttons/light.png";
		newsbar.className = "light-mode";
	}
	marquee();
}

function marquee() {
	/* It's changing the text of the marquee. */
	const content = document.getElementById("marquee_text");
	const citations = [
		"Pour juger d'un procès, il faut connaître la loi ; pour parler d'une affaire, il faut en connaître le fond.",
		"Quand tu es dans la peine, toujours ta pensée va vers les tiens.",
		"Si tu comprends peu, ne te presse pas d'agir ; et si tu comprends, n'agit pas tout de suite.",
		"Mieux vaut avoir du bon sens que de se torturer a étudier la loi.",
		"Sois humble, et les gens te méprisent ; sois impudent, et tu fais la pluie et le beau temps.",
		"À s'obstiner à vouloir forcer la chance, on perd souvent tout ce que l'on possède.",
		"C'est en travaillant qu'on s'instruit, c'est en cherchant qu'on trouve.",
		"Favoriser tes parents, c'est t'éloigner de la loi.",
		"Lourd comme la pierre, ardu comme un procès.",
	];

	content.textContent = citations[Math.floor(Math.random() * citations.length)];
}
