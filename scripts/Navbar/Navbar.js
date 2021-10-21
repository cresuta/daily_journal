export const navbar = () => {
    const header = document.querySelector('header');
    header.innerHTML += `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="imgs/logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
          id="header-logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Concepts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Author</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
}