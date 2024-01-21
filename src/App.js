import logo from "./logo.svg";
import "./App.css";
import IssueCarousel from "./IssueCarousel";

let gameState = {
  player_nation: "Bangladesh",
};

let nation = {
  name: "Bangladesh",
  regions: ["Chittagong", "Dhaka"],
};

let regions = {
  Chittagong: {
    population: 10_000_000,
    militia: ["Kuki-Chin National Army"],
  },
  Dhaka: {
    population: 20_000_000,
  },
};

let militias = {
  "Kuki-Chin National Army": {
    allegiance: "Kuki-Chin National Front",
    stance: "anti_government",
    type: "racial",
    demand: "seperatist",
    members: 524,
    terrorist_designation: ["Bangladesh"],
  },
};

function militia_attacks_base(region) {
  console.log(`militia in ${region} attacks base`);
}

function dailyEvent(region) {
  let dailyEventArray = [militia_attacks_base];

  let randNum = Math.floor(Math.random() * dailyEventArray.length);

  dailyEventArray[randNum](region);
}

function issueGenerator() {
  let millenial_event_probability_weight = 1;
  let centurial_event_probability_weight = 10;
  let decadal_event_probability_weight = 100;
  let yearly_event_probability_weight = 1_000;
  let monthly_event_probability_weight = 12_000;
  let everyday_event_probability_weight = 360_000;

  let daily_events_amount_rand_num = Math.floor(Math.random() * 11);

  console.log(daily_events_amount_rand_num);

  for (let i = 0; i < daily_events_amount_rand_num; i++) {
    let rand_num = Math.floor(
      Math.random() * everyday_event_probability_weight
    );
    let rand_region = Math.floor(Math.random() * nation.regions.length);

    let event_region = nation.regions[rand_region];

    if (rand_num <= millenial_event_probability_weight) {
      console.log("millenial event >>>>>>>>>>>>>>>>>>>>>>>");
    } else if (rand_num <= centurial_event_probability_weight) {
      console.log("century event");
    } else if (rand_num <= decadal_event_probability_weight) {
      console.log("decade event");
    } else if (rand_num <= yearly_event_probability_weight) {
      console.log("yearly event");
    } else if (rand_num <= monthly_event_probability_weight) {
      console.log("monthly event");
    } else {
      dailyEvent(event_region);
    }
  }
}

issueGenerator();

function App() {
  return (
    <div className="App">
      <IssueCarousel />
    </div>
  );
}

export default App;
