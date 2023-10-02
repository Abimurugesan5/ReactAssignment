import { useEffect, useState } from "react";
import './styles/Dashboard.css'
import Header from "./Header";
import './styles/Chart.css'
import Card from "./Card";
 import  Chart  from "./Chart";
const Dashboard = () => {
  const cardData = [
  { title: 'Total Revenues', content: '$2,129,430', image:require('./styles/Ellipse 11 (3).png'),image1:require('./styles/Label (1).png') },
  { title: 'Total Transactions', content: '1520',image:require('./styles/Ellipse 11 (2).png') },
  { title: 'Total Likes', content: '9721',image:require('./styles/Ellipse 11 (4).png')  },
  { title: 'Total Users', content: '9721.' ,image:require('./styles/Ellipse 11 (5).png') },

];
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  } else {
    return (
      <><div className="sidebar">
        <ul>
          <h1>Board.</h1>
          <li><img src={require('./styles/Vector.png')}></img>   Dashboard</li>
          <li><img src={require('./styles/transaction_icon.png')}></img> Transactions</li>
          <li><img src={require('./styles/user_icon.png')}></img>  Schedules</li>
          <li><img src={require('./styles/user_icon.png')}></img>  Users</li>
          <li><img src={require('./styles/setting_icon.png')}></img> Settings</li>

        </ul>
        <p className="help">Help</p>
        <p className="contact">Contact Us</p>

      </div>
         <div>
          <Header/>
         </div>
      <div className="dirctions">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} content={card.content} image1={card.image1} />
      ))}

      </div>
      <div className="chart">
        <Chart/>
      </div>
        </>
    );
   
  }
};


export default Dashboard;