const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}

const htmlBody = () => {
    document.getElementById('root').insertAdjacentHTML("beforeend",
    `<header>
        <h1 class="headerTitle">Best Beers</h1>
        <button id="spanMenu" class="material-symbols-outlined">
            menu
        </button>
    </header>
    <div id="flex-container"></div>
    `)

    let num = 1
    beers.cards.map(beer => { 
		document.getElementById('flex-container').insertAdjacentHTML("beforeend", `
			<div class="flex-item">
				<div class="beer">
					<div class="number">
						${num}
					</div>
					<div class="beerTitleContainer">
						<h1 class="beerTitle">${beer.title}</h1>
					</div>
					<div class="subAndTextContainer">
						<p class="sub">${beer.sub}</p> 
						<p class="text">${beer.text}</p>
					</div>
				</div>
				<button id="details">
					details
					<span id="spanArr" class="material-symbols-outlined">
						arrow_forward
					</span>
				</button>
			</div>
			`
		)

    num += 1
    })
}

window.addEventListener("load", htmlBody);