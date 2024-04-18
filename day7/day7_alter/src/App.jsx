import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Notification from './components/Notification/Notification';
import ChildComp from './components/Notification/Child';
import Table from './components/Table/Table';
import Tabs from './components/Tabs/Tabs';
import Accordion from './components/Accordion/Accordion';
import Carousel from './components/Carousel/Carousel';


const cols = [
  {
    label:"First Name",
    value: "firstname"
  },
  {
    label:"Last Name",
    value: "lastname"
  },
  {
    label:"Age",
    value: "age"
  },

]

const images = [
  {
    src: "https://picsum.photos/200/300?random=1"
  },
  {
    src: "https://picsum.photos/200/300?random=1"
  },
  {
    src: "https://picsum.photos/200/300?random=1"
  }
  ,
  {
    src: "https://picsum.photos/200/300?random=1"
  }
]

const rows = [
  {id:1,firstname:"John",lastname:"Doe",age:25},
  {id:2,firstname:"Jane",lastname:"Doe",age:22},
  {id:3,firstname:"James",lastname:"Doe",age:27},
  {id:4,firstname:"Jenny",lastname:"Doe",age:24},
  {id:5,firstname:"Shivam",lastname:"Gupta",age:26},
  {id:6,firstname:"Rahul",lastname:"Gupta",age:23},
  {id:7,firstname:"Rohit",lastname:"Gupta",age:28},
  {id:8,firstname:"Rohan",lastname:"Gupta",age:29},
  {id:9,firstname:"Raj",lastname:"Gupta",age:30},
]


const tabs = [
  {
    title: "Photos",
    data: "Photos Lorem Ipsum"
  },
  {
    title: "Item 2",
    data: "Item 2 Lorem Ipsum"
  },
  {
    title: "Videos",
    data: "Videos Lorem Ipsum"
  }
]

function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


function App() {
  const [visible,setVisible] = useState(false);
  const [toastText,setToastText] = useState("Lorem Ipsum");

  const toast = (text) =>{
    setToastText(text);
    setVisible(true);
  }


  return (
    <>
     {/* <TemporaryDrawer /> */}
     <section>
      <h1>Notification</h1>
      <Notification visible={visible} setVisible={setVisible} text={toastText}/>
      <button onClick={()=>setVisible(!visible)}>Toggle</button>
      <ChildComp toast={toast}/>
     </section>

     <section>
      <h1> Table Comp</h1>
      <Table rows={rows} cols={cols} itemsperpage={5}/>
     </section>

     <section>
      <h1> Tabs Comp</h1>
      <Tabs tabs={tabs}/>
     </section>

     <section>
      <h1> Accordion Comp</h1>
      <Accordion title="Hello World" data={"Lorem Ipsum Dolor"}/>
     </section>

     <section>
      <h1>Carousel Component</h1>
      <Carousel images={images} />
     </section>
      {/* <h1>Vite + Rea
      
      ct</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
