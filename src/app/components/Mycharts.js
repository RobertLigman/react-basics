import { PieChart, Pie, Legend, Tooltip,ResponsiveContainer,Cell,LineChart,CartesianGrid,XAxis,YAxis,Line} from 'recharts';
import React from 'react';
import {dataDaily} from '../api/dataChart';
let data = [
    
];
// const dataDaily = [
//     {name: 'dataDaily', value:2000,colors:"#eee"},
//     {name: 'Page B', value:8000,colors:"#444"},
//     {name: 'Page C', value:2000,colors:"#444"},
    
// ];

const dataYear = [
    {name: 'dataYear', value:2000,colors:"#eee"},
    {name: 'Page B', value:2000,colors:"#444"},
    {name: 'Page C', value:2000,colors:"#444"},
    {name: 'Page D', value:2000,colors:"#444"},
    {name: 'Page E', value:2000,colors:"#444"},
    {name: 'Page F', value:2000,colors:"#444"},
    {name: 'Page G', value:2000,colors:"#444"},
];
const dataMonth = [
    {name: 'dataMonth', value:10000,colors:"#aaa"},
    {name: 'Page B', value:2000,colors:"#aaa"},
    {name: 'Page C', value:2000,colors:"#aaa"},
    {name: 'Page D', value:2000,colors:"#f0f"},
    {name: 'Page E', value:2000,colors:"#f0f"},
 
];
const reportData=[
  
        {name: 'dataMonth', firstValue:10000,secondValue:200,colors:"#aaa"},
        {name: 'Page B', firstValue:2000,secondValue:200,colors:"#aaa"},
        {name: 'Page C', firstValue:2000,secondValue:200,colors:"#aaa"},
        {name: 'Page D', firstValue:2000,secondValue:200,colors:"#f0f"},
        {name: 'Page E', firstValue:2000,secondValue:200,colors:"#f0f"},
     
    
];
const optionMenu = ['Last Year','Last Month','Last Day'];
const optionValue =['dataYear','dataMonth','dataDaily']
const optionItems = optionMenu.map((option,i)=>{
    return <option key={i} value={optionValue[i]}>Period: {option}</option>
    
});
class Mycharts extends React.Component{
    constructor(props){
    super(props);
    this.state={value:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleReportChange=this.handleReportChange.bind(this);
    data=dataDaily;
    
    }
    handleReportChange(e){
        
    }
    handleChange(e){
        const event = e.target.value;
        this.setState({value:event});
        
        if(e.target.value==='dataDaily'){
            data=dataDaily;
            

        }
        else if(e.target.value==='dataYear'){
            data=dataYear;

        }
        else if(e.target.value==='dataMonth'){
            data=dataMonth;

        }
        
    }
     
    render(){
    return(
        <>
        <div className='bar-chart'>
        <div className='bar-title'><h3>Your Sales</h3>
                            <select onChange={this.handleChange}>{optionItems}</select>
                        </div>
        <ResponsiveContainer height="80%">
        
        <PieChart>
        <Pie  data={data} dataKey="value" cx="40%" cy="50%" innerRadius={70} outerRadius={110} fill="#82ca9d">
        {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={data[index].colors}/>
      ))
    }
        </Pie>
        
        <Legend iconType='circle' align="right" layout='vertical' verticalAlign="middle"/>
        <Tooltip/>
        
       </PieChart>
       </ResponsiveContainer>
       
       </div>


       <div className="graph-chart">
       <div className='bar-title'><h3>Report</h3>
                            <select onChange={this.handleReportChange}>{optionItems}</select>
                        </div>
        <ResponsiveContainer height="80%">
        
        <LineChart data={reportData}>
        <CartesianGrid strokeSolidarray="3 3" />
        <XAxis/>
  <YAxis />
  {/* <Tooltip />
  <Legend /> */}
  <Line type="monotone" activeDot={false} dot={false} dataKey="firstValue" stroke="#8884d8" />
  <Line type="monotone" activeDot={false} dot={false} dataKey="secondValue" stroke="#82ca9d" />
        
       
       </LineChart>
       
       </ResponsiveContainer>
       </div>
       </>
    )
}
   
}
export default Mycharts;