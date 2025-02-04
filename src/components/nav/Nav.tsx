import Title from "./Title";
import Item from "./Item";
import ItemText from "./ItemText";
import HomeIcon from "../../assets/icons/home.svg?react";
import CreditCardIcon from "../../assets/icons/creditCard.svg?react";
import DollarIcon from "../../assets/icons/dollar.svg?react";
import ActivityIcon from "../../assets/icons/activity.svg?react";
import HelpIcon from "../../assets/icons/help.svg?react";

const Nav = () => {
  return (
    <nav
      css={{
        width: "320px",
        height: "100vh",
        paddingTop: "24px",
        fontSize: "24px",
        borderRight: "1px solid #00116619",
      }}
    >
      <Title />
      <ul css={{ marginTop: "24px" }}>
        <Item to="/">
          <HomeIcon />
          <ItemText>Home</ItemText>
        </Item>

        <Item to="/crypto">
          <CreditCardIcon />
          <ItemText>Crypto</ItemText>
        </Item>

        <Item to="/sendandrequest">
          <DollarIcon />
          <ItemText>Send and Request</ItemText>
        </Item>

        <Item to="/wallet">
          <CreditCardIcon />
          <ItemText>Wallet</ItemText>
        </Item>

        <Item to="/activity">
          <ActivityIcon />
          <ItemText>Activity</ItemText>
        </Item>

        <Item to="/help">
          <HelpIcon />
          <ItemText>Help</ItemText>
        </Item>
      </ul>
    </nav>
  );
};

export default Nav;
