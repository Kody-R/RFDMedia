
const rosterData = [
    { 
        number: 1,
        name: "Nick Alonso",
        position: "OF",
        height: "6-1",
        class: "R-Fr.",
        hometown: "Miami, FL",
        High_School: "Belen Jesuit Preparatory",
        Prev_School: "N/A",
        twitter: "NickAlo64363210",
        image: "NA1.png",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nick-alonso/12843"
    },
    { 
        number: 2,
        name: "Thaxton Berch",
        position: "INF",
        height: "5-10",
        class: "Jr.",
        hometown: "Jackson, MS",
        High_School: "Jackson Preparatory School",
        Prev_School: "N/A",
        twitter: "BerchThaxton",
         LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/thaxton-berch/12845"
    },
    { 
        number: 3,
        name: "Will Safford",
        position: "INF",
        height: "5-8",
        class: "R-Jr.",
        hometown: "Baton Rouge, LA",
        High_School: "University High School",
        Prev_School: "LSU",
        twitter: "Will_Safford3", 
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/will-safford/12864"
    },
    { 
        number: 4,
        name: "Brody Drost",
        position: "OF",
        height: "6-3",
        class: "R-Jr.",
        hometown: "Lake Charles, MS",
        High_School: "Barbe High School",
        Prev_School: "LSU",
        twitter: "BrodyDrost",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/brody-drost/12852"
    },
    { 
        number: 5,
        name: "Cole McConnell",
        position: "OF",
        height: "6-1",
        class: "Sr.",
        hometown: "Beaumont, TX",
        High_School: "West Brook High School",
        Prev_School: "N/A",
        twitter: "ColeMcConnell_1",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/cole-mcconnell/12859"
    },
    { 
        number: 6,
        name: "Adarius Myers",
        position: "OF",
        height: "5-10",
        class: "R-Sr.",
        hometown: "Seminary, MS",
        High_School: "Seminary High School",
        Prev_School: "N/A",
        twitter: "adariusmyers7",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/adarius-myers/12861"
    },
    { 
        number: 7,
        name: "Michael Ballard",
        position: "INF",
        height: "6-0",
        class: "Sr.",
        hometown: "Longwood, FL",
        High_School: "Lake Mary High School",
        Prev_School: "Eckerd College",
        twitter: "MikeBallard007",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/michael-ballard/12887"
    },
    { 
        number: 9,
        name: "Colton Coates",
        position: "INF",
        height: "6-0",
        class: "Fr.",
        hometown: "Southaven, MS",
        High_School: "Desoto Central",
        Prev_School: "N/A",
        twitter: "CoatesColton",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/colton-coates/12900"
    },
    { 
        number: 10,
        name: "Logan McLeod",
        position: "INF",
        height: "5-10",
        class: "Sr.",
        hometown: "Sour Lake, TX",
        High_School: "Hardin-Jefferson High School",
        Prev_School: "N/A",
        twitter: "mcleod_samuel",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/logan-mcleod/12860"
    },
    { 
        number: 12,
        name: "Jorge Corona",
        position: "C/OF",
        height: "6-2",
        class: "Sr.",
        hometown: "Miami, FL",
        High_School: "Miami Killian High School",
        Prev_School: "N/A",
        twitter: "jcoronaa12",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jorge-corona/12849"
    },
    { 
        number: 13,
        name: "Jake Smith",
        position: "INF",
        height: "5-10",
        class: "Fr.",
        hometown: "Rosepine, LA",
        High_School: "Rosepine High School",
        Prev_School: "N/A",
        twitter: "smithjake_4",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jake-smith/12905"
    },
    { 
        number: 14,
        name: "Grant Comeaux",
        position: "INF",
        height: "6-1",
        class: "R-Fr.",
        hometown: "Lake Charles, LA",
        High_School: "Barbe High School",
        Prev_School: "N/A",
        twitter: "GrantComeaux1",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/grant-comeaux/12847"
    },
    { 
        number: 15,
        name: "CJ Sturiale",
        position: "OF/LHP",
        height: "5-10",
        class: "R-Fr.",
        hometown: "Denham Springs, LA",
        High_School: "Catholic BR High School",
        Prev_School: "N/A",
        twitter: "CJSturiale",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/cj-sturiale/12869"
    },
    { 
        number: 16,
        name: "Ethan Bates",
        position: "INF/P",
        height: "6-0",
        class: "Sr.",
        hometown: "Hot Springs, AR",
        High_School: "Lakeside High School",
        Prev_School: "Navarro JC",
        twitter: "ethan_bates3",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ethan-bates/12844"
    },
    { 
        number: 17,
        name: "Slade Netterville",
        position: "INF",
        height: "5-9",
        class: "R-So.",
        hometown: "Shreveport, LA",
        High_School: "C.E. Byrd High School",
        Prev_School: "N/A",
        twitter: "SladeNettervil1",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/slade-netterville/12862"
    },
    { 
        number: 18,
        name: "Kasten Furr",
        position: "INF",
        height: "5-9",
        class: "Sr.",
        hometown: "Ruston, LA",
        High_School: "Ruston High School",
        Prev_School: "UNO",
        twitter: "kasten_furr",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/kasten-furr/12893"
    },
    { 
        number: 19,
        name: "Luke Smith",
        position: "OF",
        height: "6-0",
        class: "R-Fr.",
        hometown: "Texarkana, TX",
        High_School: "Texas High School",
        Prev_School: "N/A",
        twitter: "Smith03Luke",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/luke-smith/12866"
    },
    { 
        number: 20,
        name: "Grant Hubka",
        position: "RHP",
        height: "6-4",
        class: "Sr.",
        hometown: "Gretna, NE",
        High_School: "Gretna High School",
        Prev_School: "Iowa Western CC",
        twitter: "GrantHubka",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/grant-hubka/12857"
    },
    { 
        number: 21,
        name: "Jake LaRocca",
        position: "C",
        height: "5-10",
        class: "Fr.",
        hometown: "Lake Charles, LA",
        High_School: "St. Louis Catholic High School",
        Prev_School: "N/A",
        twitter: "JakeLaRocca2",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jake-larocca/12949"
    },
    { 
        number: 24,
        name: "Dalton Davis",
        position: "INF",
        height: "6-0",
        class: "S.",
        hometown: "Frisco, TX",
        High_School: "Prosper High School",
        Prev_School: "Tyler JC",
        twitter: "_Ddavis13_",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/dalton-davis/12851"
    },
    { 
        number: 25,
        name: "Reid Snider",
        position: "INF",
        height: "6-2",
        class: "Fr.",
        hometown: "Lake Charles, LA",
        High_School: "St. Louis Catholic High School",
        Prev_School: "N/A",
        twitter: "ReidSnider",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reid-snider/12904"
    },
    { 
        number: 26,
        name: "Blake Hooks",
        position: "RHP",
        height: "6-0",
        class: "Jr.",
        hometown: "Petal, MS",
        High_School: "Petal High School",
        Prev_School: "Pearl River CC",
        twitter: "Blake_Hooks8",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/blake-hooks/12886"
    },
    { 
        number: 28,
        name: "Caden Copeland",
        position: "LHP",
        height: "6-2",
        class: "Jr.",
        hometown: "Midlothian, TX",
        High_School: "Midlothian High School",
        Prev_School: "N/A",
        twitter: "cadencopeland14",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/caden-copeland/12848"
    },
    { 
        number: 29,
        name: "Isaac Crabb",
        position: "RHP",
        height: "6-2",
        class: "Sr.",
        hometown: "Harrisburg, IL",
        High_School: "Harrisburg High School",
        Prev_School: "Wabash Valley JC",
        twitter: "CrabbIsaac",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/isaac-crabb/12850"
    },
    { 
        number: 30,
        name: "Hutson Guinn",
        position: "INF/OF",
        height: "6-0",
        class: "Fr.",
        hometown: "Paragould, AR",
        High_School: "Greene County Tech High School",
        Prev_School: "N/A",
        twitter: "GuinnHutson",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/hutson-guinn/12948"
    },
    { 
        number: 31,
        name: "Sam Brodersen",
        position: "RHP",
        height: "6-1",
        class: "Sr.",
        hometown: "Orlando, FL",
        High_School: "West Orange High School",
        Prev_School: "Wingate",
        twitter: "sammybroderson",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/sam-brodersen/12889"
    },
    { 
        number: 32,
        name: "Luke Nichols",
        position: "LHP",
        height: "6-2",
        class: "Jr.",
        hometown: "Bell City, MO",
        High_School: "Bell City High School",
        Prev_School: "Jefferson College",
        twitter: "Luke_Nichols03",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/luke-nichols/12899"
    },
    { 
        number: 33,
        name: "Connor Nation",
        position: "LHP",
        height: "6-0",
        class: "Jr.",
        hometown: "Madison, MS",
        High_School: "Madison Central High School",
        Prev_School: "Hinds CC",
        twitter: "cnation11",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/connor-nation/12891"
    },
    { 
        number: 34,
        name: "Turner Swistak",
        position: "RHP",
        height: "6-3",
        class: "R-Jr.",
        hometown: "Hattiesburg, MS",
        High_School: "Oak Grove High School",
        Prev_School: "Tennessee",
        twitter: "TurnerSwistak",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/turner-swistak/12898"
    },
    { 
        number: 35,
        name: "Nick Fraginals",
        position: "RHP",
        height: "6-3",
        class: "So.",
        hometown: "Miramar, FL",
        High_School: "ESB Academy",
        Prev_School: "N/A",
        twitter: "FraginalsNick",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nick-fraginals/12854"
    },
    { 
        number: 36,
        name: "Greg Martinez",
        position: "RHP",
        height: "6-3",
        class: "Sr.",
        hometown: "Southwest Ranches, FL",
        High_School: "Archbishop McCarthy High School",
        Prev_School: "N/A",
        twitter: "N/A",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/greg-martinez/12858"
    },
    { 
        number: 37,
        name: "Reece Tarini",
        position: "LHP",
        height: "5-10",
        class: "Fr.",
        hometown: "Little Rock, AR",
        High_School: "Little Rock Christian Academy",
        Prev_School: "N/A",
        twitter: "ReeceTarini",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reece-tarini/12888"
    },
    { 
        number: 38,
        name: "Nate Crider",
        position: "RHP",
        height: "6-4",
        class: "Jr.",
        hometown: "Paragould, AR",
        High_School: "Greene County Tech High School",
        Prev_School: "Dyersburg State CC",
        twitter: "NateCrider3",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nate-crider/12895"
    },
    { 
        number: 39,
        name: "Ryan Harland",
        position: "LHP",
        height: "5-8",
        class: "Jr.",
        hometown: "Baton Rouge, LA",
        High_School: "Parkiew Baptist School",
        Prev_School: "N/A",
        twitter: "ryan_23h",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ryan-harland/12855"
    },
    { 
        number: 40,
        name: "Reed Smith",
        position: "RHP",
        height: "6-2",
        class: "Sr.",
        hometown: "Lufkin, TX",
        High_School: "Lukin Hudson High School",
        Prev_School: "Tyler JC",
        twitter: "Reed_smith44",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reed-smith/12867"
    },
    { 
        number: 41,
        name: "Cade Patterson",
        position: "OF",
        height: "6-1",
        class: "Fr.",
        hometown: "Ruston, LA",
        High_School: "Ruston High School",
        Prev_School: "N/A",
        twitter: "CadePatterson13",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/cade-patterson/12885"
    },
    { 
        number: 44,
        name: "Karson Evans",
        position: "INF/1B",
        height: "6-2",
        class: "So.",
        hometown: "Taylorsville, MS",
        High_School: "Seminary High School",
        Prev_School: "N/A",
        twitter: "karsonevans",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/karson-evans/12853"
    },
    { 
        number: 45,
        name: "Jacob Havern",
        position: "RHP",
        height: "6-6",
        class: "So.",
        hometown: "Round Rock, TX",
        High_School: "Cedar Ridge High School",
        Prev_School: "N/A",
        twitter: "HavernJacob",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jacob-havern/12856"
    },
    { 
        number: 46,
        name: "Hayden Harmon",
        position: "RHP",
        height: "5-11",
        class: "Fr.",
        hometown: "Minden, LA",
        High_School: "Glenbrook High School",
        Prev_School: "N/A",
        twitter: "haydenharmon05",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/hayden-harmon/12902"
    },
    { 
        number: 50,
        name: "Ryan Porche",
        position: "RHP",
        height: "6-4",
        class: "R-Fr.",
        hometown: "River Ridge, LA",
        High_School: "Jesuit High School",
        Prev_School: "N/A",
        twitter: "porche_ryan",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ryan-porche/12863"
    },
    { 
        number: 51,
        name: "R.J. Brown",
        position: "C",
        height: "5-9",
        class: "Fr.",
        hometown: "Ruston, LA",
        High_School: "Ruston High School",
        Prev_School: "N/A",
        twitter: "rj_brown_",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/r-j-brown/12890"
    },
    { 
        number: 52,
        name: "Brenton Thiels",
        position: "RHP",
        height: "7-0",
        class: "Sr.",
        hometown: "Otis, LA",
        High_School: "Alexandria Senior High School",
        Prev_School: "West Alabama",
        twitter: "brenton_thiels",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/brenton-thiels/12896"
    },
    { 
        number: 54,
        name: "Haydan Toal",
        position: "LHP",
        height: "6-1",
        class: "R-Fr.",
        hometown: "Pineville, LA",
        High_School: "Tioga High School",
        Prev_School: "N/A",
        twitter: "HaydanToal2022",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/haydan-toal/12870"
    },
    { 
        number: 57,
        name: "Will Melby Jr.",
        position: "RHP",
        height: "6-5",
        class: "R-So.",
        hometown: "Munster, IN",
        High_School: "Munster High School",
        Prev_School: "UCF",
        twitter: "wmelby7",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/will-melby-jr-/12897"
    },

];
// Add more players here


// Function to generate roster HTML
function generateRosterHTML(data) {
const section = document.createElement("section");
section.innerHTML = `<h2>Team Roster</h2>`;

const rosterList = document.createElement("ul");
rosterList.classList.add("roster-list");

// Populate players in the roster list
data.forEach(player => {
const listItem = document.createElement("li");
listItem.classList.add("player");

let prevSchoolInfo = "";
if (player.Prev_School !== "N/A") {
    prevSchoolInfo = `<p><strong>Previous School:</strong> ${player.Prev_School}</p>`;
}

const twitterLink = `https://twitter.com/${player.twitter.slice(1)}`;

listItem.innerHTML = `
    <div>
        <p><strong>Number:</strong> ${player.number}</p>
        <p><strong>Name:</strong> ${player.name}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Class:</strong> ${player.class}</p>
        <p><strong>Hometown:</strong> ${player.hometown}</p>
        <p><strong>High School:</strong> ${player.High_School}</p>
        ${prevSchoolInfo}
        <p><strong>Twitter:</strong> <a href="${twitterLink}" target="_blank">@${player.twitter}</a></p>
        <p><strong>La Tech Sports:</strong> <a href="${player.LA_Tech_Sports}" target="_blank">View Profile</a></p>
    </div>
    <hr>
`;

rosterList.appendChild(listItem);
});

section.appendChild(rosterList);
return section;
}




// Function to populate roster section
function populateRosterSection() {
const rosterSection = document.getElementById("roster");
const rosterHTML = generateRosterHTML(rosterData);
rosterSection.appendChild(rosterHTML);
}

// Call the function to populate the roster section
populateRosterSection(); 

