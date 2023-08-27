function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/images/Avatar-light.png")
    img.setAttribute("alt", "Avatar de Wagner Rigoli da Rosa no perfil em LightMode")
  } else {
    img.setAttribute("src", "./assets/images/Avatar.png")
    img.setAttribute("alt", "Avatar de Wagner Rigoli da Rosa no perfil em DarkMode")
  }
}
