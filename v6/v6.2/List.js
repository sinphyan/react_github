import React, { Component } from "react";
import Item from "./Item";

// List Rendering

// const info = {
//   name: "React Lesson",
//   price: 3200,
//   videos: 60,
//   teacher: "scars",
// };

const info = [
  { label: "name", date: "React Lesson" },
  { label: "price", date: "3200" },
  { label: "videos", date: "60" },
  { label: "teacher", date: "scars" },
];

class List extends Component {
  render() {
    return (
      <div>
        {/* 方法1 : 這個方法呈現出來的內容，不會按造上面的順序編排 不保證 */}
        {/* {Object.keys(info).map((key) => {
          const value = info[key];
          return (
            <item>
              {key}: {value}
            </item>
          );
        })} */}

        {/* 方法2 : 假設內部date重要 就要使用陣列 */}
        {/* {info.map((item) => (
          <Item>
            {item.label}: {item.date}
          </Item>
        ))} */}

        {info.map(({ label, date }) => (
          <Item>
            {label}: {date}
          </Item>
        ))}
      </div>
    );
  }
}

export default List;
