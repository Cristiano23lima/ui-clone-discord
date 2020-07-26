import React from "react";

import { Container, Category, AddCategoryIcon, ChannelButton } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lol" />
      <ChannelButton channelName="CSGO" />
      <ChannelButton channelName="Battlefield" />
    </Container>
  );
};

export default ChannelList;
