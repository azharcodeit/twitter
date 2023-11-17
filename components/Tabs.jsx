"use client";
import React, { useState } from "react";

const Tabs = ({ sticky, children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className={`flex flex-col h-auto w-full`}>
      <div
        className={`flex flex-row w-full items-center border-b border-darker-gray-bg ${
          sticky
            ? "sticky z-20 top-14 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80"
            : ""
        }`}
      >
        {children.map((child) => (
          <div
            key={child.props.label}
            className={`flex w-full justify-center hover:bg-black/10 transition duration-200 cursor-pointer`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            <div
              className={`{w-[${Math.round((1 / children.length) * 100)}%]}`}
            >
              <button
                key={child.props.label}
                className={`${
                  activeTab === child.props.label
                    ? "font-twitter-chirp-bold text-main-secondary"
                    : "font-twitter-chirp text-slate-500"
                } py-4`}
              >
                {child.props.label}
              </button>
              <div
                className={`${
                  activeTab === child.props.label
                    ? "w-full h-[4px] bg-main-primary rounded-lg"
                    : "h-[4px]"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div> 
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
const Tab = ({ label, children }) => {
  return (
    <div label={label} className={`hidden `}>
      {children}
    </div>
  );
};
export { Tabs, Tab };
