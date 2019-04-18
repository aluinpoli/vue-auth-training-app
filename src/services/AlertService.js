import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  success (params = {}) {
    return Swal.fire({
      type: 'success',
      title: 'Success',
      timer: 2000,
      ...params
    })
  },
  error (params) {
    return Swal.fire({
      type: 'error',
      title: 'Error',
      position: 'center',
      timer: 2000,
      ...params
    })
  },
  confirmation (params) {
    return Swal.fire({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log out!',
      ...params
    })
  }
}
