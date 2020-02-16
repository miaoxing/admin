import React from "react";
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import styled from 'styled-components';
import app from 'app';
import color from 'color';
import {Page} from "@miaoxing/page";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";

const GradientCard = styled(Card)`
   background: linear-gradient(
    135deg,
    ${props => props.color},
    ${props => color(props.color).lighten(0.2).string()}
  );
`;

const CardIcon = styled.i`
  opacity: .15;
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  right: 2rem;
  font-size: 5rem;
`;

export default class extends React.Component {
  state = {
    charts: [],
    stats: []
  }

  componentDidMount() {
    $.get(app.url('admin-api/index/index'), {loading: true})
      .then(ret => this.setState(ret));
  }

  render() {
    return <Page
      raw
      breadcrumb={false}
    >
      <Card>
        <Card.Header>
          数据统计
        </Card.Header>
        <Card.Body>
          <Row>
            {this.state.stats.map(stat => (
              <Col key={stat.title} lg={3} md={6} sm={12}>
                <GradientCard color={stat.color} text="white" className="border-0">
                  <Card.Body className="font-weight-light">
                    <Card.Title className="font-weight-light">{stat.title}</Card.Title>
                    <Card.Text style={{fontSize: '3em'}} className="mb-0">
                      {stat.value}
                    </Card.Text>
                    <CardIcon className={stat.icon}/>
                  </Card.Body>
                </GradientCard>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>
          交易走势
        </Card.Header>
        <Card.Body>
          <Chart
            height={400}
            data={this.state.charts}
            scale={{
              date: {
                type: 'time',
                mask: 'MM-DD'
              }
            }}
            forceFit
          >
            <Legend/>
            <Axis name="date"/>
            <Axis name="value"/>
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="line"
              position="date*value"
              size={2}
              color={"name"}
              shape={"smooth"}
            />
            <Geom
              type="point"
              position="date*value"
              size={4}
              shape={"circle"}
              color={"name"}
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
            />
          </Chart>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>
          更新日志
          <a href="#" target="_blank" className="float-right">
            更多{' '}<i className="fa fa-angle-right"/>
          </a>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="border-bottom-0">
            <a href="#" target="_blank">Cras justo odio</a>
            <span className="float-right text-muted">2020-01-01</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-bottom-0">
            <a href="#" target="_blank">Dapibus ac facilisis in</a>
            <span className="float-right text-muted">2020-01-01</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-bottom-0">
            <a href="#" target="_blank">Vestibulum at eros</a>
            <span className="float-right text-muted">2020-01-01</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Page>;
  }
}
