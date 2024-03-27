Swal.fire({
    title: "Você tem 18 anos?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    }).then((result) => {
    if (result.dismiss) {
        Swal.fire({
        title: "Erro",
        text: "Você é menor de idade",
        icon: "error",
        allowEscapeKey: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        showConfirmButton: false,
        });
    }
    });