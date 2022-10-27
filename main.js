const pizza = [
  {
    id: 1,
    nombre: "pizza muzza",
    ingredientes: ["salsa", "muzzarella", "oregano"],
    precio: 450,
  },

  {
    id: 2,
    nombre: "pizza especial",
    ingredientes: ["salsa", "muzzarella", "jamon", "aceituna", "morron"],
    precio: 1100,
  },

  {
    id: 3,
    nombre: "calabresa",
    ingredientes: ["salsa", "muzzarella", "longaniza", "aceituna"],
    precio: 1300,
  },
  {
    id: 4,
    nombre: "putanesca",
    ingredientes: [
      "salsa",
      "rojadas de tomate",
      "mozzrella",
      "anchoas",
      "oregano",
    ],
    precio: 1360,
  },
  {
    id: 5,
    nombre: "silvestre",
    ingredientes: ["salsa", "mozarrella", "champignones"],
    precio: 2000,
  },
  {
    id: 6,
    nombre: "americana",
    ingredientes: [
      "salsa",
      "mozarella",
      "pollo a la barbacoa",
      "panceta",
      "cheddar",
      "cebolla colorada",
      "verdeo",
    ],
    precio: 2050,
  },
  {
    id: 7,
    nombre: "de mar",
    ingredientes: [
      "salsa",
      "mozarella",
      "mix frutos de mar",
      "langostinos",
      "aceite de pimenton ahumado",
    ],
    precio: 2800,
  },
  {
    id: 8,
    nombre: "rellena vegetarioana",
    ingredientes: [
      "mozarrela",
      "tomattes cherrys",
      "berenjenas",
      "pimentos al recoldo",
      "cebollas",
      "olivas negra",
      "chamoignones",
      "rucula",
    ],
    precio: 1980,
  },
];


const impar = pizza.filter((pizza) => {
  if (pizza.id % 2 === 1) {
    console.log(`la ${pizza.nombre} tiene numero impar ${pizza.id}`);
  }
});
const carta = pizza.forEach((pizza) => {
  console.log(pizza.nombre + " precio $ " + pizza.precio);
});

const Menos600 = pizza.some((pizza) => {
  if (pizza.precio < 600) console.log(`la de ${pizza.nombre}...`);
});

