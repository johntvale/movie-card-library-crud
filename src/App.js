import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movie-card-library-crud" component={ MovieList } />
        <Route
          exact
          path="/movie-card-library-crud/movies/new"
          render={ (props) => <NewMovie { ...props } /> }
        />
        <Route
          exact
          path="/movie-card-library-crud/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movie-card-library-crud/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/movie-card-library-crud" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
