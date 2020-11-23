import {useState, useEffect} from 'react';

export default function Card() {

    const [cardObject, setCardObject] = useState({});
    const [userInput, setUserInput] = useState("");

    function getCard(suit="HEARTS"){
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
              .then(response =>
              {
                return response.json();
              })
              .then(json =>
              {
                  setCardObject(getSuit(json.cards, suit));
                  console.log(json);
              })
              .catch(err =>
              {
                  console.log("An error has occured with the webpage! Please try again:  ", err);
              });
      }

      function handleInput(e){
        setUserInput(e.target.value)
      }

      function getSuit(deck, suit){
          if(suit === "") return deck[Math.floor(Math.random() * deck.length)]
          else{
            for(let i = 0; i < deck.length; i++){
                if(deck[i].suit === suit.toUpperCase()) return deck[i];
            }
          }
      }

    useEffect(() => {
        getCard()
    }, []) 

    return (
        
        <div>
            <h1>♣ ♦ The Amazing Card-a-tron 9001! ♥ ♠</h1>
            <div>
                {
                    cardObject ? 
                    <img alt="Card" src={cardObject.image} /> :
                    ""
                }
            </div>
            <div>
                <input onChange={handleInput} placeholder="Enter card suit or leave blank for random"/>
            </div>
            <div>
                <button onClick={() => getCard(userInput.trim())}>Draw Card</button>
            </div>

        </div>

    );
}