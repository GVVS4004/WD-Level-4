const todoList = () => {
    all = [];
    const add = (item) => {
      all.push(item);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");
  
    var today = new Date().toLocaleString("en-CA");
  
    var tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + 1).toLocaleString("en-CA");
    const overdue = () => {
      var od = [];
      for (var i = 0; i < all.length; i++) {
        if (all[i].duedate <= yesterday) {
          od.push(all[i]);
        }
      }
      return od;
    };
  
    const dueToday = () => {
      var dt = [];
      for (var i = 0; i < all.length; i++) {
        if (all[i].duedate == today) {
          dt.push(all[i]);
        }
      }
      return dt;
    };
  
    const dueLater = () => {
      var dl = [];
      for (var i = 0; i < all.length; i++) {
        if (all[i].duedate >= tommorow) {
          dl.push(all[i]);
        }
      }
      return dl;
    };
  
    const toDisplayableList = (list) => {
      var OUTPUT_STRING = "", i = 0;
      for (i = 0; i < list.length - 1; i++) {
        if (list[i].duedate != today) {
          OUTPUT_STRING =
            OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].duedate + "\n";
        } else {
          if (list[i].completed != true) {
            OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " " + "\n";
          } else {
            OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " " + "\n";
          }
        }
      }
  
      if (list[i].duedate != today) {
        OUTPUT_STRING =
          OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].duedate;
      } else {
        if (list[i].completed != true) {
          OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " ";
        } else {
          OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " ";
        }
      }
  
      return OUTPUT_STRING;
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;