import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "./tileData";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <div className="UpcomingMovies">Upcoming Movies</div>
      </div>
    );
  }
}
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  });
  
  function SingleLineGridList(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  
  SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SingleLineGridList);
  interface Movies {
    Moviesname: string;
    Genres: string;
    Artists: string;
    ReleaseDateStart: Date;
    ReleaseDateEnd: Date;
  }
  
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  
  
  export default function BasicTable() {
    const [rows, setRows] = useState<food[]>(originalRows);
    const [searched, setSearched] = useState<string>("");
    const classes = useStyles();
  
    const requestSearch = (searchedVal: string) => {
      const filteredRows = originalRows.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    };
  
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };
  
    return (
      <>
        <Paper>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Moviesname</TableCell>
                  <TableCell align="right">Genres</TableCell>
                  <TableCell align="right">Artists&nbsp;(g)</TableCell>
                  <TableCell align="right">ReleaseDateStart&nbsp;(g)</TableCell>
                  <TableCell align="right">ReleaseDateEnd&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.Genres}</TableCell>
                    <TableCell align="right">{row.Artists}</TableCell>
                    <TableCell align="right">{row.ReleaseDateStart}</TableCell>
                    <TableCell align="right">{row.ReleaseDateEnd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <br />
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/"
        >
          Learn how to add search and filter to Material-UI Table here.
        </a>
      </>
    );
  }
  interface Movies {
    Moviesname: string;
    Genres: string;
    Artists: string;
    ReleaseDateStart: Date;
    ReleaseDateEnd: Date;
  }
  
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  
  
  export default function BasicTable() {
    const [rows, setRows] = useState<food[]>(originalRows);
    const [searched, setSearched] = useState<string>("");
    const classes = useStyles();
  
    const requestSearch = (searchedVal: string) => {
      const filteredRows = originalRows.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    };
  
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };
  
    return (
      <>
        <Paper>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Moviesname</TableCell>
                  <TableCell align="right">Genres</TableCell>
                  <TableCell align="right">Artists&nbsp;(g)</TableCell>
                  <TableCell align="right">ReleaseDateStart&nbsp;(g)</TableCell>
                  <TableCell align="right">ReleaseDateEnd&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.Genres}</TableCell>
                    <TableCell align="right">{row.Artists}</TableCell>
                    <TableCell align="right">{row.ReleaseDateStart}</TableCell>
                    <TableCell align="right">{row.ReleaseDateEnd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <br />
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/"
        >
          Learn how to add search and filter to Material-UI Table here.
        </a>
      </>
    );
  }

export default Home;
