import React from "react";
import styled from "styled-components";
import Profile from "./Profile/Profile";
import TagsList from "./Tags/TagsList";

const Bar = styled.aside``;
const SideBar: React.FC = () => {
  return (
    <>
      <Profile></Profile>
      <TagsList />
    </>
  );
};

export default SideBar;
