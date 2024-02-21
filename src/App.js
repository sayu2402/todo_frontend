import React, { Component } from "react";

const tasks = [
  {
    id: 1,
    title: "Call Clients",
    description: "Call clients for overdue",
    completed: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewcompleted: false,
      tasklist: tasks,
    };
  }

  displayCompleted = (status) => {
    this.setState({ viewcompleted: status });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewcompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewcompleted ? "" : "active"}
        >
          Incompleted
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewcompleted } = this.state;
    const newItems = this.state.tasklist.filter(
      (item) => item.completed === viewcompleted
    );
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewcompleted ? "completed-todo" : ""
          }`}
          title={item.title}
        >
          {item.title}
        </span>

        <span>
          <button className="btn btn-info mr-2"> Edit </button>
          <button className="btn btn-danger mr-2">Delete</button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="context">
        <h1 className="text-black text-uppercase text-center my-4">
          Task Manager
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 max-auto p-0">
            <div className="card p-3">
              <div>
                <button className="btn btn-warning"> Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
