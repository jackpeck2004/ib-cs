const fs = require("fs");
const path = require("path");

const readInput = (fileName) => {
  const fileContent = fs.readFileSync(fileName, "utf-8");
  const [firstRow, ...rows] = fileContent.split("\n");

  const [_, team2, team3, team4] = firstRow
    .split(" ")
    .map((char) => parseInt(char));

  const pizzas = rows.map((row, idx) => {
    const [_, ...ingredients] = row.split(" ");
    return {
      id: idx,
      ingredients,
    };
  });

  return {
    team2,
    team3,
    team4,
    pizzas: pizzas.filter((pizza) => pizza.ingredients.length),
  };
};

const writeResult = (fileName, result) => {
  const { pizzaCount, pizzasTeam4, pizzasTeam3, pizzasTeam2 } = result;

  let string = pizzaCount.toString() + "\n";

  for (let i = 0; i < pizzasTeam4.length; i++) {
    string += "4 " + pizzasTeam4[i].map((p) => p.id).join(" ") + "\n";
  }

  for (let i = 0; i < pizzasTeam3.length; i++) {
    string += "3 " + pizzasTeam3[i].map((p) => p.id).join(" ") + "\n";
  }

  for (let i = 0; i < pizzasTeam2.length; i++) {
    string += "2 " + pizzasTeam2[i].map((p) => p.id).join(" ") + "\n";
  }

  fs.writeFileSync(path.join(__dirname, "outputs", fileName + ".out"), string);
};

const run = (input) => {
  const pizzaIds = [];
  let { team2, team3, team4, pizzas } = input;

  pizzas.sort((a, b) => (a.ingredients.length > b.ingredients.length ? 1 : -1));

  const pizzasTeam4 = [];
  const pizzasTeam3 = [];
  const pizzasTeam2 = [];

  for (let i = 0; i < team4; i++) {
    const [first, second, third, fourth, ...rest] = pizzas;
    pizzas = rest || [];
    const toAdd = [first, second, third, fourth].filter((p) => p);
    if (toAdd.length) {
      pizzasTeam4.push(toAdd);
      toAdd.forEach((k) => pizzaIds.push(k.id));
    }
  }

  for (let i = 0; i < team3; i++) {
    const [first, second, third, ...rest] = pizzas;
    pizzas = rest || [];
    const toAdd = [first, second, third].filter((p) => p);
    if (toAdd.length) {
      pizzasTeam3.push(toAdd);
      toAdd.forEach((k) => pizzaIds.push(k.id));
    }
  }

  for (let i = 0; i < team2; i++) {
    const [first, second, ...rest] = pizzas;
    pizzas = rest || [];
    const toAdd = [first, second].filter((p) => p);
    if (toAdd.length) {
      pizzasTeam2.push(toAdd);
      toAdd.forEach((k) => pizzaIds.push(k.id));
    }
  }

  return {
    pizzaCount: pizzaIds.length,
    pizzasTeam4,
    pizzasTeam3,
    pizzasTeam2,
  };
};

const score = (result) => {
  const { pizzasTeam4, pizzasTeam3, pizzasTeam2 } = result;

  const scoreFun = (pizzaArray) => {
    const set = pizzaArray.reduce((acc, pizza) => {
      pizza.ingredients.forEach((i) => acc.add(i));
      return acc;
    }, new Set());

    return set.size * set.size;
  };

  const score4 = pizzasTeam4.reduce((acc, pizzaTeam) => {
    acc += scoreFun(pizzaTeam);
    return acc;
  }, 0);

  const score3 = pizzasTeam3.reduce((acc, pizzaTeam) => {
    acc += scoreFun(pizzaTeam);
    return acc;
  }, 0);

  const score2 = pizzasTeam2.reduce((acc, pizzaTeam) => {
    acc += scoreFun(pizzaTeam);
    return acc;
  }, 0);

  return score4 + score3 + score2;
};

let files = fs.readdirSync("inputs");
files = files.filter((file) => file.includes(".in"));
files.forEach((file) => {
  const input = readInput(path.join(__dirname, "inputs", file));
  const result = run(input);
  writeResult(file.split(".")[0], result);
});
