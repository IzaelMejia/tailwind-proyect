/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      "blanco":"#fff",
      "gris":"#e7e5e4",
      "gris900":"#111827",
      "gris800": "#1e2836",
      "gris600":"#1f2937",
      "gris500": "#374151"
    },
    textColor:{
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      "blanco":"#fff",
      "gris":"#52525b",
      "gris900":"#111827",
      "gris800": "#1e2836",
      "gris600":"#1f2937",
      "gris500": "#374151"
    },
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
  },
  
  plugins: [],
}

// npx tailwindcss -i ./src/css/input.css -o ./public/css/tailwind.css --minify   comando para unificar proyecto
// npm install -D tailwindcss@latest postcss@latest autoprefixer@latest  actualizar tailwind