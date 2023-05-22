export const articleHeaders = [
  { field: 'headline', headerName: 'Headline', width: 300 },
  { field: 'author', headerName: 'Author', width: 130 },
  { field: 'source', headerName: 'Source', width: 80 },
  { field: 'bias', headerName: 'Bias', width: 130 },
  { field: 'published_date', headerName: 'Publised Date', width: 130 },
  { field: 'url', headerName: 'URL', width: 130 },
  { field: 'article_content', headerName: 'Article Content', width: 400 },
]

export const articleRows = [
  { id: 1, headline: "Trump focuses on immigration issues ahead of midterm elections", author: 'Grace Segers', source: 'CBS', published_date: '2018-10-30', url: 'https://www.cbsnews.com/news/trump-focuses-on-immigration-issues-ahead-of-midterm-elections/?intcid=CNM-00-10abd1h', article_content:'Earlier this month, President Trump offered a campaign strategy for Republicans in the midterm elections...', bias: 'immigration'},

  { id: 2, headline: "Clinton: Trump campaign built on \u2018prejudice and paranoia\u2019", author: 'Dan Merica', source: 'CNN', published_date: '2016-08-25', url: 'https://www.cnn.com/2016/08/25/politics/hillary-clinton-alt-right-speech-donald-trump-kkk/index.html', article_content:'Clinton is painting Trump as outside the norm of American politics The \"alt-right\" is a unorganized group that pushes racist, homophobic and sexist content online Hillary Clinton issued a blistering takedown of Donald Trump Thursday, accusing him of racism and arguing that \u201cfringe\u201d elements have taken over the Republican Party...', bias: 'racial'},

  { id: 3, headline: "Parkland shooting looms large in the Broward County School Board race", author: 'Cassie Spodak', source: 'CNN', published_date: '2018-08-27', url: 'https://www.cbsnews.com/news/trump-focuses-on-immigration-issues-ahead-of-midterm-elections/?intcid=CNM-00-10abd1h', article_content:'Campaign signs sprout from the ground here at Northwest Regional Library, an early voting site in Coral Springs, Florida. Standing in front of the polls, two candidates on the ballot are having a conversation...', bias: 'socioeconomic'},

  { id: 4, headline: "Trump nominates Brett Kavanaugh to Supreme Court", author: 'Samuel Chamberlain', source: 'FOX', published_date: '2018-07-09', url: 'https://www.foxnews.com/politics/trump-nominates-brett-kavanaugh-to-supreme-court', article_content:'President Trump nominates Judge Brett Kavanaugh to the Supreme Court. President Trump nominated appeals court judge Brett Kavanaugh to the Supreme Court Monday night to replace retiring Justice Anthony Kennedy...', bias: 'abortion'},

  { id: 5, headline: "For Immigrants, Election Promises Relief From An 'Atmosphere Of Terror'", author: 'Joel Rose', source: 'NPR', published_date: '2020-11-18', url: 'https://www.npr.org/2020/11/18/935873090/for-immigrants-election-promises-relief-from-an-atmosphere-of-terror', article_content:'While campaigning in November 2019, Joe Biden talked with a protester about his stance on deportations at a town hall at Lander University in Greenwood, S.C. The Biden administration says it will rein in Immigration and Customs Enforcement, starting with a temporary moratorium on deportations....', bias: 'immigration'},

  { id: 6, headline: "Trump casts doubt on the legitimacy of the election and refuses to condemn White supremacists in chaotic debate", author: 'Maeve Reston', source: 'CNN', published_date: '2020-09-30', url: 'https://www.cnn.com/2020/09/29/politics/us-election-first-presidential-debate/index.html', article_content:'At the end of a rancorous and chaotic debate \u2013 in which President Donald Trump tried to bulldoze challenger Joe Biden with insults, slashing interruptions and callous attacks on Biden\u2019s family \u2013 the President questioned the legitimacy of the November election, refused to say whether he would concede should he lose and declined to forcefully condemn White supremacists....', bias: 'racial'},

  { id: 7, headline: "Biden says Catholic faith guides policies but gets hit on abortion, religious freedom", author: 'Caleb Parke', source: 'FOX', published_date: '2020-10-30', url: 'https://www.foxnews.com/politics/biden-catholic-vote-2020-election-religious-liberty', article_content:'Joe Biden is touting his Catholic faith as groups are hitting him on issues held near and dear to the faithful and opposed by the church, including religious freedom for nuns and abortion....', bias: 'abortion'},

  { id: 8, headline: "Oregon approves new taxes to address Medicaid costs", author: '', source: 'CBS', published_date: '2018-01-24', url: 'https://www.cbsnews.com/news/oregon-approves-new-taxes-to-address-medicaid-costs/?intcid=CNM-00-10abd1h', article_content:"\u00a0Oregon approved taxes on hospitals, health insurers and managed care companies in an unusual special election Tuesday that asked voters \u2014 and not lawmakers \u2014 how to pay for Medicaid costs that now include coverage of hundreds of thousands of low-income residents added to the program's rolls under the Affordable Care Act", bias: 'socioeconomic'},

  { id: 9, headline: "How Trump Has Put His Mark On Policy, Slowly", author: 'Scott Horsley', source: 'NPR', published_date: '2017-11-06', url: 'https://www.npr.org/2017/11/06/561449128/how-trump-has-put-his-mark-on-policy-slowly', article_content:"During his tenure as president, Trump has signed a series of executive orders rolling back Obama-era regulations. During his tenure as president, Trump has signed a series of executive orders rolling back Obama-era regulations...", bias: 'immigration'},

  { id: 10, headline: "Rising job opportunities for White working-class men could point to additional Trump support", author: 'Brittany De Lea', source: 'FOX', published_date: '2020-10-09', url: 'https://www.foxnews.com/politics/white-working-class-job-prospects-climb-trump-economy', article_content:'Earlier this month, President Trump offered a campaign strategy for Republicans in the midterm elections...', bias: 'socioeconomic'},
]

export const electionHeaders = [
  { field: 'year', headerName: 'Year', width: 180 },
  { field: 'office', headerName: 'Office', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 150 },
  { field: 'party', headerName: 'Party', width: 130 },
  { field: 'vote_per', headerName: 'Vote %', width: 130 },
  { field: 'vote_count', headerName: 'Vote Count', width: 130 },
]

export const electionRows = [
  { id: 1, year: "2020", office: "Pres", state: "AL", last_name: "Trump", party: "REP", vote_per:"0.620316", vote_count:"1441170"},

  { id: 2, year: "2020", office: "Pres", state: "AL", last_name: "Biden", party: "DEM", vote_per:"0.365700", vote_count:"849624"},

  { id: 3, year: "2020", office: "Pres", state: "AL", last_name: "Jorgensen", party: "IND", vote_per:"0.010836", vote_count:"25176"},

  { id: 4, year: "2020", office: "Pres", state: "AK", last_name: "Trump", party: "REP", vote_per:"0.528331", vote_count:"189951"},

  { id: 5, year: "2020", office: "Pres", state: "AK", last_name: "Biden", party: "DEM", vote_per:"0.528331", vote_count:"153778"},

  { id: 6, year: "2010", office: "House", state: "WI", last_name: "Kagen", party: "DEM", vote_per:"0.451232", vote_count:"118646"},

  { id: 7, year: "2010", office: "Senate", state: "WI", last_name: "Johnson", party: "REP", vote_per:"0.518575", vote_count:"1125999"},

  { id: 8, year: "2010", office: "Sentate", state: "WI", last_name: "Feingold", party: "DEM", vote_per:"0.470199", vote_count:"1020958"},

  { id: 9, year: "2010", office: "House", state: "WY", last_name: "Lummis", party: "REP", vote_per:"0.704186", vote_count:"131661"},

  { id: 10, year: "2010", office: "House", state: "WY", last_name: "Wendt", party: "DEM", vote_per:"0.244789", vote_count:"45768"},
]

export const twitterHeaders = [
  { field: 'year', headerName: 'Year', width: 80 },
  { field: 'created', headerName: 'Created', width: 130 },
  { field: 'state', headerName: 'State', width: 80 },
  { field: 'owner', headerName: 'Owner', width: 80 },
  { field: 'abortion', headerName: 'Abortion', width: 80 },
  { field: 'race', headerName: 'Race', width: 80 },
  { field: 'immigration', headerName: 'Immigration', width: 130 },
  { field: 'socio_eco', headerName: 'Socioeconomic', width: 150 },
  { field: 'norm_neg', headerName: 'Normalized Negative', width: 130 },
  { field: 'norm_pos', headerName: 'Normalized Positive', width: 130 },
  { field: 'compound', headerName: 'Compound', width: 130 },
  { field: 'tweet', headerName: 'Twitter', width: 130 },
]

export const twitterRows = [
  { id: 1, year: "2020", created: "2020-08-04", state: "OR", owner: "-", abortion: "NULL", race:"racial", immigration: "NULL", socio_eco: "justice", norm_neg:"0", norm_pos: "1", compound: "0.8934", tweet:"-"},

  { id: 2, year: "2016", created: "2016-01-15", state: "CA", owner: "-", abortion: "NULL", race:"NULL", immigration: "reform", socio_eco: "NULL", norm_neg:"1", norm_pos: "0", compound: "-0.7964", tweet:"-"},

  { id: 3, year: "2018", created: "2018-12-22", state: "NJ", owner: "-", abortion: "NULL", race:"NULL", immigration: "border", socio_eco: "security", norm_neg:"0.2318181818181818", norm_pos: "0.7681818181818182", compound: "0.5609", tweet:"-"},
  
  { id: 4, year: "2019", created: "2019-06-17", state: "FL", owner: "-", abortion: "NULL", race:"racial", immigration: "NULL", socio_eco: "middle", norm_neg:"0", norm_pos: "1", compound: "-0.2732", tweet:"-"},

  { id: 5, year: "2016", created: "2016-07-22", state: "TX", owner: "-", abortion: "NULL", race:"NULL", immigration: "border", socio_eco: "NULL", norm_neg:"1", norm_pos: "0", compound: "-0.3182", tweet:"-"},

]

export const votersHeaders = [
  { field: 'year', headerName: 'Year', width: 100 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'population', headerName: 'Population', width: 150 },
  { field: 'registered', headerName: 'Registered', width: 150 },
  { field: 'voted', headerName: 'Voted', width: 150},
  { field: 'norm_regis', headerName: 'Norm. Registered Vote', width: 180 },
  { field: 'norm_pop', headerName: 'Norm. Population Vote', width: 180 },
]

export const votersRows = [
  { id: 1, year: "2020", state: "AL", population: "3,769,000", registered: "2,527,000", voted:"2,247,00", norm_regis:"0.889197", norm_pop: "0.596179"},
  { id: 2, year: "2020", state: "AK", population: "528,000", registered: "383,000", voted: "330,000", norm_regis:"0.861619", norm_pop: "0.625"},
  { id: 3, year: "2020", state: "AZ", population: "5,638,000", registered: "3,878,000", voted: "3,649,000", norm_regis:"0.940949", norm_pop: "0.647215"},
  { id: 4, year: "2020", state: "AR", population: "2,283,000", registered: "1,361,000", voted: "1,186,000", norm_regis:"0.871418", norm_pop: "0.519492"},
  { id: 5, year: "2020", state: "CA", population: "30,342,000", registered: "18,001,000", voted: "16,893,000", norm_regis:"0.938448", norm_pop: "0.556753"},
  { id: 6, year: "2010", state: "WA", population: "5,095,000", registered: "3,367,000", voted: "2,692,000", norm_regis:"0.799525", norm_pop: "0.528361"},
  { id: 7, year: "2010", state: "WV", population: "1,420,000", registered: "883,000", voted: "581,000", norm_regis:"0.657984", norm_pop: "0.409155"},
  { id: 8, year: "2010", state: "WI", population: "4,291,000", registered: "2,908,000", voted: "2,258,00", norm_regis:"0.776479", norm_pop: "0.526218"},
  { id: 9, year: "2010", state: "WY", population: "441,000", registered: "239,000", voted: "190,000", norm_regis:"0.794979", norm_pop: "0.46228"},
  { id: 10, year: "2010", state: "US", population: "229,690,000", registered: "137,263,000", voted: "95,987,000", norm_regis:"0.699293", norm_pop: "0.417898"},

]


export const softwareRows = [
  {type: "Database", software: "Postgres", usage: "Store collected data such as articles, election results, and Twitter data", issues: "Since everyone in our group needs to have the same data in their local machine, it is difficult for us to keep the data up to date.", url: "https://www.postgresql.org/"},
  {type: "Database Library", software: "psycopg2", usage: "Produce an engine that allows us to create a database", issues: "N/A", url: "https://pypi.org/project/psycopg2/"},
  { type: "Database Library", software: "sqlalchemy", usage: "Implement scripts to create Postgresql tables and insert data from json files", issues: "N/A", url: "https://www.sqlalchemy.org/"},
  {type: "Webscraper Library", software: "BeautifulSoup4", usage: "Receives links and scrape article headlines and contents", issues: "N/A", url: "https://pypi.org/project/beautifulsoup4/"},
  {type: "Webscraper Library", software: "Selenium", usage: "Create a program that can interact with dynamic websites (to scrape article links)", issues: "Since each website is built differently, we need to write a script for each individual news site. Additionally, this process takes a while to run because we need to put a sleep timer between each action (to avoid getting blocked by the sites).", url: "https://www.selenium.dev/"},
  { type: "Visualization Tool", software: "Matplotlib", usage: "Creates standard graphs that allow us to visualize our data", issues: "N/A", url: "https://matplotlib.org/"},
  { type: "Visualization Tools", software: "Seaborn", usage: "A Python library that we use to create visualization for data explorations and analysis.", issues: "N/A", url: "http://seaborn.pydata.org/"},
  { type: "Frontend Framework", software: "ReactJs", usage: "Used to create an interactive website that allows audience to carefully review our project findings", issues: "N/A", url: "https://react.dev/"},
  { type: "Visualization Tool", software: "Recharts", usage: "A React Js library that allows us to create interactive graphs", issues: "Limited graph types provided", url: "https://recharts.org/en-US"},
  { type: "Visualization Tool", software: "Leaflet", usage: "A React Js library that allows us to create the choropleth graph displaying election results by state", issues: "t took us a while to understand how we should organize the data to input into the given graph component", url: "https://react-leaflet.js.org/"},
  { type: "UI Library", software: "Material UI", usage: "A React Js library that allows us to apply pre-built components that enhances the UI aspect of our website", issues: "N/A", url: "https://mui.com/"},
  {type: "Backend", software: "Node Js", usage: "The main building block of our backend framework. It is used to establish connections between our front end, backend, and database", issues: "Since all of us have limited knowledge of Node Js, we have to learn how to work with this using documentations and tutorials", url: "https://nodejs.org/en"},
  {type: "Backend", software: "Express.js", usage: "Used to build RESTful APIs", issues: "N/A", url: "https://expressjs.com/"},
  {type: "Backend", software: "Sequelize", usage: "Used to write query requests to Postgres", issues: "N/A", url: "https://sequelize.org/"},
  { type: "Version Control", software: "Git/Github", usage: "We use Github to maintain our code version control. We have four independent repositories to store our data, scraping scripts, ML models, and the ", issues: "It is fairly difficult to work with Git for such a big project when all of us have limited knowledge of how this software works. For instance, we have to make sure each of us are working on separate branches to avoid code deprication", url: "https://github.com/"},
]