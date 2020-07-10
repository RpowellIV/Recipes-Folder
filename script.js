function marinaraSauce (cookName, var2){
    var two = 2
    var oneFourth = .25
    var fracCon = oneFourth === .25 ? "1/4" : "Wrong Measurement!";
    var greet = "Hey, "+ cookName + "! This is my marinara sauce recipe! " + var2
    console.log(greet)
    console.log("- Heat a medium-large saucepan over medium heat")
    console.log("- Add " + two + " tspns of oil and 5 garlic cloves, cook until golden, about "+ two + " minutes")
    console.log("- Add " +  fracCon + " cup water, "+ two +" cans of crushed tomates, and salt and season with black pepper to taste.")
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes")
    console.log("- Stir in "+ fracCon +" cup roughly chopped fresh basil, salt and pepper as needed.")
};

marinaraSauce("Adam","CHECK IT OUT...")
