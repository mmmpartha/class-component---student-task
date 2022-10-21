import React from "react";
import { Component } from "react";

export default class Studentdetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      view: false,
      studentsList: [
        {
          name: "arun",
          gender: "male",
          marks: "20",
        }, {
          name: "jinusha",
          gender: "female",
          marks: "55",
        }, {
          name: "ramya",
          gender: "female",
          marks: "75",
        }, {
          name: "ajeesh",
          gender: "male",
          marks: "60",
        }, {
          name: "jaison",
          gender: "male",
          marks: "65",
        }, {
          name: "megha",
          gender: "female",
          marks: "49",
        }, {
          name: "thinushiya",
          gender: "female",
          marks: "80",
        }, {
          name: "raja",
          gender: "male",
          marks: "35",
        }, {
          name: "kumar",
          gender: "male",
          marks: "40",
        }, {
          name: "rose",
          gender: "female",
          marks: "75",
        },
        {
          name: "smith",
          gender: "male",
          marks: "90",
        }, {
          name: "warner",
          gender: "male",
          marks: "80",
        }, {
          name: "harleen deol",
          gender: "female",
          marks: "50",
        }, {
          name: "mithali",
          gender: "female",
          marks: "85",
        }, {
          name: "dhoni",
          gender: "male",
          marks: "99",
        },
      ]
    }
    this.Remove = this.Remove.bind(this)
  }

  Remove(e) {
    e.preventDefault()
    this.setState({ view: true })
  }

  render() {
    return (
      <>
        <div>

          <table border={2}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Genter</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.view ?
                  this.state.studentsList.filter((el) => el.name !== this.state.name).map((student) => {
                    return (
                      <tr>
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.marks}</td>
                      </tr>
                    )
                  }) : <></>
              }
            </tbody>
          </table>
        </div>
        <br />
        <div>
          <form onSubmit={this.Remove}>
            <input placeholder="Enter your name" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </>
    )
  }
}
