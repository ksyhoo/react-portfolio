import React from "react";
import Description from "./../pages/description/description";
import Projects from "./../pages/projects/projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{
                enter: 450,
                exit: 0
              }}
              exit={false}
            >
              <Switch location={location}>
                <Route exact path="/" render={() => <Description />} />
                <Route path="/desciption" render={() => <Description />} />
                <Route path="/projects" render={() => <Projects />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </main>
  );
};

export default Main;
