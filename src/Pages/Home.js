function Home(props){
    return (
        <div className="container home">
            <div className="row homestuff">
                <img className="six columns homeimg" src="https://i.imgur.com/H4Rh6gc.jpg" alt="" />
                <div className="six columns homeinfo">
                    <h2>Hello!</h2>
                    <h4>I'm Garrett, a software engineer with an emphasis on front end design, based in Central Florida.</h4>
                </div>
            </div>
            <div className="twelve columns skills"><h2>Skills</h2></div>
            <div className="row iconrow">
                <img className="two columns skillicon" src="https://i.imgur.com/x3ZVFof.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/RPjiAf7.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/JlJuxwa.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/h5wdy2E.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/YGRIbwl.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/WVQyKeY.png" alt="" />
            </div>
            <div className="row iconrow">
                <img className="two columns skillicon" src="https://i.imgur.com/W1O8NAu.png" alt="" />
                <img className="two columns skillicon" src="https://i.imgur.com/Edi37bm.png" alt="" />
            </div>
        </div>
    )
  } 
  
  export default Home