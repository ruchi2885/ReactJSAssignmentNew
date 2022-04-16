import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";
import ReactModal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Tabs';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="header">
        <img src={logo} className="Header-logo" alt="logo"></img>

        <div className="button">
          {!isLoggedin && (
            <Button
              variant="contained"
              color="default"
              onClick={this.handleOpenModal}
            >
              Login
            </Button>
          )}
          {isLoggedin && (
            <Button variant="contained" color="default">
              Logout
            </Button>
          )}
          (
          <Button variant="contained" color="primary">
            Book Show
          </Button>
          )
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
         
        </ReactModal>
      </div>
    );
  }
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}
function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div sx={{ width: '100%' }}>
      <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tabs label="Item One"  />
          <Tabs label="Item Two"  />
          <Tabs label="Item Three" />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

const isLoggedin = false;

export default Header;