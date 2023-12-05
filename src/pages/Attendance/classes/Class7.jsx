import React from "react";
import styled from "styled-components";

const Class7 = () => {
  const options = [
    {
      opt: "ALL",
    },
    {
      opt: "90%",
    },
    {
      opt: "80%",
    },
    {
      opt: "<70%",
    },
  ];
  const students = [
    { name: "John Doe", roll: "A001", attendance: "85%" },
    { name: "Jane Smith", roll: "A002", attendance: "92%" },
    { name: "Bob Johnson", roll: "A003", attendance: "78%" },
    { name: "Alice Williams", roll: "A004", attendance: "96%" },
    { name: "Charlie Brown", roll: "A005", attendance: "88%" },
    { name: "Eva Davis", roll: "A006", attendance: "75%" },
    { name: "Frank Miller", roll: "A007", attendance: "90%" },
    { name: "Grace Wilson", roll: "A008", attendance: "85%" },
    { name: "Harry Taylor", roll: "A009", attendance: "94%" },
    { name: "Ivy Carter", roll: "A010", attendance: "80%" },
    { name: "Jack Anderson", roll: "A011", attendance: "89%" },
    { name: "Kelly Thomas", roll: "A012", attendance: "93%" },
    { name: "Leo Brown", roll: "A013", attendance: "82%" },
    { name: "Mia Davis", roll: "A014", attendance: "97%" },
    { name: "Nathan White", roll: "A015", attendance: "86%" },
    { name: "Olivia Wilson", roll: "A016", attendance: "91%" },
    { name: "Peter Moore", roll: "A017", attendance: "79%" },
    { name: "Quinn Reed", roll: "A018", attendance: "88%" },
    { name: "Ryan Martin", roll: "A019", attendance: "74%" },
    { name: "Sophie Harris", roll: "A020", attendance: "92%" },
    { name: "Tyler Robinson", roll: "A021", attendance: "85%" },
    { name: "Uma Patel", roll: "A022", attendance: "90%" },
    { name: "Victor Clark", roll: "A023", attendance: "81%" },
    { name: "Wendy Hall", roll: "A024", attendance: "95%" },
    { name: "Xavier Lee", roll: "A025", attendance: "87%" },
    { name: "Yvonne Baker", roll: "A026", attendance: "89%" },
    { name: "Zachary King", roll: "A027", attendance: "83%" },
    { name: "Abigail Turner", roll: "A028", attendance: "94%" },
    { name: "Benjamin Davis", roll: "A029", attendance: "76%" },
    { name: "Catherine Adams", roll: "A030", attendance: "98%" },
  ];

  return (
    <Main>
      <div className="heading">
        <p>Class 11</p>
      </div>
      <div className="options">
        {options.map((items) => (
          <div className="cardItems">
            <p>{items.opt}</p>
          </div>
        ))}
      </div>
      <div className="list">
        <div className="total">
          <h3>Total Students {students.length}</h3>
        </div>
        <div className="stuList">
          {students.map((items) => (
            <div className="StuCard">
              <div className="image">
                <img
                  style={{
                    width: "4rem",
                    height: "4rem",
                    margin: "1rem",
                    borderRadius: "50%",
                  }}
                  src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4405.jpg?w=2000 "
                  alt=""
                  srcset=""
                />
              </div>
              <div className="details">
                <div className="name">{items.name}</div>
                <div className="">
                  <p>{items.roll}</p>
                </div>
              </div>
              <div className="attendance">
                <p style={{ fontWeight: "600", color: "rgba(39, 35, 114, 1)" }}>
                  {items.attendance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  margin: 1rem 5rem;
  .heading {
    p {
      font-size: 2rem;
      font-weight: 300;
    }
  }
  .options {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    .cardItems {
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      background-color: rgba(225, 224, 250, 1);
    }
  }

  .list {
    margin: 2rem 0;
    h3 {
      font-size: 1.4rem;
      font-weight: 200;
    }
  }
  .stuList {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .StuCard {
    padding: 0 1rem;
    border-radius: 1rem;
    background-color: rgba(225, 224, 250, 1);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    width: 22rem;
  }
  .details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .name {
    width: 6rem;
    display: flex;
  }
  .attendance {
    margin: auto;
  }
`;

export default Class7;
