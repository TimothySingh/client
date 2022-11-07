import './AboutMe.css';
import Me from '../../assets/Home/Me.jpg';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src= {Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Why SovTech?</h1>
        <p className="a-sub">
          I wish to work at SovTech because I am an enthusiastic developer that wishes to grow my skills in development in a well functioning
          and cohesive environment.
        </p>
        <p className="a-desc">
        I know that SovTech inspires young developers and helps push them to new heights. 
        SovTech has an amazing work environment. The company culture is fun and dynamic. 
        I also believe SovTech can be a highly beneficial launchpad for my career where I will be 
        able to advance my skills and be able to grow my abilities to adapt and change where needed.

        This website is a testament to that as this is my first project done using React. Now I 
        can start building my skills in this sector of development as well!
        </p>
    
      </div>
    </div>
  );
};

export default About;