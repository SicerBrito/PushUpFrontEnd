class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-dark text-center text-white">
                <!-- Grid container -->
                <div class="container p-4">
                <!-- Section: Social media -->
                <section class="mb-4">
                    <!-- Facebook -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>
            
                    <!-- Twitter -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>
            
                    <!-- Google -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-google"></i
                    ></a>
            
                    <!-- Instagram -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>
            
                    <!-- Linkedin -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>
            
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </section>
                <section class="">
                    <form action="">
                    <div class="row d-flex justify-content-center">
                        
                        <div class="col-auto">
                        <p class="pt-2">
                            <strong>Suscríbete a nuestro boletín</strong>
                        </p>
                        </div>
                        
            
                        
                        <div class="col-md-5 col-12">
                        <div class="form-outline form-white mb-4">
                            <input type="email" id="form5Example21" class="form-control" />
                            <label class="form-label" for="form5Example21">Dirección de correo electrónico</label>
                        </div>
                        </div>
                        
            
                        
                        <div class="col-auto">
                        <button type="submit" class="btn btn-outline-light mb-4">
                            Suscribir
                        </button>
                        </div>
                        
                    </div>
                    </form>
                </section>
                <section class="mb-4">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
            
                </div>
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2023 Copyright:
                <a class="text-white" href="https://github.com/SicerBrito">SicerBrito</a>
                </div>
            </footer>
        `;
    }
}

customElements.define('mi-footer', MiFooter);