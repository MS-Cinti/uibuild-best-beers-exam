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
        <h1>Best Beers</h1>
        <span id="spanMenu" class="material-symbols-outlined">
            menu
        </span>
    </header>
    <section id="section">
        <div id="flex-container"></div>
    </section>
    `)

    let num = 1
    for (const beer of beers.cards) { 
    document.getElementById('flex-container').insertAdjacentHTML("beforeend", `
        <div class="flex-item">
            <div class="numcont">
                ${num}
            </div>
            <div class="beer">
				<div class="titlediv">
                	<h1 class="title">${beer.title}</h1>
				</div> 
                <p class="sub">${beer.sub}</p> 
                <p class="text">${beer.text}</p>
            </div>
            <button>
                details
                <span id="spanArr" class="material-symbols-outlined">
                    arrow_forward
                </span>
            </button>
        </div>
        `
    )
    num += 1
    }
}

window.addEventListener("load", htmlBody);