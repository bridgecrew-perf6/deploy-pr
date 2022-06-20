let ejercutarCodigo = () => {
	let elemento = document.getElementById("titulo1");
	elemento.textContent = "Album de fotos";

	elemento = document.getElementsByClassName("text-muted");
	elemento[1].innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;

	elemento = document.querySelectorAll("p");
	elemento[2].setAttribute("class", "d-none");

	let images = [
		{
			url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "camino",
		},
		{
			url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "energia",
		},
		{
			url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "papá",
		},
		{
			url: "https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
		{
			url: "https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
		{
			url: "https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
		{
			url: "https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
		{
			url: "https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
		{
			url: "https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			alt: "",
		},
	];

	const svgCards = document.querySelectorAll('.card>svg')
	let counter = 0

	for(let svg of svgCards){
		let {url, alt} = images[counter]
		const img = document.createElement('img')
		img.src =url
		img.alt = alt
		svg.parentNode.replaceChild(img, svg)
		counter++
	}
};

ejercutarCodigo();
