function loadFooter(){
    var customFooter = `
                        <!-- pie de pagina  -->
                        <footer class="footer bg-dark text-light text-center fixed-bottom">
                        <div class="container my-1">
                            <div class="row">
                            <div class="col">
                                <h6>Aprendiendo HTML - 2023.</h6>
                            </div>
                            </div>
                        </div>
                        </footer>
                        `
var customFooterHTML = document.getElementById("custom-footer")
customFooterHTML.innerHTML = customFooter
}

loadFooter()