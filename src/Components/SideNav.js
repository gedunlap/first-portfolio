import { BiAt } from 'react-icons/bi';

// class SideNav extends React.Component {
//     render() {
//       return <BiAt/>
//     }
//   }

function SideNav(props) {
    return (
        <div className="navbar">
            <img className="navimg" src="https://i.imgur.com/KKKqqVW.png" alt="" />
            <BiAt className="navitem"/>
            <MdFace/>
        </div>
    )
}

export default SideNav