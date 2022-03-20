import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Announce from './Announce';
import Notes from './Notes';
import Videos from './Videos';
import Assignment from './Assignment';
import CodeIde from './CodeIde';
import Question from './Question';

function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs( {classData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab label="Announcment" {...a11yProps(0)} />
          <Tab label="Lecture Notes" {...a11yProps(1)} />
          <Tab label="Video Recordings" {...a11yProps(2)} />
          <Tab label="Assignments" {...a11yProps(3)} />
          <Tab label="Code </>" {...a11yProps(4)} />
          <Tab label="Q & A" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Announce classData={classData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Notes classData={classData}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Videos classData={classData}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Assignment classData={classData}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CodeIde/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Question/>
      </TabPanel>
    </Box>
  );
}
