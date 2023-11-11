class MiMain extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/06/1_BANNER_JVZ-01_TAMANO-scaled.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/06/APP-GIF-1-e1696441911378.gif" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/07/2_BANNER_CAFICULTORES-14-scaled.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/06/3-BANNER_TAMANO.gif" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/06/2-BANNER-JVZ-01_TAMANO.gif" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/06/4_BANNER_ECOMERCE-02_TAMANO-scaled.jpg" class="d-block w-100" alt="...">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="imagenes">
                    <img src="./FrontEnd/assets/img/1.png" alt="img">
                    <img src="./FrontEnd/assets/img/2.png" alt="img">
                    <img src="./FrontEnd/assets/img/3.png" alt="img">
                </div>
                    <aside>
                    <button data-href="#moove_gdpr_cookie_modal" type="button" id="moove_gdpr_save_popup_settings_button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" aria-label="Redes Sociales">
                        <span class="moove_gdpr_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="23" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </span><br>
                        <span class="moove_gdpr_text">Redes</span>
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-color">
                                    <h5 class="modal-title" id="staticBackdropLabel">Redes Sociales <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                                    </svg></h5>
                                </div>
                                <div class="modal-body">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-social-icons-wrapper elementor-grid">
                                            <button class="btn btn-instagram" type="button" href="https://www.instagram.com/juanvaldezcafe/?hl=es-la">
                                                    <span class="elementor-grid-item">
                                                        <span class="elementor-screen-only">Instagram</span>
                                                        <i class="fab fa-instagram"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                                        </svg>
                                                        </span>
                                                    </button>
            
                                            <button class="btn btn-facebook" href="https://www.facebook.com/JuanValdezCafe/">
                                            <span class="elementor-grid-item">
                                                    <span class="elementor-screen-only">Facebook</span>
                                                    <i class="fab fa-facebook"></i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                    </svg>
                                                    </span>
                                                </button>
            
                                            <button class="btn btn-twitter" href="https://twitter.com/JuanValdezCafe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                                    <span class="elementor-grid-item">
                                                    <span class="elementor-screen-only">Twitter</span>
                                                    <i class="fab fa-twitter"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                                                    </svg>
                                                    </span>
                                                </button>
                                                    
                                            <button class="btn btn-youtube" href="https://www.youtube.com/@juanvaldezcafeco">
                                                <span class="elementor-grid-item">
                                                        <span class="elementor-screen-only">Youtube</span>
                                                        <i class="fab fa-youtube"></i>
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                                    </svg>
                                            </button>
            
                                            <button class="btn btn-linkedin" href="https://www.linkedin.com/company/juan-valdez-cafe/?originalSubdomain=co">
                                                <span class="elementor-grid-item">
                                                        <span class="elementor-screen-only">Linkedin</span>
                                                        <i class="fab fa-linkedin"></i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                        </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-color" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            
                <section>
                    <div class="cards">
                        <div class="card" style="width: 18rem;">
                            <img src="https://es.juanvaldez.com/wp-content/uploads/2022/06/premium-colina-1-300x300.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">13,80 </h5>
                            <p class="card-text">Cafe Colina 454gr Grano</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://www.tiendajuanvaldez.com/wp-content/uploads/2022/11/Lata-Liofilizado1-768x768-1-600x600.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">15,80 </h5>
                            <p class="card-text">Liofilizado Clásico Lata 190gr</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://es.juanvaldez.com/wp-content/uploads/2022/06/premium-volcan-1-1-300x300.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">13,50 </h5>
                            <p class="card-text">Cafe Volcan 454gr Grano</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://www.tiendajuanvaldez.com/wp-content/uploads/2020/05/Diapositiva1-600x600.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">13,50 </h5>
                            <p class="card-text">Kit Café Colina Cápsulas Keurig® x60</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>  
                    </div>
                    <div class="cards">
                        <div class="card" style="width: 18rem;">
                            <img src="https://www.tiendajuanvaldez.com/wp-content/uploads/2020/05/SOLUBLE-LIOFILIZADO-250G-BACK-1000x1000-2-2-600x600.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">18,50 </h5>
                            <p class="card-text">Liofilizado Clásico Doypack Juan Valdez</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://es.juanvaldez.com/wp-content/uploads/2022/06/premium-cumbre-1-300x300.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">13,80 </h5>
                            <p class="card-text">Cafe Cumbre 454gr Grano</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://www.tiendajuanvaldez.com/wp-content/uploads/2022/04/LIOFILIZADO_AVELLANA_95GR-600x600.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">10,80 </h5>
                            <p class="card-text">Liofilizado Avellana Juan Valdez</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img src="https://www.tiendajuanvaldez.com/wp-content/uploads/2020/12/Kit-340-Cafe-Linea-Premium-Selection-600x600.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">12,80 </h5>
                            <p class="card-text">Kit x2 340gr Café Línea Premium</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>  
                    </div>
                </section>
                <img class="cards" src="https://qa.juanvaldez.itteamco.com/wp-content/uploads/2023/11/BANNER_2051_JV-2048x634.webp" alt="juanvaldez">
            </main>
        `;
    }
}

customElements.define('mi-main', MiMain);
