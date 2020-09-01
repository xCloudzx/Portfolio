class Project
{
    constructor(playLink, image, imageAlt, title, description, tags, codeLink=0, date="") 
    {
        this.playLink = playLink;
        this.image = image;
        this.imageAlt = imageAlt;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.codeLink = codeLink;
        this.date = date;
    }
}

const Projects = [
    //GITA 1
    new Project(`https://drive.google.com/open?id=1oa3Gv-vRWGLVhVJYsmPYixmNLu7wuwTO`, `AsteroidMiner.jpg`, `Asteroid Miner`, `Asteroid Miner - Final Game`, `Visit asteroid fields to mine different ores and make money to upgrade up your ship. Unlock new systems and gain access to better ores. The more you mine the more you'll make.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`3/19/20`),
    new Project(`https://drive.google.com/open?id=1WVWKkMalbUkZouJDQK_Clvtdokk0otXa`, `Goodbye.jpg`, `Goodbye`, `Goodbye`, `The buttons output certain text depending on the language and the pictures also change depending on the country.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/10/19`),
    new Project(`https://drive.google.com/open?id=1qWdgR_7skaWlyw2id2Er-GhM4Rilz-jz`, `AboutPage.jpg`, `About Page`, `About Page`, `This is an about page for a company that includes changing pictures by clicking on them and changing fonts.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/11/19`),
    new Project(`https://drive.google.com/open?id=1H8XAwLo52EumSKt0QCLpVJq-NbQDm4vF`, `MailingLabel.jpg`, `Mailing Label`, `Mailing Label`, `Words inputted in textboxes are put together to create a personalized mailing label.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/16/19`),
    new Project(`https://drive.google.com/open?id=1_9EI0aOqrwZLfZ5VnS0PCBZdwEvHjNsl`, `CarRental1.jpg`, `Car Rental 1`, `Car Rental 1`, `Miles Driven, Total Cost, and manager data is calculated for a car rental company.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/20/19`),
    new Project(`https://drive.google.com/open?id=1kZK6nhAB1KzMChuxXVJE3EMy9RjLetQj`, `BMI.jpg`, `BMI`, `BMI`, `BMI, average BMI, total people calculated, height in meters, and weight in kilograms are all calculated.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/27/19`),
    new Project(`https://drive.google.com/open?id=1wBceEy3KrB92AuRtr8RrtkZWweRr5Nl0`, `CarRental2.jpg`, `Car Rental 2`, `Car Rental 2`, `Miles Driven, Total Cost, and manager data for a car rental company are calculated here. You can also select a car and get different statistics for each one.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`9/30/19`),
    new Project(`https://drive.google.com/open?id=1yBif1esQ2nFwZQIrb0t550Zvd7EmgmNm`, `TestScore.jpg`, `Test Score`, `Test Score`, `The higher score out of 2 scores and the letter grade of each are calculated. It also finds the average score of all the tests calculated.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`10/4/19`),
    new Project(`https://drive.google.com/open?id=16B5fmelbRSSJZhkVUD9xvm86C01ON52_`, `Dice.jpg`, `Dice`, `Dice`, `Simulates two rolling dice by generating and displaying random numbers. Also shows the sum of the dice rolled and the probability of getting each number.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`10/8/19`),
    new Project(`https://drive.google.com/open?id=1TVBJMDYEuawAiN0DcKG68NW6N8qt1iKs`, `Craps.jpg`, `Craps Game`, `Craps Game`, `Simulates a game of craps and displays point, sum, and amount of rolls in the game.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`10/22/19`),
    new Project(`https://drive.google.com/open?id=1J4Ly-07BSpZluOFBhsMV5At4e9CaEBbK`, `ShirtSales.jpg`, `Shirt Sales`, `Shirt Sales - Benchmark`, `Calculates multiple orders of shirt sales and allows the manager to see information about them.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`10/22/19`),
    new Project(`https://drive.google.com/open?id=1K-AkGirKP0GMjWt22lu9R_yh82oDsz7P`, `SlotMachine.jpg`, `Slot Machine`, `Slot Machine`, `Randomizes what pictures will appear and calculates when you win. Functions as a slot machine and allows you to deposit money to get credit.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`10/29/19`),
    new Project(`https://drive.google.com/open?id=1vY2j_zUM6OtW6zc7r-aRRXD4T-cqwg5Y`, `RockPaperScissors.jpg`, `Rock Paper Scissors`, `Rock Paper Scissors`, `Simulates a game of Rock, Paper, Scissors for 2 players.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`11/12/19`),
    new Project(`https://drive.google.com/open?id=1u8hbjN-I0sVvrfTAqCFYMRDYMdWj_j_W`, `Fish1.jpg`, `Fish 1`, `Fish 1`, `Moves the dragon 1 left or right randomly and counts how many times it bumps the edge.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`11/18/19`),
    new Project(`https://drive.google.com/open?id=1QOt-tYieCPC3J_CpZbd-ZuZ1wzqg5QFk`, `Fish2D.jpg`, `Fish 2D`, `Fish 2D`, `Moves the dragon 1 left, right, up, or down randomly each "click" and counts how many times it bumps the edge. Game ends when the dragon and steve are in the same place.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`12/4/19`),
    new Project(`https://drive.google.com/open?id=1Ys3JcwSc53aTJG7fHLEC0zrwwyCskKSp`, `Football.jpg`, `Football`, `Football`, `This project has multiple forms and a menu strip at the top. It also uses drop down lists to display results for each team.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`12/10/19`),
    new Project(`https://drive.google.com/open?id=1HpaYjF-IqUdL7dpvfuMASlRxXqJvjj8d`, `TicTacToe.jpg`, `Tic-Tac-Toe`, `Tic-Tac-Toe`, `This is a simple game of Tic-Tac-Toe. Players can choose to be either fire or water. All end-game conditions are accounted for and the amount of wins is stored.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`1/6/20`),
    new Project(`https://drive.google.com/open?id=1VBlDjyTInDGHJSFWw8W2HQG9l528azWW`, `N!.jpg`, `N! Program`, `N! Program`, `Uses for loops to output numbers up to the number that is entered in the textboxes using different methods.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`1/10/20`),
    new Project(`https://drive.google.com/open?id=1oxNJtYYsidA78xTyHJLtXf5xQ8fM_sVh`, `Fish2D.jpg`, `Fish 2D`, `Basic AI Game`, `Moves an invader towards you and allows you to fire a bullet at it.Keeps track of score, time, and health using timers.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`1/15/20`),
    new Project(`https://drive.google.com/open?id=1APtdqqIVl5wtAYuE8qUzfCIH1-5Kz1-v`, `StarField.jpg`, `Starfield`, `Starfield`, `Simulates a spaceship moving through the stars. The stars move to a certain corner depending on which quadrant of the form they are in.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`1/27/20`),
    new Project(`https://drive.google.com/open?id=1zidMoSDV-X_IjicbXOEREl9HeRru9m5v`, `FishAquarium.jpg`, `Fish Aquarium`, `Fish Aquarium`, `Moves 20 fish randomly and uses timers to run bubbles, the boat, and the "shark". The fish get killed or caught if the fishing line or shark touch them.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`2/3/20`),
    new Project(`https://drive.google.com/open?id=1cONpLrmVcapMLhrwcLKtJgGRNL1Ho8gh`, `IntegerArray.jpg`, `Integer Array`, `Integer Array`, `Generates 5,000 numbers at a time and analyzes data to output certain numbers such as the average.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`2/24/20`),
    new Project(`https://drive.google.com/open?id=1Q-eYpZO_2GuJUuE1MVpbYkg6sLkMESQA`, `Histogram.jpg`, `Histogram`, `Histogram`, `Generates a histogram and a bar graph representing 100 randomly generated test scores.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`3/4/20`),
    new Project(`https://drive.google.com/open?id=1zpWqI7FwOHVfq4hKiognUlF1ti5U_oQc`, `Airplane.jpg`, `Airplane`, `Airplane`, `Utilizes lists to dynamically add and remove objects from the form. Player can shoot at an airplane which drops bombs when overhead.`, ["GITA 1", "C#", "Windows Forms"], undefined, date=`3/24/20`),

    //GITA 2 new Project(`Articles/CoronavirusMisinformation/coronavirusMisinformation.html`, `coronavirusMisinformation.jpg`, `Coronavirus Misinformation`, `Coronavirus Misinformation`, `Uses styling to present an article in a pleasant way.`, ["GITA 2", "HTML"], undefined, date=`8/17/20`),

    //unity
    new Project(`https://xcloudfox.itch.io/eob-tactical-board`, `EOBTacticalBoard.jpg`, `EOB Tactical Board`, `EOB Tactical Board`, `A board to plan tactics in the game Enemy on Board.`, ["C#", "Unity"], codeLink="https://github.com/xCloudzx/EOB-Tactical-Board"),
    new Project(`https://xcloudfox.itch.io/sledgeon`, `Sledgeon.jpg`, `Sledgeon`, `Sledgeon`, `Side-scroller and dungeon game where you shoot enemies and defeat bosses to unlock characters.`, ["C#", "Unity"], codeLink="https://github.com/xCloudzx/Sledgeon"),
    new Project(`https://xcloudfox.itch.io/data-blaze`, `DataBlaze.jpg`, `Data Blaze`, `Data Blaze`, `Look through the id cards and find as many spies as you can before time runs out.`, ["C#", "Unity"], codeLink="https://github.com/xCloudzx/Data-Blaze"),

    //other
    new Project(`https://drive.google.com/open?id=1zA8seXKfqivKWCk8PAYMkJFLNphyePrw`, `VideoTitleRandomizer.jpg`, `Video Title Randomizer`, `Video Title Randomizer`, `Randomizes a clickbait video title whenever you click the button.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/open?id=1gRwczxNBrrZDU0fIaj1Sf-hnDoWZ2Rm1`, `RainbowSixOPPicker.jpg`, `Rainbow Six Siege OP Picker`, `Rainbow Six Siege OP Picker`, `This program for the game Rainbow Six Siege picks an operator depending on what your playstyle is.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/open?id=1cuenvRSXEBiSgY9FRlu9Sa9T-rxIWvHr`, `StockMarketSimulation.jpg`, `Stock Market Simulation`, `Stock Market Simulation`, `Simulates a stock market based on random numbers for NVDA, AAPL, AMZN, TSLA, INTC, and GOOGL.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/open?id=1kRzSIXrEW_uudemJbhCe21wV93iBsv-K`, `BracketCreator.jpg`, `Bracket Creator`, `Bracket Creator`, `Creates a bracket with up to 16 slots depending on what you enter into the textboxes.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/open?id=1mZ0G8NE_s9QuqoVFoLKwYvjRZV3ICh_L`, `Feelings.jpg`, `Feelings`, `Feelings`, `Outputs a random statement depending on how you are feeling.`, ["C#", "Console"]),
    new Project(`https://drive.google.com/open?id=1klvvIdFedxp55U1UIi03B71Fp_YXcu7C`, `ConquerorofWorlds.jpg`, `Conqueror of Worlds`, `Conqueror of Worlds`, `Play as an empire in a galaxy of 100 planets, you can research, attack other planets, and make decisions. There are multiple forms to handle them.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/open?id=1T3qCujfCaYlBJgi9qCLRKuFoyOTCXsYC`, `PythonDiceroll.jpg`, `Diceroll`, `Diceroll`, `Rolls a dice the amount of the times that the user inputs at the beginning and outputs the amount of times that the dice equaled each number.`, ["Python", "Console"]),
    new Project(`https://drive.google.com/file/d/1OIxU6eq4qk_mncNERdLtO7mgIrv5W710`, `GroupsCreator.jpg`, `Groups Creator`, `Groups Creator`, `Creates groups based on data that the user inputs.`, ["C#", "Windows Forms"]),
    new Project(`https://drive.google.com/file/d/1Y_4KOhxuVpbF4cOdB1HIiNZXZqWkMp_Q/view?usp=sharing`, `Cyberline.jpg`, `Cyberline`, `Cyberline`, `Play as a black hat or white hat hacker, form a team to take on the most difficult contracts with, and become the richest hacker.`, ["C#", "Windows Forms"], codeLink="https://github.com/xCloudzx/Cyberline"),
    new Project(`https://discord.com/api/oauth2/authorize?client_id=742060214634807386&permissions=2048&scope=bot`, `PlagueIncDiscordBot.png`, `PlagueIncDiscordBot`, `Plague Inc. Discord Bot`, `Play Plague Inc. using a Discord Bot (very limited functionality).`, ["Python", "Bot"], codeLink="https://github.com/xCloudzx/Plague-Inc-Discord-Bot")
];

//iterate over Projects list and add them to html
function createProjectsHTML(inputTags)
{
    var p = document.getElementById("projectContainer");
    var projectsElement = document.createElement("div");
    projectsElement.className = "main";
    var html = "";

    var valid_projects = [];

    if (inputTags.includes("all"))
    {
        valid_projects = Projects;
    }

    else
    {
        var j = 0;
        for (j = 0; j < Projects.length; j++)
        {
            //if one of the inputTags is on the project
            if (inputTags.filter(element => Projects[j].tags.includes(element)).length > 0)
            {   
                valid_projects.push(Projects[j]);
            }
        }
    }

    var row_start = 0;
    var i = 0;
    for (i = 0; i < valid_projects.length; i++)
    {
        if (i == 0 || i % 4 == 0)
        {
            html += `<div class="row">`;
            row_start = i;
        }

        //create html for tags
        var k = 0;
        tagshtml = "";
        for (k = 0; k < valid_projects[i].tags.length; k++)
        {
            tagshtml += `<p class="tagtext">${valid_projects[i].tags[k]}</p>\n`
        }

        if (valid_projects[i].codeLink == 0) 
        {
            html += 
            `<div class="column">
                <div class="content">
                    <a href="${valid_projects[i].playLink}" target="_blank"><img src = "${valid_projects[i].image}" alt = "${valid_projects[i].imageAlt}" style = "width:100%;"></a>
                    <h3>${valid_projects[i].title}</h3>
                    <h3>${valid_projects[i].date}</h3>
                    <hr width = "100%" size = "5" color = "gray">
                    <p>${valid_projects[i].description}</p>
                    <div>
                        ${tagshtml}
                    </div>
                </div>
            </div>`;
            
        }

        else
        {
            html += 
            `<div class="column">
                <div class="content">
                    <a href="${valid_projects[i].playLink}" target="_blank"><img src = "${valid_projects[i].image}" alt = "${valid_projects[i].imageAlt}" style = "width:100%;"></a>
                    <h3>${valid_projects[i].title}</h3>
                    <h3>${valid_projects[i].date}</h3>
                    <hr width = "100%" size = "5" color = "gray">
                    <p>${valid_projects[i].description}</p>
                    <a href="${valid_projects[i].codeLink}" target = "_blank" class="codebutton">Code</a>
                    <div>
                        ${tagshtml}
                    </div>
                </div>
            </div>`;
        }

        if (i == row_start + 3)
        {
            html += `</div>`;
        }

        else if (i == valid_projects.length)
        {
            html += `</div>`;
        }
    }

    html += `</div>`;
    projectsElement.innerHTML += html;
    p.innerHTML = "";
    p.appendChild(projectsElement);
}