import Swal from 'sweetalert2'

export default {

  success () {
    return Swal.fire({
      type: 'success',
      title: 'Success',
      text: 'your message has been sent',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    })
  },
  error () {
    return Swal.fire({
      type: 'error',
      title: 'Error',
      text: 'couldn\'t send your message',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
