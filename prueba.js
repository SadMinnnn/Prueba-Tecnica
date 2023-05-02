const namelist = [
  { name: "Paulina", lastname: "Erazo" },
  { name: "Christian", lastname: "Yu" },
  { name: "Aura", lastname: "Cardona" },
  { name: "Lise", lastname: "Alzate" },
  { name: "Min", lastname: "Yoongi" }
];

const fullnames = namelist.map(({name, lastname}) => `${name} ${lastname}`);

console.log(fullnames);
