import React from "react";

function DisplayCard() {
  return (
    <div className="p-5 px-10 flex justify-center items-center">
      <div className="bg-[#D9FED3] px-3 rounded-3xl shadow-xl p-2 mt-2 font-light text-sm">
        We, at Weekday, are creating a go-to hub for uncovering the real issues
        candidates should be aware of before joining a company.{" "}
        <a className="font-bold underline" target="_blank" href="https://www.weekday.works/companies-work-culture-database">
          Access 150+ company reviews here
        </a>
      </div>
    </div>
  );
}

export default DisplayCard;
