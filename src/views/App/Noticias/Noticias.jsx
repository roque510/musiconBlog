import "./Noticias.css";
import React from "react";

// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";

function template() {
	const classes  = this.props;
  return (
    <div className="container">
      {/* Project 4 START */}
      <div className={`${classes.projects} ${classes.projects4}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>
                Some of Our Awesome Products - 4
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">Client: Apple</Badge>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Beautiful Project</h3>
                    <p className={classes.cardDescription}>
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Graphic Design"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={FormatPaint}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="CMS Admin Dashboard"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Marketing"
                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Built Audience"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">CLIENT: DJ KHALED</Badge>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Another One</h3>
                    <p className={classes.cardDescription}>
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
};

export default template;
