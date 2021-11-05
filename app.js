// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const jokeJSON1 = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(jokeJSON1);
p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
  .then(res => {
    const friendsJS2 = res.data.quote;
    p3.innerText = res.data.character;
    p4.innerText = friendsJS2;
  })
  .catch(err => {
    console.log(err);
  });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
async function quoteFunc() {
  try {
    const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    p5.innerText = quoteJS3.data.character;
    p6.innerText = quoteJS3.data.quote;
  } catch (err) {
    console.log(err);
  }
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
async function tvMazeFunc() {
  try {
    const finalEp = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
    p7.innerText = finalEp.data.name;
  } catch (err) {
    console.log(error);
  }
}
tvMazeFunc();