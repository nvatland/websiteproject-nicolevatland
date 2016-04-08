# websiteproject-nicolevatland
Technologies used: HTML5, CSS3, jQuery, Google Visualization


index.html
--------
The index.html file contains the resume portion of the project. The page is broken up into six sections: Intro, Profile, Experience, Skills, Education, and Contact. There is a side navigation bar that will scroll between the different sections. The main navigation bar is positioned underneath the logo, but once the user scrolls it becomes fixed to the top. This bar allows the user to navigate between the resume page (index.html) and the sales data page (data.html). When the user first loads the page, the logo (svg) is animated using CSS3 Animations. The layout is handled primarily through Flex-box. The site is responsive and the layout will change when the browser width is less than 500px.


data.html
--------
The data.html file contains the sales data portion of the project. I created three charts to represent the data: Total Sales by Region, Average Quarterly Sales per Manager, and 2013-2014 Quarterly Sales. I used Google Visualization to create the charts. Each region has its own color scheme based on the Material Design palette. The main color is from the 300-level, with lighter and darker colors being used when needed for the color variations. When the user hovers over a data point they are able to get more information about that point. When the browser width is less than 740px, the charts will stack in order to make the charts easier to see. 

## Chart Explanations 
#### Total Sales by Region
Compares the total sales in each region  between 2013 and 2014.
#### Average Quarterly Sales per Manager
Finds each regional manager's average sales per quarter. The bars are color coded based on the region.
#### 2013-2014 Quarterly Sales
Plots each region's quarterly sales between 2013 and 2014.
