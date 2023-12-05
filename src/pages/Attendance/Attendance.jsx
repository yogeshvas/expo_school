import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { NavLink, Route } from "react-router-dom";

const Attendance = () => {
  const classes = [
    { class: "Class 1", link: "class1" },
    { class: "Class 2", link: "class2" },
    { class: "Class 3", link: "class3" },
    { class: "Class 4", link: "class4" },
    { class: "Class 5", link: "class5" },
    { class: "Class 6", link: "class6" },
    { class: "Class 7", link: "class7" },
    { class: "Class 8", link: "class8" },
    { class: "Class 9", link: "class9" },
    { class: "Class 10", link: "class10" },
    { class: "Class 11", link: "class11" },
    { class: "Class 12", link: "class12" },
  ];

  const debarred = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      attendance: "85%",
      name: "John Doe",
      roll: "A001",
      class: "Class 11",
    },
    {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      attendance: "92%",
      name: "Jane Smith",
      roll: "A002",
      class: "Class 11",
    },
    {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      attendance: "78%",
      name: "Bob Johnson",
      roll: "A003",
      class: "Class 11",
    },
    // Add more entries as needed
  ];

  return (
    <Main>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="search a student..."
        />
        <FaSearch className="icon" />
      </div>
      <div className="listBatches">
        <h1>List of Batches</h1>
        <div className="classes">
          <div className="card">
            {classes.map((item) => (
              <NavLink to={item.link}>
                <div className="listCard">{item.class}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="debarred">
        <h1>Debarred Students</h1>
        <div className="debarredStudents">
          {debarred.map((items) => (
            <div className="cardD">
              <div className="image">
                <img
                  src={items.image}
                  style={{ borderRadius: "1rem" }}
                  alt=""
                />
              </div>
              <div className="attendPerc">{items.attendance}</div>
              <div className="name">
                <p>{items.name}</p>
              </div>
              <div className="roll">
                <div className="left">
                  <p>{items.roll}</p>
                </div>
                <div className="right">
                  <p>{items.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

const Main = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  .search {
    text-align: center;
    .input {
      width: 20rem;
      height: 3rem;
      border-radius: 1rem;
      padding: 1rem;
      border: 1px solid rgba(39, 35, 114, 1);
      margin-right: 1rem;
    }
    .icon {
      color: rgba(39, 35, 114, 1);
      scale: 1.2;
      size: 10rem;
    }
  }
  .listBatches {
    margin: 2rem 10rem;
    h1 {
      font-weight: 400;
    }
  }
  .card {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .listCard {
    color: rgba(39, 35, 114, 1);

    padding: 1rem 4rem;

    text-align: center;
    border-radius: 1rem;
    background-color: rgba(225, 224, 250, 1);
    transition: 0.15s;

    a {
      text-decoration: none;
      color: rgba(39, 35, 114, 1);
      background-color: rgba(225, 224, 250, 1);
    }
    .active {
    }
  }
  .listCard:hover {
    color: white;
    background-color: rgba(39, 35, 114, 1);
  }

  .debarred {
    margin: 0rem 10rem;
    h1 {
      font-weight: 400;
    }
  }

  .cardD {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    background-color: #545195;
    margin: 1rem;
    border-radius: 1rem;
    transition: 0.5s;
  }
  .cardD:hover {
    color: black;
    background-color: #b0afbf;
  }
  .debarredStudents {
    display: flex;
  }
  .roll {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
`;

export default Attendance;
