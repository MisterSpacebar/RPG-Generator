var strengths = ["1. Adaptable: No matter what life throws at your PC, they always rise up to the challenge. Your character is flexible and can handle nearly every situation.",
                "2. Analytical: Your PC's mind is like a computer, able to absorb a barrage of information and come to a logical conclusion. Your solutions always have the inarguable weight of reason.",
                "3. Courageous: Fear has no place in your character's heart. They laugh at danger and gladly push themselves to confront what others flee from.",
                "4. Idealistic: Your PC holds some ideals that are nothing short of sacred. Your PC may feel that everyone should live up to those ideals and may be dissapointed when people dont.",
                "5. Independent: When everyone else has failed or fallen, your PC knows they can still count on themselves. Your PC may get along fine with others but makes sure not to rely on them.",
                "6. Patient: Your PC is always willing to wait and knows the power of being calm and waits for the right opportunities.",
                "7. Spiritual: Your PC holds steadfast to a belief or religion that gives them a solid mental bedrock that can always rely upon.",
                "8. Wise: Through years of experience, your PC has developed the ability to understand the truths of how the world works.",
                "9. Curious: Your PC is curious and wants to learn about every one and every thing. What drives their curiousity is up to the player.",
                "10. Witty: Your PC is clever and cracks the right joke for a good friend and a perfect insult for a foe."];

var desires = ["1. Ambition: Your PC craves power and authority over others. The PC may pursue privilege, social status, or rank.",
                "2. Belonging: Your PC seeks to be liked by others and goes out of their way to make good impressions.",
                "3. Expertise: Your PC wants to excel in a chosen field or skill. To achieve that goal, the PC practices constantly.",
                "4. Fame: Your PC seeks the limelight and wants to be famous. They pursue anything that can garner attention or praise.",
                "5. Justice: Your character believes in a set of ethics that demands fair treatment for all.",
                "6. Knowledge: Your PC wishes to uncover knowledge that may have been lost, forgotten, or locked away.",
                "7. Love: Your PC seeks romantic affection and intimacy with another character.",
                "8. Safety: Your PC values peace and comfort above all else. Perhaps they seek shelter, a steady source of food, or other necessities, or they might seek emotional security in a place free from abuse or oppression.",
                "9. Vegeance: Someone or something wronger your PC in the past and the PC has sworn to exact revenge against the aggrieving party.",
                "10. Wealth: Money or material possessions are the prime desire of your PC."];

var fears = ["1. Change: Your PC finds routine and stability comforting, and fears change that could upend their day.",
             "2. Commitment: The idea of making promises or being relied upon scares your PC, who hates the idea that someone else is relying on them.",
             "3. Death: Your PC fears coming to terms with their own mortality.",
             "4. Expression: Your PC has some behavior or means of expression themselves that they do not want the world to know about.",
             "5. Humiliation: Your PC is especially concerned with how others view them and are especially sensitive to potential humiliation.",
             "6. Isolation: Your character fears being isolated from other people and being doomed to live and die alone.",
             "7. Nemesis: Your PC has a deadly foe, someone they fear (even if they don't admit it)",
             "8. Obscurity: Your PC wishes to be remembered after they are gone and works tirelessly to secure their legacy.",
             "9. Poverty: Your PC fears being without wealth and security and works hard to amass money",
             "10. Failure: Your PC fears that they might fail at what they do and this fear can crush them to inaction." ];

var flaws = ["1. Anger: Your PC lashes out at themselves or others with undue cause. They are quick to resort to violence to solve their issues.",
            "2. Compulsion: You PC has an addiction, fascination, obsession, or another automatic behavior that is self-destructive or otherwise impedes their normal ability to function and be healthy.",
            "3. Deception: Your PC may be disloyal or a compulsive liar, they are concerned with their own well-being first and foremost.",
            "4. Greed: Your PC is never satiated with what they have, always wanting more.",
            "5. Laziness: Your PC always seeks the path of least resistance and becomes intimidated by complex or difficult tasks.",
            "6. Ignorance: Your PC lacks a basic knowledge or understanding of norms.",
            "7. Intolerance: Your PC harbors some prejudice towards a group of peoples.",
            "8. Pride: Your PC is prideful to the point of being arrogant, vain, or self-absorbed, and thinks highly of themselves at the expense of others.",
            "9. Recklessness: Your PC shows little regard for how their actions may affect themselves or others, either due to low self0esteem or lack of forethought.",
            "10. Timid: Your PC is extremely risk averse, opting instead to take more thorough or tried-and-true approaches. They may take too long to act or may be unable toa ct at all in the face of new or intimidating challenges."]

function randomGen (upto) {
    var max = upto;
    var result = Math.floor(Math.random() * max);
    console.log(result);

    return result
}

$("#remake").on("click", function(event){
    event.preventDefault();
    var desireNumber = $("<p>").text(randomGen(10));
    var strengthNumber = $("<p>").text(randomGen(10));
    var flawNumber = $("<p>").text(randomGen(10));
    var fearNumber = $("<p>").text(randomGen(10));

    $("#desires").append(desires[desireNumber]);
    $("#flaws").append(flaws[flawNumber]);
    $("#strengths").append(strengths[strengthNumber]);
    $("#fears").append(fears[fearNumber]);

    console.log(desires[desireNumber]);
    console.log(flaws[flawNumber]);
    console.log(strengths[strengthNumber]);
    console.log(fears[fearNumber]);
});