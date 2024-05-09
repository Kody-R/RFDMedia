document.addEventListener("DOMContentLoaded", function() {
   
   // Define commitment data
    const commitmentsData = {
        "2024 HS": [
            { name: "Bryson Pierce", position: "Left Handed Pitcher / Outfielder", school: "Benton HS", hometown: "Benton, LA", twitter: "@BrysonPierce9", tlink: "https://twitter.com/BrysonPierce9", link: "https://www.prepbaseballreport.com/profiles/LA/Bryson-Pierce-4370182695-7046319582" },
            { name: "Trey Hawsey", position: "1st Baseman", school: "West Monroe HS", hometown: "West Monroe, LA",  twitter: "@HawseyTrey", tlink: "https://twitter.com/HawseyTrey", link:"https://www.prepbaseballreport.com/profiles/LA/Trey--Hawsey-5814097362" },
            { name: "Brooks Roberson", position: "Right Handed Pitcher", school: "Frenship HS", hometown: "Wolfforth, TX",  twitter: "@BrooksRoberson3", tlink: "https://twitter.com/BrooksRoberson3", link: "https://www.prepbaseballreport.com/profiles/TX/Brooks-Roberson-5032941786" },
            { name: "Ethan Judice", position: "Right Handed Pitcher", school: "Hanson Memorial HS", hometown: "Franklin, LA",  twitter: "@JudiceEthan", tlink: "https://twitter.com/JudiceEthan", link: "https://www.prepbaseballreport.com/profiles/LA/Ethan-Judice-8250913674" },
            { name: "Drew Bourgeois", position: "3rd Baseman / Outfielder", school: "The Dunham School", hometown: "Baton Rouge, LA",  twitter: "@DrewBourgeois10", tlink: "https://twitter.com/DrewBourgeois10", link: "https://www.prepbaseballreport.com/profiles/LA/Drew-Bourgeois-4256381079" },
            { name: "Landon Fontenot", position: "Left Handed Pitcher", school: "Calvary Baptist", hometown: "Shreveport, LA",  twitter: "@landonfontenot5", tlink: "https://twitter.com/landonfontenot5",  link: "https://www.prepbaseballreport.com/profiles/LA/Landon-Fontenot-8456312097" },
            { name: "Sutton Lewis", position: "Middle Infielder / Right Handed Pitcher", school: "Neville HS", hometown: "Monroe, LA", twitter: "@SuttonLewis6", tlink: "https://twitter.com/SuttonLewis6", link: "https://www.prepbaseballreport.com/profiles/LA/sutton-Lewis-7513298460" },
            { name: "Garrett Wallace", position: "Outfielder", school: "Flower Mound HS", hometown: "Flower Mound, TX",  twitter: "@GarrettWallace5", tlink: "https://twitter.com/GarrettWallace5", link: "https://www.prepbaseballreport.com/profiles/TX/Garrett-Wallace-7064592381-7604918235" },
            { name: "Cam Harris", position: "2nd Baseman / Outfielder / Right Handed Pitcher", school: "Brock HS", hometown: "Brock, TX", twitter: "@CamHarris44", tlink: "https://twitter.com/CamHarris44", link: "https://fivetool.org/players/10efd136-c078-43f6-bb0b-e5adb0b432a3" }
        ],

        "2024 JUCO": [
            { name: "Owen Schexnaydre", position: "Right Handed Pitcher", school: "LSUE", hometown: "Houma, LA", twitter: "@OwenSchexnaydre", tlink: "https://twitter.com/OwenSchexnaydre", link: "https://athletics.lsue.edu/sports/baseball/roster/owen-schexnaydre/2608" },
            { name: "Matt Houston", position: "Catcher", school: "Navarro JC", hometown: "Hallsville, TX", twitter: "@MattHouston_27", tlink: "https://twitter.com/MattHouston_27", link: "https://navarrobulldogs.com/sports/baseball/roster/matt-houston/1132" },
            { name: "Luke Cooley", position: "Left Handed Pitcher", school: "East Central Miss CC", hometown: "Waynesboro, MS", twitter: "@LukeCooley06", tlink: "https://twitter.com/LukeCooley06", link: "https://www.ecccathletics.com/sports/bsb/2023-24/bios/cooley_luke_mqxb" },
            { name: "Blake Gollot", position: "Left Handed Pitcher", school: "Pearl River CC", hometown: "Saucier, MS", twitter: "@gollot31", tlink: "https://twitter.com/gollot31", link: "https://www.prccathletics.com/sports/bsb/2023-24/bios/gollott_blake_y20b" },
            { name: "Caleb Hall", position: "Right Handed Pitcher", school: "Meridian CC", hometown: "Hamilton, MS", twitter: "@Caleb1Hall", tlink: "https://twitter.com/Caleb1Hall", link: "https://www.mcceagles.com/sports/bsb/2023-24/bios/hall_caleb_b3s1" },
            { name: "Rhett Ketchum", position: "Outfielder", school: "Meridian CC", hometown: "West Point, MS", twitter: "@KetchumRhett", tlink: "https://twitter.com/KetchumRhett", link: "https://www.mcceagles.com/sports/bsb/2023-24/bios/ketchum_rhett_d9gp" }
        ],
        "2025 HS": [
            { name: "Shelton Harville Jr.", position: "Right Handed Pitcher", school: "Captain Shreve HS", hometown: "Keithville, LA" , twitter: "@SheltonHarvJr", tlink: "https://twitter.com/SheltonHarvJr", link: "https://www.prepbaseballreport.com/profiles/LA/Shelton--Harville--4897126350"},
            { name: "Easton Sanders", position: "1st Baseman / Outfielder / Right Handed Pitcher", school: "Glenbrook HS", hometown: "Minden, LA", twitter: "@easton_sanders", tlink: "https://twitter.com/easton_sanders", link: "https://www.prepbaseballreport.com/profiles/LA/Easton-Sanders-9348257160" },
            { name: "Cooper Smith", position: "Catcher", school: "Live Oak HS", hometown: "Baton Rouge, LA", twitter: "@thesm1th", tlink: "https://twitter.com/thesm1th", link: "https://www.prepbaseballreport.com/profiles/LA/Cooper-Smith-0546782913" },
            { name: "Adam Guillet", position: "Left Handed Pitcher / 1st Baseman", school: "Natchitoches Central HS", hometown: "Natchitoches, LA", twitter: "@adamguillet17", tlink: "https://twitter.com/adamguillet17", link: "https://www.prepbaseballreport.com/profiles/LA/Adam--Guillet-3490681275" },
            { name: "Drew Ferguson", position: "Right Handed Pitcher", school: "West Monroe HS", hometown: "West Monroe, LA", twitter: "@DrewFerg7", tlink: "https://twitter.com/DrewFerg7", link: "https://www.prepbaseballreport.com/profiles/LA/Andrew-Ferguson-8109237456" },
            { name: "Hudson Hartgrove", position: "Middle Infielder", school: "Cedar Ridge HS", hometown: "Round Rock, TX", twitter: "@HudHartgrove", tlink: "https://twitter.com/HudHartgrove", link: "https://www.prepbaseballreport.com/profiles/TX/Hudson-Hartgrove-4235180796" },
            { name: "Jackson Jones", position: "Left Handed Pitcher", school: "Benton HS", hometown: "Benton, LA", twitter: "@jacksonjones_2", tlink: "https://twitter.com/jacksonjones_2", link: "https://www.prepbaseballreport.com/profiles/LA/Jackson-Jones-8739625041-8906425713" },
            { name: "Gavin Nix", position: "Middle Infielder", school: "Archbishop Rummel", hometown: "Metairie, LA", twitter: "@gavinjnix2025", tlink: "https://twitter.com/gavinjnix2025", link: "https://www.prepbaseballreport.com/profiles/LA/Gavin--Nix--1470283659" },
            { name: "Caleb Short", position: "Right Handed Pitcher", school: "Little Rock Catholic", hometown: "Little Rock, AR", twitter: "@CalebShort57", tlink: "https://twitter.com/CalebShort57", link: "https://www.prepbaseballreport.com/profiles/AR/caleb-short" },
        ],
    
    };
    

  // Function to generate commitment HTML
function generateCommitmentHTML(commitmentCategory, data) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${commitmentCategory}</h2>`;
    
    // Create a div to contain the columns
    const columnsContainer = document.createElement("div");
    columnsContainer.classList.add("columns-container");
    
    // Calculate number of columns based on commitments length
    const numColumns = Math.ceil(data.length / 3); // You can adjust the number of columns as needed

    // Create and populate columns
    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        // Populate commitments in the column
        for (let j = i; j < data.length; j += numColumns) {
            const entry = data[j];
            const listItem = document.createElement("div");
            listItem.innerHTML = `
                <div class="commitment">
                    <div>
                        <p><strong>Name:</strong> ${entry.name}</p>
                        <p><strong>Position:</strong> ${entry.position}</p>
                        <p><strong>School:</strong> ${entry.school}</p>
                        <p><strong>Hometown:</strong> ${entry.hometown}</p>
                        <p><strong>Twitter:</strong> <a href="${entry.tlink}" target="_blank">${entry.twitter}</a></p>
                        <p><strong>Stats:</strong> <a href="${entry.link}" target="_blank">View Profile</a></p>
                    </div>
                </div>
                <hr>
            `;
            column.appendChild(listItem);
        }

        columnsContainer.appendChild(column);
    }
    
    section.appendChild(columnsContainer);
    return section;
}

// Function to populate commitments section
function populateCommitmentsSection() {
    const commitmentsSection = document.getElementById("commitments");
    Object.entries(commitmentsData).forEach(([category, data]) => {
        const commitmentHTML = generateCommitmentHTML(category.replace("_", " "), data);
        commitmentsSection.appendChild(commitmentHTML);
    });
} 

// Call the function to populate commitments section
populateCommitmentsSection(); 

});
