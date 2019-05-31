import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from './Car/Car.js'



// changeTitleHandlerb =()=> {
//
//     console.log('Clicked');
// }


class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={function() { alert('click'); }}>
                {this.props.value}
            </button>
        );
    }
}

function App() {



    const divStyle = {
        'textAlign': 'center'
    };


    return (
   <div style={divStyle}>
     <h1 >ТЕСТ</h1>
       <button onClick={()=>{alert('Click')}}>Change title</button>
           <p style={{color:'blue', 'fontSize': "20px", 'fontWeight': '900'}}>COLOR</p>

       <Car name={'Блок2'}
            year={'2017'}>


       <p style={{color:'red'}}> Color</p>
       </Car>
       <Car name={'Блок3'}
            year={'2010'} />

    </div>

  );
// return React.createElement(
//     'div',
//     {
//         className: 'App'
//     },
//     React.createElement(
//         'h1',
//         null,
//         'Прувет'
//     )
// )


}

export default App;
