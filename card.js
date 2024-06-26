document.addEventListener("DOMContentLoaded", function() {

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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nick-alonso/12843",
        image: "NA1.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/thaxton-berch/12845",
        image: "TB2.png"
    },
    { 
        number: 3,
        name: "Will Safford",
        position: "INF/OF",
        height: "5-8",
        class: "R-Jr.",
        hometown: "Baton Rouge, LA",
        High_School: "University High School",
        Prev_School: "LSU",
        twitter: "Will_Safford3",
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/will-safford/12864",
        image: "WS3.png",
        actionImage: "Will_Saff.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/brody-drost/12852",
        image: "BD4.png",
        actionImage: "Bro_Dro.png"
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
        image: "CM5.png",
        actionImage: "McConnell.png"
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
        image: "AM6.png"
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
        image: "MB7.png"
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
        image: "CC9.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/logan-mcleod/12860",
        image: "LM10.png",
        actionImage: "L_McL.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jorge-corona/12849",
        image: "JC12.png",
        actionImage: "JCorona.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jake-smith/12905",
        image: "JS13.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/grant-comeaux/12847",
        image: "GC14.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/cj-sturiale/12869",
        image: "CS15.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ethan-bates/12844",
        image: "EB16.png",
        actionImage: "EB_Field.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/slade-netterville/12862",
        image: "SN17.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/kasten-furr/12893",
        image: "KF18.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/luke-smith/12866",
        image: "LS19.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/grant-hubka/12857",
        image: "GH20.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jake-larocca/12949",
        image: "JL21.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/dalton-davis/12851",
        image: "DD24.png",
        actionImage: "DD_24.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reid-snider/12904",
        image: "RS25.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/blake-hooks/12886",
        image: "BH26.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/caden-copeland/12848",
        image: "CC28.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/isaac-crabb/12850",
        image: "IC29.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/hutson-guinn/12948",
        image: "HG30.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/sam-brodersen/12889",
        image: "SB31.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/luke-nichols/12899",
        image: "LN32.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/connor-nation/12891",
        image: "CN33.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/turner-swistak/12898",
        image: "TS34.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nick-fraginals/12854",
        image: "NF35.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/greg-martinez/12858",
        image: "GM36.png",
        actionImage: "GR_MAr.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reece-tarini/12888",
        image: "RT37.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/nate-crider/12895",
        image: "NC38.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ryan-harland/12855",
        image: "RH39.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/reed-smith/12867",
        image: "RS40.png",
        actionImage: "RSmith.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/cade-patterson/12885",
        image: "CP41.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/karson-evans/12853",
        image: "KE44.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/jacob-havern/12856",
        image: "JH45.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/hayden-harmon/12902",
        image: "HH46.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/ryan-porche/12863",
        image: "RP50.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/r-j-brown/12890",
        image: "RB51.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/brenton-thiels/12896",
        image: "BT52.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/haydan-toal/12870",
        image: "HT54.png"
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
        LA_Tech_Sports: "https://latechsports.com/sports/baseball/roster/will-melby-jr-/12897",
        image: "WM57.png"
    },

];


    const themeDropdown = document.getElementById("theme-dropdown");
    const playerDropdown = document.getElementById("player-dropdown");

    // Function to populate player dropdown
    function populatePlayerDropdown() {
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select a player...";
        playerDropdown.appendChild(defaultOption);

        rosterData.forEach(player => {
            const option = document.createElement("option");
            option.value = player.number;
            option.textContent = player.name;
            playerDropdown.appendChild(option);
        });
    }

    populatePlayerDropdown();

    // Function to update player info on the card
    function updatePlayerInfo(playerNumber) {
        const selectedPlayer = rosterData.find(player => player.number === playerNumber);
        if (!selectedPlayer) return null; // Return null if no player is found

        const theme = themeDropdown.value || 'default';
        let imagePath = '/pictures/Roster/'; // Base path for images

         // Check if the theme is 'action' and the actionImage is available
        if (theme === 'action' && selectedPlayer.actionImage) {
            imagePath = 'pictures/' + selectedPlayer.actionImage;
        } else {
            imagePath = 'pictures/' + selectedPlayer.image;
        }

    document.getElementById('playerImage').src = imagePath

        return {
            name: selectedPlayer.name,
            position: selectedPlayer.position,
            imagePath: imagePath
        };
    }

    // Event listener for the 'Generate Card' button
    document.getElementById('generateCard').addEventListener('click', function() {
        const selectedPlayerNumber = parseInt(playerDropdown.value);
        const playerInfo = updatePlayerInfo(selectedPlayerNumber);

        if (playerInfo) {
            document.getElementById('playerImage').src = playerInfo.imagePath;
            document.getElementById('playerName').innerText = playerInfo.name;
            document.getElementById('teamName').innerText = playerInfo.position;

            const card = document.getElementById('card');
            card.className = themeDropdown.value || 'default';
            card.style.display = 'block';
        } else {
            alert("Please select a player.");
        }
    });
});





