import './App.css';
import React from 'react';
import twitterLogo from './x-logo.avif';

const quotesArr = [
  ['“Be yourself; everyone else is already taken.”', '― Oscar Wilde'], 
  ["“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", '― Marilyn Monroe'], 
  ['“Be the change that you wish to see in the world.”', '― Mahatma Gandhi'], 
  ['“So many books, so little time.”', '― Frank Zappa'], 
  ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", '― Albert Einstein'], 
  ['“A room without books is like a body without a soul.”', '― Marcus Tullius Cicero'], 
  ["“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", '― Bernard M. Baruch'], 
  ["“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", '― Dr. Seuss'], 
  ['“You only live once, but if you do it right, once is enough.”', '― Mae West']
];
const colorsArr = [
  [ '#000'],
  [ '#3a015c'],
  [ '#4f0147'],
  [ '#35012c'],
  [ '#290025'],
  [ '#11001c'],
  [ '#411d13'],
  [ '#38160d'],
  [ '#260701']
];

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = {
        currentColor: colorsArr[0],
        currentQuoteArr: [quotesArr[0][0], quotesArr[0][1]]
      }
    }

     handleClick() {
      const index = Math.floor(Math.random()*quotesArr.length);
      this.setState({
        currentColor: colorsArr[index],
        currentQuoteArr: [quotesArr[index][0], quotesArr[index][1]]
      })
    }

    render() {

      return ( 
      <div className='section-wrapper' style={{color : this.state.currentColor, backgroundColor: this.state.currentColor}}>
        <div id='quote-box'>
         <div className='top-wrapper'>
           <p id='text'>{this.state.currentQuoteArr[0]}</p>
           <p id='author'>{this.state.currentQuoteArr[1]}</p>
          </div>
          <div className='bottom-wrapper'>
            <a id='tweet-quote' href='twitter.com/intent/tweet' target="_blank" rel='noreferrer'>
              <img src={twitterLogo}  alt='share in X' style={{backgroundColor: this.state.currentColor, width: '50px'}}/> 
            </a>
            <button id='new-quote' style={{backgroundColor: this.state.currentColor}} onClick={this.handleClick}>New Quote</button>
          </div>
        </div>
      </div>
    )
    }
}

export default App;