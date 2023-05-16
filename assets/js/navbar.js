function loadCustomNavbar(){
    var customNavBar = `        <!-- Inicio del menu -->
                            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                            <div class="container-fluid">
                                <!-- icono -->
                                <a class="navbar-brand" href="index.html">
                                    <i class="bi bi-cart3"></i>
                                    <span class="text-warning">SmartMarket</span>
                                </a>
                                <!-- boton del menu -->
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <!-- elementos del menu colapsable -->
                                <div class="collapse navbar-collapse" id="menu" data-bs-theme="dark" >
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="index.html">Inicio</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown">Productos</a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="/abarrotes.html">Abarrotes</a></li>
                                            <li><a class="dropdown-item" href="/frutas.html">Frutas</a></li>
                                            <li><a class="dropdown-item" href="/limpieza.html">Limpieza</a></li>
                                            <li><a class="dropdown-item" href="/verduras.html">Verduras</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a a class="nav-link" href="contacto.html">Contacto</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </nav>
                            `;
    var customNavBarHTML = document.getElementById("custom-navbar")
    customNavBarHTML.innerHTML = customNavBar
}

loadCustomNavbar()
