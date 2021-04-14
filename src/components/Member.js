import React, { useState } from "react";
import MemberItem from "./MemberItem";

function Member() {
  const [items, putItems] = React.useState([
    {
      japan: "ホアン・ミン・タン ",
      eng: "Hoang Minh Tan",
      link: "https://www.facebook.com/hoangminhtanlk56/",
    },
    {
      japan: "レ・スアン・ティン",
      eng: "Le Xuan Thinh",
      link: "https://www.facebook.com/toi.canban.99",
    },
    {
      japan: "タオ・ドゥック・ヴェット",
      eng: "Tao Duc Viet",
      link: "https://www.facebook.com/viet.tao.7",
    },
    {
      japan: "ヴォー・クアン・タイン・ダット",
      eng: "Vo Quang Thanh Dat",
      link: "https://www.facebook.com/profile.php?id=100006933034189",
    },
    {
      japan: "ドー・ドゥック・トゥン",
      eng: "Do Duc Thuan",
      link: "https://www.facebook.com/mater.ji.10",
    },
  ]);

  return (
    <section className="section">
      <h1 className="section-title">チーム6</h1>
      <div className="panel-heading">
        {items.map((item) => (
          <MemberItem item={item} />
        ))}
      </div>
    </section>
  );
}

export default Member;
