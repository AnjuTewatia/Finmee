import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="contanier">
        {/*  Top Repositories and first container */}
        <div className="first-cont">
          <div className="heading">
            <h3>Top Repositories</h3>
            <button className="button">New</button>
          </div>
          <input type="text" placeholder="Find a repository ..." />
          <div className="allrepo">
            {/* Sample repository item */}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nIbAUU3VKtnXR6xNMCoCGsBRWEK4uwDpEg&usqp=CAU"
                alt=""
              />

              <p>Anju/bigbasket</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nIbAUU3VKtnXR6xNMCoCGsBRWEK4uwDpEg&usqp=CAU"
                alt=""
              />

              <p>Anju/bigbasket</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nIbAUU3VKtnXR6xNMCoCGsBRWEK4uwDpEg&usqp=CAU"
                alt=""
              />

              <p>Anju/bigbasket</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nIbAUU3VKtnXR6xNMCoCGsBRWEK4uwDpEg&usqp=CAU"
                alt=""
              />

              <p>Anju/bigbasket</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nIbAUU3VKtnXR6xNMCoCGsBRWEK4uwDpEg&usqp=CAU"
                alt=""
              />

              <p>Anju/bigbasket</p>
            </div>

            {/* ... Repeat similar list items for each repo */}
          </div>
          <p className="morebutton">show more</p>

          {/*  activity held recent */}
          <h2>Recent activity</h2>
          <div className="activity">
            <p>
              When you take actions across GitHub, we'll provide links to that
              activity here.
            </p>
            {/*  terms */}
          </div>
          <h2> Your teams</h2>
          <input placeholder="Find a team"></input>
        </div>

        {/*  Home section  and second container */}
        <div className="second-cont">
          <div className="second-cont-header">
            <div className="home">
              <div>
                <h1>Home</h1>
              </div>
              <div className="feed">
                <p>send feedback</p>
                <p> filter</p>
              </div>
            </div>
          </div>
          <div className="updates-section">
            <h4>Updates to your homepage feed</h4>
            <p>
              We've combined the power of the Following feed with the For you
              feed so there’s one place to discover content on GitHub. There’s
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design. ✨
            </p>
            <a className="learn-more" href="#">
              Learn more
            </a>
          </div>
          <div className="trending-section">
            <div className="trending">
              <p>Trending repositories</p>

              <p className="see">See more</p>
            </div>
            {/* Sample Trending Repository Item */}
            <div className="repository">
              <h4>AnjuTewatia/radioactive</h4>
              <p>Build a e-commerce Website</p>
              <p>JavaScript 10.2k</p>
            </div>
            <hr />
            <div className="repository">
              <h4>sachin/abc</h4>
              <p>React important question</p>
              <p>JavaScript 4.3k</p>
            </div>
          </div>

          <div className="bottom">
            <p>
              <span>Sachin</span>
              created a repository <br />
              15 hour ago
            </p>
            <p>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </p>
          </div>
          {/* 234 */}
          <div className="bottom">
            <p>
              <span>Sachin</span>
              created a repository <br />
              15 hour ago
            </p>
            <p>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </p>
          </div>
          {/* 56789 */}
          <div className="bottom">
            <p>
              <span>Sachin</span>
              created a repository <br />
              15 hour ago
            </p>
            <p>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </p>
          </div>
        </div>
        {/* third container */}
        <div className="third-cont">
          <div className="boxes">
            <h4>7 Strategies for end-to-end CI/CD governance</h4>
            <p>
              Best Practice for developing and maintaining a successfull model.
            </p>
            <button>Watch on Demand</button>
          </div>
          {/* latest changes */}
          <div className="boxes">
            <h3>Latest Changes</h3>
            <hr />
            <p>
              <span>16 Hours ago</span>
              <br />
              Githb Actions :Node_Option is Now restricted
            </p>
            <p>
              <span>16 Hours ago</span>
              <br />
              Githb Actions :Node_Option is Now restricted
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
