async function load() {


    const url = "https://mindicador.cl/api/dolar";

    const resp = await fetch(url, { method: "GET", mod: "cors" })

        .then((response) => {
            /* VALIDACIÓN RESPUESTA RECURSO */
            if (response.ok) {
                console.log("response.text: ", response.text);
                return response.text();
            } else {
                console.log("response.status: ", response.status);
                throw new Error(response.status);
            }
        })

        .then((data) => {
            /* LECTURA DE LA DATA JSON*/
            console.log("Datos: ", data);
            const objJson = JSON.parse(data);
            let arr = objJson.serie;
            console.log("arr: ", arr);
            datoDolar = "";
            for (i = 0; i < arr.length; i++) {
                console.log("________________________");
                console.log("fecha: ", arr[i].fecha);
                console.log("valor: ", arr[i].valor);
                fila = `
                <div class='row'>
                    <div class='col-6'>
                        FECHA: ${arr[i].fecha}
                    </div>
                    <div class='col-6'>
                        VALOR: $ ${arr[i].valor}
                    </div>                            
                </div>
                `
                datoDolar = `
                        ${datoDolar}
                        ${fila}
                    `
            }
            $('#datos-dolar').html(datoDolar)
        })
        .catch((err) => {
            /* CAPTURA DE ERRORES */
            console.error("ERROR: ", err.message);
        });
}

load();



