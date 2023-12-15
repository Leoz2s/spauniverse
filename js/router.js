export class Router {
  routeNames = {}

  addRoute(routeName, route) {
    this.routeNames[routeName] = route
  }

  router(event) {
    event = event || window.event;
    event.preventDefault();

    const {href} = event.target;
    // window.location.href == event.target.href

    window.history.pushState({}, "", href);

    this.handleRoute();
  }

  handleRoute() {
    const {pathname} = window.location

    const route = this.routeNames[pathname] ?? this.routeNames[404]
    fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("main").innerHTML = html
      
      routeStyle(pathname)
    })
  }
}

// Style Sheet
const htmlTag = document.documentElement;

function routeStyle(routePathname) {
  function removeAllClasses() {
    htmlTag.classList.remove("home")
    htmlTag.classList.remove("universe")
    htmlTag.classList.remove("exploration")
    htmlTag.classList.remove("404")
  }
  removeAllClasses()

  switch(routePathname) {
    case "/":
      htmlTag.classList.add("home")
      break;
    case "/universe":
      htmlTag.classList.add("universe")
      break;
    case "/exploration":
      htmlTag.classList.add("exploration")
      break;
    default:
      htmlTag.classList.add("404")  
      break;
  }
}