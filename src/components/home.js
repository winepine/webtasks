import React from 'react';
import './styles.css'
class Home extends React.Component {
    state = {
        input_focus:true,
        input_value:"Try Typing ditto"
    }
    setFocus = ()=>{
        this.setState({
            input_focus:false,
            input_value:""
        })
    }
    setFocusLost = ()=>{
        this.setState({
            input_focus:true
        })
    }
    QueryPokemon = async () =>{
        if(this.state.input_value===""){
            alert("Error, Enter A Pokemon Name");
            return;
        }
        try{
            const result = await fetch("https://pokeapi.co/api/v2/pokemon/"+this.state.input_value);
            const parsedResult = await result.json();
            alert("RESPONSE FROM API\n"+JSON.stringify(parsedResult));
        }
        catch{
            alert("Error, No Pokemon Found With Given Name");
        }
    }
    HandleChange = event => {
        this.setState({
            input_value:event.target.value
        })
    }
    render() {
        return (
            <div className="homePrimary">
                <div className={this.state.input_focus?"noCover":"blackCover"}>
                    <h1 className="mainTag">Pokemon Search</h1>
                    
                    <input onBlur={this.setFocusLost} onFocus={this.setFocus} onChange={this.HandleChange}
                      className="pokeName" type="text" value={this.state.input_value} />
                    
                    <div>
                        <button onClick={this.QueryPokemon}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;