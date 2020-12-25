import Swal from 'sweetalert2';

export const sweetToast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 1500,
	timerProgressBar: false,
});
