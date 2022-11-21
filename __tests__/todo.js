const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");

var today = new Date().toLocaleString("en-CA");

var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1).toLocaleString("en-CA");

var dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate()-2).toLocaleString;

describe("Testing TodoList Suite", () => {
  beforeAll(() => {
    add({
      title: "Paneer",
      completed: false,
      duedate: yesterday,
    });
  });

  test("Adding new todo", () => {
    const todoitemscount = all.length;
    add({
      title: "biryani",
      completed: false,
      duedate: today,
    });

    add({
      title: "panipuri",
      completed: false,
      duedate: tommorow,
    });
    add({
      title:"pizza",
      completed:false,
      duedate: dayBeforeYesterday,
    })

    expect(all.length).toBe(todoitemscount + 3);
  });

  test("Marking a todo item as completed.", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Checking the retrieval of overdue items.", () => {
    expect(all[3].duedate).toBe(dayBeforeYesterday);
  });

  test("Checking the retrieval of overdue items.", () => {
    expect(all[0].duedate).toBe(yesterday);
  });

  test("Checking the retrieval of today's due items.", () => {
    expect(all[1].duedate).toBe(today);
  });

  test("Checking the retrieval of future due items.", () => {
    expect(all[2].duedate).toBe(tommorow);
  });
});
