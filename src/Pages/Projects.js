function Projects(props){
  return (
      <div className="container projects">
        <div className="row proj">
          <img className="six columns" src="https://media.giphy.com/media/SlRlKMdri8MR0KRPbp/giphy.gif" alt="" />
          <div className="six columns projinfo">
            <h1>Adolescent Mutated Karate Frog</h1>
            <p>My first game! A platformer built in Unity using C# and Unity's free art / music.</p>
            <a href="https://play.unity.com/mg/other/my-first-unity-game-5183"><button>Play It!</button></a>
          </div>
        </div>
        <div className="projbreak"></div>
        <div className="row proj">
        <div className="six columns projinfo">
            <h1>XAegis</h1>
            <p>A post board built with React and Ruby on Rails.</p>
            <a href="https://xaegis.vercel.app/"><button>See It!</button></a>
          </div>
          <img className="six columns" src="https://media.giphy.com/media/FDAkDuuE46UFhrEDBv/giphy.gif" alt="" />
        </div>
        <div className="projbreak"></div>
        <div className="row proj">
          <img className="six columns" src="https://media.giphy.com/media/xZqGNc0I7B1GmpGH4w/giphy.gif" alt="" />
          <div className="six columns projinfo" id="lastproj">
            <h1>On The Run</h1>
            <p>A social running app built with team colaboration using React, Mongoose and MongoDB.</p>
            <a href="https://competent-jepsen-7ab1b3.netlify.app/"><button>See It!</button></a>
          </div>
        </div>
      </div>
  )
  } 
  
  export default Projects