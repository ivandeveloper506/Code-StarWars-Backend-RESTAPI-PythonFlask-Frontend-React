import Swal from "sweetalert2";

export default function FavoriteAlert() {
	Swal.fire({
		position: "top-end",
		icon: "warning",
		text: "¡Debe iniciar sesión para poder agregar favoritos!",
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 1000
	});
}
