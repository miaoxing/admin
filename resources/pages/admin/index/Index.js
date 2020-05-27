import React from "react";
import {Col, Row, Card, ListGroup} from '@miaoxing/bootstrap';
import color from 'color';
import {Page} from "@miaoxing/a-page";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import api from '@miaoxing/api';
import {Box} from 'rebass';
import {cls, floatRight} from '@miaoxing/css';

export default class extends React.Component {
  state = {
    charts: [],
    stats: []
  }

  componentDidMount() {
    api.cur({loading: true}).then(ret => this.setState(ret));
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
                <Box
                  as={Card}
                  color="white"
                  sx={{
                    border: 0,
                    background: `linear-gradient(135deg, ${stat.color}, ${color(stat.color).lighten(0.2).string()})`,
                  }}
                >
                  <Box as={Card.Body} fontWeight="light">
                    <Box as={Card.Title} fontWeight="light">{stat.title}</Box>
                    <Box as={Card.Text} mb={0} fontSize="3em">{stat.value}</Box>
                    <Box as="i" className={stat.icon} sx={{
                      opacity: .15,
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      right: '2rem',
                      fontSize: '5rem',
                    }}/>
                  </Box>
                </Box>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Box as={Card} mt={4}>
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
      </Box>

      <Box as={Card} mt={4}>
        <Card.Header>
          更新日志
          <a href="#" target="_blank" className={floatRight()}>
            更多{' '}<i className="fa fa-angle-right"/>
          </a>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className={cls({borderBottom: 0})}>
            <a href="#" target="_blank">Cras justo odio</a>
            <Box display="inline" color="muted" sx={{float: 'right'}}>2020-01-01</Box>
          </ListGroup.Item>
          <ListGroup.Item className={cls({borderBottom: 0})}>
            <a href="#" target="_blank">Dapibus ac facilisis in</a>
            <Box display="inline" color="muted" sx={{float: 'right'}}>2020-01-01</Box>
          </ListGroup.Item>
          <ListGroup.Item className={cls({borderBottom: 0})}>
            <a href="#" target="_blank">Vestibulum at eros</a>
            <Box display="inline" color="muted" sx={{float: 'right'}}>2020-01-01</Box>
          </ListGroup.Item>
        </ListGroup>
      </Box>
    </Page>;
  }
}
