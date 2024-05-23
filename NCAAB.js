const rosterData = [
    { 
        number: 1,
        name: "Nick Alonso",
        image: "NA1.png"
    },
    { 
        number: 2,
        name: "Thaxton Berch",
        image: "TB2.png"
    },
    { 
        number: 3,
        name: "Will Safford",
        image: "WS3.png",
        actionImage: "Will_Saff.png"
    },
    { 
        number: 4,
        name: "Brody Drost",
        image: "BD4.png",
        actionImage: "Bro_Dro.png"
    },
    { 
        number: 5,
        name: "Cole McConnell",
        image: "CM5.png",
        actionImage: "McConnell.png"
    },
    { 
        number: 6,
        name: "Adarius Myers",
        image: "AM6.png"
    },
    { 
        number: 7,
        name: "Michael Ballard",
        image: "MB7.png"
    },
    { 
        number: 9,
        name: "Colton Coates",
        image: "CC9.png"
    },
    { 
        number: 10,
        name: "Logan McLeod",
        image: "LM10.png",
        actionImage: "L_McL.png"
    },
    { 
        number: 12,
        name: "Jorge Corona",
        image: "JC12.png",
        actionImage: "JCorona.png"
    },
    { 
        number: 13,
        name: "Jake Smith",
        image: "JS13.png"
    },
    { 
        number: 14,
        name: "Grant Comeaux",
        image: "GC14.png"
    },
    { 
        number: 15,
        name: "CJ Sturiale",
        image: "CS15.png"
    },
    { 
        number: 16,
        name: "Ethan Bates",
        image: "EB16.png",
        actionImage: "EB_Field.png"
    },
    { 
        number: 17,
        name: "Slade Netterville",
        image: "SN17.png"
    },
    { 
        number: 18,
        name: "Kasten Furr",
        image: "KF18.png"
    },
    { 
        number: 19,
        name: "Luke Smith",
        image: "LS19.png"
    },
    { 
        number: 20,
        name: "Grant Hubka",
        image: "GH20.png"
    },
    { 
        number: 21,
        name: "Jake LaRocca",
        image: "JL21.png"
    },
    { 
        number: 24,
        name: "Dalton Davis",
        image: "DD24.png",
        actionImage: "DD_24.png"
        },
    { 
        number: 25,
        name: "Reid Snider",
        image: "RS25.png"
    },
    { 
        number: 26,
        name: "Blake Hooks",
        image: "BH26.png"
    },
    { 
        number: 28,
        name: "Caden Copeland",
        image: "CC28.png"
    },
    { 
        number: 29,
        name: "Isaac Crabb",
        image: "IC29.png"
    },
    { 
        number: 30,
        name: "Hutson Guinn",
        image: "HG30.png"
    },
    { 
        number: 31,
        name: "Sam Brodersen",
        image: "SB31.png"
    },
    { 
        number: 32,
        name: "Luke Nichols",
        image: "LN32.png"
    },
    { 
        number: 33,
        name: "Connor Nation",
        image: "CN33.png"
    },
    { 
        number: 34,
        name: "Turner Swistak",
        image: "TS34.png"
    },
    { 
        number: 35,
        name: "Nick Fraginals",
        image: "NF35.png"
    },
    { 
        number: 36,
        name: "Greg Martinez",
        image: "GM36.png",
        actionImage: "GR_MAr.png"
    },
    { 
        number: 37,
        name: "Reece Tarini",
        image: "RT37.png"
    },
    { 
        number: 38,
        name: "Nate Crider",
        image: "NC38.png"
    },
    { 
        number: 39,
        name: "Ryan Harland",
        image: "RH39.png"
    },
    { 
        number: 40,
        name: "Reed Smith",
        image: "RS40.png",
        actionImage: "RSmith.png"
    },
    { 
        number: 41,
        name: "Cade Patterson",
        image: "CP41.png"
    },
    { 
        number: 44,
        name: "Karson Evans",
        image: "KE44.png"
    },
    { 
        number: 45,
        name: "Jacob Havern",
        image: "JH45.png"
    },
    { 
        number: 46,
        name: "Hayden Harmon",
        image: "HH46.png"
    },
    { 
        number: 50,
        name: "Ryan Porche",
        image: "RP50.png"
    },
    { 
        number: 51,
        name: "R.J. Brown",
        image: "RB51.png"
    },
    { 
        number: 52,
        name: "Brenton Thiels",
        image: "BT52.png"
    },
    { 
        number: 54,
        name: "Haydan Toal",
        image: "HT54.png"
    },
    { 
        number: 57,
        name: "Will Melby Jr.",
        image: "WM57.png"
    },

];

document.addEventListener("DOMContentLoaded", function() {
    const playerDropdown = document.getElementById('player-dropdown');
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a player...";
    playerDropdown.appendChild(defaultOption);
    

    rosterData.forEach(player => {
        if (player.actionImage) { // Check if actionImage exists
            const option = document.createElement('option');
            option.value = player.number;
            option.textContent = player.name;
            playerDropdown.appendChild(option);
        }
    });

    function generateCover() {
        const selectedPlayerNumber = parseInt(playerDropdown.value);
        const selectedPlayer = rosterData.find(player => player.number === selectedPlayerNumber);

        if (selectedPlayer && selectedPlayer.actionImage) {
            const playerImage = document.getElementById('playerImage');
            playerImage.src = `pictures/${selectedPlayer.actionImage}`; // Modify the path as necessary
            playerImage.style.display = 'block';
        } else {
            alert("Selected player does not have an action image or no player selected.");
        }
    }

    // Attach event listener to the generate button instead of the dropdown change
    document.getElementById('generateCoverButton').addEventListener('click', generateCover);
});
