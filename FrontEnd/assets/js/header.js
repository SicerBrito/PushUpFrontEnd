class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header">
                    <img class="fuera img-fluid" src="./FrontEnd/assets/img/logojuan.jpg" alt="juanvaldez">
                    <nav id="navbar-example2" class="navbar navbar-light bg px-3">
                        <a class="navbar-brand" href="#">navbar</a>
                        <ul class="nav nav-pills">
                            <li class="nav-item1">
                                <a class="nav-link" href="#scrollspyHeading1">Juan Valdez</a>
                            </li>
                            <li class="nav-item2">
                                <a class="nav-link" href="#scrollspyHeading2">Sostenibilidad</a>
                            </li>
                            <li class="nav-item3">
                                <a class="nav-link" href="#scrollspyHeading2">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#scrollspyHeading2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                </svg></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#scrollspyHeading2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#scrollspyHeading2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                                </svg></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#scrollspyHeading2">JV en el mundo</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('mi-header', MiHeader);