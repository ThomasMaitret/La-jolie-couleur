$(document).ready(function()
{
	new Clipboard('.box');

	$(".box").click(function()
	{
		var popup = ['J\'adore cette couleur !', 'Plus qu\'à coller !', 'C\'est bon, c\'est copié !',
			'Très bon choix !', 'C\'est dans le presse-papier !', 'Une de mes préférées :)', 'Pas besoin de double-cliquer !'
		];
		var texte = popup[Math.floor(Math.random() * popup.length)];
		swal(
		{
			title: texte,
			timer: 600,
			showConfirmButton: false
		});
	});
});
